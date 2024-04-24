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
            <img className='w-full h-screen object-cover' src="https://cdn.videoplasty.com/animation/binary-code-rain-stock-animation-68206-1280x720.jpg" />
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

                    <p className=' pt-4 text-gray-800'>
                        <TypeAnimation
                            sequence={[
                                '',
                                1000,
                                'I am a recent graduate with a passion for coding.' +
                                ' I love learning new technologies and applying my ' +
                                'knowledge.',
                                10000,
                            ]}
                            wrapper="div"
                            speed={50}
                            style={{ fontSize: '2em', display: 'inline' }}
                            repeat={Infinity}
                        />
                    </p>

                    <div className='text-wrap flex justify-between pt-6 max-w-[400px] w-full'>

                        <TbBrandPython size={25} />
                        <TbBrandCpp size={25} />
                        <FaReact size={25} />
                        <RiJavascriptFill size={25} />
                        <BiLogoTypescript size={25} />
                        <SiTailwindcss size={25} />
                        <SiExpress size={25} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main