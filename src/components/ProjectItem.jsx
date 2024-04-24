/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const ProjectItem = ({ img, title }) => {
    return (
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-white to-[#001b5e] hover:z-10'>
            <img src={img} alt="/" className='rounded-xl group-hover:opacity-10' />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2xl font-bold text-white tracking-wider text-center'>
                    {title}
                </h3>
            <p className='pb-4 pt-2 text-white text-center'>Hello</p>
            <a href='https://mogician-staging-5ea0f5aebd28.herokuapp.com/' target='_blank'>
                <p className='text-center p-3 rounded-lg bg-white text-gray-700 cursor-pointer text-lg'>More Info</p>
            </a>
            </div>

        </div>
    )
}

export default ProjectItem