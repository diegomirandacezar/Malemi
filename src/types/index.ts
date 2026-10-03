export type SolutionTier = 'Essencial' | 'Profissional' | 'Premium';

export interface PlanFeature {
  title: string;
  included: boolean;
}

export interface SolutionPlan {
  id: SolutionTier;
  name: string;
  badge?: string;
  shortDescription: string;
  features: string[];
  recommended?: boolean;
}

export interface SolutionItem {
  id: 'sites' | 'bi' | 'automacao-ia';
  name: string;
  tagline: string;
  description: string;
  problemSolved: string;
  highlightFeatures: string[];
  plans: SolutionPlan[];
  icon: 'globe' | 'bar-chart' | 'cpu';
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  deliverable: string;
}

export interface DifferentialItem {
  title: string;
  description: string;
  icon: 'shield-check' | 'target' | 'layers' | 'code-bracket';
}

export interface NavLink {
  label: string;
  href: string;
}
