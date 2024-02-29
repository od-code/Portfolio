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
    id: "project-mtandao-web",
    bgTheme: "#3CB54F",
    featured: true,
    title: "Mtandao Portal",
    githubLink: "",
    productLink: "",
    summary: "A web app to show network coverage and complaints.",
    description:
      "Mtandao Portal is a comprehensive web application designed to enhance the user's experience in understanding and interacting with network coverage data. The app provides a user-friendly interface that allows users to visualize network coverage on an interactive map. Users can easily identify areas with strong signals, weak signals, or dead zones, enabling them to make informed decisions about connectivity.\n\nOne of the key features of Mtandao Portal is its ability to display network Key Performance Indicators (KPIs) in a clear and understandable manner. Through intuitive charts and graphs, users can analyze data related to network performance, such as signal strength, data speed, and reliability. This empowers both consumers and network administrators to assess the quality of service and identify areas for improvement.\n\nAdditionally, Mtandao Portal serves as a centralized hub for customer complaints and feedback. Users can submit and track their connectivity-related issues, allowing network providers to address concerns promptly. The portal streamlines the customer support process, fostering improved communication between users and service providers.",
    type: "project",
    image:
      "https://drive.google.com/uc?export=view&id=1aSaTopdxJt-UD44p0iNwD8N07DIiXwZ6",
    links: [],
    tags: ["React", "Next", "Typescript", "MUI", "Node"],
    details: {
      startDate: "Jun 2023",
      endDate: "Ongoing",
      releasedDate: "",
      projectType: "Workplace",
    },
  },
  {
    id: "project-gumzo-ai",
    bgTheme: "#008b8b",
    featured: true,
    title: "Gumzo AI",
    githubLink: "",
    productLink: "https://gumzoai.web.app/",
    summary: "AI chat simulation use-cases using React.js and Node.js",
    description:
      "The Gumzo AI Chat project is a sophisticated chat simulation built on OpenAI technology, offering users an interactive and personalized experience. Leveraging cutting-edge technologies such as React, JavaScript, TypeScript, MUI, Node, Firebase, Express, and Google Cloud, the application provides a seamless and responsive interface for users to engage with different AI chatbots. The utilization of React and MUI ensures a modern and visually appealing frontend, while JavaScript and TypeScript enable efficient and maintainable code. The backend, powered by Node and Express, facilitates the seamless communication between the user interface and the underlying AI engine. This project showcases a strong technical foundation, combining frontend and backend technologies to create a robust and interactive chat application.",
    type: "project",
    image:
      "https://drive.google.com/uc?export=view&id=1QkOs8BfqfG9MnttiJb_IkpOvzgQLWplq",
    links: [
      {
        label: "Gumzo Chat",
        url: "https://gumzoai.web.app/",
      },
      {
        label: "Gumzo API",
        url: "https://gumzoai.el.r.appspot.com/",
      },
    ],
    tags: [
      "React",
      "JavaScript",
      "Typescript",
      "MUI",
      "Node",
      "Firebase",
      "Express",
      "Google Cloud",
    ],
    details: {
      startDate: "Jan 2023",
      endDate: "Feb 2023",
      releasedDate: "",
      projectType: "Personal",
    },
  },
  {
    id: "project-quotez-motivation",
    bgTheme: "#DDDDDD",
    featured: true,
    title: "Quotez App",
    githubLink: "",
    productLink:
      "https://play.google.com/store/apps/details?id=com.appeazy.quotez",
    summary:
      "An android app built with React Native to get motivational quotes.",
    description:
      "Available on PlayStore, Quotez is a mobile app crafted with TypeScript and React Native Expo, seamlessly delivering a motivational boost. Leveraging an external API, it dynamically loads curated quotes. The app embraces user preferences with both light and dark themes, ensuring a personalized and visually pleasing experience. Immerse yourself in motivation with this technically sophisticated and visually adaptable application.",
    type: "project",
    image:
      "https://lh3.googleusercontent.com/yUH2ziBY-VqlQPvRFzoxDIFkBfj-BpN__GEjB7cuwVA-2NWCMndCFekXMYSar4MDQos",
    links: [
      {
        label: "Quotez on PlayStore ",
        url: "https://play.google.com/store/apps/details?id=com.appeazy.quotez",
      },
    ],
    tags: ["React Native", "JavaScript", "Typescript", "Android", "Expo"],
    details: {
      startDate: "Nov 2023",
      endDate: "Ongoing",
      releasedDate: "",
      projectType: "Personal",
    },
  },
];
