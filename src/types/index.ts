export interface Blog {
  id: number;
  slug: string;
  title: string;
  category: string;
  image: string;
  date: string;
  readTime: number;
  description: string;
  content: string;
}

export type Lang = 'vi' | 'en';

export interface Localized {
  vi: string;
  en: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: Localized;
  quote: Localized;
  initials: string;
  accentColor: string;
  photo: string;
}

export interface FaqItem {
  id: number;
  question: Localized;
  answer: Localized;
}

export interface Landmark {
  viName: string;
  enName: string;
  description: Localized;
  color: string;
  photo?: string;
}
