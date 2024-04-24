/* eslint-disable no-unused-vars */
import { React, useState} from 'react'
import { AiOutlineMenu, AiOutlineHome, AiOutlineMail, AiOutlineProject} from 'react-icons/ai'
import { FiFile } from 'react-icons/fi';
import { MdWorkOutline } from 'react-icons/md';
const SideNav = () => {
    const [navActive, setNavActive] = useState(false)

    const handleNav = () => {
        setNavActive(!navActive)
    };

    const openResumeAndHandleNav = () => {
        window.open('/public/grecob_resume.pdf', '_blank');
        handleNav;
        console.log("AAA");
    };

    return (
        <div>
            <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden block'/>
            {
                navActive ? (
                    <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                    <a onClick={handleNav} href='#main' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 duira'>
                        <AiOutlineHome size={20}/>
                        <span className='pl-4'>Home</span>
                    </a>
                    
                    <a onClick={handleNav} href='#projects' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 duira'>
                        <AiOutlineProject size={20}/>
                        <span className='pl-4'>Projects</span>
                    </a>

                    <a onClick={handleNav} href='#workExperience' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 duira'>
                        <MdWorkOutline size={20}/>
                        <span className='pl-4'>Work Experience</span>
                    </a>
                    <a onClick={openResumeAndHandleNav} href='#main'className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 duira'>
                        <FiFile size={20}/>
                        <span className='pl-4'>Resume</span>
                    </a>

                    <a onClick={handleNav} href='#contact' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 duira'>
                        <AiOutlineMail size={20}/>
                        <span className='pl-4'>Contact</span>
                    </a>
                    
                    
                    </div>

                ) : ('')
            }

            <div className='md:block hidden fixed top-[25%] z-10'>
                <div className='flex flex-col'>
                    <a href='#main' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 duration-300'>
                        <AiOutlineHome size={20} />
                    </a>
                    <a href='#projects' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 duration-300'>
                        <AiOutlineProject size={20} />
                    </a>
                    <a href='#workExperience' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 duration-300'>
                        <MdWorkOutline size={20} />
                    </a>
                    <a href='#main' onClick={openResumeAndHandleNav} className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 duration-300'>
                        <FiFile size={20} />
                    </a>
                    <a href='#contact' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 duration-300'>
                        <AiOutlineMail size={20} />
                    </a>
                </div>
            </div>

        </div>
    );
};

export default SideNav