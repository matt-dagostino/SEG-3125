import React from 'react'
import Footer from '../components/Footer/Footer'

function Appointment() {
  return (
    <div className='flex flex-col items-center pt-12 w-full' style={{ backgroundColor: "#EFEFEF" }}>
      <h1 className='font-barlow-black uppercase mb-12'>book an appointment</h1>
      <div className='w-1/2 font-work-sans flex flex-col'>
        <p className='-mb-1 text-xs'>Step 1 of 3</p>
        <p className='text-2xl font-bold'>Select service & barber</p>
        <div className='bg-white rounded-lg flex px-8 justify-center items-center'>
            <div className='w-1/2'>
                <p className='text-2xl font-bold'>Adult haircut</p>
                <p>$32</p>
            </div>
            <div className='w-1/2'>
                <p className='text-2xl font-bold'>Alec Landry</p>
                <p>Barber for 7 years</p>
            </div>

        </div>
      </div>
      
      
      
      
      
      
      
      
      
      <Footer />
    </div>
  )
}

export default Appointment
