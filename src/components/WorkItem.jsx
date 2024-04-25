/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const WorkItem = ({ startMonth, startYear, endMonth, endYear, title, duration, details }) => {
    return (
        <ol className='flex flex-col md:flex-row relative border-l border-stone-400'>
            <li className='mb-10 ml-4'>
                <div className='absolute w-3 h-3 bg-stone-400 rounded-full mt-1.5 -left-1.5 border-white' />
                <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:tex-sm'>

                    <span className='rounded-md shadow-md inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-mb'>
                        <span>{startMonth} {startYear} </span>
                    </span>

                    <span className='text-lg font-bold'>-</span>

                    <span className='rounded-md shadow-md inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-mb'>
                        <span>{endMonth} {endYear}</span>
                    </span>
                </p>

                <span className='text-xl font-semibold text-[#001b5e]'>{title}</span>
                <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>

                    <span className='my-1 font-normal leading-none italic text-stone-400'> {duration}</span>

                    <span className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm' />
                    <br />

                    <span className='my-2 text-base font-normal text-stone-500'>{details}</span>
                </p>
            </li>
        </ol>
    )
}
export default WorkItem