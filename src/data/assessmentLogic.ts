import { AssessmentData, RiskPredictionResult, ScreeningCategoryType, ScoreBreakdownItem } from '../types';

/**
 * 2023 International Evidence-based Guideline for the Assessment and Management of PCOS
 * Primary Scientific Reference: Monash University / ESHRE / ASRM Guidelines (2023 Update)
 * 
 * CORE CLINICAL ARCHITECTURE:
 * 1. Symptom Screening Summary (Reported cycle patterns, androgen signs, metabolic indicators)
 * 2. Transparent 0-100 Numeric Screening Indicator (Rotterdam proxy: Ovulatory [0-40] + Androgen [0-40] + Metabolic [0-20])
 * 3. Evaluation Guidance (Questions for doctor, clinical laboratory & ultrasound demystification)
 * 4. Lifestyle & Wellness Overview (Sleep, stress, movement, nutrition - STRICTLY 0 POINTS in PCOS indicator)
 * 5. Feature Integration (Direct connections to CycleTracker, DietPlanner, Recipes, EducationHub)
 */

export const MANDATORY_ASSESSMENT_DISCLAIMER =
  "HerLytics provides educational information and wellness guidance. This screening indicator is not a diagnosis or a validated probability of having PCOS. Consult a qualified healthcare professional for medical evaluation.";

/**
 * BMI Calculation with Adult vs. Adolescent Interpretation
 * Reference: WHO Child Growth Standards & 2023 International PCOS Guideline
 */
export function calculateBmiProfile(
  age: number,
  menarcheAge: number,
  heightCm: number,
  weightKg: number
): {
  bmiValue: number;
  category: string;
  isAdolescent: boolean;
  explanation: string;
} {
  if (!heightCm || !weightKg || heightCm <= 0 || weightKg <= 0) {
    return {
      bmiValue: 21.5,
      category: 'Unspecified',
      isAdolescent: false,
      explanation: 'Body measurements incomplete. Calculated standard baseline placeholder.',
    };
  }

  const heightM = heightCm / 100;
  const bmiValue = parseFloat((weightKg / (heightM * heightM)).toFixed(1));
  const yearsPostMenarche = menarcheAge ? Math.max(0, age - menarcheAge) : 10;
  const isAdolescent = age < 19 || yearsPostMenarche < 3;

  if (isAdolescent) {
    return {
      bmiValue,
      category: 'Adolescent Growth Phase',
      isAdolescent: true,
      explanation:
        'For adolescents and those within 3 years of first menstruation, adult BMI thresholds do not directly apply due to active pubertal bone and muscle development. Pediatric percentile charts evaluated by a pediatrician provide the appropriate developmental context. Weight alone is never used to determine PCOS.',
    };
  }

  // Adult WHO standard screening classifications
  let category = 'Standard Healthy Range (18.5–24.9)';
  if (bmiValue < 18.5) {
    category = 'Underweight Range (<18.5)';
  } else if (bmiValue >= 25.0 && bmiValue < 30.0) {
    category = 'Higher BMI Range (25.0–29.9)';
  } else if (bmiValue >= 30.0) {
    category = 'Elevated BMI Range (≥30.0)';
  }

  const explanation =
    'Adult BMI is an anthropometric screening indicator of general metabolic context, not a diagnosis or cause of PCOS. PCOS occurs across all body types, and weight changes are often metabolic reflections rather than root causes.';

  return {
    bmiValue,
    category,
    isAdolescent: false,
    explanation,
  };
}

/**
 * Area B: Menstrual Pattern Evaluation
 * Evaluates Q6, Q7, Q8, Q9 considering age, years post-menarche, and hormonal contraception
 * Scaled 0 to 40 Points based on Rotterdam Criterion 1 (Ovulatory Dysfunction)
 */
