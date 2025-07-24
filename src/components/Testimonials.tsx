import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const testimonialsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (testimonialsRef.current) {
      const title = testimonialsRef.current.querySelector('.section-title');
      const testimonials = testimonialsRef.current.querySelectorAll('.testimonial-card');
      
      gsap.fromTo(title, {
        y: 30,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: testimonialsRef.current,
          start: 'top 80%',
        }
      });

      gsap.fromTo(testimonials, {
        y: 50,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: testimonialsRef.current,
          start: 'top 70%',
        }
      });
    }
  }, []);

  const testimonials = [
    {
      quote: "TrioDev delivered exactly what we needed. Their attention to detail and professionalism exceeded our expectations.",
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      rating: 5
    },
    {
      quote: "Working with TrioDev was a game-changer for our business. They created a website that truly represents our brand.",
      name: "Michael Chen",
      position: "Founder, Creative Studio",
      rating: 5
    },
    {
      quote: "The team at TrioDev is incredibly talented. They turned our vision into reality with seamless execution.",
      name: "Emily Rodriguez",
      position: "Marketing Director, GrowthCo",
      rating: 5
    }
  ];

  return (
    <section ref={testimonialsRef} className="py-24 bg-white">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="section-title text-3xl md:text-4xl font-bold text-center mb-16">
          What Our Clients Say
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="testimonial-card bg-secondary p-8 rounded-2xl border border-gray-100"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              
              <blockquote className="text-text-secondary italic mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div>
                <div className="font-bold text-text-primary">
                  {testimonial.name}
                </div>
                <div className="text-sm text-text-secondary">
                  {testimonial.position}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;