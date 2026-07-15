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

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  quote: string;
  initials: string;
  accentColor: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface Landmark {
  title: string;
  english: string;
  description: string;
  color: string;
}
