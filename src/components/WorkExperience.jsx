/* eslint-disable no-unused-vars */
import React from 'react'
import WorkItem from './WorkItem'
import TitleSection from './TitleSection'

const workExperienceData = [
    {
        startMonth: "January",
        startYear: 2023,
        endMonth: "May",
        endYear: 2023,
        title: 'Undergraduate Research Assistant',
        duration: '5 months',
        details: 'I utilized Support Vector Machines (SVMs) to develop predictive models that identify students at risk of failing their courses, enhancing early intervention efforts. This involved conducting comprehensive data analysis and modeling, where I demonstrated proficiency in various data science methodologies and machine learning techniques. Additionally, I developed and delivered presentations to faculty and peers, showcasing the outcomes of my research and its potential impact on student success initiatives.'
    },

    {
        startMonth: "January",
        startYear: 2022,
        endMonth: "Current",
        endYear: null,
        title: 'Produce Clerk',
        duration: '2 years 2 months',
        details: 'I provided detailed customer service, demonstrating strong communication skills and effective issue resolution, collaborated with colleagues in a team-oriented environment to achieve business goals, and managed time efficiently while balancing work responsibilities with academic commitments.'
    },
]

const WorkExperience = () => {
    return (
        <div id='workExperience' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <TitleSection title={'Work Experience'}/>
            {
                workExperienceData.map((item, index) => (
                    <WorkItem key={index} startMonth={item.startMonth} startYear={item.startYear}
                        endMonth={item.endMonth} endYear={item.endYear} title={item.title}
                        duration={item.duration} details={item.details} />
                ))
            }

        </div >
    )
}

export default WorkExperience