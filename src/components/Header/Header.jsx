import React, { useState, useEffect } from 'react';
import logoImg from '../../assets/logo/logo2.png';
import { IconMenu, IconX, IconPhone, IconZap } from '../common/Icons';
import './Header.css';

export const Header = ({ onOpenContactModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Simple active link tracker on scroll
      const sections = ['home', 'services', 'about', 'gallery', 'process', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'Process', href: '#process', id: 'process' },
    { label: 'FAQ', href: '#faq', id: 'faq' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <header className={`site-header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        {/* Brand Logo */}
        <a href="#home" className="header-logo-link" onClick={(e) => handleNavClick(e, '#home')}>
          <img 
            src={logoImg} 
            alt="S.P.T. Electrical Services Logo" 
            className="header-logo" 
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.id} className="nav-item">
                <a
                  href={link.href}
                  className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Header Actions */}
        <div className="header-actions">
          <button 
            className="btn btn-primary header-cta" 
            onClick={() => onOpenContactModal()}
          >
            <IconZap size={16} />
            <span>Get a Service</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          className="mobile-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <IconX size={24} /> : <IconMenu size={24} />}
        </button>

        {/* Mobile Menu Backdrop Overlay */}
        {mobileMenuOpen && (
          <div className="mobile-overlay" onClick={() => setMobileMenuOpen(false)} />
        )}

        {/* Mobile Menu Drawer */}
        <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'drawer-open' : ''}`}>
          <div className="mobile-nav-header">
            <img src={logoImg} alt="S.P.T. Electrical Services" className="mobile-logo" />
            <button 
              className="mobile-close-icon"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <IconX size={22} />
            </button>
          </div>

          <nav className="mobile-nav-list" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mobile-drawer-footer">
            <button 
              className="btn btn-primary mobile-cta-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContactModal();
              }}
            >
              <IconZap size={18} />
              <span>Get a Service</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
