import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  imageSrc: string;
  quote: string;
}

const roles = [
  "CEO",
  "CTO",
  "Designer",
  "Manager",
  "Developer",
  "Marketing Lead",
];
const names = [
  "Shruti",
  "Arjun",
  "Kartik",
  "Laveen",
  "Suraj",
  "Priya",
  "Neha",
  "Raj",
];

const generateRandomTestimonials = (count: number): Testimonial[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: names[Math.floor(Math.random() * names.length)],
    role: roles[Math.floor(Math.random() * roles.length)],
    imageSrc: `https://randomuser.me/api/portraits/${
      Math.random() > 0.5 ? "women" : "men"
    }/${Math.floor(Math.random() * 100)}.jpg`,
    quote:
      "This product has truly transformed our business. The team's support is unparalleled!",
  }));
};

const Testimonial: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(2);

  useEffect(() => {
    setTestimonials(generateRandomTestimonials(7));
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  if (testimonials.length === 0) return null;

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between p-4 sm:p-8 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="w-full lg:w-3/5 relative h-[300px] sm:h-[400px] md:h-[500px] mb-8 lg:mb-0">
        <div className="w-full sm:w-[90%] mx-auto">
          {testimonials.map((testimonial, index) => {
            const offset =
              ((index - currentIndex + testimonials.length) %
                testimonials.length) -
              Math.floor(testimonials.length / 2);
            const zIndex = -Math.abs(offset) + 10;
            const opacity = 1 - Math.abs(offset) * 0.2;
            const scale = 1 - Math.abs(offset) * 0.1;

            return (
              <motion.div
                key={testimonial.id}
                className="absolute w-full top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl shadow-lg"
                style={{
                  zIndex,
                  opacity,
                  width: index === currentIndex ? "240px" : "220px",
                  height: index === currentIndex ? "240px" : "220px",
                }}
                animate={{ scale, x: `calc(-50% + ${offset * 60}px)` }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={testimonial.imageSrc}
                  alt={testimonial.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl bg-red-400"
                />
              </motion.div>
            );
          })}
        </div>

        <motion.button
          onClick={handlePrev}
          className="absolute left-0 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 sm:p-3 rounded-full shadow-lg z-20 focus:outline-none"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg
            className="w-4 h-4 sm:w-6 sm:h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </motion.button>
        <motion.button
          onClick={handleNext}
          className="absolute right-0 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 sm:p-3 rounded-full shadow-lg z-20 focus:outline-none"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg
            className="w-4 h-4 sm:w-6 sm:h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.button>
      </div>
      <div className="w-full lg:w-2/5 lg:pl-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800 text-center lg:text-left">
          Client Testimonials
        </h2>
        <p className="text-gray-600 text-base sm:text-lg text-center lg:text-left">
          We're proud to have helped businesses achieve their goals. Here's what
          our clients have to say about their experiences working with us.
        </p>
      </div>
    </section>
  );
};

export default Testimonial;