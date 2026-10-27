import React from 'react';
import { Layout, Briefcase, Code2, Database, Gauge, Palette, Cpu, Check, ArrowRight } from 'lucide-react';
import { servicesData } from '../data/portfolioData';

export const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-5 h-5" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5" />;
      case 'Code2':
        return <Code2 className="w-5 h-5" />;
      case 'Database':
        return <Database className="w-5 h-5" />;
      case 'Gauge':
        return <Gauge className="w-5 h-5" />;
      case 'Palette':
        return <Palette className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      default:
        return <Code2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#050811] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono text-cyan-400 tracking-wider mb-2">
            FREELANCE & CLIENT OFFERINGS
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight text-balance">
            Services Tailored for Startups, Businesses & Custom Systems
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Every service is backed by hands-on engineering, pragmatic design standards, and direct client communication.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className="p-6 rounded-2xl bg-[#080d19] border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 group flex flex-col justify-between hover:shadow-[0_0_20px_-5px_rgba(56,189,248,0.15)]"
            >
              <div>
                {/* Header with icon and index */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-800/50 flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:bg-cyan-900/60 transition-all">
                    {getIcon(service.icon)}
                  </div>
                  <span className="text-xs font-mono text-slate-600 group-hover:text-cyan-400 transition-colors">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2 pt-4 border-t border-slate-800/60">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1">
                    Key Deliverables
                  </div>
                  {service.deliverables.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-xs text-slate-400">
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inquiry trigger */}
              <div className="mt-6 pt-4 border-t border-slate-800/60">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-400 hover:text-cyan-300 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Inquire about this service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Client trust banner */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h4 className="text-sm font-semibold text-white">Have a unique hardware or web requirement?</h4>
            <p className="text-xs text-slate-400 mt-1">
              I can build custom hybrid systems bridging embedded microcontrollers (ESP32) and web dashboards.
            </p>
          </div>
          <a
            href="#contact"
            className="px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm"
          >
            Start a Conversation
          </a>
        </div>

      </div>
    </section>
  );
};
