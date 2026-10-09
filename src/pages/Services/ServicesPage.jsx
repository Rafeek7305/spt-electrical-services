import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { QuickContactModal } from '../../components/common/QuickContactModal';
import { 
  IconZap, 
  IconWrench, 
  IconLightbulb, 
  IconLayers, 
  IconActivity, 
  IconShieldCheck, 
  IconCheckCircle, 
  IconArrowRight, 
  IconChevronDown, 
  IconChevronLeft,
  IconChevronRight,
  IconPhone, 
  IconWhatsApp 
} from '../../components/common/Icons';

import imgBreadcrumb from '../../assets/images/services/services_breadcrumb.png';
import imgResidential from '../../assets/images/services/residential_services.png';
import imgCommercial from '../../assets/images/services/commercial_services.png';

import './ServicesPage.css';

export const ServicesPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const scrollerRef = useRef(null);
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

  const handleScrollLeft = () => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollBy({ left: -370, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollBy({ left: 370, behavior: 'smooth' });
    }
  };

  const mainServicesList = [
    {
      num: '01',
      title: 'Electrical Installation',
      category: 'New Installation',
      desc: 'Electrical wiring, switches, sockets, lighting installations, and new electrical fittings for residential and commercial spaces.',
      icon: IconZap,
      specs: ['Wiring & Conduit Rough-Ins', 'Switch & Socket Box Mounting', 'Appliance Connection']
    },
    {
      num: '02',
      title: 'Electrical Repairs & Troubleshooting',
      category: 'Fault Diagnostics',
      desc: 'Identifying and resolving common electrical faults, faulty switches, power interruptions, and wiring issues quickly and safely.',
      icon: IconWrench,
      specs: ['Circuit Fault Isolation', 'Burnt Switch/Outlet Repair', 'MCB Breaker Replacement']
    },
    {
      num: '03',
      title: 'Lighting Solutions',
      category: 'LED & Lighting',
      desc: 'Indoor lighting, outdoor lighting, LED installations, and practical lighting upgrades for homes, offices, and retail shops.',
      icon: IconLightbulb,
      specs: ['Architectural LED Spotlights', 'Outdoor Security Floodlights', 'Energy-Efficient Upgrades']
    },
    {
      num: '04',
      title: 'Wiring & Rewiring',
      category: 'Cabling Upgrades',
      desc: 'New wiring, replacement of damaged wiring, and wiring upgrades where appropriate to ensure safe power load capacity.',
      icon: IconLayers,
      specs: ['Full & Partial Property Rewiring', 'Concealed Conduit Trunking', 'Earthing & Surge Mitigation']
    },
    {
      num: '05',
      title: 'Electrical Maintenance',
      category: 'Preventive Checks',
      desc: 'Routine inspections, maintenance, and early identification of electrical issues before they lead to unexpected power failure.',
      icon: IconActivity,
      specs: ['Distribution Panel Checkups', 'Load Balance Audits', 'Terminal Tightening & Safety']
    },
    {
      num: '06',
      title: 'Commercial Electrical Services',
      category: 'Shops & Offices',
      desc: 'Electrical installation, repairs, and maintenance for shops, offices, and small commercial spaces.',
      icon: IconShieldCheck,
      specs: ['Commercial Distribution Boards', 'Display & Track Lighting', 'Scheduled Workplace Maintenance']
    },
    {
      num: '07',
      title: 'Electrical Safety Checks',
      category: 'Safety Audits',
      desc: 'Checking electrical fittings and identifying visible electrical safety concerns in residential and workplace installations.',
      icon: IconCheckCircle,
      specs: ['Visual Fitting Inspection', 'Earth Continuity Verification', 'ELCB / RCCB Tripping Test']
    },
    {
      num: '08',
      title: 'Fan, Switch & Socket Installation',
      category: 'Fittings & Accessories',
      desc: 'Installation and replacement of common electrical fittings including modular switches, socket units, ceiling fans, and dimmers.',
      icon: IconZap,
      specs: ['Modular Switchboard Fitting', 'Ceiling Fan Assembly & Mounting', 'Heavy-Duty Power Sockets']
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Tell Us What You Need',
      desc: 'Explain the electrical issue or installation requirement via phone call or our quick online service request form.'
    },
    {
      step: '02',
      title: 'Discuss the Work',
      desc: 'We review the scope, understand your property requirements, and discuss the suitable approach and transparent pricing.'
    },
    {
      step: '03',
      title: 'Complete the Service',
      desc: 'Our technician carries out the agreed electrical work efficiently, adhering to safety codes and quality standards.'
    },
    {
      step: '04',
      title: 'Review the Result',
      desc: 'We inspect and test the completed installation or repair with you to ensure everything functions perfectly.'
    }
  ];

  return (
    <div className="services-page-root">
      <Header onOpenContactModal={handleOpenContactModal} />

      <main className="services-main-content">
        {/* ==========================================================================
           PAGE TITLE BREADCRUMB BANNER
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
                <span className="sp-crumb-active" aria-current="page">Services</span>
              </nav>

              {/* Prominent Page Title */}
              <h1 className="sp-breadcrumb-title">
                Our <span className="sp-gold-accent-shimmer">Services</span>
              </h1>

              {/* Short Subtitle */}
              <p className="sp-breadcrumb-subtitle">
                Reliable electrical solutions for homes, shops, and workplaces.
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
           SECTION 2: MAIN ELECTRICAL SERVICES HORIZONTAL SCROLLER
           ========================================================================== */}
        <section id="main-services" className="sp-services-section">
          <div className="container">
            <div className="sp-section-header-row">
              <div className="sp-section-header-text">
                <span className="sp-sub-eyebrow">WHAT WE DO</span>
                <h2 className="sp-section-title">
                  Our Core <span className="sp-gold-gradient">Electrical Services</span>
                </h2>
                <p className="sp-section-desc">
                  Reliable electrical installations, repairs, lighting setups, and safety maintenance delivered with precision.
                </p>
              </div>

              <div className="sp-scroller-controls">
                <button 
                  type="button" 
                  className="sp-scroll-btn" 
                  onClick={handleScrollLeft}
                  aria-label="Scroll left"
                  title="Scroll left"
                >
                  <IconChevronLeft size={20} />
                </button>
                <button 
                  type="button" 
                  className="sp-scroll-btn" 
                  onClick={handleScrollRight}
                  aria-label="Scroll right"
                  title="Scroll right"
                >
                  <IconChevronRight size={20} />
                </button>
              </div>
            </div>

            <div className="sp-scroller-wrapper">
              <div className="sp-services-scroller" ref={scrollerRef}>
                {mainServicesList.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <div 
                      key={index} 
                      className="sp-service-card"
                      style={{ 
                        '--delay': `${index * 0.05}s`,
                        '--index': index
                      }}
                    >
                      <div className="sp-card-top">
                        <div className="sp-card-num">{service.num}</div>
                        <span className="sp-card-chip">{service.category}</span>
                      </div>

                      <div className="sp-card-icon-box">
                        <IconComponent size={24} />
                      </div>

                      <h3 className="sp-card-title">{service.title}</h3>
                      <p className="sp-card-desc">{service.desc}</p>

                      <div className="sp-card-specs">
                        {service.specs.map((spec, i) => (
                          <div key={i} className="sp-spec-row">
                            <IconCheckCircle size={14} className="sp-spec-check" />
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>

                      <button 
                        className="sp-card-btn"
                        onClick={() => handleOpenContactModal(service.title)}
                        type="button"
                      >
                        <span>Request Service</span>
                        <IconArrowRight size={15} />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
           SECTION 3: HOW WE APPROACH THE WORK
           ========================================================================== */}
        <section className="sp-process-section">
          <div className="container">
            <div className="sp-section-header">
              <span className="sp-sub-eyebrow">OUR PROCESS</span>
              <h2 className="sp-section-title">
                How We Approach <span className="sp-gold-gradient">The Work</span>
              </h2>
              <p className="sp-section-desc">
                A simple, clear 4-step workflow to ensure your electrical job is completed safely and correctly.
              </p>
            </div>

            <div className="sp-process-grid">
              {processSteps.map((stepItem, idx) => (
                <div key={idx} className="sp-process-card">
                  <div className="sp-process-step-num">{stepItem.step}</div>
                  <h4 className="sp-process-card-title">{stepItem.title}</h4>
                  <p className="sp-process-card-desc">{stepItem.desc}</p>
                  {idx < processSteps.length - 1 && (
                    <div className="sp-process-connector">
                      <IconArrowRight size={16} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================================================
           SECTION 4: RESIDENTIAL AND COMMERCIAL WORK
           ========================================================================== */}
        <section className="sp-sectors-section">
          <div className="container">
            <div className="sp-section-header">
              <span className="sp-sub-eyebrow">CLIENT SECTORS</span>
              <h2 className="sp-section-title">
                Residential & Commercial <span className="sp-gold-gradient">Solutions</span>
              </h2>
              <p className="sp-section-desc">
                Tailored electrical assistance configured specifically for individual households and local commercial properties.
              </p>
            </div>

            <div className="sp-sectors-grid">
              {/* Sector 1: Residential */}
              <div className="sp-sector-card">
                <div className="sp-sector-img-wrap">
                  <img 
                    src={imgResidential} 
                    alt="Residential Electrical Work" 
                    className="sp-sector-img"
                    width="600"
                    height="380"
                  />
                  <div className="sp-sector-chip">Homes & Apartments</div>
                </div>

                <div className="sp-sector-body">
                  <h3 className="sp-sector-title">Residential Electrical Work</h3>
                  <p className="sp-sector-desc">
                    Homes, apartments, lighting, fans, switches, sockets, and wiring. We ensure safe power supply to keep your home running comfortably.
                  </p>

                  <ul className="sp-sector-list">
                    <li>
                      <IconCheckCircle size={16} className="sp-check-gold" />
                      <span>Switchboard, socket, and ceiling fan replacement</span>
                    </li>
                    <li>
                      <IconCheckCircle size={16} className="sp-check-gold" />
                      <span>Safety rewiring and MCB breaker panel fixes</span>
                    </li>
                    <li>
                      <IconCheckCircle size={16} className="sp-check-gold" />
                      <span>Architectural LED lights and outdoor ambient lighting</span>
                    </li>
                  </ul>

                  <button 
                    className="sp-sector-btn"
                    onClick={() => handleOpenContactModal('Residential Electrical Work')}
                    type="button"
                  >
                    <span>Request Residential Service</span>
                    <IconArrowRight size={16} />
                  </button>
                </div>
              </div>

              {/* Sector 2: Commercial */}
              <div className="sp-sector-card">
                <div className="sp-sector-img-wrap">
                  <img 
                    src={imgCommercial} 
                    alt="Commercial Electrical Work" 
                    className="sp-sector-img"
                    width="600"
                    height="380"
                  />
                  <div className="sp-sector-chip">Shops & Business Spaces</div>
                </div>

                <div className="sp-sector-body">
                  <h3 className="sp-sector-title">Commercial Electrical Work</h3>
                  <p className="sp-sector-desc">
                    Shops, offices, small businesses, lighting installations, and electrical maintenance to maintain continuous power flow.
                  </p>

                  <ul className="sp-sector-list">
                    <li>
                      <IconCheckCircle size={16} className="sp-check-gold" />
                      <span>Retail store track lighting and showroom displays</span>
                    </li>
                    <li>
                      <IconCheckCircle size={16} className="sp-check-gold" />
                      <span>Commercial distribution box setup & load balancing</span>
                    </li>
                    <li>
                      <IconCheckCircle size={16} className="sp-check-gold" />
                      <span>Preventive electrical maintenance for offices & shops</span>
                    </li>
                  </ul>

                  <button 
                    className="sp-sector-btn"
                    onClick={() => handleOpenContactModal('Commercial Electrical Work')}
                    type="button"
                  >
                    <span>Request Commercial Service</span>
                    <IconArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
           SECTION 5: FINAL ENQUIRY CTA
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

                <h2 className="sp-cta-heading">Need Help With an Electrical Job?</h2>
                <p className="sp-cta-text">
                  Tell us what you need, and get in touch with S.P.T. Electrical Services to discuss your electrical installation, repair, or maintenance requirements.
                </p>

                <div className="sp-cta-buttons">
                  <button 
                    className="sp-cta-main-btn"
                    onClick={() => handleOpenContactModal('Final CTA Inquiry')}
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
