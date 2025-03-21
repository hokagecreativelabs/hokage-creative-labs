"use client";
import { useState } from "react";
import { BsChatDots } from "react-icons/bs"; // Import chat icon
import Chat from "../Chat";

export default function ChatIcon() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
      >
        <BsChatDots size={24} />
      </button>

      {/* Chat Box */}
      {isOpen && (
        <div className="fixed bottom-16 right-6 bg-white border shadow-lg rounded-lg w-80 p-4">
          <Chat />
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          >
            ✖
          </button>
        </div>
      )}
    </>
  );
}
