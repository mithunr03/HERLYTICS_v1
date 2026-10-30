import React, { useState, useEffect } from 'react';
import { AppScreen, UserProfile } from '../types';
import { BrandLogo } from './BrandLogo';
import { 
  Home,
  Sparkles, 
  Calendar, 
  Activity, 
  Utensils, 
  ChefHat,
  Search,
  BookOpen, 
  User, 
  ShieldCheck,
  Menu,
  X,
  LogOut,
  AlertCircle,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

interface NavbarProps {
  currentScreen: AppScreen;
  setScreen: (screen: AppScreen) => void;
  userProfile: UserProfile;
  onLogout?: () => void;
}

interface NavGroup {
  title: string;
  items: {
    id: AppScreen;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    badge?: string;
  }[];
}

export const Navbar: React.FC<NavbarProps> = ({ 
  currentScreen, 
  setScreen, 
  userProfile,
  onLogout 
}) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  // Close drawer on route change or Escape key press
  useEffect(() => {
    setMobileDrawerOpen(false);
  }, [currentScreen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileDrawerOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileDrawerOpen]);

  const isAuthOrLanding = ['landing', 'login', 'signup', 'onboarding'].includes(currentScreen);

  const navigationGroups: NavGroup[] = [
    {
      title: 'Health',
      items: [
        { id: 'dashboard', label: 'Dashboard', icon: Home },
        { 
          id: 'assessment', 
          label: 'Wellness Assessment', 
          icon: Sparkles,
          badge: userProfile.hasCompletedAssessment ? undefined : 'Action'
        },
        { id: 'cycle', label: 'Cycle Tracker', icon: Calendar },
        { id: 'lifestyle', label: 'Insights & Vitality', icon: Activity },
      ],
    },
    {
      title: 'Nutrition',
      items: [
        { id: 'nutrition', label: 'Diet Planner', icon: Utensils },
        { id: 'recipes', label: 'Recipes', icon: ChefHat },
        { id: 'food_finder', label: 'Food Options', icon: Search },
      ],
    },
    {
      title: 'Learn',
      items: [
        { id: 'education', label: 'Education Hub', icon: BookOpen },
      ],
    },
    {
      title: 'Account',
      items: [
        { id: 'profile', label: 'Profile & Settings', icon: User },
      ],
    },
  ];

  // Screen title helper for desktop app header
  const getScreenTitle = (screen: AppScreen): string => {
    switch (screen) {
      case 'dashboard': return 'Dashboard Overview';
      case 'assessment': return 'Wellness Assessment';
      case 'risk_result': return 'Assessment Results';
      case 'cycle': return 'Menstrual Cycle Tracker';
      case 'lifestyle': return 'Vitality & Habit Insights';
      case 'nutrition': return 'Personalized Diet Planner';
      case 'recipes': return 'Hormone-Friendly Recipe Library';
      case 'food_finder': return 'Nearby Nutritious Options';
      case 'education': return 'Educational Evidence Hub';
      case 'profile': return 'Your Profile & Health Preferences';
      default: return 'HerLytics';
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#FAF7F5]/95 backdrop-blur-md border-b border-[#EFE8E6]">
        {/* Top Medical Safety Banner (present across all views) */}
        <div className="bg-[#F8EFF1] text-[#553E47] text-xs py-1.5 px-4 text-center border-b border-[#EFE2E5] flex items-center justify-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-[#8A3B4D] shrink-0" />
          <span className="text-[11px] sm:text-xs">
            <strong className="font-semibold text-[#8A3B4D]">HerLytics Wellness Companion:</strong> AI insights offer estimated guidance for preventive wellness, not clinical medical diagnosis.
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Left: Logo (for auth/landing and mobile) or Screen Title (for desktop in-app) */}
            <div className="flex items-center gap-3">
              {/* Mobile Drawer Trigger (only in authenticated/in-app mode) */}
              {!isAuthOrLanding && (
                <button
                  type="button"
                  onClick={() => setMobileDrawerOpen(true)}
                  aria-label="Open navigation menu"
                  className="lg:hidden p-2 rounded-xl bg-white border border-[#EFE8E6] text-[#533E46] hover:bg-[#FAF7F5] transition-colors focus:outline-none cursor-pointer"
                >
                  <Menu className="w-5 h-5" />
                </button>
              )}

              {/* Logo: Always shown on Landing/Auth; shown on mobile for in-app */}
              <button 
                onClick={() => setScreen(userProfile.onboarded ? 'dashboard' : 'landing')}
                className={`flex items-center text-left group focus:outline-none py-1 ${
                  !isAuthOrLanding ? 'lg:hidden' : ''
                }`}
                aria-label="HerLytics Home"
              >
                <BrandLogo variant="horizontal" size="sm" />
              </button>

              {/* Desktop Screen Title (when sidebar is persistent) */}
              {!isAuthOrLanding && (
                <div className="hidden lg:flex items-center gap-2">
                  <span className="font-serif text-lg font-bold text-[#2B1D22]">
                    {getScreenTitle(currentScreen)}
                  </span>
                </div>
              )}
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-3">
              {isAuthOrLanding ? (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setScreen('login')}
                    className="px-4 py-2 text-xs font-semibold text-[#533E46] hover:text-[#8A3B4D] transition-colors cursor-pointer"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => setScreen('signup')}
                    className="px-4 py-2 rounded-xl bg-[#8A3B4D] text-white text-xs font-semibold shadow-xs hover:bg-[#742E3F] hover:shadow-sm transition-all duration-200 cursor-pointer"
                  >
                    Start Journey
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  {/* Take Assessment Quick Button */}
                  <button
                    onClick={() => setScreen('assessment')}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#FFF8F9] text-[#8A3B4D] text-xs font-semibold border border-[#F4E3E6] hover:bg-[#F9EBEF] transition-all cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#8A3B4D]" />
                    <span className="hidden sm:inline">
                      {userProfile.hasCompletedAssessment ? 'Retake Assessment' : 'Start Assessment'}
                    </span>
                    <span className="sm:hidden">Assessment</span>
                  </button>

                  {/* User Profile Avatar Link */}
                  <button
                    onClick={() => setScreen('profile')}
                    aria-label="View Profile"
                    className={`flex items-center gap-2 p-1.5 rounded-xl border transition-all cursor-pointer ${
                      currentScreen === 'profile'
                        ? 'border-[#8A3B4D] bg-[#F9EBEF]'
                        : 'border-[#EFE8E6] bg-white hover:border-[#C96677]'
                    }`}
                  >
                    <img
                      src={userProfile.avatarUrl || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"}
                      alt={userProfile.name}
                      className="w-7 h-7 rounded-lg object-cover"
                    />
                    <span className="hidden sm:inline text-xs font-semibold text-[#2B1D22]">
                      {userProfile.name.split(' ')[0]}
                    </span>
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </header>

      {/* MOBILE SLIDE-OUT NAVIGATION DRAWER */}
      {!isAuthOrLanding && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Drawer"
          className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
            mobileDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* Backdrop Blur Overlay */}
          <div 
            onClick={() => setMobileDrawerOpen(false)}
            className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
          />

          {/* Drawer Content Panel */}
          <div 
            className={`absolute top-0 bottom-0 left-0 w-[82%] max-w-sm bg-white shadow-2xl flex flex-col z-10 transition-transform duration-300 ease-out ${
              mobileDrawerOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            {/* Drawer Header */}
            <div className="h-16 flex items-center justify-between px-5 border-b border-[#EFE8E6]">
              <BrandLogo variant="horizontal" size="sm" />
              <button
                type="button"
                onClick={() => setMobileDrawerOpen(false)}
                aria-label="Close menu"
                className="p-2 rounded-xl text-[#866F78] hover:text-[#2B1D22] hover:bg-[#FAF7F5]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Assessment Quick Callout in Drawer */}
            <div className="p-4 bg-[#FFF8F9] border-b border-[#F4E3E6]">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#8A3B4D]">
                  Wellness Assessment
                </span>
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                  userProfile.hasCompletedAssessment ? 'bg-[#E7F3EF] text-[#204F43]' : 'bg-[#F9EBEF] text-[#8A3B4D]'
                }`}>
                  {userProfile.hasCompletedAssessment ? 'Completed' : 'Pending'}
                </span>
              </div>
              <p className="text-xs text-[#533E46] mb-3">
                {userProfile.hasCompletedAssessment 
                  ? 'Your responses power personalized daily recommendations.' 
                  : 'Complete your assessment to unlock tailored hormone insights.'}
              </p>
              <button
                onClick={() => {
                  setScreen('assessment');
                  setMobileDrawerOpen(false);
                }}
                className="w-full py-2.5 rounded-xl bg-[#8A3B4D] text-white text-xs font-semibold shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{userProfile.hasCompletedAssessment ? 'Review Assessment' : 'Start Assessment'}</span>
              </button>
            </div>

            {/* Drawer Navigation List */}
            <nav className="flex-1 overflow-y-auto p-4 space-y-6">
              {navigationGroups.map((group) => (
                <div key={group.title} className="space-y-1.5">
                  <h4 className="px-3 text-[10px] uppercase font-bold tracking-wider text-[#866F78]">
                    {group.title}
                  </h4>
                  <div className="space-y-1">
                    {group.items.map((item) => {
                      const Icon = item.icon;
                      const isActive = currentScreen === item.id;
                      return (
                        <button
                          key={item.id}
                          onClick={() => {
                            setScreen(item.id);
                            setMobileDrawerOpen(false);
                          }}
                          className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-xs font-semibold transition-all ${
                            isActive
                              ? 'bg-[#8A3B4D] text-white shadow-xs'
                              : 'text-[#533E46] hover:bg-[#F9EBEF] hover:text-[#8A3B4D]'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#866F78]'}`} />
                            <span>{item.label}</span>
                          </div>
                          <ChevronRight className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-[#C3B4BA]'}`} />
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </nav>

            {/* Drawer User & Logout Footer */}
            <div className="p-4 border-t border-[#EFE8E6] bg-[#FAF7F5] flex items-center justify-between">
              <button
                onClick={() => {
                  setScreen('profile');
                  setMobileDrawerOpen(false);
                }}
                className="flex items-center gap-2.5 text-left"
              >
                <img
                  src={userProfile.avatarUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'}
                  alt={userProfile.name}
                  className="w-9 h-9 rounded-full object-cover border border-[#EFE8E6]"
                />
                <div>
                  <p className="text-xs font-bold text-[#2B1D22]">{userProfile.name}</p>
                  <p className="text-[10px] text-[#866F78]">{userProfile.email}</p>
                </div>
              </button>

              {onLogout && (
                <button
                  onClick={() => {
                    setMobileDrawerOpen(false);
                    onLogout();
                  }}
                  aria-label="Sign Out"
                  className="p-2 text-[#866F78] hover:text-[#8A3B4D] hover:bg-[#F9EBEF] rounded-xl transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* MOBILE BOTTOM NAVIGATION BAR (for in-app screens) */}
      {!isAuthOrLanding && (
        <nav 
          aria-label="Mobile Quick Navigation"
          className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#EFE8E6] px-2 py-1.5 flex items-center justify-around shadow-lg"
        >
          {[
            { id: 'dashboard' as AppScreen, label: 'Home', icon: Home },
            { id: 'assessment' as AppScreen, label: 'Assessment', icon: Sparkles },
            { id: 'cycle' as AppScreen, label: 'Cycle', icon: Calendar },
            { id: 'lifestyle' as AppScreen, label: 'Insights', icon: Activity },
          ].map((item) => {
            const Icon = item.icon;
            const isActive = currentScreen === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setScreen(item.id)}
                className={`flex flex-col items-center justify-center min-w-[56px] min-h-[44px] px-2 py-1 rounded-xl transition-all ${
                  isActive ? 'text-[#8A3B4D] font-bold' : 'text-[#866F78] hover:text-[#533E46]'
                }`}
              >
                <Icon className={`w-4 h-4 mb-0.5 ${isActive ? 'scale-110' : ''}`} />
                <span className="text-[10px] tracking-tight">{item.label}</span>
                {isActive && <span className="w-1 h-1 rounded-full bg-[#8A3B4D] mt-0.5" />}
              </button>
            );
          })}

          {/* Menu Button to open Drawer */}
          <button
            onClick={() => setMobileDrawerOpen(true)}
            aria-label="Open full menu"
            className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] px-2 py-1 rounded-xl text-[#866F78] hover:text-[#533E46]"
          >
            <Menu className="w-4 h-4 mb-0.5" />
            <span className="text-[10px] tracking-tight">More</span>
          </button>
        </nav>
      )}
    </>
  );
};
