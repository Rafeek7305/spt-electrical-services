import React, { useState } from 'react';
import { 
  IconZap, 
  IconChevronDown, 
  IconShieldCheck, 
  IconPhone, 
  IconWhatsApp, 
  IconArrowRight,
  IconCheckCircle 
} from '../../components/common/Icons';
import './FAQ.css';

const FAQS_DATA = [
  {
    num: '01',
    category: 'Capabilities',
    q: 'What electrical services do you provide?',
    a: 'We provide end-to-end residential, commercial, and industrial electrical solutions including new power rough-ins, property rewiring, 3-phase main distribution panel upgrades, architectural LED lighting design, and precision fault diagnostics.'
  },
  {
    num: '02',
    category: 'Quotation & Booking',
    q: 'How can I request an electrical service or quotation?',
    a: 'You can request service through our online form or by calling our technical desk directly. We perform an initial requirement review and dispatch a certified technician for on-site load evaluation and transparent upfront pricing.'
  },
  {
    num: '03',
    category: 'Project Types',
    q: 'Do you handle both residential and commercial electrical projects?',
    a: 'Yes. We cater to independent villas, residential apartment complexes, corporate offices, retail showrooms, healthcare centers, and light industrial manufacturing facilities.'
  },
  {
    num: '04',
    category: 'Safety & Codes',
    q: 'What safety standards do you follow during electrical work?',
    a: 'We strictly adhere to updated national safety regulations, utilizing flame-retardant copper conductors, proper conduit protection, RCCB/ELCB shock-protection breakers, and thorough earth continuity testing prior to power activation.'
  },
  {
    num: '05',
    category: 'Response Times',
    q: 'How quickly can a technician respond to an electrical inquiry?',
    a: 'We prioritize rapid turnaround. For standard inquiries, our team coordinates an on-site visit within 24 hours. For critical circuit trips or safety hazards, our emergency team provides rapid local dispatch.'
  }
];

export const FAQ = ({ onOpenContactModal }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section id="faq" className="faq-section">
      {/* Warm Ambient Glow Lighting */}
      <div className="faq-ambient-glow faq-glow-top"></div>
      <div className="faq-ambient-glow faq-glow-bottom"></div>

      <div className="container faq-container">
        {/* Section Header */}
        <div className="faq-header">
          <div className="faq-eyebrow-tag">
            <span className="faq-pulse-dot"></span>
            <IconZap size={14} className="faq-zap-icon" />
            <span>COMMON QUESTIONS</span>
          </div>

          <h2 className="faq-main-title">
            Frequently Asked <span className="faq-gold-accent">Questions</span>
          </h2>

          <p className="faq-main-subtitle">
            Find quick, transparent answers regarding our electrical service execution, safety testing, load estimations, and booking process.
          </p>
        </div>

        {/* Modern Glassmorphic Accordion List */}
        <div className="faq-accordion-stack">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`faq-glass-card ${isOpen ? 'faq-card-open' : ''}`}
              >
                <button 
                  className="faq-question-button"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  type="button"
                >
                  <div className="faq-q-left">
                    <span className="faq-number-badge">{faq.num}</span>
                    <span className="faq-question-title">{faq.q}</span>
                  </div>

                  <div className="faq-chevron-circle">
                    <IconChevronDown size={18} />
                  </div>
                </button>

                <div 
                  id={`faq-answer-${index}`}
                  className="faq-answer-collapse"
                  role="region"
                >
                  <div className="faq-answer-inner">
                    <div className="faq-answer-gold-line"></div>
                    <p className="faq-answer-body">{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Help Desk Floating Card */}
        <div className="faq-help-card">
          <div className="help-card-left">
            <div className="help-icon-orb">
              <IconPhone size={24} />
            </div>
            <div>
              <h4 className="help-title">Still have questions about your project?</h4>
              <p className="help-desc">Our master technicians are standing by to review your circuit load and schematics.</p>
            </div>
          </div>

          <div className="help-card-actions">
            <button 
              className="help-primary-btn"
              onClick={() => onOpenContactModal && onOpenContactModal('FAQ Inquiry')}
              type="button"
            >
              <span>Consult an Electrician</span>
              <IconArrowRight size={16} />
            </button>

            <a 
              href="https://wa.me/919486939201?text=Hi%2C%20I%20have%20an%20electrical%20service%20inquiry." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="help-whatsapp-btn"
            >
              <IconWhatsApp size={18} />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
