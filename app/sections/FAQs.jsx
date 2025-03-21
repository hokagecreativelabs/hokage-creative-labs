"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const qnas = [
  { question: "What types of development services do you offer?", answer: "We offer full-stack development, frontend engineering, backend systems, and more." },
  { question: "How do you ensure the quality of your projects?", answer: "We follow best practices, code reviews, and testing protocols." },
  { question: "What is your development process like?", answer: "We follow agile methodologies, keeping you updated at every step." },
  { question: "Can you work with existing platforms?", answer: "Yes, we can seamlessly integrate with existing systems." },
  { question: "How do you handle project timelines?", answer: "We set realistic deadlines and ensure timely communication and updates." },
  { question: "How often will I receive updates on the project?", answer: "We provide regular updates through your preferred communication channel." },
];

export default function QnASection() {
  const [activeIndices, setActiveIndices] = useState(Array(qnas.length).fill(false));

  const toggleQnA = (index) => {
    setActiveIndices((prevIndices) => {
      const newIndices = [...prevIndices];
      newIndices[index] = !newIndices[index];
      return newIndices;
    });
  };

  return (
    <section className="w-full px-4 md:py-32 py-12 md:px-8 lg:px-16 flex justify-center items-center">
      <div className="max-w-[1088px] flex flex-col items-center gap-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-center">
          <span className="text-black">Common</span>{" "}
          <span className="text-gray-500">Questions</span>
        </h2>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          {qnas.map((qna, index) => (
            <div
              key={index}
              className={`w-full p-6 md:p-8 border rounded-3xl cursor-pointer transition-all duration-300 ${
                activeIndices[index] ? "bg-gray-100" : "h-auto"
              }`}              
              onClick={() => toggleQnA(index)}
            >
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">{qna.question}</span>
                {activeIndices[index] ? <FiMinus /> : <FiPlus />}
              </div>
              {activeIndices[index] && (
                <div className="overflow-hidden transition-max-height duration-300 ease-in-out">
                  <hr className="my-4 border-gray-300" />
                  <p className="mt-2 text-gray-600">{qna.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
