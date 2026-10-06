import React from 'react';
import { IconZap, IconPhone, IconWhatsApp, IconArrowRight } from '../../components/common/Icons';
import './FinalCTA.css';

export const FinalCTA = ({ onOpenContactModal }) => {
  return (
    <section className="final-cta-section">
      <div className="container">
        <div className="final-cta-card">
          <div className="final-cta-content">
            <div className="section-tag section-tag-dark">
              <IconZap size={14} />
              <span>Get Started Today</span>
            </div>
            
            <h2 className="final-cta-title">
              Need Electrical Work You Can Rely On?
            </h2>

            <p className="final-cta-desc">
              Whether you require a complete electrical installation, distribution board upgrade, or routine maintenance, S.P.T. Electrical Services is ready to assist.
            </p>

            <div className="final-cta-buttons">
              <button 
                className="btn btn-primary cta-btn-main"
                onClick={() => onOpenContactModal()}
              >
                <span>Request a Service</span>
                <IconArrowRight size={18} />
              </button>

              <a 
                href="https://wa.me/?text=Hello%20S.P.T.%20Electrical%20Services,%20I%20need%20electrical%20assistance." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline-white cta-btn-sub"
              >
                <IconWhatsApp size={18} />
                <span>WhatsApp Inquiry</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
