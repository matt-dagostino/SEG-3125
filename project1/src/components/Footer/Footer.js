import React from 'react'
import {ReactComponent as Logo} from '../../img/logo.svg';

function Footer() {
  return (
    <div className='mt-24 bg-black p-8 w-full'>
        <div className='h-full flex gap-12 justify-center items-start text-white font-work-sans'>
                <div className='flex gap-12'>
                    <Logo className='h-18'/>
                    <div className='flex flex-col'>
                    <p className='text-2xl w-1/2 mb-24'>550 Cumberland St, Ottawa ON K1N 6N5</p>
                <p className='underline '>+1 (613) 453 3092</p>
                <p className='underline'>hi@vintageshears.ca</p>
                    </div>
                </div>
            <div className='text-xs text-gray-300 mr-24'>
                <h4 className='uppercase text-sm'>hours</h4>
                <p>Monday - Saturday: 9:00AM to 9:00 PM</p>
                <p className='mb-32'>Sunday: 9:00 AM to 5:00 PM</p>
                <p>© 2024 Vintage Shears. All rights reserved. </p>
            </div>
            <div className='text-xs text-gray-300'>
            <h4 className='uppercase text-sm'>follow us</h4>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>LinkedIn</p>
                <p>Instagram</p>
            </div>

        </div>
      
    </div>
  )
}

export default Footer
