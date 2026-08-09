// Home.js
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import { COLORS } from "./style/colors";
import Contact from "./Contact";
import Home from "./Home";
import GridBg from "../Components/GridBg";
import Cursor from "../Components/Cursor";
import Navbar from "../Components/Navbar";
import Grid from "./Grid";
import Movingbar from "../Components/Movingbar";
import Projects from "./Projects";
import Projects3D from "./Projects3D";
import Contactbar from "../Components/Contactbar";
import About from "./About";
import Work from "./Work";

import Between1 from "../Components/Between1";
import Between2 from "../Components/Bettween2";
import FooterCostom from "../Components/FooterCostom";

import History from "./History";
import Projects2 from "./Projects2";
import ProjectDetails from "./ProjectDetails";

import RentHouse from '../assets/projects/RentHouse.png';
import Project from '../assets/projects/Project.png';


import OutsIIT from '../assets/projects/OutsIIT.png';
import CitiesDevGame from '../assets/projects/Cities.png';
import ChildSafetyMonitoring from '../assets/projects/Cities.png';
import ConnectSection from "../Components/ConnectSection";

import { sampleDataNew } from '../Data/sampleDataNew';
import NavbarBottom from '../Components/NavbarBottom';
import NavbarTop from '../Components/NavbarTop';

import './HomeScreen.css';
import { GlobalStateContext } from '../Context/GlobalStateProvider';
import AboutPhone from './AboutPhone';
import Projects2Phone from './Projects2Phone';
import { Experience } from '../Data/Experience';

function HomeScreen() {
    const navigate = useNavigate();

    const handleClick = (project) => {
        navigate('/ProjectDetails', { state: { project } });
    };

    const aboutRef = useRef(null);

    const { isTabletOrLaptop, setIsTabletOrLaptop } = useContext(GlobalStateContext);
    // const [isTabletOrLaptop, setIsTabletOrLaptop] = useState(true);

    const checkScreenSize = () => {
        if (window.innerWidth >= 600) {
            setIsTabletOrLaptop(true); // Show Contactbar
        } else {
            setIsTabletOrLaptop(false); // Hide Contactbar
        }
    };

    // Set the initial screen size on component mount
    useEffect(() => {
        checkScreenSize(); // Initial check
        window.addEventListener("resize", checkScreenSize); // Update on window resize

        return () => {
            window.removeEventListener("resize", checkScreenSize); // Clean up the event listener
        };
    }, []);


    const workRef = useRef(null); // Add workRef for Work section
    const contactRef = useRef(null); // Add contactRef for Contact section

    return (
        <div style={{ userSelect: "none" }}>
            {/* <Navbar /> */}
            <NavbarBottom />
            <NavbarTop
                aboutRef={aboutRef}
                workRef={workRef}
                contactRef={contactRef}
            />
            {isTabletOrLaptop && <Contactbar />}
            {/* <Contactbar id="show-on-tablet-laptop" /> */}
            <Home />
            {/* <Movingbar /> */}
            {/* <Between1 /> */}
            {/* {isTabletOrLaptop && } */}
            <div ref={aboutRef} >
                {isTabletOrLaptop ? <About /> : <AboutPhone />}
            </div>

            {isTabletOrLaptop && <Between2 />}
            <div ref={workRef} >
                {isTabletOrLaptop ? <Projects2 /> : <Projects2Phone noNavigation={true} textcont={'Explore Work'} sampleData={sampleDataNew} />}
            </div>
            {/* {isTabletOrLaptop && <Projects />} */}
            {isTabletOrLaptop && <Projects3D />}
            {/* <Between3/> */}
            {isTabletOrLaptop ? <History /> : <Projects2Phone noNavigation={true} textcont={'History as Devloper'} sampleData={Experience} />}
            <div ref={contactRef} />
            {/* <Contact /> */}
            {/* <Grid/> */}
            {/* <FooterCostom /> */}
            <ConnectSection />
        </div>
    );
}

export default HomeScreen;
