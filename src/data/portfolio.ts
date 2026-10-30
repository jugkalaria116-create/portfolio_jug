export interface Project {
  id: "notestation" | "predictor" | "basket";
  num: string; name: string; category: string; description: string; tech: string[];
  goal: string; features: string[]; learned: string;
  github?: string; live?: string; // add real URLs here
}
export const profile = {
  name: "Jug Kalaria", email: "jugkalaria116@gmail.com", phone: "+91 8320150140", tel: "+918320150140",
  status: "EXPLORING NEW IDEAS", // or "AVAILABLE FOR CREATIVE PROJECTS"
  socials: { github: "", linkedin: "" }, // add real profile URLs to activate footer links
};
export const nav = [
  { label: "Home", href: "#home" }, { label: "About", href: "#about" },
  { label: "Services", href: "#services" }, { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
export const marqueeWords = ["CREATIVE DEVELOPMENT", "FULL-STACK ENGINEERING", "INTERACTIVE DESIGN", "DIGITAL EXPERIENCES"];
export const details = [
  ["NAME", "Jug Kalaria"], ["EDUCATION", "BCA Graduate · MCA Student"], ["UNIVERSITY", "GLS University"],
  ["EXPECTED GRADUATION", "2028"], ["INTERESTS", "Development · Design · Data · AI"],
];
export const services = [
  { n: "01", title: "Frontend Development", icon: "code", desc: "Building responsive, interactive interfaces that combine clean design, accessibility, and smooth user experiences.", tech: ["React.js", "JavaScript", "TypeScript", "HTML", "CSS"] },
  { n: "02", title: "Full-Stack Development", icon: "server", desc: "Developing web applications that connect intuitive frontend experiences with functional backend systems and databases.", tech: ["React.js", "Node.js", "PHP", "MySQL", "MongoDB"] },
  { n: "03", title: "Creative Web Experiences", icon: "sparkles", desc: "Exploring motion, visual storytelling, interactive layouts, and experimental web design to make digital products more engaging.", tech: ["Framer Motion", "Three.js", "React Three Fiber", "CSS"] },
  { n: "04", title: "Data Analytics", icon: "chart", desc: "Working with datasets to clean information, explore patterns, create visualizations, and communicate useful insights.", tech: ["Python", "Pandas", "Data Visualization"] },
  { n: "05", title: "Machine Learning", icon: "brain", desc: "Exploring machine learning through academic projects, model experimentation, and practical problem-solving.", tech: ["Python", "Machine Learning", "Data Analysis"] },
] as const;
const ph = "[PLACEHOLDER — edit in src/data/portfolio.ts] ";
export const projects: Project[] = [
  { id: "notestation", num: "01", name: "NoteStation", category: "WEB APPLICATION · NOTES SHARING",
    description: "NoteStation is a secure notes-sharing platform designed to help users upload, discover, search, and download educational notes in one place.",
    tech: ["React.js", "Node.js", "Express.js", "MySQL"],
    goal: ph + "Give students one place to share and find educational notes.",
    features: ["User registration and login", "Uploading and browsing notes", "Search and filtering", "Subject-based organization", "Most-liked and most-downloaded sections", "Administrative dashboard"],
    learned: "Learned to build a full-stack web application, implement user authentication, manage databases, and develop search and filtering features. Improved my understanding of secure data handling and user-friendly interface design." },
  { id: "predictor", num: "02", name: "Student Performance Predictor", category: "ACADEMIC PROJECT · DATA ANALYSIS",
    description: "A student performance prediction project designed to explore academic data and estimate student performance using a data-driven approach.",
    tech: ["PHP", "MySQL", "HTML", "CSS"],
    goal: ph + "Explore academic data and present an estimated performance summary.",
    features: ["Student data input", "Academic performance indicators", "Data processing", "Prediction result visualization", "Simple student performance summary"],
    learned: "Learned to work with student data, handle database operations, process input data, and present results through a simple interface. Improved my problem-solving skills and understanding of data-driven applications." },
  { id: "basket", num: "03", name: "Apna Basket", category: "E-COMMERCE · GROCERY PLATFORM",
    description: "Apna Basket is a grocery shopping project focused on presenting products in an organized, user-friendly online shopping experience.",
    tech: ["Web Development"],
    goal: ph + "Present grocery products in an organized, easy-to-browse storefront.",
    features: ["Product categories", "Product listings", "Search", "Shopping cart", "Wishlist", "Responsive product browsing"],
    learned: "Learned to design an e-commerce interface, organize product categories, create reusable UI components, and improve the online shopping experience. Strengthened my understanding of responsive web design and frontend development." },
];
export const journey = [
  { title: "Master of Computer Applications (MCA)", place: "GLS University", note: "Expected Graduation: 2028" },
  { title: "Bachelor of Computer Applications (BCA)", place: "VNSGU", note: "Completed." },
  { title: "Full-Stack Development Intern", place: "Creative Web Infotech, Surat", note: "Internship Experience — Gained practical exposure to frontend development, React, PHP, databases, and full-stack development workflows." },
];
