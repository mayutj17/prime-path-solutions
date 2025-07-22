// types/service.ts

// Base interface for metadata
interface BaseEntity {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

// For SEO and metadata
export interface ServiceMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
}

// For service features
export interface ServiceFeature extends BaseEntity {
  title: string;
  description: string;
  icon?: string;
  order?: number;
}

// For technology stack
export interface Technology extends BaseEntity {
  name: string;
  description?: string;
  icon?: string;
  proficiencyLevel?: "basic" | "intermediate" | "advanced" | "expert";
  category?: "frontend" | "backend" | "database" | "devops" | "other";
}

// For development process phases
export interface ProcessPhase extends BaseEntity {
  title: string;
  description: string;
  duration?: string;
  deliverables?: string[];
  order: number;
}

// For pricing information
export interface PricingTier extends BaseEntity {
  name: string;
  price: number;
  currency?: string;
  billingPeriod?: "hourly" | "monthly" | "yearly" | "project";
  features: string[];
  isPopular?: boolean;
}

// For service benefits
export interface ServiceBenefit extends BaseEntity {
  title: string;
  description: string;
  icon?: string;
}

// For case studies or portfolio items
export interface PortfolioItem extends BaseEntity {
  title: string;
  description: string;
  image: string;
  clientName?: string;
  industry?: string;
  technologies?: Technology[];
  results?: string[];
  link?: string;
}

// Main service interface
export interface ServiceData extends BaseEntity {
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  meta?: ServiceMeta;
  category?: string;

  // Core service details
  features: ServiceFeature[];
  technologies: Technology[];
  processPhases: ProcessPhase[];
  benefits?: ServiceBenefit[];

  // Optional sections
  pricing?: PricingTier[];
  portfolioItems?: PortfolioItem[];
  faq?: Array<{
    question: string;
    answer: string;
  }>;

  // Additional metadata
  isActive?: boolean;
  estimatedDuration?: string;
  minimumBudget?: number;
  targetAudience?: string[];
}

// Props interface for the service component
export interface ServiceViewProps {
  service: ServiceData;
  onBack?: () => void;
  onContactClick?: () => void;
  onPriceClick?: (tier: PricingTier) => void;
  className?: string;
  showPricing?: boolean;
  showPortfolio?: boolean;
  showFAQ?: boolean;
}

// Theme configuration interface
export interface ServiceThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  accentColor?: string;
  fontFamily?: string;
  borderRadius?: string;
  buttonStyle?: "rounded" | "square" | "pill";
}

// Response types for API calls
export interface ServiceApiResponse {
  data: ServiceData;
  success: boolean;
  error?: string;
}

export interface ServicesListResponse {
  data: ServiceData[];
  totalCount: number;
  page: number;
  pageSize: number;
  success: boolean;
  error?: string;
}

// Filter and sort options
export interface ServiceFilterOptions {
  category?: string;
  priceRange?: {
    min: number;
    max: number;
  };
  technologies?: string[];
  duration?: string;
  searchQuery?: string;
}

export interface ServiceSortOptions {
  field: "title" | "price" | "duration" | "createdAt";
  order: "asc" | "desc";
}
