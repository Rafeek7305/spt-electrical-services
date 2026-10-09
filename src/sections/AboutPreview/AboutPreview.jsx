import React from 'react';
import aboutImg from '../../assets/images/about/about_electrical.png';
import { 
  IconZap, 
  IconShieldCheck, 
  IconCheckCircle, 
  IconArrowRight, 
  IconClock, 
  IconWrench, 
  IconStar, 
  IconLayers,
  IconPhone
} from '../../components/common/Icons';
import './AboutPreview.css';

export const AboutPreview = ({ onOpenContactModal }) => {
  const highlights = [
    {
      icon: IconShieldCheck,
      title: 'Licensed Safety Standards',
      desc: 'All installations strictly follow updated national electrical safety codes & circuit load tolerances.'
    },
    {
      icon: IconLayers,
      title: 'Neat & Organized Finish',
      desc: 'Structured cable routing, clean conduit channels, and color-coded breaker labeling for longevity.'
    },
    {
      icon: IconClock,
      title: 'Dependable Rapid Turnaround',
      desc: 'Transparent project timelines, fast on-site dispatch, and dedicated technical support.'
    }
  ];

  const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '2.5k+', label: 'Projects Completed' },
    { value: '100%', label: 'Code Compliant' },
    { value: '24/7', label: 'Support Ready' }
  ];

  return (
    <section id="about" className="about-section">
      {/* Ambient background glow accents */}
      <div className="about-ambient-glow about-glow-left"></div>
      <div className="about-ambient-glow about-glow-right"></div>

      <div className="container about-container">
        {/* Left Layered Visual Frame */}
        <div className="about-visual-col">
          <div className="about-visual-wrapper">
            {/* Background Decorative Aura Frame */}
            <div className="about-frame-aura"></div>

            {/* Main Picture Frame */}
            <div className="about-main-img-card">
              <img 
                src={aboutImg} 
                alt="S.P.T. Electrical Services engineering and control room" 
                className="about-hero-img"
                width="640"
                height="500"
              />
              <div className="about-img-gradient-overlay"></div>
            </div>

            {/* Floating Experience Badge (Bottom Left) */}
            <div className="about-floating-exp-card">
              <div className="exp-icon-orb">
                <IconWrench size={22} />
              </div>
              <div className="exp-info">
                <div className="exp-number-row">
                  <span className="exp-big-num">10+</span>
                  <span className="exp-plus">Years</span>
                </div>
                <span className="exp-caption">Engineering Excellence</span>
              </div>
            </div>

            {/* Floating Top-Right Verified Badge */}
            <div className="about-floating-top-badge">
              <span className="floating-pulse-dot"></span>
              <IconShieldCheck size={16} className="floating-shield-icon" />
              <span>Certified Electricians</span>
            </div>

            {/* Floating Mini Rating Pill */}
            <div className="about-floating-rating-pill">
              <div className="rating-stars">
                {[...Array(5)].map((_, i) => (
                  <IconStar key={i} size={13} className="star-gold" />
                ))}
              </div>
              <span className="rating-text">Top-Rated Quality</span>
            </div>
          </div>
        </div>

        {/* Right Content & Value Cards */}
        <div className="about-content-col">
          {/* Eyebrow Tag */}
          <div className="about-eyebrow-pill">
            <span className="about-pulse-dot"></span>
            <IconZap size={14} className="about-zap-icon" />
            <span>ABOUT S.P.T. ELECTRICAL SERVICES</span>
          </div>

          <h2 className="about-headline">
            Delivering Safe, Structured & <br />
            <span className="about-gold-accent">Reliable Electrical Power</span>
          </h2>

          <p className="about-lead-text">
            S.P.T. Electrical Services is a premier electrical engineering and contracting provider delivering uncompromising quality across residential, commercial, and industrial infrastructure.
          </p>

          <p className="about-secondary-text">
            Our approach prioritizes structured cable management, meticulous load balancing, and strict compliance with national electrical safety standards to guarantee long-lasting performance.
          </p>

          {/* 3 Interactive Highlight Feature Cards */}
          <div className="about-highlights-stack">
            {highlights.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="about-highlight-card">
                  <div className="highlight-icon-box">
                    <IconComponent size={20} />
                  </div>
                  <div className="highlight-text-content">
                    <h3 className="highlight-title">{item.title}</h3>
                    <p className="highlight-desc">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 4-Column Quick Metrics Grid */}
          <div className="about-stats-strip">
            {stats.map((stat, idx) => (
              <div key={idx} className="about-stat-box">
                <span className="stat-number">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Action Row */}
          <div className="about-cta-row">
            <button 
              className="about-primary-cta"
              onClick={() => onOpenContactModal('General Consultation')}
              type="button"
            >
              <span>Speak with an Electrician</span>
              <IconArrowRight size={18} />
            </button>

            <a href="tel:+919486939201" className="about-phone-link">
              <div className="phone-icon-circle">
                <IconPhone size={16} />
              </div>
              <div>
                <span className="phone-subtext">Direct Line</span>
                <strong className="phone-number">+91 94869 39201</strong>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
