"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";

const Carousel = ({ images }) => {
  return (
    <div className="hidden lg:flex w-full max-w-[1832px] h-[338px] mt-[60px] justify-center items-center">
      <Swiper
        spaceBetween={24}
        loop={images.length > 3}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Autoplay]}
        slidesPerView={Math.min(images.length, 3)}
        className="carousel"
        aria-label="Image Carousel"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="slide">
            <div className="w-[600px] h-[338px] rounded-[24px] border border-gray-300 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <Image
                src={image}
                width={600}
                height={338}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
                aria-hidden="true"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
