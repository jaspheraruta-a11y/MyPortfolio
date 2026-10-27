export type ProjectCategory = 'All' | 'Full-Stack' | 'IoT & Embedded' | 'Systems & Concepts';

export type ProjectStatus = 'Completed Prototype' | 'In Progress' | 'Concept' | 'Hardware Prototype';

export interface ProjectMediaItem {
  id: string;
  title: string;
  type: 'image' | 'video';
  url: string;
  category: 'Award & Certificate' | 'Live Demonstration' | 'Hardware Setup' | 'Proof of Work';
  caption: string;
  badge?: string;
  filename?: string;
  fileSize?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  status: ProjectStatus;
  description: string;
  longDescription: string;
  problemSolved: string;
  keyFeatures: string[];
  techStack: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  isFeatured: boolean;
  role: string;
  timeline: string;
  architectureHighlights?: string[];
  proofMedia?: ProjectMediaItem[];
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export interface WorkStep {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  category: 'Hackathon' | 'IoT Prototype' | 'Academic & Systems' | 'Custom Placeholder';
  organization: string;
  date: string;
  description: string;
  isPlaceholder?: boolean;
}

export interface SocialLinks {
  email: string;
  facebook: string;
  github: string;
  linkedin: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  headline: string;
  intro: string;
  aboutParagraphs: string[];
  location: string;
  availability: string;
  avatarUrl: string;
  socials: SocialLinks;
}
