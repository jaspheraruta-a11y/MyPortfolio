import React from 'react';
import { Layers, ShieldCheck, Cpu, Code2, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  const pillars = [
    {
      title: 'Pragmatic Full-Stack Engineering',
      desc: 'Focusing on clean application structure, responsive React frontends, robust Node.js/Express logic, and structured database schemas without bloat.',
      icon: Code2
    },
    {
      title: 'Physical & Digital IoT Synergy',
      desc: 'Hands-on experience connecting microcontroller hardware (ESP32) and sensors to web-based alert dashboards and real-time telemetry systems.',
      icon: Cpu
    },
    {
      title: 'Intuitive UI/UX Design',
      desc: 'Designing dark-themed, modern interfaces with high contrast, clear visual hierarchy, and respectful spacing tailored to client business needs.',
      icon: Layers
    },
    {
      title: 'Honest & Transparent Delivery',
      desc: 'Committed to verified implementations, transparent communication, realistic deadlines, and accessible, maintainable codebases.',
      icon: ShieldCheck
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#060a15] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono text-cyan-400 tracking-wider mb-2">
            DISCIPLINE & BACKGROUND
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight text-balance">
            Building digital systems that solve concrete problems.
          </h2>
        </div>

        {/* 2-Column Split: Narrative on Left, Pillars & Details on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Honest Narrative */}
          <div className="lg:col-span-6 space-y-5 text-slate-300 text-base leading-relaxed">
            {personalInfo.aboutParagraphs.map((para, idx) => (
              <p key={idx} className="text-slate-300">
                {para}
              </p>
            ))}

            <div className="pt-4 border-t border-slate-800/80 space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-500">
                Current Working Context
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Philippines (Remote)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Open for Freelance Work</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Architectural Pillars */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all duration-200 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-cyan-950/60 border border-cyan-800/50 flex items-center justify-center text-cyan-400 mb-3 group-hover:scale-105 transition-transform">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
