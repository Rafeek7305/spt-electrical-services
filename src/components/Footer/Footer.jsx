import React from 'react';
import logoImg from '../../assets/logo/logo.png';
import { IconZap, IconPhone, IconWhatsApp, IconMapPin, IconArrowUpRight } from '../common/Icons';
import './Footer.css';

export const Footer = ({ onOpenContactModal }) => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer id="contact" className="site-footer">
      <div className="container">
        {/* Main Footer Grid */}
        <div className="footer-grid">
          {/* Brand Col */}
          <div className="footer-brand-col">
            <a href="#home" className="footer-logo-link" onClick={(e) => handleNavClick(e, '#home')}>
              <img src={logoImg} alt="S.P.T. Electrical Services Logo" className="footer-logo" />
            </a>
            <p className="footer-brand-desc">
              S.P.T. Electrical Services delivers licensed, high-standard electrical installation, wiring, panel maintenance, and repairs for residential, commercial, and industrial clients.
            </p>
            <div className="footer-trust-badge">
              <IconZap size={16} className="badge-zap" />
              <span>Safety Certified Electrical Contracting</span>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links">
              <li><a href="#home" onClick={(e) => handleNavClick(e, '#home')}>Home</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')}>Services</a></li>
              <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About Us</a></li>
              <li><a href="#gallery" onClick={(e) => handleNavClick(e, '#gallery')}>Work Gallery</a></li>
              <li><a href="#process" onClick={(e) => handleNavClick(e, '#process')}>Our Process</a></li>
              <li><a href="#faq" onClick={(e) => handleNavClick(e, '#faq')}>FAQ</a></li>
            </ul>
          </div>

          {/* Core Services Col */}
          <div className="footer-col">
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-links">
              <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')}>Electrical Installation</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')}>Wiring & Rewiring</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')}>Circuit Diagnostics</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')}>Lighting Installation</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')}>Panel & Breaker Work</a></li>
            </ul>
          </div>

          {/* Contact & Inquiry Col */}
          <div className="footer-col footer-contact-col">
            <h4 className="footer-col-title">Service Inquiry</h4>
            <p className="footer-contact-text">
              Have an upcoming electrical requirement or emergency panel issue? Reach our technical response team.
            </p>
            <button 
              className="btn btn-primary footer-cta-btn"
              onClick={() => onOpenContactModal()}
            >
              <IconZap size={16} />
              <span>Request Service</span>
            </button>
            <a 
              href="https://wa.me/?text=Hello%20S.P.T.%20Electrical%20Services," 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-whatsapp-link"
            >
              <IconWhatsApp size={16} />
              <span>WhatsApp Direct Chat</span>
            </a>
          </div>
        </div>

        {/* Footer Bottom Line */}
        <div className="footer-bottom">
          <p className="copyright-text">
            © {currentYear} S.P.T. Electrical Services. All rights reserved. Professional Electrical Contracting.
          </p>
          <div className="footer-legal-links">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')}>Back to Top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
