import React, { useState } from 'react';
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
import { FinalCTA } from '../../sections/FinalCTA/FinalCTA';
import { Footer } from '../../components/Footer/Footer';
import { QuickContactModal } from '../../components/common/QuickContactModal';
import './Home.css';

export const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

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
        <FAQ />
        <FinalCTA onOpenContactModal={handleOpenContactModal} />
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
