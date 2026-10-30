import React, { useState, useEffect } from 'react';
import { AppScreen, AssessmentData, RiskPredictionResult, UserProfile } from '../types';
import { BrandLogo } from './BrandLogo';
import { 
  calculateGuidelineAssessmentResult, 
  calculateBmiProfile, 
  MANDATORY_ASSESSMENT_DISCLAIMER 
} from '../data/assessmentLogic';
import { 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  Sparkles, 
  AlertCircle, 
  Info, 
  ShieldCheck, 
  Calendar, 
  Heart, 
  Activity, 
  HelpCircle, 
  RotateCcw,
  Clock,
  BookOpen,
  Edit3,
  Moon,
  Utensils
} from 'lucide-react';

interface HealthAssessmentProps {
  assessmentData: AssessmentData;
  setAssessmentData: React.Dispatch<React.SetStateAction<AssessmentData>>;
  setRiskResult: React.Dispatch<React.SetStateAction<RiskPredictionResult>>;
  setProfile?: React.Dispatch<React.SetStateAction<UserProfile>>;
  setScreen: (screen: AppScreen) => void;
}

const DRAFT_STORAGE_KEY = 'herlytics_assessment_draft_v2';

export const HealthAssessment: React.FC<HealthAssessmentProps> = ({
  assessmentData,
  setAssessmentData,
  setRiskResult,
  setProfile,
  setScreen,
}) => {
  // Steps:
  // 0: Introduction & Guidelines
  // 1: Area A — Basic Profile & Body Measurements (Q1 - Q5)
  // 2: Area B — Menstrual Patterns (Q6 - Q9)
  // 3: Area C — Relevant Symptoms (Q10 - Q13)
  // 4: Area D — Medical & Family History (Q14 - Q16)
  // 5: Area E — Lifestyle & Wellbeing (Q17 - Q20)
  // 6: Review & Final Submission
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 6;

  // Initialize with draft if available, otherwise assessmentData
  const [formData, setFormData] = useState<AssessmentData>(() => {
    try {
      const saved = localStorage.getItem(DRAFT_STORAGE_KEY);
      if (saved) {
        return { ...assessmentData, ...JSON.parse(saved) };
      }
    } catch {
      // fallback
    }
    return {
      ...assessmentData,
      menarcheAge: assessmentData.menarcheAge || 13,
      yearsSinceMenarche: assessmentData.yearsSinceMenarche || Math.max(0, assessmentData.age - (assessmentData.menarcheAge || 13)),
      weightChangeRecentMonths: assessmentData.weightChangeRecentMonths || 'stable',
      cycleRegularity: assessmentData.cycleRegularity || 'regular',
      cycleLengthDays: assessmentData.cycleLengthDays || 29,
      cycleLengthCategory: assessmentData.cycleLengthCategory || 'normal_21_35',
      missedPeriodsGaps: assessmentData.missedPeriodsGaps || 'no_gaps_over_35',
      patternsChangedOverTime: assessmentData.patternsChangedOverTime || 'always_regular',
      acneExperience: assessmentData.acneExperience || 'mild_period',
      facialBodyHair: assessmentData.facialBodyHair || 'none_peach_fuzz',
      scalpThinning: assessmentData.scalpThinning || 'none_normal',
      priorPCOSEvaluation: assessmentData.priorPCOSEvaluation || 'none',
      bloodGlucoseMetabolic: assessmentData.bloodGlucoseMetabolic || 'normal_tested',
      familyPCOSDiabetes: assessmentData.familyPCOSDiabetes || 'family_type2_diabetes',
      medicalConditionsMedications: assessmentData.medicalConditionsMedications || {
        onHormonalBirthControl: false,
        hasThyroidCondition: false,
        hasElevatedProlactin: false,
        hasRecentAcuteStressOrWeightLoss: false,
        noneOfAbove: true,
        notSureOrPreferNotToSay: false,
      },
      sleepHoursHabit: assessmentData.sleepHoursHabit || '7_to_8_5',
      sleepQualityHabit: assessmentData.sleepQualityHabit || 'fair',
      stressLevelCurrent: assessmentData.stressLevelCurrent || 'moderate',
      physicalActivityLevel: assessmentData.physicalActivityLevel || 'moderate_3_4_days',
      eatingPattern: assessmentData.eatingPattern || 'balanced_whole_foods',
    };
  });

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [loadingPhase, setLoadingPhase] = useState(0);
  const [acknowledgedDisclaimer, setAcknowledgedDisclaimer] = useState(false);

  // Auto-save draft on every change
  useEffect(() => {
    try {
      localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(formData));
    } catch {
      // ignore
    }
  }, [formData]);

  // Dynamic BMI Calculation with Adolescent Awareness
  const bmiProfile = calculateBmiProfile(
    formData.age,
    formData.menarcheAge,
    formData.heightCm,
    formData.weightKg
  );

  const handleHeightWeightChange = (h: number, w: number) => {
    const prof = calculateBmiProfile(formData.age, formData.menarcheAge, h, w);
    setFormData((prev) => ({
      ...prev,
      heightCm: h,
      weightKg: w,
      bmi: prof.bmiValue,
      bmiCategory: prof.category,
      bmiAdolescentNote: prof.isAdolescent ? prof.explanation : undefined,
    }));
  };

  const handleSubmitAssessment = () => {
    setIsAnalyzing(true);
    setLoadingPhase(0);

    const interval1 = setTimeout(() => setLoadingPhase(1), 900);
    const interval2 = setTimeout(() => setLoadingPhase(2), 1800);

    const finishTimeout = setTimeout(() => {
      // Calculate guideline-informed assessment result
      const computedResult = calculateGuidelineAssessmentResult(formData);

      setAssessmentData(formData);
      setRiskResult(computedResult);

      if (setProfile) {
        setProfile((prev: UserProfile) => ({
          ...prev,
          hasCompletedAssessment: true,
          wellnessScore: Math.max(70, Math.round(100 - computedResult.scorePercentage * 0.35)),
        }));
      }

      // Clear draft after successful submission
      try {
        localStorage.removeItem(DRAFT_STORAGE_KEY);
      } catch {
        // ignore
      }

      setIsAnalyzing(false);
      setScreen('risk_result');
    }, 2600);

    return () => {
      clearTimeout(interval1);
      clearTimeout(interval2);
      clearTimeout(finishTimeout);
    };
  };

  const stepLabels = [
    'Introduction',
    'Body & Profile',
    'Menstrual Patterns',
    'Relevant Symptoms',
    'Medical & Family History',
    'Lifestyle & Wellbeing',
    'Review & Submit',
  ];

  // Loading Screen
  if (isAnalyzing) {
    return (
      <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center p-6 bg-[#FAF7F5] text-center space-y-6">
        <div className="relative w-28 h-28 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-4 border-[#F4E3E6] border-t-[#8A3B4D] animate-spin" />
          <BrandLogo size="md" variant="mark" />
        </div>
        <div className="space-y-2 max-w-md">
          <h2 className="font-serif text-2xl font-bold text-[#2B1D22]">
            {loadingPhase === 0 && 'Auditing Reported Ovulatory & Androgen Patterns...'}
            {loadingPhase === 1 && 'Applying 2023 International Clinical Guideline Criteria...'}
            {loadingPhase === 2 && 'Structuring Personalized Clinical Guidance & Action Plan...'}
          </h2>
          <p className="text-xs text-[#533E46]">
            Separating clinical symptom screening from supportive lifestyle habits for transparent, evidence-based results.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-80px)] p-4 sm:p-6 lg:p-10 bg-[#FAF7F5]">
      <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in">
        
        {/* HEADER & STEP PROGRESS INDICATOR */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8A3B4D]">
                Questionnaire {currentStep} of {totalSteps}
              </span>
              <span className="text-xs text-[#866F78]">·</span>
              <span className="text-xs text-[#866F78] font-medium hidden sm:inline">
                {stepLabels[currentStep]}
              </span>
            </div>
            
            {currentStep > 0 && (
              <button
                onClick={() => {
                  if (confirm('Clear saved draft and reset all questions to default?')) {
                    localStorage.removeItem(DRAFT_STORAGE_KEY);
                    window.location.reload();
                  }
                }}
                className="text-[11px] text-[#866F78] hover:text-[#8A3B4D] flex items-center gap-1 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset Draft</span>
              </button>
            )}
          </div>

          {/* Progress Bar */}
          <div className="h-2 w-full bg-[#EFE8E6] rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#8A3B4D] transition-all duration-300 rounded-full"
              style={{ width: `${Math.max(8, (currentStep / totalSteps) * 100)}%` }}
            />
          </div>
        </div>

        {/* STEP 0: INTRODUCTION & PURPOSE */}
        {currentStep === 0 && (
          <div className="p-6 sm:p-10 rounded-3xl bg-white border border-[#EFE8E6] shadow-xs space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-[#F9EBEF] flex items-center justify-center text-[#8A3B4D]">
              <Sparkles className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#2B1D22]">
                HerLytics Wellness & Symptom Screening Assessment
              </h1>
              <p className="text-xs sm:text-sm text-[#533E46] leading-relaxed">
                This comprehensive questionnaire collects your menstrual history, physical observations, metabolic context, and lifestyle patterns to generate evidence-informed health guidance.
              </p>
            </div>

            {/* Guideline Alignment Callout */}
            <div className="p-4 rounded-2xl bg-[#FAF7F5] border border-[#EFE8E6] space-y-2 text-xs text-[#533E46]">
              <div className="flex items-center gap-2 font-bold text-[#2B1D22]">
                <BookOpen className="w-4 h-4 text-[#8A3B4D]" />
                <span>Evidence-Informed Methodology</span>
              </div>
              <p className="leading-relaxed">
                Structured in accordance with the <strong>2023 International Evidence-based Guideline for PCOS</strong> (Monash University / ESHRE / ASRM). Questions adapt to your age, time since first period, and hormonal contraception use.
              </p>
            </div>

            {/* Mandatory Educational Disclaimer */}
            <div className="p-4 rounded-2xl bg-[#FFF8F9] border border-[#F4E3E6] flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#8A3B4D] shrink-0 mt-0.5" />
              <div className="space-y-1 text-xs">
                <span className="font-bold text-[#2B1D22]">Important Medical Notice</span>
                <p className="text-[#533E46] leading-relaxed">
                  {MANDATORY_ASSESSMENT_DISCLAIMER}
                </p>
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={() => setCurrentStep(1)}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#8A3B4D] text-white text-xs font-semibold shadow-xs hover:bg-[#742E3F] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Begin Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 1: AREA A — BASIC PROFILE & BODY MEASUREMENTS (Q1 - Q5) */}
        {currentStep === 1 && (
          <div className="p-6 sm:p-10 rounded-3xl bg-white border border-[#EFE8E6] shadow-xs space-y-8">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FAF7F5] text-[11px] font-bold text-[#866F78] uppercase tracking-wider">
                Area A · Profile & Measurements
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#2B1D22]">
                Basic Profile & Anthropometrics
              </h2>
              <p className="text-xs text-[#533E46]">
                Questions 1 to 5 establish your chronological and developmental baseline.
              </p>
            </div>

            {/* Q1: Age */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-[#2B1D22]">
                1. What is your age?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { label: 'Under 18', value: 17, group: '<18' },
                  { label: '18–24', value: 22, group: '18-24' },
                  { label: '25–29', value: 26, group: '25-29' },
                  { label: '30–34', value: 32, group: '30-34' },
                  { label: '35–39', value: 37, group: '35-39' },
                  { label: '40+', value: 42, group: '40+' },
                ].map((item) => (
                  <button
                    key={item.group}
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, age: item.value, ageGroup: item.group as any }))}
                    className={`p-3 rounded-xl text-xs font-medium border text-center transition-all cursor-pointer ${
                      formData.ageGroup === item.group || (formData.age === item.value && !formData.ageGroup)
                        ? 'border-[#8A3B4D] bg-[#F9EBEF] text-[#8A3B4D] font-bold shadow-2xs'
                        : 'border-[#EFE8E6] bg-white text-[#533E46] hover:border-[#D5C7C9]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Q2: Age at First Period (Menarche) */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-[#2B1D22]">
                2. At what age did you get your first menstrual period (menarche)?
              </label>
              <p className="text-[11px] text-[#866F78]">
                Monash 2023 Guidelines specify that menstrual patterns in adolescents (&lt;3 years post-menarche) must be evaluated with wider physiological tolerance.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { label: '9–11 years', val: 11 },
                  { label: '12–13 years (typical)', val: 13 },
                  { label: '14–15 years', val: 14 },
                  { label: '16+ years', val: 16 },
                  { label: 'Have not started', val: 0 },
                  { label: 'Not sure', val: 13 },
                ].map((opt) => (
                  <button
                    key={opt.label}
                    type="button"
                    onClick={() => setFormData((prev) => ({
                      ...prev,
                      menarcheAge: opt.val,
                      menarcheStatus: opt.val === 0 ? 'not_started' : 'started',
                      yearsSinceMenarche: opt.val > 0 ? Math.max(0, prev.age - opt.val) : 0,
                    }))}
                    className={`p-3 rounded-xl text-xs font-medium border text-center transition-all cursor-pointer ${
                      formData.menarcheAge === opt.val
                        ? 'border-[#8A3B4D] bg-[#F9EBEF] text-[#8A3B4D] font-bold shadow-2xs'
                        : 'border-[#EFE8E6] bg-white text-[#533E46] hover:border-[#D5C7C9]'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Q3 & Q4: Height & Weight with Live Dynamic BMI */}
            <div className="space-y-4 pt-2 border-t border-[#F5EDEB]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-[#2B1D22]">
                    3. Height (in centimetres)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      min={120}
                      max={220}
                      value={formData.heightCm || ''}
                      onChange={(e) => handleHeightWeightChange(Number(e.target.value), formData.weightKg)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#EFE8E6] text-xs text-[#2B1D22] focus:outline-none focus:border-[#8A3B4D]"
                      placeholder="e.g. 165"
                    />
                    <span className="absolute right-3.5 top-2.5 text-xs text-[#866F78]">cm</span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-[#2B1D22]">
                    4. Current Weight (in kilograms)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      min={30}
                      max={200}
                      step={0.5}
                      value={formData.weightKg || ''}
                      onChange={(e) => handleHeightWeightChange(formData.heightCm, Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#EFE8E6] text-xs text-[#2B1D22] focus:outline-none focus:border-[#8A3B4D]"
                      placeholder="e.g. 60"
                    />
                    <span className="absolute right-3.5 top-2.5 text-xs text-[#866F78]">kg</span>
                  </div>
                </div>
              </div>

              {/* Dynamic BMI Live Context Card */}
              <div className="p-4 rounded-2xl bg-[#FAF7F5] border border-[#EFE8E6] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#866F78]">
                    Calculated BMI Indicator
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-[#2B1D22]">{bmiProfile.bmiValue}</span>
                    <span className="text-xs font-semibold text-[#8A3B4D]">
                      {bmiProfile.category}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#533E46] leading-relaxed max-w-xl">
                    {bmiProfile.explanation}
                  </p>
                </div>
              </div>
            </div>

            {/* Q5: Recent Weight Changes */}
            <div className="space-y-2 pt-2 border-t border-[#F5EDEB]">
              <label className="block text-xs font-bold text-[#2B1D22]">
                5. Has your weight changed significantly in recent months?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  { label: 'Relatively stable (within 1–2 kg)', val: 'stable' },
                  { label: 'Unintentional weight gain (>5 kg)', val: 'gain_unintentional' },
                  { label: 'Unintentional weight loss (>5 kg)', val: 'loss_unintentional' },
                  { label: 'Intentional weight modification', val: 'intentional' },
                  { label: 'Not sure / Prefer not to say', val: 'not_sure' },
                ].map((opt) => (
                  <button
                    key={opt.val}
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, weightChangeRecentMonths: opt.val as any }))}
                    className={`p-3 rounded-xl text-xs font-medium border text-left transition-all cursor-pointer ${
                      formData.weightChangeRecentMonths === opt.val
                        ? 'border-[#8A3B4D] bg-[#F9EBEF] text-[#8A3B4D] font-bold shadow-2xs'
                        : 'border-[#EFE8E6] bg-white text-[#533E46] hover:border-[#D5C7C9]'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="pt-4 flex items-center justify-between border-t border-[#F5EDEB]">
              <button
                onClick={() => setCurrentStep(0)}
                className="px-4 py-2.5 rounded-xl border border-[#EFE8E6] text-xs font-semibold text-[#533E46] hover:bg-[#FAF7F5] flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Intro</span>
              </button>

              <button
                onClick={() => setCurrentStep(2)}
                className="px-6 py-2.5 rounded-xl bg-[#8A3B4D] text-white text-xs font-semibold shadow-xs hover:bg-[#742E3F] flex items-center gap-1.5 cursor-pointer"
              >
                <span>Next: Menstrual Patterns</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: AREA B — MENSTRUAL PATTERNS (Q6 - Q9) */}
        {currentStep === 2 && (
          <div className="p-6 sm:p-10 rounded-3xl bg-white border border-[#EFE8E6] shadow-xs space-y-8">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FAF7F5] text-[11px] font-bold text-[#866F78] uppercase tracking-wider">
                Area B · Ovulatory Regularity
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#2B1D22]">
                Menstrual Patterns & Timing
              </h2>
              <p className="text-xs text-[#533E46]">
                Questions 6 to 9 assess ovulatory regularity according to adult and adolescent clinical definitions.
              </p>
            </div>

            {/* Q6: Cycle Regularity */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-[#2B1D22]">
                6. How regular are your menstrual cycles?
              </label>
              <div className="space-y-2">
                {[
                  { 
                    label: 'Regular — occurs every 21 to 35 days with minimal variation', 
                    val: 'regular',
                    desc: 'Consistent timing within standard clinical window.'
                  },
                  { 
                    label: 'Somewhat irregular — varies by more than 7–9 days between cycles', 
                    val: 'somewhat_irregular',
                    desc: 'Occasional timing shifts across consecutive cycles.'
                  },
                  { 
                    label: 'Frequently missed — gaps between 35 and 90 days apart (oligomenorrhea)', 
                    val: 'frequent_missed',
                    desc: 'Cycles consistently exceeding 35 days, or fewer than 8 periods per year.'
                  },
                  { 
                    label: 'Completely unpredictable or absent for over 90 days (amenorrhea)', 
                    val: 'unpredictable_absent',
                    desc: 'Prolonged intervals without bleeding.'
                  },
                  { 
                    label: 'Not sure / Prefer not to say', 
                    val: 'not_sure',
                    desc: 'Unsure of current cycle timing or pattern.'
                  },
                ].map((opt) => (
                  <button
                    key={opt.val}
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, cycleRegularity: opt.val as any }))}
                    className={`w-full p-3.5 rounded-2xl text-xs border text-left transition-all cursor-pointer flex items-start justify-between gap-3 ${
                      formData.cycleRegularity === opt.val
                        ? 'border-[#8A3B4D] bg-[#F9EBEF] text-[#8A3B4D] shadow-2xs'
                        : 'border-[#EFE8E6] bg-white text-[#533E46] hover:border-[#D5C7C9]'
                    }`}
                  >
                    <div>
                      <div className="font-bold">{opt.label}</div>
                      <div className="text-[11px] text-[#866F78] mt-0.5">{opt.desc}</div>
                    </div>
                    {formData.cycleRegularity === opt.val && (
                      <Check className="w-4 h-4 text-[#8A3B4D] shrink-0 mt-0.5" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Q7: Usual Cycle Length */}
            <div className="space-y-2 pt-2 border-t border-[#F5EDEB]">
              <label className="block text-xs font-bold text-[#2B1D22]">
                7. What is your usual cycle length (from Day 1 of bleeding to Day 1 of next period)?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { label: '21–35 days (Standard)', val: 29, cat: 'normal_21_35' },
                  { label: 'Under 21 days (Frequent)', val: 19, cat: 'short_under_21' },
                  { label: '36–45 days (Infrequent)', val: 40, cat: 'long_36_45' },
                  { label: '46–90 days (Very Long)', val: 60, cat: 'very_long_46_90' },
                  { label: 'Over 90 days (Absent)', val: 95, cat: 'absent_over_90' },
                  { label: 'Varies too widely / Not sure', val: 32, cat: 'varies_widely' },
                ].map((item) => (
                  <button
                    key={item.cat}
                    type="button"
                    onClick={() => setFormData((prev) => ({
                      ...prev,
                      cycleLengthDays: item.val,
                      cycleLengthCategory: item.cat as any,
                    }))}
                    className={`p-3 rounded-xl text-xs border text-center transition-all cursor-pointer ${
                      formData.cycleLengthCategory === item.cat
                        ? 'border-[#8A3B4D] bg-[#F9EBEF] text-[#8A3B4D] font-bold shadow-2xs'
                        : 'border-[#EFE8E6] bg-white text-[#533E46] hover:border-[#D5C7C9]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Q8: Missed Periods & Gaps */}
            <div className="space-y-2 pt-2 border-t border-[#F5EDEB]">
              <label className="block text-xs font-bold text-[#2B1D22]">
                8. Have you missed periods or experienced unusually long gaps between cycles?
              </label>
              <div className="space-y-2">
                {[
                  { label: 'No — I have not had gaps exceeding 35 days', val: 'no_gaps_over_35' },
                  { label: 'Yes — intervals between 35 and 90 days apart', val: 'gaps_35_to_90' },
                  { label: 'Yes — absent periods exceeding 90 days without pregnancy', val: 'absent_over_90' },
                  { label: 'Currently on birth control that intentionally stops bleeding', val: 'contraception_stops_bleeding' },
                  { label: 'Not sure', val: 'not_sure' },
                ].map((opt) => (
                  <button
                    key={opt.val}
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, missedPeriodsGaps: opt.val as any }))}
                    className={`w-full p-3 rounded-xl text-xs font-medium border text-left transition-all cursor-pointer ${
                      formData.missedPeriodsGaps === opt.val
                        ? 'border-[#8A3B4D] bg-[#F9EBEF] text-[#8A3B4D] font-bold shadow-2xs'
                        : 'border-[#EFE8E6] bg-white text-[#533E46] hover:border-[#D5C7C9]'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Q9: Pattern Changes Over Time */}
            <div className="space-y-2 pt-2 border-t border-[#F5EDEB]">
              <label className="block text-xs font-bold text-[#2B1D22]">
                9. Have your menstrual patterns changed significantly over time?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  { label: 'Always been relatively regular', val: 'always_regular' },
                  { label: 'Always been irregular since my first period', val: 'always_irregular' },
                  { label: 'Was previously regular, but recently became irregular', val: 'was_regular_now_irregular' },
                  { label: 'Was irregular earlier, now becoming more regular', val: 'was_irregular_now_regular' },
                  { label: 'Not sure / Variable', val: 'not_sure' },
                ].map((opt) => (
                  <button
                    key={opt.val}
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, patternsChangedOverTime: opt.val as any }))}
                    className={`p-3 rounded-xl text-xs font-medium border text-left transition-all cursor-pointer ${
                      formData.patternsChangedOverTime === opt.val
                        ? 'border-[#8A3B4D] bg-[#F9EBEF] text-[#8A3B4D] font-bold shadow-2xs'
                        : 'border-[#EFE8E6] bg-white text-[#533E46] hover:border-[#D5C7C9]'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="pt-4 flex items-center justify-between border-t border-[#F5EDEB]">
              <button
                onClick={() => setCurrentStep(1)}
                className="px-4 py-2.5 rounded-xl border border-[#EFE8E6] text-xs font-semibold text-[#533E46] hover:bg-[#FAF7F5] flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <button
                onClick={() => setCurrentStep(3)}
                className="px-6 py-2.5 rounded-xl bg-[#8A3B4D] text-white text-xs font-semibold shadow-xs hover:bg-[#742E3F] flex items-center gap-1.5 cursor-pointer"
              >
                <span>Next: Symptoms</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: AREA C — RELEVANT SYMPTOMS (Q10 - Q13) */}
        {currentStep === 3 && (
          <div className="p-6 sm:p-10 rounded-3xl bg-white border border-[#EFE8E6] shadow-xs space-y-8">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FAF7F5] text-[11px] font-bold text-[#866F78] uppercase tracking-wider">
                Area C · Physical Signs
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#2B1D22]">
                Symptoms Associated with Elevated Androgens
              </h2>
              <p className="text-xs text-[#533E46]">
                Questions 10 to 13 evaluate physical signs (hirsutism, persistent acne, scalp thinning) and prior evaluations.
              </p>
            </div>

            {/* Q10: Persistent Acne */}
            <div className="space-y-3">
              <label className="block text-xs font-bold text-[#2B1D22]">
                10. Do you experience persistent or inflammatory acne?
              </label>
              <div className="space-y-2">
                {[
                  { label: 'None or rare occasional blemishes', val: 'none_occasional' },
                  { label: 'Mild acne occurring occasionally around my period', val: 'mild_period' },
                  { label: 'Moderate, persistent inflammatory acne (jawline, cheeks, chin)', val: 'moderate_jawline' },
                  { label: 'Severe or cystic acne resistant to standard topical skincare', val: 'severe_cystic' },
                  { label: 'Prefer not to answer', val: 'prefer_not_to_say' },
                ].map((opt) => (
                  <button
                    key={opt.val}
                    type="button"
                    onClick={() => setFormData((prev) => ({ 
                      ...prev, 
                      acneExperience: opt.val as any,
                      symptoms: { ...prev.symptoms, acne: opt.val === 'moderate_jawline' || opt.val === 'severe_cystic' }
                    }))}
                    className={`w-full p-3 rounded-xl text-xs font-medium border text-left transition-all cursor-pointer ${
                      formData.acneExperience === opt.val
                        ? 'border-[#8A3B4D] bg-[#F9EBEF] text-[#8A3B4D] font-bold shadow-2xs'
                        : 'border-[#EFE8E6] bg-white text-[#533E46] hover:border-[#D5C7C9]'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              {/* Conditional Follow-up: Acne Duration */}
              {(formData.acneExperience === 'moderate_jawline' || formData.acneExperience === 'severe_cystic') && (
                <div className="p-3.5 rounded-2xl bg-[#FAF7F5] border border-[#EFE8E6] space-y-2 animate-in fade-in">
                  <span className="text-[11px] font-bold text-[#8A3B4D]">
                    Follow-up: How long has this acne pattern persisted?
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { label: '<6 months', val: 'under_6_months' },
                      { label: '6–12 months', val: '6_to_12_months' },
                      { label: 'Over 1 year', val: 'over_1_year' },
                      { label: 'Since adolescence', val: 'since_adolescence' },
                    ].map((d) => (
                      <button
                        key={d.val}
                        type="button"
                        onClick={() => setFormData((prev) => ({ ...prev, acneDuration: d.val as any }))}
                        className={`p-2 rounded-lg text-[11px] border text-center transition-all cursor-pointer ${
                          formData.acneDuration === d.val
                            ? 'border-[#8A3B4D] bg-white text-[#8A3B4D] font-bold'
                            : 'border-[#EFE8E6] bg-white/70 text-[#533E46]'
                        }`}
                      >
                        {d.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Q11: Unwanted Coarse Hair (Hirsutism) */}
            <div className="space-y-3 pt-2 border-t border-[#F5EDEB]">
              <label className="block text-xs font-bold text-[#2B1D22]">
                11. Have you noticed unwanted coarse, dark facial or body hair?
              </label>
              <p className="text-[11px] text-[#866F78]">
                Distinguishes between fine soft peach fuzz (vellus hair) and thick coarse hair in androgen-sensitive areas (chin, upper lip, chest, abdomen).
              </p>
              <div className="space-y-2">
                {[
                  { label: 'None / only fine, soft peach fuzz (vellus hair)', val: 'none_peach_fuzz' },
                  { label: 'Mild coarse hair (a few stray dark hairs on upper lip or chin)', val: 'mild_few_hairs' },
                  { label: 'Moderate coarse hair (noticeable dark hair on chin, upper lip, chest, or abdomen)', val: 'moderate_chin_chest_abdomen' },
                  { label: 'Significant coarse hair requiring frequent shaving, waxing, or plucking', val: 'significant_frequent_removal' },
                  { label: 'Prefer not to answer', val: 'prefer_not_to_say' },
                ].map((opt) => (
                  <button
                    key={opt.val}
                    type="button"
                    onClick={() => setFormData((prev) => ({ 
                      ...prev, 
                      facialBodyHair: opt.val as any,
                      symptoms: { ...prev.symptoms, facialHair: opt.val === 'moderate_chin_chest_abdomen' || opt.val === 'significant_frequent_removal' }
                    }))}
                    className={`w-full p-3 rounded-xl text-xs font-medium border text-left transition-all cursor-pointer ${
                      formData.facialBodyHair === opt.val
                        ? 'border-[#8A3B4D] bg-[#F9EBEF] text-[#8A3B4D] font-bold shadow-2xs'
                        : 'border-[#EFE8E6] bg-white text-[#533E46] hover:border-[#D5C7C9]'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              {/* Conditional Follow-up: Progression */}
              {(formData.facialBodyHair === 'moderate_chin_chest_abdomen' || formData.facialBodyHair === 'significant_frequent_removal') && (
                <div className="p-3.5 rounded-2xl bg-[#FAF7F5] border border-[#EFE8E6] space-y-2 animate-in fade-in">
                  <span className="text-[11px] font-bold text-[#8A3B4D]">
                    Follow-up: Did this coarse hair develop gradually or appear suddenly?
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {[
                      { label: 'Developed gradually over years', val: 'gradual_years' },
                      { label: 'Noticeable sudden onset over recent months', val: 'sudden_months' },
                      { label: 'Not sure', val: 'not_sure' },
                    ].map((p) => (
                      <button
                        key={p.val}
                        type="button"
                        onClick={() => setFormData((prev) => ({ ...prev, hairProgression: p.val as any }))}
                        className={`p-2 rounded-lg text-[11px] border text-center transition-all cursor-pointer ${
                          formData.hairProgression === p.val
                            ? 'border-[#8A3B4D] bg-white text-[#8A3B4D] font-bold'
                            : 'border-[#EFE8E6] bg-white/70 text-[#533E46]'
                        }`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Q12: Scalp Hair Thinning */}
            <div className="space-y-3 pt-2 border-t border-[#F5EDEB]">
              <label className="block text-xs font-bold text-[#2B1D22]">
                12. Have you noticed unusual scalp hair thinning or a widening hair parting?
              </label>
              <div className="space-y-2">
                {[
                  { label: 'No — normal hair density with no noticeable thinning', val: 'none_normal' },
                  { label: 'Mild widening along my center part line', val: 'mild_widening_part' },
                  { label: 'Noticeable diffuse thinning on top or crown of scalp', val: 'noticeable_crown_diffuse' },
                  { label: 'Significant shedding or rapid hair loss', val: 'significant_shedding' },
                  { label: 'Not sure / Prefer not to answer', val: 'not_sure' },
                ].map((opt) => (
                  <button
                    key={opt.val}
                    type="button"
                    onClick={() => setFormData((prev) => ({ 
                      ...prev, 
                      scalpThinning: opt.val as any,
                      symptoms: { ...prev.symptoms, hairLoss: opt.val === 'mild_widening_part' || opt.val === 'noticeable_crown_diffuse' || opt.val === 'significant_shedding' }
                    }))}
                    className={`w-full p-3 rounded-xl text-xs font-medium border text-left transition-all cursor-pointer ${
                      formData.scalpThinning === opt.val
                        ? 'border-[#8A3B4D] bg-[#F9EBEF] text-[#8A3B4D] font-bold shadow-2xs'
                        : 'border-[#EFE8E6] bg-white text-[#533E46] hover:border-[#D5C7C9]'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Q13: Prior PCOS Evaluation or Diagnosis */}
            <div className="space-y-3 pt-2 border-t border-[#F5EDEB]">
              <label className="block text-xs font-bold text-[#2B1D22]">
                13. Have you previously been evaluated for or diagnosed with PCOS?
              </label>
              <div className="space-y-2">
                {[
                  { label: 'No prior evaluation or diagnosis', val: 'none' },
                  { label: 'Evaluated in the past, but no diagnosis was established', val: 'evaluated_no_diagnosis' },
                  { label: 'Formally diagnosed with PCOS by a healthcare professional', val: 'formally_diagnosed_pcos' },
                  { label: 'Diagnosed with another condition (e.g. thyroid disorder, prolactin)', val: 'evaluated_other_condition' },
                  { label: 'Not sure', val: 'not_sure' },
                ].map((opt) => (
                  <button
                    key={opt.val}
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, priorPCOSEvaluation: opt.val as any }))}
                    className={`w-full p-3 rounded-xl text-xs font-medium border text-left transition-all cursor-pointer ${
                      formData.priorPCOSEvaluation === opt.val
                        ? 'border-[#8A3B4D] bg-[#F9EBEF] text-[#8A3B4D] font-bold shadow-2xs'
                        : 'border-[#EFE8E6] bg-white text-[#533E46] hover:border-[#D5C7C9]'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              {/* Conditional Follow-up: Existing Diagnosis Status */}
              {formData.priorPCOSEvaluation === 'formally_diagnosed_pcos' && (
                <div className="p-3.5 rounded-2xl bg-[#FAF7F5] border border-[#EFE8E6] space-y-2 animate-in fade-in">
                  <span className="text-[11px] font-bold text-[#8A3B4D]">
                    Follow-up: When were you diagnosed and are you currently on a management plan?
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      { label: 'Diagnosed recently (<2 years) & in active care', val: 'recent_under_2yr' },
                      { label: 'Diagnosed >2 years ago & in active care', val: 'over_2yr' },
                      { label: 'Diagnosed in the past, not currently in active care', val: 'not_in_care' },
                    ].map((s) => (
                      <button
                        key={s.val}
                        type="button"
                        onClick={() => setFormData((prev) => ({ ...prev, pcosDiagnosisStatus: s.val as any }))}
                        className={`p-2 rounded-lg text-[11px] border text-left transition-all cursor-pointer ${
                          formData.pcosDiagnosisStatus === s.val
                            ? 'border-[#8A3B4D] bg-white text-[#8A3B4D] font-bold'
                            : 'border-[#EFE8E6] bg-white/70 text-[#533E46]'
                        }`}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Navigation */}
            <div className="pt-4 flex items-center justify-between border-t border-[#F5EDEB]">
              <button
                onClick={() => setCurrentStep(2)}
                className="px-4 py-2.5 rounded-xl border border-[#EFE8E6] text-xs font-semibold text-[#533E46] hover:bg-[#FAF7F5] flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <button
                onClick={() => setCurrentStep(4)}
                className="px-6 py-2.5 rounded-xl bg-[#8A3B4D] text-white text-xs font-semibold shadow-xs hover:bg-[#742E3F] flex items-center gap-1.5 cursor-pointer"
              >
                <span>Next: Medical & Family</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: AREA D — MEDICAL & FAMILY HISTORY (Q14 - Q16) */}
        {currentStep === 4 && (
          <div className="p-6 sm:p-10 rounded-3xl bg-white border border-[#EFE8E6] shadow-xs space-y-8">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FAF7F5] text-[11px] font-bold text-[#866F78] uppercase tracking-wider">
                Area D · Medical Background
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#2B1D22]">
                Metabolic, Family & Medication Confounders
              </h2>
              <p className="text-xs text-[#533E46]">
                Questions 14 to 16 evaluate glucose regulation, family history, and factors that mask or mimic PCOS.
              </p>
            </div>

            {/* Q14: Glucose & Metabolic History */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-[#2B1D22]">
                14. Has a healthcare professional identified elevated blood glucose or another metabolic condition?
              </label>
              <div className="space-y-2">
                {[
                  { label: 'No — blood tests have been within standard ranges', val: 'normal_tested' },
                  { label: 'Impaired fasting glucose or prediabetes (elevated HbA1c / fasting glucose)', val: 'prediabetes_impaired_glucose' },
                  { label: 'Type 2 Diabetes', val: 'type_2_diabetes' },
                  { label: 'Gestational diabetes (during a previous pregnancy)', val: 'gestational_diabetes' },
                  { label: 'Elevated blood pressure or abnormal lipid / cholesterol panel', val: 'elevated_bp_lipids' },
                  { label: 'Never tested / Not sure', val: 'never_tested_not_sure' },
                  { label: 'Prefer not to answer', val: 'prefer_not_to_say' },
                ].map((opt) => (
                  <button
                    key={opt.val}
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, bloodGlucoseMetabolic: opt.val as any }))}
                    className={`w-full p-3 rounded-xl text-xs font-medium border text-left transition-all cursor-pointer ${
                      formData.bloodGlucoseMetabolic === opt.val
                        ? 'border-[#8A3B4D] bg-[#F9EBEF] text-[#8A3B4D] font-bold shadow-2xs'
                        : 'border-[#EFE8E6] bg-white text-[#533E46] hover:border-[#D5C7C9]'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Q15: Family History */}
            <div className="space-y-2 pt-2 border-t border-[#F5EDEB]">
              <label className="block text-xs font-bold text-[#2B1D22]">
                15. Does a close family member have diagnosed PCOS or type 2 diabetes?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  { label: 'Mother or sister (first-degree) diagnosed with PCOS', val: 'first_degree_pcos' },
                  { label: 'First-degree family member with Type 2 Diabetes', val: 'family_type2_diabetes' },
                  { label: 'Both PCOS and Type 2 Diabetes in immediate family', val: 'both_pcos_and_diabetes' },
                  { label: 'Neither / No known family history', val: 'neither' },
                  { label: 'Not sure', val: 'not_sure' },
                ].map((opt) => (
                  <button
                    key={opt.val}
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, familyPCOSDiabetes: opt.val as any }))}
                    className={`p-3 rounded-xl text-xs font-medium border text-left transition-all cursor-pointer ${
                      formData.familyPCOSDiabetes === opt.val
                        ? 'border-[#8A3B4D] bg-[#F9EBEF] text-[#8A3B4D] font-bold shadow-2xs'
                        : 'border-[#EFE8E6] bg-white text-[#533E46] hover:border-[#D5C7C9]'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Q16: Medical Conditions & Medications (Confounders) */}
            <div className="space-y-3 pt-2 border-t border-[#F5EDEB]">
              <label className="block text-xs font-bold text-[#2B1D22]">
                16. Do you take medications or have conditions that affect menstrual regularity?
              </label>
              <p className="text-[11px] text-[#866F78]">
                Check all that apply. These factors can independently alter bleeding patterns or suppress symptoms.
              </p>
              
              <div className="space-y-2">
                {[
                  {
                    key: 'onHormonalBirthControl',
                    label: 'Currently taking hormonal birth control (pills, patch, hormonal IUD, implant)',
                    desc: 'Masks natural ovulatory rhythms and suppresses ovarian androgens.',
                  },
                  {
                    key: 'hasThyroidCondition',
                    label: 'Diagnosed thyroid condition (hypothyroidism or hyperthyroidism)',
                    desc: 'Thyroid dysfunction directly alters cycle regularity and metabolism.',
                  },
                  {
                    key: 'hasElevatedProlactin',
                    label: 'Elevated prolactin levels (hyperprolactinemia)',
                    desc: 'Inhibits gonadotropins and can cause missed periods.',
                  },
                  {
                    key: 'hasRecentAcuteStressOrWeightLoss',
                    label: 'Experienced extreme stress, severe illness, or rapid weight loss recently',
                    desc: 'Can induce hypothalamic amenorrhea, which mimics PCOS cycle patterns.',
                  },
                  {
                    key: 'noneOfAbove',
                    label: 'None of the above',
                    desc: 'No known confounding medication or endocrine condition.',
                  },
                ].map((item) => {
                  const isChecked = (formData.medicalConditionsMedications as any)?.[item.key] || false;
                  return (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => {
                        setFormData((prev) => {
                          const current = { ...prev.medicalConditionsMedications };
                          if (item.key === 'noneOfAbove') {
                            return {
                              ...prev,
                              medicalConditionsMedications: {
                                onHormonalBirthControl: false,
                                hasThyroidCondition: false,
                                hasElevatedProlactin: false,
                                hasRecentAcuteStressOrWeightLoss: false,
                                noneOfAbove: true,
                                notSureOrPreferNotToSay: false,
                              },
                              medicalHistory: {
                                ...prev.medicalHistory,
                                onHormonalContraception: 'no',
                              },
                            };
                          }
                          const updated = {
                            ...current,
                            noneOfAbove: false,
                            [item.key]: !isChecked,
                          };
                          return {
                            ...prev,
                            medicalConditionsMedications: updated,
                            medicalHistory: {
                              ...prev.medicalHistory,
                              onHormonalContraception: updated.onHormonalBirthControl ? 'yes' : 'no',
                            },
                          };
                        });
                      }}
                      className={`w-full p-3.5 rounded-2xl text-xs border text-left transition-all cursor-pointer flex items-start justify-between gap-3 ${
                        isChecked
                          ? 'border-[#8A3B4D] bg-[#F9EBEF] text-[#8A3B4D] shadow-2xs'
                          : 'border-[#EFE8E6] bg-white text-[#533E46] hover:border-[#D5C7C9]'
                      }`}
                    >
                      <div>
                        <div className="font-bold">{item.label}</div>
                        <div className="text-[11px] text-[#866F78] mt-0.5">{item.desc}</div>
                      </div>
                      <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 mt-0.5 ${
                        isChecked ? 'bg-[#8A3B4D] border-[#8A3B4D] text-white' : 'border-[#C3B4BA] bg-white'
                      }`}>
                        {isChecked && <Check className="w-3 h-3" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Navigation */}
            <div className="pt-4 flex items-center justify-between border-t border-[#F5EDEB]">
              <button
                onClick={() => setCurrentStep(3)}
                className="px-4 py-2.5 rounded-xl border border-[#EFE8E6] text-xs font-semibold text-[#533E46] hover:bg-[#FAF7F5] flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <button
                onClick={() => setCurrentStep(5)}
                className="px-6 py-2.5 rounded-xl bg-[#8A3B4D] text-white text-xs font-semibold shadow-xs hover:bg-[#742E3F] flex items-center gap-1.5 cursor-pointer"
              >
                <span>Next: Lifestyle & Habits</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 5: AREA E — LIFESTYLE & WELLBEING (Q17 - Q20) */}
        {currentStep === 5 && (
          <div className="p-6 sm:p-10 rounded-3xl bg-white border border-[#EFE8E6] shadow-xs space-y-8">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FAF7F5] text-[11px] font-bold text-[#866F78] uppercase tracking-wider">
                Area E · Supportive Habits
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#2B1D22]">
                Lifestyle & General Wellbeing
              </h2>
              <p className="text-xs text-[#533E46]">
                Questions 17 to 20 explore daily habits to shape personalized wellness recommendations.
              </p>
            </div>

            {/* Scientific Distinction Banner */}
            <div className="p-4 rounded-2xl bg-[#FAF7F5] border border-[#EFE8E6] flex items-start gap-3">
              <Info className="w-4 h-4 text-[#8A3B4D] shrink-0 mt-0.5" />
              <div className="text-xs text-[#533E46] leading-relaxed">
                <span className="font-bold text-[#2B1D22]">Clinical Note on Lifestyle: </span>
                Sleep, physical activity, nutrition, and stress are essential for endocrine balance, but they <strong>do not independently establish or cause PCOS</strong>. These responses are evaluated strictly to guide supportive daily wellness recommendations and receive zero points in your clinical screening score.
              </div>
            </div>

            {/* Q17: Sleep Hours & Quality */}
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-xs font-bold text-[#2B1D22]">
                  17a. How many hours do you usually sleep each night?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { label: 'Under 6 hours', val: 'under_6' },
                    { label: '6 to 7 hours', val: '6_to_7' },
                    { label: '7 to 8.5 hours (optimal)', val: '7_to_8_5' },
                    { label: 'More than 9 hours', val: 'over_9' },
                  ].map((opt) => (
                    <button
                      key={opt.val}
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, sleepHoursHabit: opt.val as any }))}
                      className={`p-3 rounded-xl text-xs border text-center transition-all cursor-pointer ${
                        formData.sleepHoursHabit === opt.val
                          ? 'border-[#8A3B4D] bg-[#F9EBEF] text-[#8A3B4D] font-bold shadow-2xs'
                          : 'border-[#EFE8E6] bg-white text-[#533E46] hover:border-[#D5C7C9]'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold text-[#2B1D22]">
                  17b. How would you rate your typical sleep quality?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { label: 'Restful and rejuvenating', val: 'restful' },
                    { label: 'Fair — occasional waking or delayed sleep', val: 'fair' },
                    { label: 'Frequently disrupted, restless, or insomnia', val: 'frequently_disrupted' },
                  ].map((opt) => (
                    <button
                      key={opt.val}
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, sleepQualityHabit: opt.val as any }))}
                      className={`p-3 rounded-xl text-xs border text-center transition-all cursor-pointer ${
                        formData.sleepQualityHabit === opt.val
                          ? 'border-[#8A3B4D] bg-[#F9EBEF] text-[#8A3B4D] font-bold shadow-2xs'
                          : 'border-[#EFE8E6] bg-white text-[#533E46] hover:border-[#D5C7C9]'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Q18: Stress Level */}
            <div className="space-y-2 pt-2 border-t border-[#F5EDEB]">
              <label className="block text-xs font-bold text-[#2B1D22]">
                18. How would you describe your current daily stress level?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { label: 'Low / Manageable', val: 'low_manageable' },
                  { label: 'Moderate', val: 'moderate' },
                  { label: 'High / Persistent', val: 'high_persistent' },
                  { label: 'Severe / Chronic', val: 'severe_chronic' },
                ].map((opt) => (
                  <button
                    key={opt.val}
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, stressLevelCurrent: opt.val as any }))}
                    className={`p-3 rounded-xl text-xs border text-center transition-all cursor-pointer ${
                      formData.stressLevelCurrent === opt.val
                        ? 'border-[#8A3B4D] bg-[#F9EBEF] text-[#8A3B4D] font-bold shadow-2xs'
                        : 'border-[#EFE8E6] bg-white text-[#533E46] hover:border-[#D5C7C9]'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Q19: Physical Activity */}
            <div className="space-y-2 pt-2 border-t border-[#F5EDEB]">
              <label className="block text-xs font-bold text-[#2B1D22]">
                19. How physically active are you during a typical week?
              </label>
              <div className="space-y-2">
                {[
                  { label: 'Mostly sedentary (under 30 minutes of structured movement per week)', val: 'sedentary_under_30m' },
                  { label: 'Light activity 1–2 days/week (casual walking, gentle yoga)', val: 'light_1_2_days' },
                  { label: 'Moderate exercise 3–4 days/week (brisk walking, swimming, cycling, Pilates)', val: 'moderate_3_4_days' },
                  { label: 'Active 5+ days/week (including strength/resistance training and aerobic sessions)', val: 'active_5_plus_days' },
                  { label: 'Prefer not to answer', val: 'prefer_not_to_say' },
                ].map((opt) => (
                  <button
                    key={opt.val}
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, physicalActivityLevel: opt.val as any }))}
                    className={`w-full p-3 rounded-xl text-xs font-medium border text-left transition-all cursor-pointer ${
                      formData.physicalActivityLevel === opt.val
                        ? 'border-[#8A3B4D] bg-[#F9EBEF] text-[#8A3B4D] font-bold shadow-2xs'
                        : 'border-[#EFE8E6] bg-white text-[#533E46] hover:border-[#D5C7C9]'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Q20: Dietary Pattern */}
            <div className="space-y-2 pt-2 border-t border-[#F5EDEB]">
              <label className="block text-xs font-bold text-[#2B1D22]">
                20. How would you describe your usual eating pattern?
              </label>
              <div className="space-y-2">
                {[
                  { label: 'Balanced whole foods (colorful vegetables, lean proteins, whole grains, healthy fats)', val: 'balanced_whole_foods' },
                  { label: 'Mediterranean-style or low-glycemic focus (olive oil, nuts, legumes, fish)', val: 'mediterranean_low_gi' },
                  { label: 'Plant-based (vegetarian or vegan)', val: 'plant_based' },
                  { label: 'Frequent refined carbohydrates, sweet treats, or skipped meals', val: 'frequent_processed_skipped' },
                  { label: 'Specific dietary restrictions (e.g. gluten-free, dairy-free)', val: 'specific_restrictions' },
                  { label: 'No consistent pattern / Prefer not to say', val: 'prefer_not_to_say' },
                ].map((opt) => (
                  <button
                    key={opt.val}
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, eatingPattern: opt.val as any }))}
                    className={`w-full p-3 rounded-xl text-xs font-medium border text-left transition-all cursor-pointer ${
                      formData.eatingPattern === opt.val
                        ? 'border-[#8A3B4D] bg-[#F9EBEF] text-[#8A3B4D] font-bold shadow-2xs'
                        : 'border-[#EFE8E6] bg-white text-[#533E46] hover:border-[#D5C7C9]'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="pt-4 flex items-center justify-between border-t border-[#F5EDEB]">
              <button
                onClick={() => setCurrentStep(4)}
                className="px-4 py-2.5 rounded-xl border border-[#EFE8E6] text-xs font-semibold text-[#533E46] hover:bg-[#FAF7F5] flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <button
                onClick={() => setCurrentStep(6)}
                className="px-6 py-2.5 rounded-xl bg-[#8A3B4D] text-white text-xs font-semibold shadow-xs hover:bg-[#742E3F] flex items-center gap-1.5 cursor-pointer"
              >
                <span>Review Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 6: REVIEW STEP BEFORE SUBMISSION */}
        {currentStep === 6 && (
          <div className="p-6 sm:p-10 rounded-3xl bg-white border border-[#EFE8E6] shadow-xs space-y-8 animate-in fade-in">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E7F3EF] text-[11px] font-bold text-[#204F43] uppercase tracking-wider">
                Step 6 of 6 · Review & Confirmation
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#2B1D22]">
                Review Your Assessment Responses
              </h2>
              <p className="text-xs text-[#533E46]">
                Verify your answers below before generating your evidence-informed screening summary and guidance.
              </p>
            </div>

            {/* Section Summary Cards with Edit Shortcuts */}
            <div className="space-y-4">
              
              {/* Card 1: Profile & Measurements */}
              <div className="p-4 rounded-2xl bg-[#FAF7F5] border border-[#EFE8E6] flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#866F78]">Area A · Profile</span>
                  <div className="text-xs font-bold text-[#2B1D22]">
                    Age: {formData.age} · First period: {formData.menarcheAge ? formData.menarcheAge + ' yrs' : 'Unspecified'} · BMI: {bmiProfile.bmiValue} ({bmiProfile.category})
                  </div>
                  <div className="text-[11px] text-[#533E46]">
                    Recent weight: {formData.weightChangeRecentMonths.replace('_', ' ')}
                  </div>
                </div>
                <button
                  onClick={() => setCurrentStep(1)}
                  className="px-3 py-1.5 rounded-lg border border-[#EFE8E6] bg-white text-xs text-[#8A3B4D] font-bold hover:bg-[#F9EBEF] flex items-center gap-1 shrink-0 cursor-pointer"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Edit</span>
                </button>
              </div>

              {/* Card 2: Menstrual Patterns */}
              <div className="p-4 rounded-2xl bg-[#FAF7F5] border border-[#EFE8E6] flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#866F78]">Area B · Menstrual Patterns</span>
                  <div className="text-xs font-bold text-[#2B1D22]">
                    Regularity: {formData.cycleRegularity.replace(/_/g, ' ')} · Length: {formData.cycleLengthDays} days
                  </div>
                  <div className="text-[11px] text-[#533E46]">
                    Gaps: {formData.missedPeriodsGaps.replace(/_/g, ' ')} · Trend: {formData.patternsChangedOverTime.replace(/_/g, ' ')}
                  </div>
                </div>
                <button
                  onClick={() => setCurrentStep(2)}
                  className="px-3 py-1.5 rounded-lg border border-[#EFE8E6] bg-white text-xs text-[#8A3B4D] font-bold hover:bg-[#F9EBEF] flex items-center gap-1 shrink-0 cursor-pointer"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Edit</span>
                </button>
              </div>

              {/* Card 3: Relevant Symptoms */}
              <div className="p-4 rounded-2xl bg-[#FAF7F5] border border-[#EFE8E6] flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#866F78]">Area C · Androgen Signs</span>
                  <div className="text-xs font-bold text-[#2B1D22]">
                    Acne: {formData.acneExperience.replace(/_/g, ' ')} · Coarse hair: {formData.facialBodyHair.replace(/_/g, ' ')}
                  </div>
                  <div className="text-[11px] text-[#533E46]">
                    Scalp thinning: {formData.scalpThinning.replace(/_/g, ' ')} · Prior PCOS: {formData.priorPCOSEvaluation.replace(/_/g, ' ')}
                  </div>
                </div>
                <button
                  onClick={() => setCurrentStep(3)}
                  className="px-3 py-1.5 rounded-lg border border-[#EFE8E6] bg-white text-xs text-[#8A3B4D] font-bold hover:bg-[#F9EBEF] flex items-center gap-1 shrink-0 cursor-pointer"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Edit</span>
                </button>
              </div>

              {/* Card 4: Medical & Family History */}
              <div className="p-4 rounded-2xl bg-[#FAF7F5] border border-[#EFE8E6] flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#866F78]">Area D · Medical & Family</span>
                  <div className="text-xs font-bold text-[#2B1D22]">
                    Glucose history: {formData.bloodGlucoseMetabolic.replace(/_/g, ' ')}
                  </div>
                  <div className="text-[11px] text-[#533E46]">
                    Family: {formData.familyPCOSDiabetes.replace(/_/g, ' ')}
                  </div>
                </div>
                <button
                  onClick={() => setCurrentStep(4)}
                  className="px-3 py-1.5 rounded-lg border border-[#EFE8E6] bg-white text-xs text-[#8A3B4D] font-bold hover:bg-[#F9EBEF] flex items-center gap-1 shrink-0 cursor-pointer"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Edit</span>
                </button>
              </div>

              {/* Card 5: Lifestyle & Wellbeing */}
              <div className="p-4 rounded-2xl bg-[#FAF7F5] border border-[#EFE8E6] flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#866F78]">Area E · Lifestyle (Zero Score Weight)</span>
                  <div className="text-xs font-bold text-[#2B1D22]">
                    Sleep: {formData.sleepHoursHabit.replace('_', ' ')} hrs ({formData.sleepQualityHabit}) · Stress: {formData.stressLevelCurrent}
                  </div>
                  <div className="text-[11px] text-[#533E46]">
                    Movement: {formData.physicalActivityLevel.replace(/_/g, ' ')} · Eating: {formData.eatingPattern.replace(/_/g, ' ')}
                  </div>
                </div>
                <button
                  onClick={() => setCurrentStep(5)}
                  className="px-3 py-1.5 rounded-lg border border-[#EFE8E6] bg-white text-xs text-[#8A3B4D] font-bold hover:bg-[#F9EBEF] flex items-center gap-1 shrink-0 cursor-pointer"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Edit</span>
                </button>
              </div>
            </div>

            {/* Mandatory Disclaimer Acknowledgement */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#FFF8F9] border border-[#F4E3E6] space-y-3">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#8A3B4D] shrink-0 mt-0.5" />
                <div className="space-y-1 text-xs">
                  <div className="font-bold text-[#2B1D22]">Mandatory Medical Disclaimer</div>
                  <p className="text-[#533E46] leading-relaxed">
                    {MANDATORY_ASSESSMENT_DISCLAIMER}
                  </p>
                </div>
              </div>

              <label className="flex items-center gap-2.5 pt-2 border-t border-[#F5EDEB] cursor-pointer text-xs font-semibold text-[#2B1D22]">
                <input
                  type="checkbox"
                  checked={acknowledgedDisclaimer}
                  onChange={(e) => setAcknowledgedDisclaimer(e.target.checked)}
                  className="w-4 h-4 rounded border-[#C3B4BA] text-[#8A3B4D] focus:ring-[#8A3B4D]"
                />
                <span>I understand this screening tool provides educational guidance and is not a clinical diagnosis.</span>
              </label>
            </div>

            {/* Final Action Controls */}
            <div className="pt-4 flex items-center justify-between border-t border-[#F5EDEB]">
              <button
                onClick={() => setCurrentStep(5)}
                className="px-4 py-2.5 rounded-xl border border-[#EFE8E6] text-xs font-semibold text-[#533E46] hover:bg-[#FAF7F5] flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous Step</span>
              </button>

              <button
                onClick={handleSubmitAssessment}
                disabled={!acknowledgedDisclaimer}
                className={`px-8 py-3 rounded-xl text-xs font-semibold shadow-xs flex items-center gap-2 transition-all cursor-pointer ${
                  acknowledgedDisclaimer
                    ? 'bg-[#8A3B4D] text-white hover:bg-[#742E3F]'
                    : 'bg-[#E5D7DA] text-[#866F78] cursor-not-allowed opacity-70'
                }`}
              >
                <Sparkles className="w-4 h-4" />
                <span>Submit & Generate Results</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
