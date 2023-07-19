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
    cloud,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    calculadora,
    logoco,
    poliverso,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    
  ];
  
  const technologies = [
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
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "Poliverso Films",
      icon: poliverso,
      iconBg: "#383E56",
      date: "july 2023",
      points: [
        "This was my first job as a freelancer.",
        "I developed this site using HTMl CSS and JavaScript and some APIs.",
        "The website is completely responsive, catering to both web and mobile users.",
      ],
    },
    {
      title: "Calculator",
      company_name: "Personal Project",
      icon: calculadora,
      iconBg: "#383E56",
      date: "Jan 2023",
      points: [
        "I used JavaScript to develop a calculator.",
        "I develop a fully functional calculator.",
        "I employed a modern and responsive design to enhance the user experience.",
      ],
    },
    {
      title: "Weater app",
      company_name: "Personal project",
      icon: cloud,
      iconBg: "#383E56",
      date: "Feb 2023",
      points: [
        "I developed a weather app using java scrip.",
        "A fully functional application that allows you to check the temperature of any country.",
        "Using functional design for the best user experience",
      ],
    },
    {
      title: "ThreeJS 3D portifolio",
      company_name: "Personal Project",
      icon: logoco,
      iconBg: "#383E56",
      date: "Present",
      points: [
        "I used React.js, Three.js, and other technologies to develop and maintain this website.",
        "I developed this personal website to serve as a portfolio for my resume.",
        "Using ThreeJS to create and animate 3d objects.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "",
      name: "",
      designation: "",
      company: "",
      image: "",
    },
    {
      testimonial:
        "",
      name: "",
      designation: "",
      company: "",
      image: "",
    },
    {
      testimonial:
        "",
      name: "",
      designation: "",
      company: "",
      image: "",
    },
  ];
  
  const projects = [
    {
      name: "Weater App",
      description:
        "The weather application was developed to help users prepare for weather conditions before leaving their homes.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javasSript",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/angelo-Cahetel/weather-App",
    },
    {
      name: "Particles Morph",
      description:
        "In this application, I used JavaScript particles to create shapes and geometric figures.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javaScript",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/angelo-Cahetel/Particles-Morph",
    },
    {
      name: "Apeperia",
      description:
        "For this project, I developed a website for selling technology courses.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        }
      ],
      image: tripguide,
      source_code_link: "https://github.com/angelo-Cahetel/projeto-apeperia",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };