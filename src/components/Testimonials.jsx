import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      message: "Absolutely amazing service! The team went above and beyond my expectations.",
    },
    {
      name: "Michael Chen",
      rating: 5,
      message: "The best experience I've had with any company. Their attention to detail is unmatched.",
    },
    {
      name: "Emma Davis",
      rating: 4,
      message: "Very professional and efficient. They delivered exactly what I needed.",
    },
    {
      name: "James Wilson",
      rating: 5,
      message: "Innovative solutions and exceptional support. They understand customers' needs.",
    },
    {
      name: "Lisa Rodriguez",
      rating: 5,
      message: "Outstanding quality and service. They've exceeded my expectations.",
    },
    {
      name: "David Kim",
      rating: 4,
      message: "Great team to work with! Their expertise really shows in the final result.",
    }
  ];

  useEffect(() => {
    const slider = sliderRef.current;
    let isMouseOver = false;
    let animationFrameId;
    let position = 0;
    const slideWidth = 320; // Width of single slide including margin
    const totalSlides = testimonials.length;
    
    // Start from the end (show last 3 items initially)
    position = (totalSlides - 3) * slideWidth;
    slider.style.transform = `translateX(-${position}px)`;

    const animate = () => {
      if (!isMouseOver) {
        position += 0.5;
        
        // Check if we've scrolled past all slides
        if (position >= totalSlides * slideWidth) {
          position = 0;
        }
        
        slider.style.transform = `translateX(-${position}px)`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    slider.addEventListener('mouseenter', () => {
      isMouseOver = true;
    });

    slider.addEventListener('mouseleave', () => {
      isMouseOver = false;
    });

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const TestimonialCard = ({ name, rating, message }) => (
    <div className="w-72 flex-shrink-0 mx-4 dark:bg-dark-primary dark:text-gray-100 ">
      <div className="rounded-lg border border-black dark:border dark:border-white p-6 h-full flex flex-col transition-all duration-300 hover:shadow-xl ">
        <div className="flex items-center gap-3 mb-4 ">
          <div className="w-10 h-10 bg-gradient-to-br from-white to-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
            {name.charAt(0)}
          </div>
          <div>
            <h3 className="text-base font-bold  ">{name}</h3>
            <div className="flex items-center gap-0.5">
              {[...Array(rating)].map((_, i) => (
                <Star 
                  key={i}
                  size={12}
                  className="text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
          </div>
        </div>
        
        <p className="dark:text-gray-300 text-sm leading-relaxed italic">
          "{message}"
        </p>
      </div>
    </div>
  );

  return (
    <div className="w-full bg-gradient-to-br  py-16  dark:bg-dark-primary dark:text-gray-200 mb-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center  mb-12">
          What Our Clients Say
        </h2>
        
        <div 
          ref={containerRef}
          className="overflow-hidden "
        >
          <div
            ref={sliderRef}
            className="flex transition-transform duration-500 ease-linear "
          >
            {/* Triple the testimonials for seamless loop */}
            {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
              <TestimonialCard
                key={index}
                {...testimonial}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;