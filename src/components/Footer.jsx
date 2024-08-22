import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-black font-titillium">
      <div className="px-4 p-4 md:py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <span className="flex justify-center sm:justify-start sm:flex-none px-4">
            <img src={logo} alt="Datatrix Logo" width="50" height="50" className="inline-block mx-2" />
            <img src={logo} alt="SRM Logo" width="50" height="24" className="inline-block mx-2" />
          </span>

          <ul className="flex flex-wrap justify-center sm:justify-end items-center mt-4 sm:mt-0 text-sm font-medium text-gray-500 dark:text-gray-400">
            <li>
              <a href="#about-section" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#gallery-section" className="hover:underline me-4 md:me-6">
                Gallery
              </a>
            </li>
            <li>
              <a href="#footer-section" className="hover:underline">
                {/* i dont have a contact us section soo make it  */}
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <span className="relative flex justify-center py-5">
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
        </span>
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          credits to whomever it may concern
        </span>
      </div>
    </footer>
  );
};

export default Footer;
