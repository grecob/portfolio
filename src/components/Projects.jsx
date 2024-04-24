/* eslint-disable no-unused-vars */
import React from 'react'
import ProjectItem from './ProjectItem'
import projectOneImg from '../assets/mogicianPreview.png'

const Projects = () => {
    return (
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
            <p className='text-center py-8'>
                This is some text about my projects
            </p>

            <div className='grid sm:grid-cols-2 gap-12' style={{transition: 'margin 0.3s ease'}}>
                <ProjectItem img={projectOneImg} title='Mogician' />
                <ProjectItem img={projectOneImg} title='Mogician' />
                <ProjectItem img={projectOneImg} title='Mogician' />
                <ProjectItem img={projectOneImg} title='Mogician' />
            </div>

        </div>
    )
}

export default Projects