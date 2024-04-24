/* eslint-disable no-unused-vars */
import React from 'react'
import ProjectItem from './ProjectItem'
import projectOneImg from '../assets/mogicianPreview.png'
import ProjectTwoImg from '../assets/javascryptionPreview.png'
import TitleSection from './TitleSection'

const Projects = () => {
    return (
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <TitleSection title={'Projects'} />
            <p className='text-center py-8'>
                This is some text about my projects
            </p>

            <div className='grid sm:grid-cols-2 gap-12' >

                <ProjectItem img={projectOneImg}
                    title='Mogician'
                    description='A workout sharing / logging application'
                    link='https://mogician-staging-5ea0f5aebd28.herokuapp.com/'
                />

                <ProjectItem img={ProjectTwoImg}
                    title='Javascryption'
                    description='A card battling game built in java'
                    link='https://github.com/CEN3031-Spring-2022/semester-projects-group-7'
                />

                <ProjectItem img={''}
                    title='Sudoku Solver'
                    description='A sudoku solver using a simple backtracking algorithm '
                    link='https://github.com/grecob/SudokuSolver'
                />

                <ProjectItem img={projectOneImg} title='Mogician' />
            </div>

        </div>
    )
}

export default Projects