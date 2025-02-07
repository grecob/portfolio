/* eslint-disable no-unused-vars */
import React from 'react'
import TitleSection from './TitleSection'

const Contact = () => {
    return (
        <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <TitleSection title={'Contact'} />
            <p className='pb-4 pt-2 text-gray-600 text-center'>Thank you for making it this far!
            I am current looking for opportunities, whether it be a full-time job or freelance work.
            Send me a message, and I will get back to you as soon as possible!</p>

            <form action="https://getform.io/f/pamqjnpa" method='POST' encType='multipart/form-data'>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                    <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2'>Name</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='name' />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2'>Phone Number</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='phone' />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2'>Email</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='email' />
                    </div>

                    <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2'>Subject</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='email' />
                    </div>
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Message</label>
                    <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10' name='message' />
                </div>

                <button className='bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-md'>Send Message</button>
            </form>
        </div>
    )
}

export default Contact