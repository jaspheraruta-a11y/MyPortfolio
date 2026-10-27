import React from 'react';
import { workProcessData } from '../data/portfolioData';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const Workflow: React.FC = () => {
  return (
    <section id="workflow" className="py-20 lg:py-28 bg-[#060a15] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono text-cyan-400 tracking-wider mb-2">
            METHODOLOGY & TIMELINE
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight text-balance">
            A Transparent 5-Step Process From Concept to Launch
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Clear communication and milestone checkpoints ensure projects are delivered on schedule with zero surprises.
          </p>
        </div>

        {/* Workflow Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {workProcessData.map((step, idx) => (
            <div
              key={step.number}
              className="relative p-6 rounded-2xl bg-[#090e1a] border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Step number indicator */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">
                    {step.number}
                  </span>
                  {idx < workProcessData.length - 1 && (
                    <span className="hidden lg:block text-slate-700 group-hover:text-cyan-500/60 transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              {/* Step Deliverables */}
              <div className="pt-4 border-t border-slate-800/60 space-y-1.5">
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mb-1">
                  Deliverables
                </div>
                {step.deliverables.map((item, i) => (
                  <div key={i} className="flex items-start gap-1.5 text-[11px] text-slate-400">
                    <span className="w-1 h-1 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
