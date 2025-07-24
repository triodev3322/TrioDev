import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MessageSquare, Linkedin, Phone } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useToast } from '@/hooks/use-toast';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  useEffect(() => {
    if (contactRef.current) {
      const title = contactRef.current.querySelector('.section-title');
      const form = contactRef.current.querySelector('.contact-form');
      const social = contactRef.current.querySelector('.social-links');

      gsap.fromTo(title, {
        y: 30,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: contactRef.current,
          start: 'top 80%',
        }
      });

      gsap.fromTo([form, social], {
        y: 50,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: contactRef.current,
          start: 'top 70%',
        }
      });
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    const form = new FormData();
    form.append("access_key", "53c6a5b2-9e92-47d6-8ecc-0a789fcda6d8");
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message sent ✅",
          description: "We'll get back to you shortly 🙌",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast({
          title: "Form Error 😢",
          description: "Try again later or contact us directly.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Network error",
        description: "Check your internet and try again.",
        variant: "destructive",
      });
    }
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/trio-dev-21972b376/',
      icon: <Linkedin className="w-6 h-6 text-primary" />,
      description: 'Connect with us'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/1234567890',
      icon: <Phone className="w-6 h-6 text-primary" />,
      description: '+91 95571 23410'
    },
    {
      name: 'Email',
      url: 'mailto:triodev226@gmail.com',
      icon: <Mail className="w-6 h-6 text-primary" />,
      description: 'triodev226@gmail.com'
    }
  ];

  return (
    <section id="contact" ref={contactRef} className="py-24 bg-secondary">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="section-title text-3xl md:text-4xl font-bold text-center mb-16">
          Let's Connect
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="contact-form">
            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-2"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-2"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="mt-2 min-h-[120px]"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full px-6 py-3 text-lg font-medium"
              >
                <Mail className="mr-2" size={20} />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="social-links">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-text-primary">
                Get in Touch
              </h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                Ready to start your project? Let's discuss how we can help bring your vision to life.
                We respond to all inquiries within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-text-primary mb-4">
                Alternative Contact Methods
              </h4>

              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-white rounded-xl hover:shadow-md transition-all duration-300 hover:scale-105"
                >
                  <div>{link.icon}</div>
                  <div>
                    <div className="font-medium text-text-primary">{link.name}</div>
                    <div className="text-sm text-text-secondary">{link.description}</div>
                  </div>
                </a>
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;