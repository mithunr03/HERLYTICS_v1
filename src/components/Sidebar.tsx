import React, { useState } from 'react';
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
  ChevronLeft, 
  ChevronRight,
  LogOut,
  ShieldCheck,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

interface SidebarProps {
  currentScreen: AppScreen;
  setScreen: (screen: AppScreen) => void;
  userProfile: UserProfile;
  onLogout?: () => void;
  collapsed?: boolean;
  onToggleCollapse?: () => void;
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

export const Sidebar: React.FC<SidebarProps> = ({
  currentScreen,
  setScreen,
  userProfile,
  onLogout,
  collapsed = false,
  onToggleCollapse,
}) => {
  const [internalCollapsed, setInternalCollapsed] = useState(false);
  const isCollapsed = onToggleCollapse ? collapsed : internalCollapsed;
  const toggleCollapse = onToggleCollapse || (() => setInternalCollapsed(!internalCollapsed));

  const navigationGroups: NavGroup[] = [
    {
      title: 'Health',
      items: [
        { id: 'dashboard', label: 'Dashboard', icon: Home },
        { 
          id: 'assessment', 
          label: 'Wellness Assessment', 
          icon: Sparkles,
          badge: userProfile.hasCompletedAssessment ? undefined : 'Start'
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

  return (
    <aside
      aria-label="Main Navigation Sidebar"
      className={`hidden lg:flex flex-col bg-white border-r border-[#EFE8E6] transition-all duration-300 ease-in-out shrink-0 sticky top-0 h-screen select-none z-30 ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Top Sidebar Header with Brand Logo */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-[#EFE8E6] shrink-0">
        <button
          onClick={() => setScreen('dashboard')}
          className="flex items-center text-left focus:outline-none overflow-hidden"
          title="HerLytics Dashboard"
        >
          {isCollapsed ? (
            <div className="mx-auto">
              <BrandLogo variant="mark" size="sm" />
            </div>
          ) : (
            <BrandLogo variant="horizontal" size="sm" showTagline={false} />
          )}
        </button>

        {/* Collapse Toggle Button */}
        <button
          type="button"
          onClick={toggleCollapse}
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          className="p-1.5 rounded-xl text-[#866F78] hover:text-[#2B1D22] hover:bg-[#FAF7F5] border border-[#EFE8E6] transition-colors focus:outline-none"
          title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {isCollapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <ChevronLeft className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Assessment Status Pill on Sidebar */}
      {!isCollapsed && (
        <div className="p-3 mx-3 my-2 rounded-2xl bg-[#FFF8F9] border border-[#F4E3E6] flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            {userProfile.hasCompletedAssessment ? (
              <CheckCircle2 className="w-3.5 h-3.5 text-[#5B9F8E] shrink-0" />
            ) : (
              <AlertCircle className="w-3.5 h-3.5 text-[#8A3B4D] shrink-0" />
            )}
            <span className="text-[11px] font-medium text-[#533E46] truncate">
              {userProfile.hasCompletedAssessment ? 'Assessment Complete' : 'Assessment Pending'}
            </span>
          </div>
          {!userProfile.hasCompletedAssessment && (
            <button
              onClick={() => setScreen('assessment')}
              className="text-[10px] font-bold text-[#8A3B4D] hover:underline cursor-pointer"
            >
              Start
            </button>
          )}
        </div>
      )}

      {/* Grouped Navigation Links */}
      <nav className="flex-1 overflow-y-auto px-3 py-3 space-y-5">
        {navigationGroups.map((group) => (
          <div key={group.title} className="space-y-1">
            {!isCollapsed && (
              <h4 className="px-3 text-[10px] uppercase font-bold tracking-wider text-[#866F78]">
                {group.title}
              </h4>
            )}
            <div className="space-y-1">
              {group.items.map((item) => {
                const Icon = item.icon;
                const isActive = currentScreen === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => setScreen(item.id)}
                    title={isCollapsed ? item.label : undefined}
                    className={`w-full flex items-center rounded-xl transition-all duration-200 cursor-pointer ${
                      isCollapsed 
                        ? 'justify-center p-3' 
                        : 'justify-between px-3.5 py-2.5 text-xs font-semibold'
                    } ${
                      isActive
                        ? 'bg-[#8A3B4D] text-white shadow-xs'
                        : 'text-[#533E46] hover:bg-[#F9EBEF] hover:text-[#8A3B4D]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-[#866F78]'}`} />
                      {!isCollapsed && <span className="truncate">{item.label}</span>}
                    </div>

                    {!isCollapsed && item.badge && (
                      <span className={`text-[9px] uppercase font-extrabold px-1.5 py-0.5 rounded-full ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-[#8A3B4D] text-white'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Bottom Profile Area & Sign Out */}
      <div className="border-t border-[#EFE8E6] p-3 bg-white shrink-0">
        <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
          <button
            onClick={() => setScreen('profile')}
            className={`flex items-center gap-2.5 rounded-xl hover:bg-[#FAF7F5] transition-colors ${
              isCollapsed ? 'p-1.5' : 'p-2 w-full text-left'
            }`}
            title="View Profile"
          >
            <img
              src={userProfile.avatarUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'}
              alt={userProfile.name}
              className="w-8 h-8 rounded-full object-cover border border-[#EFE8E6] shrink-0"
            />
            {!isCollapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-[#2B1D22] truncate">
                  {userProfile.name}
                </p>
                <p className="text-[10px] text-[#866F78] truncate">
                  {userProfile.email}
                </p>
              </div>
            )}
          </button>

          {!isCollapsed && onLogout && (
            <button
              onClick={onLogout}
              className="p-2 text-[#866F78] hover:text-[#8A3B4D] hover:bg-[#F9EBEF] rounded-xl transition-colors cursor-pointer"
              title="Sign Out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </aside>
  );
};
