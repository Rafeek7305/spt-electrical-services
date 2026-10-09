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
  IconWhatsApp 
} from '../../components/common/Icons';

import imgBreadcrumb from '../../assets/images/services/services_breadcrumb.png';
import imgProjRes from '../../assets/images/gallery/project_residential.png';
import imgProjCom from '../../assets/images/gallery/project_commercial.png';
import imgProjInd from '../../assets/images/gallery/project_industrial.png';

import './ProjectsPage.css';

export const ProjectsPage = () => {
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

  const projectsList = [
    {
      title: 'Residential Modular Rewiring & Panel Upgrade',
      category: 'Residential',
      location: 'Apartment Complex',
      image: imgProjRes,
      desc: 'Complete electrical wiring overhaul, modular switchboard replacement, and safety MCB panel installation.',
      features: ['Concealed Conduit Wiring', 'Modular Fitting Upgrade', 'Load Distribution Balancing']
    },
    {
      title: 'Commercial Retail Store Track Lighting',
      category: 'Commercial',
      location: 'Retail Showroom',
      image: imgProjCom,
      desc: 'Architectural LED track lighting installation with energy-efficient spotlights and main distribution board setup.',
      features: ['High-CRI LED Spotlights', 'Dedicated Lighting Circuits', 'Emergency Back-up Prep']
    },
    {
      title: 'Small Business Distribution Board Maintenance',
      category: 'Commercial & Workplace',
      location: 'Office & Workshop',
      image: imgProjInd,
      desc: 'Distribution box inspection, terminal tightening, breaker replacement, and preventive load audit.',
      features: ['Three-Phase Load Balancing', 'Heavy Appliance Isolation', 'Thermal Terminal Checkup']
    }
  ];

  return (
    <div className="projects-page-root">
      <Header onOpenContactModal={handleOpenContactModal} />

      <main className="projects-main-content">
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
                <span className="sp-crumb-active" aria-current="page">Projects</span>
              </nav>

              {/* Page Title */}
              <h1 className="sp-breadcrumb-title">
                Our <span className="sp-gold-accent-shimmer">Projects</span>
              </h1>

              {/* Subtitle */}
              <p className="sp-breadcrumb-subtitle">
                Explore our portfolio of completed residential, commercial, and panel installation projects.
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
           PROJECTS SHOWCASE GRID
           ========================================================================== */}
        <section className="pj-grid-section">
          <div className="container">
            <div className="sp-section-header">
              <span className="sp-sub-eyebrow">PORTFOLIO</span>
              <h2 className="sp-section-title">
                Featured Electrical <span className="sp-gold-gradient">Work</span>
              </h2>
              <p className="sp-section-desc">
                A selection of electrical installations, wiring upgrades, and maintenance completed for our clients.
              </p>
            </div>

            <div className="pj-cards-grid">
              {projectsList.map((project, idx) => (
                <div key={idx} className="pj-card">
                  <div className="pj-card-img-wrap">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="pj-card-img" 
                    />
                    <span className="pj-card-chip">{project.category}</span>
                  </div>

                  <div className="pj-card-body">
                    <div className="pj-card-loc">{project.location}</div>
                    <h3 className="pj-card-title">{project.title}</h3>
                    <p className="pj-card-desc">{project.desc}</p>

                    <div className="pj-card-specs">
                      {project.features.map((feat, i) => (
                        <div key={i} className="pj-spec-row">
                          <IconCheckCircle size={14} className="pj-check-gold" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <button 
                      className="pj-card-btn"
                      onClick={() => handleOpenContactModal(`Inquiry about ${project.title}`)}
                      type="button"
                    >
                      <span>Inquire Similar Project</span>
                      <IconArrowRight size={15} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================================================
           CLOSING CTA
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

                <h2 className="sp-cta-heading">Have a Project in Mind?</h2>
                <p className="sp-cta-text">
                  Get in touch with S.P.T. Electrical Services to discuss your upcoming installation or repair project.
                </p>

                <div className="sp-cta-buttons">
                  <button 
                    className="sp-cta-main-btn"
                    onClick={() => handleOpenContactModal('Projects Page Inquiry')}
                    type="button"
                  >
                    <IconZap size={18} />
                    <span>Get a Service</span>
                  </button>

                  <a 
                    href="https://wa.me/919486939201?text=Hi%2C%20I%20have%20an%20electrical%20project%20inquiry." 
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
