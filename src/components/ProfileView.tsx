import React, { useState } from 'react';
import { AppScreen, UserProfile, RiskPredictionResult } from '../types';
import { mockRecipes } from '../data/mockData';
import { 
  User, 
  Heart, 
  Sparkles, 
  ShieldCheck, 
  Lock, 
  LogOut, 
  Calendar, 
  Utensils, 
  Check, 
  Edit3,
  Bookmark
} from 'lucide-react';

interface ProfileViewProps {
  userProfile: UserProfile;
  setProfile: React.Dispatch<React.SetStateAction<UserProfile>>;
  riskResult: RiskPredictionResult;
  setScreen: (screen: AppScreen) => void;
  onLogout: () => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({
  userProfile,
  setProfile,
  riskResult,
  setScreen,
  onLogout,
}) => {
  const [activeTab, setActiveTab] = useState<'info' | 'goals' | 'history' | 'saved' | 'privacy'>('info');
  const [isEditing, setIsEditing] = useState(false);
  const [nameInput, setNameInput] = useState(userProfile.name);
  const [ageInput, setAgeInput] = useState(userProfile.age);
  const [weightInput, setWeightInput] = useState(userProfile.weightKg);

  const handleSaveProfile = () => {
    setProfile((prev) => ({
      ...prev,
      name: nameInput,
      age: ageInput,
      weightKg: weightInput,
    }));
    setIsEditing(false);
  };

  const savedRecipesList = mockRecipes.filter((r) => r.isFavorite);

  return (
    <div className="min-h-[calc(100vh-80px)] p-4 sm:p-6 lg:p-8 bg-[#FAF6F4]">
      <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in">
        
        {/* PROFILE HEADER CARD */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#F2E8E6] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <img
              src={userProfile.avatarUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'}
              alt={userProfile.name}
              className="w-20 h-20 rounded-2xl object-cover border-2 border-[#F4D0D5] shadow-sm"
            />
            <div className="space-y-1 text-center sm:text-left">
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#312328]">
                {userProfile.name}
              </h1>
              <p className="text-xs text-[#8E717B]">{userProfile.email}</p>
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#F9ECEC] text-[#B85062] text-[11px] font-semibold mt-1">
                <span>HerLytics Companion Member</span>
              </div>
            </div>
          </div>

          <button
            onClick={onLogout}
            className="px-4 py-2.5 rounded-xl border border-[#F2E8E6] text-xs font-semibold text-[#B85062] hover:bg-[#F9ECEC] transition-colors flex items-center gap-1.5"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>

        {/* PROFILE TABS */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none border-b border-[#F2E8E6]">
          {[
            { id: 'info', label: 'Personal & Health Info', icon: User },
            { id: 'goals', label: 'Wellness Goals', icon: Heart },
            { id: 'history', label: 'Prediction History', icon: Sparkles },
            { id: 'saved', label: 'Saved Recipes', icon: Bookmark },
            { id: 'privacy', label: 'Privacy & Security', icon: ShieldCheck },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-3 border-b-2 text-xs font-semibold transition-all shrink-0 ${
                  isActive
                    ? 'border-[#B85062] text-[#B85062]'
                    : 'border-transparent text-[#8E717B] hover:text-[#312328]'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* TAB 1: PERSONAL & HEALTH INFO */}
        {activeTab === 'info' && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#F2E8E6] space-y-6 shadow-xs">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-xl font-bold text-[#312328]">Personal Information</h3>
              <button
                onClick={() => (isEditing ? handleSaveProfile() : setIsEditing(true))}
                className="px-4 py-2 rounded-xl bg-[#584149] text-white text-xs font-semibold hover:bg-[#312328] flex items-center gap-1.5"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>{isEditing ? 'Save Changes' : 'Edit Profile'}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
              <div className="space-y-1.5">
                <label className="font-semibold text-[#8E717B]">Full Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-[#F2E8E6] text-xs font-semibold text-[#312328]"
                  />
                ) : (
                  <div className="p-3 rounded-xl bg-[#FAF6F4] font-semibold text-[#312328]">{userProfile.name}</div>
                )}
              </div>

              <div className="space-y-1.5">
                <label className="font-semibold text-[#8E717B]">Age (Years)</label>
                {isEditing ? (
                  <input
                    type="number"
                    value={ageInput}
                    onChange={(e) => setAgeInput(parseInt(e.target.value) || 26)}
                    className="w-full p-2.5 rounded-xl border border-[#F2E8E6] text-xs font-semibold text-[#312328]"
                  />
                ) : (
                  <div className="p-3 rounded-xl bg-[#FAF6F4] font-semibold text-[#312328]">{userProfile.age} Years</div>
                )}
              </div>

              <div className="space-y-1.5">
                <label className="font-semibold text-[#8E717B]">Weight (kg)</label>
                {isEditing ? (
                  <input
                    type="number"
                    value={weightInput}
                    onChange={(e) => setWeightInput(parseFloat(e.target.value) || 58.5)}
                    className="w-full p-2.5 rounded-xl border border-[#F2E8E6] text-xs font-semibold text-[#312328]"
                  />
                ) : (
                  <div className="p-3 rounded-xl bg-[#FAF6F4] font-semibold text-[#312328]">{userProfile.weightKg} kg</div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: WELLNESS GOALS */}
        {activeTab === 'goals' && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#F2E8E6] space-y-4 shadow-xs">
            <h3 className="font-serif text-xl font-bold text-[#312328]">Your Active Goals</h3>
            <div className="flex flex-wrap gap-2">
              {userProfile.goals.map((goal, i) => (
                <span key={i} className="px-4 py-2 rounded-2xl bg-[#F9ECEC] text-[#B85062] text-xs font-bold border border-[#F2E8E6] flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" />
                  <span>{goal}</span>
                </span>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: PREDICTION HISTORY */}
        {activeTab === 'history' && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#F2E8E6] space-y-4 shadow-xs">
            <h3 className="font-serif text-xl font-bold text-[#312328]">Assessment History</h3>
            <div className="p-5 rounded-2xl bg-[#FAF6F4] border border-[#F2E8E6] flex items-center justify-between text-xs">
              <div className="space-y-1">
                <div className="font-bold text-[#312328]">{riskResult.riskCategory} ({riskResult.scorePercentage}%)</div>
                <div className="text-[#8E717B]">Generated on {riskResult.timestamp}</div>
              </div>
              <button
                onClick={() => setScreen('risk_result')}
                className="px-4 py-2 rounded-xl bg-[#B85062] text-white text-xs font-semibold shadow-xs"
              >
                View Full Insight Report
              </button>
            </div>
          </div>
        )}

        {/* TAB 4: SAVED RECIPES */}
        {activeTab === 'saved' && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#F2E8E6] space-y-4 shadow-xs">
            <h3 className="font-serif text-xl font-bold text-[#312328]">Saved Favorites</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {savedRecipesList.map((recipe) => (
                <div key={recipe.id} className="p-4 rounded-2xl border border-[#F2E8E6] flex items-center gap-4">
                  <img src={recipe.image} alt={recipe.title} className="w-16 h-16 rounded-xl object-cover" />
                  <div>
                    <div className="font-bold text-xs text-[#312328]">{recipe.title}</div>
                    <div className="text-[11px] text-[#8E717B]">{recipe.category} · {recipe.prepTime}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: PRIVACY & SECURITY */}
        {activeTab === 'privacy' && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#F2E8E6] space-y-4 shadow-xs">
            <h3 className="font-serif text-xl font-bold text-[#312328]">Privacy & Data Control</h3>
            <div className="p-4 rounded-2xl bg-[#E5F2EE] text-xs text-[#584149] space-y-1">
              <div className="font-bold text-[#312328]">End-to-End Privacy Guarantee</div>
              <p>Your health assessment data and symptom logs are encrypted locally in compliance with strict privacy guidelines.</p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
