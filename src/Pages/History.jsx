import React, { useContext } from 'react'
import Work from './Work';
import OutsIIT from '../assets/projects/OutsIIT.png';
import imageMy from '../assets/profile/My.jpg';
import MoboDashboard from '../assets/projects/MoboDashboard.png';
import './Home.css';
import WorkMobo from './WorkMobo';
import { GlobalStateContext } from '../Context/GlobalStateProvider';
import { Experience } from '../Data/Experience';

const imgSources = [imageMy];
// const outlets = [
//     // { cat: 'APP', name: "OutsIIT", companyName: "Company XYZ", category: "Team Lead" },
//     // { cat: 'WEB', name: "CITES", companyName: "Another Company", category: "Self Challenge" },
//     // { cat: 'WEB', name: "Child", companyName: "Yet Another Company", category: "Self Challenge" },
//     // { cat: 'APP', name: "Mobo Dashboard", companyName: "Company ABC", category: "Self Challenge" },
//     { cat: 'IOS', name: "Banao Technologies", companyName: "Banao Technologies", role: "React Native IOS Devloper" },
//     { cat: 'APP', name: "Institute Building", companyName: "Institute Building", role: "Overall Lead" },
//     { cat: 'WEB', name: "REEFS Labs", companyName: "REEFS Labs", role: "Web Development" },
//     { cat: 'APP', name: "ArgyleEnigma Labs", companyName: "ArgyleEnigma Labs", role: "Design & Development" },
// ];

export default function Projects2() {
    const { isTabletOrLaptop, setIsTabletOrLaptop } = useContext(GlobalStateContext);

    return (
        <div style={{ userSelect: 'none' }} className=' z-0 flex flex-col px-5 md:px-16 my-12  '>
            <div
                className=' z-30 flex-1 flex flex-col justify-center rounded-2xl pt-6 pb-10 md:pt-24 md:pb-32'
                id='glasses'
            // style={{ paddingTop: '90px', paddingBottom: '130px' }}
            >
                <div className='flex items-center justify-center mb-12'>
                    <span style={{ fontFamily: 'Montserrat' }} className='uppercase text-[#888888] text-base md:text-2xl'>History as Devloper</span>
                </div>

                <div
                    className=' px-4 md:px-24'
                // style={{
                //     padding: '0 4em',
                // }}
                >
                    {isTabletOrLaptop ? <Work imgSources={imgSources} projectList={Experience} noImage={true} noNavigation={true}/>
                        :
                        <WorkMobo imgSources={imgSources} projectList={Experience} noImage={true} noNavigation={true}/>
                    }
                    {/* <div id='info2' className=' flex flex-row gap-3 mt-3'> */}
                        {/* <div className=' w-5 h-5 bg-white rounded-full' />
                        <div className=' w-5 h-5 bg-white rounded-full' />
                        <div className=' w-5 h-5 bg-white rounded-full' /> */}
                        {/* <text>yeh dil maange more!!!</text> */}
                    {/* </div> */}
                </div>
            </div>
        </div>

    )
}
