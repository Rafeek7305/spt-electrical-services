import { useState } from 'react';
import { IconX, IconPhone, IconWhatsApp, IconCheckCircle, IconZap } from './Icons';
import { sendEnquiryEmail } from '../../services/emailService';
import './QuickContactModal.css';

export const QuickContactModal = ({ isOpen, onClose, defaultService = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: defaultService || 'Electrical Installation',
    notes: '',
    hp_company: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setFormError('Please enter your Full Name and Phone Number.');
      return;
    }

    setIsSubmitting(true);
    setFormError('');

    try {
      const result = await sendEnquiryEmail({
        fullName: formData.name,
        phone: formData.phone,
        service: formData.service,
        message: formData.notes,
        formType: 'Get a Service',
        honeypot: formData.hp_company
      });

      if (result.success) {
        setSubmitted(true);
      } else {
        setFormError(result.error || 'Failed to submit service request. Please call us at +91 94869 39201.');
      }
    } catch {
      setFormError('An unexpected error occurred. Please call +91 94869 39201.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: '', phone: '', service: defaultService || 'Electrical Installation', notes: '', hp_company: '' });
    setFormError('');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <IconX size={20} />
        </button>

        {!submitted ? (
          <>
            <div className="modal-header">
              <div className="modal-badge">
                <IconZap size={16} />
                <span>Quick Response</span>
              </div>
              <h2 id="modal-title" className="modal-title">Request Electrical Service</h2>
              <p className="modal-subtitle">
                Fill out the quick form below or reach us directly for immediate assistance.
              </p>
            </div>

            <div className="modal-quick-actions">
              <a href="tel:+919486939201" className="quick-action-btn call-action">
                <IconPhone size={18} />
                <div>
                  <span className="action-label">Call Now</span>
                  <span className="action-detail">Direct Service Hotline</span>
                </div>
              </a>
              <a 
                href="https://wa.me/919486939201?text=Hello%20S.P.T.%20Electrical%20Services,%20I%20would%20like%20to%20inquire%20about%20your%20electrical%20services." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="quick-action-btn whatsapp-action"
              >
                <IconWhatsApp size={18} />
                <div>
                  <span className="action-label">WhatsApp</span>
                  <span className="action-detail">Chat with Electrical Tech</span>
                </div>
              </a>
            </div>

            <div className="modal-divider">
              <span>Or Send a Message</span>
            </div>

            {formError && (
              <div className="modal-alert error" role="alert">
                {formError}
              </div>
            )}

            <form onSubmit={handleSubmit} className="modal-form" noValidate>
              {/* Anti-spam honeypot */}
              <div className="hp-field" aria-hidden="true" style={{ display: 'none' }}>
                <label htmlFor="service-hp-company">Leave this empty</label>
                <input
                  id="service-hp-company"
                  type="text"
                  name="hp_company"
                  value={formData.hp_company}
                  onChange={(e) => setFormData({ ...formData, hp_company: e.target.value })}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="form-group">
                <label htmlFor="service-name">Full Name *</label>
                <input
                  id="service-name"
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (formError) setFormError('');
                  }}
                />
              </div>

              <div className="form-group">
                <label htmlFor="service-phone">Phone Number *</label>
                <input
                  id="service-phone"
                  type="tel"
                  required
                  placeholder="Enter contact number"
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value });
                    if (formError) setFormError('');
                  }}
                />
              </div>

              <div className="form-group">
                <label htmlFor="service-type">Required Service</label>
                <select
                  id="service-type"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  <option value="Electrical Installation">Electrical Installation</option>
                  <option value="Wiring & Rewiring">Wiring & Rewiring</option>
                  <option value="Electrical Repairs">Electrical Repairs</option>
                  <option value="Electrical Maintenance">Electrical Maintenance</option>
                  <option value="Lighting Installation">Lighting Installation</option>
                  <option value="Distribution Board / Panel Work">Distribution Board / Panel Work</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="service-notes">Brief Description (Optional)</label>
                <textarea
                  id="service-notes"
                  rows="3"
                  placeholder="Tell us what electrical work you need..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary form-submit-btn"
                disabled={isSubmitting}
              >
                <span>{isSubmitting ? 'Submitting Request...' : 'Submit Service Request'}</span>
                <IconZap size={18} />
              </button>
            </form>
          </>
        ) : (
          <div className="modal-success">
            <div className="success-icon-wrap">
              <IconCheckCircle size={48} />
            </div>
            <h3>Service Request Received!</h3>
            <p>
              Thank you, <strong>{formData.name}</strong>. Your request for <strong>{formData.service}</strong> has been logged. Our electrical service team will reach out to you shortly.
            </p>
            <button className="btn btn-navy" onClick={handleReset}>
              Close & Return to Site
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
