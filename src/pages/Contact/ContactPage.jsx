import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { QuickContactModal } from '../../components/common/QuickContactModal';
import { 
  IconZap, 
  IconShieldCheck, 
  IconCheckCircle, 
  IconPhone, 
  IconWhatsApp, 
  IconArrowRight,
  IconClock,
  IconMapPin
} from '../../components/common/Icons';

import imgBreadcrumb from '../../assets/images/services/services_breadcrumb.png';

import './ContactPage.css';

export const ContactPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: 'Electrical Installation',
    location: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOpenContactModal = (serviceName = '') => {
    setSelectedService(serviceName);
    setModalOpen(true);
  };

  const handleCloseContactModal = () => {
    setModalOpen(false);
    setSelectedService('');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formError) setFormError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setFormError('Please fill in all required fields (Full Name, Phone Number, and Message).');
      return;
    }

    setIsSubmitting(true);
    setFormError('');

    // Simulate clean form handling
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 600);
  };

  const handleResetForm = () => {
    setFormSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      service: 'Electrical Installation',
      location: '',
      message: ''
    });
  };

  return (
    <div className="contact-page-root">
      <Header onOpenContactModal={handleOpenContactModal} />

      <main className="contact-main-content">
        {/* ==========================================================================
           PAGE TITLE BREADCRUMB BANNER
           ========================================================================== */}
        <section className="sp-breadcrumb-banner">
          <div 
            className="sp-breadcrumb-bg"
            style={{ backgroundImage: `url(${imgBreadcrumb})` }}
          ></div>
          <div className="sp-breadcrumb-overlay"></div>
          <div className="sp-breadcrumb-glow"></div>

          <div className="container sp-breadcrumb-container">
            <div className="sp-breadcrumb-content">
              {/* Breadcrumb Navigation Trail */}
              <nav className="sp-breadcrumb-nav" aria-label="Breadcrumb navigation">
                <IconZap size={14} className="sp-crumb-icon" />
                <a 
                  href="/" 
                  className="sp-crumb-link" 
                  onClick={(e) => { e.preventDefault(); navigate('/'); }}
                >
                  Home
                </a>
                <span className="sp-crumb-sep">/</span>
                <span className="sp-crumb-active" aria-current="page">Contact</span>
              </nav>

              {/* Page Title */}
              <h1 className="sp-breadcrumb-title">
                Contact <span className="sp-gold-accent-shimmer">Us</span>
              </h1>

              {/* Subtitle */}
              <p className="sp-breadcrumb-subtitle">
                Let's discuss your electrical installation, repair, or maintenance requirements.
              </p>

              {/* Quick Trust Highlights */}
              <div className="sp-breadcrumb-highlights">
                <div className="sp-crumb-highlight-item">
                  <IconShieldCheck size={16} className="sp-hl-icon" />
                  <span>Licensed & Certified Contracting</span>
                </div>
                <div className="sp-crumb-highlight-item">
                  <IconCheckCircle size={16} className="sp-hl-icon" />
                  <span>Transparent Upfront Quotes</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
           MAIN CONTACT SECTION (2-Column Layout)
           ========================================================================== */}
        <section className="ct-main-section">
          <div className="container">
            <div className="ct-main-grid">
              
              {/* LEFT SIDE: Contact Information */}
              <div className="ct-info-col">
                <span className="ct-sub-eyebrow">GET IN TOUCH</span>
                <h2 className="ct-info-heading">
                  Let's Talk About Your <span className="sp-gold-gradient">Electrical Needs</span>
                </h2>
                
                <p className="ct-info-desc">
                  Whether you need a new installation, electrical repairs, wiring work, or maintenance, get in touch with S.P.T. Electrical Services to discuss your requirements.
                </p>

                <div className="ct-info-blocks">
                  {/* Call Block */}
                  <div className="ct-info-block">
                    <div className="ct-block-icon">
                      <IconPhone size={22} />
                    </div>
                    <div className="ct-block-content">
                      <h4 className="ct-block-title">Call Us</h4>
                      <p className="ct-block-text">Direct Line for service requests & urgent electrical repairs.</p>
                      <a href="tel:+919486939201" className="ct-block-link">+91 94869 39201</a>
                    </div>
                  </div>

                  {/* WhatsApp Block */}
                  <div className="ct-info-block">
                    <div className="ct-block-icon ct-whatsapp-icon-bg">
                      <IconWhatsApp size={22} />
                    </div>
                    <div className="ct-block-content">
                      <h4 className="ct-block-title">WhatsApp Direct</h4>
                      <p className="ct-block-text">Send photos or voice messages about your electrical job.</p>
                      <a 
                        href="https://wa.me/919486939201?text=Hello%20S.P.T.%20Electrical%20Services%2C%20I%20have%20an%20electrical%20inquiry." 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="ct-block-link ct-whatsapp-link"
                      >
                        Chat on WhatsApp
                      </a>
                    </div>
                  </div>

                  {/* Service Enquiries Block */}
                  <div className="ct-info-block">
                    <div className="ct-block-icon">
                      <IconZap size={22} />
                    </div>
                    <div className="ct-block-content">
                      <h4 className="ct-block-title">Service Enquiries</h4>
                      <p className="ct-block-text">
                        Use our online form to describe your electrical work. Our technician will review your request and get in touch with clear pricing.
                      </p>
                    </div>
                  </div>
                </div>

                {/* HELPFUL SERVICE-REQUEST PANEL */}
                <div className="ct-service-panel">
                  <div className="ct-panel-header">
                    <IconShieldCheck size={20} className="ct-panel-icon" />
                    <h4 className="ct-panel-title">Not Sure Which Service You Need?</h4>
                  </div>
                  <p className="ct-panel-text">
                    Describe the electrical issue in your message, and we can discuss the appropriate service for your requirements.
                  </p>
                  <button 
                    className="ct-panel-btn"
                    onClick={() => navigate('/services')}
                    type="button"
                  >
                    <span>Explore Our Services</span>
                    <IconArrowRight size={15} />
                  </button>
                </div>
              </div>

              {/* RIGHT SIDE: Contact Form */}
              <div className="ct-form-col">
                <div className="ct-form-card">
                  {!formSubmitted ? (
                    <>
                      <div className="ct-form-header">
                        <h3 className="ct-form-title">Send Us an Enquiry</h3>
                        <p className="ct-form-subtitle">Share a few details about the work you need.</p>
                      </div>

                      {formError && (
                        <div className="ct-form-alert error" role="alert">
                          {formError}
                        </div>
                      )}

                      <form onSubmit={handleSubmit} className="ct-form-element" noValidate>
                        {/* 1. Full Name (Required) */}
                        <div className="ct-field-group">
                          <label htmlFor="ct-fullName" className="ct-label">
                            Full Name <span className="req-star">*</span>
                          </label>
                          <input 
                            id="ct-fullName"
                            name="fullName"
                            type="text"
                            required
                            className="ct-input"
                            placeholder="e.g. Rahul Sharma"
                            value={formData.fullName}
                            onChange={handleChange}
                          />
                        </div>

                        {/* 2. Phone Number (Required) */}
                        <div className="ct-field-group">
                          <label htmlFor="ct-phone" className="ct-label">
                            Phone Number <span className="req-star">*</span>
                          </label>
                          <input 
                            id="ct-phone"
                            name="phone"
                            type="tel"
                            required
                            className="ct-input"
                            placeholder="e.g. 9486939201"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>

                        {/* 3. Email Address (Optional) */}
                        <div className="ct-field-group">
                          <label htmlFor="ct-email" className="ct-label">
                            Email Address <span className="opt-tag">(Optional)</span>
                          </label>
                          <input 
                            id="ct-email"
                            name="email"
                            type="email"
                            className="ct-input"
                            placeholder="e.g. name@example.com"
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>

                        {/* 4. Service Required Dropdown (Required) */}
                        <div className="ct-field-group">
                          <label htmlFor="ct-service" className="ct-label">
                            Service Required <span className="req-star">*</span>
                          </label>
                          <select 
                            id="ct-service"
                            name="service"
                            required
                            className="ct-select"
                            value={formData.service}
                            onChange={handleChange}
                          >
                            <option value="Electrical Installation">Electrical Installation</option>
                            <option value="Wiring & Rewiring">Wiring & Rewiring</option>
                            <option value="Electrical Repairs">Electrical Repairs</option>
                            <option value="Lighting Installation">Lighting Installation</option>
                            <option value="Fan, Switch & Socket Installation">Fan, Switch & Socket Installation</option>
                            <option value="Electrical Maintenance">Electrical Maintenance</option>
                            <option value="Commercial Electrical Work">Commercial Electrical Work</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>

                        {/* 5. Location / Area (Optional) */}
                        <div className="ct-field-group">
                          <label htmlFor="ct-location" className="ct-label">
                            Location / Area <span className="opt-tag">(Optional)</span>
                          </label>
                          <input 
                            id="ct-location"
                            name="location"
                            type="text"
                            className="ct-input"
                            placeholder="e.g. Neighborhood / City locality"
                            value={formData.location}
                            onChange={handleChange}
                          />
                        </div>

                        {/* 6. Message (Required) */}
                        <div className="ct-field-group">
                          <label htmlFor="ct-message" className="ct-label">
                            Message / Work Details <span className="req-star">*</span>
                          </label>
                          <textarea 
                            id="ct-message"
                            name="message"
                            required
                            rows="4"
                            className="ct-textarea"
                            placeholder="Describe your electrical requirement or issue..."
                            value={formData.message}
                            onChange={handleChange}
                          ></textarea>
                        </div>

                        <button 
                          type="submit" 
                          className="ct-submit-btn"
                          disabled={isSubmitting}
                        >
                          <span>{isSubmitting ? 'Sending Enquiry...' : 'Send Enquiry'}</span>
                          <IconZap size={18} />
                        </button>
                      </form>
                    </>
                  ) : (
                    <div className="ct-success-card">
                      <div className="ct-success-icon-wrap">
                        <IconCheckCircle size={52} />
                      </div>
                      <h3 className="ct-success-title">Enquiry Sent Successfully!</h3>
                      <p className="ct-success-text">
                        Thank you, <strong>{formData.fullName}</strong>. Your enquiry regarding <strong>{formData.service}</strong> has been logged with S.P.T. Electrical Services.
                      </p>
                      <p className="ct-success-subtext">
                        Our technician will review your details and contact you via phone ({formData.phone}) shortly.
                      </p>
                      <button 
                        className="ct-reset-btn"
                        onClick={handleResetForm}
                        type="button"
                      >
                        Send Another Enquiry
                      </button>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer onOpenContactModal={handleOpenContactModal} />

      <QuickContactModal 
        isOpen={modalOpen} 
        onClose={handleCloseContactModal} 
        defaultService={selectedService}
      />
    </div>
  );
};
