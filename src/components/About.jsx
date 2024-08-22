import React from 'react';
import AboutImage from '../assets/AboutUs.svg'; // Update with your image path

const About = () => {
    return (
        <div className="bg-gradient-to-b from-transparent to-black custom-blur text-white p-10">
            <div className="flex flex-col md:flex-row items-center">
                {/* Left Half: Image */}
                <div className="w-full md:w-1/2 flex justify-center items-center hidden md:flex">
                    <img src={AboutImage} alt="About Image" className="max-w-full max-h-full rounded-lg" />
                </div>
                {/* Right Half: Text */}
                <div className="w-full md:w-1/2 flex flex-col items-center mt-4 md:mt-0">
                    <div className="w-full max-w-2xl text-center">
                        <div className='text-6xl font-bold mb-5 text-white font-rampart text-center'>
                            <span className="bg-clip-text text-transparent bg-gradient-to-bl from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                                About
                            </span>
                        </div>
                        <div className='text-6xl font-bold mb-5 text-white font-rampart text-center'>
                            <span className="bg-clip-text text-transparent bg-gradient-to-bl from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                                Section
                            </span>
                        </div>
                        <p className="mt-6 text-lg leading-relaxed font-titillium">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet dolores quia magnam nobis quidem necessitatibus nemo sit, doloremque quos blanditiis!
                        </p>

                        <p className="mt-4 text-lg leading-relaxed font-titillium">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore accusantium deleniti ab pariatur odit impedit ipsa nesciunt quia repudiandae? Aliquid quidem rerum ipsam autem dolorem dolores quibusdam ipsa, dolore earum.
                        </p>

                        <p className="mt-4 text-lg leading-relaxed font-titillium">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quasi ex unde, perferendis sed dolor deserunt! Sequi praesentium in impedit porro placeat excepturi aliquam magnam laboriosam architecto maiores, rem incidunt!
                        </p>

                        <p className="mt-4 text-lg leading-relaxed font-titillium">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium molestias repellat blanditiis ipsum quia voluptatibus recusandae corrupti dicta tenetur culpa!
                        </p>
                        <p className="mt-4 text-4xl font-bold leading-relaxed font-titillium">
                            #YourMoto
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
