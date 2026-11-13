// 1. Define Types/Interfaces for simple objects
export interface navLink {
  id: number;
  name: string;
  type: string;
}

export interface NavIcon {
  id: number;
  img: string;
}

export interface DockApp {
  id: string;
  name: string;
  icon: string;
  canOpen: boolean;
}

export interface BlogPost {
  id: number;
  date: string;
  title: string;
  image: string;
  link: string;
}

export interface TechStackItem {
  category: string;
  items: string[];
}

export interface SocialLink {
  id: number;
  text: string;
  icon: string;
  bg: string;
  link: string;
}

export interface ExperienceEntry {
  id: number;
  company: string;
  logo: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface ProjectEntry {
  id: number;
  name: string;
  stack: string;
  type: string;
  liveUrl?: string;
  highlights: string[];
}

export interface EducationEntry {
  id: number;
  course: string;
  institution: string;
  period: string;
  location: string;
  status?: string;
}

// 2. Define a recursive Interface for the File System (Folders and Files)
export interface FileSystemItem {
  id: number;
  name: string;
  icon: string;
  kind: "folder" | "file";
  type?: string;
  position?: string;
  windowPosition?: string;
  fileType?: "txt" | "url" | "img" | "fig" | "pdf";
  href?: string;
  imageUrl?: string;
  subtitle?: string;
  description?: string[];
  image?: string;
  children?: FileSystemItem[]; // This allows nesting
}

// 3. Apply the Interfaces to your data
export const navLinks: navLink[] = [
  { id: 1, name: "Projects", type: "finder" },
  { id: 3, name: "Contact", type: "contact" },
  { id: 4, name: "Resume", type: "resume" },
];

export const navIcons: NavIcon[] = [
  { id: 1, img: "/icons/wifi.svg" },
  { id: 2, img: "/icons/search.svg" },
  { id: 3, img: "/icons/user.svg" },
  { id: 4, img: "/icons/mode.svg" },
];

export const dockApps: DockApp[] = [
  { id: "finder", name: "Portfolio", icon: "finder.png", canOpen: true },
  { id: "safari", name: "Experience", icon: "safari.png", canOpen: true },
  { id: "photos", name: "Gallery", icon: "photos.png", canOpen: true },
  { id: "contact", name: "Contact", icon: "contact.png", canOpen: true },
  { id: "terminal", name: "Skills", icon: "terminal.png", canOpen: true },
  { id: "trash", name: "Education", icon: "trash.png", canOpen: true },
];

export const experienceEntries: ExperienceEntry[] = [
  {
    id: 1,
    company: "Econsign Soft Pvt. Ltd.",
    logo: "/images/econsignlogo.png",
    role: "Fullstack Developer",
    period: "Jun 2026 – Present",
    location: "Pune, India",
    highlights: [
      "Engineered high-throughput fullstack applications and microservices using Node.js, Express.js, React.js, Sequelize, and MySQL.",
      "Optimized backend latency by integrating Redis caching for frequent queries and configured AWS S3 bucket pipelines for secure asset management.",
      "Designed complex relational schemas and executed Sequelize transactions to enforce ACID compliance across multi-table updates.",
      "Strengthened platform security by implementing JWT authentication, Role-Based Access Control (RBAC), input validation, and payload encryption routines.",
      "Developed dynamic, responsive user interfaces in React/Next.js, integrating robust state management and seamless REST API endpoints.",
    ],
  },
  {
    id: 2,
    company: "Scalefull Technologies Pvt. Ltd.",
    logo: "/images/scalefull_logo.jpeg",
    role: "Web Development Intern / Fullstack Developer",
    period: "Jun 2025 – Feb 2026",
    location: "Wakad, Pune",
    highlights: [
      "Built end-to-end MERN web features, delivering reusable React UI components integrated with Express/Node.js microservices.",
      "Architected and maintained structured SQL and NoSQL databases utilizing Sequelize ORM and MongoDB.",
      "Collaborated in Agile sprints, executing thorough Postman API testing, peer code reviews, and Git feature-branch deployments.",
    ],
  },
];

export const projectEntries: ProjectEntry[] = [
  {
    id: 1,
    name: "Office Portal – Enterprise Management ERP",
    stack: "Node.js, Express.js, React.js, Sequelize, MySQL",
    type: "Live System",
    highlights: [
      "Architected end-to-end enterprise solution including Node.js/Express RESTful APIs and interactive React dashboard components.",
      "Automated Lead Management and Lead-to-Customer conversion flows using atomic SQL transactions and validation pipelines.",
      "Built an Inventory Module (GST/HSN tracking, real-time stock levels) and an Attendance Management system with approval workflows.",
    ],
  },
  {
    id: 2,
    name: "Shubhra Ranjan AI (SRAI) – UPSC Learning Platform",
    stack: "Node.js, Express.js, React.js, Sequelize, MySQL",
    type: "Live Platform",
    liveUrl: "https://ai.shubhraranjan.com/login",
    highlights: [
      "Developed scalable features for an AI-driven learning platform serving interactive MCQs, Flashcards, and PYQ analytics.",
      "Designed lecture-level content filtering, multi-tier admin approval workflows, and secure, encrypted client-server API payloads.",
    ],
  },
  {
    id: 3,
    name: "Institute for Humanities (IFH) Platform",
    stack: "Django REST Framework, Next.js, Python, PostgreSQL",
    type: "Live Site",
    liveUrl: "https://instituteforhumanities.com/",
    highlights: [
      "Engineered Author Management modules via DRF ModelViewSet, custom serializers, and automated audit timestamps.",
      "Configured profile image upload pipelines, soft-delete database handlers, OpenAPI/Swagger documentation, and Next.js frontend pages.",
    ],
  },
];

export const educationEntries: EducationEntry[] = [
  {
    id: 1,
    course: "Master of Computer Applications (MCA) – Artificial Intelligence",
    institution: "G H Raisoni College of Engineering and Management",
    period: "Pursuing (2026)",
    location: "Pune, India",
    status: "Pursuing",
  },
  {
    id: 2,
    course: "BBA-CA (Bachelor of Business Administration in Computer Application)",
    institution: "Savitribai Phule Pune University",
    period: "Aug 2022 – May 2025",
    location: "Pune, India",
  },
  {
    id: 3,
    course: "Higher Secondary Certificate (HSC) & Secondary School Certificate (SSC)",
    institution: "Vidyadham Prashala Shikrapur",
    period: "2020 – 2022",
    location: "Maharashtra, India",
  },
];

export const livePlatformLinks = [
  { id: 1, label: "BizPortal Login", url: "https://bizportal.econsignsoft.com/login" },
  { id: 2, label: "SRAI Login", url: "https://ai.shubhraranjan.com/login" },
  { id: 3, label: "IFH Website", url: "https://instituteforhumanities.com/" },
];

export const socials: SocialLink[] = [
  { id: 1, text: "Github", icon: "/icons/github.svg", bg: "#f4656b", link: "https://github.com/sarthakbombale" },
  { id: 2, text: "Twitter/X", icon: "/icons/twitter.svg", bg: "#ff866b", link: "https://x.com/SarthakDev_" },
  { id: 3, text: "LinkedIn", icon: "/icons/linkedin.svg", bg: "#05b6f6", link: "https://www.linkedin.com/in/sarthak-bombale-387705387/" },
];

export const photosLinks = [
  { id: 1, icon: "/icons/gicon1.svg", title: "Library" },
  { id: 2, icon: "/icons/gicon2.svg", title: "Memories" },
  { id: 3, icon: "/icons/file.svg", title: "Places" },
  { id: 4, icon: "/icons/gicon4.svg", title: "People" },
  { id: 5, icon: "/icons/gicon5.svg", title: "Favorites" },
];

export const gallery = [
  { id: 1, img: "/images/gal1.png" },
  { id: 2, img: "/images/gal2.png" },
  { id: 3, img: "/images/gal3.png" },
  { id: 4, img: "/images/gal4.png" },
];

// 4. Typing the Folder Locations
const WORK_LOCATION: FileSystemItem = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    {
      id: 5,
      name: "Work",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[5vh] left-5",
      children: [
        {
          id: 1,
          name: "Chatzy Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt", position: "top-10 left-14",
          description: [`Chatzy | Full-Stack Real-Time Communication Platform
Developed a high-performance messaging application focused on low-latency data exchange and persistent user sessions. By leveraging Socket.io, I reduced message delivery lag to near-zero, while ensuring a reliable history through a structured MongoDB schema.

Key Tech: MongoDB, Express.js, React, Node.js, Socket.io.

Highlight: Engineered a custom "Online Presence" system to track user activity in real-time.

DevOps: Managed the full lifecycle from local development to cloud deployment on Sevalla, utilizing automated CI/CD pipelines for seamless code integration.`],
        },
        {
          id: 2,
          name: "Doctor-Appointment-System",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/sarthakbombale/Doctor-Appointment-System",
          position: "top-10 right-14",
          description: [`Doctor Appointment System | Relational Full-Stack Platform

Engineered a comprehensive healthcare scheduling solution featuring distinct modules for Patients and Healthcare Providers. By implementing Sequelize ORM with MySQL, I ensured strict data integrity for appointment logs and user profiles, enabling a reliable booking experience.

Key Tech: React.js, Node.js, Express.js, MySQL, Sequelize.

Core Logic: Developed a dynamic availability management system that prevents double-booking and handles real-time slot updates.

Data Architecture: Designed a relational schema to manage complex many-to-one relationships between patients, doctors, and time slots.`]
        },
        {
          id: 3,
          name: "Chatzy Live Demo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://chatzy-1o4b.onrender.com/",
          position: "top-44 left-1/3 -translate-x-1/2",
          description: ["Live deployment for the Chatzy real-time chat application."],
        },
        {
          id: 4,
          name: "Doctor App Live Demo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://doctor-app-system.netlify.app/",
          position: "top-44 right-1/3 translate-x-1/2",
          description: ["Live deployment for the doctor appointment system."],
        },
      ],
    },
  ],
};

