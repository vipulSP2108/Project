import React from 'react'
import Work from './Work';
import imageMy from '../assets/My.jpg';

import SparshBhashi from '../assets/SparshBhashi.png';
import OutsIIT from '../assets/OutsIIT.png';
import Cities from '../assets/Cities.png';
import RentHouse from '../assets/RentHouse.png';
import MoboDashboard from '../assets/MoboDashboard.png';


import './Home.css';

const imgSources = [SparshBhashi, OutsIIT, Cities, RentHouse, MoboDashboard];
const outlets = [
    { cat: 'EMB', name: "SparshBhashi", companyName: "Company XYZ", category: "Team Lead" },
    { cat: 'APP', name: "OutsIIT", companyName: "Company XYZ", category: "Team Lead" },
    { cat: 'WEB', name: "Cities", companyName: "Another Company", category: "Self Challenge" },
    { cat: 'WEB', name: "Rent House", companyName: "Yet Another Company", category: "Self Challenge" },
    { cat: 'APP', name: "Mobo Dashboard", companyName: "Company ABC", category: "Self Challenge" },
];

export default function Projects2() {
    return (
        <div style={{ userSelect: 'none' }} className=' z-0 flex flex-col  px-16 my-12  '>
            <div
                className=' z-30 flex-1 flex flex-col justify-center rounded-2xl'
                id='glasses'
                style={{ paddingTop: '90px', paddingBottom: '130px' }}
            >
                <div className='flex items-center justify-center mb-12'>
                    <span style={{ fontFamily: 'Montserrat' }} className='uppercase text-[#888888]'>Explore Work</span>
                </div>

                <div style={{
                    padding: '0 4em',
                }}>
                    <Work imgSources={imgSources} outlets={outlets} />
                    <div id='info2' className=' flex flex-row gap-3 mt-3'>
                        <div className=' w-5 h-5 bg-white rounded-full' />
                        <div className=' w-5 h-5 bg-white rounded-full' />
                        <div className=' w-5 h-5 bg-white rounded-full' />
                    </div>
                </div>
            </div>
        </div>
    )
}
