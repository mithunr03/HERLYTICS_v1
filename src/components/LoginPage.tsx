import React, { useState } from 'react';
import { AppScreen } from '../types';
import { BrandLogo } from './BrandLogo';
import { Illustration } from './Illustration';
import { Eye, EyeOff, Lock, Mail, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';

interface LoginPageProps {
  setScreen: (screen: AppScreen) => void;
  onLoginSuccess: (email: string) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ setScreen, onLoginSuccess }) => {
  const [email, setEmail] = useState('maya.sharma@example.com');
  const [password, setPassword] = useState('password123');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Dedicated Password Reset Flow State
  const [isResetMode, setIsResetMode] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetSent, setResetSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    
    if (!email || !email.includes('@')) {
      setErrorMessage('Please enter a valid email address to locate your account.');
      return;
    }
    if (!password || password.length < 4) {
      setErrorMessage('Please enter your password.');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess(email);
      setScreen('dashboard');
    }, 700);
  };

  const handleResetSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!resetEmail || !resetEmail.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setResetSent(true);
      setErrorMessage('');
    }, 600);
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-[#FAF7F5]">
      <div className="w-full max-w-5xl rounded-3xl bg-white border border-[#EFE8E6] shadow-xs overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[590px]">
        
        {/* LEFT COLUMN: BRAND & EDITORIAL PANEL */}
        <div className="lg:col-span-6 bg-gradient-to-b from-[#FAF4F4] via-[#FFFBFB] to-[#F7EEEC] p-8 sm:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#EFE8E6] relative overflow-hidden">
          
          {/* Top Branding Section with Official Logo */}
          <div className="space-y-6 relative z-10">
            {/* Login panel logo: Official HerLytics emblem beside brand name with preserved wordmark and tagline */}
            <div className="pt-1">
              <BrandLogo variant="horizontal" size="lg" />
            </div>

            <div className="pt-2 space-y-3">
              <blockquote className="font-serif text-2xl sm:text-3xl font-medium text-[#2B1D22] leading-snug tracking-tight">
                “Your wellness journey deserves clarity, care, and understanding.”
              </blockquote>
              <p className="text-xs sm:text-sm text-[#866F78] leading-relaxed max-w-md font-normal">
                Personalized cycle intelligence, nutritional balance, and proactive hormonal health designed around your natural rhythms.
              </p>
            </div>
          </div>

          {/* Calming Wellness Plate Illustration */}
          <div className="my-6 relative z-10">
            <Illustration type="login" className="w-full max-w-[280px] mx-auto" />
          </div>

          {/* Supportive Trust Footer */}
          <div className="pt-2 text-xs text-[#866F78] flex items-center gap-2 relative z-10 border-t border-[#F1E5E4]/80">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5B9F8E] shrink-0" />
            <span>Private, encrypted, and designed to help you listen to your body without judgment.</span>
          </div>
        </div>

        {/* RIGHT COLUMN: AUTHENTICATION CARD */}
        <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-center space-y-6 bg-white">
          
          {!isResetMode ? (
            <>
              {/* Form Heading */}
              <div className="space-y-1.5 text-center sm:text-left">
                <h2 className="font-serif text-3xl font-bold tracking-tight text-[#2B1D22]">
                  Welcome back
                </h2>
                <p className="text-sm text-[#533E46]">
                  Enter your credentials to continue your wellness journey.
                </p>
              </div>

              {/* Error Message */}
              {errorMessage && (
                <div className="p-3.5 rounded-xl bg-[#F9EBEF] border border-[#F2D6DC] text-xs font-semibold text-[#8A3B4D] animate-in fade-in">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email Field */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#533E46] block">
                    Email Address
                  </label>
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

                {/* Password Field */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-semibold text-[#533E46]">
                      Password
                    </label>
                    <button
                      type="button"
                      onClick={() => {
                        setIsResetMode(true);
                        setResetSent(false);
                        setErrorMessage('');
                        setResetEmail(email);
                      }}
                      className="text-xs font-semibold text-[#8A3B4D] hover:underline focus:outline-none"
                    >
                      Forgot Password?
                    </button>
                  </div>
                  <div className="relative">
                    <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#866F78]" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      required
                      autoComplete="current-password"
                      className="w-full pl-10 pr-10 py-3 rounded-xl border border-[#EFE8E6] bg-[#FCFAF9] text-sm text-[#2B1D22] placeholder:text-[#BBAAB1] focus:outline-none focus:border-[#8A3B4D] focus:ring-2 focus:ring-[#8A3B4D]/10 focus:bg-white transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#866F78] hover:text-[#2B1D22] focus:outline-none"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Primary Sign In Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 rounded-xl bg-[#8A3B4D] text-white font-semibold text-sm shadow-xs hover:bg-[#742E3F] hover:shadow transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  {isLoading ? (
                    <span>Signing in...</span>
                  ) : (
                    <>
                      <span>Sign In</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              {/* Social Login Divider */}
              <div className="relative flex items-center justify-center my-1">
                <div className="border-t border-[#EFE8E6] w-full" />
                <span className="bg-white px-3 text-[11px] font-semibold text-[#866F78] uppercase tracking-wider">
                  Or continue with
                </span>
              </div>

              {/* Google Sign In Button */}
              <button
                type="button"
                onClick={() => {
                  setIsLoading(true);
                  setTimeout(() => {
                    setIsLoading(false);
                    onLoginSuccess('google.user@example.com');
                    setScreen('dashboard');
                  }, 600);
                }}
                className="w-full py-3 rounded-xl border border-[#EFE8E6] bg-white text-xs font-semibold text-[#533E46] hover:bg-[#FAF7F5] hover:border-[#D5C7C9] transition-all flex items-center justify-center gap-2.5 cursor-pointer shadow-2xs"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span>Continue with Google</span>
              </button>

              {/* Switch to Signup */}
              <p className="text-center text-xs text-[#866F78]">
                New to HerLytics?{' '}
                <button
                  onClick={() => setScreen('signup')}
                  className="font-bold text-[#8A3B4D] hover:underline focus:outline-none"
                >
                  Create Account
                </button>
              </p>
            </>
          ) : (
            /* PASSWORD RECOVERY FLOW */
            <div className="space-y-6 animate-in fade-in">
              <div className="space-y-1.5 text-center sm:text-left">
                <button
                  type="button"
                  onClick={() => setIsResetMode(false)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8A3B4D] hover:underline mb-2"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Sign In</span>
                </button>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-[#2B1D22]">
                  Reset your password
                </h2>
                <p className="text-sm text-[#533E46]">
                  Enter your email address and we'll send you a secure link to reset your password.
                </p>
              </div>

              {resetSent ? (
                <div className="space-y-4 p-5 rounded-2xl bg-[#E7F3EF] border border-[#CDE5DE]">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#5B9F8E] shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="text-xs font-bold text-[#204F43]">
                        Password recovery email sent
                      </p>
                      <p className="text-xs text-[#3D7A6C] leading-relaxed">
                        If an account is associated with <strong>{resetEmail}</strong>, instructions to choose a new password have been sent.
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsResetMode(false)}
                    className="w-full py-2.5 rounded-xl bg-white border border-[#CDE5DE] text-xs font-semibold text-[#204F43] hover:bg-[#FAF7F5]"
                  >
                    Return to Sign In
                  </button>
                </div>
              ) : (
                <form onSubmit={handleResetSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-[#F9EBEF] border border-[#F2D6DC] text-xs font-semibold text-[#8A3B4D]">
                      {errorMessage}
                    </div>
                  )}

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#533E46] block">
                      Registered Email Address
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#866F78]" />
                      <input
                        type="email"
                        value={resetEmail}
                        onChange={(e) => setResetEmail(e.target.value)}
                        placeholder="name@example.com"
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#EFE8E6] bg-[#FCFAF9] text-sm text-[#2B1D22] focus:outline-none focus:border-[#8A3B4D] focus:ring-2 focus:ring-[#8A3B4D]/10 focus:bg-white"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3.5 rounded-xl bg-[#8A3B4D] text-white font-semibold text-sm shadow-xs hover:bg-[#742E3F] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {isLoading ? <span>Sending instructions...</span> : <span>Send Reset Instructions</span>}
                  </button>
                </form>
              )}
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
