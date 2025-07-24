import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  const statsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (statsRef.current) {
      const statItems = statsRef.current.querySelectorAll('.stat-item');

      statItems.forEach((item, index) => {
        const numberEl = item.querySelector('.stat-number');
        const finalText = numberEl?.getAttribute('data-final') || '';
        const isPercent = finalText.includes('%');
        const isPlus = finalText.includes('+');
        const isStatic = finalText.includes('/'); // e.g., 24/7

        // Only animate if not static (no "/")
        if (numberEl && !isStatic) {
          const cleanNumber = parseInt(finalText.replace(/\D/g, ''), 10);

          gsap.fromTo(
            numberEl,
            { textContent: 0 },
            {
              textContent: cleanNumber,
              duration: 3,
              ease: 'power3.out',
              snap: { textContent: 1 },
              scrollTrigger: {
                trigger: item,
                start: 'top 85%',
              },
              onUpdate: function () {
                if (numberEl) {
                  const current = Math.floor(Number(numberEl.textContent));
                  numberEl.textContent = `${current}${isPlus ? '+' : ''}${isPercent ? '%' : ''}`;
                }
              },
            }
          );
        }

        // Fade/slide in animation (always applies)
        gsap.fromTo(
          item,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: index * 0.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
            },
          }
        );
      });
    }
  }, []);

  const stats = [
    { number: '20+', label: 'Projects Delivered' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Available Worldwide' } 
  ];

  return (
    <section ref={statsRef} className="py-24 bg-white">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div
                className="text-4xl md:text-5xl font-bold text-primary mb-2 stat-number"
                data-final={stat.number}
              >
                {stat.number.includes('/') ? stat.number : '0'}
              </div>
              <div className="text-lg text-text-secondary font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