export function evaluateMenstrualPattern(data: AssessmentData): {
  ovulatoryPoints: number; // 0, 15, 30, or 40
  isIrregular: boolean;
  patternSummary: string;
  clinicalNote: string;
  contributingFactors: string[];
} {
  const factors: string[] = [];
  const onHormonalBC =
    data.medicalConditionsMedications?.onHormonalBirthControl ||
    data.medicalHistory?.onHormonalContraception === 'yes' ||
    data.missedPeriodsGaps === 'contraception_stops_bleeding';

  if (onHormonalBC) {
    return {
      ovulatoryPoints: 0,
      isIrregular: false,
      patternSummary: 'Hormonal Contraception in Use (Bleeding pharmacologically regulated)',
      clinicalNote:
        'You reported active hormonal birth control. Combined pills, hormonal IUDs, and implants regulate or suppress natural bleeding. Natural ovulatory regularity cannot be accurately screened while using hormonal contraception.',
      contributingFactors: ['Hormonal birth control active (suppresses ovarian rhythm; 0 ovulatory points awarded)'],
    };
  }

  const age = data.age || 26;
  const menarcheAge = data.menarcheAge || 13;
  const yearsPostMenarche = data.yearsSinceMenarche ?? Math.max(0, age - menarcheAge);
  const isAdolescent = age < 19 || yearsPostMenarche < 3;

  // Check severe gaps or prolonged oligomenorrhea / amenorrhea
  const hasSevereGaps =
    data.missedPeriodsGaps === 'absent_over_90' ||
    data.cycleLengthCategory === 'absent_over_90' ||
    data.cycleRegularity === 'unpredictable_absent' ||
    data.periodsPerYear === '<4';

  const hasModerateIrregularity =
    data.missedPeriodsGaps === 'gaps_35_to_90' ||
    data.cycleLengthCategory === 'very_long_46_90' ||
    data.cycleLengthCategory === 'long_36_45' ||
    data.cycleRegularity === 'frequent_missed' ||
    data.cycleLengthDays > 35 ||
    data.cycleLengthDays < 21 ||
    data.periodsPerYear === '4-8';

  const hasMildVariation =
    data.cycleRegularity === 'somewhat_irregular' ||
    data.patternsChangedOverTime === 'was_regular_now_irregular';

  if (isAdolescent) {
    if (hasSevereGaps || data.cycleLengthDays > 45) {
      factors.push('Cycle gaps exceeding adolescent physiologic ranges (>45–90 days)');
      return {
        ovulatoryPoints: 15,
        isIrregular: true,
        patternSummary: 'Cycle Gaps Exceeding Adolescent Variation (>45–90 days)',
        clinicalNote:
          'While menstrual variability is normal in the first 3 years post-menarche, intervals consistently longer than 45 days or gaps over 90 days exceed standard adolescent physiological ranges and warrant clinical discussion.',
        contributingFactors: factors,
      };
    }
    return {
      ovulatoryPoints: 0,
      isIrregular: false,
      patternSummary: 'Within Normal Adolescent Developmental Variation',
      clinicalNote:
        'Your reported cycle timing reflects normal pubertal hypothalamic-pituitary-ovarian axis maturation.',
      contributingFactors: ['Normal adolescent pubertal transition window'],
    };
  }

  // Adult Criteria: Check Confirmed Regular First
  if (
    data.cycleRegularity === 'regular' &&
    (data.missedPeriodsGaps === 'no_gaps_over_35' || !data.missedPeriodsGaps) &&
    (!data.cycleLengthDays || (data.cycleLengthDays >= 21 && data.cycleLengthDays <= 35))
  ) {
    return {
      ovulatoryPoints: 0,
      isIrregular: false,
      patternSummary: 'Regular Ovulatory Pattern (21–35 Days)',
      clinicalNote:
        'Reported cycle length (21–35 days) with minimal variation is consistent with healthy adult ovulatory physiology.',
      contributingFactors: ['Consistent regular cycle interval (21–35 days)'],
    };
  }

  if (hasSevereGaps) {
    factors.push('Prolonged amenorrhea / cycle gaps exceeding 90 days');
    return {
      ovulatoryPoints: 40,
      isIrregular: true,
      patternSummary: 'Prolonged Amenorrhea or Gaps Exceeding 90 Days',
      clinicalNote:
        'Gaps longer than 90 days or fewer than 4 periods annually represent chronic ovulatory infrequency (oligo/amenorrhea), a primary clinical criterion under international diagnostic guidelines.',
      contributingFactors: factors,
    };
  }

  if (hasModerateIrregularity) {
    factors.push('Cycle length >35 days or 4–8 periods per year');
    return {
      ovulatoryPoints: 30,
      isIrregular: true,
      patternSummary: 'Irregular Cycles Outside Standard 21–35 Day Interval',
      clinicalNote:
        'Reported cycle lengths exceeding 35 days, fewer than 8 cycles per year, or intervals under 21 days indicate irregular ovulatory function per the 2023 Monash Guideline.',
      contributingFactors: factors,
    };
  }

  if (hasMildVariation) {
    factors.push('Mild timing fluctuation (>7–9 day variation between consecutive months)');
    return {
      ovulatoryPoints: 15,
      isIrregular: true,
      patternSummary: 'Mild Cycle Timing Fluctuation (>7–9 day monthly variation)',
      clinicalNote:
        'Reported cycle length varies month to month. Tracking ovulation biomarkers (cervical mucus or basal body temperature) will help determine if ovulation is occurring consistently.',
      contributingFactors: factors,
    };
  }

  if (data.cycleRegularity === 'not_sure') {
    return {
      ovulatoryPoints: 0,
      isIrregular: false,
      patternSummary: 'Cycle Regularity Not Confirmed / Uncertain',
      clinicalNote:
        'Cycle history was marked as uncertain. Incomplete cycle records are evaluated neutrally to prevent misleading false-positive risk scores. Prospective cycle logging is recommended.',
      contributingFactors: ['Uncertain cycle pattern (neutrally scored as 0)'],
    };
  }

  return {
    ovulatoryPoints: 0,
    isIrregular: false,
    patternSummary: 'Regular Ovulatory Pattern (21–35 Days)',
    clinicalNote:
      'Reported cycle length (21–35 days) with minimal variation is consistent with healthy adult ovulatory physiology.',
    contributingFactors: ['Consistent regular cycle interval (21–35 days)'],
  };
}

