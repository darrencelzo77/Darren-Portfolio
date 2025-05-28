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
    technologies: ["React Vite", "Strapi v5", "AWS", "Third Party KYC"],
    liveUrl: "https://aurum.financial"
  },
  {
    id: 2,
    title: "Cryptop2p (Trading Platform)",
    description: "CryptoP2P.ph is the next-generation platform for fast, secure, and borderless peer-to-peer crypto transactions in the Philippines.",
    category: "web",
    imageUrl: "/cryptop2p.png",
    technologies: ["React JS", "Tailwind", "Node js"],
    liveUrl: "https://cryptop2p.ph"
  },
  {
    id: 3,
    title: "Tourista App",
    description: "CryptoP2P.ph is the next-generation platform for fast, secure, and borderless peer-to-peer crypto transactions in the Philippines.",
    category: "web",
    imageUrl: "/tourista.png",
    technologies: ["React JS", "Tailwind", "Python [FastAPI]"],
    liveUrl: "https://cryptop2p.ph"
  },
  {
    id: 4,
    title: "G-Star Carwash",
    description: "G-Star Carwash is a robust custom system developed for a business client. It integrates inventory management, HR, and information system functionalities.",
    category: "web",
    imageUrl: "/gstar.png", // Replace with actual image path
    technologies: ["PHP", "JavaScript", "jQuery", "AJAX", "Bootstrap", "CSS", "PusherJS"],
    // liveUrl: "" // Verify if this is the correct URL
  }

  // {
  //   id: 2,
  //   title: "Servicio Mobile",
  //   description: "Servicio App is the ultimate marketplace on-demand service app designed to connect you with trusted skilled professionals for all your needs. From home repairs and cleaning to car services and beauty care, Servicio App brings a variety of skilled service providers right to your fingertips.",
  //   category: "mobile",
  //   imageUrl: "https://play-lh.googleusercontent.com/xnR_SN5p9IzRIEZXUIBLqNTzjwIUZw05gaqo6NLjPJSj7-J9FIuZ42m0djz-M3xb1a4=w2560-h1440-rw",
  //   technologies: ["Flutter"],
  //   liveUrl: "https://play.google.com/store/apps/details?id=com.client.service&hl=en"
  // },
  // {
  //   id: 3,
  //   title: "Aurum Platform (Trading platform)",
  //   description: "Swap your Quantum Metal Gold Tokens (QMGT) for USDT easily and securely, ensuring transparency, stability, and liquidity in your holdings with each transaction.",
  //   category: "web",
  //   imageUrl: "https://aurumnetwork.io/wp-content/uploads/2024/11/aurum-tile-bg-1.png",
  //   technologies: ["React js", "Strapi v5", "AWS", "Third Party KYC"],
  //   liveUrl: "https://aurum.financial"
  // },
  // {
  //   id: 4,
  //   title: "Aurum Platform (Trading platform)",
  //   description: "CryptoP2P.ph is the next-generation platform for fast, secure, and borderless peer-to-peer crypto transactions in the Philippines.",
  //   category: "web",
  //   imageUrl: "/cryptop2p.png",
  //   technologies: ["React JS", "tailwind", "Node js"],
  //   liveUrl: "https://cryptop2p.ph"
  // },
  // {
  //   id: 3,
  //   title: "Banking Dashboard UI",
  //   description: "Modern UI design for a banking application dashboard with data visualization.",
  //   category: "design",
  //   imageUrl: "https://images.pexels.com/photos/7149165/pexels-photo-7149165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   technologies: ["Figma", "Adobe XD", "Illustrator"],
  //   liveUrl: "https://example.com"
  // },
  // {
  //   id: 4,
  //   title: "Real Estate Platform",
  //   description: "Web application for real estate listings with advanced filtering and map integration.",
  //   category: "web",
  //   imageUrl: "https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   technologies: ["Next.js", "Tailwind CSS", "Google Maps API", "PostgreSQL"],
  //   githubUrl: "https://github.com",
  //   liveUrl: "https://example.com"
  // },
  // {
  //   id: 5,
  //   title: "Travel Companion App",
  //   description: "Mobile app for travelers to plan itineraries, find attractions, and track expenses.",
  //   category: "mobile",
  //   imageUrl: "https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   technologies: ["Flutter", "Firebase", "Google Places API"],
  //   githubUrl: "https://github.com",
  //   liveUrl: "https://example.com"
  // },
  // {
  //   id: 6,
  //   title: "Restaurant Booking System",
  //   description: "UI/UX design for a restaurant reservation system with table management.",
  //   category: "design",
  //   imageUrl: "https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   technologies: ["Figma", "Sketch", "Principle"],
  //   liveUrl: "https://example.com"
  // }
];