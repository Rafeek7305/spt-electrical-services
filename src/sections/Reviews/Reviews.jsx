import React from 'react';
import { IconZap, IconStar, IconShieldCheck } from '../../components/common/Icons';
import './Reviews.css';

export const Reviews = ({ onOpenContactModal }) => {
  const reviews = [
    {
      id: 1,
      name: 'Commercial Property Client',
      type: 'Distribution Board & Rewiring',
      text: 'S.P.T. Electrical Services executed the main distribution panel upgrade with exceptional neatness and zero unnecessary downtime. Very professional cable organization.',
      rating: 5,
      date: 'Client Feedback'
    },
    {
      id: 2,
      name: 'Residential Home Owner',
      type: 'Lighting & Circuit Repair',
      text: 'Prompt diagnostic work on our tripping circuit breaker. The technician systematically checked the lines, identified the shorted fitting, and fixed it safely.',
      rating: 5,
      date: 'Client Feedback'
    },
    {
      id: 3,
      name: 'Retail Store Manager',
      type: 'Commercial Lighting Installation',
      text: 'Installed our modern architectural spotlights and main power grid switches efficiently. Clean workmanship and clear explanation of load balance.',
      rating: 5,
      date: 'Client Feedback'
    }
  ];

  return (
    <section className="reviews-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <IconZap size={14} />
            <span>Client Feedback</span>
          </div>
          <h2 className="section-title">What Clients Say About Our Work</h2>
          <p className="section-subtitle">
            Demonstrated technical competence, electrical safety, and clean execution across every project.
          </p>
        </div>

        <div className="reviews-grid">
          {reviews.map((rev) => (
            <div key={rev.id} className="review-card">
              <div className="review-stars">
                {[...Array(rev.rating)].map((_, i) => (
                  <IconStar key={i} size={16} className="star-icon" />
                ))}
              </div>
              <p className="review-text">"{rev.text}"</p>
              <div className="review-author">
                <div className="author-avatar">
                  <IconShieldCheck size={20} />
                </div>
                <div>
                  <strong className="author-name">{rev.name}</strong>
                  <span className="author-type">{rev.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
