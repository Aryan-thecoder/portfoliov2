import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  panw,
  wal,
  virtusa,
  calcitex,
  entreesphere,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  nextjs,
  mysql,
  sequelize,
  express
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "Competitive Coder",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "python",
    icon: python,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "sequelize",
    icon: sequelize,
  },
  {
    name: "express",
    icon: express,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Software Development Engineer Intern",
    company_name: "Palo Alto Networks",
    icon: panw,
    iconBg: "#383E56",
    date: "June 2023 - Present",
    points: [
      
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "West Agile Labs",
    icon: wal,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - June 2023",
    points: [
      "Created a full-stack application on Project Management using ReactJS, NodeJS, MySQL, Sequelize and APIs which helps GDOs, Project Managers and Admins keep track of the projects and team.",
      "Worked on client application in the areas of validations, third party integration, elastic search and formik.",
      "Implemented responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Associate Software Developer Intern",
    company_name: "Virtusa",
    icon: virtusa,
    iconBg: "#383E56",
    date: "Jan 2023 - May 2023",
    points: [
      "Worked on Talend application to execute ETL and Data Integration tasks",
      "Created a business model in the Talend Open Studio",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Calcitex",
    icon: calcitex,
    iconBg: "#E6DEDD",
    date: "March 2021 - June 2021",
    points: [
      "Designed a Furniture website using HTML, CSS and Bootstrap based on client's requirements.",
      "Created URL routing and live server using Flask framework.",
      "Implemented responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Business Development Trainee",
    company_name: "Entreesphere",
    icon: entreesphere,
    iconBg: "#E6DEDD",
    date: "May 2021 - May 2022",
    points: [
      "Led my team in the process of idea making and development of a startup",
      "Designed various Business Model Canvases and Pitch Prelude development.",
      "Worked on Team Building Assessment Matrix and Leadership Assessment Matrix.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "TranslateIt",
    description:
      "Web-based platform that helps reduce the language barrier in the text messages. The sender can select the language in which the text is sent, and the reciever can select the language in which the text is recieved.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
   /* image: carrent,*/
    source_code_link: "https://github.com/",
  },
  {
    name: "Crime Detection System",
    description:
      "Software which automates the crime and suspect recognition process. Reduced time and human efforts by 300 times by automating the process of image resizing, analysis and prediction.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      }
    ],
   /* image: carrent,*/
    source_code_link: "https://github.com/",
  },
  {
    name: "Random Generator",
    description:
      "A web-based platform that provides features like Password generator, Lottery pick, Coin flipper, Cards shuffler, Dice roller and many more. Users can interact with them fun animations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
   /* image: carrent,*/
    source_code_link: "https://github.com/",
  },
  {
    name: "SecureCam",
    description:
      "Software which automates SMS alerts when a face is recognised. Reduced human efforts by 100 times by automating record logs of data. Implemented in Principal, Dean and HOD cabins at my institute.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
    ],
   /* image: carrent,*/
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
