import React, { useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const workRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (workRef.current) {
      const title = workRef.current.querySelector('.section-title');
      const projects = workRef.current.querySelectorAll('.project-card');
      
      gsap.fromTo(title, {
        y: 30,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: workRef.current,
          start: 'top 80%',
        }
      });

      gsap.fromTo(projects, {
        y: 50,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: workRef.current,
          start: 'top 70%',
        }
      });
    }
  }, []);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Modern online store with seamless checkout experience',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Web Development'
    },
    {
      title: 'SaaS Dashboard',
      description: 'Clean and intuitive business analytics interface',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'UI/UX Design'
    },
    {
      title: 'Restaurant Website',
      description: 'Beautiful landing page with online reservation system',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Web Development'
    },
    {
      title: 'Portfolio Website',
      description: 'Creative portfolio showcasing artistic work',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'UI/UX Design'
    },
    {
      title: 'Corporate Website',
      description: 'Professional business website with CMS integration',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Web Development'
    },
    {
      title: 'Mobile App Landing',
      description: 'Converting landing page for mobile application',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'UI/UX Design'
    }
  ];

  return (
    <section id="work" ref={workRef} className="py-24 bg-secondary">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="section-title text-3xl md:text-4xl font-bold text-center mb-16">
          Our Work
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink className="text-white" size={24} />
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-sm text-primary font-medium mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold mb-2 text-text-primary">
                  {project.title}
                </h3>
                <p className="text-text-secondary">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;