import React from 'react';
import FAQImage from '../assets/FAQImage.svg';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

const FAQs = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const faqs = [
    {
      question: 'What is the theme of the hackathon?',
      answer: 'The theme of this hackathon is "Innovating for Social Good," where participants are encouraged to develop solutions that address real-world social challenges.',
    },
    {
      question: 'How long do we have to complete our project?',
      answer: 'Participants have 48 hours to complete and submit their projects. The hackathon starts at 9:00 AM on Saturday and ends at 9:00 AM on Monday.',
    },
    {
      question: 'Can I participate as an individual or do I need a team?',
      answer: 'You can participate either as an individual or in a team of up to 4 members. If you don’t have a team, we’ll help you find one during the event.',
    },
    {
      question: 'Are there any specific tools or technologies we must use?',
      answer: 'There are no restrictions on the tools or technologies you use. However, we encourage using open-source tools and frameworks to foster collaboration and innovation.',
    },
    {
      question: 'How will the projects be judged?',
      answer: 'Projects will be judged based on creativity, technical complexity, impact, and presentation. Bonus points will be given for projects that align closely with the hackathon theme.',
    },
    {
      question: 'What are the prizes for the winning teams?',
      answer: 'The winning teams will receive cash prizes, tech gadgets, and the opportunity to showcase their projects to industry leaders. Additionally, the top projects may receive support for further development.',
    },
    {
      question: 'Is there a participation fee for the hackathon?',
      answer: 'No, the hackathon is free to participate in. However, registration is mandatory to secure your spot.',
    },
  ];

  return (
    <div id="faq" className="py-12 flex flex-col-reverse lg:flex-row bg-gradient-to-b from-transparent to-black custom-blur">
      <div className="lg:w-1/3 flex items-center justify-center">
        <img src={FAQImage} alt="FAQ Image" className="w-full h-full hidden lg:block" />
      </div>
      <div className="w-full lg:w-2/3 px-8 md:w-full md:text-center">
        <div className='text-6xl font-bold mb-5 text-white font-rampart text-center'>
          <span className="bg-clip-text text-transparent bg-gradient-to-bl from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
            FAQs
          </span>
        </div>

        <div className="text-white max-w-2xl mx-auto font-titillium">
          {faqs.map(({ question, answer }, index) => (
            <Accordion
              key={index}
              open={open === index + 1}
              icon={<Icon id={index + 1} open={open} />}
            >
              <AccordionHeader onClick={() => handleOpen(index + 1)} className="py-[1rem] text-lg font-medium">
                {question}
              </AccordionHeader>
              <AccordionBody className="text-base text-left p-4">
                {answer}
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
