import React, { useEffect, useRef } from 'react';
import { Code, Palette, Wrench } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const servicesRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (servicesRef.current) {
      const title = servicesRef.current.querySelector('.section-title');
      const cards = servicesRef.current.querySelectorAll('.service-card');
      
      gsap.fromTo(title, {
        y: 30,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: servicesRef.current,
          start: 'top 80%',
        }
      });

      gsap.fromTo(cards, {
        y: 50,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: servicesRef.current,
          start: 'top 70%',
        }
      });
    }
  }, []);

  const services = [
    {
      icon: <Code size={48} />,
      title: 'Web Development',
      description: 'Custom websites built with modern technologies, optimized for performance and user experience.'
    },
    {
      icon: <Palette size={48} />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that convert visitors into customers and enhance brand identity.'
    },
    {
      icon: <Wrench size={48} />,
      title: 'Website Maintenance',
      description: 'Ongoing support, updates, and optimization to keep your website running smoothly and securely.'
    }
  ];

  return (
    <section id="services" ref={servicesRef} className="py-24 bg-secondary">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="section-title text-3xl md:text-4xl font-bold text-center mb-16">
          What We Offer
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-100"
            >
              <div className="text-primary mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-text-primary">
                {service.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;