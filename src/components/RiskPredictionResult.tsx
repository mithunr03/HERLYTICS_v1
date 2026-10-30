import React, { useState } from 'react';
import { AppScreen, RiskPredictionResult as RiskResultType } from '../types';
import { MANDATORY_ASSESSMENT_DISCLAIMER } from '../data/assessmentLogic';
import { 
  ShieldCheck, 
  Sparkles, 
  Utensils, 
  Calendar, 
  ArrowRight, 
  RotateCcw, 
  BookOpen, 
  CheckCircle2, 
  AlertCircle, 
  HelpCircle, 
  FileText, 
  Activity, 
  Heart,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  Moon,
  Info,
  Clock,
  Check
} from 'lucide-react';

interface RiskPredictionResultProps {
  riskResult: RiskResultType;
  setScreen: (screen: AppScreen) => void;
}

export const RiskPredictionResult: React.FC<RiskPredictionResultProps> = ({ riskResult, setScreen }) => {
  const [showMethodologyAudit, setShowMethodologyAudit] = useState(true);

  const { 
    numericScreeningScore = riskResult.scorePercentage || 25,
    riskCategory, 
    screeningCategory,
    categoryTitle,
    categorySubtitle,
    summary, 
    keyFactors, 
    timestamp,
    lastUpdatedTimestamp = timestamp,
    isLatestSavedResponses = true,
    scoreBreakdown,
    scoringMethodology,
    reportedAnswersSummary,
    factorsToDiscuss,
    lifestyleWellnessOverview,
    featureConnections,
    screeningSummary,
    evaluationGuidance,
    disclaimer = MANDATORY_ASSESSMENT_DISCLAIMER
  } = riskResult;

  const getStatusBadge = () => {
    switch (screeningCategory) {
      case 'established_diagnosis':
        return {
          bg: 'bg-[#F3EFF8]',
          border: 'border-[#E4D9F0]',
          text: 'text-[#613D87]',
          title: 'Established PCOS Diagnosis — Active Care',
          icon: ShieldCheck,
        };
      case 'clinical_evaluation_recommended':
        return {
          bg: 'bg-[#F9EBEF]',
          border: 'border-[#F2D6DC]',
          text: 'text-[#8A3B4D]',
          title: 'Clinical Consultation Recommended',
          icon: AlertCircle,
        };
      case 'discuss_with_doctor':
        return {
          bg: 'bg-[#FFF8F9]',
          border: 'border-[#F4E3E6]',
          text: 'text-[#8A3B4D]',
          title: 'Discussion with Healthcare Provider Advised',
          icon: AlertCircle,
        };
      default:
        return {
          bg: 'bg-[#E7F3EF]',
          border: 'border-[#CDE5DE]',
          text: 'text-[#204F43]',
          title: 'Routine Baseline Monitoring',
          icon: CheckCircle2,
        };
    }
  };

  const status = getStatusBadge();
  const StatusIcon = status.icon;

  return (
    <div className="min-h-[calc(100vh-80px)] p-4 sm:p-6 lg:p-10 bg-[#FAF7F5]">
      <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in">
        
        {/* TOP HEADER */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#EFE8E6] text-xs font-semibold text-[#866F78] shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#8A3B4D]" />
            <span>2023 International Clinical Guideline Framework · Screened on {timestamp}</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#2B1D22]">
            Wellness Screening & Clinical Interpretation
          </h1>
          <p className="text-xs sm:text-sm text-[#533E46] max-w-2xl mx-auto leading-relaxed">
            A transparent, evidence-informed summary separating reported symptoms, medical evaluation guidance, and supportive daily wellness habits.
          </p>
        </div>

        {/* LAST UPDATED STATUS BANNER */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-white border border-[#EFE8E6] shadow-2xs text-xs">
          <div className="flex items-center gap-2 text-[#533E46]">
            <Clock className="w-4 h-4 text-[#8A3B4D]" />
            <span>
              <strong>Last Updated:</strong> {lastUpdatedTimestamp}
            </span>
            <span className="text-[#866F78]">·</span>
            <span className="inline-flex items-center gap-1 text-[#204F43] font-semibold bg-[#E7F3EF] px-2 py-0.5 rounded-full text-[10px]">
              <Check className="w-3 h-3" />
              <span>Current Saved Responses</span>
            </span>
          </div>

          <button
            onClick={() => setScreen('assessment')}
            className="text-xs font-bold text-[#8A3B4D] hover:underline flex items-center gap-1 self-start sm:self-auto cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Update Answers</span>
          </button>
        </div>

        {/* MANDATORY MEDICAL DISCLAIMER BANNER */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#FFF8F9] border border-[#F4E3E6] flex items-start gap-3 shadow-2xs">
          <ShieldCheck className="w-5 h-5 text-[#8A3B4D] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <div className="text-xs font-bold text-[#2B1D22]">Important Educational Notice</div>
            <p className="text-xs text-[#533E46] leading-relaxed">
              {disclaimer}
            </p>
          </div>
        </div>

        {/* 1. PRIMARY NUMERIC SCREENING INDICATOR CARD */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#EFE8E6] shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#F5EDEB] pb-5">
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#866F78]">
                Screening Classification · Evidence-Informed
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#2B1D22]">
                {categoryTitle || status.title}
              </h2>
              {categorySubtitle && (
                <p className="text-xs text-[#866F78]">{categorySubtitle}</p>
              )}
            </div>

            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold border ${status.bg} ${status.border} ${status.text} self-start sm:self-auto`}>
              <StatusIcon className="w-4 h-4 shrink-0" />
              <span>{status.title}</span>
            </div>
          </div>

          {/* NUMERIC SCREENING GAUGE CALLOUT */}
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#FAF7F5] via-[#FFFBFB] to-[#F9EBEF] border border-[#F4E3E6] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1.5 max-w-lg">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A3B4D]">
                Guideline-Informed Screening Index
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-bold tracking-tight text-[#2B1D22]">
                  {numericScreeningScore}
                </span>
                <span className="text-sm font-bold text-[#866F78]">/ 100</span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white text-[#8A3B4D] border border-[#F4E3E6] ml-2">
                  Criteria Scale
                </span>
              </div>
              <p className="text-xs text-[#533E46] leading-relaxed">
                This numeric indicator is calculated directly from your reported ovulatory patterns, physical signs, and metabolic context. It represents alignment with guideline screening criteria and is <strong>not a medical probability percentage or diagnosis</strong>.
              </p>
            </div>

            {/* Scale Spectrum Mini Bar */}
            <div className="w-full md:w-56 space-y-2 bg-white p-3.5 rounded-xl border border-[#EFE8E6]">
              <div className="flex justify-between text-[10px] font-bold text-[#866F78]">
                <span>Routine (0-29)</span>
                <span>Review (30-59)</span>
                <span>Consult (60+)</span>
              </div>
              <div className="h-2 w-full bg-[#EFE8E6] rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-500 ${
                    numericScreeningScore >= 60 
                      ? 'bg-[#8A3B4D]' 
                      : numericScreeningScore >= 30 
                      ? 'bg-[#D97D8E]' 
                      : 'bg-[#5B9F8E]'
                  }`}
                  style={{ width: `${Math.min(100, Math.max(10, numericScreeningScore))}%` }}
                />
              </div>
              <div className="text-[10px] text-center font-medium text-[#866F78]">
                Your score: {numericScreeningScore} / 100
              </div>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#533E46] leading-relaxed">
            {summary}
          </p>

          {/* Key Factor Tags */}
          <div className="flex flex-wrap gap-2 pt-1">
            {keyFactors.map((factor, idx) => (
              <span key={idx} className="px-3 py-1 rounded-xl bg-[#FAF7F5] text-xs font-medium text-[#533E46] border border-[#EFE8E6]">
                {factor}
              </span>
            ))}
          </div>

          {/* 2. WHY THIS RESULT APPEARED: TRANSPARENT SCORE BREAKDOWN AUDIT */}
          {scoreBreakdown && (
            <div className="pt-4 border-t border-[#F5EDEB] space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-[#8A3B4D]" />
                  <span className="text-xs font-bold text-[#2B1D22]">
                    Why This Result Appeared: Clinical Score Breakdown (0–100 Scale)
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setShowMethodologyAudit(!showMethodologyAudit)}
                  className="text-xs text-[#8A3B4D] font-bold hover:underline cursor-pointer flex items-center gap-1"
                >
                  <span>{showMethodologyAudit ? 'Hide Audit' : 'Show Details'}</span>
                  {showMethodologyAudit ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
              </div>

              {showMethodologyAudit && (
                <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF7F5] border border-[#EFE8E6] space-y-4 text-xs text-[#533E46] animate-in fade-in">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    
                    {/* Domain 1: Ovulatory */}
                    <div className="p-3.5 rounded-xl bg-white border border-[#EFE8E6] space-y-1.5">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-[#2B1D22]">1. Ovulatory Criteria</span>
                        <span className="font-bold text-[#8A3B4D]">{scoreBreakdown.ovulatory.score} / {scoreBreakdown.ovulatory.maxScore} pts</span>
                      </div>
                      <p className="text-[11px] text-[#866F78] leading-relaxed">
                        {scoreBreakdown.ovulatory.rationale}
                      </p>
                      {scoreBreakdown.ovulatory.contributingFactors.length > 0 && (
                        <div className="text-[11px] text-[#533E46] font-medium pt-1 border-t border-[#F5EDEB]">
                          {scoreBreakdown.ovulatory.contributingFactors.join('; ')}
                        </div>
                      )}
                    </div>

                    {/* Domain 2: Androgen Signs */}
                    <div className="p-3.5 rounded-xl bg-white border border-[#EFE8E6] space-y-1.5">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-[#2B1D22]">2. Androgen Signs</span>
                        <span className="font-bold text-[#8A3B4D]">{scoreBreakdown.androgen.score} / {scoreBreakdown.androgen.maxScore} pts</span>
                      </div>
                      <p className="text-[11px] text-[#866F78] leading-relaxed">
                        {scoreBreakdown.androgen.rationale}
                      </p>
                      {scoreBreakdown.androgen.contributingFactors.length > 0 && (
                        <div className="text-[11px] text-[#533E46] font-medium pt-1 border-t border-[#F5EDEB]">
                          {scoreBreakdown.androgen.contributingFactors.join('; ')}
                        </div>
                      )}
                    </div>

                    {/* Domain 3: Metabolic Context */}
                    <div className="p-3.5 rounded-xl bg-white border border-[#EFE8E6] space-y-1.5">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-[#2B1D22]">3. Metabolic Context</span>
                        <span className="font-bold text-[#8A3B4D]">{scoreBreakdown.metabolic.score} / {scoreBreakdown.metabolic.maxScore} pts</span>
                      </div>
                      <p className="text-[11px] text-[#866F78] leading-relaxed">
                        {scoreBreakdown.metabolic.rationale}
                      </p>
                      {scoreBreakdown.metabolic.contributingFactors.length > 0 && (
                        <div className="text-[11px] text-[#533E46] font-medium pt-1 border-t border-[#F5EDEB]">
                          {scoreBreakdown.metabolic.contributingFactors.join('; ')}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Domain 4: Lifestyle Zero Score Callout */}
                  <div className="p-3 rounded-xl bg-[#E7F3EF] border border-[#CDE5DE] text-[11px] text-[#204F43] flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5B9F8E] shrink-0 mt-0.5" />
                    <div>
                      <strong>Lifestyle & Habits (0 Points): </strong>
                      Sleep quality, perceived stress, exercise, and food choices are evaluated strictly for supportive wellness advice. Per international guidelines, lifestyle factors receive 0 points in the PCOS screening score.
                    </div>
                  </div>

                  {/* Missing Data & Uncertainty Notice */}
                  {scoringMethodology?.missingDataNote && (
                    <div className="text-[11px] text-[#866F78]">
                      <strong>Data Handling: </strong> {scoringMethodology.missingDataNote}
                    </div>
                  )}

                  {/* Confounders */}
                  {scoringMethodology?.confounderNotes && scoringMethodology.confounderNotes.length > 0 && (
                    <div className="p-3 rounded-xl bg-[#FFF8F9] border border-[#F4E3E6] text-[11px] text-[#8A3B4D] space-y-1">
                      <span className="font-bold">Detected Clinical Confounders:</span>
                      <ul className="list-disc list-inside space-y-0.5">
                        {scoringMethodology.confounderNotes.map((c, i) => (
                          <li key={i}>{c}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* 3. REPORTED FINDINGS (Summary of actual reported responses) */}
        <section aria-label="Reported Answers Summary" className="space-y-4">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#8A3B4D]" />
            <h2 className="font-serif text-2xl font-bold text-[#2B1D22]">
              Reported Findings
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Cycle History */}
            <div className="p-5 rounded-3xl bg-white border border-[#EFE8E6] shadow-2xs space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#2B1D22]">
                <Calendar className="w-4 h-4 text-[#8A3B4D]" />
                <span>Menstrual Cycle Patterns</span>
              </div>
              <p className="text-xs text-[#533E46] leading-relaxed">
                {reportedAnswersSummary?.cyclePatternSummary || screeningSummary?.cyclePatternStatus}
              </p>
            </div>

            {/* Androgen Observations */}
            <div className="p-5 rounded-3xl bg-white border border-[#EFE8E6] shadow-2xs space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#2B1D22]">
                <Activity className="w-4 h-4 text-[#8A3B4D]" />
                <span>Physical Androgen Observations</span>
              </div>
              <p className="text-xs text-[#533E46] leading-relaxed">
                {reportedAnswersSummary?.androgenSymptomsSummary || screeningSummary?.androgenStatus}
              </p>
            </div>

            {/* Metabolic Background & BMI */}
            <div className="p-5 rounded-3xl bg-white border border-[#EFE8E6] shadow-2xs space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#2B1D22]">
                <Heart className="w-4 h-4 text-[#8A3B4D]" />
                <span>Metabolic Health Context & BMI</span>
              </div>
              <div className="space-y-1 text-xs text-[#533E46] leading-relaxed">
                <p>{reportedAnswersSummary?.bmiSummary}</p>
                <p>{reportedAnswersSummary?.medicalMetabolicSummary || screeningSummary?.metabolicStatus}</p>
              </div>
            </div>

            {/* Profile & Age Factors */}
            <div className="p-5 rounded-3xl bg-white border border-[#EFE8E6] shadow-2xs space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#2B1D22]">
                <Sparkles className="w-4 h-4 text-[#8A3B4D]" />
                <span>Developmental & Age Nuances</span>
              </div>
              <p className="text-xs text-[#533E46] leading-relaxed">
                {reportedAnswersSummary?.ageAndMenarche}
              </p>
            </div>
          </div>
        </section>

        {/* 4. FACTORS TO DISCUSS WITH A HEALTHCARE PROFESSIONAL */}
        <section aria-label="Clinical Evaluation Guidance" className="space-y-4">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-[#8A3B4D]" />
            <h2 className="font-serif text-2xl font-bold text-[#2B1D22]">
              Factors to Discuss with a Healthcare Professional
            </h2>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#EFE8E6] shadow-xs space-y-6">
            <p className="text-xs sm:text-sm text-[#533E46] leading-relaxed">
              When scheduling an evaluation with your general practitioner, gynecologist, or endocrinologist, these personalized discussion points can help guide your conversation:
            </p>

            <div className="space-y-4">
              {factorsToDiscuss && factorsToDiscuss.length > 0 ? (
                factorsToDiscuss.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-[#FAF7F5] border border-[#EFE8E6] space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#8A3B4D]">
                      {item.category}
                    </span>
                    <p className="text-xs text-[#533E46] leading-relaxed">
                      {item.observation}
                    </p>
                    <div className="pt-2 border-t border-[#F5EDEB] space-y-1.5">
                      <span className="text-[11px] font-semibold text-[#2B1D22]">Suggested Questions:</span>
                      <ul className="space-y-1">
                        {item.suggestedQuestions.map((q, qIdx) => (
                          <li key={qIdx} className="text-xs text-[#533E46] flex items-start gap-2">
                            <span className="text-[#8A3B4D] font-bold">·</span>
                            <span>{q}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-4 rounded-2xl bg-[#FAF7F5] border border-[#EFE8E6] space-y-2 text-xs text-[#533E46]">
                  <p>Continue routine annual preventative gynecological and wellness visits.</p>
                </div>
              )}
            </div>

            {/* Standard Clinical Tests Demystified */}
            <div className="p-5 rounded-2xl bg-[#FAF7F5] border border-[#EFE8E6] space-y-3">
              <span className="text-xs font-bold text-[#2B1D22]">Standard Clinical Diagnostics Demystified</span>
              <p className="text-xs text-[#533E46] leading-relaxed">
                Per the 2023 International Guideline, a formal diagnosis of PCOS requires in-person clinical assessment and at least 2 of 3 Rotterdam criteria (ovulatory dysfunction, clinical or biochemical hyperandrogenism, polycystic ovarian morphology on ultrasound) after excluding thyroid or prolactin conditions:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#533E46]">
                <div className="p-2.5 rounded-xl bg-white border border-[#EFE8E6]">
                  <strong>Biochemical Hormone Panel: </strong> Total & Free Testosterone, DHEAS, and LH/FSH ratio.
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-[#EFE8E6]">
                  <strong>Metabolic Assays: </strong> Fasting plasma glucose, HbA1c, and fasting lipid panel.
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-[#EFE8E6]">
                  <strong>Exclusion Assays: </strong> Serum TSH (thyroid) and prolactin to rule out mimicking disorders.
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-[#EFE8E6]">
                  <strong>Pelvic Ultrasound: </strong> Evaluates ovarian antral follicle count and endometrial thickness (not recommended in adolescents &lt;8 yrs post-menarche).
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. LIFESTYLE AND WELLNESS OVERVIEW (Strictly separated from PCOS score) */}
        <section aria-label="Lifestyle & Wellness Overview" className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-[#8A3B4D]" />
              <h2 className="font-serif text-2xl font-bold text-[#2B1D22]">
                Lifestyle & Wellness Overview
              </h2>
            </div>
            <span className="text-[11px] font-bold text-[#5B9F8E] bg-[#E7F3EF] px-3 py-1 rounded-full border border-[#CDE5DE]">
              Zero Weight in PCOS Score
            </span>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#EFE8E6] shadow-xs space-y-5">
            <p className="text-xs text-[#533E46] leading-relaxed">
              {lifestyleWellnessOverview?.distinctionNote}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-[#FAF7F5] border border-[#EFE8E6] space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-[#2B1D22]">
                  <Moon className="w-4 h-4 text-[#7056AD]" />
                  <span>Sleep & Circadian Rhythm</span>
                </div>
                <p className="text-xs text-[#533E46]">
                  {lifestyleWellnessOverview?.sleepSummary}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF7F5] border border-[#EFE8E6] space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-[#2B1D22]">
                  <Activity className="w-4 h-4 text-[#8A3B4D]" />
                  <span>Physical Activity & Movement</span>
                </div>
                <p className="text-xs text-[#533E46]">
                  {lifestyleWellnessOverview?.activitySummary}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF7F5] border border-[#EFE8E6] space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-[#2B1D22]">
                  <Utensils className="w-4 h-4 text-[#5B9F8E]" />
                  <span>Nutrition & Eating Pattern</span>
                </div>
                <p className="text-xs text-[#533E46]">
                  {lifestyleWellnessOverview?.nutritionSummary}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF7F5] border border-[#EFE8E6] space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-[#2B1D22]">
                  <Sparkles className="w-4 h-4 text-[#8A3B4D]" />
                  <span>Stress Regulation & Nervous System</span>
                </div>
                <p className="text-xs text-[#533E46]">
                  {lifestyleWellnessOverview?.stressSummary}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. CONNECT ASSESSMENT RESULTS TO EXISTING HERLYTICS FEATURES */}
        <section aria-label="Connected App Features" className="space-y-4">
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#866F78]">
              Personalized Feature Integration
            </span>
            <h2 className="font-serif text-2xl font-bold text-[#2B1D22]">
              Recommended Next Steps & Interactive Tools
            </h2>
            <p className="text-xs text-[#533E46]">
              Based on your reported responses, explore these tailored tools within HerLytics:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Connector 1: Cycle Tracker */}
            {featureConnections?.cycleTracker && (
              <div 
                onClick={() => setScreen(featureConnections.cycleTracker.screenTarget)}
                className="p-5 rounded-3xl bg-white border border-[#EFE8E6] shadow-2xs hover:border-[#8A3B4D] transition-all cursor-pointer space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-xl bg-[#F9EBEF] flex items-center justify-center text-[#8A3B4D]">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#FAF7F5] text-[#8A3B4D] border border-[#F4E3E6]">
                      {featureConnections.cycleTracker.badge}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-[#2B1D22]">{featureConnections.cycleTracker.title}</h3>
                  <p className="text-xs text-[#533E46] leading-relaxed">{featureConnections.cycleTracker.detail}</p>
                </div>
                <div className="pt-2 border-t border-[#F5EDEB] flex items-center justify-between text-xs font-bold text-[#8A3B4D]">
                  <span>Open Cycle Tracker</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            )}

            {/* Connector 2: Nutrition Planner */}
            {featureConnections?.nutritionPlanner && (
              <div 
                onClick={() => setScreen(featureConnections.nutritionPlanner.screenTarget)}
                className="p-5 rounded-3xl bg-white border border-[#EFE8E6] shadow-2xs hover:border-[#5B9F8E] transition-all cursor-pointer space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-xl bg-[#E7F3EF] flex items-center justify-center text-[#204F43]">
                      <Utensils className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#FAF7F5] text-[#204F43] border border-[#CDE5DE]">
                      {featureConnections.nutritionPlanner.badge}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-[#2B1D22]">{featureConnections.nutritionPlanner.title}</h3>
                  <p className="text-xs text-[#533E46] leading-relaxed">{featureConnections.nutritionPlanner.detail}</p>
                </div>
                <div className="pt-2 border-t border-[#F5EDEB] flex items-center justify-between text-xs font-bold text-[#204F43]">
                  <span>Explore Meal Plans</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            )}

            {/* Connector 3: Education & Sleep */}
            {featureConnections?.lifestyleEducation && (
              <div 
                onClick={() => setScreen(featureConnections.lifestyleEducation.screenTarget)}
                className="p-5 rounded-3xl bg-white border border-[#EFE8E6] shadow-2xs hover:border-[#7056AD] transition-all cursor-pointer space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-xl bg-[#EDE8F5] flex items-center justify-center text-[#7056AD]">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#FAF7F5] text-[#7056AD] border border-[#E4D9F0]">
                      {featureConnections.lifestyleEducation.badge}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-[#2B1D22]">{featureConnections.lifestyleEducation.title}</h3>
                  <p className="text-xs text-[#533E46] leading-relaxed">{featureConnections.lifestyleEducation.detail}</p>
                </div>
                <div className="pt-2 border-t border-[#F5EDEB] flex items-center justify-between text-xs font-bold text-[#7056AD]">
                  <span>Read Education Hub</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            )}

            {/* Connector 4: Recipe Library */}
            <div 
              onClick={() => setScreen('recipes')}
              className="p-5 rounded-3xl bg-white border border-[#EFE8E6] shadow-2xs hover:border-[#8A3B4D] transition-all cursor-pointer space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-[#F9EBEF] flex items-center justify-center text-[#8A3B4D]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#FAF7F5] text-[#8A3B4D] border border-[#F4E3E6]">
                    Seed Cycling
                  </span>
                </div>
                <h3 className="text-sm font-bold text-[#2B1D22]">Anti-Inflammatory Recipes</h3>
                <p className="text-xs text-[#533E46] leading-relaxed">
                  Browse hormone-balancing Buddha bowls, low-glycemic smoothies, and phase-matched snacks.
                </p>
              </div>
              <div className="pt-2 border-t border-[#F5EDEB] flex items-center justify-between text-xs font-bold text-[#8A3B4D]">
                <span>Browse Recipes</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM ACTION BAR: REVIEW ASSESSMENT / RETAKE */}
        <div className="p-6 rounded-3xl bg-white border border-[#EFE8E6] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-xs font-bold text-[#2B1D22]">Need to update your responses?</h4>
            <p className="text-[11px] text-[#866F78]">
              You can review or adjust your assessment at any time as your cycle or symptoms evolve.
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => setScreen('assessment')}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-[#EFE8E6] text-xs font-bold text-[#533E46] hover:bg-[#FAF7F5] flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Review / Retake Assessment</span>
            </button>

            <button
              onClick={() => setScreen('dashboard')}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#8A3B4D] text-white text-xs font-bold shadow-xs hover:bg-[#742E3F] flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              <span>Back to Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
