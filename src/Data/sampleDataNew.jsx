import RentHouse from '../assets/projects/RentHouse.png';
import Project from '../assets/projects/Project.png';

import Colab from '../assets/projects/Colab.png';
import SparshBhashi from '../assets/projects/SparshBhashi.png';
import OutsIIT from '../assets/projects/OutsIIT.png';
import CitiesDevGame from '../assets/projects/Cities.png';
// import RentHouse from '../assets/projects/RentHouse.png';
import MoboDashboard from '../assets/projects/MoboDashboard.png';
import OnlineBubbleGame from '../assets/projects/OnlineBubbleGame.png';
import Suduko from '../assets/projects/Suduko.png';

export const sampleDataNew = [
  // {
  //   cat: 'APP',
  //   name: "OutsIIT",
  //   date: "January 2024",
  //   role: "Team Lead",
  //   ShowCase: Project,
  //   VideoShowCase: OutsIIT,
  //   Overview: {
  //     role: "Frontend Lead and — Interaction Design, User Flows, Rapid Prototyping",
  //     team: "Pranav Somase, Piyush Vishwakarma",
  //     timeline: "4 Months, APK Released in August 2024",
  //     overview: "The OutsIIT App was designed to revolutionize the way users interact with campus outlets at IIT Gandhinagar (IITGN). This project aimed to streamline the process of ordering various items—from stationery to food—by creating a seamless and intuitive user flow. By focusing on simplifying campus outlet management, the app enhances both user experience and operational efficiency for shopkeepers.",
  //   },
  //   Highlights: {
  //     highlight: "A comprehensive solution for streamlining ordering processes and enhancing user interactions with campus outlets.",
  //     highlightShow: [
  //       { image: OutsIIT, imageAltText: "Logo", imageDescription: "0.1 Homepage motion concept." },
  //       { image: OutsIIT, imageAltText: "Logo", imageDescription: "0.2 Sample UI components." },
  //     ],
  //   },
  // }


  {
    cat: 'APP',
    name: "MoboDash VIS",
    date: "May '24 - July '24",
    role: "App Devlopment",
    VideoShowCase: MoboDashboard,
    // Showcase: "path/to/showcase-image.jpg", // Replace with actual image path if available
    Overview: {
      role: "React Native Developer — Vehicle Informant System Development, Android Sensor Integration, UI/UX Design",
      team: [
        { name: "Self-driven project" }, // Add team members here if applicable
      ],
      timeline: "3 Months",
      overview: "The project aimed to allow drivers to use their phones as a functional Informant System for their vehicles. It includes features such as speed tracking, music control, battery monitoring, and light control, built using React Native and Android sensors."
    },
    Highlights: {
      highlight: "A foundational city simulation game with potential for further development and feature expansion.",
      highlightShow: [
        { image: MoboDashboard, imageAltText: "Game Screenshot", imageDescription: "City building and management interface." },
      ],
    }, extras: [
      { title: 'App Apk', link: 'https://drive.google.com/drive/folders/1ElarJ3PMnzCQqfaHoMhjmxMZr8p9ZigU' }
    ]
  },
  {
    cat: 'ALGO',
    name: "Sudoku Solver",
    date: "May '24 - July '24",
    role: "Developer",
    VideoShowCase: Suduko,
    // Showcase: "path/to/showcase-image.jpg", // Replace with actual image path if available
    Overview: {
      role: "Developer — Sudoku Solver Development, Algorithm Implementation, Interactive Features",
      team: [
        { name: "Self-driven project" }, // Add team members here if applicable
      ],
      timeline: "4 months",
      overview: "Developed an interactive Sudoku solver that demonstrates various algorithms like Backtracking, Forward Checking and Arc Consistancy to efficiently solve Sudoku puzzles. The project features dynamic hover matrices, probability distribution updates, and allows users to experiment with different solving methods. Key features include step-by-step visualization and real-time impact of algorithms on solving efficiency."
    }, extras: [
      { title: 'Github Repo', link: 'https://github.com/aayushSP2108/Sodoko' },
      { title: 'Deployed Link', link: 'https://aayushsp2108.github.io/Sodoko/' },
      { title: 'Video Link', link: 'https://www.youtube.com/watch?v=90e9mfFwAH0' },
    ]
  },
  {
    cat: 'GAME',
    name: "SimCity Game",
    date: "Ongoing",
    role: "Game Developer",
    VideoShowCase: CitiesDevGame,
    // Showcase: "path/to/showcase-image.jpg", // Replace with actual image path if available
    Overview: {
      role: "Game Developer — City Simulation Game Development, Dynamic Content Updating, 3D Structures Creation",
      team: [
        { name: "Vipul SP" }, // Add team members here if applicable
      ],
      timeline: "Ongoing",
      overview: "Developed a city simulation game that allows players to construct 3D structures, roads, and apartments. The game features dynamic content updates based on in-game time progression, using three.js and web technologies."
    }, extras: [
      { title: 'Glimpses', link: 'https://iitgnacin-my.sharepoint.com/:v:/g/personal/22110189_iitgn_ac_in/EdlTS1e8jaRMkUiUBmDftwMBIUWm7e_t95XDnc2Xa59wow?e=v9M0oa' },
      { title: 'Github Repo', link: 'https://github.com/vipulSP2108/WebMastery-Studio/tree/main/SimCity' },
    ]
  },
  {
    cat: 'WEB',
    name: "Colab IITGn",
    date: "December '24 - February '25",
    role: "Web Developer",
    VideoShowCase: Colab,
    // Showcase: "path/to/showcase-image.jpg", // Replace with actual image path if available
    Overview: {
      role: "Web Developer — Frontend Development, Backend Integration, UI/UX Design",
      team: [
        { name: "Ananthu JP" }, // https://www.linkedin.com/in/ananthujp/
      ],
      timeline: "3 months",
      overview: "I was responsible for developing a modern, responsive website to showcase the lab’s cutting-edge research and development projects. My work included frontend development using React and integrating backend services to display real-time data related to ongoing projects and events."
    }, extras: [
      { title: 'Colab Website', link: 'https://events.iitgn.ac.in/2023/ioh/#/' },
    ]
  },




  // ------------------- Same Field/cat but basic -------------------


  // {
  //   cat: 'APP',
  //   VideoShowCase: OutsIIT,
  //   role: "Team Lead",
  //   name: "Signal Processing Course Project",
  //   date: "August 2023 - November 2023",
  //   ShowCase: Project,
  //   Overview: {
  //     role: "Student — Signal Processing and Sensor Integration",
  //     team: "Individual project",
  //     timeline: "3 Months, Completed in November 2023",
  //     overview: "Gained expertise in integrating hardware sensors (gyroscope, accelerometer, GPS, microphone, antenna) and mastering seamless data transmission between the IoT system and mobile devices. Successfully developed and integrated sensors for enhanced child safety monitoring.",
  //   },
  //   Highlights: {
  //     highlight: "Expertise in integrating sensors and managing data transmission for improved monitoring and safety applications.",
  //     highlightShow: [
  //       // { image: SignalProcessing, imageAltText: "Sensor Data", imageDescription: "Data from integrated hardware sensors." },
  //       // { image: SignalProcessing, imageAltText: "IoT System", imageDescription: "Real-time data transmission and monitoring." },
  //     ],
  //   },
  // },
  // {
  //   cat: 'APP',
  //   VideoShowCase: OutsIIT,
  //   role: "Team Lead",
  //   name: "Personal Portfolio",
  //   date: "August 2023",
  //   ShowCase: Project,
  //   Overview: {
  //     role: "Self — Website Development",
  //     team: "Self-driven project",
  //     timeline: "Completed in August 2023",
  //     overview: "Designed and implemented a personal website to showcase skills and projects using HTML, CSS, and JavaScript. Developed proficiency in web development technologies and independently managed the creation and launch of the website, establishing an online presence.",
  //   },
  //   Highlights: {
  //     highlight: "Created a personal website to effectively display skills and projects using modern web development techniques.",
  //     highlightShow: [
  //       // { image: PersonalPortfolio, imageAltText: "Website Homepage", imageDescription: "Homepage of the personal portfolio website." },
  //       // { image: PersonalPortfolio, imageAltText: "Project Gallery", imageDescription: "Gallery of showcased projects on the website." },
  //     ],
  //   },
  // },







  // ------------------- Diff Field/cat but Major -------------------

  //   {   
  //     cat: 'APP',
  //    VideoShowCase: OutsIIT,
  //    role: "Team Lead",
  //    name: "Drone Data Processing and Modeling",
  //    date: "April 2023",
  //    ShowCase: Project,
  //    Overview: {
  //      role: "Research Assistant — RTK Surveying, Advanced Image Processing",
  //      team: "Prof. Pankaj Khanna, IIT Gandhinagar",
  //      timeline: "4 Months, Completed in April 2023",
  //      overview: "This project focused on drone-based topographic mapping using RTK surveying combined with advanced image processing techniques. The outcome included precise 3D models, orthomosaics, and Digital Elevation Models (DEMs) used for urban planning, infrastructure monitoring, and environmental studies.",
  //    },
  //    Highlights: {
  //      highlight: "Demonstrates the efficiency of integrating drone technology with RTK surveying for high-precision topographic mapping.",
  //      highlightShow: [
  //        // { image: DroneDataProcessing, imageAltText: "Mapping Output", imageDescription: "Detailed 3D model generated from drone data." },
  //        // { image: DroneDataProcessing, imageAltText: "Mapping Output", imageDescription: "Orthomosaic and DEMs used for analysis." },
  //      ],
  //    },
  //  },
  // {
  //   cat: 'APP',
  //   VideoShowCase: OutsIIT,
  //   role: "Team Lead",
  //   name: "Bio Align",
  //   date: "August 2023 - November 2023",
  //   ShowCase: Project,
  //   Overview: {
  //     role: "Self — Python Implementation, Algorithm Execution",
  //     team: "Self-driven project",
  //     timeline: "3 Months, Completed in November 2023",
  //     overview: "Developed a Python implementation of the Needleman-Wunsch Algorithm for global sequence alignment. This project focused on learning and executing the algorithmic steps to globally align DNA, RNA, and protein sequences, ensuring optimal alignment through dynamic programming. Verified results using NCBI Sequence Alignment tool, contributing to bioinformatics and computational biology.",
  //   },
  //   Highlights: {
  //     highlight: "Enhanced bioinformatics capabilities through a custom implementation of the Needleman-Wunsch Algorithm for global sequence alignment.",
  //     highlightShow: [
  //       // { image: BioAlign, imageAltText: "Algorithm Interface", imageDescription: "Python implementation of the Needleman-Wunsch Algorithm." },
  //       // { image: BioAlign, imageAltText: "Algorithm Results", imageDescription: "Alignment results verified using NCBI Sequence Alignment tool." },
  //     ],
  //   },
  // },






  // ------------------- Other Field/cat and basic -------------------



  // {
  //   cat: 'APP',
  //   VideoShowCase: OutsIIT,
  //   role: "Team Lead",
  //   name: "Data Narratives Course Project",
  //   date: "January 2023 - April 2023",
  //   ShowCase: Project,
  //   Overview: {
  //     role: "Student — Applied Probability Distributions, Data Visualization",
  //     team: "Individual project",
  //     timeline: "4 Months, Completed in April 2023",
  //     overview: "Completed a project based on applied probability distributions and basic data visualization. Developed advanced skills in probability, statistics, and data visualization using Python. Utilized Pandas, NumPy, Matplotlib, and SciPy libraries for effective data organization, analysis, and interpretation.",
  //   },
  //   Highlights: {
  //     highlight: "Developed proficiency in probability, statistics, and data visualization through hands-on project work.",
  //     highlightShow: [
  //       // { image: DataNarratives, imageAltText: "Data Visualization", imageDescription: "Visualization of data using Python libraries." },
  //       // { image: DataNarratives, imageAltText: "Data Analysis", imageDescription: "Statistical analysis and results interpretation." },
  //     ],
  //   },
  // },
  // {
  //   cat: 'APP',
  //   VideoShowCase: OutsIIT,
  //   role: "Team Lead",
  //   name: "Numerical Analysis of Euler-Bernoulli Beam",
  //   date: "August 2023 - November 2023",
  //   ShowCase: Project,
  //   Overview: {
  //     role: "Member — Finite Difference Method Application",
  //     team: "Collaborative project",
  //     timeline: "3 Months, Completed in November 2023",
  //     overview: "Applied the Finite Difference Method (FDM) for analyzing beam deflection cases. Developed expertise in utilizing FDM for structural analysis, specifically for beams. Implemented FDM techniques to analyze cantilevered and simply supported beams, gaining insights into beam deflection behavior.",
  //   },
  //   Highlights: {
  //     highlight: "Applied FDM techniques to enhance understanding of beam deflection behavior in structural analysis.",
  //     highlightShow: [
  //       // { image: BeamAnalysis, imageAltText: "Beam Deflection", imageDescription: "Finite Difference Method applied to beam deflection analysis." },
  //       // { image: BeamAnalysis, imageAltText: "FDM Visualization", imageDescription: "Visualization of beam deflection using FDM techniques." },
  //     ],
  //   },
  // },
  // {
  //     cat: 'APP',
  //     VideoShowCase: OutsIIT,
  //     role: "Team Lead",
  //     name: "SensePad",
  //     date: "August 2023 - November 2023",
  //     ShowCase: Project,
  //     Overview: {
  //       role: "Leader — Accessibility Device Development",
  //       team: "Collaborative project",
  //       timeline: "4 Months, Completed in November 2023",
  //       overview: "Directed the development of SensePad, a project aimed at revolutionizing keyboard accessibility for the blind. Managed model-making and programming, resulting in a fully functional 10-key keyboard with tactile features for blind users.",
  //     },
  //     Highlights: {
  //       highlight: "Revolutionized keyboard accessibility with SensePad, providing a fully functional tactile keyboard for blind users.",
  //       highlightShow: [
  //         // { image: SensePad, imageAltText: "SensePad Keyboard", imageDescription: "10-key keyboard designed for accessibility." },
  //         // { image: SensePad, imageAltText: "Tactile Features", imageDescription: "Detailed view of tactile features and design." },
  //       ],
  //     },
  //   },
  // {
  //   cat: 'APP',
  //   VideoShowCase: OutsIIT,
  //   role: "Team Lead",
  //   name: "EcoFarm",
  //   date: "May 2023 - August 2023",
  //   ShowCase: Project,
  //   Overview: {
  //     role: "Leader — Automated Water Conservation",
  //     team: "Collaborative project",
  //     timeline: "4 Months, Completed in August 2023",
  //     overview: "Led the development of EcoFarm, a prototype for automated water conservation in agriculture. Developed sensor-based technology to automate plant watering, ensuring efficient water distribution and addressing uneven watering issues.",
  //   },
  //   Highlights: {
  //     highlight: "Implemented a sensor-based prototype for automated water conservation, improving efficiency in agriculture.",
  //     highlightShow: [
  //       // { image: EcoFarm, imageAltText: "Water Conservation Prototype", imageDescription: "Prototype for automated plant watering." },
  //       // { image: EcoFarm, imageAltText: "Sensor Technology", imageDescription: "Detailed view of sensor technology used in the prototype." },
  //     ],
  //   },
  // },
  // {
  //   cat: 'APP',
  //   VideoShowCase: OutsIIT,
  //   role: "Team Lead",
  //   name: "VibraSense",
  //   date: "January 2023 - April 2023",
  //   ShowCase: Project,
  //   Overview: {
  //     role: "Student — Vibration Protection Prototype Development",
  //     team: "Individual project",
  //     timeline: "4 Months, Completed in April 2023",
  //     overview: "Developed a prototype to safeguard objects from vibrations. Implemented precise measurement techniques and real-time alert systems to prevent damage from vibrations, ensuring the integrity of objects.",
  //   },
  //   Highlights: {
  //     highlight: "Created a prototype for vibration protection, utilizing precise measurement techniques and real-time alerts to prevent damage.",
  //     highlightShow: [
  //       // { image: VibraSense, imageAltText: "Vibration Protection", imageDescription: "Prototype for safeguarding objects from vibrations." },
  //       // { image: VibraSense, imageAltText: "Measurement Techniques", imageDescription: "Precise measurement and alert system for vibration protection." },
  //     ],
  //   },
  // }
];
