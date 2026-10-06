import React from 'react';
import aboutImg from '../../assets/images/about/about_electrical.png';
import { IconZap, IconShieldCheck, IconCheckCircle, IconArrowRight, IconClock, IconWrench } from '../../components/common/Icons';
import './AboutPreview.css';

export const AboutPreview = ({ onOpenContactModal }) => {
  return (
    <section id="about" className="about-section">
      <div className="container about-container">
        {/* Left Image Column */}
        <div className="about-visual">
          <div className="about-img-frame">
            <img 
              src={aboutImg} 
              alt="S.P.T. Electrical Services team electrical engineering setup" 
              className="about-img"
              width="650"
              height="500"
            />
            <div className="about-experience-badge">
              <IconWrench size={24} />
              <div>
                <strong>Professional Service</strong>
                <span>Engineering Excellence</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content Column */}
        <div className="about-content">
          <div className="section-tag">
            <IconZap size={14} />
            <span>About S.P.T. Electrical Services</span>
          </div>

          <h2 className="section-title">
            Delivering Safe, Structured & Reliable Electrical Power
          </h2>

          <p className="about-text">
            S.P.T. Electrical Services is a dedicated electrical contracting provider focused on delivering high-standard installation, repair, and maintenance services. We serve residential homes, commercial premises, and light industrial facilities.
          </p>

          <p className="about-text">
            Our approach prioritizes structured cable management, proper load distribution, and adherence to safety regulations to ensure long-lasting electrical infrastructure.
          </p>

          {/* Key Standards List */}
          <div className="about-key-list">
            <div className="about-key-item">
              <IconCheckCircle size={20} className="about-check-icon" />
              <div>
                <strong>Licensed Standards</strong>
                <p>Execution following current safety codes & circuit load specs.</p>
              </div>
            </div>

            <div className="about-key-item">
              <IconCheckCircle size={20} className="about-check-icon" />
              <div>
                <strong>Neat & Organized Finish</strong>
                <p>Structured wiring routing for ease of maintenance & longevity.</p>
              </div>
            </div>

            <div className="about-key-item">
              <IconCheckCircle size={20} className="about-check-icon" />
              <div>
                <strong>Dependable Turnaround</strong>
                <p>Clear timelines and responsive technical support.</p>
              </div>
            </div>
          </div>

          <div className="about-actions">
            <button 
              className="btn btn-navy"
              onClick={() => onOpenContactModal()}
            >
              <span>Speak with an Electrician</span>
              <IconArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
