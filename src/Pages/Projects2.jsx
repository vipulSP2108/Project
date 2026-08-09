import React, { useContext } from 'react'
import Work from './Work';
import imageMy from '../assets/profile/My.jpg';

import SparshBhashi from '../assets/projects/SparshBhashi.png';
import OutsIIT from '../assets/projects/OutsIIT.png';
import Cities from '../assets/projects/Cities.png';
import RentHouse from '../assets/projects/RentHouse.png';
import MoboDashboard from '../assets/projects/MoboDashboard.png';

import { sampleDataNew } from '../Data/sampleDataNew';
import './Home.css';
import { GlobalStateContext } from '../Context/GlobalStateProvider';
import WorkMobo from './WorkMobo';

const imgSources = [SparshBhashi, OutsIIT, Cities, RentHouse, MoboDashboard];

export default function Projects2() {
    const { isTabletOrLaptop, setIsTabletOrLaptop } = useContext(GlobalStateContext);

    return (
        <div style={{ userSelect: 'none' }} className=' z-0 flex flex-col px-5 md:px-16 my-12  '>
            <div
                className=' z-30 flex-1 flex flex-col justify-center rounded-2xl pt-12 pb-16 md:pt-24 md:pb-32'
                id='glasses'
            // style={{ paddingTop: '90px', paddingBottom: '130px' }}
            >
                <div className='flex items-center justify-center mb-12'>
                    <span style={{ fontFamily: 'Montserrat' }} className='uppercase text-[#888888] text-base md:text-2xl'>Explore Work</span>
                </div>

                <div
                    className=' px-4 md:px-24'
                // style={{
                //     padding: '0 4em',
                // }}
                >
                    {isTabletOrLaptop ? <Work projectList={sampleDataNew} noNavigation={true} />
                        :
                        <WorkMobo projectList={sampleDataNew} noNavigation={true} />
                    }
                    {/* <Work projectList={sampleDataNew} noNavigation={true}/> */}
                    <div id='info2' className=' flex flex-row gap-3 mt-3'>
                        <div className='h-2 w-2 md:w-5 md:h-5 bg-white rounded-full' />
                        <div className='h-2 w-2 md:w-5 md:h-5 bg-white rounded-full' />
                        <div className='h-2 w-2 md:w-5 md:h-5 bg-white rounded-full' />
                    </div>
                </div>
            </div>
        </div>
    )
}
