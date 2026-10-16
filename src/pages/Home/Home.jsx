import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SEO } from '../../components/common/SEO';
import { Header } from '../../components/Header/Header';
import { Hero } from '../../sections/Hero/Hero';
import { Services } from '../../sections/Services/Services';
import { Trust } from '../../sections/Trust/Trust';
import { AboutPreview } from '../../sections/AboutPreview/AboutPreview';
import { WorkShowcase } from '../../sections/WorkShowcase/WorkShowcase';
import { Process } from '../../sections/Process/Process';
import { Reviews } from '../../sections/Reviews/Reviews';
import { ServiceAreas } from '../../sections/ServiceAreas/ServiceAreas';
import { FAQ } from '../../sections/FAQ/FAQ';
import { Footer } from '../../components/Footer/Footer';
import { QuickContactModal } from '../../components/common/QuickContactModal';
import './Home.css';

const homeFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What electrical services do you provide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We provide end-to-end residential, commercial, and industrial electrical solutions including new power rough-ins, property rewiring, 3-phase main distribution panel upgrades, architectural LED lighting design, and precision fault diagnostics.'
      }
    },
    {
      '@type': 'Question',
      name: 'How can I request an electrical service or quotation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can request service through our online form or by calling our technical desk directly at +91 94869 39201. We perform an initial requirement review and dispatch a technician for on-site load evaluation and transparent upfront pricing.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you handle both residential and commercial electrical projects?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We cater to independent villas, residential apartment complexes, corporate offices, retail showrooms, healthcare centers, and light industrial manufacturing facilities.'
      }
    },
    {
      '@type': 'Question',
      name: 'What safety standards do you follow during electrical work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We strictly adhere to updated national safety regulations, utilizing flame-retardant copper conductors, proper conduit protection, RCCB/ELCB shock-protection breakers, and thorough earth continuity testing prior to power activation.'
      }
    },
    {
      '@type': 'Question',
      name: 'How quickly can a technician respond to an electrical inquiry?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We prioritize rapid turnaround. For standard inquiries, our team coordinates an on-site visit within 24 hours. For critical circuit trips or safety hazards, our team provides rapid local dispatch.'
      }
    }
  ]
};

export const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const targetId = location.state.scrollTo;
      const el = document.getElementById(targetId);
      if (el) {
        setTimeout(() => {
          const headerOffset = 70;
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const handleOpenContactModal = (serviceName = '') => {
    setSelectedService(serviceName);
    setModalOpen(true);
  };

  const handleCloseContactModal = () => {
    setModalOpen(false);
    setSelectedService('');
  };

  return (
    <div className="home-page">
      <SEO 
        title="S.P.T. Electrical Services | Electrician in Tirunelveli & Palayamkottai"
        description="Licensed electrician in Tirunelveli & Palayamkottai. Safe electrical installations, house rewiring, MCB panel upgrades & repairs. Call +91 94869 39201."
        canonicalUrl="https://spt-electrials.netlify.app/"
        structuredData={homeFaqSchema}
      />
      <Header onOpenContactModal={handleOpenContactModal} />
      
      <main id="main-content">
        <Hero onOpenContactModal={handleOpenContactModal} />
        <Services onOpenContactModal={handleOpenContactModal} />
        <Trust onOpenContactModal={handleOpenContactModal} />
        <AboutPreview onOpenContactModal={handleOpenContactModal} />
        <WorkShowcase onOpenContactModal={handleOpenContactModal} />
        <Process onOpenContactModal={handleOpenContactModal} />
        <Reviews onOpenContactModal={handleOpenContactModal} />
        <ServiceAreas onOpenContactModal={handleOpenContactModal} />
        <FAQ onOpenContactModal={handleOpenContactModal} />
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
