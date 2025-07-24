import React from 'react';
import { Github, Linkedin, Mail, MessageSquare } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { 
      icon: <Linkedin size={20} />, 
      url: 'https://linkedin.com/in/trio-dev-21972b376/',
      label: 'LinkedIn'
    },
    { 
      icon: <Github size={20} />, 
      url: 'https://github.com/triodev',
      label: 'GitHub'
    },
    { 
      icon: <Mail size={20} />, 
      url: 'mailto:triodev226@gmail.com',
      label: 'Email'
    },
    { 
      icon: <MessageSquare size={20} />, 
      url: 'https://wa.me/919557123410',
      label: 'WhatsApp'
    }
  ];

  return (
    <footer className="bg-white dark:bg-black border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-24 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-8">
          {/* Branding */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-semibold text-text-primary dark:text-white">Trio<span className="text-primary">Dev</span></h3>
            <p className="text-sm text-text-secondary dark:text-gray-400 mt-2">
              Empowering your digital presence with modern web solutions.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center sm:justify-center">
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center sm:text-right text-sm text-text-secondary dark:text-gray-400">
            © 2025 TrioDev. All rights reserved.
          </div>
        </div>

        {/* Gradient Divider */}
        <div className="h-1 mt-10 bg-gradient-to-r from-primary/30 via-primary to-primary/30 rounded-full opacity-40" />
      </div>
    </footer>
  );
};

export default Footer;
