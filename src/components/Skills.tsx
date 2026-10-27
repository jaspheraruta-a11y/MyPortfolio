import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { Code2, Server, Database, Palette, Terminal, Cpu, Check } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categoryIcons: Record<string, React.ReactNode> = {
    frontend: <Code2 className="w-4 h-4" />,
    backend: <Server className="w-4 h-4" />,
    database: <Database className="w-4 h-4" />,
    uiux: <Palette className="w-4 h-4" />,
    tools: <Terminal className="w-4 h-4" />,
    iot: <Cpu className="w-4 h-4" />
  };

  const filteredCategories =
    activeCategory === 'all'
      ? skillsData
      : skillsData.filter((c) => c.id === activeCategory);

  return (
    <section id="skills" className="py-20 lg:py-28 bg-[#050811] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Title & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono text-cyan-400 tracking-wider mb-2">
              TECHNICAL COMPETENCIES
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Skills & Technologies
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-xl">
              Technologies practiced across actual web systems, administrative interfaces, and embedded IoT hardware projects.
            </p>
          </div>

          {/* Interactive Filter Tabs (Segmented control) */}
          <div className="flex flex-wrap gap-1 p-1 bg-slate-900/90 border border-slate-800 rounded-lg">
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-cyan-500/20 text-cyan-300 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Skills
            </button>
            {skillsData.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-cyan-500/20 text-cyan-300 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="p-6 rounded-xl bg-slate-900/50 border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 text-cyan-400 mb-3">
                  <span className="p-1.5 rounded-md bg-cyan-950/70 border border-cyan-800/50 text-cyan-400">
                    {categoryIcons[category.id] || <Code2 className="w-4 h-4" />}
                  </span>
                  <h3 className="text-base font-semibold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                    {category.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Skill List — Zero-Pill unboxed clean list with subtle markers */}
                <ul className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-white transition-colors"
                    >
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/60 text-[11px] font-mono text-slate-500 flex justify-between items-center">
                <span>{category.skills.length} competencies</span>
                <span className="text-cyan-400/80">Active Stack</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