/**
 * Area C: Clinical Androgen Symptom Evaluation
 * Evaluates Q10 (acne), Q11 (hirsutism), Q12 (scalp hair), Q13 (prior evaluation)
 * Scaled 0 to 40 Points based on Rotterdam Criterion 2 (Clinical Hyperandrogenism)
 */
export function evaluateAndrogenSigns(data: AssessmentData): {
  androgenPoints: number; // 0, 15, 25, or 40
  hasSignificantSigns: boolean;
  reportedMarkers: string[];
  clinicalNote: string;
  suddenOnsetFlag: boolean;
  contributingFactors: string[];
} {
  const markers: string[] = [];
  const factors: string[] = [];
  let suddenOnset = false;

  // Acne evaluation
  const acne = data.acneExperience;
  if (acne === 'severe_cystic') {
    markers.push('Severe or cystic inflammatory acne resistant to standard topical care');
    factors.push('Severe / cystic inflammatory acne');
  } else if (acne === 'moderate_jawline') {
    markers.push('Moderate persistent inflammatory acne on chin, jawline, or cheeks');
    factors.push('Moderate persistent jawline acne');
  } else if (acne === 'mild_period') {
    markers.push('Mild periodic blemishes');
  }

  // Facial / body hair evaluation (Ferriman-Gallwey screening proxy)
  const hair = data.facialBodyHair;
  if (hair === 'significant_frequent_removal') {
    markers.push('Significant coarse terminal hair on androgen-sensitive areas (chin, chest, abdomen)');
    factors.push('Significant coarse terminal hair in androgen-sensitive zones');
  } else if (hair === 'moderate_chin_chest_abdomen') {
    markers.push('Moderate coarse dark hair on chin, upper lip, or lower abdomen');
    factors.push('Moderate coarse chin / facial hair');
  } else if (hair === 'mild_few_hairs') {
    markers.push('Mild coarse hair (stray chin or lip hairs)');
    factors.push('Mild isolated stray coarse hairs');
  }

  if (data.hairProgression === 'sudden_months') {
    suddenOnset = true;
    markers.push('Reported rapid progression of hair growth over recent months');
    factors.push('Sudden progression of hair growth over recent months (clinical priority)');
  }

  // Scalp hair thinning (Ludwig scale screening proxy)
  const scalp = data.scalpThinning;
  if (scalp === 'significant_shedding' || scalp === 'noticeable_crown_diffuse') {
    markers.push('Noticeable diffuse crown thinning or significant hair shedding');
    factors.push('Noticeable diffuse crown thinning / shedding');
  } else if (scalp === 'mild_widening_part') {
    markers.push('Mild widening along central hair part line');
    factors.push('Mild widening along central part line');
  }

  // Scoring allocation on 0-40 scale
  let androgenPoints = 0;
  const isMultiple =
    (hair === 'moderate_chin_chest_abdomen' || hair === 'significant_frequent_removal') &&
    (acne === 'severe_cystic' || acne === 'moderate_jawline' || scalp !== 'none_normal');

  const isSevereSingle =
    hair === 'significant_frequent_removal' ||
    acne === 'severe_cystic' ||
    scalp === 'significant_shedding';

  const isModerateSingle =
    hair === 'moderate_chin_chest_abdomen' ||
    acne === 'moderate_jawline' ||
    scalp === 'noticeable_crown_diffuse' ||
    scalp === 'mild_widening_part';

  if (isMultiple || isSevereSingle) {
    androgenPoints = 40;
  } else if (isModerateSingle) {
    androgenPoints = 25;
  } else if (factors.length > 0) {
    androgenPoints = 15;
  }

  let clinicalNote = 'No prominent physical signs of elevated androgens were reported.';
  if (markers.length > 0) {
    clinicalNote = `Reported physical markers include: ${markers.join('; ')}. In clinical evaluation, these features are correlated with biochemical hormone assays (total/free testosterone, DHEAS, and androstenedione).`;
  }

  return {
    androgenPoints,
    hasSignificantSigns: androgenPoints >= 25,
    reportedMarkers: markers,
    clinicalNote,
    suddenOnsetFlag: suddenOnset,
    contributingFactors: factors,
  };
}

/**
 * Area D: Medical and Family History Evaluation
 * Evaluates Q14 (glucose/metabolic), Q15 (family history), Q16 (medical conditions/medications)
 * Scaled 0 to 20 Points for Metabolic / Familial Context
 */
