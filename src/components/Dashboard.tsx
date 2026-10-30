import React from 'react';
import { AppScreen, UserProfile, RiskPredictionResult } from '../types';
import { 
  Sparkles, 
  Calendar, 
  Activity, 
  Droplets, 
  Utensils, 
  BookOpen, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  ShieldCheck, 
  Moon, 
  Compass,
  Heart,
  TrendingUp,
  RotateCcw
} from 'lucide-react';

interface DashboardProps {
  userProfile: UserProfile;
  riskResult: RiskPredictionResult;
  setScreen: (screen: AppScreen) => void;
  setProfile?: React.Dispatch<React.SetStateAction<UserProfile>>;
}

export const Dashboard: React.FC<DashboardProps> = ({ 
  userProfile, 
  riskResult, 
  setScreen,
  setProfile 
}) => {
  const firstName = userProfile.name.split(' ')[0] || 'Maya';
  const hasCompletedAssessment = Boolean(userProfile.hasCompletedAssessment);

  // Quick toggle helper for testing / reviewing both states
  const toggleAssessmentState = () => {
    if (setProfile) {
      setProfile((prev) => ({
        ...prev,
        hasCompletedAssessment: !prev.hasCompletedAssessment,
      }));
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8 animate-in fade-in">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* 1. GREETING & ASSESSMENT STATUS HEADER */}
        <section 
          aria-label="Dashboard Overview"
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 sm:p-8 rounded-3xl border border-[#EFE8E6] shadow-2xs"
        >
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#2B1D22]">
                Good morning, {firstName}
              </h1>
              {/* Status Badge */}
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                hasCompletedAssessment
                  ? 'bg-[#E7F3EF] text-[#204F43] border border-[#CDE5DE]'
                  : 'bg-[#FFF8F9] text-[#8A3B4D] border border-[#F4E3E6]'
              }`}>
                {hasCompletedAssessment ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#5B9F8E]" />
                    <span>Assessment Active</span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-3.5 h-3.5 text-[#8A3B4D]" />
                    <span>Assessment Pending</span>
                  </>
                )}
              </span>
            </div>
            <p className="text-sm text-[#533E46]">
              {hasCompletedAssessment
                ? "Here is your personalized daily hormonal health summary and recommendations."
                : "Welcome to HerLytics. Complete your assessment to establish your baseline and unlock insights."}
            </p>
          </div>

          <div className="flex items-center gap-2.5 flex-wrap">
            {/* Primary Action Button */}
            <button
              onClick={() => setScreen('assessment')}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold shadow-xs flex items-center gap-2 transition-all cursor-pointer ${
                hasCompletedAssessment
                  ? 'bg-white border border-[#EFE8E6] text-[#533E46] hover:bg-[#FAF7F5] hover:border-[#D5C7C9]'
                  : 'bg-[#8A3B4D] text-white hover:bg-[#742E3F]'
              }`}
            >
              <Sparkles className="w-4 h-4 text-[#8A3B4D]" />
              <span>{hasCompletedAssessment ? 'Review Assessment' : 'Start Assessment'}</span>
            </button>

            {/* Assessment State Toggle Demo Helper */}
            {setProfile && (
              <button
                onClick={toggleAssessmentState}
                title="Toggle between New User (Pending) and Returning User (Active) states"
                className="px-3 py-2 rounded-xl border border-dashed border-[#C3B4BA] text-[11px] font-medium text-[#866F78] hover:text-[#2B1D22] hover:bg-[#FAF7F5] flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Switch View ({hasCompletedAssessment ? 'Active' : 'Pending'})</span>
              </button>
            )}
          </div>
        </section>

        {/* 2. ASSESSMENT-FIRST CALLOUT FOR NEW USERS (Shown only when pending) */}
        {!hasCompletedAssessment && (
          <section 
            aria-label="Pending Assessment Guidance"
            className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#FAF4F4] via-[#FFFBFB] to-[#F7EEEC] border border-[#F4E3E6] shadow-xs space-y-6"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#F4E3E6] text-xs font-semibold text-[#8A3B4D]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>3-Minute Initial Screening</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#2B1D22]">
                  Establish Your Clinical Baseline
                </h2>
                <p className="text-xs sm:text-sm text-[#533E46] leading-relaxed max-w-2xl">
                  To calculate your estimated hormonal balance scores, identify potential PCOS risk indicators, and provide tailored cycle recipes, HerLytics requires your responses. We keep your data private and non-diagnostic.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-medium text-[#533E46]">
                  <div className="flex items-center gap-2 bg-white/70 p-2.5 rounded-xl border border-[#F4E3E6]">
                    <CheckCircle2 className="w-4 h-4 text-[#5B9F8E] shrink-0" />
                    <span>Hormone Pattern Analysis</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/70 p-2.5 rounded-xl border border-[#F4E3E6]">
                    <CheckCircle2 className="w-4 h-4 text-[#5B9F8E] shrink-0" />
                    <span>Cycle-Sync Nutrition</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/70 p-2.5 rounded-xl border border-[#F4E3E6]">
                    <CheckCircle2 className="w-4 h-4 text-[#5B9F8E] shrink-0" />
                    <span>Preventive Guidance</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-[#F4E3E6] shadow-2xs space-y-3 text-center">
                <Sparkles className="w-8 h-8 text-[#8A3B4D]" />
                <p className="text-xs font-semibold text-[#2B1D22]">Ready to get started?</p>
                <button
                  onClick={() => setScreen('assessment')}
                  className="w-full py-3 rounded-xl bg-[#8A3B4D] text-white text-xs font-semibold shadow-xs hover:bg-[#742E3F] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Start Wellness Assessment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="text-[10px] text-[#866F78]">No clinical records required</span>
              </div>
            </div>
          </section>
        )}

        {/* 3. RELEVANT HEALTH OVERVIEW (Balanced 4-Card Grid on Desktop, Vertical on Mobile) */}
        <section aria-label="Health Overview Grid">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            
            {/* Card 1: Wellness Score */}
            <div className="p-5 sm:p-6 rounded-3xl bg-white border border-[#EFE8E6] shadow-2xs space-y-3 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#866F78]">Wellness Score</span>
                <div className="w-8 h-8 rounded-xl bg-[#F9EBEF] flex items-center justify-center text-[#8A3B4D]">
                  <Heart className="w-4 h-4" />
                </div>
              </div>

              <div>
                {hasCompletedAssessment ? (
                  <>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl font-bold text-[#2B1D22]">{userProfile.wellnessScore}</span>
                      <span className="text-xs font-semibold text-[#866F78]">/ 100</span>
                    </div>
                    <div className="text-xs text-[#5B9F8E] font-medium flex items-center gap-1 mt-1">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>Balanced Rhythm</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl font-bold text-[#C3B4BA]">--</span>
                      <span className="text-xs font-semibold text-[#866F78]">/ 100</span>
                    </div>
                    <p className="text-[11px] text-[#866F78] mt-1">Complete assessment to calculate</p>
                  </>
                )}
              </div>

              <div className="pt-2 border-t border-[#F5EDEB] text-[11px]">
                {hasCompletedAssessment ? (
                  <span className="text-[#5B9F8E] font-medium">Optimal hormonal balance</span>
                ) : (
                  <button onClick={() => setScreen('assessment')} className="text-[#8A3B4D] font-bold hover:underline">
                    Take assessment →
                  </button>
                )}
              </div>
            </div>

            {/* Card 2: Cycle Status */}
            <div 
              onClick={() => setScreen('cycle')}
              className="p-5 sm:p-6 rounded-3xl bg-white border border-[#EFE8E6] shadow-2xs space-y-3 flex flex-col justify-between hover:border-[#C96677] transition-all cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#866F78]">Cycle Status</span>
                <div className="w-8 h-8 rounded-xl bg-[#EDE8F5] flex items-center justify-center text-[#7056AD]">
                  <Calendar className="w-4 h-4" />
                </div>
              </div>

              <div>
                <div className="text-lg sm:text-xl font-bold text-[#2B1D22]">Day 14 · Ovulation</div>
                <div className="text-xs text-[#533E46] mt-0.5">Est. fertile window</div>
              </div>

              <div className="pt-2 border-t border-[#F5EDEB] text-[11px] text-[#7056AD] font-medium flex items-center justify-between">
                <span>Period in 15 days</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Card 3: Hormonal Risk Screening */}
            <div 
              onClick={() => {
                if (hasCompletedAssessment) setScreen('risk_result');
                else setScreen('assessment');
              }}
              className="p-5 sm:p-6 rounded-3xl bg-white border border-[#EFE8E6] shadow-2xs space-y-3 flex flex-col justify-between hover:border-[#C96677] transition-all cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#866F78]">Risk Screening</span>
                <div className="w-8 h-8 rounded-xl bg-[#FDF0EB] flex items-center justify-center text-[#EE9E86]">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>

              <div>
                {hasCompletedAssessment ? (
                  <>
                    <div className="text-lg sm:text-xl font-bold text-[#2B1D22]">{riskResult.scorePercentage}% Score</div>
                    <div className="text-xs text-[#5B9F8E] font-medium mt-0.5">{riskResult.riskCategory}</div>
                  </>
                ) : (
                  <>
                    <div className="text-lg sm:text-xl font-bold text-[#C3B4BA]">Pending</div>
                    <div className="text-xs text-[#866F78] mt-0.5">Assessment needed</div>
                  </>
                )}
              </div>

              <div className="pt-2 border-t border-[#F5EDEB] text-[11px] text-[#866F78] font-medium flex items-center justify-between">
                <span>{hasCompletedAssessment ? 'View breakdown' : 'Calculate score'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Card 4: Daily Habits & Hydration */}
            <div 
              onClick={() => setScreen('lifestyle')}
              className="p-5 sm:p-6 rounded-3xl bg-white border border-[#EFE8E6] shadow-2xs space-y-3 flex flex-col justify-between hover:border-[#C96677] transition-all cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#866F78]">Hydration</span>
                <div className="w-8 h-8 rounded-xl bg-[#E7F3EF] flex items-center justify-center text-[#5B9F8E]">
                  <Droplets className="w-4 h-4" />
                </div>
              </div>

              <div>
                <div className="text-lg sm:text-xl font-bold text-[#2B1D22]">1.8 L / 2.5 L</div>
                <div className="text-xs text-[#533E46] mt-0.5">72% of daily hydration goal</div>
              </div>

              <div className="pt-2 border-t border-[#F5EDEB] text-[11px] text-[#5B9F8E] font-semibold flex items-center justify-between">
                <span>+ Log 250ml water</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

          </div>
        </section>

        {/* 4. PERSONALIZED INSIGHTS */}
        <section aria-label="Personalized Insights" className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#2B1D22]">
                Personalized Insights
              </h2>
              <p className="text-xs text-[#866F78]">Evidence-informed guidance tailored to your body's rhythm</p>
            </div>
            <button
              onClick={() => setScreen('lifestyle')}
              className="text-xs font-semibold text-[#8A3B4D] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>View All Logs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            
            {/* Insight 1: Circadian & Sleep Rest */}
            <div className="p-6 rounded-3xl bg-white border border-[#EFE8E6] space-y-3 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#EDE8F5] flex items-center justify-center text-[#7056AD]">
                  <Moon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#2B1D22]">Sleep & Circadian Rhythm</h3>
                  <div className="text-xs text-[#866F78]">6h 45m average this week</div>
                </div>
              </div>
              <p className="text-xs text-[#533E46] leading-relaxed">
                {hasCompletedAssessment 
                  ? "Your sleep is slightly below your recommended baseline. Reaching 7.5 hours during your ovulatory phase helps buffer cortisol and support balanced luteal progesterone."
                  : "Consistent nightly sleep patterns regulate melatonin and cortisol, stabilizing cycle regularity. Complete your assessment to calibrate specific sleep targets."}
              </p>
            </div>

            {/* Insight 2: Seed Cycling & Metabolic Guidance */}
            <div className="p-6 rounded-3xl bg-white border border-[#EFE8E6] space-y-3 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#E7F3EF] flex items-center justify-center text-[#5B9F8E]">
                  <Droplets className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#2B1D22]">Ovulatory Phase Nutrition</h3>
                  <div className="text-xs text-[#866F78]">Phase-aligned guidance</div>
                </div>
              </div>
              <p className="text-xs text-[#533E46] leading-relaxed">
                {hasCompletedAssessment
                  ? "As you transition towards the luteal phase, prioritize magnesium-rich greens and 1 tbsp ground flaxseeds to facilitate smooth hepatic estrogen clearance."
                  : "Nutritional needs shift across your follicular and luteal phases. Completing your assessment unlocks a personalized meal plan aligned to your cycle."}
              </p>
            </div>

          </div>
        </section>

        {/* 5. CYCLE TRACKING & NUTRITION RECOMMENDATIONS */}
        <section aria-label="Cycle & Nutrition Recommendations" className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Daily Wellness Rituals */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white border border-[#EFE8E6] space-y-4 shadow-2xs">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#2B1D22]">Today's Daily Rituals</h3>
                <p className="text-xs text-[#866F78]">Gentle, sustainable daily actions</p>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#FAF7F5] border border-[#EFE8E6] text-[#533E46]">
                2 of 4 Completed
              </span>
            </div>

            <div className="space-y-2.5">
              {[
                { title: 'Morning Hydration: Glass of warm filtered water', category: 'Hydration', done: true },
                { title: 'Flaxseed & Pumpkin Seed Support (1 tbsp)', category: 'Nutrition', done: true },
                { title: '20-minute gentle restorative movement or walk', category: 'Movement', done: false },
                { title: 'Evening digital sunset 30 minutes before bed', category: 'Rest', done: false },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`p-3.5 rounded-2xl border text-xs flex items-center justify-between transition-all ${
                    item.done
                      ? 'bg-[#FAF7F5] border-[#EFE8E6] text-[#866F78]'
                      : 'bg-white border-[#EFE8E6] text-[#2B1D22] font-semibold hover:border-[#C96677]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className={`w-4 h-4 ${item.done ? 'text-[#8A3B4D]' : 'text-[#C3B4BA]'}`} />
                    <span className={item.done ? 'line-through text-[#866F78]' : ''}>{item.title}</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#866F78] bg-[#FAF7F5] px-2 py-0.5 rounded-md border border-[#EFE8E6]">
                    {item.category}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Useful Quick Actions Hub */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-white border border-[#EFE8E6] space-y-4 shadow-2xs flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-xl font-bold text-[#2B1D22]">Quick Actions</h3>
              <p className="text-xs text-[#866F78]">Jump straight into your companion tools</p>
            </div>
            
            <div className="space-y-2.5">
              <button
                onClick={() => setScreen('nutrition')}
                className="w-full p-3.5 rounded-2xl border border-[#EFE8E6] bg-[#FCFAF9] hover:bg-[#F9EBEF] hover:border-[#F4E3E6] text-left transition-all flex items-center justify-between text-xs font-semibold text-[#2B1D22] cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#F9EBEF] flex items-center justify-center text-[#8A3B4D]">
                    <Utensils className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold">Today's Meal Plan</p>
                    <p className="text-[10px] font-normal text-[#866F78]">Hormone-friendly recipes & grocery list</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#866F78]" />
              </button>

              <button
                onClick={() => setScreen('education')}
                className="w-full p-3.5 rounded-2xl border border-[#EFE8E6] bg-[#FCFAF9] hover:bg-[#EDE8F5] hover:border-[#D5CCE8] text-left transition-all flex items-center justify-between text-xs font-semibold text-[#2B1D22] cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#EDE8F5] flex items-center justify-center text-[#7056AD]">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold">Education & Articles</p>
                    <p className="text-[10px] font-normal text-[#866F78]">Evidence-based guide to cycle science</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#866F78]" />
              </button>

              <button
                onClick={() => setScreen('food_finder')}
                className="w-full p-3.5 rounded-2xl border border-[#EFE8E6] bg-[#FCFAF9] hover:bg-[#E7F3EF] hover:border-[#CDE5DE] text-left transition-all flex items-center justify-between text-xs font-semibold text-[#2B1D22] cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#E7F3EF] flex items-center justify-center text-[#5B9F8E]">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold">Nutritious Food Options</p>
                    <p className="text-[10px] font-normal text-[#866F78]">Find healthy dining & grocery spots</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#866F78]" />
              </button>
            </div>
          </div>

        </section>

      </div>
    </div>
  );
};
