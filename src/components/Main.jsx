/* eslint-disable no-unused-vars */
import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaPython } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import { FaReact } from "react-icons/fa";
import { TbBrandPython } from "react-icons/tb";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { BiCloudDownload } from 'react-icons/bi';
/*
                        <a href='https://www.linkedin.com/in/bryson-greco-15807a21b/' target='_blank'>
                            <FaLinkedin className='cursor-pointer' size={20} />
                        </a>
                        <a href='https://www.github.com/grecob' target='_blank'>
                            <FaGithub className='cursor-pointer' size={20} />
                        </a>
*/
const Main = () => {
    return (
        <div id='main'>

            <img className='w-full h-screen object-cover' src="" />
            <div className='w-full h-screen absolute top-0 left-0 bg-white/100'>
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center text-center'>
                    <h1 className='sm:text-2xl text-2xl font-bold text-[#001b5e]'>Hello, I am...</h1>
                    <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
                        <TypeAnimation
                            sequence={[
                                'Bryson Greco',
                                1000,
                            ]}
                            wrapper="div"
                            speed={50}
                            style={{ fontSize: '2em', display: 'inline' }}
                            repeat={Infinity}
                        />
                    </h2>

                    <div className=' pt-4 text-gray-800-italic'>
                        <TypeAnimation
                            sequence={[
                                '',
                                1000,
                                "I am a recent graduate with a Bachelor's Degree in Computer Science and an active Secret Security clearance. I am currently working as a Junior Software Developer " +
                                " and I am always looking to learn and improve. I am currently working on a 3D object viewer utilizing OpenGL and ImGui. I am also developing a full-stack social website " +
                                " with the goal of connecting college students with others at their campus, allowing the arrangement of study sessions and study groups."
,
                                100000,
                            ]}
                            wrapper="div"
                            speed={70}
                            style={{ fontSize: '1em', display: 'inline' }}
                            repeat={Infinity}
                        />
                    </div>

                    <div className='text-wrap flex justify-between pt-6 max-w-[400px] w-full'>

                        <TbBrandPython size={25} />
                        <TbBrandCpp size={25} />
                        <FaReact size={25} />
                        <RiJavascriptFill size={25} />
                        <BiLogoTypescript size={25} />
                        <SiTailwindcss size={25} />
                        <SiExpress size={25} />
                    </div>
                    <div className=' mt-4'>
                        <a href={'/public/grecob_resume.pdf'} target='_blank' className='resume-button'>
                            <div className='flex items-center justify-center p-3 bg-white outline rounded-sm outline-[#001b5e82] text-black cursor-pointer text-xl font-bold'>
                                Resume <BiCloudDownload size={24} className="ml-2" />
                            </div>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main