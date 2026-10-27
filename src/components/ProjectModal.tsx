import React, { useEffect, useState } from 'react';
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  Cpu,
  Layers,
  Calendar,
  User,
  Play,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Award,
  Video,
  FileCheck,
  ZoomIn,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { Project, ProjectMediaItem } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeMediaIndex, setActiveMediaIndex] = useState<number>(0);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('All');
  const [lightboxMedia, setLightboxMedia] = useState<ProjectMediaItem | null>(null);

  // Reset active media when project changes
  useEffect(() => {
    setActiveMediaIndex(0);
    setActiveCategoryFilter('All');
    setLightboxMedia(null);
  }, [project?.id]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightboxMedia) {
          setLightboxMedia(null);
        } else {
          onClose();
        }
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose, lightboxMedia]);

  if (!project) return null;

  const proofFiles = project.proofMedia || [];
  const hasProofFiles = proofFiles.length > 0;
  const currentMedia = hasProofFiles ? proofFiles[activeMediaIndex] : null;

  const filteredProofFiles =
    activeCategoryFilter === 'All'
      ? proofFiles
      : proofFiles.filter((item) => item.category === activeCategoryFilter);

  const prevMedia = () => {
    if (!hasProofFiles) return;
    setActiveMediaIndex((prev) => (prev === 0 ? proofFiles.length - 1 : prev - 1));
  };

  const nextMedia = () => {
    if (!hasProofFiles) return;
    setActiveMediaIndex((prev) => (prev === proofFiles.length - 1 ? 0 : prev + 1));
  };

  const categories = ['All', ...Array.from(new Set(proofFiles.map((m) => m.category)))];

  return (
    <>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
        onClick={onClose}
      >
        <div
          className="relative w-full max-w-4xl max-h-[92vh] bg-[#080d19] border border-cyan-500/30 rounded-2xl shadow-2xl overflow-y-auto flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header Bar with Close Button */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-5 sm:px-6 py-3.5 bg-[#080d19]/95 backdrop-blur border-b border-slate-800">
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="text-cyan-400 font-semibold">{project.category}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-300">{project.status}</span>
              {hasProofFiles && (
                <>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-cyan-950/80 border border-cyan-500/40 text-cyan-300">
                    <ShieldCheck className="w-3 h-3 text-cyan-400" />
                    <span>{proofFiles.length} Verified Files</span>
                  </span>
                </>
              )}
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Top Media Showcase / Stage */}
          <div className="relative w-full bg-slate-950 border-b border-slate-800 flex flex-col">
            {hasProofFiles && currentMedia ? (
              <>
                {/* Main Media Player / Viewer Viewport */}
                <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden group">
                  {currentMedia.type === 'video' ? (
                    <video
                      key={currentMedia.url}
                      src={currentMedia.url}
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div
                      className="relative w-full h-full flex items-center justify-center cursor-zoom-in group/img"
                      onClick={() => setLightboxMedia(currentMedia)}
                    >
                      <img
                        key={currentMedia.url}
                        src={currentMedia.url}
                        alt={currentMedia.title}
                        className="w-full h-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 pointer-events-none">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/80 text-white text-xs font-mono font-medium backdrop-blur border border-white/20 shadow-lg">
                          <ZoomIn className="w-4 h-4 text-cyan-400" />
                          Click to inspect high-resolution
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Top Bar Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-black/80 backdrop-blur border border-slate-700 text-cyan-300">
                        {currentMedia.type === 'video' ? (
                          <Video className="w-3.5 h-3.5 text-cyan-400" />
                        ) : (
                          <Award className="w-3.5 h-3.5 text-cyan-400" />
                        )}
                        <span>{currentMedia.category}</span>
                      </span>

                      {currentMedia.badge && (
                        <span className="hidden sm:inline-flex px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950/80 border border-cyan-800 text-cyan-300">
                          {currentMedia.badge}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 pointer-events-auto">
                      <button
                        type="button"
                        onClick={() => setLightboxMedia(currentMedia)}
                        title="View Fullscreen"
                        className="p-1.5 rounded-md bg-black/75 hover:bg-slate-900 text-slate-300 hover:text-white border border-slate-700 backdrop-blur transition-colors cursor-pointer"
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Navigation Arrows for Stage */}
                  {proofFiles.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={prevMedia}
                        aria-label="Previous proof file"
                        className="absolute left-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 hover:bg-cyan-950 text-white border border-slate-700 hover:border-cyan-500/60 backdrop-blur transition-all cursor-pointer opacity-70 group-hover:opacity-100"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        type="button"
                        onClick={nextMedia}
                        aria-label="Next proof file"
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 hover:bg-cyan-950 text-white border border-slate-700 hover:border-cyan-500/60 backdrop-blur transition-all cursor-pointer opacity-70 group-hover:opacity-100"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}

                  {/* Bottom Counter Bar */}
                  <div className="absolute bottom-2 right-3 pointer-events-none">
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-black/80 backdrop-blur text-slate-300 border border-slate-800">
                      {activeMediaIndex + 1} / {proofFiles.length}
                    </span>
                  </div>
                </div>

                {/* Media Caption Strip */}
                <div className="px-4 py-2.5 bg-[#0b1120] border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-2 text-slate-200 font-medium">
                    <span className="text-cyan-400 font-mono">[{currentMedia.filename}]</span>
                    <span>{currentMedia.title}</span>
                  </div>
                  {currentMedia.fileSize && (
                    <span className="text-[11px] font-mono text-slate-400 shrink-0">
                      File Size: {currentMedia.fileSize}
                    </span>
                  )}
                </div>

                {/* Horizontal Quick-Select Ribbon */}
                <div className="px-3 py-2.5 bg-[#060a14] border-t border-slate-800/80 overflow-x-auto flex items-center gap-2 scrollbar-thin">
                  {proofFiles.map((item, idx) => {
                    const isActive = idx === activeMediaIndex;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setActiveMediaIndex(idx)}
                        className={`relative flex items-center gap-2 p-1.5 rounded-lg border text-left shrink-0 transition-all cursor-pointer ${
                          isActive
                            ? 'bg-cyan-950/60 border-cyan-400 text-white ring-1 ring-cyan-400/50 shadow-[0_0_12px_rgba(34,211,238,0.25)]'
                            : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                        }`}
                      >
                        <div className="w-12 h-8 rounded bg-slate-950 overflow-hidden shrink-0 relative flex items-center justify-center border border-slate-800">
                          {item.type === 'video' ? (
                            <>
                              <video
                                src={item.url}
                                className="w-full h-full object-cover"
                                preload="metadata"
                              />
                              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                <Play className="w-3 h-3 text-cyan-300 fill-cyan-300" />
                              </div>
                            </>
                          ) : (
                            <img
                              src={item.url}
                              alt={item.title}
                              className="w-full h-full object-cover"
                            />
                          )}
                        </div>
                        <div className="pr-1 text-[11px] max-w-[130px]">
                          <p className="truncate font-medium text-slate-200">
                            {idx + 1}. {item.title}
                          </p>
                          <p className="text-[10px] text-slate-500 font-mono uppercase">
                            {item.type} {item.fileSize ? `· ${item.fileSize}` : ''}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </>
            ) : (
              <div className="relative aspect-video w-full bg-slate-900 overflow-hidden border-b border-slate-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#080d19] via-transparent to-transparent h-20" />
              </div>
            )}
          </div>

          {/* Content Body */}
          <div className="p-5 sm:p-8 space-y-6">
            {/* Title & Subtitle */}
            <div>
              <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {project.title}
              </h2>
              <p className="text-sm font-medium text-cyan-400 mt-1">
                {project.subtitle}
              </p>
            </div>

            {/* Metadata bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
              <div>
                <span className="text-slate-500 block text-[11px] uppercase font-mono">My Role</span>
                <span className="font-semibold text-slate-200">{project.role}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[11px] uppercase font-mono">Status</span>
                <span className="font-semibold text-cyan-300">{project.status}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[11px] uppercase font-mono">Timeline</span>
                <span className="font-semibold text-slate-200">{project.timeline}</span>
              </div>
            </div>

            {/* Verified Proof & Client Demonstration Gallery */}
            {hasProofFiles && (
              <div className="p-5 rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#070b16] border border-cyan-500/30 shadow-lg space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-1">
                      <ShieldCheck className="w-4 h-4 text-cyan-400" />
                      <span>Verified Client Proof & Documentation Files</span>
                    </div>
                    <p className="text-xs text-slate-400">
                      Authentic capstone presentation award certificates and prototype demonstration recordings.
                    </p>
                  </div>

                  {/* Filter Pills */}
                  <div className="flex flex-wrap gap-1 p-1 bg-slate-950 border border-slate-800 rounded-lg shrink-0">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setActiveCategoryFilter(cat)}
                        className={`px-2.5 py-1 text-[11px] font-medium rounded transition-colors cursor-pointer ${
                          activeCategoryFilter === cat
                            ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Grid of Proof Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
                  {filteredProofFiles.map((file, idx) => {
                    const isSelected = proofFiles.findIndex((p) => p.id === file.id) === activeMediaIndex;
                    return (
                      <div
                        key={file.id}
                        className={`flex flex-col justify-between p-3.5 rounded-xl border transition-all ${
                          isSelected
                            ? 'bg-cyan-950/30 border-cyan-500/70 shadow-[0_0_15px_rgba(34,211,238,0.15)]'
                            : 'bg-slate-950/60 border-slate-800/90 hover:border-slate-700'
                        }`}
                      >
                        <div className="space-y-2.5">
                          {/* File Preview Container */}
                          <div
                            className="relative aspect-video w-full rounded-lg bg-black overflow-hidden border border-slate-800 cursor-pointer group"
                            onClick={() => {
                              const origIdx = proofFiles.findIndex((p) => p.id === file.id);
                              if (origIdx !== -1) setActiveMediaIndex(origIdx);
                              setLightboxMedia(file);
                            }}
                          >
                            {file.type === 'video' ? (
                              <>
                                <video
                                  src={file.url}
                                  className="w-full h-full object-cover"
                                  preload="metadata"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                  <div className="w-10 h-10 rounded-full bg-cyan-500/90 text-slate-950 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                                    <Play className="w-5 h-5 fill-slate-950 ml-0.5" />
                                  </div>
                                </div>
                              </>
                            ) : (
                              <>
                                <img
                                  src={file.url}
                                  alt={file.title}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                  <span className="px-2.5 py-1 rounded bg-black/80 text-cyan-300 text-[11px] font-mono border border-cyan-500/40 backdrop-blur">
                                    Inspect Photo
                                  </span>
                                </div>
                              </>
                            )}

                            {/* Top badge on thumbnail */}
                            <div className="absolute top-2 left-2">
                              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-black/80 backdrop-blur text-cyan-300 border border-slate-700">
                                {file.category}
                              </span>
                            </div>

                            {/* File size indicator */}
                            {file.fileSize && (
                              <div className="absolute bottom-2 right-2">
                                <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-black/85 text-slate-300 border border-slate-800">
                                  {file.fileSize}
                                </span>
                              </div>
                            )}
                          </div>

                          {/* File Description */}
                          <div>
                            <div className="text-[11px] font-mono text-cyan-400 mb-0.5">
                              {file.filename}
                            </div>
                            <h4 className="text-sm font-semibold text-white leading-snug">
                              {file.title}
                            </h4>
                            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                              {file.caption}
                            </p>
                          </div>
                        </div>

                        {/* Card Actions */}
                        <div className="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              const origIdx = proofFiles.findIndex((p) => p.id === file.id);
                              if (origIdx !== -1) setActiveMediaIndex(origIdx);
                            }}
                            className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                              isSelected
                                ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                                : 'text-slate-400 hover:text-white hover:bg-slate-900'
                            }`}
                          >
                            {isSelected ? '✓ Loaded in Stage' : 'Load in Stage'}
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              const origIdx = proofFiles.findIndex((p) => p.id === file.id);
                              if (origIdx !== -1) setActiveMediaIndex(origIdx);
                              setLightboxMedia(file);
                            }}
                            className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold text-cyan-300 bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-700/60 rounded-md transition-colors cursor-pointer"
                          >
                            {file.type === 'video' ? (
                              <>
                                <Play className="w-3.5 h-3.5 fill-cyan-300" />
                                <span>Play Video</span>
                              </>
                            ) : (
                              <>
                                <ZoomIn className="w-3.5 h-3.5" />
                                <span>Inspect Fullscreen</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* System Overview & Objective */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                System Overview & Objective
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* Problem Solved */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Problem Addressed
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed bg-slate-900/40 p-3.5 rounded-lg border border-slate-800/80">
                {project.problemSolved}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                Key Features & Capabilities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.keyFeatures.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Highlights */}
            {project.architectureHighlights && project.architectureHighlights.length > 0 && (
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Architecture & Implementation Notes
                </h3>
                <ul className="space-y-2">
                  {project.architectureHighlights.map((note, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Technologies & Tools Used
              </h3>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-cyan-300 bg-slate-900/50 p-3 rounded-lg border border-slate-800">
                {project.techStack.map((tech, i) => (
                  <React.Fragment key={tech}>
                    <span className="font-medium">{tech}</span>
                    {i < project.techStack.length - 1 && (
                      <span aria-hidden="true" className="text-slate-600">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* External Links */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-3">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/60 rounded-lg transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>View GitHub Repository</span>
                </a>
              ) : (
                <span className="text-xs text-slate-500 italic">
                  Source code private / available upon request
                </span>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors shadow-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open Live Application</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen High-Resolution Lightbox Modal */}
      {lightboxMedia && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[60] flex flex-col justify-between bg-black/95 backdrop-blur-xl p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setLightboxMedia(null)}
        >
          {/* Lightbox Header */}
          <div
            className="flex items-center justify-between px-4 py-2 text-white border-b border-slate-800/80 bg-slate-950/80 rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="px-2 py-0.5 rounded text-xs font-mono bg-cyan-950 border border-cyan-700 text-cyan-300">
                {lightboxMedia.category}
              </span>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white">
                  {lightboxMedia.title}
                </h3>
                <p className="text-[11px] font-mono text-slate-400">
                  {lightboxMedia.filename} {lightboxMedia.fileSize ? `· ${lightboxMedia.fileSize}` : ''}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setLightboxMedia(null)}
              aria-label="Close fullscreen view"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Media Viewport */}
          <div
            className="relative flex-1 flex items-center justify-center p-2 sm:p-6 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {lightboxMedia.type === 'video' ? (
              <video
                src={lightboxMedia.url}
                controls
                autoPlay
                playsInline
                className="max-w-full max-h-[75vh] rounded-xl shadow-2xl border border-slate-800 bg-black"
              />
            ) : (
              <div className="max-w-full max-h-[75vh] overflow-auto flex items-center justify-center">
                <img
                  src={lightboxMedia.url}
                  alt={lightboxMedia.title}
                  className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl border border-slate-800"
                />
              </div>
            )}
          </div>

          {/* Lightbox Footer Caption */}
          <div
            className="max-w-3xl mx-auto w-full p-4 bg-slate-950/90 border border-slate-800 rounded-xl text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {lightboxMedia.caption}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
