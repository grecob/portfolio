/* eslint-disable no-unused-vars */
import React from 'react'
import WorkItem from './WorkItem'

const workExperienceData=[
    {
        startMonth: "January",
        startYear: 2023,
        endMonth: "May",
        endYear: 2023,
        title: 'Undergraduate Research Assistant',
        duration: '5 months',
        details:'• Utilized Support Vector Machines (SVMs) to develop predictive models aimed at identifying students at risk of failing their courses, enhancing early intervention efforts.' +
                '• Conducted comprehensive data analysis and modeling, demonstrating proficiency in data science methodologies and machine learning techniques.' +
                '• Developed and delivered presentations to faculty and peers showcasing research outcomes and the potential impact on student success initiatives.'
    },

    {
        startMonth: "January",
        startYear: 2022,
        endMonth: "Current",
        endYear: null,
        title: 'Produce Clerk',
        duration: '2 years 2 months',
        details:
                '• Provide detailed customer service, demonstrating strong communication skills and the ability to resolve customer issues effectively.' +
                '• Work in a team-oriented environment, collaborating with colleagues to achieve business goals.' +
                '• Manage time efficiently while balancing work responsibilities with academic commitments.'

    },
]

const WorkExperience = () => {
    return (
        <div id='workExperience' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work Experience </h1>
            {workExperienceData.map((item, index) => (
                <WorkItem key={index} startMonth={item.startMonth} startYear = {item.startYear}
                    endMonth={item.endMonth} endYear={item.endYear} title={item.title}
                    duration={item.duration} details={item.details} />
            ))}
        </div>
    )
}   

export default WorkExperience