import React from "react";
import {
  Brain,
  Eye,
  Cpu,
  Sparkles,
  Globe,
  Radio,
  Star,
  History,
  Rocket,
  ChevronRight,
  Share2,
  Heart,
  Terminal,
  Activity,
  Zap,
  CheckCircle,
  TrendingUp,
  LineChart,
  UserCheck,
  ChevronDown,
  Filter,
  ArrowUpDown,
  Bell,
  Search,
  Plus,
  Compass,
  Briefcase,
  HelpCircle,
  FileText,
  DollarSign,
  Layers,
  ArrowRight,
  ShieldCheck,
  ListFilter,
  ShoppingCart,
  Menu,
  X
} from "lucide-react";

interface AdaptiveIconProps {
  name: string;
  className?: string;
  size?: number;
  key?: React.Key;
}

export default function AdaptiveIcon({ name, className = "", size = 18 }: AdaptiveIconProps) {
  switch (name.toLowerCase()) {
    case "brain":
      return <Brain className={className} size={size} />;
    case "eye":
      return <Eye className={className} size={size} />;
    case "cpu":
      return <Cpu className={className} size={size} />;
    case "sparkles":
      return <Sparkles className={className} size={size} />;
    case "globe":
      return <Globe className={className} size={size} />;
    case "radio":
      return <Radio className={className} size={size} />;
    case "star":
      return <Star className={className} size={size} />;
    case "history":
      return <History className={className} size={size} />;
    case "rocket":
      return <Rocket className={className} size={size} />;
    case "chevron_right":
      return <ChevronRight className={className} size={size} />;
    case "share":
      return <Share2 className={className} size={size} />;
    case "favorite":
    case "heart":
      return <Heart className={className} size={size} />;
    case "terminal":
      return <Terminal className={className} size={size} />;
    case "activity":
      return <Activity className={className} size={size} />;
    case "zap":
      return <Zap className={className} size={size} />;
    case "check":
    case "check_circle":
      return <CheckCircle className={className} size={size} />;
    case "trending_up":
      return <TrendingUp className={className} size={size} />;
    case "analytics":
    case "linechart":
      return <LineChart className={className} size={size} />;
    case "usercheck":
      return <UserCheck className={className} size={size} />;
    case "chevron_down":
      return <ChevronDown className={className} size={size} />;
    case "filter":
      return <Filter className={className} size={size} />;
    case "sort":
    case "arrowupdown":
      return <ArrowUpDown className={className} size={size} />;
    case "bell":
      return <Bell className={className} size={size} />;
    case "search":
      return <Search className={className} size={size} />;
    case "plus":
    case "add":
      return <Plus className={className} size={size} />;
    case "compass":
      return <Compass className={className} size={size} />;
    case "briefcase":
      return <Briefcase className={className} size={size} />;
    case "help":
    case "helpcircle":
      return <HelpCircle className={className} size={size} />;
    case "filetext":
    case "description":
      return <FileText className={className} size={size} />;
    case "dollarsign":
    case "payments":
      return <DollarSign className={className} size={size} />;
    case "layers":
    case "dashboard":
      return <Layers className={className} size={size} />;
    case "arrow_forward":
    case "arrowright":
      return <ArrowRight className={className} size={size} />;
    case "shield":
    case "shieldcheck":
      return <ShieldCheck className={className} size={size} />;
    case "listfilter":
      return <ListFilter className={className} size={size} />;
    case "shopping_cart":
      return <ShoppingCart className={className} size={size} />;
    case "menu":
      return <Menu className={className} size={size} />;
    case "close":
    case "x":
      return <X className={className} size={size} />;
    default:
      return <Sparkles className={className} size={size} />;
  }
}
