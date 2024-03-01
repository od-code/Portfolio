import { Experience, Feed, Profile } from "./definitions";
// import { Ayesha, Sunnyside, Huddle } from ".";

export const profile: Profile = {
  primaryColor: "#22C55E",
  url: "thecodeinfluencer.dev",
  name: "Derrick Odari Atongo",
  title: "Derrick Odari - Portfolio",
  tagline: "Frontend developer and Creative",
  work: "Frontend Engineer at Bitnorm",
  description:
    "I have a passion for creating and developing visually stunning and user-friendly websites. With eagerness to learn and expand my skillset I believe there is more to be explored in this technological space.",
  gravatarUrl:
    "https://gravatar.com/userimage/218128506/bacfb3a48483c11f52725a28490e5989.jpeg?size=256",
  socials: {
    twitter: "https://twitter.com/Derrick__Odari",
    linkedIn: "https://www.linkedin.com/in/odari/",
    github: "https://github.com/od-code",
  },
  skills: [
    { label: "React.js", category: "frameworks" },
    { label: "Next.js", category: "frameworks" },
    { label: "Apollo GraphQL", category: "frameworks" },

    { label: "Git", category: "tools" },
    { label: "Docker", category: "tools" },
    { label: "Figma", category: "tools" },

    { label: "JavaScript", category: "languages" },
    { label: "TypeScript", category: "languages" },
    { label: "HTML", category: "languages" },
    { label: "CSS", category: "languages" },
    { label: "C", category: "languages" },
    { label: "Python", category: "languages" },
    { label: "Bash", category: "languages" },
  ],
};

export const experience: Experience[] = [
  {
    role: "Lead Frontend Developer",
    company: "BitNorm",
    startDate: "Jun 2023",
    endDate: "Present",
    duration: "9 Mos",
    type: "Full-time",
    location: "Netherlands . Remote",
    highlights: [
      "Developed and maintained the company's website and web applications using Next.js, Typescript, and GraphQL",
      "Collaborated with the design team to create user-friendly and visually appealing interfaces",
    ],
    tags: [
      "NextJs",
      "Shadcn",
      "Typscript",
      "Graphql Apollo",
      "JavaScript",
      "Tailwind",
      "UI/UX",
      "Figma",
    ],
    links: [{ label: "BitNorm Website", url: "https://bitnorm.com/" }],
  },
  {
    role: "Market Researcher",
    company: "Apex Research Solutions",
    startDate: "Nov 2020",
    endDate: "Dec 2022",
    duration: "2 Mos",
    type: "Contract",
    location: "Nairobi, Kenya",
    highlights: [
      "Conducted market research and analysis for clients and internal projects",
      "Ensure quality and integrity of research processes and data collection",
    ],
    tags: [
      "Communication skills",
      "Research methodoligies",
      "Market Knowledge",
      "Critical thinking",
    ],
    links: [
      {
        label: "Apex Research Solutions",
        url: "https://apexresearchsolutions.com/",
      },
    ],
  },
];

export const feed: Feed[] = [
  {
    id: "project-ayesha-salon",
    bgTheme: "#3CB54F",
    featured: true,
    title: "Ayesha Salon",
    githubLink: "",
    productLink: "https://ayesha-palor.netlify.app/",
    summary: "A web app to showcase services offered by a Salon.",
    /* The line `// description: "Mt",` is a commented-out line in the feed array of projects. This
    means that the description for the project "Ayesha Salon" is currently not provided or is
    placeholder text ("Mt"). It is common to use comments to temporarily remove or add information
    without affecting the functionality of the code. */
    // description: "Mt",
    type: "project",
    image: "public/images/Sunnyside.jpg",
    links: [
      {
        label: "Ayesha Salon",
        url: "https://ayesha-palor.netlify.app/",
      },
    ],
    tags: ["Html", "CSS", "Responsive Web Design"],
    details: {
      startDate: "Oct 2022",
      endDate: "Nov 2022",
      releasedDate: "",
      projectType: "Personal",
    },
  },
  {
    id: "project-sunnyside",
    bgTheme: "#008b8b",
    featured: true,
    title: "Sunnyside Creatives",
    githubLink: "",
    productLink: "https://sunnyside-visionaries.netlify.app/",
    summary: "A web application for a creative agency.",
    // description: "The .",
    type: "project",
    image: "public/images/Sunnyside.jpg",
    links: [
      {
        label: "Sunnyside Creatives",
        url: "https://sunnyside-visionaries.netlify.app/",
      },
    ],
    tags: ["Html", "CSS", "Responsive Web Design"],
    details: {
      startDate: "Nov 2022",
      endDate: "Dec 2022",
      releasedDate: "",
      projectType: "Personal",
    },
  },
  {
    id: "project-huddle",
    bgTheme: "#DDDDDD",
    featured: true,
    title: "Huddle Community",
    githubLink: "",
    productLink: "https://huddle-neighborhood.netlify.app/",
    summary: "A web app  for users to create and join communities.",
    // description: "Available ",
    type: "project",
    image: "public/images/Sunnyside.jpg",

    links: [
      {
        label: "Huddle Community ",
        url: "https://huddle-neighborhood.netlify.app/",
      },
    ],
    tags: ["Html", "CSS", "Responsive Web Design"],
    details: {
      startDate: "Dec 2022",
      endDate: "Dec 2022",
      releasedDate: "",
      projectType: "Personal",
    },
  },
];
