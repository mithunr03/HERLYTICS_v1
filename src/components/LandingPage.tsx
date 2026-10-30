import React from 'react';
import { AppScreen } from '../types';
import { BrandLogo } from './BrandLogo';
import { Illustration } from './Illustration';
import { 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  Heart, 
  Compass, 
  Sun, 
  Calendar, 
  Utensils, 
  BookOpen, 
  Activity, 
  CheckCircle2 
} from 'lucide-react';

interface LandingPageProps {
  setScreen: (screen: AppScreen) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ setScreen }) => {
  return (
    <div className="min-h-screen bg-[#FAF6F4] text-[#312328] overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Soft Background Glow Orbs */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#F4D0D5]/50 via-[#EAE6F8]/40 to-[#FDEEE9]/60 blur-3xl pointer-events-none rounded-full" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Column Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#F2E8E6] shadow-xs text-xs font-semibold text-[#7A4050] mx-auto lg:mx-0">
              <span className="w-2 h-2 rounded-full bg-[#D97A88] animate-ping" />
              <span>AI-Powered Preventive Wellness Companion</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#312328] leading-[1.15]">
              Understand your health.<br />
              <span className="bg-gradient-to-r from-[#B85062] via-[#D97A88] to-[#9C5B72] bg-clip-text text-transparent">
                Take control of your wellness.
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-[#584149] max-w-2xl leading-relaxed mx-auto lg:mx-0 font-normal">
              AI-powered wellness insights, personalized guidance, and simple tools designed to help you understand your body and build healthier habits.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => setScreen('signup')}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#B85062] text-white font-semibold text-base shadow-md hover:bg-[#A04253] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <span>Start Your Wellness Journey</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('trust-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white text-[#584149] font-semibold text-base border border-[#F2E8E6] shadow-xs hover:border-[#D97A88] hover:bg-[#F9ECEC]/50 transition-all duration-200"
              >
                Explore HerLytics
              </button>
            </div>

            {/* Trust Pills */}
            <div className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#8E717B] font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#62AA98]" /> 100% Private & Encrypted
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#62AA98]" /> Non-Diagnostic & Empathetic
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#62AA98]" /> Tailored Nutrition & Cycle Science
              </span>
            </div>
          </div>

          {/* Right Column Abstract Illustration */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md p-6 rounded-3xl bg-white/60 backdrop-blur-md border border-white/80 shadow-xl">
              <Illustration type="hero" className="w-full" />
              
              {/* Floating Wellness Card Widget */}
              <div className="absolute -bottom-6 -left-6 sm:left-4 bg-white p-4 rounded-2xl border border-[#F2E8E6] shadow-lg flex items-center gap-3.5 max-w-xs animate-float">
                <div className="w-10 h-10 rounded-xl bg-[#F9ECEC] flex items-center justify-center text-[#B85062]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#8E717B]">Your Wellness Insight</div>
                  <div className="text-sm font-bold text-[#312328]">28% Lower Risk Pattern</div>
                </div>
              </div>

              {/* Floating Cycle Pill */}
              <div className="absolute -top-4 -right-4 bg-white px-4 py-2.5 rounded-2xl border border-[#F2E8E6] shadow-md flex items-center gap-2 text-xs font-semibold text-[#584149]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#B4A2DE]" />
                <span>Follicular Phase · Day 12</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* TRUST SECTION */}
      <section id="trust-section" className="py-20 bg-white/70 border-y border-[#F2E8E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B85062]">Our Philosophy</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#312328]">
              More than a tracker.
            </h2>
            <p className="text-base sm:text-lg text-[#584149]">
              HerLytics helps you move seamlessly from:
            </p>

            <div className="inline-flex items-center justify-center gap-3 px-6 py-2.5 rounded-full bg-[#F9ECEC] border border-[#F2E8E6] font-semibold text-sm text-[#7A4050]">
              <span>Information</span>
              <span className="text-[#D97A88]">→</span>
              <span>Understanding</span>
              <span className="text-[#D97A88]">→</span>
              <span className="text-[#B85062] font-bold">Action</span>
            </div>
          </div>

          {/* Three Pillars Cards (Predict, Prevent, Empower) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Predict */}
            <div className="glass-card p-8 rounded-3xl space-y-4 hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-[#F4D0D5] flex items-center justify-center text-[#B85062] group-hover:scale-110 transition-transform">
                <Compass className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#312328]">Predict</h3>
              <p className="text-sm text-[#584149] leading-relaxed">
                Understand potential health risks through AI-powered insights based on your cycle, lifestyle, and symptom patterns.
              </p>
              <div className="pt-2 text-xs font-semibold text-[#B85062] flex items-center gap-1">
                <span>Personalized Assessment</span>
                <span>→</span>
              </div>
            </div>

            {/* Card 2: Prevent */}
            <div className="glass-card p-8 rounded-3xl space-y-4 hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-[#EAE6F8] flex items-center justify-center text-[#735CBD] group-hover:scale-110 transition-transform">
                <Sun className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#312328]">Prevent</h3>
              <p className="text-sm text-[#584149] leading-relaxed">
                Build healthier daily habits through personalized seed cycling, low-GI meal plans, sleep optimization, and hydration goals.
              </p>
              <div className="pt-2 text-xs font-semibold text-[#735CBD] flex items-center gap-1">
                <span>Actionable Guidance</span>
                <span>→</span>
              </div>
            </div>

            {/* Card 3: Empower */}
            <div className="glass-card p-8 rounded-3xl space-y-4 hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-[#E5F2EE] flex items-center justify-center text-[#62AA98] group-hover:scale-110 transition-transform">
                <Heart className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#312328]">Empower</h3>
              <p className="text-sm text-[#584149] leading-relaxed">
                Make informed, confident decisions about your wellness with clear educational resources, symptom logs, and provider summaries.
              </p>
              <div className="pt-2 text-xs font-semibold text-[#62AA98] flex items-center gap-1">
                <span>Body Literacy</span>
                <span>→</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FEATURE PREVIEWS GRID */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B85062]">Thoughtful Features</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#312328]">
            Designed to feel like a gentle companion.
          </h2>
          <p className="text-sm sm:text-base text-[#584149]">
            Everything you need for daily hormone, cycle, and lifestyle awareness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Feature 1 */}
          <div className="p-6 rounded-2xl bg-white border border-[#F2E8E6] space-y-3 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-[#F9ECEC] flex items-center justify-center text-[#B85062]">
              <Calendar className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-lg text-[#312328]">Cycle Tracking</h3>
            <p className="text-xs text-[#584149] leading-relaxed">
              Track period days, fertile windows, ovulation, and symptom variations in a soothing calendar.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 rounded-2xl bg-white border border-[#F2E8E6] space-y-3 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-[#FDEEE9] flex items-center justify-center text-[#F4A790]">
              <Utensils className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-lg text-[#312328]">Tailored Nutrition</h3>
            <p className="text-xs text-[#584149] leading-relaxed">
              Discover PCOS-friendly meals, anti-inflammatory recipes, and macronutrient balances.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 rounded-2xl bg-white border border-[#F2E8E6] space-y-3 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-[#EAE6F8] flex items-center justify-center text-[#B4A2DE]">
              <Activity className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-lg text-[#312328]">Lifestyle Insights</h3>
            <p className="text-xs text-[#584149] leading-relaxed">
              Log sleep quality, water intake, activity, and mood to identify subtle wellness trends.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="p-6 rounded-2xl bg-white border border-[#F2E8E6] space-y-3 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-[#E5F2EE] flex items-center justify-center text-[#62AA98]">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-lg text-[#312328]">Wellness Magazine</h3>
            <p className="text-xs text-[#584149] leading-relaxed">
              Expert-curated articles demystifying hormones, stress management, and reproductive health.
            </p>
          </div>

        </div>
      </section>

      {/* MEDICAL DISCLAIMER CALLOUT CARD */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#F9ECEC] via-[#FFFDFB] to-[#FDEEE9] border border-[#EEDBDD] shadow-sm flex flex-col md:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-[#B85062] shadow-xs shrink-0">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif text-xl font-bold text-[#312328]">
              Empowering Awareness, Not Medical Diagnosis
            </h3>
            <p className="text-xs sm:text-sm text-[#584149] leading-relaxed">
              HerLytics supports your personal health journey with preventive insights and educational content. We encourage consulting with a qualified healthcare professional or gynecologist for medical diagnostic testing or therapeutic decisions.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#312328]">
            Ready to listen to your body?
          </h2>
          <p className="text-base sm:text-lg text-[#584149] max-w-xl mx-auto">
            Join thousands of women taking proactive steps towards hormonal balance, calm, and vitality.
          </p>
        </div>

        <button
          onClick={() => setScreen('signup')}
          className="px-9 py-4 rounded-2xl bg-[#8A3B4D] text-white font-semibold text-base shadow-md hover:bg-[#742E3F] hover:shadow-lg transition-all duration-300 inline-flex items-center gap-3 cursor-pointer"
        >
          <span>Start Your Wellness Journey Today</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-[#EFE8E6] bg-white text-xs text-[#866F78]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <BrandLogo variant="horizontal" size="sm" />
          <div className="text-center sm:text-right text-[11px] text-[#866F78]">
            © 2026 HerLytics. Dedicated to women's preventive wellness. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
};
