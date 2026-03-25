export type Project = {
  title: string;
  slug: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  tools: string[];
  role: string;
  duration: string;
  image: string;
  liveLink?: string;
  githubLink?: string;
  behanceLink?: string;
  featured: boolean;
};

export const siteData = {
  name: "Amish Tharanya Wikramasinghe",
  title: "Interactive Media Undergraduate at SLIIT",
  heroDescription:
    "I am a creative undergraduate passionate about digital design, visual storytelling, UI/UX, and interactive experiences. I enjoy blending creativity with technology to create modern, engaging, and user-friendly digital products.",
  about:
    "I am currently an undergraduate specializing in Interactive Media at SLIIT. My interests include UI/UX design, digital branding, content creation, motion graphics, and front-end development. I enjoy experimenting with modern design tools and transforming ideas into meaningful digital experiences that are both visually appealing and easy to use.",
  email: "amish@gmail.com",
  phone: "0712334567",
  location: "Colombo, Sri Lanka",
  linkedin: "https://www.linkedin.com/in/amish-tharanya-sample",
  github: "https://github.com/amish-sample",
  facebook: "https://www.facebook.com/amish.sample",
  degree: "BSc (Hons) in Information Technology Specialization in Interactive Media",
  university: "SLIIT",
  yearOfStudy: "3rd Year",
  expectedGraduation: "2027",
  gpa: "1.5",
  coursework: [
    "User Interface Design",
    "User Experience Fundamentals",
    "Graphic Design Principles",
    "Web Design and Development",
    "Digital Storytelling",
    "Animation and Motion Graphics",
    "Human Computer Interaction",
    "Branding and Visual Communication",
  ],
  designSkills: [
    "UI Design",
    "UX Design",
    "Wireframing",
    "Prototyping",
    "Typography",
    "Color Theory",
    "Branding",
    "Storyboarding",
  ],
  developmentSkills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Responsive Web Design",
    "Basic TypeScript",
  ],
  softwareTools: [
    "Figma",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe Premiere Pro",
    "Adobe After Effects",
    "Canva",
    "VS Code",
  ],
  softSkills: [
    "Creativity",
    "Communication",
    "Teamwork",
    "Problem Solving",
    "Adaptability",
    "Presentation Skills",
    "Time Management",
  ],
  certifications: [
    {
      name: "Google UX Design Foundations",
      issuer: "Coursera",
      year: "2025",
      link: "#",
    },
    {
      name: "Introduction to Graphic Design",
      issuer: "LinkedIn Learning",
      year: "2025",
      link: "#",
    },
    {
      name: "Figma UI/UX Essentials",
      issuer: "Udemy",
      year: "2024",
      link: "#",
    },
  ],
};

export const projects: Project[] = [
  {
    title: "Creative Event Branding Kit",
    slug: "creative-event-branding-kit",
    category: "Branding Design",
    shortDescription:
      "A visual identity project including posters, social media creatives, and brand assets.",
    fullDescription:
      "This project focused on building a modern visual identity for a fictional creative event. The design system included posters, banners, social media posts, and a color palette designed to maintain consistency across multiple digital platforms.",
    tools: ["Photoshop", "Illustrator", "Canva"],
    role: "Designer",
    duration: "2 Weeks",
    image: "/profile-placeholder.svg",
    behanceLink: "#",
    featured: true,
  },
  {
    title: "Mobile App UI Concept",
    slug: "mobile-app-ui-concept",
    category: "UI/UX Design",
    shortDescription:
      "A modern mobile app interface concept focused on usability and visual clarity.",
    fullDescription:
      "This UI concept was created to explore clean mobile design patterns, user-friendly navigation, and modern card-based layouts. The project included low-fidelity wireframes and high-fidelity screens created in Figma.",
    tools: ["Figma", "Photoshop"],
    role: "UI/UX Designer",
    duration: "10 Days",
    image: "/profile-placeholder.svg",
    liveLink: "#",
    behanceLink: "#",
    featured: true,
  },
  {
    title: "Interactive Portfolio Website",
    slug: "interactive-portfolio-website",
    category: "Web Design",
    shortDescription:
      "A personal portfolio concept designed to showcase projects and creative skills.",
    fullDescription:
      "This portfolio project was designed with a minimal and creative style to highlight projects, skills, and personal branding. The focus was on responsive layouts, clean typography, and strong visual hierarchy.",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Figma"],
    role: "Designer & Developer",
    duration: "3 Weeks",
    image: "/profile-placeholder.svg",
    githubLink: "#",
    liveLink: "#",
    featured: true,
  },
  {
    title: "Short Motion Graphics Promo",
    slug: "short-motion-graphics-promo",
    category: "Motion Graphics",
    shortDescription:
      "A promotional video concept using animated text and modern transitions.",
    fullDescription:
      "This motion graphics concept was created as a short promotional piece to practice visual storytelling, timing, and animated transitions. The project focused on delivering a bold and energetic visual style.",
    tools: ["After Effects", "Premiere Pro"],
    role: "Motion Designer",
    duration: "1 Week",
    image: "/profile-placeholder.svg",
    featured: false,
  },
];