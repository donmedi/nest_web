"use client";

import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is NestPay?",
      answer:
        "At NestPay we’ve got a dedicated team to help you stay on top of your finance and help address any concerns or objectives.",
    },
    {
      question: "How does NestPay work?",
      answer:
        "NestPay works by providing seamless payment solutions and financial management tools tailored to your needs.",
    },
    {
      question: "Are my transactions secure?",
      answer:
        "Yes, NestPay uses industry-leading security measures to protect your transactions and personal information.",
    },
    {
      question: "How many accounts can be created on NestPay?",
      answer:
        "You can create multiple accounts on NestPay, depending on your requirements and plan.",
    },
    {
      question: "Are there additional charges?",
      answer:
        "NestPay is transparent with its fees. Additional charges depend on specific services chosen.",
    },
  ];

  return (
    <div id="faqs" className="container mx-auto py-14 px-5 ">
      <h2 className="text-4xl font-bold text-center w-full md:w-1/2 mx-auto mb-20 ">
        Have questions for us? We have just the right answers
      </h2>
      <div className="space-y-10">
        {faqItems.map((item, index) => (
          <div key={index} className="border-b ">
            <button
              onClick={() => toggleAnswer(index)}
              className="w-full text-left py-4 flex justify-between items-center  text-xl font-medium text-gray-800 focus:outline-none"
            >
              {item.question}
              <span className="text-xl">
                {activeIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ${
                activeIndex === index ? "max-h-40" : "max-h-0"
              }`}
            >
              <div className="py-2 px-4 mt-6 text-gray-600 text-[18px] bg-gray-50 rounded border-2 border-gray-300">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
