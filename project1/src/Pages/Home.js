import React from "react";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Divider from "../components/Divider/Divider";
import Services from "../components/Services/Services";
import Barbers from "../components/Barbers/Barbers";
import Footer from "../components/Footer/Footer";
function Home() {
  return (
    <div style={{ backgroundColor: "#EFEFEF" }}>
      
      <Hero />
      <About />
      <Divider />
      <Services />
      <Divider />
      <Barbers />
      <Footer />
    </div>
  );
}

export default Home;
