import React, { useRef, useState, useEffect } from 'react';
import { 
  IconZap, 
  IconStar, 
  IconShieldCheck, 
  IconCheckCircle, 
  IconClock,
  IconChevronLeft,
  IconChevronRight
} from '../../components/common/Icons';
import './Reviews.css';

export const Reviews = ({ onOpenContactModal }) => {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const scrollerRef = useRef(null);

  const reviews = [
    {
      id: 1,
      name: 'R. Rajesh Kumar',
      role: 'Commercial Facility Director',
      location: 'Business Hub • Chennai',
      projectType: 'Distribution Board & Rewiring',
      text: 'S.P.T. Electrical Services executed our 3-phase main distribution board upgrade with exceptional neatness and zero unnecessary downtime. Their thermal load balancing audit prevented recurring trips.',
      rating: 5,
      avatarInitial: 'RK',
      badge: 'Commercial Property'
    },
    {
      id: 2,
      name: 'Ananya Venkatesh',
      role: 'Luxury Villa Owner',
      location: 'Villa Residency • ECR',
      projectType: 'Architectural Lighting & Smart Controls',
      text: 'Prompt and highly professional! They installed our entire architectural LED cove lighting and smart dimmer automation. Wire routing was completely concealed without damaging existing interior finishes.',
      rating: 5,
      avatarInitial: 'AV',
      badge: 'Luxury Residence'
    },
    {
      id: 3,
      name: 'S. Karthik',
      role: 'Showroom General Manager',
      location: 'Retail Arcade • Anna Nagar',
      projectType: 'Commercial Lighting & Panel Work',
      text: 'Upgraded all overhead spotlight arrays and power switches for our 4,000 sq.ft retail showroom. The illumination layout improved visibility drastically while reducing our monthly power load.',
      rating: 5,
      avatarInitial: 'SK',
      badge: 'Retail Showroom'
    },
    {
      id: 4,
      name: 'M. Sundaram',
      role: 'Manufacturing Plant Head',
      location: 'Industrial Estate • Ambattur',
      projectType: 'Industrial Heavy Panel & ELCB Setup',
      text: 'Outstanding industrial standards. Installed heavy-gauge circuit breakers and RCCB safety earth leakage protection. Clear color-coded wiring schematics made future maintenance effortless.',
      rating: 5,
      avatarInitial: 'MS',
      badge: 'Industrial Facility'
    },
    {
      id: 5,
      name: 'Priya Narayanan',
      role: 'Homeowner',
      location: 'Apartment Suite • OMR',
      projectType: 'Emergency Short-Circuit Repair',
      text: 'Had an unexpected midnight breaker trip issue. The electrician arrived swiftly, used digital diagnostic meters to pinpoint the faulty line in minutes, and repaired the burnt socket safely.',
      rating: 5,
      avatarInitial: 'PN',
      badge: 'Emergency Repair'
    },
    {
      id: 6,
      name: 'Dr. V. Arvind',
      role: 'Clinic Administrator',
      location: 'Medical Center • Guindy',
      projectType: 'Dedicated Medical Power Grid',
      text: 'Critical medical diagnostic equipment demands clean, uninterrupted power. S.P.T. engineered isolated grounding and dedicated surge suppressor circuits with absolute precision.',
      rating: 5,
      avatarInitial: 'VA',
      badge: 'Healthcare Facility'
    }
  ];

  const checkScroll = () => {
    if (scrollerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  // Autoplay: Automatically change/scroll cards every 2 seconds (2000ms)
  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);

    const timer = setInterval(() => {
      if (scrollerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollerRef.current;
        const cardStep = 390;

        if (scrollLeft + clientWidth >= scrollWidth - 30) {
          scrollerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollerRef.current.scrollBy({ left: cardStep, behavior: 'smooth' });
        }
      }
    }, 2000);

    return () => {
      window.removeEventListener('resize', checkScroll);
      clearInterval(timer);
    };
  }, []);

  const scrollPrev = () => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollBy({ left: -390, behavior: 'smooth' });
    }
  };

  const scrollNext = () => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollBy({ left: 390, behavior: 'smooth' });
    }
  };

  return (
    <section id="reviews" className="reviews-section">
      {/* Ambient background glow accents */}
      <div className="reviews-ambient-glow reviews-glow-top"></div>
      <div className="reviews-ambient-glow reviews-glow-bottom"></div>

      <div className="container reviews-container">
        {/* Section Header */}
        <div className="reviews-header">
          <div className="reviews-header-top-row">
            <div className="reviews-eyebrow-tag">
              <span className="reviews-pulse-dot"></span>
              <IconZap size={14} className="reviews-zap-icon" />
              <span>VERIFIED TESTIMONIALS</span>
            </div>

            {/* Navigation Arrows for 1-Line Scroller */}
            <div className="reviews-nav-arrows">
              <button 
                className={`reviews-arrow-btn ${!canScrollLeft ? 'arrow-disabled' : ''}`}
                onClick={scrollPrev}
                aria-label="Scroll reviews left"
                type="button"
                disabled={!canScrollLeft}
              >
                <IconChevronLeft size={20} />
              </button>
              <button 
                className={`reviews-arrow-btn ${!canScrollRight ? 'arrow-disabled' : ''}`}
                onClick={scrollNext}
                aria-label="Scroll reviews right"
                type="button"
                disabled={!canScrollRight}
              >
                <IconChevronRight size={20} />
              </button>
            </div>
          </div>

          <h2 className="reviews-main-title">
            What Clients Say About <br />
            <span className="reviews-gold-accent">Our Electrical Work</span>
          </h2>

          <p className="reviews-main-subtitle">
            Demonstrated technical competence, electrical safety code compliance, and clean workmanship across 2,500+ completed projects.
          </p>

          {/* Social Proof Rating Pill */}
          <div className="reviews-score-pill">
            <div className="score-stars-group">
              {[...Array(5)].map((_, i) => (
                <IconStar key={i} size={15} className="score-star-gold" />
              ))}
            </div>
            <span className="score-rating-val">4.9 / 5.0</span>
            <span className="score-divider">•</span>
            <span className="score-count-text">Over 150+ Verified 5-Star Reviews</span>
          </div>
        </div>

        {/* 1-Line Horizontal Scroller Track */}
        <div 
          className="reviews-scroller-track"
          ref={scrollerRef}
          onScroll={checkScroll}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {reviews.map((rev) => (
            <div key={rev.id} className="review-glass-card">
              {/* Card Top Border Glow Accent */}
              <div className="review-card-shine"></div>

              {/* Watermark Quote Icon */}
              <div className="review-quote-watermark">“</div>

              {/* Card Top Row: Rating Stars + Project Type Badge */}
              <div className="review-card-top">
                <div className="review-stars-row">
                  {[...Array(rev.rating)].map((_, i) => (
                    <IconStar key={i} size={16} className="review-star-icon" />
                  ))}
                </div>
                <span className="review-project-badge">{rev.badge}</span>
              </div>

              {/* Quote Text */}
              <p className="review-body-text">"{rev.text}"</p>

              {/* Scope Chip */}
              <div className="review-scope-chip">
                <span className="scope-kicker">Scope:</span>
                <span className="scope-name">{rev.projectType}</span>
              </div>

              {/* Client Author Profile Footer */}
              <div className="review-author-footer">
                <div className="author-avatar-orb">
                  <span>{rev.avatarInitial}</span>
                </div>
                <div className="author-details-meta">
                  <div className="author-name-row">
                    <strong className="author-name-text">{rev.name}</strong>
                    <IconCheckCircle size={14} className="verified-check-gold" />
                  </div>
                  <span className="author-role-text">{rev.role}</span>
                  <span className="author-location-text">{rev.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Swipe Hint */}
        <div className="reviews-scroll-hint-row">
          <span className="reviews-swipe-hint">← Swipe or use arrows to scroll all client reviews →</span>
        </div>

        {/* Bottom Trust Highlights Strip */}
        <div className="reviews-trust-strip">
          <div className="trust-strip-item">
            <IconShieldCheck size={20} className="trust-strip-icon" />
            <span>100% Satisfaction & Safety Code Guaranteed</span>
          </div>
          <div className="trust-strip-item">
            <IconClock size={20} className="trust-strip-icon" />
            <span>24/7 Rapid Emergency Response</span>
          </div>
          <div className="trust-strip-item">
            <IconCheckCircle size={20} className="trust-strip-icon" />
            <span>Full Post-Installation Warranty Included</span>
          </div>
        </div>
      </div>
    </section>
  );
};
