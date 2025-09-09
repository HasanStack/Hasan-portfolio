// Skills Section Logo
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';



// Experience Section Logo

import Domkal from './assets/company_logo/Domkal.png';

// Education Section Logo's
import DBTHS from './assets/education_logo/DBTHS.jpg';
import jgec_logo from './assets/education_logo/jgec_logo.jpg';




// Project Section Logo's


import Calculator from './assets/work_logo/Calculator.png';
import Currency from './assets/work_logo/Currency.png';
import VirtualAssistant from './assets/work_logo/VirtualAssistant.png';
import SearchImage from './assets/work_logo/SearchImage.png';

//skill
export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },

  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      
      
    ],
  },
];

//experience


  export const experiences = [
    {
      id: 0,
      img: Domkal,
      role: "Frontend Developer",
      company: "Dumkal Institute of Engineering & Technology",
      date: "August 2025 - Present",
      desc: "We are developing a comprehensive Online Exam Management System aimed at streamlining the process of conducting and managing exams digitally.I am currently responsible for the frontend development of the platform, where I focus on creating a clean, intuitive, and fully responsive user interface to ensure a smooth and efficient experience for both students and administrators.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Tailwind CSS",
        "Redux",
        
      ],
    },
 
  
  ];








//education

  
  export const education = [
    {
      id: 0,
      img: jgec_logo,
      school: "Jalpaiguri Government Engineering College,Jalpaiguri",
      date: "September 2022-July 2026",
      grade: "7.5 CGPA",
      desc:  "I am currently pursuing my Bachelor of Technology (B.Tech) in Information Technology at Jalpaiguri Government Engineering College (Autonomous), Jalpaiguri. Through my coursework, I am building a strong foundation in programming and computer science principles. I have studied subjects such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. Along with academics, I am also working on projects that help me apply theoretical concepts to real-world problems.",
      degree: "Bachelor of Technology (B.Tech) in Information Technology",
    },

    { 
    id: 1,
    img:DBTHS,
    school: "Dumkal Bhabataran High School,Domkal",
    date: "April 2021 - April 2022",
    grade: "82%",
    desc: "I completed my class 12 education from Dumkal Bhabataran High School,Domkal, under the WBCHSE board, where I studied Physics, Chemistry, and Mathematics (PCM).",
    degree: "West Bengal Council of Higher Secondary Education(WBCHSE)" 
   },

    {
    id: 2,
    img: DBTHS,
    school: "Dumkal Bhabataran High School,Domkal",
    date: "January 2019 - March 2020",
    grade: "71.5%",
    desc:"I completed my class 10 education from Dumkal Bhabataran High School, Domkal, under the WBBSE board, with a focus on Science.",
    degree: "West Bengal Board of Secondary Education(WBBSE)",
    },
  ];
  





















//projects


  export const projects = [
    {
      id: 0,
      title: "Basic Calculator",
      description:
        "A simple and user-friendly calculator that performs basic arithmetic operations like addition, subtraction, multiplication, and division. Designed with a clean interface and responsive layout to ensure a smooth user experience.The calculator processes input instantly and displays accurate results without any page reload.",
      image: Calculator,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/HasanStack/Basic-Calculator.git",
      webapp: "https://basiccalculatorbyhasan.netlify.app/",
    },

    {
      id: 1,
      title: "Virtual Assistant",
      description:
        "A smart and interactive virtual assistant designed to help users with common tasks like answering questions, setting reminders, and providing useful information. It offers a simple conversational interface for smooth communication.The assistant responds in real time and enhances user productivity with quick, automated support.",
      image:VirtualAssistant,
      tags: ["HTML", "CSS", "JavaScript","Web Speech API"],
      github: "https://github.com/HasanStack/Virtual-Assistant.git",
      webapp: "https://virtualassistanatbyhasan.netlify.app/",
    },

    {
      id: 2,
      title: "Currency Converter",
      description:
        "A user-friendly currency converter that allows quick and accurate conversion between multiple world currencies. It fetches real-time exchange rates to provide up-to-date results. The clean interface and instant calculations make it a handy tool for travelers and businesses alike",
      image: Currency,
      tags: ["HTML", "CSS", "JavaScript","Currency API"],
      github: "https://github.com/HasanStack/Currency-Converter.git",
      webapp: "https://currencyconverterbyhasan.netlify.app/",
    },



    {
      id: 3,
      title: "Image Search Engine",
      description:
        "An efficient image search engine that helps users find relevant images based on keywords or phrases. It fetches and displays images quickly from various sources with a clean and intuitive interface. Ideal for users looking to browse or download images effortlessly.",
      image: SearchImage,
      tags: ["HTML", "CSS", "JavaScript","Unsplash API"],

      github: "https://github.com/HasanStack/Own-Image-Search-Engine.git",
      webapp: "https://pixsearchbyhasan.netlify.app/",
    },
    
     
  ];  
