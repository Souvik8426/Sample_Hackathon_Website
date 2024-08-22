import React from 'react';

const Card = ({
  eventName,
  eventDescription,
  eventImage,
  buttonText,
}) => {
  return (
    <div
      className="h-auto w-[18em] border-2 border-[rgba(75,30,133,0.5)] rounded-[1.5em] bg-gradient-to-br   rgba(70, 120, 180, 1), rgba(50, 100, 140, 1), rgba(95, 60, 140, 0.1) text-white font-nunito p-[1em] flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[20px] bg-opacity-80"
    >
      <div>
        <img
          src={eventImage}
          alt={eventName}
          className="h-auto w-full object-cover rounded-[1.5em]"
        />
        <h1 className="text-[2em] font-titillium font-bold">{eventName}</h1>
        <p className="text-[0.85em]">{eventDescription}</p>
      </div>

      <button
        className="h-fit w-fit px-[1em] py-[0.25em] border-[1px] rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]"
      >
        <p>{buttonText}</p>
        <svg
          className="w-6 h-6 group-hover:translate-x-[10%] duration-300"
          stroke="currentColor"
          strokeWidth="1"
          viewBox="0 0 24 24"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default Card;