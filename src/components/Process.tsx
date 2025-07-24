import React, { useEffect, useRef } from 'react';
import { Phone, Palette, Code, Rocket } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Process = () => {
  const processRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (processRef.current) {
      const title = processRef.current.querySelector('.section-title');
      const steps = processRef.current.querySelectorAll('.process-step');
      
      gsap.fromTo(title, {
        y: 30,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: processRef.current,
          start: 'top 80%',
        }
      });

      gsap.fromTo(steps, {
        x: -50,
        opacity: 0
      }, {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: processRef.current,
          start: 'top 70%',
        }
      });
    }
  }, []);

  const steps = [
    {
      number: '01',
      icon: <Phone size={32} />,
      title: 'Discovery Call',
      description: 'We start with understanding your business goals, target audience, and project requirements.'
    },
    {
      number: '02',
      icon: <Palette size={32} />,
      title: 'Wireframing & Design',
      description: 'Creating wireframes and stunning designs that align with your brand and user expectations.'
    },
    {
      number: '03',
      icon: <Code size={32} />,
      title: 'Development & Testing',
      description: 'Building your website with clean code, rigorous testing, and performance optimization.'
    },
    {
      number: '04',
      icon: <Rocket size={32} />,
      title: 'Deployment & Support',
      description: 'Launching your site and providing ongoing support to ensure everything runs smoothly.'
    }
  ];

  return (
    <section id="process" ref={processRef} className="py-24 bg-white">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="section-title text-3xl md:text-4xl font-bold text-center mb-16">
          Our Process
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="process-step text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4">
                  {step.icon}
                </div>
                <span className="text-4xl font-bold text-primary/20">
                  {step.number}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-text-primary">
                {step.title}
              </h3>
              
              <p className="text-text-secondary leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;