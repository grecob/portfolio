/* eslint-disable no-unused-vars */
import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'

const Main = () => {
    return (
        <div id='main'>
            <img className='w-full h-screen object-cover' src="https://i.redd.it/einov412z1c11.png" />
            <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-grey-800'>I am... </h1>
                    <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
                        <TypeAnimation
                            sequence={[
                                'Johnny Danger',
                                1000,
                                'Seth Ambrose',
                                1000,
                                'HELL MODE CENA',
                                1000,
                                'Fart Lover Nolan',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '2em', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </h2>
                    <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                        <FaLinkedin className='cursor-pointer' size={20}/>
                        <FaInstagram className='cursor-pointer' size={20}/>
                        <FaGithub className='cursor-pointer' size={20}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main