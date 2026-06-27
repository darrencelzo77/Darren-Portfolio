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
    description: 'Secure trading flow for QMGT-to-USDT swaps with compliance-aware user journeys.',
    category: 'platform',
    imageUrl: "/AUP.png",
    technologies: ['React', 'Node.js', 'KYC Integration', 'Secure APIs'],
    role: 'Fullstack Developer (Backend-led)',
    impact: 'Strengthened transaction clarity and platform trust.',
    liveUrl: 'https://aurumplatform.io/'
  },
  {
    id: 3,
    title: 'Tourista App',
    description: 'Booking and service modules for a vehicle rental platform.',
    category: 'backend',
    imageUrl: '/tourista.png',
    technologies: ['React + Vite', 'Tailwind', 'Python', 'REST APIs'],
    role: 'Backend Engineer / Integrations',
    impact: 'Improved booking reliability and service orchestration.',
  },
  {
    id: 4,
    title: 'G-Star Carwash',
    description: 'Custom management system for inventory, HR, and operations.',
    category: 'backend',
    imageUrl: '/gstar.png',
    technologies: ['PHP', 'JavaScript', 'AJAX', 'Bootstrap', 'MySQL'],
    role: 'Fullstack Developer',
    impact: 'Centralized daily operations and reduced manual work.',
  },
  {
    id: 5,
    title: 'ERP System',
    description: 'Modular ERP for HR, accounting, and transaction processing.',
    category: 'infra',
    imageUrl: '/erp.jpg',
    technologies: ['PayloadCMS', 'React', 'Vite', 'PostgreSQL', 'Alibaba Cloud'],
    role: 'Backend & Infrastructure Engineer',
    impact: 'Improved visibility and data consistency across departments.',
  }
];
