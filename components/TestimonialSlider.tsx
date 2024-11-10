'use client'
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const TestimonialSlider = () => {
  const testimonials = [
    {
      id: 1,
      name: "Alex Chen",
      role: "Software Engineer",
      content: "The curriculum perfectly balanced theory and practical applications. It helped me grow significantly as a developer.",
      avatar: "https://i.ibb.co/5RMFQJw/image.png"
    },
    {
      id: 2,
      name: "Maria Rodriguez",
      role: "Full Stack Developer",
      content: "The hands-on projects were incredibly valuable. I learned more in months than I did in years of self-study.",
      avatar: "https://i.ibb.co/5RMFQJw/image.png"
    },
    {
      id: 3,
      name: "David Kim",
      role: "Backend Engineer",
      content: "The mentorship and community support made all the difference in my learning journey.",
      avatar: "https://i.ibb.co/5RMFQJw/image.png"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        And Our Students Agree...
      </h2>

      <div className="relative">
        <div className="overflow-hidden rounded-lg bg-white/10 backdrop-blur-sm p-8">
          <div className="flex transition-transform duration-500 ease-in-out"
               style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                <div className="flex flex-col items-center text-center">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mb-4"
                    width={48} 
                    height={48} 
                  />
                  <blockquote className="text-lg text-gray-200 mb-4">
                  &apos;{testimonial.content}&apos;
                  </blockquote>
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold text-white">{testimonial.name}</h3>
                    <p className="text-blue-300">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/20 hover:bg-white/30 rounded-full p-2 backdrop-blur-sm transition-all"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/20 hover:bg-white/30 rounded-full p-2 backdrop-blur-sm transition-all"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === index ? 'bg-white scale-125' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
