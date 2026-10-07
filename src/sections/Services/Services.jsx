import React, { useState } from 'react';
import imgInstallation from '../../assets/images/services/installation.png';
import imgWiring from '../../assets/images/services/wiring.png';
import imgRepairs from '../../assets/images/services/repairs.png';
import imgLighting from '../../assets/images/services/lighting.png';
import imgPanel from '../../assets/images/hero/slide_panel.png';
import { 
  IconZap, 
  IconWrench, 
  IconCheckCircle, 
  IconArrowRight, 
  IconShieldCheck, 
  IconLightbulb, 
  IconActivity, 
  IconLayers,
  IconClock,
  IconChevronRight
} from '../../components/common/Icons';
import './Services.css';

export const Services = ({ onOpenContactModal }) => {
  const [activeTab, setActiveTab] = useState(0);

  const servicesData = [
    {
      id: 'installation',
      num: '01',
      title: 'Electrical Installation',
      category: 'Residential & Commercial',
      badge: 'Code Compliant',
      desc: 'Complete power distribution setup, sub-panel configuration, line extensions, and high-efficiency appliance connections tailored to current safety codes.',
      img: imgInstallation,
      icon: IconZap,
      specs: [
        { label: 'Rough-In & Trim', desc: 'Complete new building conduit, wiring, and finishing' },
        { label: 'Main Panels', desc: 'Commercial distribution boards and feeder lines' },
        { label: 'Phase Distribution', desc: 'Precision balanced 3-phase and single-phase setups' },
        { label: 'Load Assessment', desc: 'Capacity optimization and energy demand audits' }
      ]
    },
    {
      id: 'wiring',
      num: '02',
      title: 'Wiring & Rewiring',
      category: 'Safety & Modernization',
      badge: 'Modern Cabling',
      desc: 'Comprehensive electrical cabling upgrades, replacement of outdated aluminum or damaged copper lines, structured conduit routing, and grounding installations.',
      img: imgWiring,
      icon: IconLayers,
      specs: [
        { label: 'Full Property Rewiring', desc: 'Safety-certified copper line overhaul and upgrades' },
        { label: 'Conduit Routing', desc: 'Concealed channel organization and trunking' },
        { label: 'Earth Grounding', desc: 'Dedicated grounding rods and surge mitigation' },
        { label: 'Insulation Testing', desc: 'Megger testing and load balance verification' }
      ]
    },
    {
      id: 'repairs',
      num: '03',
      title: 'Electrical Repairs & Diagnostics',
      category: 'Precision Troubleshooting',
      badge: 'Rapid Response',
      desc: 'Rapid identification and resolution of circuit tripping, line voltage fluctuations, burnt outlets, breaker failures, and hidden electrical faults.',
      img: imgRepairs,
      icon: IconWrench,
      specs: [
        { label: 'Digital Diagnostics', desc: 'Multimeter fault isolation and line tracing' },
        { label: 'Breaker Replacement', desc: 'High-current MCB and isolator upgrades' },
        { label: 'Short-Circuit Repair', desc: 'Rapid fault location without wall damage' },
        { label: 'Hardware Fixes', desc: 'Burnt socket, switch, and connector renewal' }
      ]
    },
    {
      id: 'lighting',
      num: '04',
      title: 'Lighting Installation & Design',
      category: 'Architectural & Energy Efficient',
      badge: 'Smart Controls',
      desc: 'Expert installation of indoor architectural LED spotlights, recessed ceiling lights, ambient strip lights, high-bay factory lights, and outdoor floodlights.',
      img: imgLighting,
      icon: IconLightbulb,
      specs: [
        { label: 'Architectural LED', desc: 'Recessed spotlights, coves, and profile lighting' },
        { label: 'Smart Dimming', desc: 'Automated wireless controls and scene setting' },
        { label: 'Commercial Fixtures', desc: 'Overhead retail and high-bay warehouse arrays' },
        { label: 'Landscape & Security', desc: 'Weatherproof perimeter floodlights and sensors' }
      ]
    },
    {
      id: 'panel',
      num: '05',
      title: 'Distribution Board / Panel Work',
      category: 'Power Infrastructure',
      badge: 'Heavy Duty',
      desc: 'Upgrading aged main breaker boxes to modern heavy-duty distribution boards equipped with residual current circuit breakers (RCCB/ELCB) and clear labeling.',
      img: imgPanel,
      icon: IconActivity,
      specs: [
        { label: 'Panel Upgrades', desc: 'Heavy-gauge breaker box enclosure installation' },
        { label: 'ELCB / RCCB Protection', desc: 'Sensitive earth leakage and shock prevention' },
        { label: 'Sub-Metering', desc: 'Independent unit metering and phase separation' },
        { label: 'Circuit Mapping', desc: 'Crystal-clear color-coded schematic labeling' }
      ]
    }
  ];

  const currentService = servicesData[activeTab];

  return (
    <section id="services" className="services-section">
      {/* High-tech Ambient Background Lighting & Circuit Glow */}
      <div className="services-ambient-glow services-glow-tr"></div>
      <div className="services-ambient-glow services-glow-bl"></div>

      <div className="container services-container">
        {/* Modern Section Header */}
        <div className="services-header">
          <div className="services-eyebrow-tag">
            <span className="eyebrow-pulse"></span>
            <IconZap size={14} className="eyebrow-icon" />
            <span>CORE CAPABILITIES</span>
          </div>
          <h2 className="services-main-title">
            Precision Electrical Services <br />
            <span className="services-gold-accent">Built for Safety & Scale</span>
          </h2>
          <p className="services-main-subtitle">
            Certified residential, commercial, and industrial electrical solutions engineered to the highest safety and regulatory standards.
          </p>
        </div>

        {/* Dynamic Asymmetric Grid Layout */}
        <div className="services-grid-wrapper">
          {/* Left Navigation Navigator */}
          <div className="services-navigator-col">
            <div className="navigator-header">
              <span className="navigator-label">SELECT CAPABILITY</span>
              <span className="navigator-badge">05 Specializations</span>
            </div>

            <div className="services-nav-stack" role="tablist">
              {servicesData.map((service, idx) => {
                const IconComp = service.icon;
                const isActive = activeTab === idx;
                return (
                  <button
                    key={service.id}
                    role="tab"
                    aria-selected={isActive}
                    className={`service-tab-card ${isActive ? 'tab-active' : ''}`}
                    onClick={() => setActiveTab(idx)}
                    type="button"
                  >
                    <div className="tab-left-group">
                      <div className="tab-icon-box">
                        <IconComp size={20} />
                      </div>
                      <div className="tab-text-meta">
                        <div className="tab-top-row">
                          <span className="tab-num">{service.num}</span>
                          <span className="tab-badge-pill">{service.badge}</span>
                        </div>
                        <span className="tab-title">{service.title}</span>
                        <span className="tab-cat">{service.category}</span>
                      </div>
                    </div>
                    <div className="tab-arrow-wrap">
                      <IconChevronRight size={18} />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Custom Engineering Box */}
            <div className="service-custom-card">
              <div className="custom-card-header">
                <div className="custom-icon-orb">
                  <IconShieldCheck size={22} />
                </div>
                <div>
                  <h4 className="custom-card-title">Custom Project?</h4>
                  <p className="custom-card-desc">Need tailored 3-phase engineering or complex load distribution?</p>
                </div>
              </div>
              <button 
                className="custom-inquire-btn"
                onClick={() => onOpenContactModal('Custom Engineering Project')}
                type="button"
              >
                <span>Inquire Custom Work</span>
                <IconArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Right Featured Detail Showcase */}
          <div className="services-showcase-col">
            <div className="showcase-glass-card" key={`showcase-${currentService.id}`}>
              {/* Media Container with Badges */}
              <div className="showcase-media-frame">
                <img 
                  src={currentService.img} 
                  alt={currentService.title} 
                  className="showcase-cover-img"
                  width="720"
                  height="400"
                />
                <div className="showcase-media-gradient"></div>

                <div className="showcase-top-badges">
                  <span className="media-chip category-chip">
                    {currentService.category}
                  </span>
                  <span className="media-chip safety-chip">
                    <IconShieldCheck size={14} />
                    <span>Verified Safety Code</span>
                  </span>
                </div>

                <div className="showcase-index-watermark">
                  <span>{currentService.num}</span>
                </div>
              </div>

              {/* Information Body */}
              <div className="showcase-body">
                <div className="showcase-title-row">
                  <div>
                    <span className="showcase-kicker">SPECIALIZED SOLUTION</span>
                    <h3 className="showcase-heading">{currentService.title}</h3>
                  </div>
                  <div className="showcase-num-pill">
                    {currentService.num} / 05
                  </div>
                </div>

                <p className="showcase-description">{currentService.desc}</p>

                {/* 4-Block Technical Feature Cards */}
                <div className="showcase-specs-grid">
                  {currentService.specs.map((spec, i) => (
                    <div key={i} className="spec-item-card">
                      <div className="spec-check-orb">
                        <IconCheckCircle size={16} />
                      </div>
                      <div className="spec-text-block">
                        <strong className="spec-item-title">{spec.label}</strong>
                        <p className="spec-item-desc">{spec.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action Bar & Trust Badges */}
                <div className="showcase-action-bar">
                  <button 
                    className="showcase-primary-btn"
                    onClick={() => onOpenContactModal(currentService.title)}
                    type="button"
                  >
                    <span>Request {currentService.title}</span>
                    <IconArrowRight size={18} />
                  </button>

                  <div className="showcase-trust-signals">
                    <div className="trust-signal-item">
                      <IconClock size={16} className="signal-gold-icon" />
                      <span>Rapid Response</span>
                    </div>
                    <div className="trust-signal-item">
                      <IconShieldCheck size={16} className="signal-gold-icon" />
                      <span>Guaranteed Workmanship</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
