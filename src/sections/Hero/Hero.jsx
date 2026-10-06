import React, { useState, useEffect, useRef } from 'react';
import imgPanel from '../../assets/images/hero/slide_panel.png';
import imgWiring from '../../assets/images/hero/slide_wiring.png';
import imgRepairs from '../../assets/images/hero/slide_repairs.png';
import imgLighting from '../../assets/images/hero/slide_lighting.png';

import { IconArrowRight, IconShieldCheck, IconWrench, IconZap, IconChevronRight, IconChevronLeft } from '../../components/common/Icons';
import './Hero.css';

export const Hero = ({ onOpenContactModal }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [resetToken, setResetToken] = useState(0);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // 4 Slides - Each slide uses matching card & background photography
  const slides = [
    {
      id: '01',
      num: '01',
      title: 'PANEL INSTALLATION',
      cardImg: imgPanel,
      bgImg: imgPanel
    },
    {
      id: '02',
      num: '02',
      title: 'WIRING & REWIRING',
      cardImg: imgWiring,
      bgImg: imgWiring
    },
    {
      id: '03',
      num: '03',
      title: 'REPAIRS & MAINTENANCE',
      cardImg: imgRepairs,
      bgImg: imgRepairs
    },
    {
      id: '04',
      num: '04',
      title: 'LIGHTING INSTALLATION',
      cardImg: imgLighting,
      bgImg: imgLighting
    }
  ];

  const totalSlides = slides.length;

  const goToSlide = (targetIndex) => {
    setActiveIndex(targetIndex);
    setResetToken((prev) => prev + 1);
  };

  const nextSlide = () => {
    goToSlide((activeIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    goToSlide((activeIndex - 1 + totalSlides) % totalSlides);
  };

  // Autoplay timer with clean interval reset on click or swipe
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalSlides);
    }, 3200);

    return () => clearInterval(timer);
  }, [isPaused, resetToken, totalSlides]);

  // Touch Swipe Handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 40) {
      nextSlide();
    } else if (distance < -40) {
      prevSlide();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  // Synchronized 3-Card Carousel Position Calculator
  const getCardPositionStyle = (index) => {
    let diff = index - activeIndex;
    if (diff < -1) diff += totalSlides;
    if (diff > 2) diff -= totalSlides;

    if (diff === 0) {
      // CENTER ACTIVE CARD (DOMINANT WITH GOLD GLOW)
      return {
        transform: 'translateX(0) scale(1) translateZ(0)',
        zIndex: 10,
        opacity: 1,
        filter: 'brightness(1)',
        pointerEvents: 'auto'
      };
    } else if (diff === 1 || diff === -3) {
      // RIGHT PARTIAL CARD
      return {
        transform: 'translateX(250px) scale(0.82) rotateY(-8deg) translateZ(-40px)',
        zIndex: 5,
        opacity: 0.75,
        filter: 'brightness(0.75)',
        pointerEvents: 'auto'
      };
    } else if (diff === -1 || diff === 3) {
      // LEFT PARTIAL CARD
      return {
        transform: 'translateX(-220px) scale(0.82) rotateY(8deg) translateZ(-40px)',
        zIndex: 5,
        opacity: 0.75,
        filter: 'brightness(0.75)',
        pointerEvents: 'auto'
      };
    }

    return {
      transform: 'translateX(450px) scale(0.6) translateZ(-100px)',
      zIndex: 1,
      opacity: 0,
      pointerEvents: 'none'
    };
  };

  return (
    <section 
      id="home" 
      className="hero-sync-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Dynamic Backgrounds Stage - Changes in 100% Sync with Active Card */}
      <div className="hero-bg-stage">
        {slides.map((slide, index) => (
          <div
            key={`bg-${slide.id}`}
            className={`hero-bg-layer ${index === activeIndex ? 'bg-active' : ''}`}
            style={{ backgroundImage: `url(${slide.bgImg})` }}
          />
        ))}
        <div className="hero-bg-overlay-dark"></div>
      </div>

      <div className="container hero-sync-container">
        {/* Left Column Editorial Content */}
        <div className="hero-left-col">
          <div className="hero-eyebrow-tag">
            <span className="eyebrow-dot"></span>
            <span>PROFESSIONAL ELECTRICAL SERVICES</span>
          </div>

          <h1 className="hero-sync-headline">
            Reliable<br />
            Electrical Work.<br />
            <span className="gold-text-accent">Done Right.</span>
          </h1>

          <p className="hero-sync-desc">
            Electrical installation, maintenance, repair and customized electrical solutions for homes and businesses.
          </p>

          <div className="hero-buttons-row">
            <button 
              className="btn btn-primary hero-gold-pill-btn" 
              onClick={() => onOpenContactModal()}
            >
              <span>Request a Service</span>
              <IconArrowRight size={18} />
            </button>

            <a href="#services" className="btn btn-outline-white hero-dark-outline-btn">
              <span>Explore Services</span>
            </a>
          </div>

          {/* 4 Feature Badges Row */}
          <div className="hero-trust-flex">
            <div className="trust-flex-item">
              <IconShieldCheck size={18} className="trust-gold-icon" />
              <span>Safe Workmanship</span>
            </div>
            <div className="trust-flex-item">
              <IconWrench size={18} className="trust-gold-icon" />
              <span>Professional Approach</span>
            </div>
            <div className="trust-flex-item">
              <IconZap size={18} className="trust-gold-icon" />
              <span>Clean Installation</span>
            </div>
            <div className="trust-flex-item">
              <span className="trust-emoji">👥</span>
              <span>Customer Focused</span>
            </div>
          </div>
        </div>

        {/* Right 3-Card Layered Carousel Stage */}
        <div 
          className="hero-right-col"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="sync-3card-stage">
            {slides.map((slide, index) => {
              const isActive = index === activeIndex;
              const cardStyle = getCardPositionStyle(index);

              return (
                <div
                  key={`card-${slide.id}`}
                  className={`sync-card ${isActive ? 'sync-card-active' : 'sync-card-side'}`}
                  style={cardStyle}
                  onClick={() => goToSlide(index)}
                >
                  <div className="sync-card-img-wrap">
                    <img 
                      src={slide.cardImg} 
                      alt={slide.title} 
                      className="sync-card-img" 
                    />

                    {/* Gold Glow Border Overlay for Active Card */}
                    {isActive && <div className="active-gold-glow-border"></div>}

                    {/* Bottom Label Overlay */}
                    <div className="sync-card-overlay">
                      <div className="sync-card-meta">
                        <span className="sync-card-num">{slide.num}</span>
                        <span className="sync-card-title">{slide.title}</span>
                      </div>

                      {isActive && (
                        <button 
                          className="sync-next-circle-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            nextSlide();
                          }}
                          aria-label="Next slide"
                        >
                          <IconChevronRight size={20} />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Controls & Synchronized Animated Progress Bar */}
          <div className="sync-controls-bar">
            <button 
              className="sync-ctrl-btn prev-btn" 
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <IconChevronLeft size={18} />
            </button>

            <div className="sync-progress-counter">
              <span className="sync-count-active">0{activeIndex + 1}</span>
              <div className="sync-progress-track">
                <div 
                  className="sync-progress-gold"
                  key={`${activeIndex}-${resetToken}`}
                  style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
                ></div>
              </div>
              <span className="sync-count-total">0{totalSlides}</span>
            </div>

            <button 
              className="sync-ctrl-btn next-btn" 
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <IconChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
