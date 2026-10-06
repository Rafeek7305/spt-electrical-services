import React from 'react';
import { IconShieldCheck, IconCheckCircle, IconZap, IconWrench, IconClock } from '../../components/common/Icons';
import './Trust.css';

export const Trust = ({ onOpenContactModal }) => {
  const pillars = [
    {
      num: '01',
      title: 'Safety-First Standard',
      desc: 'Strict adherence to national electrical codes, earth leakage protection, and thorough insulation verification before power delivery.'
    },
    {
      num: '02',
      title: 'Precision Workmanship',
      desc: 'Clean, organized wire harnessing and labeled distribution panels that make future servicing effortless and intuitive.'
    },
    {
      num: '03',
      title: 'Transparent Process',
      desc: 'Clear scope analysis before work begins with upfront explanation of requirement, materials, and safety steps.'
    },
    {
      num: '04',
      title: 'Dependable Reliability',
      desc: 'Punctual response times and dedicated technical focus to ensure your power systems run safely without interruption.'
    }
  ];

  return (
    <section className="trust-section">
      <div className="container">
        <div className="trust-wrapper">
          {/* Left Intro Banner */}
          <div className="trust-banner">
            <div className="section-tag section-tag-dark">
              <IconShieldCheck size={14} />
              <span>Why Choose S.P.T.</span>
            </div>
            
            <h2 className="section-title title-dark">
              Built on Technical Precision & Uncompromising Safety
            </h2>

            <p className="trust-banner-desc">
              At S.P.T. Electrical Services, electrical safety and long-term durability are at the core of everything we do. We bring systematic engineering principles to every installation and repair.
            </p>

            <div className="trust-guarantee-card">
              <div className="guarantee-icon">
                <IconZap size={24} />
              </div>
              <div>
                <strong>Our Commitment</strong>
                <span>Zero compromises on electrical safety or cable quality.</span>
              </div>
            </div>

            <button 
              className="btn btn-primary trust-cta-btn"
              onClick={() => onOpenContactModal()}
            >
              <span>Get Professional Assistance</span>
              <IconCheckCircle size={18} />
            </button>
          </div>

          {/* Right 4 Pillars Grid */}
          <div className="trust-pillars-grid">
            {pillars.map((item) => (
              <div key={item.num} className="trust-pillar-card">
                <span className="pillar-num">{item.num}</span>
                <h3 className="pillar-title">{item.title}</h3>
                <p className="pillar-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
