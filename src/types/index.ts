export type AppScreen = 
  | 'landing' 
  | 'login' 
  | 'signup' 
  | 'onboarding' 
  | 'assessment' 
  | 'risk_result' 
  | 'dashboard' 
  | 'cycle' 
  | 'lifestyle' 
  | 'nutrition' 
  | 'recipes' 
  | 'food_finder' 
  | 'education' 
  | 'profile';

export interface UserProfile {
  name: string;
  email: string;
  age: number;
  heightCm: number;
  weightKg: number;
  cycleLength: number;
  periodDuration: number;
  goals: string[];
  wellnessScore: number;
  onboarded: boolean;
  avatarUrl?: string;
  hasCompletedAssessment?: boolean;
}

export interface AssessmentData {
  // Area A: Basic profile and body measurements (Q1-Q5)
  age: number; // Q1
  ageGroup?: '<18' | '18-24' | '25-29' | '30-34' | '35-39' | '40+';
  menarcheAge: number; // Q2
  menarcheStatus?: 'started' | 'not_started' | 'not_sure';
  yearsSinceMenarche?: number;
  heightCm: number; // Q3
  weightKg: number; // Q4
  weightChangeRecentMonths: 'stable' | 'gain_unintentional' | 'loss_unintentional' | 'intentional' | 'not_sure'; // Q5
  bmi: number;
  bmiCategory?: string;
  bmiAdolescentNote?: string;

  // Area B: Menstrual patterns (Q6-Q9)
  cycleRegularity: 'regular' | 'somewhat_irregular' | 'frequent_missed' | 'unpredictable_absent' | 'not_sure'; // Q6
  cycleLengthDays: number; // Q7
  cycleLengthCategory?: 'normal_21_35' | 'short_under_21' | 'long_36_45' | 'very_long_46_90' | 'absent_over_90' | 'varies_widely' | 'not_sure'; // Q7
  missedPeriodsGaps: 'no_gaps_over_35' | 'gaps_35_to_90' | 'absent_over_90' | 'contraception_stops_bleeding' | 'not_sure'; // Q8
  patternsChangedOverTime: 'always_regular' | 'always_irregular' | 'was_regular_now_irregular' | 'was_irregular_now_regular' | 'not_sure'; // Q9
  bleedingDurationDays?: number;
  bleedingFlow?: 'light' | 'moderate' | 'heavy' | 'very_heavy';
  periodsPerYear?: '<4' | '4-8' | '9-12' | 'not_sure';

  // Area C: Relevant symptoms (Q10-Q13)
  acneExperience: 'none_occasional' | 'mild_period' | 'moderate_jawline' | 'severe_cystic' | 'prefer_not_to_say'; // Q10
  acneDuration?: 'under_6_months' | '6_to_12_months' | 'over_1_year' | 'since_adolescence';
  facialBodyHair: 'none_peach_fuzz' | 'mild_few_hairs' | 'moderate_chin_chest_abdomen' | 'significant_frequent_removal' | 'prefer_not_to_say'; // Q11
  hairProgression?: 'gradual_years' | 'sudden_months' | 'not_sure';
  scalpThinning: 'none_normal' | 'mild_widening_part' | 'noticeable_crown_diffuse' | 'significant_shedding' | 'not_sure'; // Q12
  scalpThinningDuration?: 'persistent_over_6mo' | 'recent_under_6mo' | 'not_sure';
  priorPCOSEvaluation: 'none' | 'evaluated_no_diagnosis' | 'formally_diagnosed_pcos' | 'evaluated_other_condition' | 'not_sure'; // Q13
  pcosDiagnosisStatus?: 'recent_under_2yr' | 'over_2yr' | 'in_active_care' | 'not_in_care';
  
  // Legacy / shortcut symptom booleans for backward compatibility
  symptoms: {
    acne: boolean;
    facialHair: boolean;
    hairLoss: boolean;
    weightGain: boolean;
    moodSwings: boolean;
    fatigue: boolean;
    pelvicPain: boolean;
    darkPatches: boolean;
  };
  androgenLevels: {
    facialHairSeverity: 'none' | 'mild' | 'moderate' | 'significant' | 'not_sure';
    acneSeverity: 'none' | 'mild_occasional' | 'persistent_cystic' | 'not_sure';
    hairThinningSeverity: 'none' | 'mild_part' | 'noticeable_diffuse' | 'not_sure';
  };