export function evaluateMetabolicAndFamily(data: AssessmentData): {
  metabolicPoints: number; // 0, 10, or 20
  confounderNotes: string[];
  metabolicSummary: string;
  contributingFactors: string[];
} {
  const confounders: string[] = [];
  const factors: string[] = [];
  let metabolicPoints = 0;
  const metabolicFindings: string[] = [];

  // Confounder: Hormonal birth control
  if (
    data.medicalConditionsMedications?.onHormonalBirthControl ||
    data.medicalHistory?.onHormonalContraception === 'yes'
  ) {
    confounders.push(
      'Current hormonal contraceptive use: suppressive effect on ovarian androgens and creates artificial withdrawal bleeds.'
    );
  }

  // Confounder: Thyroid
  if (
    data.medicalConditionsMedications?.hasThyroidCondition ||
    (data.medicalHistory?.thyroidCondition && data.medicalHistory.thyroidCondition !== 'none' && data.medicalHistory.thyroidCondition !== 'not_sure')
  ) {
    confounders.push(
      'Diagnosed thyroid disorder: Hypothyroidism and hyperthyroidism independently alter menstrual frequency and metabolism.'
    );
  }

  // Confounder: Prolactin
  if (
    data.medicalConditionsMedications?.hasElevatedProlactin ||
    data.medicalHistory?.elevatedProlactin === 'yes'
  ) {
    confounders.push(
      'Elevated prolactin (hyperprolactinemia): Can suppress pituitary gonadotropin release, causing cycle gaps that mimic PCOS.'
    );
  }

  // Confounder: Acute stress / Rapid weight change (Hypothalamic Amenorrhea)
  if (
    data.medicalConditionsMedications?.hasRecentAcuteStressOrWeightLoss ||
    data.medicalHistory?.extremeStressOrWeightChange
  ) {
    confounders.push(
      'Recent severe stress or rapid weight change: Can trigger functional hypothalamic cycle suppression, which must be clinically distinguished from PCOS.'
    );
  }

  // Personal glucose & insulin indicators
  const glucose = data.bloodGlucoseMetabolic;
  if (
    glucose === 'prediabetes_impaired_glucose' ||
    glucose === 'type_2_diabetes' ||
    glucose === 'gestational_diabetes' ||
    data.metabolicHealth?.glucoseHistory === 'prediabetes' ||
    data.metabolicHealth?.glucoseHistory === 'diabetes'
  ) {
    metabolicPoints = 20;
    factors.push('Documented personal history of impaired blood glucose regulation / prediabetes / diabetes (+20 pts)');
    metabolicFindings.push('Documented personal history of impaired blood glucose regulation / prediabetes / diabetes');
  } else if (data.metabolicHealth?.darkenedSkinFolds === 'yes') {
    metabolicPoints = 15;
    factors.push('Acanthosis Nigricans velvety skin folds (+15 pts)');
    metabolicFindings.push('Acanthosis Nigricans (velvety darkened skin folds, an indicator of underlying insulin resistance)');
  }

  // Family history
  const family = data.familyPCOSDiabetes;
  if (family === 'first_degree_pcos' || family === 'both_pcos_and_diabetes' || (!family && data.familyHistoryDetails?.familyPCOS === 'yes')) {
    if (metabolicPoints < 10) metabolicPoints = 10;
    factors.push('First-degree family history of PCOS (mother or sister) (+10 pts)');
    metabolicFindings.push('First-degree family history of PCOS (mother or sister)');
  } else if (family === 'family_type2_diabetes' || (!family && data.familyHistoryDetails?.familyType2Diabetes === 'yes')) {
    if (metabolicPoints < 10) metabolicPoints = 10;
    factors.push('Family history of Type 2 Diabetes (+10 pts)');
    metabolicFindings.push('Family history of Type 2 Diabetes');
  }

  let metabolicSummary = 'No personal history of elevated blood glucose or known first-degree metabolic conditions reported.';
  if (metabolicFindings.length > 0) {
    metabolicSummary = `Relevant reported metabolic and family context: ${metabolicFindings.join('; ')}.`;
  }

  return {
    metabolicPoints,
    confounderNotes: confounders,
    metabolicSummary,
    contributingFactors: factors,
  };
}

/**
 * Area E: Lifestyle & Wellbeing Overview
 * Evaluates Q17 (sleep), Q18 (stress), Q19 (activity), Q20 (eating pattern)
 * STRICTLY 0 POINTS TO PCOS SCREENING INDICATOR!
 */
