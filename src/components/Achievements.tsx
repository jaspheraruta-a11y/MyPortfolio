import React from 'react';
import { Award, Milestone, Calendar, Sparkles, Edit3 } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 lg:py-28 bg-[#050811] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono text-cyan-400 tracking-wider mb-2">
            MILESTONES & RECOGNITION
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Achievements & Experience
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Verified hackathons, IoT hardware milestones, and system architecture achievements. Editable placeholders are marked for future credentials.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className={`p-6 rounded-2xl transition-all duration-200 flex flex-col justify-between ${
                item.isPlaceholder
                  ? 'bg-slate-900/30 border border-dashed border-slate-700/80 hover:border-cyan-500/50'
                  : 'bg-[#080d19] border border-slate-800 hover:border-cyan-500/40 hover:shadow-[0_0_20px_-5px_rgba(56,189,248,0.15)]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-cyan-950/60 border border-cyan-800/50 text-cyan-400">
                      {item.isPlaceholder ? <Edit3 className="w-4 h-4" /> : <Award className="w-4 h-4" />}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {item.category}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono text-cyan-400/80 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    {item.date}
                  </span>
                </div>

                <h3 className={`text-base font-bold mb-1.5 ${item.isPlaceholder ? 'text-cyan-300/90' : 'text-white'}`}>
                  {item.title}
                </h3>

                <div className="text-xs font-medium text-slate-400 mb-3 flex items-center gap-1.5">
                  <span>{item.organization}</span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.isPlaceholder && (
                <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] font-mono text-cyan-400">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Configurable in src/data/portfolioData.ts</span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
