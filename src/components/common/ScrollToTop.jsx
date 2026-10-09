import React, { useState, useEffect } from 'react';
import { IconArrowUp, IconWhatsApp } from './Icons';
import './ScrollToTop.css';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      // Calculate scroll progress percentage
      if (docHeight > 0) {
        const progress = (scrollTop / docHeight) * 100;
        setScrollProgress(progress);
      }

      // Show scroll-to-top button after scrolling 300px
      if (scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // SVG circular progress calculation
  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div className={`floating-actions-container ${isVisible ? 'has-scroll-top' : ''}`}>
      {/* Floating WhatsApp Action Button */}
      <a
        href="https://wa.me/919486939201?text=Hi%2C%20I%20have%20an%20electrical%20service%20inquiry."
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-btn"
        aria-label="Chat with S.P.T. Electrical Services on WhatsApp"
        title="Chat on WhatsApp"
      >
        <span className="whatsapp-tooltip">Chat on WhatsApp</span>
        <div className="whatsapp-icon-core">
          <IconWhatsApp size={24} />
        </div>
        <span className="whatsapp-pulse-aura"></span>
      </a>

      {/* Floating Scroll To Top Button */}
      <button
        type="button"
        className={`scroll-to-top-btn ${isVisible ? 'is-visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll back to top of page"
        title="Scroll to top"
      >
        {/* Dynamic Circular Progress Meter */}
        <svg className="scroll-progress-ring" width="54" height="54" viewBox="0 0 54 54">
          {/* Track Background */}
          <circle
            className="progress-ring-track"
            cx="27"
            cy="27"
            r={radius}
          />
          {/* Active Golden Progress Stroke */}
          <circle
            className="progress-ring-indicator"
            cx="27"
            cy="27"
            r={radius}
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: strokeDashoffset
            }}
          />
        </svg>

        {/* Center Arrow Icon & Core */}
        <div className="scroll-top-icon-core">
          <IconArrowUp size={20} className="scroll-arrow-icon" />
        </div>

        {/* Ambient Pulsing Aura */}
        <span className="scroll-btn-glow"></span>
      </button>
    </div>
  );
};
