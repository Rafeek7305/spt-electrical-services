import React, { useState } from 'react';
import imgCommercial from '../../assets/images/gallery/project_commercial.png';
import imgIndustrial from '../../assets/images/gallery/project_industrial.png';
import imgResidential from '../../assets/images/gallery/project_residential.png';
import imgHero from '../../assets/images/hero/hero_electrical.png';
import { IconZap, IconArrowUpRight, IconX } from '../../components/common/Icons';
import './WorkShowcase.css';

export const WorkShowcase = ({ onOpenContactModal }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Commercial Office Lighting & Power Grid',
      category: 'commercial',
      categoryLabel: 'Commercial',
      desc: 'Architectural outdoor LED installation & high-capacity panel wiring.',
      img: imgCommercial,
      featured: true
    },
    {
      id: 2,
      title: 'Industrial Distribution Panel Upgrade',
      category: 'industrial',
      categoryLabel: 'Industrial',
      desc: 'Color-coded wiring harness and heavy-duty circuit breaker setup.',
      img: imgIndustrial,
      featured: false
    },
    {
      id: 3,
      title: 'Luxury Residence Smart Switch & Ambient Lights',
      category: 'residential',
      categoryLabel: 'Residential',
      desc: 'Custom recessed ceiling lighting & smart home power controls.',
      img: imgResidential,
      featured: false
    },
    {
      id: 4,
      title: 'Main Breaker Panel Safety Audit & Service',
      category: 'industrial',
      categoryLabel: 'Industrial',
      desc: 'Precision voltage load balancing and ELCB safety installation.',
      img: imgHero,
      featured: false
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="gallery" className="work-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <IconZap size={14} />
            <span>Project Portfolio</span>
          </div>
          <h2 className="section-title">Our Work Showcase</h2>
          <p className="section-subtitle">
            A glimpse into recent electrical installations, commercial lighting projects, and panel upgrades executed by our team.
          </p>

          {/* Category Filter Tabs */}
          <div className="portfolio-filter-tabs">
            <button 
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All Projects
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'commercial' ? 'active' : ''}`}
              onClick={() => setActiveFilter('commercial')}
            >
              Commercial
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'industrial' ? 'active' : ''}`}
              onClick={() => setActiveFilter('industrial')}
            >
              Industrial Panel
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'residential' ? 'active' : ''}`}
              onClick={() => setActiveFilter('residential')}
            >
              Residential
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="portfolio-grid">
          {filteredProjects.map((item) => (
            <div 
              key={item.id} 
              className={`portfolio-card ${item.featured ? 'card-featured' : ''}`}
              onClick={() => setSelectedImage(item)}
            >
              <div className="portfolio-img-wrap">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="portfolio-img"
                  loading="lazy"
                  width="600"
                  height="400"
                />
                <div className="portfolio-overlay">
                  <span className="portfolio-cat">{item.categoryLabel}</span>
                  <h3 className="portfolio-card-title">{item.title}</h3>
                  <p className="portfolio-card-desc">{item.desc}</p>
                  <span className="portfolio-zoom-btn">
                    <span>View Project</span>
                    <IconArrowUpRight size={18} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        {selectedImage && (
          <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button 
                className="lightbox-close-btn"
                onClick={() => setSelectedImage(null)}
                aria-label="Close image preview"
              >
                <IconX size={22} />
              </button>
              <img src={selectedImage.img} alt={selectedImage.title} className="lightbox-img" />
              <div className="lightbox-info">
                <span className="section-tag">{selectedImage.categoryLabel}</span>
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.desc}</p>
                <button 
                  className="btn btn-primary"
                  onClick={() => {
                    setSelectedImage(null);
                    onOpenContactModal(`Inquiry about ${selectedImage.title}`);
                  }}
                >
                  Request Similar Project
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
