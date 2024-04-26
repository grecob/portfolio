/* eslint-disable no-unused-vars */
import React from 'react'
import ProjectItem from './ProjectItem'
import projectOneImg from '../assets/mogicianPreview.png'
import ProjectTwoImg from '../assets/javascryptionPreview.png'
import ProjectThreeImg from '../assets/sudokuSolver.png'
import ProjectFourImage from '../assets/projectFourPreview.png'
import TitleSection from './TitleSection'
import { FaGithub, FaJava } from 'react-icons/fa'
import { SiExpress, SiHeroku, SiJest, SiPostgresql, SiTypescript } from 'react-icons/si'
import { DiPostgresql, DiReact } from 'react-icons/di'
import { TbBrandCpp, TbBrandVite } from 'react-icons/tb'
import { IoLogoJavascript } from 'react-icons/io5'
import { BiLogoTailwindCss } from 'react-icons/bi'
const Projects = () => {
    return (
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <TitleSection title={'Projects'} />
            <p className='text-center py-8'>
                This is a collection of my projects that I have worked on over the years.
                There is plenty more in the works.
            </p>

            <div className='grid sm:grid-cols-1 gap-12' >

                <ProjectItem img={projectOneImg}
                    title='Mogician'
                    description="A workout plan creation & sharing application, with the ability to log and track your progress in the gym"
                    link='https://mogician-staging-5ea0f5aebd28.herokuapp.com/'
                    techStack={[SiTypescript, DiReact, SiPostgresql, SiExpress, SiJest, SiHeroku]}

                />


                <ProjectItem img={ProjectFourImage}
                    title='Portfolio'
                    description='A simple portfolio website to show off my skills!'
                    link=''
                    techStack={[IoLogoJavascript, DiReact, BiLogoTailwindCss, TbBrandVite]}

                />

                <ProjectItem img={ProjectThreeImg}
                    title='Sudoku Solver'
                    description='A sudoku solver using a simple backtracking algorithm '
                    link='https://github.com/grecob/SudokuSolver'
                    techStack={[TbBrandCpp]}

                />

                <ProjectItem img={ProjectTwoImg}
                    title='Javascryption'
                    description='A card battling game built in java'
                    link='https://github.com/CEN3031-Spring-2022/semester-projects-group-7'
                    techStack={[FaJava]}

                />


            </div>

        </div>
    )
}

export default Projects