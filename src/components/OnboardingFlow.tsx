import React, { useState } from 'react';
import { AppScreen, UserProfile } from '../types';
import { BrandLogo } from './BrandLogo';
import { ArrowRight, ArrowLeft, Check, Sparkles, Heart, Moon, Shield } from 'lucide-react';

interface OnboardingFlowProps {
  userProfile: UserProfile;
  setProfile: React.Dispatch<React.SetStateAction<UserProfile>>;
  setScreen: (screen: AppScreen) => void;
}

export const OnboardingFlow: React.FC<OnboardingFlowProps> = ({ userProfile, setProfile, setScreen }) => {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const [selectedGoals, setSelectedGoals] = useState<string[]>(userProfile.goals);
  const [age, setAge] = useState(userProfile.age || 26);
  const [sleepHours, setSleepHours] = useState(7);
  const [stressLevel, setStressLevel] = useState<'low' | 'moderate' | 'high'>('moderate');

  const availableGoals = [
    'Cycle Regularity & Tracking',
    'Hormonal Balance & Energy',
    'PCOS & Metabolic Awareness',
    'Better Sleep & Stress Control',
    'Personalized Nutrition & Recipes',
    'Fertility & Ovulation Insights',
  ];

  const toggleGoal = (goal: string) => {
    if (selectedGoals.includes(goal)) {
      setSelectedGoals(selectedGoals.filter((g) => g !== goal));
    } else {
      setSelectedGoals([...selectedGoals, goal]);
    }
  };

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      // Complete onboarding
      setProfile((prev) => ({
        ...prev,
        age,
        goals: selectedGoals,
        onboarded: true,
      }));
      setScreen('assessment');
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center p-4 sm:p-6 bg-[#FAF6F4]">
      <div className="w-full max-w-2xl bg-white rounded-3xl border border-[#F2E8E6] shadow-xl p-8 sm:p-12 space-y-8">
        
        {/* Progress Bar & Header */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-semibold text-[#8E717B]">
            <span className="uppercase tracking-wider">Onboarding</span>
            <span>Step {step} of {totalSteps}</span>
          </div>

          <div className="w-full h-2 rounded-full bg-[#FAF6F4] overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#F4D0D5] to-[#B85062] transition-all duration-500"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>

          <div className="p-3 rounded-2xl bg-[#FAF6F4] border border-[#F2E8E6] text-xs text-[#584149] flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#B85062] shrink-0" />
            <span>This helps us personalize your wellness insights safely and gently.</span>
          </div>
        </div>

        {/* STEP 1: Let's get to know you */}
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in">
            <div className="space-y-2">
              <h2 className="font-serif text-3xl font-bold text-[#312328]">
                Let's get to know you
              </h2>
              <p className="text-sm text-[#584149]">
                How old are you, {userProfile.name.split(' ')[0]}?
              </p>
            </div>

            <div className="space-y-4 max-w-md">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-[#584149]">Your Age (Years)</label>
                <input
                  type="number"
                  min={12}
                  max={90}
                  value={age}
                  onChange={(e) => setAge(parseInt(e.target.value) || 26)}
                  className="w-full px-4 py-3 rounded-xl border border-[#F2E8E6] bg-[#FAF6F4]/50 text-base font-semibold text-[#312328] focus:outline-none focus:border-[#D97A88]"
                />
              </div>

              <p className="text-xs text-[#8E717B]">
                Cycle dynamics and metabolic baselines adjust naturally across different age brackets.
              </p>
            </div>
          </div>
        )}

        {/* STEP 2: Wellness Goals */}
        {step === 2 && (
          <div className="space-y-6 animate-in fade-in">
            <div className="space-y-2">
              <h2 className="font-serif text-3xl font-bold text-[#312328]">
                What are your wellness goals?
              </h2>
              <p className="text-sm text-[#584149]">
                Select all that feel important to you today.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {availableGoals.map((goal) => {
                const isSelected = selectedGoals.includes(goal);
                return (
                  <button
                    key={goal}
                    onClick={() => toggleGoal(goal)}
                    className={`p-4 rounded-2xl border text-left text-xs font-semibold transition-all flex items-center justify-between ${
                      isSelected
                        ? 'border-[#B85062] bg-[#F9ECEC] text-[#312328] shadow-xs'
                        : 'border-[#F2E8E6] bg-white text-[#584149] hover:border-[#D97A88]'
                    }`}
                  >
                    <span>{goal}</span>
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center border transition-all ${
                        isSelected ? 'bg-[#B85062] border-[#B85062] text-white' : 'border-[#C4B5BA]'
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 3: Lifestyle Baseline */}
        {step === 3 && (
          <div className="space-y-6 animate-in fade-in">
            <div className="space-y-2">
              <h2 className="font-serif text-3xl font-bold text-[#312328]">
                Tell us about your lifestyle
              </h2>
              <p className="text-sm text-[#584149]">
                Simple daily habits impact hormonal peace.
              </p>
            </div>

            <div className="space-y-6">
              {/* Sleep Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-semibold text-[#584149]">
                  <span className="flex items-center gap-1.5">
                    <Moon className="w-4 h-4 text-[#735CBD]" /> Average Nightly Sleep
                  </span>
                  <span className="text-[#B85062] font-bold text-sm">{sleepHours} Hours</span>
                </div>
                <input
                  type="range"
                  min={4}
                  max={11}
                  step={0.5}
                  value={sleepHours}
                  onChange={(e) => setSleepHours(parseFloat(e.target.value))}
                  className="w-full accent-[#B85062]"
                />
              </div>

              {/* Stress Level Chips */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-[#584149]">Perceived Daily Stress</label>
                <div className="grid grid-cols-3 gap-3">
                  {(['low', 'moderate', 'high'] as const).map((lvl) => (
                    <button
                      key={lvl}
                      type="button"
                      onClick={() => setStressLevel(lvl)}
                      className={`py-3 rounded-xl border text-xs font-semibold capitalize transition-all ${
                        stressLevel === lvl
                          ? 'border-[#B85062] bg-[#F9ECEC] text-[#312328]'
                          : 'border-[#F2E8E6] bg-white text-[#584149]'
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: Ready Confirmation */}
        {step === 4 && (
          <div className="space-y-6 text-center animate-in fade-in">
            <div className="flex justify-center">
              <BrandLogo variant="mark" size="lg" />
            </div>

            <div className="space-y-2">
              <h2 className="font-serif text-3xl font-bold text-[#312328]">
                Your wellness profile is ready
              </h2>
              <p className="text-sm text-[#584149] max-w-md mx-auto">
                Next, complete our multi-step wellness assessment to unlock your personalized risk insight & diet recommendations.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FFFDFB] border border-[#F2E8E6] text-left text-xs space-y-2">
              <div className="font-semibold text-[#312328] flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-[#B85062]" /> Prepared for {userProfile.name}
              </div>
              <p className="text-[#8E717B]">
                Focus areas: {selectedGoals.slice(0, 3).join(' · ')}
              </p>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="pt-4 flex items-center justify-between border-t border-[#F2E8E6]">
          {step > 1 ? (
            <button
              onClick={handleBack}
              className="px-5 py-2.5 rounded-xl border border-[#F2E8E6] text-xs font-semibold text-[#584149] hover:bg-[#FAF6F4] flex items-center gap-1.5"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
          ) : <div />}

          <button
            onClick={handleNext}
            className="px-7 py-3 rounded-xl bg-[#B85062] text-white font-semibold text-xs shadow-md hover:bg-[#A04253] flex items-center gap-2"
          >
            <span>{step === totalSteps ? 'Take Wellness Assessment' : 'Continue'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
