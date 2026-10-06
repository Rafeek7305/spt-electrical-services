import React from 'react';
import { IconZap, IconPhone, IconWrench, IconCheckCircle, IconArrowRight } from '../../components/common/Icons';
import './Process.css';

export const Process = ({ onOpenContactModal }) => {
  const steps = [
    {
      num: '01',
      title: 'Tell Us What You Need',
      desc: 'Reach out via call, WhatsApp, or request form detailing your electrical project or issue.',
      icon: IconPhone
    },
    {
      num: '02',
      title: 'Understand Requirement',
      desc: 'Our electrical technician reviews load specs, safety factors, and property layout.',
      icon: IconZap
    },
    {
      num: '03',
      title: 'Plan the Work',
      desc: 'We provide a clear scope, material selection plan, and schedule for work execution.',
      icon: IconWrench
    },
    {
      num: '04',
      title: 'Complete the Service',
      desc: 'Professional installation or repair executed cleanly, safety tested, and handed over.',
      icon: IconCheckCircle
    }
  ];

  return (
    <section id="process" className="process-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <IconZap size={14} />
            <span>Structured Process</span>
          </div>
          <h2 className="section-title">How We Work</h2>
          <p className="section-subtitle">
            A transparent 4-step workflow designed to deliver safe, compliant, and timely electrical solutions.
          </p>
        </div>

        {/* Process Steps Track */}
        <div className="process-track">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div key={step.num} className="process-step-item">
                <div className="step-header">
                  <div className="step-num-badge">{step.num}</div>
                  <div className="step-icon-wrap">
                    <IconComp size={22} />
                  </div>
                </div>
                <div className="step-body">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-desc">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="process-cta-banner">
          <div>
            <h3>Ready to start your electrical project?</h3>
            <p>Our expert technicians are standing by to evaluate your requirement.</p>
          </div>
          <button 
            className="btn btn-primary"
            onClick={() => onOpenContactModal()}
          >
            <span>Request Service Today</span>
            <IconArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};
