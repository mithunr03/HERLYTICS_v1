import React, { useState } from 'react';
import { AppScreen } from '../types';
import { BrandLogo } from './BrandLogo';
import { Illustration } from './Illustration';
import { Lock, Mail, User, ArrowRight, CheckCircle2 } from 'lucide-react';

interface SignupPageProps {
  setScreen: (screen: AppScreen) => void;
  onSignupSuccess: (name: string, email: string) => void;
}

export const SignupPage: React.FC<SignupPageProps> = ({ setScreen, onSignupSuccess }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!name.trim()) {
      setErrorMessage('Please share your preferred name so we can address you warmly.');
      return;
    }
    if (!email || !email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!password || password.length < 6) {
      setErrorMessage('Password should be at least 6 characters long.');
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match. Please double check.');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onSignupSuccess(name, email);
      setScreen('onboarding');
    }, 600);
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-[#FAF7F5]">
      <div className="w-full max-w-4xl rounded-3xl bg-white border border-[#EFE8E6] shadow-xs overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-[560px]">
        
        {/* Left Column Graphic & Brand Presentation */}
        <div className="md:col-span-5 bg-gradient-to-b from-[#FAF4F4] via-[#FFFBFB] to-[#F7EEEC] p-8 sm:p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#EFE8E6]">
          <div className="space-y-4">
            <BrandLogo variant="horizontal" size="md" />
            <h3 className="font-serif text-2xl font-bold tracking-tight text-[#2B1D22] pt-2">
              Welcome to HerLytics
            </h3>
            <p className="text-xs sm:text-sm text-[#866F78] leading-relaxed">
              We believe wellness begins by tuning in to your natural rhythm and receiving gentle, personalized guidance.
            </p>
          </div>

          <div className="my-6">
            <Illustration type="peaceful" className="w-full max-w-[200px] mx-auto" />
          </div>

          <div className="space-y-2.5 text-xs text-[#533E46] border-t border-[#F1E5E4] pt-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#5B9F8E] shrink-0" />
              <span>Personalized health baseline assessment</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#5B9F8E] shrink-0" />
              <span>Strictly private & encrypted wellness journal</span>
            </div>
          </div>
        </div>

        {/* Right Column Registration Form */}
        <div className="md:col-span-7 p-8 sm:p-10 flex flex-col justify-center space-y-6 bg-white">
          <div className="space-y-1.5 text-center sm:text-left">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-[#2B1D22]">
              Begin your wellness journey
            </h2>
            <p className="text-sm text-[#533E46]">
              A few quick details help us personalize your daily insights.
            </p>
          </div>

          {errorMessage && (
            <div className="p-3.5 rounded-xl bg-[#F9EBEF] border border-[#F2D6DC] text-xs font-semibold text-[#8A3B4D] animate-in fade-in">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#533E46]">Your Preferred Name</label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#866F78]" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Maya Sharma"
                  required
                  autoComplete="name"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#EFE8E6] bg-[#FCFAF9] text-sm text-[#2B1D22] placeholder:text-[#BBAAB1] focus:outline-none focus:border-[#8A3B4D] focus:ring-2 focus:ring-[#8A3B4D]/10 focus:bg-white transition-all"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[#533E46]">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#866F78]" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  required
                  autoComplete="email"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#EFE8E6] bg-[#FCFAF9] text-sm text-[#2B1D22] placeholder:text-[#BBAAB1] focus:outline-none focus:border-[#8A3B4D] focus:ring-2 focus:ring-[#8A3B4D]/10 focus:bg-white transition-all"
                />
              </div>
            </div>

            {/* Password Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#533E46]">Password</label>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#866F78]" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    autoComplete="new-password"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#EFE8E6] bg-[#FCFAF9] text-sm text-[#2B1D22] placeholder:text-[#BBAAB1] focus:outline-none focus:border-[#8A3B4D] focus:ring-2 focus:ring-[#8A3B4D]/10 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#533E46]">Confirm Password</label>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#866F78]" />
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    autoComplete="new-password"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#EFE8E6] bg-[#FCFAF9] text-sm text-[#2B1D22] placeholder:text-[#BBAAB1] focus:outline-none focus:border-[#8A3B4D] focus:ring-2 focus:ring-[#8A3B4D]/10 focus:bg-white transition-all"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 rounded-xl bg-[#8A3B4D] text-white font-semibold text-sm shadow-xs hover:bg-[#742E3F] hover:shadow transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
            >
              {isLoading ? (
                <span>Creating your account...</span>
              ) : (
                <>
                  <span>Continue to Onboarding</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <p className="text-center text-xs text-[#866F78]">
            Already have an account?{' '}
            <button
              onClick={() => setScreen('login')}
              className="font-bold text-[#8A3B4D] hover:underline focus:outline-none"
            >
              Sign In
            </button>
          </p>
        </div>

      </div>
    </div>
  );
};
