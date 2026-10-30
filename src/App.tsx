import React, { useState } from 'react';
import { AppScreen, UserProfile, AssessmentData, RiskPredictionResult } from './types';
import { initialUserProfile, defaultAssessment, defaultRiskResult } from './data/mockData';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { LandingPage } from './components/LandingPage';
import { LoginPage } from './components/LoginPage';
import { SignupPage } from './components/SignupPage';
import { OnboardingFlow } from './components/OnboardingFlow';
import { HealthAssessment } from './components/HealthAssessment';
import { RiskPredictionResult as RiskResultView } from './components/RiskPredictionResult';
import { Dashboard } from './components/Dashboard';
import { CycleTracker } from './components/CycleTracker';
import { LifestyleTracker } from './components/LifestyleTracker';
import { DietPlanner } from './components/DietPlanner';
import { RecipeLibrary } from './components/RecipeLibrary';
import { FoodFinder } from './components/FoodFinder';
import { EducationHub } from './components/EducationHub';
import { ProfileView } from './components/ProfileView';

export function App() {
  const [currentScreen, setScreen] = useState<AppScreen>('landing');
  const [userProfile, setProfile] = useState<UserProfile>(initialUserProfile);
  const [assessmentData, setAssessmentData] = useState<AssessmentData>(defaultAssessment);
  const [riskResult, setRiskResult] = useState<RiskPredictionResult>(defaultRiskResult);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const isAuthOrLanding = ['landing', 'login', 'signup', 'onboarding'].includes(currentScreen);

  const handleLoginSuccess = (email: string) => {
    setProfile((prev) => ({
      ...prev,
      email,
      onboarded: true,
    }));
  };

  const handleSignupSuccess = (name: string, email: string) => {
    setProfile((prev) => ({
      ...prev,
      name,
      email,
      onboarded: false,
    }));
  };

  const handleLogout = () => {
    setProfile((prev) => ({
      ...prev,
      onboarded: false,
    }));
    setScreen('landing');
  };

  return (
    <div className="min-h-screen flex bg-[#FAF7F5] text-[#2B1D22] font-sans antialiased selection:bg-[#F9EBEF] selection:text-[#8A3B4D] overflow-x-hidden">
      
      {/* Persistent Collapsible Left Sidebar for Desktop & Laptop (in-app screens) */}
      {!isAuthOrLanding && (
        <Sidebar
          currentScreen={currentScreen}
          setScreen={setScreen}
          userProfile={userProfile}
          onLogout={handleLogout}
          collapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
        />
      )}

      {/* Main Content Column */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen">
        
        {/* Responsive Header Bar */}
        <Navbar
          currentScreen={currentScreen}
          setScreen={setScreen}
          userProfile={userProfile}
          onLogout={handleLogout}
        />

        {/* Main Body View with Safe Area for Mobile Bottom Nav */}
        <main className={`flex-1 w-full ${!isAuthOrLanding ? 'pb-20 lg:pb-8' : ''}`}>
          {currentScreen === 'landing' && (
            <LandingPage setScreen={setScreen} />
          )}

          {currentScreen === 'login' && (
            <LoginPage
              setScreen={setScreen}
              onLoginSuccess={handleLoginSuccess}
            />
          )}

          {currentScreen === 'signup' && (
            <SignupPage
              setScreen={setScreen}
              onSignupSuccess={handleSignupSuccess}
            />
          )}

          {currentScreen === 'onboarding' && (
            <OnboardingFlow
              userProfile={userProfile}
              setProfile={setProfile}
              setScreen={setScreen}
            />
          )}

          {currentScreen === 'assessment' && (
            <HealthAssessment
              assessmentData={assessmentData}
              setAssessmentData={setAssessmentData}
              setRiskResult={setRiskResult}
              setProfile={setProfile}
              setScreen={setScreen}
            />
          )}

          {currentScreen === 'risk_result' && (
            <RiskResultView
              riskResult={riskResult}
              setScreen={setScreen}
            />
          )}

          {currentScreen === 'dashboard' && (
            <Dashboard
              userProfile={userProfile}
              riskResult={riskResult}
              setScreen={setScreen}
              setProfile={setProfile}
            />
          )}

          {currentScreen === 'cycle' && (
            <CycleTracker setScreen={setScreen} />
          )}

          {currentScreen === 'lifestyle' && (
            <LifestyleTracker setScreen={setScreen} />
          )}

          {currentScreen === 'nutrition' && (
            <DietPlanner setScreen={setScreen} userProfile={userProfile} />
          )}

          {currentScreen === 'recipes' && (
            <RecipeLibrary setScreen={setScreen} />
          )}

          {currentScreen === 'food_finder' && (
            <FoodFinder setScreen={setScreen} />
          )}

          {currentScreen === 'education' && (
            <EducationHub setScreen={setScreen} />
          )}

          {currentScreen === 'profile' && (
            <ProfileView
              userProfile={userProfile}
              setProfile={setProfile}
              riskResult={riskResult}
              setScreen={setScreen}
              onLogout={handleLogout}
            />
          )}
        </main>
      </div>

    </div>
  );
}

export default App;
