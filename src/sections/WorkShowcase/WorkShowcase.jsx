import React, { useState, useRef, useEffect } from 'react';
import imgCommercial from '../../assets/images/gallery/project_commercial.png';
import imgIndustrial from '../../assets/images/gallery/project_industrial.png';
import imgResidential from '../../assets/images/gallery/project_residential.png';
import imgHero from '../../assets/images/hero/hero_electrical.png';
import imgLighting from '../../assets/images/services/lighting.png';
import imgWiring from '../../assets/images/services/wiring.png';
import { 
  IconZap, 
  IconArrowUpRight, 
  IconX, 
  IconShieldCheck, 
  IconArrowRight, 
  IconCheckCircle,
  IconChevronLeft,
  IconChevronRight
} from '../../components/common/Icons';
import './WorkShowcase.css';

export const WorkShowcase = ({ onOpenContactModal }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const sliderRef = useRef(null);

  const projects = [
    {
      id: 1,
      num: '01',
      title: 'Commercial Office Lighting & Power Grid',
      category: 'commercial',
      categoryLabel: 'Commercial',
      desc: 'High-efficiency architectural LED grid with dedicated 3-phase commercial distribution panels.',
      location: 'Business Plaza • Chennai',
      tags: ['3-Phase Distribution', 'Architectural LED', 'Smart Controls'],
      img: imgCommercial,
      featured: true
    },
    {
      id: 2,
      num: '02',
      title: 'Industrial Distribution Panel Upgrade',
      category: 'industrial',
      categoryLabel: 'Industrial',
      desc: 'Heavy-gauge breaker box overhaul with color-coded wiring harness and automated ELCB leakage safety.',
      location: 'Manufacturing Hub • Ambattur',
      tags: ['ELCB Protection', 'Color Coded', 'Load Balance'],
      img: imgIndustrial,
      featured: false
    },
    {
      id: 3,
      num: '03',
      title: 'Luxury Residence Smart Switch & Ambient Lights',
      category: 'residential',
      categoryLabel: 'Residential',
      desc: 'Custom recessed ceiling cove illumination, automated smart switches, and surge-protected circuits.',
      location: 'Private Villa • ECR',
      tags: ['Ambient Lighting', 'Smart Dimmers', 'Surge Mitigation'],
      img: imgResidential,
      featured: false
    },
    {
      id: 4,
      num: '04',
      title: 'Main Breaker Panel Safety Audit & Service',
      category: 'industrial',
      categoryLabel: 'Industrial',
      desc: 'Precision load balancing, thermal diagnostic inspection, and high-amperage circuit breaker renewal.',
      location: 'Industrial Estate • Guindy',
      tags: ['Thermal Audit', 'MCB Upgrade', 'Zero Downtime'],
      img: imgHero,
      featured: false
    },
    {
      id: 5,
      num: '05',
      title: 'Architectural Overhead Retail Lighting',
      category: 'commercial',
      categoryLabel: 'Commercial',
      desc: 'Precision spotlighting, track lighting arrays, and energy-optimized LED solutions for flagship showroom.',
      location: 'Retail Center • Anna Nagar',
      tags: ['Track Lighting', 'Energy Saver', 'High Lumen'],
      img: imgLighting,
      featured: false
    },
    {
      id: 6,
      num: '06',
      title: 'Complete Villa Concealed Copper Rewiring',
      category: 'residential',
      categoryLabel: 'Residential',
      desc: 'Full property rewiring with fire-resistant copper lines, concealed conduit routing, and earthing rods.',
      location: 'Residential Residency • OMR',
      tags: ['FR Copper Wire', 'Concealed Conduit', 'Earth Grounding'],
      img: imgWiring,
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'commercial', label: 'Commercial', count: projects.filter(p => p.category === 'commercial').length },
    { id: 'industrial', label: 'Industrial Panel', count: projects.filter(p => p.category === 'industrial').length },
    { id: 'residential', label: 'Residential', count: projects.filter(p => p.category === 'residential').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const checkScrollPosition = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollPosition();
    window.addEventListener('resize', checkScrollPosition);
    return () => window.removeEventListener('resize', checkScrollPosition);
  }, [filteredProjects]);

  const handleFilterChange = (catId) => {
    setActiveFilter(catId);
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  const scrollPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -390, behavior: 'smooth' });
    }
  };

  const scrollNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 390, behavior: 'smooth' });
    }
  };

  return (
    <section id="gallery" className="work-section">
      {/* Ambient background glows */}
      <div className="work-ambient-glow work-glow-top"></div>
      <div className="work-ambient-glow work-glow-bottom"></div>

      <div className="container work-container">
        {/* Section Header */}
        <div className="work-header">
          <div className="work-eyebrow-tag">
            <span className="work-pulse-dot"></span>
            <IconZap size={14} className="work-zap-icon" />
            <span>PROJECT PORTFOLIO</span>
          </div>

          <h2 className="work-main-title">
            Our Work <span className="work-gold-accent">Showcase</span>
          </h2>

          <p className="work-main-subtitle">
            Explore our recent electrical installations, commercial lighting architectures, and heavy industrial panel upgrades. Scroll through our featured case studies below.
          </p>

          {/* Control Bar: Filter Pills + Scroller Navigation Arrows */}
          <div className="work-controls-bar">
            <div className="work-filter-pills" role="tablist">
              {categories.map((cat) => (
                <button 
                  key={cat.id}
                  role="tab"
                  aria-selected={activeFilter === cat.id}
                  className={`work-filter-btn ${activeFilter === cat.id ? 'filter-active' : ''}`}
                  onClick={() => handleFilterChange(cat.id)}
                  type="button"
                >
                  <span>{cat.label}</span>
                  <span className="filter-count-badge">{cat.count}</span>
                </button>
              ))}
            </div>

            {/* Scroller Arrows */}
            <div className="work-slider-nav-btns">
              <button 
                className={`slider-arrow-btn prev-arrow ${!canScrollLeft ? 'arrow-disabled' : ''}`}
                onClick={scrollPrev}
                aria-label="Scroll projects left"
                type="button"
                disabled={!canScrollLeft}
              >
                <IconChevronLeft size={20} />
              </button>
              <button 
                className={`slider-arrow-btn next-arrow ${!canScrollRight ? 'arrow-disabled' : ''}`}
                onClick={scrollNext}
                aria-label="Scroll projects right"
                type="button"
                disabled={!canScrollRight}
              >
                <IconChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Project Carousel Scroller Track */}
        <div 
          className="work-scroller-track" 
          ref={sliderRef}
          onScroll={checkScrollPosition}
        >
          {filteredProjects.map((item) => (
            <div 
              key={item.id} 
              className="work-scroller-card"
              onClick={() => setSelectedProject(item)}
            >
              <div className="project-card-inner">
                {/* Image Frame */}
                <div className="project-img-wrapper">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="project-cover-image"
                    loading="lazy"
                    width="600"
                    height="450"
                  />
                  <div className="project-gradient-scrim"></div>

                  {/* Top Badges */}
                  <div className="project-top-badges">
                    <span className="project-category-chip">
                      {item.categoryLabel}
                    </span>
                    <span className="project-view-icon-circle">
                      <IconArrowUpRight size={18} />
                    </span>
                  </div>

                  {/* Watermark Slide Number */}
                  <div className="project-num-watermark">
                    <span>{item.num}</span>
                  </div>

                  {/* Bottom Meta Overlay */}
                  <div className="project-content-overlay">
                    <span className="project-location-meta">{item.location}</span>
                    <h3 className="project-title">{item.title}</h3>
                    <p className="project-desc">{item.desc}</p>

                    <div className="project-tags-row">
                      {item.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="project-tag-pill">{tag}</span>
                      ))}
                    </div>

                    <div className="project-action-link">
                      <span>Explore Case Details</span>
                      <IconArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroller Bottom Swipe Hint & Indicator Bar */}
        <div className="work-scroll-indicator-row">
          <span className="scroll-swipe-hint">← Swipe or drag to browse {filteredProjects.length} case studies →</span>
        </div>

        {/* Modal Lightbox Preview */}
        {selectedProject && (
          <div className="lightbox-backdrop" onClick={() => setSelectedProject(null)}>
            <div className="lightbox-modal-card" onClick={(e) => e.stopPropagation()}>
              <button 
                className="lightbox-close-circle"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project preview"
                type="button"
              >
                <IconX size={20} />
              </button>

              <div className="lightbox-image-side">
                <img 
                  src={selectedProject.img} 
                  alt={selectedProject.title} 
                  className="lightbox-hero-img" 
                />
                <div className="lightbox-img-badge">
                  <IconShieldCheck size={16} />
                  <span>100% Certified Execution</span>
                </div>
              </div>

              <div className="lightbox-details-side">
                <div className="lightbox-category-tag">
                  <IconZap size={14} />
                  <span>{selectedProject.categoryLabel} Project</span>
                </div>

                <h3 className="lightbox-heading">{selectedProject.title}</h3>
                <span className="lightbox-location-text">{selectedProject.location}</span>
                <p className="lightbox-long-desc">{selectedProject.desc}</p>

                <div className="lightbox-specs-box">
                  <strong className="specs-box-title">Key Engineering Highlights:</strong>
                  <div className="specs-pill-wrap">
                    {selectedProject.tags.map((tag, idx) => (
                      <div key={idx} className="spec-check-item">
                        <IconCheckCircle size={15} className="spec-check-gold" />
                        <span>{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lightbox-actions-group">
                  <button 
                    className="lightbox-cta-btn"
                    onClick={() => {
                      const projTitle = selectedProject.title;
                      setSelectedProject(null);
                      onOpenContactModal(`Inquiry about ${projTitle}`);
                    }}
                    type="button"
                  >
                    <span>Request Similar Project</span>
                    <IconArrowRight size={18} />
                  </button>

                  <button 
                    className="lightbox-cancel-btn"
                    onClick={() => setSelectedProject(null)}
                    type="button"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
