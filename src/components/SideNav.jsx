/* eslint-disable no-unused-vars */
import { React, useState } from 'react'
import { AiOutlineMenu, AiOutlineHome, AiOutlineMail, AiOutlineProject } from 'react-icons/ai'
import { MdWorkOutline } from 'react-icons/md';
import './SideNav.css'
import { LiaLinkedin } from 'react-icons/lia';
import { GrGithub } from 'react-icons/gr';
const SideNav = () => {
    const [navActive, setNavActive] = useState(false)

    const handleNav = () => {
        setNavActive(!navActive)
    };

    return (
        <div>
            <AiOutlineMenu onClick={handleNav} className='fixed top-4 right-4 z-[99] md:hidden block' />
            {
                navActive ? (
                    <div className='fixed w-full h-screen bg-black/25 flex flex-col justify-center items-center z-20'>
                        <a onClick={handleNav} href='#main' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineHome size={20} />
                            <span className='pl-4'>Home</span>
                        </a>

                        <a onClick={handleNav} href='#projects' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineProject size={20} />
                            <span className='pl-4'>Projects</span>
                        </a>

                        <a onClick={handleNav} href='#workExperience' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <MdWorkOutline size={20} />
                            <span className='pl-4'>Work Experience</span>
                        </a>

                        <a onClick={handleNav} href='#contact' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineMail size={20} />
                            <span className='pl-4'>Contact</span>
                        </a>
                        <a onClick={handleNav} href='https://www.linkedin.com/in/bryson-greco-15807a21b' target="_blank" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <LiaLinkedin size={20} />
                            <span className='pl-4'>LinkedIn</span>
                        </a>
                        <a onClick={handleNav} href='https://www.github.com' target="_blank" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <GrGithub size={20} />
                            <span className='pl-4'>GitHub</span>
                        </a>


                    </div>

                ) : ('')
            }
            {/* icons */}
            <div className='md:block hidden fixed top-[25%] z-10'>
                <div className='flex flex-col'>
                    <a href='#main' className=' nav-button rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 duration-300'>
                        <AiOutlineHome size={20} />
                    </a>
                    <a href='#projects' className='nav-button rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 duration-300'>
                        <AiOutlineProject size={20} />
                    </a>
                    <a href='#workExperience' className='nav-button rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 duration-300'>
                        <MdWorkOutline size={20} />
                    </a>
                    <a href='#contact' className='nav-button rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 duration-300'>
                        <AiOutlineMail size={20} />
                    </a>
                    <a href='https://www.linkedin.com/in/bryson-greco-15807a21b' target="_blank" className='nav-button rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 duration-300'>
                        <LiaLinkedin size={20} />
                    </a>
                    <a href='https://www.github.com/grecob' target="_blank" className='nav-button rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 duration-300'>
                        <GrGithub size={20} />
                    </a>
                </div>
            </div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />

        </div>


    );
};

export default SideNav