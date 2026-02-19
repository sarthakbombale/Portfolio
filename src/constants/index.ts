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
  { id: "safari", name: "Articles", icon: "safari.png", canOpen: true },
  { id: "photos", name: "Gallery", icon: "photos.png", canOpen: true },
  { id: "contact", name: "Contact", icon: "contact.png", canOpen: true },
  { id: "terminal", name: "Skills", icon: "terminal.png", canOpen: true },
  { id: "trash", name: "Archive", icon: "trash.png", canOpen: false },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title: "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
    image: "/images/blog1.png",
    link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "The Ultimate Guide to Mastering Three.js for 3D Development",
    image: "/images/blog2.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "The Ultimate Guide to Mastering GSAP Animations",
    image: "/images/blog3.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
  },
];

export const techStack: TechStackItem[] = [
  { category: "Frontend", items: ["React.js", "Next.js", "TypeScript"] },
  { category: "Mobile", items: ["React Native", "Expo"] },
  { category: "Styling", items: ["Tailwind CSS", "Sass", "CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "NestJS", "Hono"] },
  { category: "Database", items: ["MongoDB", "PostgreSQL"] },
  { category: "Dev Tools", items: ["Git", "GitHub", "Docker"] },
];

export const socials: SocialLink[] = [
  { id: 1, text: "Github", icon: "/icons/github.svg", bg: "#f4656b", link: "https://github.com/JavaScript-Mastery-Pro" },
  { id: 2, text: "Platform", icon: "/icons/atom.svg", bg: "#4bcb63", link: "https://jsmastery.com/" },
  { id: 3, text: "Twitter/X", icon: "/icons/twitter.svg", bg: "#ff866b", link: "https://x.com/jsmasterypro" },
  { id: 4, text: "LinkedIn", icon: "/icons/linkedin.svg", bg: "#05b6f6", link: "https://www.linkedin.com/company/javascriptmastery/posts/?feedView=all" },
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
      name: "Nike Ecommerce Website Application",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[5vh] left-5",
      children: [
        {
          id: 1,
          name: "Nike Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: ["...content here"],
        },
        {
          id: 2,
          name: "nike.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://youtu.be/fZdTYswuZjU?si=Awjl-pIst9e09_UU",
          position: "top-10 right-20",
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
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      description: ["Hey! I’m Adrian..."],
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
  name: "Trash",
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
};