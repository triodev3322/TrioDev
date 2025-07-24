import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      const tl = gsap.timeline();
      tl.from('.hero-title', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
      })
        .from('.hero-subtitle', {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out'
        }, '-=0.5')
        .from('.hero-buttons', {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out'
        }, '-=0.3');
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-b from-white via-[#F9FAFB] to-white pt-24 pb-16"
    >
      {/* Decorative blob */}
      <div className="absolute -top-16 -right-16 w-[450px] h-[450px] bg-[#A5F3FC] rounded-full opacity-30 blur-3xl pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="hero-title text-[42px] md:text-[58px] font-extrabold leading-tight text-text-primary">
              We Enable Your Business To<br />
              <span className="text-primary">Reach Globally</span>
            </h1>

            <p className="hero-subtitle text-base md:text-lg text-[#2E3A59] leading-relaxed max-w-xl">
              We help businesses launch stunning, functional websites that engage and convert —
              built from scratch with strategy and creativity.
            </p>

            <div className="hero-buttons flex flex-col sm:flex-row gap-4 mt-4">
              <Button
                size="lg"
                className="bg-[#00D0B4] hover:bg-[#00c1a6] text-white px-8 py-4 text-base font-semibold shadow-md"
                onClick={() => scrollToSection('work')}
              >
                View Our Work <ArrowRight className="ml-2" size={20} />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border border-[#00D0B4] text-[#00D0B4] hover:bg-[#00D0B4] hover:text-white px-8 py-4 text-base font-semibold"
                onClick={() => scrollToSection('contact')}
              >
                <Play className="mr-2" size={20} />
                Contact Us
              </Button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[580px] xl:max-w-[620px]">
              <img
                src="/hero.png"
                alt="Team illustration with laptop showing global reach"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
