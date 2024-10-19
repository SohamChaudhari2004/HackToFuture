// FAQ.jsx
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    "Is there an app to improve image quality?",
    "Is it possible to increase image quality?",
    "How do I upscale an image to 4k?",
    "How to upscale an image without losing quality?",
    "How to upscale an image?"
  ];

  return (
    <div className="max-w-xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-300">
          <button
            className="w-full text-left py-4 flex justify-between items-center focus:outline-none"
            onClick={() => toggleFAQ(index)}
          >
            <span className="text-lg">{faq}</span>
            <svg
              className={`w-5 h-5 transform transition-transform ${
                openIndex === index ? "rotate-180" : "rotate-0"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openIndex === index && (
            <div className="p-4 text-gray-600">
              Here is the answer to the question: "{faq}".
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
