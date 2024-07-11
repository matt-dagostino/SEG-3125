import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Zoom() {
  return (
    <div role="main">
      <Navbar location="zoom" />

      <div className="flex flex-col justify-center items-center pt-8 gap-4 pb-12">
        <h1 className="text-5xl font-extrabold uppercase text-heading-color text-center">
          Live Interactive Cooking Sessions with Us
        </h1>
        <p className="font-semibold text-heading-color">
          Join us live every Mondays, Wednesdays and Fridays at 6pm EST to cook
          together!
        </p>

        <div
          className="flex justify-center items-center bg-gray-200 rounded-lg overflow-hidden shadow-md w-1/2 mt-8"
          role="region"
          aria-label="Live Cooking Sessions"
        >
          <iframe
            className="w-full h-96"
            src="https://www.youtube.com/embed/O5l1SMavklI"
            title="Live Cooking Sessions"
            aria-label="Live Cooking Sessions Video Player"
            allowFullScreen
          ></iframe>
        </div>

        <p className="font-semibold text-heading-color text-sm pb-4">
          Since we aren't live currently, feel free to watch our previous
          sessions above!
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default Zoom;
