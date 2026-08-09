import React from 'react'
import '../App.css';
import { MagneticIcon } from './MagneticIcon';
import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa6';

const iconMap = {
    FaInstagram: FaInstagram,
    FaLinkedinIn: FaLinkedinIn,
    FaGithub: FaGithub,
};

const ContactInfo = [
    {
        iconName: "FaInstagram",
        size: "25",
        background: "linear-gradient(135deg, #8316FA, #FC17CA, #FDC61C)",
        scale: 0.7,
        links:"https://instagram.com/vipulsp_21?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D",
    },
    {
        iconName: "FaLinkedinIn",
        size: "25",
        background: "#1576B4",
        scale: 0.7,
        links:'https://www.linkedin.com/in/vipul-patil-b76a65250',
    },
    {
        iconName: "FaGithub",
        size: "28",
        background: "#090909",
        scale: 0.7,
        links:"https://github.com/vipulSP2108",
    },
];

export default function Contactbar() {
    return (
        <div className='fixed z-[10000] bottom-12 left-14 ' style={{ gap: '1px' }}>
            {ContactInfo.map((item, index) => {
                const IconComponent = iconMap[item.iconName];
                return (
                    <div
                        key={index}
                        style={{ transform: `scale(${0.7})` }} className='  p-[7px] justify-between rounded-full'
                        id='glasses'
                    >
                        <a href={item.links} target="_main">
                            <MagneticIcon icon={IconComponent} size={item.size} background={item.background} />
                        </a>
                    </div>
                );
            })}
        </div>
    )
}