  // Area D: Relevant medical and family history (Q14-Q16)
  bloodGlucoseMetabolic: 'normal_tested' | 'prediabetes_impaired_glucose' | 'type_2_diabetes' | 'gestational_diabetes' | 'elevated_bp_lipids' | 'never_tested_not_sure' | 'prefer_not_to_say'; // Q14
  familyPCOSDiabetes: 'first_degree_pcos' | 'family_type2_diabetes' | 'both_pcos_and_diabetes' | 'neither' | 'not_sure'; // Q15
  medicalConditionsMedications: { // Q16
    onHormonalBirthControl: boolean;
    birthControlType?: 'combined_pill' | 'progestin_minipill' | 'hormonal_iud' | 'implant_injection' | 'other_not_sure';
    hasThyroidCondition: boolean;
    hasElevatedProlactin: boolean;
    hasRecentAcuteStressOrWeightLoss: boolean;
    noneOfAbove: boolean;
    notSureOrPreferNotToSay: boolean;
  };

  metabolicHealth: {
    glucoseHistory: 'normal' | 'prediabetes' | 'diabetes' | 'gestational' | 'never_tested' | 'not_sure';
    darkenedSkinFolds: 'yes' | 'no' | 'not_sure'; // Acanthosis nigricans
    bloodPressureOrLipids: 'normal' | 'elevated' | 'never_tested' | 'not_sure';
  };
  familyHistoryDetails: {
    familyPCOS: 'yes' | 'no' | 'not_sure';
    familyType2Diabetes: 'yes' | 'no' | 'not_sure';
    familyCardiovascular: 'yes' | 'no' | 'not_sure';
  };
  healthBackground: {
    familyPCOS: boolean;
    familyDiabetes: boolean;
    familyThyroid: boolean;
    previousClinicalCheck: boolean;
  };
  medicalHistory: {
    onHormonalContraception: 'yes' | 'no' | 'not_sure';
    contraceptionType?: 'combined_pill' | 'progestin_only' | 'hormonal_iud' | 'implant' | 'other' | 'none';
    contraceptionReason?: 'contraception' | 'manage_symptoms' | 'both';
    thyroidCondition: 'none' | 'hypothyroid' | 'hyperthyroid' | 'not_sure';
    elevatedProlactin: 'yes' | 'no' | 'not_sure';
    extremeStressOrWeightChange: boolean;
  };

  // Area E: Lifestyle and wellbeing (Q17-Q20)
  sleepHoursHabit: 'under_6' | '6_to_7' | '7_to_8_5' | 'over_9'; // Q17a
  sleepQualityHabit: 'restful' | 'fair' | 'frequently_disrupted'; // Q17b
  stressLevelCurrent: 'low_manageable' | 'moderate' | 'high_persistent' | 'severe_chronic'; // Q18
  physicalActivityLevel: 'sedentary_under_30m' | 'light_1_2_days' | 'moderate_3_4_days' | 'active_5_plus_days' | 'prefer_not_to_say'; // Q19
  eatingPattern: 'balanced_whole_foods' | 'mediterranean_low_gi' | 'plant_based' | 'frequent_processed_skipped' | 'specific_restrictions' | 'no_pattern' | 'prefer_not_to_say'; // Q20
  eatingRestrictionsNotes?: string;

  lifestyle: {
    sleepHours: number;
    waterLiters: number;
    exerciseFrequency: 'never' | '1-2_times' | '3-4_times' | '5+_times';
    stressLevel: 'low' | 'moderate' | 'high' | 'severe';
    sugarIntake: 'low' | 'moderate' | 'high';
  };
  lifestyleWellbeing?: {
    sleepQuality: 'restful' | 'fair' | 'frequently_disrupted';
    dietaryFocus: 'whole_foods' | 'balanced' | 'frequent_processed' | 'not_sure';
  };
}

export type ScreeningCategoryType = 
  | 'routine_monitoring' 
  | 'discuss_with_doctor' 
  | 'clinical_evaluation_recommended' 
  | 'established_diagnosis';

export interface NextStepAction {
  title: string;
  badge: string;
  detail: string;
  screenTarget: AppScreen;
  iconName: string;
}

export interface ScoreBreakdownItem {
  domain: string;
  score: number;
  maxScore: number;
  contributingFactors: string[];
  rationale: string;
}