export function evaluateLifestyleAndWellbeing(data: AssessmentData): {
  sleepSummary: string;
  stressSummary: string;
  activitySummary: string;
  nutritionSummary: string;
  distinctionNote: string;
} {
  // Sleep
  let sleepSummary = '7 to 8.5 hours of sleep with restful quality reported.';
  if (data.sleepHoursHabit === 'under_6' || data.sleepQualityHabit === 'frequently_disrupted') {
    sleepSummary = 'Reported short duration (<6 hours) or frequently disrupted sleep patterns.';
  } else if (data.sleepHoursHabit === '6_to_7' || data.sleepQualityHabit === 'fair') {
    sleepSummary = 'Reported moderate sleep duration (6–7 hours) with occasional sleep disruption.';
  }

  // Stress
  let stressSummary = 'Daily stress levels described as low to manageable.';
  if (data.stressLevelCurrent === 'severe_chronic') {
    stressSummary = 'Severe or chronic daily stress reported, which can elevate hypothalamic-pituitary-adrenal axis tone.';
  } else if (data.stressLevelCurrent === 'high_persistent') {
    stressSummary = 'Persistent high stress levels reported.';
  } else if (data.stressLevelCurrent === 'moderate') {
    stressSummary = 'Moderate daily stress levels reported.';
  }

  // Activity
  let activitySummary = 'Regular moderate physical activity (3–4 days/week) reported.';
  if (data.physicalActivityLevel === 'sedentary_under_30m') {
    activitySummary = 'Predominantly sedentary weekly routine (<30 mins/week structured movement).';
  } else if (data.physicalActivityLevel === 'light_1_2_days') {
    activitySummary = 'Light physical activity 1–2 days/week.';
  } else if (data.physicalActivityLevel === 'active_5_plus_days') {
    activitySummary = 'Highly active weekly movement schedule (5+ days/week with varied training).';
  }

  // Nutrition
  let nutritionSummary = 'Balanced whole-foods eating pattern with consistent meals.';
  if (data.eatingPattern === 'frequent_processed_skipped') {
    nutritionSummary = 'Frequent refined carbohydrates, processed food choices, or irregular skipped meals reported.';
  } else if (data.eatingPattern === 'mediterranean_low_gi') {
    nutritionSummary = 'Mediterranean-style pattern prioritizing low-glycemic carbohydrates and healthy fats.';
  } else if (data.eatingPattern === 'plant_based') {
    nutritionSummary = 'Plant-based (vegetarian or vegan) dietary pattern.';
  } else if (data.eatingPattern === 'specific_restrictions') {
    nutritionSummary = 'Specialized dietary guidelines or food sensitivities observed.';
  }

  const distinctionNote =
    'Lifestyle habits (sleep, exercise, nutrition, and stress) are evaluated exclusively to guide supportive daily wellness habits. Per international clinical guidelines, lifestyle factors do NOT independently establish or cause PCOS and receive zero weighting in your clinical screening score.';

  return {
    sleepSummary,
    stressSummary,
    activitySummary,
    nutritionSummary,
    distinctionNote,
  };
}

/**
 * Full Guideline-Based Assessment Result Engine
 * Seamlessly integrates the 20 questions into a transparent, defensible 0-100 screening result.
 */
