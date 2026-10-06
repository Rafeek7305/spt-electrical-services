import React from 'react';
import { IconMapPin, IconZap, IconPhone, IconCheckCircle } from '../../components/common/Icons';
import './ServiceAreas.css';

export const ServiceAreas = ({ onOpenContactModal }) => {
  const areas = [
    'Tirunelveli Town',
    'Palayamkottai',
    'Vannarpettai',
    'High Ground',
    'Tirunelveli Junction',
    'Melapalayam',
    'KTC Nagar',
    'Tirunelveli Surroundings'
  ];

  return (
    <section className="service-areas-section">
      <div className="container">
        <div className="service-areas-card">
          <div className="areas-header">
            <div className="section-tag">
              <IconMapPin size={14} />
              <span>Coverage & Local Presence</span>
            </div>
            <h2 className="section-title">Electrical Services Around Tirunelveli</h2>
            <p className="section-subtitle">
              Providing prompt on-site electrical installation, troubleshooting, and emergency panel support across Tirunelveli and nearby regions.
            </p>
          </div>

          <div className="areas-grid">
            {areas.map((area, index) => (
              <div key={index} className="area-chip">
                <IconMapPin size={16} className="area-pin-icon" />
                <span>{area}</span>
              </div>
            ))}
          </div>

          <div className="areas-footer">
            <div className="areas-prompt">
              <IconCheckCircle size={20} className="prompt-icon" />
              <span>Need electrical service at your location? Contact us to confirm rapid technician dispatch.</span>
            </div>
            <button 
              className="btn btn-primary"
              onClick={() => onOpenContactModal()}
            >
              <span>Check Location Availability</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