export interface RiskPredictionResult {
  scorePercentage: number;
  numericScreeningScore: number; // 0 to 100 display scale
  riskCategory: 'Lower estimated risk' | 'Moderate estimated risk' | 'Elevated estimated risk';
  screeningCategory: ScreeningCategoryType;
  categoryTitle: string;
  categorySubtitle: string;
  summary: string;
  keyFactors: string[];
  recommendations: {
    nutrition: string[];
    lifestyle: string[];
    medical: string[];
  };
  timestamp: string;
  lastUpdatedTimestamp: string;
  isLatestSavedResponses: boolean;

  // Transparent 0-100 Scoring Breakdown Audit
  scoreBreakdown: {
    ovulatory: ScoreBreakdownItem;
    androgen: ScoreBreakdownItem;
    metabolic: ScoreBreakdownItem;
    lifestyle: ScoreBreakdownItem; // strictly 0
    totalScore: number;
    maxTotalScore: number;
  };

  // Transparent Scoring Methodology & Criteria Audit
  scoringMethodology: {
    framework: string;
    ovulatoryPoints: number; // 0 to 40
    androgenPoints: number; // 0 to 40
    metabolicPoints: number; // 0 to 20
    lifestylePoints: number; // Strictly 0
    totalClinicalScore: number; // 0 to 100
    guidelineIndexScale: string;
    missingDataNote: string;
    confounderNotes: string[];
    adolescentNote?: string;
    weightNeutralityDeclaration: string;
  };

  // Structured summaries for the 4 core sections requested
  reportedAnswersSummary: {
    ageAndMenarche: string;
    bmiSummary: string;
    cyclePatternSummary: string;
    androgenSymptomsSummary: string;
    medicalMetabolicSummary: string;
    lifestyleSummary: string;
  };

  factorsToDiscuss: {
    category: string;
    observation: string;
    suggestedQuestions: string[];
  }[];

  lifestyleWellnessOverview: {
    sleepSummary: string;
    stressSummary: string;
    activitySummary: string;
    nutritionSummary: string;
    distinctionNote: string;
  };

  featureConnections: {
    cycleTracker: NextStepAction;
    nutritionPlanner: NextStepAction;
    lifestyleEducation: NextStepAction;
    clinicalEvaluation: NextStepAction;
  };

  // Evidence-based Clinical Guideline Separation
  screeningSummary?: {
    cyclePatternStatus: string;
    androgenStatus: string;
    metabolicStatus: string;
    confoundingFactors: string[];
  };
  evaluationGuidance?: {
    recommendationLevel: 'routine_monitoring' | 'discuss_with_doctor' | 'clinical_evaluation_recommended';
    guidanceTitle: string;
    guidanceExplanation: string;
    suggestedDoctorQuestions: string[];
    relevantClinicalTests: string[];
  };
  personalizedRecommendations?: {
    nutritionFocus: string[];
    lifestyleFocus: string[];
    trackingPlan: string[];
    educationalTopicIds: string[];
  };
  disclaimer: string;
}

export interface Recipe {
  id: string;
  title: string;
  category: 'PCOS Friendly' | 'Hormone Balance' | 'Anti-inflammatory' | 'High Protein' | 'Quick & Easy';
  prepTime: string;
  calories: number;
  proteinGrams: number;
  carbsGrams: number;
  fatGrams: number;
  image: string;
  tags: string[];
  ingredients: string[];
  instructions: string[];
  healthBenefits: string;
  isFavorite?: boolean;
}

export interface Meal {
  id: string;
  type: 'Breakfast' | 'Lunch' | 'Snack' | 'Dinner';
  name: string;
  calories: number;
  proteinGrams: number;
  carbsGrams: number;
  fatGrams: number;
  prepTime: string;
  image: string;
  tags: string[];
  ingredients: string[];
}

export interface Article {
  id: string;
  title: string;
  category: 'PCOS' | 'Menstrual Health' | 'Nutrition' | 'Hormonal Health' | 'Exercise' | 'Stress Management' | 'Fertility';
  readTime: string;
  description: string;
  content: string[];
  author: string;
  date: string;
  image: string;
}

export interface CycleDay {
  date: string; // YYYY-MM-DD
  dayOfCycle: number;
  phase: 'menstrual' | 'follicular' | 'ovulatory' | 'luteal';
  isPeriod: boolean;
  isFertile: boolean;
  isOvulationDay: boolean;
  symptomsLogged?: string[];
  moodLogged?: string;
  flowIntensity?: 'light' | 'medium' | 'heavy';
}

export interface DailyLog {
  date: string;
  waterIntakeLiters: number;
  sleepHours: number;
  sleepQuality: 'poor' | 'fair' | 'good' | 'restful';
  steps: number;
  weightKg: number;
  mood: string;
}
