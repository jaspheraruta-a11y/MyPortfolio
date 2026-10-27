import React, { useEffect, useState } from 'react';
import { X, Download, Printer, FileText, CheckCircle2, AlertCircle, Info } from 'lucide-react';
import { personalInfo, skillsData, projectsData, achievementsData } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownloadPdf = async () => {
    try {
      // Check if real /cv.pdf exists in public root
      const response = await fetch('/cv.pdf', { method: 'HEAD' });
      if (response.ok) {
        const link = document.createElement('a');
        link.href = '/cv.pdf';
        link.download = `Jaspher_Arota_CV.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        // Provide friendly instruction
        setDownloadNotice(
          'To connect your custom PDF file: save your resume as "cv.pdf" in the "/public" directory. You can also click "Print / Save as PDF" above to generate a PDF right now.'
        );
      }
    } catch {
      setDownloadNotice(
        'To connect your custom PDF file: save your resume as "cv.pdf" in the "/public" directory. Or use "Print / Save as PDF" directly.'
      );
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-[#080d19] border border-cyan-500/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#080d19] border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan-400" />
            <h2 id="cv-modal-title" className="text-base font-bold text-white">
              Curriculum Vitae — {personalInfo.name}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-700 hover:border-cyan-500/50 rounded-lg transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              type="button"
              onClick={handleDownloadPdf}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors cursor-pointer shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close CV modal"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-2 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Notice Banner if PDF hasn't been uploaded yet */}
        {downloadNotice && (
          <div className="px-6 py-3 bg-cyan-950/40 border-b border-cyan-800/60 text-xs text-cyan-300 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <div className="flex-1">
              <span>{downloadNotice}</span>
            </div>
            <button
              type="button"
              onClick={() => setDownloadNotice(null)}
              className="text-cyan-400 hover:text-white ml-2"
            >
              ✕
            </button>
          </div>
        )}

        {/* Scrollable CV Document */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 print:p-0 print:text-black print:bg-white text-slate-200">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 print:border-black">
            <h1 className="text-3xl font-extrabold text-white print:text-black">
              {personalInfo.name}
            </h1>
            <p className="text-sm font-semibold text-cyan-400 print:text-gray-800 mt-1">
              {personalInfo.title}
            </p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400 print:text-gray-600 mt-2 font-mono">
              <span>{personalInfo.socials.email}</span>
              <span>·</span>
              <span>{personalInfo.location}</span>
              <span>·</span>
              <span>{personalInfo.availability}</span>
            </div>
          </div>

          {/* Professional Profile */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 print:text-black font-bold mb-2">
              Professional Profile
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 print:text-gray-800 leading-relaxed">
              {personalInfo.intro}
            </p>
          </div>

          {/* Core Technical Stack */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 print:text-black font-bold mb-3">
              Technical Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillsData.map((cat) => (
                <div key={cat.id} className="text-xs">
                  <span className="font-semibold text-white print:text-black block mb-1">
                    {cat.title}:
                  </span>
                  <span className="text-slate-400 print:text-gray-700">
                    {cat.skills.join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Implementation Projects */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 print:text-black font-bold mb-3">
              Featured Systems & Implementations
            </h3>
            <div className="space-y-4">
              {projectsData.map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl bg-slate-900/40 print:bg-transparent border border-slate-800 print:border-gray-300">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-white print:text-black text-sm">
                      {proj.title}
                    </span>
                    <span className="font-mono text-cyan-400 print:text-gray-600 text-[11px]">
                      {proj.status}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400 print:text-gray-600 mb-2 font-mono">
                    Role: {proj.role} · Tech: {proj.techStack.join(', ')}
                  </div>
                  <p className="text-xs text-slate-300 print:text-gray-700 leading-relaxed">
                    {proj.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements & Milestones */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 print:text-black font-bold mb-3">
              Milestones & Recognition
            </h3>
            <div className="space-y-3">
              {achievementsData.map((ach) => (
                <div key={ach.id} className="text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white print:text-black">
                      {ach.title}
                    </span>
                    <span className="text-slate-500 print:text-gray-600 font-mono text-[11px]">
                      {ach.date}
                    </span>
                  </div>
                  <p className="text-slate-400 print:text-gray-700 mt-0.5">
                    {ach.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
