import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Stripe",
    image: "stripe.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://instagram.com",
  },
  {
    name: "Github",
    icon: RxGithubLogo,
    link: "https://github.com/anshaj2307",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://twitter.com",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  // {
  //   skill_name: "Redux",
  //   image: "redux.png",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: "React Query",
  //   image: "reactquery.png",
  //   width: 80,
  //   height: 80,
  // },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  // {
  //   skill_name: "Prisma",
  //   image: "prisma.png",
  //   width: 70,
  //   height: 70,
  // },
  // {
  //   skill_name: "Graphql",
  //   image: "graphql.png",
  //   width: 80,
  //   height: 80,
  // },
] as const;

export const FULLSTACK_SKILL = [
  // {
  //   skill_name: "React Native",
  //   image: "reactnative.png",
  //   width: 70,
  //   height: 70,
  // },
  // {
  //   skill_name: "Tauri",
  //   image: "tauri.png",
  //   width: 70,
  //   height: 70,
  // },
  // {
  //   skill_name: "Docker",
  //   image: "docker.png",
  //   width: 70,
  //   height: 70,
  // },

  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [
  {
    title: "HandWritting App",
    description:
      'The Handwriting App is a browser-based drawing application built using React that allows users to freely write or sketch on a digital canvas using mouse or touch input. It features a smooth, responsive interface powered by the HTML5 <canvas> element, enabling real-time rendering of strokes. Users can clear the canvas with a reset button and optionally customize the pens color and thickness. The app demonstrates effective integration of React with native browser APIs and showcases my skills in building interactive, user-friendly interfaces with React Hooks and functional components',
    image: "/projects/Handwriting.png",
    link: "https://handwritingapp.vercel.app/",
  },
  {
    title: "Bookit App using Next.JS",
    description:
      'Bookit App is a meeting hall booking platform developed using Next.js, designed for organizations and companies to seamlessly schedule and manage meetings in dedicated halls. The application allows users to browse available halls, check availability in real-time, and make bookings based on their preferred time slots. It supports the inclusion of custom amenities and facilities, ensuring each meeting setup is tailored to specific requirements. With a clean UI, responsive design, and efficient server-side rendering capabilities of Next.js, the app delivers a smooth and optimized user experience for internal company operations.',
    image: "/projects/Bookhall.png",
    link: "https://bookhall-smoky.vercel.app/",
  },
  {
    title: "Meeting-Yoom",
    description:
      'Meeting-Yoom is a clone of zoom meeting app built by using nextjs with realtime video calling feature. It allows users to create and join meetings with ease. The app provides a user-friendly interface for scheduling and managing meetings, ensuring a seamless experience for both hosts and participants. With its real-time video calling capabilities, Meeting-Yoom enables effective communication and collaboration, making it an ideal solution for remote teams and virtual gatherings.',
    image: "/projects/home.png",
    link: "https://yoom-meet.netlify.app/",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      // {
      //   name: "YouTube",
      //   icon: FaYoutube,
      //   link: "https://youtube.com",
      // },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/anshaj2307",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://twitter.com",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com",
      },
    ],
  },
  {
    title: "About",
    data: [
      // {
      //   name: "Become Sponsor",
      //   icon: null,
      //   link: "https://youtube.com",
      // },
      {
        name: "Learning about me",
        icon: null,
        link: "#about-me",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:anshaj852@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/anshaj2307/Meeting-yoom.git",
};
