import React, { useState } from 'react';
import imgInstallation from '../../assets/images/services/installation.png';
import imgWiring from '../../assets/images/services/wiring.png';
import imgRepairs from '../../assets/images/services/repairs.png';
import imgLighting from '../../assets/images/services/lighting.png';
import { IconZap, IconWrench, IconCheckCircle, IconArrowRight, IconShieldCheck, IconLightbulb, IconActivity, IconLayers } from '../../components/common/Icons';
import './Services.css';

export const Services = ({ onOpenContactModal }) => {
  const [activeTab, setActiveTab] = useState(0);

  const servicesData = [
    {
      id: 'installation',
      title: 'Electrical Installation',
      category: 'Residential & Commercial',
      desc: 'Complete power distribution setup, sub-panel configuration, line extensions, and high-efficiency appliance connections tailored to current safety codes.',
      img: imgInstallation,
      icon: IconZap,
      features: [
        'New building complete electrical rough-in & trim',
        'Commercial main distribution panel setup',
        'Three-phase and single-phase circuit wiring',
        'Load assessment & capacity optimization'
      ]
    },
    {
      id: 'wiring',
      title: 'Wiring & Rewiring',
      category: 'Safety & Modernization',
      desc: 'Comprehensive electrical cabling upgrades, replacement of outdated aluminum or damaged copper lines, structured conduit routing, and grounding installations.',
      img: imgWiring,
      icon: IconLayers,
      features: [
        'Entire property safety re-wiring & line updates',
        'Conduit routing & concealed wire organization',
        'Earth grounding system & surge mitigation',
        'Insulation testing & load balance verification'
      ]
    },
    {
      id: 'repairs',
      title: 'Electrical Repairs & Diagnostics',
      category: 'Precision Troubleshooting',
      desc: 'Rapid identification and resolution of circuit tripping, line voltage fluctuations, burnt outlets, breaker failures, and hidden electrical faults.',
      img: imgRepairs,
      icon: IconWrench,
      features: [
        'Digital multimeter diagnostic fault finding',
        'Circuit breaker & MCB replacement',
        'Short-circuit location & cable repair',
        'Burnt socket & switch replacement'
      ]
    },
    {
      id: 'lighting',
      title: 'Lighting Installation & Design',
      category: 'Architectural & Energy Efficient',
      desc: 'Expert installation of indoor architectural LED spotlights, recessed ceiling lights, ambient strip lights, high-bay factory lights, and outdoor floodlights.',
      img: imgLighting,
      icon: IconLightbulb,
      features: [
        'Architectural indoor LED lighting installation',
        'Smart dimmer switch & automated controls',
        'Commercial office & retail overhead lighting',
        'Outdoor landscape & security floodlights'
      ]
    },
    {
      id: 'panel',
      title: 'Distribution Board / Panel Work',
      category: 'Power Infrastructure',
      desc: 'Upgrading aged main breaker boxes to modern heavy-duty distribution boards equipped with residual current circuit breakers (RCCB/ELCB) and clear labeling.',
      img: imgInstallation, // reusing high quality installation panel asset
      icon: IconActivity,
      features: [
        'Distribution board upgrades & main breaker install',
        'RCCB/ELCB safety earth leakage protection',
        'Sub-meter installation & phase distribution',
        'Neat panel labeling & circuit diagramming'
      ]
    }
  ];

  const currentService = servicesData[activeTab];

  return (
    <section id="services" className="services-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <IconZap size={14} />
            <span>Core Capabilities</span>
          </div>
          <h2 className="section-title">Professional Electrical Services</h2>
          <p className="section-subtitle">
            Engineered with safety, reliability, and precision. Explore our range of electrical solutions built to industrial standards.
          </p>
        </div>

        {/* Dynamic Asymmetric Layout Container */}
        <div className="services-layout">
          {/* Left Navigation List */}
          <div className="services-nav-col">
            <h3 className="services-nav-heading">Select Service Area</h3>
            <div className="services-nav-list" role="tablist">
              {servicesData.map((service, idx) => {
                const IconComp = service.icon;
                const isActive = activeTab === idx;
                return (
                  <button
                    key={service.id}
                    role="tab"
                    aria-selected={isActive}
                    className={`service-nav-item ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveTab(idx)}
                  >
                    <div className="service-nav-icon">
                      <IconComp size={18} />
                    </div>
                    <div className="service-nav-meta">
                      <span className="service-nav-title">{service.title}</span>
                      <span className="service-nav-cat">{service.category}</span>
                    </div>
                    <IconArrowRight size={16} className="service-nav-arrow" />
                  </button>
                );
              })}
            </div>

            <div className="service-quick-cta-box">
              <IconShieldCheck size={28} className="cta-box-icon" />
              <div>
                <strong>Need custom work?</strong>
                <p>We provide tailored electrical solutions for specialized projects.</p>
              </div>
              <button 
                className="btn btn-navy btn-sm"
                onClick={() => onOpenContactModal()}
              >
                Inquire Now
              </button>
            </div>
          </div>

          {/* Right Featured Showcase Detail Box */}
          <div className="services-showcase-col">
            <div className="showcase-card">
              <div className="showcase-image-wrap">
                <img 
                  src={currentService.img} 
                  alt={currentService.title} 
                  className="showcase-img"
                  width="700"
                  height="450"
                />
                <div className="showcase-category-badge">
                  <span>{currentService.category}</span>
                </div>
              </div>

              <div className="showcase-content">
                <div className="showcase-num">0{activeTab + 1}</div>
                <h3 className="showcase-title">{currentService.title}</h3>
                <p className="showcase-desc">{currentService.desc}</p>

                <div className="showcase-features-grid">
                  {currentService.features.map((feat, index) => (
                    <div key={index} className="showcase-feature-item">
                      <IconCheckCircle size={18} className="feature-check-icon" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="showcase-footer">
                  <button 
                    className="btn btn-primary"
                    onClick={() => onOpenContactModal(currentService.title)}
                  >
                    <span>Request {currentService.title}</span>
                    <IconArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
