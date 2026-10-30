import React, { useState } from 'react';
import { AppScreen } from '../types';
import { mockDailyLogs } from '../data/mockData';
import { 
  Droplets, 
  Moon, 
  Footprints, 
  Scale, 
  Smile, 
  Plus, 
  CheckCircle2, 
  TrendingUp 
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  LineChart, 
  Line 
} from 'recharts';

interface LifestyleTrackerProps {
  setScreen: (screen: AppScreen) => void;
}

export const LifestyleTracker: React.FC<LifestyleTrackerProps> = () => {
  const [activeTab, setActiveTab] = useState<'water' | 'sleep' | 'exercise' | 'weight' | 'mood'>('water');
  const [currentWater, setCurrentWater] = useState(1.8);
  const targetWater = 2.5;

  const addWater = (amountLiters: number) => {
    setCurrentWater((prev) => Math.min(parseFloat((prev + amountLiters).toFixed(2)), 3.5));
  };

  return (
    <div className="min-h-[calc(100vh-80px)] p-4 sm:p-6 lg:p-8 bg-[#FAF6F4]">
      <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in">
        
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 sm:p-8 rounded-3xl border border-[#F2E8E6]">
          <div className="space-y-1">
            <h1 className="font-serif text-3xl font-bold text-[#312328]">
              Lifestyle & Vitality Tracker
            </h1>
            <p className="text-sm text-[#584149]">
              Monitor your sleep, hydration, movement, and weight trends with gentle clarity.
            </p>
          </div>

          {/* Tab Selection */}
          <div className="flex flex-wrap gap-1.5 bg-[#FAF6F4] p-1.5 rounded-2xl border border-[#F2E8E6]">
            {[
              { id: 'water', label: 'Water', icon: Droplets },
              { id: 'sleep', label: 'Sleep', icon: Moon },
              { id: 'exercise', label: 'Activity', icon: Footprints },
              { id: 'weight', label: 'Weight', icon: Scale },
              { id: 'mood', label: 'Mood', icon: Smile },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-[#B85062] text-white shadow-xs'
                      : 'text-[#584149] hover:bg-white'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* TAB 1: WATER HYDRATION */}
        {activeTab === 'water' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 p-8 rounded-3xl bg-white border border-[#F2E8E6] space-y-6 text-center shadow-xs flex flex-col items-center justify-between">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#62AA98]">Daily Hydration Goal</span>
                <h3 className="font-serif text-3xl font-bold text-[#312328]">{currentWater} L / {targetWater} L</h3>
              </div>

              {/* Water Bottle Graphic Progress */}
              <div className="relative w-32 h-56 rounded-3xl border-4 border-[#E5F2EE] bg-[#FAF6F4] overflow-hidden flex flex-col justify-end p-2 shadow-inner">
                <div
                  className="w-full bg-gradient-to-t from-[#62AA98] to-[#86C5B5] rounded-2xl transition-all duration-700 flex items-center justify-center text-white font-bold text-xs"
                  style={{ height: `${Math.min((currentWater / targetWater) * 100, 100)}%` }}
                >
                  {Math.round((currentWater / targetWater) * 100)}%
                </div>
              </div>

              <div className="flex gap-3 w-full">
                <button
                  onClick={() => addWater(0.25)}
                  className="flex-1 py-3 rounded-2xl bg-[#E5F2EE] text-[#62AA98] font-bold text-xs hover:bg-[#62AA98] hover:text-white transition-all flex items-center justify-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>+250 ml</span>
                </button>
                <button
                  onClick={() => addWater(0.5)}
                  className="flex-1 py-3 rounded-2xl bg-[#62AA98] text-white font-bold text-xs hover:bg-[#4E8D7D] transition-all flex items-center justify-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>+500 ml</span>
                </button>
              </div>
            </div>

            {/* Weekly Water Chart */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white border border-[#F2E8E6] space-y-4 shadow-xs">
              <h3 className="font-serif text-xl font-bold text-[#312328]">Weekly Water History</h3>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={mockDailyLogs}>
                    <defs>
                      <linearGradient id="waterGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#62AA98" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#62AA98" stopOpacity={0.0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="date" stroke="#8E717B" fontSize={12} tickLine={false} />
                    <YAxis stroke="#8E717B" fontSize={12} tickLine={false} domain={[0, 3]} />
                    <Tooltip />
                    <Area type="monotone" dataKey="waterIntakeLiters" stroke="#62AA98" strokeWidth={3} fillOpacity={1} fill="url(#waterGrad)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: SLEEP TRACKING */}
        {activeTab === 'sleep' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 p-8 rounded-3xl bg-white border border-[#F2E8E6] space-y-6 shadow-xs">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#735CBD]">Nightly Rest</span>
                <h3 className="font-serif text-3xl font-bold text-[#312328]">7.4 Hours Average</h3>
                <p className="text-xs text-[#584149]">Consistent sleep supports luteal phase progesterone balance.</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#EAE6F8] space-y-2 text-xs text-[#584149]">
                <div className="font-bold text-[#312328]">Gentle Sleep Tip:</div>
                <p>Try turning off screens 45 minutes before sleep to allow your pineal gland to produce melatonin naturally.</p>
              </div>
            </div>

            <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white border border-[#F2E8E6] space-y-4 shadow-xs">
              <h3 className="font-serif text-xl font-bold text-[#312328]">Sleep Duration (Hours)</h3>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={mockDailyLogs}>
                    <XAxis dataKey="date" stroke="#8E717B" fontSize={12} tickLine={false} />
                    <YAxis stroke="#8E717B" fontSize={12} tickLine={false} domain={[4, 10]} />
                    <Tooltip />
                    <Line type="monotone" dataKey="sleepHours" stroke="#735CBD" strokeWidth={3} dot={{ r: 5, fill: '#735CBD' }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: EXERCISE & ACTIVITY */}
        {activeTab === 'exercise' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 p-8 rounded-3xl bg-white border border-[#F2E8E6] space-y-6 shadow-xs">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#B85062]">Daily Activity</span>
                <h3 className="font-serif text-3xl font-bold text-[#312328]">6,800 Steps Today</h3>
                <p className="text-xs text-[#584149]">Low-impact movement enhances insulin receptor sensitivity.</p>
              </div>

              <div className="space-y-2 text-xs">
                {['Morning 20m Pilates Workout', 'Afternoon 15m Park Stroll', 'Gentle Evening Stretch'].map((act, i) => (
                  <div key={i} className="p-3 rounded-2xl bg-[#FAF6F4] flex items-center justify-between font-semibold text-[#312328]">
                    <span>{act}</span>
                    <CheckCircle2 className="w-4 h-4 text-[#62AA98]" />
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white border border-[#F2E8E6] space-y-4 shadow-xs">
              <h3 className="font-serif text-xl font-bold text-[#312328]">Weekly Step Count</h3>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={mockDailyLogs}>
                    <defs>
                      <linearGradient id="stepGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#B85062" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#B85062" stopOpacity={0.0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="date" stroke="#8E717B" fontSize={12} tickLine={false} />
                    <YAxis stroke="#8E717B" fontSize={12} tickLine={false} />
                    <Tooltip />
                    <Area type="monotone" dataKey="steps" stroke="#B85062" strokeWidth={3} fillOpacity={1} fill="url(#stepGrad)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: WEIGHT TRENDS */}
        {activeTab === 'weight' && (
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#F2E8E6] space-y-4 shadow-xs">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#312328]">Weight Stability Trend</h3>
                <p className="text-xs text-[#8E717B]">Slight 0.5kg fluctuations during luteal water retention are natural.</p>
              </div>
              <div className="text-2xl font-bold text-[#312328]">58.5 kg</div>
            </div>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={mockDailyLogs}>
                  <XAxis dataKey="date" stroke="#8E717B" fontSize={12} tickLine={false} />
                  <YAxis stroke="#8E717B" fontSize={12} tickLine={false} domain={[55, 62]} />
                  <Tooltip />
                  <Line type="monotone" dataKey="weightKg" stroke="#D97A88" strokeWidth={3} dot={{ r: 5, fill: '#D97A88' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* TAB 5: MOOD JOURNAL */}
        {activeTab === 'mood' && (
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#F2E8E6] space-y-6 shadow-xs">
            <h3 className="font-serif text-xl font-bold text-[#312328]">Emotional Harmony Journal</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              {mockDailyLogs.map((log, i) => (
                <div key={i} className="p-4 rounded-2xl bg-[#FAF6F4] border border-[#F2E8E6] space-y-1">
                  <div className="flex items-center justify-between text-[#8E717B] font-semibold">
                    <span>{log.date}</span>
                    <Smile className="w-4 h-4 text-[#B85062]" />
                  </div>
                  <div className="text-sm font-bold text-[#312328]">{log.mood}</div>
                  <div className="text-[11px] text-[#584149]">Slept {log.sleepHours}h · {log.waterIntakeLiters}L water</div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
