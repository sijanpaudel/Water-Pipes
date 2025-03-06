"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Leo",
    role: "CEO Water Dep",
    rating: 4,
    text: "It was a very good experience.",
    text2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit ",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Alice",
    role: "Marketing Manager",
    rating: 5,
    text: "It was a very good experience",
    text2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit ",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "John",
    role: "Product Designer",
    rating: 3,
    text: "Good experience but could be improved in some aspects.",
    text2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit ",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    name: "John",
    role: "Product Designer",
    rating: 3,
    text: "Good experience but could be improved in some aspects.",
    text2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit ",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
];

const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
        WHAT OUR CLIENTS SAY ABOUT US
      </h2>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        centeredSlides={true}
        loop={true} // Ensures smooth transitions
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true }}
        navigation
        className="pb-8"
      >
        {testimonials.map((testimonial, index) => {
          const isMiddle = index === activeIndex;
          return (
            <SwiperSlide key={index} className="transition-transform duration-300 ease-in-out">
              <div
                className={`bg-white shadow-md rounded-xl p-6 text-center transform transition-all ${
                  isMiddle ? "scale-110" : "scale-90 opacity-80"
                }`}
              >
                <div className="grid grid-cols-2">
                  <div className="flex">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mx-auto mb-4"
                    />
                    <div className="justify-self-start">
                      <h3 className="font-bold text-lg">{testimonial.name}</h3>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center my-2 text-yellow-500">
                    {"★".repeat(testimonial.rating)}
                    {"☆".repeat(5 - testimonial.rating)}
                  </div>
                </div>
                <p className="text-black font-semibold text-base">{testimonial.text}</p>
                <p className="text-black font-normal text-xs mt-5">{testimonial.text2}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
