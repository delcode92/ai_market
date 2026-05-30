export type PageState = "landing" | "browse" | "detail" | "dashboard";

export interface AIModel {
  id: string;
  name: string;
  tagline: string;
  description: string;
  type: "LLM" | "Computer Vision" | "Audio Diffusion";
  frameworks: string[];
  latency: number; // in ms
  cwvScore: number; // out of 100
  throughput?: number; // e.g. token/sec
  memoryUsage?: string; // e.g. 4.2 GB
  scale?: string; // e.g., Up to 16x
  gpuUsage?: string; // e.g., Low-Med
  bleuScore?: number;
  inputFormat?: string; // e.g., PCM Audio
  price: string; // display string
  priceUnit: string; // e.g., "/1k tokens", "/mo seat", etc.
  numericPrice: number;
  isVerified?: boolean;
  auditPassed?: boolean;
  isSOTA?: boolean;
  avatarIcon: string; // icon name from lucide
  downloads: number;
  rating: number;
  salesCount?: string;
  creators?: { name: string; avatarUrl: string }[];
}

export interface VersionLog {
  version: string;
  date: string;
  description: string;
  isLatest?: boolean;
  iconName: string;
}

export interface ReviewDistribution {
  stars: number;
  percentage: number;
}
