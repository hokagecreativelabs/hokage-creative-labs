"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

// Lazy load the Carousel only when needed (no SSR)
const Carousel = dynamic(() => import("./../components/ui/Carousel"), { ssr: false });

const images = [
  "/optimized/itl-600.webp",
  "/optimized/MP-600.webp",
  "/optimized/daylee-600.webp",
  "/optimized/kings-600.webp",
];

const Hero = () => {
  const [showCTA, setShowCTA] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const typingText = "Hokage Creative Labs";

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
  }, []);

  useEffect(() => {
    if (textIndex < typingText.length) {
      const typingTimeout = setTimeout(() => {
        setDisplayedText((prev) => prev + typingText[textIndex]);
        setTextIndex((prev) => prev + 1);
      }, 10);
      return () => clearTimeout(typingTimeout);
    }
  }, [textIndex]);

  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (Math.abs(currentScroll - lastScroll) > 20) {
        setShowCTA(currentScroll < 100);
        lastScroll = currentScroll;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <section
      className="relative w-full h-auto min-h-[876px] flex flex-col items-center justify-center bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/images/bg-pattern.webp')" }}
    >
      <div className="w-full max-w-[1046px] flex flex-col items-center text-center gap-6 pt-[120px] sm:pt-[110px] px-4 sm:px-8">
        <h1 className="text-purple font-vastago font-semibold text-[76px] md:text-[96px] leading-[120%] tracking-[-0.02em]">
          {displayedText}
        </h1>

        <p className="max-w-[598px] text-[20px] leading-[145%] tracking-[-0.01em] font-nohemi">
          <span className="font-bold">Driven By Creativity. Powered By Technology.</span> <br />
          We craft innovative strategic solutions that bring your ideas to life.
        </p>

        {showCTA && (
          <button
            onClick={toggleModal}
            className="bg-purple text-white tracking-wide mt-[10px] md:mt-[40px] flex items-center justify-center gap-[8px] w-[191px] h-[56px] border border-[#21083F] rounded-[40px] px-[16px] py-[16px] hover:bg-white hover:text-black transition duration-300 ease-out whitespace-nowrap font-nohemi"
          >
            Request a Quote
            <Image
              src="/images/right-arrow.webp"
              alt="Call Icon"
              width={24}
              height={24}
              priority
            />
          </button>
        )}

        {isMobile ? (
          <Image
            src="/optimized/idea-600.webp"
            width={600}
            height={338}
            alt="Mobile Static Image"
            className="rounded-[24px]"
            priority
          />
        ) : (
          <div className="hidden lg:block">
            <Carousel images={images} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
