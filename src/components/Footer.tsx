import React from 'react';
import { ArrowUp, Github, Mail, Facebook, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#04060d] border-t border-slate-800/80 text-slate-400 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          {/* Wordmark and Headline */}
          <div>
            <div className="text-base font-bold text-white flex items-center gap-2">
              <span>{personalInfo.name}</span>
              <span className="text-cyan-400">/</span>
              <span className="text-xs font-normal text-slate-400">Full-Stack & IoT</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Building functional, modern, and user-friendly digital systems.
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-300">
            <a href="#about" className="hover:text-cyan-300 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-300 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-300 transition-colors">Projects</a>
            <a href="#services" className="hover:text-cyan-300 transition-colors">Services</a>
            <a href="#workflow" className="hover:text-cyan-300 transition-colors">Workflow</a>
            <a href="#contact" className="hover:text-cyan-300 transition-colors">Contact</a>
          </nav>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${personalInfo.socials.email}`}
              className="p-2 text-slate-400 hover:text-cyan-300 hover:bg-slate-900 rounded-lg transition-colors"
              title="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-cyan-300 hover:bg-slate-900 rounded-lg transition-colors"
              title="Facebook Profile"
            >
              <Facebook className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-cyan-300 hover:bg-slate-900 rounded-lg transition-colors"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="ml-2 p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-900 rounded-lg border border-slate-800 transition-colors cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Bar with Year 2026 */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            © {currentYear} {personalInfo.name}. All rights reserved.
          </div>
          <div>
            Built with React, TypeScript & Tailwind CSS
          </div>
        </div>

      </div>
    </footer>
  );
};
