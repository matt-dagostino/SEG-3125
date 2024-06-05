import React from "react";
import { ReactComponent as HeroImg } from "../../img/heropage.svg";
import Button from 'react-bootstrap/Button';
import "../fonts.css"
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";

function Hero() {
  return (
    <div className="flex flex-col items-center">
    <div class="relative h-screen text-white overflow-hidden">
      <div class="absolute inset-0">
        <HeroImg />
      </div>

      <div class="relative z-10 flex flex-col justify-center items-center h-full text-center">
        <div className="p-40"></div>
        <h1 class="text-5xl xl:text-6xl leading-tight uppercase font-barlow-black px-24 lg:px-40 xl:px-96">
          embrace excellence with our premier barbershop experience
        </h1>
        <p class="text-lg text-white font-work-sans mb-8">
          <strong>Vintage Shears Barbershop</strong> - Elevating Style, One Cut at a Time
        </p>
        <div className="text-sm flex gap-12 uppercase">
          <Button variant="primary" className="p-3 px-4 tracking-wide font-barlow-button" size="lg" href="/appointment" style={{ backgroundColor: '#90BDD7', borderRadius: 0, color: '#000', fontSize: '16px', border: 'none' }}>Book an appointment</Button>
          <Button variant="light" className="p-3 tracking-wide font-barlow-button" size="lg" href="/#service" style={{ border: '1px solid #ffffff', backgroundColor: 'transparent', borderRadius: 0, color: '#ffffff', fontSize: '16px' }}>Browse services</Button>
        </div>
      </div>
    </div>
    <div className="hidden md:flex bg-white shadow-md rounded-md -mt-16 z-10 w-1/2 flex gap-4 p-4 items-start">
      <div className="flex flex-col w-1/3 justify-center items-center gap-2">
        <div className="text-5xl">
          <IoLocationSharp/>
        </div>
        <h1 className="font-barlow-black uppercase text-2xl">address</h1>
        <div className="bg-green-200 h-1 w-24 rounded-sm"></div>
        <p className="font-barlow-thin uppercase text-center w-2/3 text-sm lg:text-base">550 Cumberland St, Ottawa, on k1n 6n5</p>
      </div>
      <div className="flex flex-col w-1/3 justify-center items-center gap-2">
        <div className="text-5xl">
          <FaPhone/>
        </div>
        <h1 className="font-barlow-black uppercase text-2xl">address</h1>
        <div className="bg-green-200 h-1 w-24 rounded-sm"></div>
        <p className="font-barlow-thin uppercase text-center text-sm lg:text-base">+ 1 (613) 453 3092</p>
      </div>
      <div className="flex flex-col w-1/3 justify-center items-center gap-2">
        <div className="text-5xl">
          <GoClockFill />
        </div>
        <h1 className="font-barlow-black uppercase text-2xl">address</h1>
        <div className="bg-green-200 h-1 w-24 rounded-sm"></div>
        <p className="font-barlow-thin uppercase text-center text-sm lg:text-base">Mon – Sat: 9AM – 9PM<br></br>Sun: 9AM – 5PM</p>
      </div>
    </div>
    </div>
  );
}

export default Hero;
