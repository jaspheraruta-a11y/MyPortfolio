import React, { useState } from 'react';
import { ArrowDown, FileText, Send, Sparkles, Terminal, Code, Cpu } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  const [activeCodeTab, setActiveCodeTab] = useState<'react' | 'iot'>('react');

  const reactCodeSnippet = `// Jaspher Arota — Full-Stack Portfolio
interface ProjectScope {
  client: string;
  architecture: "React" | "Node.js" | "IoT";
  status: "Production Ready";
}

export const deliverSolution = async (spec: ProjectScope) => {
  const ui = await buildResponsiveUI(spec);
  const api = await connectDatabase(ui);
  return { success: true, verified: true };
};`;

  const iotCodeSnippet = `// FIRE-SMART — Hardware Sensor Loop
#include <ESP32Sensors.h>

void loop() {
  int flameVal = analogRead(PIN_FLAME);
  float tempC = readThermalProbe();

  if (flameVal < THRESHOLD_DANGER) {
    triggerAlarmBuzzer(HIGH);
    dispatchTelemetry("EMERGENCY_ALERT");
  }
  delay(150);
}`;

  return (
    <section className="relative min-h-[90vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center bg-radial from-slate-900/60 via-[#050811] to-[#050811] overflow-hidden">
      {/* Background subtle neon glow and grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Hierarchy & Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Unboxed Kicker / Subtitle (Strict Zero-Pill) */}
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-wider">
              <span>FULL-STACK</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>WEB SYSTEMS</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>IOT PROTOTYPING</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white text-balance leading-[1.1]">
              Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">{personalInfo.name}</span>
            </h1>

            {/* Professional Headline */}
            <p className="text-lg sm:text-xl font-medium text-slate-200">
              Web Developer <span className="text-cyan-400">|</span> Full-Stack Developer <span className="text-cyan-400">|</span> UI/UX Enthusiast
            </p>

            {/* Concise Introduction */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl">
              {personalInfo.intro}
            </p>

            {/* Verified status note */}
            <div className="flex items-center gap-3 text-xs text-slate-400 pt-1">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
              <span>{personalInfo.availability}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Remote & Contract</span>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="px-5 py-2.5 text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 active:scale-95 rounded-md transition-all shadow-[0_0_20px_rgba(56,189,248,0.4)] whitespace-nowrap"
              >
                View My Projects
              </a>

              <a
                href="#contact"
                className="px-5 py-2.5 text-sm font-semibold text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/60 rounded-md transition-all hover:shadow-[0_0_15px_rgba(56,189,248,0.2)] whitespace-nowrap flex items-center gap-2"
              >
                <Send className="w-4 h-4 text-cyan-400" />
                <span>Hire Me</span>
              </a>

              <button
                type="button"
                onClick={onOpenCvModal}
                className="px-5 py-2.5 text-sm font-medium text-slate-300 hover:text-white bg-transparent hover:bg-slate-800/60 border border-slate-800 hover:border-slate-700 rounded-md transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-slate-400" />
                <span>Download CV</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Frame with Profile Image & Code Switcher (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end gap-6">
            
            {/* Profile Avatar Card with Glassmorphic frame */}
            <div className="relative group w-full max-w-sm">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 to-blue-600/30 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-300" />
              
              <div className="relative bg-[#090e1a] border border-cyan-500/30 rounded-xl p-3 shadow-2xl">
                <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-slate-900">
                  <img
                    src={personalInfo.avatarUrl}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback if image fails
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  
                  {/* Subtle bottom gradient overlay for legibility */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#050811] via-[#050811]/60 to-transparent p-4 flex items-end justify-between">
                    <div>
                      <div className="text-sm font-bold text-white tracking-wide">{personalInfo.name}</div>
                      <div className="text-xs text-cyan-300">Software & Embedded Developer</div>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800">
                      PH / Remote
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle Interactive Code Terminal Preview */}
            <div className="w-full max-w-sm bg-[#070b14] border border-slate-800 rounded-xl overflow-hidden shadow-xl text-left">
              <div className="flex items-center justify-between px-3 py-2 bg-slate-900/90 border-b border-slate-800">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <span className="ml-2 text-[11px] font-mono text-slate-400 flex items-center gap-1">
                    <Terminal className="w-3 h-3 text-cyan-400" />
                    developer-preview
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setActiveCodeTab('react')}
                    className={`px-2 py-0.5 text-[11px] font-mono rounded transition-colors ${
                      activeCodeTab === 'react'
                        ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                        : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    React/TS
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveCodeTab('iot')}
                    className={`px-2 py-0.5 text-[11px] font-mono rounded transition-colors ${
                      activeCodeTab === 'iot'
                        ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                        : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    IoT/C++
                  </button>
                </div>
              </div>

              <div className="p-3 text-[11px] font-mono leading-relaxed text-slate-300 overflow-x-auto bg-[#070b14]">
                <pre className="whitespace-pre">
                  <code>{activeCodeTab === 'react' ? reactCodeSnippet : iotCodeSnippet}</code>
                </pre>
              </div>
            </div>

          </div>
        </div>

        {/* Full-width strip below hero split: Core Focus Areas (Disciplined, no fake numbers) */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6 text-slate-400">
          <div>
            <div className="text-xs uppercase font-mono tracking-wider text-slate-500">Core Focus</div>
            <div className="text-sm font-semibold text-slate-200 mt-1">Full-Stack Web Apps</div>
          </div>
          <div>
            <div className="text-xs uppercase font-mono tracking-wider text-slate-500">Hardware Bridge</div>
            <div className="text-sm font-semibold text-slate-200 mt-1">ESP32 & IoT Telemetry</div>
          </div>
          <div>
            <div className="text-xs uppercase font-mono tracking-wider text-slate-500">Design Ethos</div>
            <div className="text-sm font-semibold text-slate-200 mt-1">Clean & Accessible UI</div>
          </div>
          <div>
            <div className="text-xs uppercase font-mono tracking-wider text-slate-500">Client Service</div>
            <div className="text-sm font-semibold text-slate-200 mt-1">Direct & Transparent</div>
          </div>
        </div>

      </div>
    </section>
  );
};
