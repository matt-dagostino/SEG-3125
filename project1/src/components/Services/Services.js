import React from 'react'
import { ReactComponent as Adult } from "../../img/adulthaircut.svg";
import { ReactComponent as Student } from "../../img/studenthaircut.svg";
import { ReactComponent as Beard } from "../../img/beard.svg";
import { ReactComponent as Blade } from "../../img/blade.svg";
import Button from 'react-bootstrap/Button';

function Services() {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='font-barlow-black uppercase'>browse our services</h1>
      <p className='max-w-xl text-center mb-12 font-work-sans'>Our barbershop was established in 2004, after an ambitious Ottawa barber set out to recreate the feel of an old style traditional barbershop.</p>

      <div className='bg-white p-24 max-w-screen-lg shadow-md'>
        <div className='flex flex-col gap-20'>
            <div className='flex gap-24'>
                <div className='flex gap-8 w-1/2'>
                    <Adult />
                    <div className='flex flex-col'>
                        <h1 className='uppercase font-barlow-black text-2xl'>Adult haircut</h1>
                        <p className='font-work-sans'>Precision cuts for your unique style, ensuring confidence and sophistication with every visit.</p>
                        <p className='font-barlow-black text-2xl'>$32</p>
                    </div>  
                </div>
                <div className='flex gap-8 w-1/2'>
                    <Student />
                    <div className='flex flex-col'>
                        <h1 className='uppercase font-barlow-black text-2xl'>Student haircut</h1>
                        <p className='font-work-sans'>Trendy styles at student-friendly prices, keeping you sharp and stylish on any budget.</p>
                        <p className='font-barlow-black text-2xl'>$30</p>
                    </div>  
                </div>
            </div>
            <div className='flex gap-24'>
                <div className='flex gap-8 w-1/2'>
                    <Beard />
                    <div className='flex flex-col'>
                        <h1 className='uppercase font-barlow-black text-2xl'>haircut + beard trim</h1>
                        <p className='font-work-sans'>Complete grooming solutions, blending hair and facial hair for a polished look.</p>
                        <p className='font-barlow-black text-2xl'>$32</p>
                    </div>  
                </div>
                <div className='flex gap-8 w-1/2'>
                    <Blade />
                    <div className='flex flex-col'>
                        <h1 className='uppercase font-barlow-black text-2xl'>kids/senior haircut</h1>
                        <p className='font-work-sans'>Tailored cuts for all ages, providing comfort and style for every generation.</p>
                        <p className='font-barlow-black text-2xl'>$30</p>
                    </div>  
                </div>
            </div>
        </div>
      </div>
      <Button variant="primary" className="p-3 px-4 tracking-wide font-barlow-button uppercase mt-12" size="lg" href="/services" style={{ backgroundColor: '#90BDD7', borderRadius: 0, color: '#000', fontSize: '16px', border: 'none' }}>Book an appointment</Button>
    </div>
  )
}

export default Services
