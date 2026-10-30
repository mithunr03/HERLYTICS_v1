import React, { useState } from 'react';
import { AppScreen, Article } from '../types';
import { mockArticles } from '../data/mockData';
import { BookOpen, Clock, User, X, ShieldCheck, Sparkles, Search } from 'lucide-react';

interface EducationHubProps {
  setScreen: (screen: AppScreen) => void;
}

export const EducationHub: React.FC<EducationHubProps> = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'PCOS', 'Menstrual Health', 'Nutrition', 'Stress Management', 'Hormonal Health', 'Fertility'];

  const filteredArticles = mockArticles.filter((art) => {
    const matchesCat = selectedCategory === 'All' || art.category === selectedCategory;
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) || art.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-[calc(100vh-80px)] p-4 sm:p-6 lg:p-8 bg-[#FAF6F4]">
      <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in">
        
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 sm:p-8 rounded-3xl border border-[#F2E8E6]">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAE6F8] text-[#735CBD] text-xs font-semibold">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Evidence-Informed Educational Hub</span>
            </div>
            <h1 className="font-serif text-3xl font-bold text-[#312328]">
              Wellness Library & Evidence Hub
            </h1>
            <p className="text-sm text-[#584149]">
              Demystifying hormones, stress balance, and body literacy with clear expert guidance.
            </p>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8E717B]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles & topics..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-[#F2E8E6] bg-[#FAF6F4]/60 text-xs text-[#312328] focus:outline-none focus:border-[#D97A88] focus:bg-white"
            />
          </div>
        </div>

        {/* CATEGORIES BAR */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-2xl text-xs font-semibold transition-all shrink-0 ${
                  isSelected
                    ? 'bg-[#735CBD] text-white shadow-xs'
                    : 'bg-white text-[#584149] border border-[#F2E8E6] hover:border-[#B4A2DE]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* ARTICLES MAGAZINE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              onClick={() => setActiveArticle(article)}
              className="bg-white rounded-3xl border border-[#F2E8E6] overflow-hidden shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-bold text-[#312328]">
                    {article.category}
                  </span>
                </div>

                <div className="p-6 sm:p-8 space-y-3">
                  <h3 className="font-serif text-2xl font-bold text-[#312328] group-hover:text-[#B85062] transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#584149] leading-relaxed line-clamp-3">
                    {article.description}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0 flex items-center justify-between text-xs text-[#8E717B] border-t border-[#FAF6F4] pt-4">
                <span className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#B85062]" />
                  <span>{article.author}</span>
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#735CBD]" />
                  <span>{article.readTime}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ARTICLE READING MODAL */}
        {activeArticle && (
          <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in">
            <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-[#F2E8E6] overflow-hidden my-8 max-h-[90vh] flex flex-col">
              
              {/* Cover Header */}
              <div className="relative h-72 shrink-0">
                <img
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setActiveArticle(null)}
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-white/90 backdrop-blur-sm text-[#312328] hover:bg-white transition-all shadow-md"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-6 px-4 py-1.5 rounded-full bg-white/90 text-xs font-bold text-[#312328]">
                  {activeArticle.category} · {activeArticle.readTime}
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6 sm:p-10 overflow-y-auto space-y-6">
                <div className="space-y-2">
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#312328] leading-tight">
                    {activeArticle.title}
                  </h2>
                  <div className="text-xs text-[#8E717B] flex items-center gap-3">
                    <span>By {activeArticle.author}</span>
                    <span>·</span>
                    <span>Published {activeArticle.date}</span>
                  </div>
                </div>

                <div className="space-y-4 text-sm text-[#312328] leading-relaxed border-t border-[#F2E8E6] pt-6 font-normal">
                  {activeArticle.content.map((paragraph, i) => (
                    <p key={i} className="whitespace-pre-line">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Medical Safety Disclaimer Callout */}
                <div className="p-4 rounded-2xl bg-[#F9ECEC] border border-[#EEDBDD] text-xs text-[#584149] flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#B85062] shrink-0" />
                  <p>
                    This article is for educational awareness. Always consult your healthcare provider or doctor regarding personal health symptoms or medical treatment.
                  </p>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};
