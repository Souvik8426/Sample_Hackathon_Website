import React from "react";
import Navbar from "./components/Navbar";
import { Svg1, Svg2, Svg3, Svg4, Svg5, Svg6 } from "./components/Svgs";
import Sponsors from "./components/Sponsors";
import TechEvents from "./components/TechEvents";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import FAQs from "./components/FAQ";
import About from "./components/About";
import logo from "./assets/Logo.png";
import logo2 from "./assets/StretchedLogo.png";
import HeaderButton from "./components/HeaderButton";
import HeaderImage from "./assets/HeaderImage.svg";

import "./App.css";

const App = () => {
  const svgList = [Svg1, Svg2, Svg3, Svg4, Svg5, Svg6]; // Add the SVGs you want to display here for Sponsors

  return (
    <div className="bg-transparent">
      <Navbar
        sections={[
          { text: "Home", id: "hero" },
          { text: "Events", id: "tech-events-section" },
          { text: "Gallery", id: "gallery-section" },
          { text: "Contact us", id: "footer-section" },
        ]}
      />
      <div className="App-container">
        <header id="hero" className="App-header">
          <img src={logo} width="175" height="85" alt="Datatrix Image" />
          <h1>Presents</h1>
          <img src={logo2} height="20rem" alt="Datathon Image" />
          <h2>Details of the venue and the dates</h2>
          <div className="App">
            <HeaderButton />
          </div>
        </header>
        <div className="Image-container bg-transparent hidden md:block">
          <img src={HeaderImage} alt="SVG Image" className="w-full h-full" />
        </div>
      </div>
      <div id="about-section">
        <About />
      </div>
      <div className="text-white">
        <div id="sponsors-section">
          <Sponsors svgs={svgList} />
        </div>
      </div>
      <div className="text-white custom-blur">
        <div id="tech-events-section">
          <TechEvents />
        </div>
      </div>
      <div id="timeline-section">
        <Timeline />
      </div>
      <div className="custom-blur">
        <div id="gallery-section">
          <Gallery />
        </div>
      </div>
      <div className="bg-transparent">
        <div id="faqs-section">
          <FAQs />
        </div>
      </div>
      <div id="footer-section">
        <Footer />
      </div>
    </div>
  );
};

export default App;