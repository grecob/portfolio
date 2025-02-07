/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { FaGithubSquare } from 'react-icons/fa'

const ProjectItem = ({ img, title, description, link, techStack }) => {
    return (
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-[#001b5e] hover:z-10'>
            <img src={img} alt="/" className='rounded-xl group-hover:opacity-10' />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2xl font-bold text-white tracking-wider text-center'>
                    {title}
                </h3>
                <p className='pb-4 pt-2 text-white text-center'>{description}</p>
                <p>

                    <div className='flex justify-center'>
                        {techStack && techStack.map((TechIcon, index) => (
                            <TechIcon key={index} className='mx-2 mb-2 text-white text-3xl' />
                        ))}
                    </div>

                    <a href={link} target='_blank'>
                        <p className='text-center p-3 rounded-lg bg-white text-gray-700 cursor-pointer text-lg'>View Demo</p>
                    </a>

                </p>
            </div>
        </div>
    )
}

export default ProjectItem