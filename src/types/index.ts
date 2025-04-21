export interface User {
  id: string;
  name: string;
  walletAddress: string;
  avatar?: string;
  skills: Skill[];
  experienceLevel: ExperienceLevel;
  previousHackathons: number;
  currentHackathons: string[];
  timezone: string;
  location?: string;
  githubUrl?: string;
  portfolioUrl?: string;
  preferredRoles: string[];
  languages: string[];
  bio?: string;
  availability: AvailabilityStatus;
  created: Date;
}

export type AvailabilityStatus = 'available' | 'busy' | 'looking' | 'inactive';

export type ExperienceLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';

export interface Skill {
  name: string;
  category: SkillCategory;
  level: number; // 1-5
}

export type SkillCategory = 
  | 'frontend' 
  | 'backend' 
  | 'blockchain' 
  | 'design' 
  | 'mobile' 
  | 'ai' 
  | 'devops'
  | 'pm'
  | 'other';

export interface Hackathon {
  id: string;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  location?: string;
  isVirtual: boolean;
  url: string;
  prizes: string[];
  tracks: string[];
  sponsors: string[];
  registrationDeadline: Date;
  image?: string;
}

export interface Team {
  id: string;
  name: string;
  hackathonId: string;
  members: TeamMember[];
  skillsNeeded: Skill[];
  description: string;
  created: Date;
}

export interface TeamMember {
  userId: string;
  role: string;
  isLeader: boolean;
  joinedAt: Date;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: Date;
  isRead: boolean;
}

export interface TeamRequest {
  id: string;
  teamId: string;
  userId: string;
  message: string;
  status: 'pending' | 'accepted' | 'rejected';
  created: Date;
}

export interface CompatibilityScore {
  userId: string;
  score: number;
  matchingSkills: string[];
  complementarySkills: string[];
  sameTimezone: boolean;
}