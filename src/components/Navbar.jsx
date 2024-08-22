import React, { useState } from 'react';
import GradientButton from './ButtonComponent';
import logo from '../assets/StretchedLogo.png';

const Navbar = ({ sections }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed w-full px-4 py-2 bg-transparent shadow-md lg:px-8 lg:py-4 backdrop-blur-sm z-50">
      <div className="flex justify-between items-center mx-auto text-white">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Datathon24"
            className="w-[300px] h-auto max-w-[600px] max-h-[100px]"
          />
        </div>
        <div className="hidden lg:flex space-x-6">
          {sections.map((section, index) => (
            <GradientButton key={index} text={section.text} onClick={() => scrollToSection(section.id)} />
          ))}
        </div>
        <button
          className="lg:hidden h-6 w-6"
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
        <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col space-y-4 py-4">
            {sections.map((section, index) => (
              <li key={index}>
                <GradientButton text={section.text} onClick={() => scrollToSection(section.id)} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;