import React, { useState } from "react";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";

const testimonials = [
  {
    name: "John Doe",
    message: "This is an amazing service! Highly recommended.",
  },
  {
    name: "Jane Smith",
    message: "A wonderful experience, and the team is great to work with!",
  },
  {
    name: "Michael Brown",
    message: "Professional and reliable. Will use again!",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative h-[50vh] w-full overflow-hidden bg-black bg-opacity-50 text-white">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 h-full w-full object-cover -z-10"
        src="/assets/landingPage/testimonials/bgvideo.mp4"
        autoPlay
        muted
        loop
      ></video>

      {/* Testimonial Content */}
      <div className="flex h-full items-center justify-center">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`absolute text-center transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-lg md:text-2xl">{testimonial.message}</p>
            <h3 className="mt-4 text-xl font-bold md:text-3xl">
              - {testimonial.name}
            </h3>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2  p-2 text-white hover:bg-opacity-75"
        onClick={handlePrev}
      >
        <TfiAngleLeft size={30} />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2  p-2 text-white hover:bg-opacity-75"
        onClick={handleNext}
      >
        <TfiAngleRight size={30} />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 flex items-center -translate-x-1/2 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={` rounded-full flex justify-center items-center relative border-2 ${
              index === currentIndex
                ? "bg-transparent border-white h-3 w-3"
                : "bg-gray-400 border-transparent h-2 w-2"
            }`}
            onClick={() => handleDotClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
