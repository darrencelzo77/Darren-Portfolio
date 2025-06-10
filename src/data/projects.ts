export type ProjectCategory = 'web' | 'mobile' | 'design';

export interface Project {
  id: number;
  title: string;
  description: string;
  category: ProjectCategory;
  imageUrl: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Aurum Platform (Trading Platform)",
    description: "Swap your Quantum Metal Gold Tokens (QMGT) for USDT easily and securely, ensuring transparency, stability, and liquidity in your holdings with each transaction.",
    category: "web",
    imageUrl: "/AUP.png",
    technologies: ["React JS", "NodeJS", "Third Party KYC"],
    liveUrl: "https://aurum.financial"
  },
  // {
  //   id: 2,
  //   title: "CryptoP2P (Trading Platform)",
  //   description: "CryptoP2P.ph is the next-generation platform for fast, secure, and borderless peer-to-peer crypto transactions in the Philippines.",
  //   category: "web",
  //   imageUrl: "/cryptop2p.png",
  //   technologies: ["React Vite", "Tailwind", "NodeJS"],
  //   liveUrl: "https://cryptop2p.ph"
  // },
  // {
  //   id: 3,
  //   title: "Tourista App",
  //   description: "Tourista is a modern, intuitive vehicle rental platform that connects travelers with a wide selection of cars and vans for hassle-free bookings.",
  //   category: "web",
  //   imageUrl: "/tourista.png",
  //   technologies: ["React Vite", "Tailwind", "Python"],
  //   // liveUrl: "https://cryptop2p.ph"
  // },
  {
    id: 4,
    title: "G-Star Carwash",
    description: "G-Star Carwash is a robust custom system developed for a business client. It integrates inventory management, HR, and information system functionalities.",
    category: "web",
    imageUrl: "/gstar.png", // Replace with actual image path
    technologies: ["PHP", "JavaScript", "AJAX", "Bootstrap", "PusherJS"],
    // liveUrl: "" // Verify if this is the correct URL
  }


];