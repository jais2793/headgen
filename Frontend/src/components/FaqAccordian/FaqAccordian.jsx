import React, { useState } from 'react';
import { IoIosAddCircleOutline } from "react-icons/io";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative mb-4">
      <h6 className="mb-0">
        <button
          className="bg-gradient-to-r from-[#1b198d] via-[#1c1a9c] to-[#2522b8] text-[#F1F1F1] rounded-lg h-[58px] hover:from-[#15136d] hover:via-[#15137e] hover:to-[#17157c] relative flex items-center w-full p-4 text-left transition duration-300 cursor-pointer group"
          onClick={toggleAccordion}
        >
          <span>{question}</span>
          <IoIosAddCircleOutline size={32} className={`absolute right-4 transition duration-300 ${isOpen ? 'rotate-180' : ''} `  } />

        </button>
      </h6>
      <div
        className={`overflow-hidden ${isOpen ? 'max-h-full' : 'max-h-0'}`}
      >
        <div className="p-4 text-[16px] leading-relaxed bg-[#313235b9] text-[#F1F1F1]">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FaqAccordian = () => {
  const faqItems = [
    {
      question: 'What results can I expect?',
      answer: "For the best results, please upload a high-quality selfie following our instructions.Our engineers have crafted AI prompts for exceptional realistic results.As Generative AI evolves, we will continue improving our service."
    },
    {
      question: 'Can I have branded or custom style?',
      answer: "For custom styles and packages email us at support@headgen.ai.Perfect for corporate events or anyone needing a Headshot to match brand guidelines."
    },
    {
      question: 'Who are we?',
      answer: "We are serial entrepreneurs and AI enthusiasts, Ruark & Krasia Gordon. Ruark is a film director , photographer & Krasia is a full stack web developer."
    },

    {
      question: 'Can I get Free Headshots?',
      answer: "Yes, we love collabs , write to us at support@headgen.ai with your ideas. Share your photos on LinkedIn, Twitter, Instagram, or TikTok and tag/mention us! We will generate extra Images for you for free!"
    },

    // {
    //   question: 'Do you store our payment details?',
    //   answer: "Payment handled by Stripe. We do not store your payment details"
    // }

  ];

  return (
    <div>
      {faqItems.map((item, index) => (
        <FaqItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default FaqAccordian;