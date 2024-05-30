import React from "react";
import { ReactComponent as AboutImg } from "../../img/about.svg";
import "../fonts.css";

function About() {
  return (
    <div className="px-48 mt-36">
      <div className="flex gap-16 w-full justify-center">
        <div className="w-1/3 flex items-center">
          <div className="flex flex-col gap-4">
            <h1 className="font-barlow-black uppercase">
              The only scissors only barbershop in ottawa
            </h1>
            <p className="font-work-sans">
              Step into a Timeless Era at Ottawa's Exclusive Scissors-Only
              Barbershop. Our Old-World Charm and Traditional Techniques Ensure
              Every Cut is a Masterpiece.
            </p>
            <div className="flex gap-4 font-barlow-black uppercase">
                <div className="flex flex-col w-1/3">
                    <h2>99 <span className="text-green-700">%</span></h2>
                    <p>customer satisfaction</p>
                </div>
                <div className="flex flex-col w-1/3">
                    <h2>20 <span className="text-green-700">+</span></h2>
                    <p>years of experience</p>
                </div>
                <div className="flex flex-col w-1/3">
                    <h2>73,000 <span className="text-green-700">+</span></h2>
                    <p>haircuts given</p>
                </div>
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <AboutImg />
        </div>
      </div>
    </div>
  );
}

export default About;
