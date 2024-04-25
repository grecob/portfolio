/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const TitleSection = ({title}) => {
    return (
        <div className="inline-flex items-center w-full">
            <h1 className='text-4xl font-bold text-justify  mb-4 text-[#001b5e]'>{title}</h1>
            <hr className=" h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 md:w-[50%] w-[100%] opacity-50" />
        </div>
    );

};

export default TitleSection