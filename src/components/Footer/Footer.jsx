import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logoImg from '../../assets/logo/logo.png';
import { IconZap, IconPhone, IconWhatsApp, IconMapPin, IconArrowUpRight, IconClock, IconShieldCheck } from '../common/Icons';
import './Footer.css';

export const Footer = ({ onOpenContactModal }) => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, href, id = '') => {
    e.preventDefault();
    const targetId = id || href.replace('#', '');

    if (href === '/services' || targetId === 'services') {
      if (location.pathname !== '/services') {
        navigate('/services');
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (targetId === 'home' || href === '/') {
      if (location.pathname !== '/') {
        navigate('/');
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: targetId } });
    } else {
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
    }
  };

  return (
    <footer id="contact" className="site-footer">
      {/* Subtle Warm Top Glow */}
      <div className="footer-ambient-glow"></div>

      <div className="container footer-container">
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
              <IconShieldCheck size={16} className="badge-shield" />
              <span>Licensed & Safety Certified Contracting</span>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="footer-col">
            <h4 className="footer-col-title">
              <span>Navigation</span>
              <div className="footer-title-bar"></div>
            </h4>
            <ul className="footer-links">
              <li><a href="/" onClick={(e) => handleNavClick(e, '/', 'home')}>Home</a></li>
              <li><a href="/services" onClick={(e) => handleNavClick(e, '/services', 'services')}>Services</a></li>
              <li><a href="#about" onClick={(e) => handleNavClick(e, '#about', 'about')}>About Us</a></li>
              <li><a href="#gallery" onClick={(e) => handleNavClick(e, '#gallery', 'gallery')}>Work Gallery</a></li>
              <li><a href="#process" onClick={(e) => handleNavClick(e, '#process', 'process')}>Our Process</a></li>
              <li><a href="#faq" onClick={(e) => handleNavClick(e, '#faq', 'faq')}>FAQ</a></li>
            </ul>
          </div>

          {/* Core Services Col */}
          <div className="footer-col">
            <h4 className="footer-col-title">
              <span>Services</span>
              <div className="footer-title-bar"></div>
            </h4>
            <ul className="footer-links">
              <li><a href="/services" onClick={(e) => handleNavClick(e, '/services', 'services')}>Electrical Installation</a></li>
              <li><a href="/services" onClick={(e) => handleNavClick(e, '/services', 'services')}>Wiring & Rewiring</a></li>
              <li><a href="/services" onClick={(e) => handleNavClick(e, '/services', 'services')}>Circuit Diagnostics</a></li>
              <li><a href="/services" onClick={(e) => handleNavClick(e, '/services', 'services')}>Lighting Installation</a></li>
              <li><a href="/services" onClick={(e) => handleNavClick(e, '/services', 'services')}>Panel & Breaker Work</a></li>
            </ul>
          </div>

          {/* Contact & Inquiry Col */}
          <div className="footer-col footer-contact-col">
            <h4 className="footer-col-title">
              <span>Service Inquiry</span>
              <div className="footer-title-bar"></div>
            </h4>
            <div className="footer-inquiry-box">
              <p className="footer-contact-text">
                Have an upcoming electrical requirement or emergency panel issue? Reach our technical response team.
              </p>
              
              <button 
                className="footer-cta-btn"
                onClick={() => onOpenContactModal && onOpenContactModal('General Footer Inquiry')}
                type="button"
              >
                <IconZap size={16} />
                <span>Request Service</span>
              </button>

              <a 
                href="https://wa.me/919876543210?text=Hello%20S.P.T.%20Electrical%20Services," 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-whatsapp-link"
              >
                <IconWhatsApp size={17} />
                <span>WhatsApp Direct Chat</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Line */}
        <div className="footer-bottom">
          <p className="copyright-text">
            © {currentYear} <span className="copyright-bold">S.P.T. Electrical Services</span>. All rights reserved. Professional Electrical Contracting.
          </p>
          <div className="footer-legal-links">
            <a href="#home" className="footer-back-top" onClick={(e) => handleNavClick(e, '#home')}>
              <span>Back to Top</span>
              <IconArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