const ABOUT_LOCATION: FileSystemItem = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-56 left-1/2 -translate-x-1/2",
      subtitle: "Meet the Developer Behind the Code",
      description: [
        "Fullstack Engineer obsessed with building high-throughput systems, shipping fast, and solving hard architectural problems from 0 to 1.",
        "Currently engineering microservices and core infrastructure at Econsign Soft, after building end-to-end MERN apps at Scalefull Technologies LLP.",
        "I work across the entire stack—architecting low-latency backends in Node.js, Express, and Django REST Framework, paired with snappy React and Next.js frontends.",
        "From ACID-compliant schemas in MySQL and PostgreSQL to Redis caching, RBAC security, and AWS deployments, I own the entire lifecycle.",
        "Focused on clean system design, fast execution, and writing software that actually scales—no fluff, just shipping.",
      ],
    },
  ],
};

const RESUME_LOCATION: FileSystemItem = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    { id: 1, name: "Resume.pdf", icon: "/images/pdf.png", kind: "file", fileType: "pdf" },
  ],
};

const TRASH_LOCATION: FileSystemItem = {
  id: 4,
  type: "trash",
  name: "Education",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    { id: 1, name: "trash1.png", icon: "/images/image.png", kind: "file", fileType: "img", imageUrl: "/images/trash-1.png" },
  ],
};

// Map object typing
export const locations: Record<string, FileSystemItem> = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

// 5. Typing Window Config
export const INITIAL_Z_INDEX = 1000;

export interface WindowState {
  isOpen: boolean;
  zIndex: number;
  data: FileSystemItem | null;
}

export const WINDOW_CONFIG: Record<string, WindowState> = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  trash: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export const techStack: TechStackItem[] = [
  { category: "Frontend", items: ["React.js", "Next.js", "HTML", "CSS"] },
  { category: "Styling", items: ["Tailwind CSS", "BootStrap", "Sass", "CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "REST APIs", "FastApi", "Django"] },
  { category: "Database", items: ["MongoDB", "PostgreSQL", "MySql"] },
  { category: "Dev Tools", items: ["Git", "GitHub", "Gitlab", "Docker", "CI/CD", "Postman", "Swagger", "AWS (S3, EC2)",] },
  { category: "State mangagement", items: ["Redux", "Zustand"] },
  { category: "Programming Languages", items: ["TypeScript", "JavaScript", "Python", "Core Java"] },
];