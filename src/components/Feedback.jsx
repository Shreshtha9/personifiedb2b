import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'William Smith',
    role: 'Web Designer',
    text: 'Best company! We felt very confident hiring Varsity Tutors who set us up with Jessica for our son’s chemistry tutor. His grade has gone up exponentially & more importantly so has his confidence. The process was simple and all the extras that come with membership are worth every penny.',
    image: '/images/feed1.png',
  },
  {
    name: 'Jessica Brown',
    role: 'UI/UX Designer',
    text: 'Amazing service! They helped me grow my business rapidly. Their team is very supportive and always available for any help.',
    image: '/images/feed2.png',
  },
  {
    name: 'John Doe',
    role: 'Marketing Expert',
    text: 'Professional and reliable! I highly recommend them for any business looking to boost their online presence.',
    image: '/images/feed3.png',
  },
  {
    name: 'Emma Watson',
    role: 'Content Creator',
    text: 'Exceptional support and top-notch services. They really understand the needs of modern businesses.',
    image: '/images/feed4.png',
  }
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <section className="bg-[#356e62] py-16 px-8 lg:px-24 text-white relative overflow-hidden">
      {/* Scattered Static Faces */}
      <img src="/images/feed1.png" className="absolute top-10 left-10 w-16 h-16 rounded-full shadow-lg transform rotate-12" alt="Static Face 1" />
      <img src="/images/feed2.png" className="absolute bottom-20 left-20 w-20 h-20 rounded-full shadow-lg transform -rotate-6" alt="Static Face 2" />
      <img src="/images/feed3.png" className="absolute top-20 right-20 w-20 h-20 rounded-full shadow-lg transform rotate-3" alt="Static Face 3" />
      <img src="/images/feed4.png" className="absolute bottom-10 right-32 w-16 h-16 rounded-full shadow-lg transform -rotate-12" alt="Static Face 4" />

      <div className="flex items-center justify-center gap-8 mb-12 relative z-10">
        <button onClick={prevSlide} className="text-white absolute left-16 lg:left-32 top-1/2 transform -translate-y-1/2">
          <ChevronLeft size={36} />
        </button>
        <Quote size={48} className="text-[#0f2d26]" />
        <button onClick={nextSlide} className="text-white absolute right-16 lg:right-32 top-1/2 transform -translate-y-1/2">
          <ChevronRight size={36} />
        </button>
      </div>

      <div className="text-center max-w-4xl mx-auto relative z-10">
        <p className="text-xl lg:text-2xl mb-6">{testimonials[current].text}</p>
        <div className="flex flex-col items-center">
          <img src={testimonials[current].image} width={80} height={80} className="rounded-full mb-4" alt={testimonials[current].name} />
          <h3 className="text-2xl font-semibold">{testimonials[current].name}</h3>
          <p className="text-lg text-gray-300">{testimonials[current].role}</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
