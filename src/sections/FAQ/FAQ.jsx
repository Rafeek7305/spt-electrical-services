import React, { useState } from 'react';
import { IconZap, IconChevronDown } from '../../components/common/Icons';
import './FAQ.css';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What electrical services do you provide?',
      a: 'We provide comprehensive electrical services including new electrical installations, property wiring and rewiring, main distribution board and breaker panel upgrades, architectural LED lighting design & installation, and electrical diagnostics.'
    },
    {
      q: 'How can I request an electrical service or quotation?',
      a: 'You can click on the "Request a Service" or "Get a Service" button anywhere on our website to fill out a quick request form. Alternatively, you can contact our technical service team directly via call or WhatsApp for immediate assistance.'
    },
    {
      q: 'Do you handle both residential and commercial electrical projects?',
      a: 'Yes. We cater to residential homes, apartment complexes, commercial retail spaces, corporate offices, and light industrial facilities.'
    },
    {
      q: 'What safety standards do you follow during electrical work?',
      a: 'We strictly adhere to standard national electrical codes, utilizing proper cable sizing, conduit protection, residual current circuit breakers (RCCB/ELCB), and thorough earth continuity testing prior to power activation.'
    },
    {
      q: 'How quickly can a technician respond to an electrical inquiry?',
      a: 'We prioritize rapid response for local inquiries. Once you submit a request or call us, our team reviews your requirement promptly and coordinates a technician visit at your preferred time.'
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <IconZap size={14} />
            <span>Common Questions</span>
          </div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Find quick answers to common questions about our electrical services, safety processes, and booking.
          </p>
        </div>

        <div className="faq-accordion">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`faq-item ${isOpen ? 'faq-open' : ''}`}
              >
                <button 
                  className="faq-question-btn"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="faq-question-text">{faq.q}</span>
                  <div className="faq-icon-box">
                    <IconChevronDown size={18} className="faq-chevron" />
                  </div>
                </button>

                <div 
                  id={`faq-answer-${index}`}
                  className="faq-answer-wrapper"
                  role="region"
                >
                  <p className="faq-answer-text">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
