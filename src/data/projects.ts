export type ProjectCategory = 'platform' | 'backend' | 'infra';

export interface Project {
  id: number;
  title: string;
  description: string;
  category: ProjectCategory;
  imageUrl: string;
  technologies: string[];
  role: string;
  impact: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Aurum Platform (Trading Platform)',
    description: 'Built a secure trading flow for swapping Quantum Metal Gold Tokens (QMGT) to USDT with compliance-aware user journeys.',
    category: 'platform',
    imageUrl: "/AUP.png",
    technologies: ['React', 'Node.js', 'KYC Integration', 'Secure APIs'],
    role: 'Fullstack Developer (Backend-led)',
    impact: 'Improved transaction confidence through transparent and secure trading flows.',
    liveUrl: 'https://aurumplatform.io/'
  },
  {
    id: 3,
    title: 'Tourista App',
    description: 'Developed key booking and service modules for a vehicle rental platform with a maintainable backend structure.',
    category: 'backend',
    imageUrl: '/tourista.png',
    technologies: ['React + Vite', 'Tailwind', 'Python', 'REST APIs'],
    role: 'Backend Engineer / Integrations',
    impact: 'Enabled reliable booking workflows and cleaner service orchestration.',
  },
  {
    id: 4,
    title: 'G-Star Carwash',
    description: 'Delivered a custom business management system integrating inventory, HR, and operations into a single workflow.',
    category: 'backend',
    imageUrl: '/gstar.png',
    technologies: ['PHP', 'JavaScript', 'AJAX', 'Bootstrap', 'MySQL'],
    role: 'Fullstack Developer',
    impact: 'Centralized operations and reduced manual overhead in day-to-day business processes.',
  },
  {
    id: 5,
    title: 'ERP System',
    description: 'Engineered a modular ERP setup covering HR, accounting, and transaction processing with cloud-backed data reliability.',
    category: 'infra',
    imageUrl: '/erp.jpg',
    technologies: ['PayloadCMS', 'React', 'Vite', 'PostgreSQL', 'Alibaba Cloud'],
    role: 'Backend & Infrastructure Engineer',
    impact: 'Improved operational visibility and data consistency across multiple core departments.',
  }
];