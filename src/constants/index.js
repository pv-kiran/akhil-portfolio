import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  nodejs,
  mongodb,
  git,
  figma,
  netflix,
  studiofitness,
  timeshift,
  olxclone,
  todo,
  usermanagement,
  s3,
  jwt,
  passport,
  oracle,
  allianz,
  freelancer,
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
    id: "education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: `Quantitative and problem-solving skills`,
    icon: web,
  },
  {
    title: `Effective communicator and interpersonal skills`,
    icon: mobile,
  },
  {
    title: `Adaptable teaching for diverse learning styles`,
    icon: backend,
  },
  {
    title: `Keen on continuous learning and exam trends`,
    icon: creator,
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
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "oracle",
    icon: oracle,
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "passport",
    icon: passport,
  },
  {
    name: "s3",
    icon: s3,
  },
  {
    name: "jwt",
    icon: jwt,
  },
];

const experiences = [
  {
    title: "Quantitative Aptitude Trainer",
    company_name: "CGP Career Avenue ",
    icon: freelancer,
    iconBg: "#E6DEDD",
    date: "5 Years",
    points: [
      `Specialized in Gate and Placement Training. Developed and implemented tailored training modules to enhance students' skills. More than 350 batches of placement training in Quantitative aptitude were completed`,
    ],
  },
  {
    title: "Communication Specialist",
    company_name: "Vyasa Academy",
    icon: allianz,
    iconBg: "#E6DEDD",
    date: "5 Years",
    points: [
      `Focused on Kerala PSC, RRB, and SSC exams with an emphasis
       on quantitative techniques. Designed and delivered effective training sessions to ensure maximum student engagement.Provided personalized guidance to students for optimal exam preparation`,
    ],
  },
  {
    title: " Placement Trainer",
    company_name: "Progressum Edutech Pvt. Ltd",
    icon: freelancer,
    iconBg: "#E6DEDD",
    date: "2 Years",
    points: [
      `Contributed to Placement Training programs, preparingstudents for job interviews and recruitment processes. Implemented innovative teaching methodologies to enhance problem-solving abilities.`,
    ],
  },
  {
    title: " Placement Trainer",
    company_name: "Progressum Edutech Pvt. Ltd",
    icon: freelancer,
    iconBg: "#E6DEDD",
    date: "2 Years",
    points: [
      `Contributed to Placement Training programs, preparingstudents for job interviews and recruitment processes. Implemented innovative teaching methodologies to enhance problem-solving abilities.`,
    ],
  },
  {
    title: "Aptitude Coach",
    company_name: "IMS Trivandrum ",
    icon: freelancer,
    iconBg: "#E6DEDD",
    date: "2 Years",
    points: [
      `Specialized in CAT, CUET, CMAT, and GMAT coaching Conducted mock tests and personalized feedback sessions to track students' progress.`,
    ],
  },
  {
    title: "Trainer",
    company_name: "IMS Trivandrum ",
    icon: freelancer,
    iconBg: "#E6DEDD",
    date: "2 Years",
    points: [
      `Specialized in CAT, CUET, CMAT, and GMAT coaching for a
       targeted period. Implemented time management strategies and exam-oriented approaches for better performance.`,
    ],
  },
];

const education = [
  {
    title: "M. Tech (Energy Systems Analysis and Design)",
    company_name: "GOVT. Engineering college, Kozhikode",
    icon: freelancer,
    iconBg: "#E6DEDD",
    date: "2014-2016",
    // points: [
    //   `Specialized in Gate and Placement Training. Developed and implemented tailored training modules to enhance students' skills. More than 350 batches of placement training in Quantitative aptitude were completed`,
    // ],
  },
  {
    title: "B. Tech (Mechanical Engineering)",
    company_name: "University of Kerala.",
    icon: allianz,
    iconBg: "#E6DEDD",
    date: "2019-2013",
    // points: [
    //   `Focused on Kerala PSC, RRB, and SSC exams with an emphasis
    //    on quantitative techniques. Designed and delivered effective training sessions to ensure maximum student engagement.Provided personalized guidance to students for optimal exam preparation`,
    // ],
  },
];

const testimonials = [
  {
    testimonial:
      "I had the pleasure of collaborating with Akhil Raj whose expertise in aptitude training has truly transformed the capabilities of my workforce. His methods and tailored approach to training have significantly amplified our student's problem-solving abilities, critical thinking skills, and overall performance. He has an unparalleled level of dedication and enthusiasm to the work he is doing.",
    designation: "Head of Operations. Progressum Edutech",
    company: "Progressum Edutech",
    // image:
    //   "https://res.cloudinary.com/djd2rpgil/image/upload/v1701794011/portfolio/kaa8vphihpqcghfw7qob.jpg",
  },
  {
    testimonial:
      "Mr. Akhil Raj, a distinguished mechanical engineering graduate with a master's in energy systems from Government Engineering College Kozhikode, stands as a beacon of expertise in multiple domains. His profound knowledge spans the intricacies of Vedic mathematics, aptitude, and reasoninng  skill set he generously imparts through engaging classes tailored for graduates, particularly BTech graduates, and postgraduates like MBA students. As an invaluable asset to CGP Career Avenues, Mr. Akhil Raj brings not only a wealth of academic wisdom but also an unparalleled dedication to shaping and guiding aspiring minds toward success. His commitment and proficiency make him an indispensable resource, nurturing and empowering countless individuals on their educational journeys.",
    name: "DR. JAYARAM V",
    designation: "Head of Operations",
    company: "CGP CAREER AVENUES",
    // image:
    //   "https://res.cloudinary.com/djd2rpgil/image/upload/v1701794002/portfolio/mknwotjojeefarrzbm8v.jpg",
  },
];

const projects = [
  {
    name: "StudioFitness",
    description:
      "Web-based platform comprehensive solution designed to streamline and enhance the operations of fitness centers by providing various features and live sessions.",
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
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: studiofitness,
    source_code_link: "https://github.com/silpasheela/StudioFitness",
  },
  {
    name: "TimeShift",
    description:
      "An e-commerce website dedicated to luxury watches which is designed to be user-friendly, allowing customers to easily browse through the collection.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "ejs",
        color: "pink-text-gradient",
      },
    ],
    image: timeshift,
    source_code_link:
      "hhttps://github.com/silpasheela/TIME-Shift-e-commerce-Project",
  },
  {
    name: "Netflix Clone",
    description:
      "A replica of the popular streaming service, Netflix, using React.js and TMDB which provides a user-friendly interface experience that Netflix offers.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "TMDB",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://github.com/silpasheela/Netflix-Clone-React",
  },
  {
    name: "To-Do App",
    description:
      "The application features an intuitive interface where users can add new tasks, mark tasks as completed, and delete tasks managed using React's state management.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/silpasheela/ToDo-React",
  },
  {
    name: "OLX Clone",
    description:
      "A project involved in creating a clone of the popular online marketplace, OLX, using React which incorporates the feature of detailed item view when clicked.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "cloudinary",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: olxclone,
    source_code_link: "https://github.com/silpasheela/OLX-Clone-React",
  },
  {
    name: "User Management",
    description:
      "A comprehensive User Management System using React. The application provides an efficient platform for managing user data within an organization.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "pink-text-gradient",
      },
    ],
    image: usermanagement,
    source_code_link:
      "https://github.com/silpasheela/MERN-User-Management-System",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  education,
};
