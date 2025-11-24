import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface CaptureOption {
  title: string;
  description: string;
  image: string;
  features: string[];
  fallback?: string;
}

export interface PricingTier {
  name: string;
  description: string;
  priceLabel: string; // Since actual prices aren't in PDF, we use labels like "Contact for Quote" or descriptive text
  features: string[];
  highlight?: boolean;
}

export interface Industry {
  name: string;
  description: string;
  icon: LucideIcon;
}