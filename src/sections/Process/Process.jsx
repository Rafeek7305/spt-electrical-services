import React from 'react';
import { 
  IconZap, 
  IconPhone, 
  IconWrench, 
  IconCheckCircle, 
  IconArrowRight, 
  IconShieldCheck,
  IconClock,
  IconActivity
} from '../../components/common/Icons';
import './Process.css';

export const Process = ({ onOpenContactModal }) => {
  const steps = [
    {
      num: '01',
      stepLabel: 'STEP 01',
      badge: 'Instant Dispatch',
      title: 'Tell Us What You Need',
      desc: 'Reach out via phone, WhatsApp, or our online request form describing your electrical issue or project scope.',
      icon: IconPhone,
      highlight: '1. Initial Contact'
    },
    {
      num: '02',
      stepLabel: 'STEP 02',
      badge: 'On-Site Diagnostic',
      title: 'Technical Requirement Audit',
      desc: 'Our certified technicians review power load capacities, circuit schematics, and safety compliance factors on-site.',
      icon: IconActivity,
      highlight: '2. Technical Audit'
    },
    {
      num: '03',
      stepLabel: 'STEP 03',
      badge: 'Transparent Pricing',
      title: 'Plan & Material Selection',
      desc: 'We provide an upfront quote, safety-approved material selection, and an organized timeline for seamless execution.',
      icon: IconWrench,
      highlight: '3. Engineering Plan'
    },
    {
      num: '04',
      stepLabel: 'STEP 04',
      badge: 'Tested & Warranted',
      title: 'Complete & Handover',
      desc: 'Precision installation executed cleanly, load tested with digital multimeters, and handed over with full warranty.',
      icon: IconShieldCheck,
      highlight: '4. Testing & Handover'
    }
  ];

  return (
    <section id="process" className="process-section">
      {/* Ambient glow backgrounds */}
      <div className="process-ambient-glow process-glow-left"></div>
      <div className="process-ambient-glow process-glow-right"></div>

      <div className="container process-container">
        {/* Section Header */}
        <div className="process-header">
          <div className="process-eyebrow-tag">
            <span className="process-pulse-dot"></span>
            <IconZap size={14} className="process-zap-icon" />
            <span>STRUCTURED WORKFLOW</span>
          </div>

          <h2 className="process-main-title">
            How We <span className="process-gold-accent">Deliver Excellence</span>
          </h2>

          <p className="process-main-subtitle">
            A transparent, code-compliant 4-step engineering workflow engineered to deliver safe, rapid, and long-lasting electrical infrastructure.
          </p>
        </div>

        {/* Process Steps Track with Connecting Animated Beam */}
        <div className="process-track-wrapper">
          <div className="process-beam-connector">
            <div className="beam-glow-pulse"></div>
          </div>

          <div className="process-cards-grid">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div key={step.num} className="process-glass-card">
                  {/* Card Glowing Top Border */}
                  <div className="card-top-shine"></div>

                  {/* Header Row: Step Pill + Icon Tile */}
                  <div className="process-card-header">
                    <div className="step-badge-pill">
                      <span className="step-pill-num">{step.stepLabel}</span>
                    </div>

                    <div className="step-icon-tile">
                      <IconComp size={22} />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="process-card-body">
                    <span className="step-meta-badge">{step.badge}</span>
                    <h3 className="process-step-title">{step.title}</h3>
                    <p className="process-step-desc">{step.desc}</p>
                  </div>

                  {/* Bottom Milestone Indicator */}
                  <div className="process-card-footer">
                    <span className="milestone-text">{step.highlight}</span>
                    <span className="milestone-arrow">➔</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom High-Tech CTA Ribbon */}
        <div className="process-cta-ribbon">
          <div className="cta-ribbon-left">
            <div className="ribbon-icon-orb">
              <IconZap size={24} />
            </div>
            <div>
              <div className="ribbon-tag">Zero-Obligation Technical Evaluation</div>
              <h3 className="ribbon-title">Ready to power your next project safely?</h3>
              <p className="ribbon-desc">Our certified master electricians are available for prompt consultations and emergency support.</p>
            </div>
          </div>

          <div className="cta-ribbon-right">
            <button 
              className="ribbon-primary-btn"
              onClick={() => onOpenContactModal('Workflow Inquiry')}
              type="button"
            >
              <span>Request Service Today</span>
              <IconArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
