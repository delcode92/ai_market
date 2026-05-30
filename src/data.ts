import { AIModel, VersionLog, ReviewDistribution } from "./types";

export const MODELS_DATA: AIModel[] = [
  {
    id: "neural-edge",
    name: "NeuralEdge v4.2",
    tagline: "Ultra-low latency inference for client apps",
    description: "Extreme low-latency LLM optimized for edge devices and React 19 concurrent rendering.",
    type: "LLM",
    frameworks: ["React 19", "LLM", "PyTorch"],
    latency: 42,
    cwvScore: 98,
    price: "$0.0012",
    priceUnit: "/1k tokens",
    numericPrice: 0.0012,
    isVerified: true,
    avatarIcon: "brain",
    downloads: 5410,
    rating: 4.9,
    salesCount: "5k+ active deployments"
  },
  {
    id: "vision-forge",
    name: "VisionForge OCR",
    tagline: "Highly resilient local character modeling",
    description: "Real-time text extraction with 99.9% accuracy on skewed or low-light images.",
    type: "Computer Vision",
    frameworks: ["Vision", "WASM", "Next.js 15"],
    latency: 88,
    cwvScore: 92,
    memoryUsage: "14MB",
    price: "$29",
    priceUnit: "/mo seat",
    numericPrice: 29.0,
    auditPassed: true,
    avatarIcon: "eye",
    downloads: 1240,
    rating: 4.8
  },
  {
    id: "lexi-stream",
    name: "Lexi-Stream 8B",
    tagline: "Quantized browser-optimized text model",
    description: "Quantized transformer for streaming text generation in browser-based IDEs.",
    type: "LLM",
    frameworks: ["Transformers", "ONNX"],
    latency: 110,
    cwvScore: 94,
    throughput: 120, // 120 t/s
    memoryUsage: "4.2 GB",
    price: "Free",
    priceUnit: " (Open Source)",
    numericPrice: 0.0,
    avatarIcon: "cpu",
    creators: [
      { name: "Sarah Connor", avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbFP-DEKdlhyvxWlxiIubC9vf_FJo5ai3COXuA395Q2hFYlUhWas7cW0c1oAJXjgjGp6iNteZvSFBqkNVihE55ieWH-rFXfXbaQlpWpgOOUA3uLUQZKezhlJEfBa8oKNVFACOSf8CzYxPXkO_qieKNXyC2t0PYBk6xD12Oz_YrMzwuKCGDu4HfUix50yqUbOIFUHHFpXkG4xpQsz3L_wbczKTAv9OylCnCewkm_7IS91mknJuKTOT5cHA7AKZTDqLNAzVBQWCeNeY" },
      { name: "John Doe", avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlxHQlFBqLsJ2qftS1aH7Z1daiS7ILevgnQkL2w1QDq626Gw25OUCaSWiq_b58m7tSvuch78VPrkXbp6B-wT5mYLWB_URN63fXxU6cSF32aGOhArlRYmqANpogBalOH30QgRh_J9szxsAHteVq4XA8HvRVqRl_8Xzm213-NgLEJEhrFjt3D6tpQItHqK8JT0AxmEr1mvm6nbBrQQyHLicAGtNjsmUP36OaBg87yEGOsSqWAz4LBxlmvpHE6Ld02C9FFNQzni90uHc" }
    ],
    downloads: 8720,
    rating: 4.7
  },
  {
    id: "pixel-perfect",
    name: "PixelPerfect Gen-3",
    tagline: "Professional diffusion upscaler",
    description: "Professional image upscaling and restoration with zero artifacting in high res.",
    type: "Computer Vision",
    frameworks: ["Diffusion", "React 19"],
    latency: 180,
    cwvScore: 96,
    scale: "Up to 16x",
    gpuUsage: "Low-Med",
    price: "$0.05",
    priceUnit: "/image",
    numericPrice: 0.05,
    isSOTA: true,
    avatarIcon: "sparkles",
    downloads: 4120,
    rating: 4.9
  },
  {
    id: "translat-x",
    name: "Translat-X Global",
    tagline: "Semantic preserving rapid translations",
    description: "Real-time translation for 120+ languages with high semantic preservation.",
    type: "Computer Vision", // categorized as such to match filter defaults
    frameworks: ["WASM", "Next.js 15"],
    latency: 150,
    cwvScore: 91,
    bleuScore: 48.2,
    price: "$0.005",
    priceUnit: "/char",
    numericPrice: 0.005,
    avatarIcon: "globe",
    downloads: 6200,
    rating: 4.6
  },
  {
    id: "signal-denoise",
    name: "SignalDenoise Pro",
    tagline: "Intelligent audio clean-up",
    description: "Advanced noise cancellation for VoIP and streaming applications.",
    type: "Audio Diffusion",
    frameworks: ["PCM Audio", "WebAssembly"],
    latency: 5,
    cwvScore: 95,
    inputFormat: "PCM Audio",
    price: "$12",
    priceUnit: "/instance",
    numericPrice: 12.00,
    avatarIcon: "radio",
    downloads: 1810,
    rating: 4.8
  }
];

export const VERSION_HISTORY: VersionLog[] = [
  {
    version: "v2.0.4",
    date: "Oct 24, 2026",
    description: "Introduced Long-Context Window (128k tokens) and multi-currency sales analysis with enterprise security guarantees.",
    isLatest: true,
    iconName: "star"
  },
  {
    version: "v2.0.1",
    date: "Sep 12, 2026",
    description: "Hotfix for Salesforce OAuth integration, webhook handlers, and high-frequency API latency improvements.",
    iconName: "history"
  },
  {
    version: "v1.8.0",
    date: "July 05, 2026",
    description: "Initial production release for Q3-Q4 enterprise pipeline partners and customer journey managers.",
    iconName: "rocket"
  }
];

export const REVIEWS_DISTRIBUTION: ReviewDistribution[] = [
  { stars: 5, percentage: 90 },
  { stars: 4, percentage: 8 },
  { stars: 3, percentage: 1 },
  { stars: 2, percentage: 1 }
];

export const REVENUE_GROWTH_DATA = [
  { day: "Mon", revenue: 40 },
  { day: "Tue", revenue: 55 },
  { day: "Wed", revenue: 45 },
  { day: "Thu", revenue: 70 },
  { day: "Fri", revenue: 60 },
  { day: "Sat", revenue: 85 },
  { day: "Sun", revenue: 95 }
];
