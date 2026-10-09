import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { QuickContactModal } from '../../components/common/QuickContactModal';
import { 
  IconZap, 
  IconShieldCheck, 
  IconCheckCircle, 
  IconArrowRight, 
  IconWrench,
  IconHeartHandshake,
  IconWhatsApp 
} from '../../components/common/Icons';

import imgBreadcrumb from '../../assets/images/services/services_breadcrumb.png';
import imgAboutMain from '../../assets/images/about/about_us_main.png';

import './AboutPage.css';

export const AboutPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOpenContactModal = (serviceName = '') => {
    setSelectedService(serviceName);
    setModalOpen(true);
  };

  const handleCloseContactModal = () => {
    setModalOpen(false);
    setSelectedService('');
  };

  const approachItems = [
    {
      title: 'Safety First',
      desc: 'Give attention to safe working practices and suitable electrical solutions.',
      icon: IconShieldCheck
    },
    {
      title: 'Quality Workmanship',
      desc: 'Approach each job with care, attention to detail, and practical execution.',
      icon: IconWrench
    },
    {
      title: 'Customer Focus',
      desc: "Understand the customer's needs and communicate clearly about the work.",
      icon: IconHeartHandshake
    }
  ];

  return (
    <div className="about-page-root">
      <Header onOpenContactModal={handleOpenContactModal} />

      <main className="about-main-content">
        {/* ==========================================================================
           PAGE TITLE BREADCRUMB BANNER (Reused UI & styling from Services Page)
           ========================================================================== */}
        <section className="sp-breadcrumb-banner">
          <div 
            className="sp-breadcrumb-bg"
            style={{ backgroundImage: `url(${imgBreadcrumb})` }}
          ></div>
          <div className="sp-breadcrumb-overlay"></div>
          <div className="sp-breadcrumb-glow"></div>

          <div className="container sp-breadcrumb-container">
            <div className="sp-breadcrumb-content">
              {/* Breadcrumb Navigation Trail */}
              <nav className="sp-breadcrumb-nav" aria-label="Breadcrumb navigation">
                <IconZap size={14} className="sp-crumb-icon" />
                <a 
                  href="/" 
                  className="sp-crumb-link" 
                  onClick={(e) => { e.preventDefault(); navigate('/'); }}
                >
                  Home
                </a>
                <span className="sp-crumb-sep">/</span>
                <span className="sp-crumb-active" aria-current="page">About Us</span>
              </nav>

              {/* Page Title */}
              <h1 className="sp-breadcrumb-title">
                About <span className="sp-gold-accent-shimmer">Us</span>
              </h1>

              {/* Subtitle */}
              <p className="sp-breadcrumb-subtitle">
                Learn more about S.P.T. Electrical Services and our commitment to reliable electrical work.
              </p>

              {/* Quick Trust Highlights */}
              <div className="sp-breadcrumb-highlights">
                <div className="sp-crumb-highlight-item">
                  <IconShieldCheck size={16} className="sp-hl-icon" />
                  <span>Licensed & Certified Contracting</span>
                </div>
                <div className="sp-crumb-highlight-item">
                  <IconCheckCircle size={16} className="sp-hl-icon" />
                  <span>Transparent Upfront Quotes</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
           SECTION 2: ABOUT US INTRODUCTION
           ========================================================================== */}
        <section className="ab-intro-section">
          <div className="container">
            <div className="ab-intro-grid">
              {/* Left Column: Text & Content */}
              <div className="ab-intro-content">
                <span className="ab-sub-eyebrow">ABOUT S.P.T.</span>
                <h2 className="ab-intro-heading">
                  Powering Everyday Spaces with <span className="sp-gold-gradient">Reliable Electrical Work</span>
                </h2>
                
                <p className="ab-intro-paragraph">
                  S.P.T. Electrical Services provides electrical installation, repair, and maintenance solutions for residential and small commercial spaces. We focus on understanding each customer's requirements and delivering practical electrical solutions with care and attention to safety.
                </p>

                <p className="ab-intro-paragraph">
                  From everyday electrical fittings to wiring work and troubleshooting, our aim is to make electrical service straightforward, dependable, and convenient for our customers.
                </p>

                <div className="ab-intro-action">
                  <button 
                    className="ab-btn-primary"
                    onClick={() => navigate('/services')}
                    type="button"
                  >
                    <span>Explore Our Services</span>
                    <IconArrowRight size={16} />
                  </button>
                </div>
              </div>

              {/* Right Column: Dedicated Generated About Image */}
              <div className="ab-intro-media">
                <div className="ab-image-frame">
                  <img 
                    src={imgAboutMain} 
                    alt="S.P.T. Electrical Services technician at work" 
                    className="ab-main-img"
                    width="600"
                    height="450"
                  />
                  <div className="ab-image-badge">
                    <IconShieldCheck size={18} className="ab-badge-icon" />
                    <span>Safety Inspection & Professional Service</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
           SECTION 3: OUR APPROACH
           ========================================================================== */}
        <section className="ab-approach-section">
          <div className="container">
            <div className="sp-section-header">
              <span className="sp-sub-eyebrow">HOW WE WORK</span>
              <h2 className="sp-section-title">
                Our <span className="sp-gold-gradient">Approach</span>
              </h2>
              <p className="sp-section-desc">
                Our foundational principles for delivering dependable electrical solutions on every single job.
              </p>
            </div>

            <div className="ab-approach-grid">
              {approachItems.map((item, index) => {
                const IconComp = item.icon;
                return (
                  <div key={index} className="ab-approach-card">
                    <div className="ab-card-icon-box">
                      <IconComp size={24} />
                    </div>
                    <h3 className="ab-card-title">{item.title}</h3>
                    <p className="ab-card-desc">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ==========================================================================
           SECTION 4: CLOSING CTA
           ========================================================================== */}
        <section className="sp-cta-section">
          <div className="container">
            <div className="sp-cta-banner">
              <div className="sp-cta-glow"></div>
              
              <div className="sp-cta-content">
                <div className="sp-cta-badge">
                  <IconZap size={16} />
                  <span>S.P.T. ELECTRICAL SERVICES</span>
                </div>

                <h2 className="sp-cta-heading">Looking for Reliable Electrical Support?</h2>
                <p className="sp-cta-text">
                  Get in touch with S.P.T. Electrical Services to discuss your electrical installation, repair, or maintenance requirements.
                </p>

                <div className="sp-cta-buttons">
                  <button 
                    className="sp-cta-main-btn"
                    onClick={() => handleOpenContactModal('About Us Inquiry')}
                    type="button"
                  >
                    <IconZap size={18} />
                    <span>Get a Service</span>
                  </button>

                  <a 
                    href="https://wa.me/919486939201?text=Hi%2C%20I%20have%20an%20electrical%20service%20inquiry." 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="sp-cta-whatsapp-btn"
                  >
                    <IconWhatsApp size={18} />
                    <span>WhatsApp Direct Chat</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer onOpenContactModal={handleOpenContactModal} />

      <QuickContactModal 
        isOpen={modalOpen} 
        onClose={handleCloseContactModal} 
        defaultService={selectedService}
      />
    </div>
  );
};