export function calculateGuidelineAssessmentResult(data: AssessmentData): RiskPredictionResult {
  const bmiInfo = calculateBmiProfile(data.age, data.menarcheAge, data.heightCm, data.weightKg);
  const cycleEval = evaluateMenstrualPattern(data);
  const androgenEval = evaluateAndrogenSigns(data);
  const metabolicEval = evaluateMetabolicAndFamily(data);
  const lifestyleEval = evaluateLifestyleAndWellbeing(data);

  // Check Prior Formal Diagnosis
  const isPriorDiagnosed = data.priorPCOSEvaluation === 'formally_diagnosed_pcos';

  // Calculate Granular 0-100 Score
  // Ovulatory [0-40] + Androgen [0-40] + Metabolic [0-20]
  let numericScreeningScore = cycleEval.ovulatoryPoints + androgenEval.androgenPoints + metabolicEval.metabolicPoints;

  // Determine Screening Category
  let screeningCategory: ScreeningCategoryType = 'routine_monitoring';
  let categoryTitle = 'Routine Baseline Monitoring';
  let categorySubtitle = 'Low clinical screening indicator based on reported baseline';
  let riskCategory: RiskPredictionResult['riskCategory'] = 'Lower estimated risk';
  let summary =
    'Your reported menstrual cycle patterns and physical observations are currently consistent with standard baseline ovulatory function. Continue supportive daily habits and routine preventative check-ups.';

  if (isPriorDiagnosed) {
    screeningCategory = 'established_diagnosis';
    categoryTitle = 'Established PCOS Diagnosis — Active Care & Hormone Balance';
    categorySubtitle = 'Reported prior clinical diagnosis by a healthcare professional';
    riskCategory = 'Elevated estimated risk';
    numericScreeningScore = 85;
    summary =
      'You reported a prior formal diagnosis of PCOS by a medical provider. Your assessment focuses on evidence-based monitoring, managing insulin sensitivity, tracking cycle ovulatory health, and collaborating with your clinical team.';
  } else if (numericScreeningScore >= 60 || (cycleEval.ovulatoryPoints >= 30 && androgenEval.androgenPoints >= 25)) {
    // Meets Rotterdam screening criteria (concurrent irregular cycles + clinical hyperandrogenism)
    screeningCategory = 'clinical_evaluation_recommended';
    categoryTitle = 'Clinical Consultation Recommended';
    categorySubtitle = 'Concurrent ovulatory irregularity and physical androgen signs reported';
    riskCategory = 'Elevated estimated risk';
    summary =
      'You reported both irregular menstrual cycles and noticeable physical signs associated with elevated androgens. Under the 2023 International Evidence-based Guideline for PCOS, these concurrent features strongly warrant a comprehensive clinical evaluation with a physician or gynecologist.';
  } else if (numericScreeningScore >= 30) {
    // Isolated criteria or relevant metabolic indicators
    screeningCategory = 'discuss_with_doctor';
    categoryTitle = 'Discussion with Healthcare Provider Advised';
    categorySubtitle = 'Isolated cycle variation or physical/metabolic indicators observed';
    riskCategory = 'Moderate estimated risk';
    summary = cycleEval.isIrregular
      ? 'You reported menstrual cycle timing outside typical ovulatory ranges. Because ovulatory variation can stem from several hormonal or metabolic factors, discussing these patterns with a healthcare provider is a recommended proactive step.'
      : 'You reported physical or metabolic features that warrant discussion at your next routine healthcare visit to support long-term metabolic and endocrine wellness.';
  } else {
    screeningCategory = 'routine_monitoring';
    categoryTitle = 'Routine Baseline Monitoring';
    categorySubtitle = 'Low clinical screening indicator based on reported baseline';
    riskCategory = 'Lower estimated risk';
    summary =
      'Your reported menstrual cycle patterns and physical observations are currently consistent with standard baseline ovulatory function. Continue supportive daily habits and routine preventative check-ups.';
  }

  // Clamp numeric score to 0-100 range
  numericScreeningScore = Math.min(Math.max(numericScreeningScore, 0), 100);

  // Key factors summary tags for UI
  const keyFactors: string[] = [
    `Cycle Pattern: ${data.cycleRegularity === 'regular' ? 'Regular (21–35d)' : 'Irregular / Variable'}`,
    `BMI Context: ${bmiInfo.bmiValue} (${bmiInfo.category})`,
    androgenEval.reportedMarkers.length > 0
      ? `Androgen signs: ${androgenEval.reportedMarkers.length} reported`
      : 'No prominent androgen signs reported',
    metabolicEval.metabolicPoints > 0
      ? 'Metabolic context noted'
      : 'Standard metabolic baseline',
  ];

  // Missing data handling note
  let missingDataNote = 'All primary assessment sections completed.';
  const uncertainFields: string[] = [];
  if (data.cycleRegularity === 'not_sure') uncertainFields.push('cycle regularity');
  if (data.bloodGlucoseMetabolic === 'never_tested_not_sure') uncertainFields.push('blood glucose history');
  if (data.familyPCOSDiabetes === 'not_sure') uncertainFields.push('family history');
  if (uncertainFields.length > 0) {
    missingDataNote = `Unconfirmed answers for ${uncertainFields.join(', ')} were evaluated neutrally (0 points) to prevent arbitrary score inflation.`;
  }

  // Detailed Score Breakdown Object
  const scoreBreakdown = {
    ovulatory: {
      domain: 'Menstrual Cycle & Ovulatory Patterns',
      score: cycleEval.ovulatoryPoints,
      maxScore: 40,
      contributingFactors: cycleEval.contributingFactors,
      rationale:
        'Evaluates adult 21–35 day intervals, oligomenorrhea, and adolescent post-menarche duration per Rotterdam Criterion 1.',
    },
    androgen: {
      domain: 'Clinical Signs of Elevated Androgens',
      score: androgenEval.androgenPoints,
      maxScore: 40,
      contributingFactors: androgenEval.contributingFactors,
      rationale:
        'Evaluates coarse terminal hair in androgen-sensitive zones, persistent cystic acne, and crown thinning per Rotterdam Criterion 2.',
    },
    metabolic: {
      domain: 'Metabolic History & First-Degree Genetics',
      score: metabolicEval.metabolicPoints,
      maxScore: 20,
      contributingFactors: metabolicEval.contributingFactors,
      rationale:
        'Evaluates personal prediabetes/T2D, Acanthosis Nigricans, and family PCOS/T2D as metabolic risk modifiers.',
    },
    lifestyle: {
      domain: 'Lifestyle, Wellbeing & Habits',
      score: 0,
      maxScore: 0,
      contributingFactors: ['Zero points awarded (Strict separation of lifestyle habits from clinical criteria)'],
      rationale:
        'Sleep, stress, exercise, and diet are supportive wellness factors and do NOT increase the clinical screening score.',
    },
    totalScore: numericScreeningScore,
    maxTotalScore: 100,
  };

  // Factors to discuss with doctor
  const factorsToDiscuss: RiskPredictionResult['factorsToDiscuss'] = [];

  if (cycleEval.isIrregular) {
    factorsToDiscuss.push({
      category: 'Menstrual Cycle & Ovulation',
      observation: cycleEval.clinicalNote,
      suggestedQuestions: [
        'Would you recommend checking my baseline reproductive hormone levels (such as total & free testosterone, DHEAS, and LH/FSH ratio)?',
        'Should we test serum TSH (thyroid) and prolactin to rule out other causes of irregular cycles?',
      ],
    });
  }

  if (androgenEval.reportedMarkers.length > 0) {
    factorsToDiscuss.push({
      category: 'Signs of Elevated Androgens',
      observation: androgenEval.clinicalNote,
      suggestedQuestions: [
        'Would a comprehensive hormone blood panel be appropriate to assess androgen levels?',
        androgenEval.suddenOnsetFlag
          ? 'Given the relatively rapid progression of hair changes, are there specific tests needed to evaluate adrenal or ovarian sources?'
          : 'What evidence-based medical or dermatological approaches do you recommend for persistent symptoms?',
      ],
    });
  }

  if (metabolicEval.metabolicPoints > 0 || bmiInfo.bmiValue >= 27.0) {
    factorsToDiscuss.push({
      category: 'Metabolic & Insulin Health',
      observation: metabolicEval.metabolicSummary,
      suggestedQuestions: [
        'Would you recommend checking a 2-hour oral glucose tolerance test (OGTT), fasting glucose, or HbA1c to screen for insulin resistance?',
        'Should we evaluate a fasting lipid profile to monitor cardiovascular health?',
      ],
    });
  }

  // Always include ultrasound demystification question if discussion advised
  if (screeningCategory !== 'routine_monitoring') {
    factorsToDiscuss.push({
      category: 'Clinical Pelvic Imaging',
      observation:
        'Pelvic ultrasound evaluates ovarian morphology (antral follicle count) and endometrial lining thickness, which form part of standard diagnostic criteria.',
      suggestedQuestions: [
        'Would a pelvic ultrasound be clinically helpful in my evaluation, taking into account my age and time since menarche?',
      ],
    });
  }

  // Feature connections directly linking to application modules
  const featureConnections: RiskPredictionResult['featureConnections'] = {
    cycleTracker: {
      title: 'Cycle & Symptom Journal',
      badge: cycleEval.isIrregular ? 'Priority Action' : 'Preventive Tracking',
      detail:
        'Log bleeding duration, cervical fluid shifts, and daily energy over 3 consecutive cycles to build an objective record for your doctor.',
      screenTarget: 'cycle',
      iconName: 'Calendar',
    },
    nutritionPlanner: {
      title: 'Hormone-Supportive Nutrition',
      badge: 'Personalized Plan',
      detail:
        data.eatingPattern === 'mediterranean_low_gi'
          ? 'Continue your low-glycemic focus with high-fiber seed cycling and balanced morning protein.'
          : 'Explore low-glycemic meal options designed to stabilize postprandial glucose and curb midday energy crashes.',
      screenTarget: 'nutrition',
      iconName: 'Utensils',
    },
    lifestyleEducation: {
      title: 'Lifestyle & Circadian Hub',
      badge: lifestyleEval.sleepSummary.includes('<6') ? 'Rest Focus' : 'Wellness Guide',
      detail:
        'Access evidence-informed articles on regulating evening cortisol, improving restorative slow-wave sleep, and phase-based movement.',
      screenTarget: 'education',
      iconName: 'BookOpen',
    },
    clinicalEvaluation: {
      title: 'Physician Consultation Prep',
      badge: screeningCategory === 'clinical_evaluation_recommended' ? 'Recommended' : 'Clinical Reference',
      detail:
        'Review your printable clinical screening summary, tailored doctor questions, and standard diagnostic laboratory assays.',
      screenTarget: 'risk_result',
      iconName: 'ShieldCheck',
    },
  };

  // Structured Reported Answers Summary
  const reportedAnswersSummary = {
    ageAndMenarche: `Age: ${data.age} years | Age at first period: ${data.menarcheAge ? data.menarcheAge + ' years' : 'Unspecified'} (${data.yearsSinceMenarche ?? Math.max(0, data.age - (data.menarcheAge || 13))} years post-menarche).`,
    bmiSummary: `Height: ${data.heightCm} cm | Weight: ${data.weightKg} kg | BMI: ${bmiInfo.bmiValue} (${bmiInfo.category}). Weight trend: ${data.weightChangeRecentMonths.replace('_', ' ')}.`,
    cyclePatternSummary: `${cycleEval.patternSummary}. Usual cycle length: ${data.cycleLengthDays} days. Long gaps: ${data.missedPeriodsGaps.replace(/_/g, ' ')}.`,
    androgenSymptomsSummary: androgenEval.reportedMarkers.length > 0 ? androgenEval.reportedMarkers.join('; ') : 'No prominent symptoms reported.',
    medicalMetabolicSummary: `${metabolicEval.metabolicSummary} Confounders: ${metabolicEval.confounderNotes.length > 0 ? metabolicEval.confounderNotes.join('; ') : 'None reported'}.`,
    lifestyleSummary: `Sleep: ${data.sleepHoursHabit.replace('_', ' ')} hrs (${data.sleepQualityHabit}). Stress: ${data.stressLevelCurrent}. Activity: ${data.physicalActivityLevel.replace(/_/g, ' ')}. Nutrition: ${data.eatingPattern.replace(/_/g, ' ')}.`,
  };

  // Recommendations
  const nutritionFocus: string[] = [
    'Focus on low-glycemic complex carbohydrates (lentils, oats, quinoa, berries) to sustain steady post-meal insulin.',
    'Incorporate anti-inflammatory fats: extra virgin olive oil, avocado, walnuts, and omega-3 rich seeds.',
    'Aim for 25–30g of daily dietary fiber to support gut microbiome diversity and healthy estrogen clearance.',
    'Incorporate gentle seed cycling (pumpkin & flax in follicular phase, sunflower & sesame in luteal phase).',
  ];

  const lifestyleFocus: string[] = [
    'Prioritize 7.5 to 8.5 hours of restorative nightly sleep to support morning insulin sensitivity.',
    'Engage in 150 minutes of weekly moderate movement (e.g. brisk walking, swimming) combined with 2 resistance sessions.',
    'Practice daily restorative down-regulation (diaphragmatic breathing, nature exposure) to reduce cortisol-driven spikes.',
  ];

  const trackingPlan: string[] = [
    'Log cycle start and end dates in the HerLytics Cycle Tracker for 3 consecutive months.',
    'Record symptom patterns (skin breakouts, energy dips, pelvic discomfort) across menstrual phases.',
    'Track sleep quality and daily hydration to identify lifestyle factors that optimize cycle comfort.',
  ];

  const now = new Date();
  const timestamp = now.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
  const lastUpdatedTimestamp = now.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }) + ` at ${now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}`;

  return {
    scorePercentage: numericScreeningScore,
    numericScreeningScore,
    riskCategory,
    screeningCategory,
    categoryTitle,
    categorySubtitle,
    summary,
    keyFactors,
    recommendations: {
      nutrition: nutritionFocus.slice(0, 3),
      lifestyle: lifestyleFocus.slice(0, 3),
      medical: factorsToDiscuss.flatMap((f) => f.suggestedQuestions).slice(0, 3),
    },
    timestamp,
    lastUpdatedTimestamp,
    isLatestSavedResponses: true,
    scoreBreakdown,
    scoringMethodology: {
      framework: '2023 International Evidence-based Guideline for PCOS (Rotterdam Consensus Screening Proxy)',
      ovulatoryPoints: cycleEval.ovulatoryPoints,
      androgenPoints: androgenEval.androgenPoints,
      metabolicPoints: metabolicEval.metabolicPoints,
      lifestylePoints: 0,
      totalClinicalScore: numericScreeningScore,
      guidelineIndexScale: '0 to 100 Clinical Criteria Scale',
      missingDataNote,
      confounderNotes: metabolicEval.confounderNotes,
      adolescentNote: bmiInfo.isAdolescent ? bmiInfo.explanation : undefined,
      weightNeutralityDeclaration:
        'Lifestyle habits, stress, and weight are metabolic context modifiers, not diagnostic proof or direct causes of PCOS.',
    },
    reportedAnswersSummary,
    factorsToDiscuss,
    lifestyleWellnessOverview: lifestyleEval,
    featureConnections,
    screeningSummary: {
      cyclePatternStatus: cycleEval.clinicalNote,
      androgenStatus: androgenEval.clinicalNote,
      metabolicStatus: metabolicEval.metabolicSummary,
      confoundingFactors: metabolicEval.confounderNotes,
    },
    evaluationGuidance: {
      recommendationLevel:
        screeningCategory === 'clinical_evaluation_recommended' || screeningCategory === 'established_diagnosis'
          ? 'clinical_evaluation_recommended'
          : screeningCategory === 'discuss_with_doctor'
          ? 'discuss_with_doctor'
          : 'routine_monitoring',
      guidanceTitle: categoryTitle,
      guidanceExplanation: summary,
      suggestedDoctorQuestions: factorsToDiscuss.flatMap((f) => f.suggestedQuestions),
      relevantClinicalTests: [
        'Reproductive Hormone Panel: Total & Free Testosterone, DHEAS, LH & FSH',
        'Metabolic Screening: Fasting Plasma Glucose, HbA1c, Fasting Lipid Panel',
        'Exclusion Testing: Serum TSH (Thyroid Function) and Prolactin',
        'Imaging: Pelvic Ultrasound (to evaluate ovarian morphology and endometrial thickness, if indicated)',
      ],
    },
    personalizedRecommendations: {
      nutritionFocus,
      lifestyleFocus,
      trackingPlan,
      educationalTopicIds: ['pcos-basics', 'insulin-balance', 'cycle-phases'],
    },
    disclaimer: MANDATORY_ASSESSMENT_DISCLAIMER,
  };
}
