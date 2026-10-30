import React, { useState } from 'react';
import { AppScreen } from '../types';
import { Calendar as CalendarIcon, Heart, Sparkles, Bell, Check, Plus, Sun, Droplets } from 'lucide-react';

interface CycleTrackerProps {
  setScreen: (screen: AppScreen) => void;
}

export const CycleTracker: React.FC<CycleTrackerProps> = ({ setScreen }) => {
  const [selectedDay, setSelectedDay] = useState<number>(14);
  const [reminderPeriod, setReminderPeriod] = useState(true);
  const [reminderWater, setReminderWater] = useState(true);
  const [loggedMood, setLoggedMood] = useState('Energized & Calm');
  const [loggedSymptoms, setLoggedSymptoms] = useState<string[]>(['Light Acne', 'High Energy']);

  // Generate 28 days of a cycle
  const daysInCycle = Array.from({ length: 28 }, (_, i) => i + 1);

  const getPhaseForDay = (day: number) => {
    if (day <= 5) return { name: 'Menstrual Phase', color: 'bg-[#F4D0D5] text-[#B85062]', badge: 'Period' };
    if (day <= 13) return { name: 'Follicular Phase', color: 'bg-[#EAE6F8] text-[#735CBD]', badge: 'Rising Estrogen' };
    if (day <= 16) return { name: 'Ovulatory Phase', color: 'bg-[#E5F2EE] text-[#62AA98]', badge: 'Fertile Peak' };
    return { name: 'Luteal Phase', color: 'bg-[#FDEEE9] text-[#F4A790]', badge: 'Progesterone Phase' };
  };

  const currentPhase = getPhaseForDay(selectedDay);

  const toggleSymptom = (sym: string) => {
    if (loggedSymptoms.includes(sym)) {
      setLoggedSymptoms(loggedSymptoms.filter((s) => s !== sym));
    } else {
      setLoggedSymptoms([...loggedSymptoms, sym]);
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] p-4 sm:p-6 lg:p-8 bg-[#FAF6F4]">
      <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in">
        
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 sm:p-8 rounded-3xl border border-[#F2E8E6]">
          <div className="space-y-1">
            <h1 className="font-serif text-3xl font-bold text-[#312328]">
              Menstrual Cycle Tracker
            </h1>
            <p className="text-sm text-[#584149]">
              Track your hormonal phases, ovulation window, and daily energy rhythm.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-4 py-2 rounded-2xl bg-[#F9ECEC] border border-[#F2E8E6] text-xs font-semibold text-[#B85062] flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Current: Day 14 · Ovulation Peak</span>
            </div>
          </div>
        </div>

        {/* MAIN VISUAL CALENDAR & SUMMARY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Interactive 28-Day Calendar */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-white border border-[#F2E8E6] space-y-6 shadow-xs">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-xl font-bold text-[#312328] flex items-center gap-2">
                <CalendarIcon className="w-5 h-5 text-[#B85062]" />
                <span>October 2026 Cycle Map</span>
              </h2>
              <span className="text-xs font-semibold text-[#8E717B]">Average Cycle: 29 Days</span>
            </div>

            {/* Cycle Legend */}
            <div className="flex flex-wrap gap-4 text-xs font-medium text-[#584149] pt-1">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#F4D0D5]" />
                <span>Menstrual (1-5)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#EAE6F8]" />
                <span>Follicular (6-13)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#62AA98]" />
                <span>Ovulation (14-16)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#FDEEE9]" />
                <span>Luteal (17-28)</span>
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2.5 pt-2">
              {daysInCycle.map((day) => {
                const phase = getPhaseForDay(day);
                const isSelected = selectedDay === day;
                return (
                  <button
                    key={day}
                    onClick={() => setSelectedDay(day)}
                    className={`aspect-square rounded-2xl p-2 flex flex-col items-center justify-between text-xs font-bold transition-all relative ${
                      isSelected
                        ? 'ring-2 ring-[#B85062] ring-offset-2 scale-105 shadow-sm'
                        : 'hover:scale-102'
                    } ${phase.color}`}
                  >
                    <span>Day {day}</span>
                    <span className="text-[9px] font-normal opacity-85 truncate max-w-full">
                      {day <= 5 ? 'Flow' : day === 14 ? 'Ovulation' : day >= 14 && day <= 16 ? 'Fertile' : 'Luteal'}
                    </span>

                    {isSelected && (
                      <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#B85062] border-2 border-white" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF6F4] border border-[#F2E8E6] text-xs text-[#584149] flex items-center justify-between">
              <div>
                <strong>Selected: Day {selectedDay}</strong> · {currentPhase.name}
              </div>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-white text-[#312328] border border-[#F2E8E6]">
                {currentPhase.badge}
              </span>
            </div>
          </div>

          {/* Right Column: Daily Log & Reminders */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Daily Mood & Symptom Logger */}
            <div className="p-6 rounded-3xl bg-white border border-[#F2E8E6] space-y-4 shadow-xs">
              <h3 className="font-serif text-lg font-bold text-[#312328]">
                Log Symptoms & Mood
              </h3>

              {/* Mood Select */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#584149]">Today's Emotional Mood</label>
                <div className="grid grid-cols-2 gap-2">
                  {['Energized', 'Calm', 'Sensitive', 'Focused'].map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setLoggedMood(m)}
                      className={`py-2 rounded-xl text-xs font-semibold border transition-all ${
                        loggedMood === m
                          ? 'border-[#B85062] bg-[#F9ECEC] text-[#312328]'
                          : 'border-[#F2E8E6] bg-white text-[#584149]'
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              {/* Symptom Checklist */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#584149]">Logged Symptoms</label>
                <div className="flex flex-wrap gap-2">
                  {['Light Acne', 'Mild Cramps', 'High Energy', 'Bloating', 'Clear Skin', 'Cravings'].map((sym) => {
                    const active = loggedSymptoms.includes(sym);
                    return (
                      <button
                        key={sym}
                        type="button"
                        onClick={() => toggleSymptom(sym)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1 ${
                          active
                            ? 'border-[#B85062] bg-[#F9ECEC] text-[#312328]'
                            : 'border-[#F2E8E6] bg-[#FAF6F4] text-[#8E717B]'
                        }`}
                      >
                        {active && <Check className="w-3 h-3 text-[#B85062]" />}
                        <span>{sym}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Cycle Reminders Card */}
            <div className="p-6 rounded-3xl bg-white border border-[#F2E8E6] space-y-4 shadow-xs">
              <div className="flex items-center gap-2">
                <Bell className="w-4 h-4 text-[#B85062]" />
                <h3 className="font-serif text-lg font-bold text-[#312328]">Gentle Reminders</h3>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between p-3 rounded-2xl bg-[#FAF6F4]">
                  <div>
                    <div className="font-semibold text-[#312328]">Upcoming Period Alert</div>
                    <div className="text-[11px] text-[#8E717B]">Notify 3 days before cycle start</div>
                  </div>
                  <input
                    type="checkbox"
                    checked={reminderPeriod}
                    onChange={(e) => setReminderPeriod(e.target.checked)}
                    className="accent-[#B85062] w-4 h-4"
                  />
                </div>

                <div className="flex items-center justify-between p-3 rounded-2xl bg-[#FAF6F4]">
                  <div>
                    <div className="font-semibold text-[#312328]">Hydration & Seed Reminders</div>
                    <div className="text-[11px] text-[#8E717B]">Daily morning prompt</div>
                  </div>
                  <input
                    type="checkbox"
                    checked={reminderWater}
                    onChange={(e) => setReminderWater(e.target.checked)}
                    className="accent-[#B85062] w-4 h-4"
                  />
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
