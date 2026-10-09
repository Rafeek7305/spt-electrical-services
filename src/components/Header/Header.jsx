import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logoImg from '../../assets/logo/logo.png';
import { 
  IconMenu, 
  IconX, 
  IconPhone, 
  IconWhatsApp, 
  IconZap, 
  IconChevronRight, 
  IconShieldCheck 
} from '../common/Icons';
import './Header.css';

export const Header = ({ onOpenContactModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();
  const isServicesPage = location.pathname === '/services';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (isServicesPage) {
        setActiveSection('services');
        return;
      }

      const sections = ['home', 'services', 'about', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 140;

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
  }, [isServicesPage]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '/', id: 'home' },
    { label: 'Services', href: '/services', id: 'services' },
    { label: 'About Us', href: '#about', id: 'about' },
    { label: 'Projects', href: '#gallery', id: 'gallery' },
    { label: 'Contact', href: '#contact', id: 'contact' }
  ];

  const handleNavClick = (e, href, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (id === 'services' || href === '/services') {
      if (location.pathname !== '/services') {
        navigate('/services');
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (id === 'home' || href === '/') {
      if (location.pathname !== '/') {
        navigate('/');
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(id);
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
    <>
      <header className={`site-header ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="container header-container">
          {/* Brand Logo */}
          <a href="/" className="header-logo-link" onClick={(e) => handleNavClick(e, '/', 'home')}>
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
                    onClick={(e) => handleNavClick(e, link.href, link.id)}
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
              onClick={() => onOpenContactModal && onOpenContactModal()}
              type="button"
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
            type="button"
          >
            {mobileMenuOpen ? <IconX size={22} /> : <IconMenu size={22} />}
          </button>
        </div>
      </header>

      {/* Modern Mobile Navigation Drawer & Backdrop Overlay (Portaled outside transformed header) */}
      <div 
        className={`mobile-overlay ${mobileMenuOpen ? 'overlay-visible' : ''}`} 
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden={!mobileMenuOpen}
      />

      <div 
        className={`mobile-nav-drawer ${mobileMenuOpen ? 'drawer-open' : ''}`}
        aria-hidden={!mobileMenuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
      >
        {/* Drawer Header */}
        <div className="mobile-nav-header">
          <a href="/" className="drawer-logo-wrap" onClick={(e) => handleNavClick(e, '/', 'home')}>
            <img src={logoImg} alt="S.P.T. Electrical Services" className="mobile-logo" />
          </a>
          
          <button 
            className="mobile-close-icon"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
            type="button"
          >
            <IconX size={20} />
          </button>
        </div>

        {/* Navigation Link Stack */}
        <nav className="mobile-nav-list" aria-label="Mobile Navigation Links">
          {navLinks.map((link, idx) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, link.href, link.id)}
                style={{ '--delay': `${idx * 0.04}s` }}
              >
                <span className="mobile-nav-text">{link.label}</span>
                <span className="mobile-nav-arrow">
                  <IconChevronRight size={18} />
                </span>
              </a>
            );
          })}
        </nav>

        {/* Drawer Footer Actions */}
        <div className="mobile-drawer-footer">
          <div className="drawer-trust-tag">
            <IconShieldCheck size={15} />
            <span>Licensed & Safety Inspected</span>
          </div>

          <button 
            className="mobile-cta-btn"
            onClick={() => {
              setMobileMenuOpen(false);
              if (onOpenContactModal) onOpenContactModal('Mobile Menu CTA');
            }}
            type="button"
          >
            <IconZap size={18} />
            <span>Get a Service</span>
          </button>

          <a 
            href="https://wa.me/919876543210?text=Hi%2C%20I%20have%20an%20electrical%20service%20inquiry." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mobile-drawer-whatsapp"
          >
            <IconWhatsApp size={18} />
            <span>WhatsApp Quick Chat</span>
          </a>
        </div>
      </div>
    </>
  );
};

