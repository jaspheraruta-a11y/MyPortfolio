import React, { useState } from 'react';
import { ArrowUpRight, Github, Info, Cpu, Layers, ShieldCheck } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterOptions: ProjectCategory[] = ['All', 'Full-Stack', 'IoT & Embedded', 'Systems & Concepts'];

  const filteredProjects =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'Completed Prototype':
        return 'text-emerald-400 border-emerald-500/30 bg-emerald-950/40';
      case 'In Progress':
        return 'text-sky-300 border-sky-500/30 bg-sky-950/40';
      case 'Concept':
        return 'text-amber-300 border-amber-500/30 bg-amber-950/40';
      case 'Hardware Prototype':
        return 'text-cyan-300 border-cyan-500/30 bg-cyan-950/40';
      default:
        return 'text-slate-300 border-slate-700 bg-slate-800';
    }
  };

  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#060a15] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Category Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono text-cyan-400 tracking-wider mb-2">
              PORTFOLIO & IMPLEMENTATIONS
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-xl">
              Authentic projects across full-stack web platforms and hardware-level IoT sensing. Each card presents real implementation status.
            </p>
          </div>

          {/* Interactive Filter Control */}
          <div className="flex flex-wrap gap-1 p-1 bg-slate-900/90 border border-slate-800 rounded-lg">
            {filterOptions.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-cyan-500/20 text-cyan-300 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col bg-[#090e1a] border border-slate-800/90 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 shadow-xl hover:shadow-[0_0_25px_-5px_rgba(56,189,248,0.2)]"
            >
              {/* Project Preview Image */}
              <div className="relative aspect-video w-full bg-slate-900 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                
                {/* Fallback container if image fails to load */}
                <div className="absolute inset-0 bg-slate-900 flex flex-col items-center justify-center p-4 text-center pointer-events-none -z-10">
                  <Cpu className="w-8 h-8 text-cyan-500/40 mb-2" />
                  <span className="text-xs text-slate-400 font-medium">{project.title}</span>
                </div>

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#090e1a] via-[#090e1a]/40 to-transparent h-16" />

                {/* Proof Badge if media files exist */}
                {project.proofMedia && project.proofMedia.length > 0 && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium text-cyan-300 bg-black/85 backdrop-blur border border-cyan-500/40 shadow-sm">
                      <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{project.proofMedia.length} Proof Files</span>
                    </span>
                  </div>
                )}

                {/* Status indicator (Unboxed text with subtle border container) */}
                <div className="absolute top-3 right-3">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded text-[11px] font-mono font-medium border ${getStatusColor(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  {/* Category unboxed metadata with bullet */}
                  <div className="text-[11px] font-mono text-cyan-400/90 tracking-wide mb-1.5 flex items-center gap-1.5">
                    <span>{project.category}</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="text-slate-400">{project.role}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs font-medium text-slate-400 mt-0.5 mb-2.5">
                    {project.subtitle}
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Stack: Clean Unboxed Text with Separators */}
                  <div className="pt-3 border-t border-slate-800/80 mb-4">
                    <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[11px] font-mono text-slate-400">
                      {project.techStack.map((tech, i) => (
                        <React.Fragment key={tech}>
                          <span className="text-slate-300">{tech}</span>
                          {i < project.techStack.length - 1 && (
                            <span aria-hidden="true" className="text-slate-600">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Actions: View Details + External Link */}
                  <div className="flex items-center justify-between gap-3 pt-1">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-800/50 rounded-lg transition-colors cursor-pointer"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>View Details</span>
                    </button>

                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
                        title="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    ) : (
                      <span className="text-[11px] text-slate-500 font-mono">Verified Specs</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
