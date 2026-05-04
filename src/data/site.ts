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
  email: "amishtharanyawickramasinghe@gmail.com",
  phone: "0713846649",
  location: "Colombo, Sri Lanka",
  linkedin: "https://www.linkedin.com/in/amish-tharanya-wickramasinghe-13aa303b1/",
  github: "https://github.com/AmishTharanya",
  facebook: "https://web.facebook.com/amishtharanya.wickramasinghe.9",
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
    "Responsive Web Design",
  ],
  softwareTools: [
    "Figma",
    "Adobe Illustrator",
    "Adobe Premiere Pro",
    "Canva",
    "VS Code",
  ],
  softSkills: [
    "Creativity",
    "Teamwork",
    "Problem Solving",
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
    title: "Smart Grocery Management System",
    slug: "smart-grocery-management",
    category: "Full Stack Development",
    shortDescription:
      "A comprehensive MERN-based e-commerce platform for online grocery shopping with advanced order and delivery management features.",
    fullDescription:
      "Smart Grocery Management is a full-stack MERN application designed to streamline online grocery shopping. The platform features an intuitive product catalog, smart cart system, secure payment integration, real-time order tracking, and intelligent delivery management. Users can browse fresh groceries, place orders, track deliveries in real-time, and manage their purchase history. The admin dashboard provides comprehensive order management, inventory tracking, and delivery logistics optimization.",
    tools: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Stripe"],
    role: "Full Stack Developer",
    duration: "6 Weeks",
    image: "/projects/smart%20grocery%20image.jpg",
    githubLink: "https://github.com",
    liveLink: "#",
    featured: true,
  },
  {
    title: "WellnessTracker Mobile Application",
    slug: "wellness-tracker-app",
    category: "Mobile App Development",
    shortDescription:
      "A comprehensive health and wellness tracking mobile application for monitoring fitness, nutrition, and mental well-being.",
    fullDescription:
      "WellnessTracker is a feature-rich mobile application designed to help users maintain a holistic approach to their health and wellness. The app allows users to track daily exercise routines, monitor calorie intake, log water consumption, track sleep patterns, and maintain wellness goals. It includes personalized recommendations, progress analytics with beautiful visualizations, achievement badges, and community features. The app syncs data across devices and provides daily insights to motivate users towards their health objectives.",
    tools: ["React Native", "Firebase", "Redux", "Apple Health", "Google Fit"],
    role: "Mobile App Developer",
    duration: "6 Weeks",
    image: "/projects/health%20app.jpg",
    githubLink: "https://github.com/AmishTharanya/Wellness_Tracker",
    featured: true,
  },
  {
    title: "Twitter",
    slug: "techvision-logo-design",
    category: "Logo Design",
    shortDescription:
      "A modern and scalable logo design for a technology consulting startup focusing on digital transformation.",
    fullDescription:
      "This logo design project involved creating a distinctive visual identity for TechVision, a technology consulting firm. The design emphasizes innovation, forward-thinking, and digital transformation through a geometric approach. The logo works seamlessly across all mediums - from digital applications to print materials - with careful attention to color psychology and brand positioning. The design includes comprehensive brand guidelines ensuring consistency.",
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
    role: "Logo & Brand Designer",
    duration: "1 Week",
    image: "/projects/logo1.jpg",
    behanceLink: "https://drive.google.com/file/d/1vme3u_NLhz6S8Cm8NcLwhghnoziXdSx-/view?usp=sharing",
    featured: true,
  },
  {
    title: "ERICSSON BALL",
    slug: "ericsson-ball-logo-design",
    category: "Logo Design",
    shortDescription:
      "A modern and dynamic logo design for the Ericsson Ball brand.",
    fullDescription:
      "The GreenEarth logo represents a commitment to environmental sustainability and conservation. The design incorporates natural elements such as leaves and earth tones, creating a memorable symbol that resonates with the organization's mission. The logo is versatile, working effectively at various scales and in both color and monochrome versions. The design was created with sustainability principles in mind, ensuring longevity and timeless appeal.",
    tools: ["Adobe Illustrator", "Adobe InDesign"],
    role: "Logo Designer",
    duration: "1 Week",
    image: "/projects/logo2.jpg",
    behanceLink: "https://drive.google.com/drive/folders/1XS1nJq6CFKKtfmm0Wa6bAlpcSSkdpRGP?usp=sharing",
    featured: true,
  },
  {
    title: "ROAR",
    slug: "creativeflow-logo-design",
    category: "Logo Design",
    shortDescription:
      "A dynamic and creative logo design for a digital design studio specializing in branding and web design.",
    fullDescription:
      "The CreativeFlow Studio logo captures the essence of creativity and fluid design processes. The design uses flowing shapes and vibrant colors to represent dynamic creativity and innovation in digital design. The logo conveys professionalism while maintaining a modern and approachable aesthetic. Includes multiple variations for different applications - from website favicons to large-scale print materials.",
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    role: "Logo & Branding Designer",
    duration: "1 Week",
    image: "/projects/logo3.jpg",
    behanceLink: "https://drive.google.com/file/d/1zDjoO_TqmQl8QRkuVR7a_2nPY_HpaR_T/view?usp=sharing",
    featured: false,
  },
];