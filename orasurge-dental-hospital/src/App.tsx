import { useState } from 'react';
import Navbar from './components/Navbar';
import SectorMetaStrip from './components/SectorMetaStrip';
import Hero from './components/Hero';
import PerspectiveIntro from './components/PerspectiveIntro';
import ServicesMatrix from './components/ServicesMatrix';
import DecisionArchitecture from './components/DecisionArchitecture';
import PrecisionMotion from './components/PrecisionMotion';
import TrustReputation from './components/TrustReputation';
import ConsultationDesk from './components/ConsultationDesk';
import LocationCoordinates from './components/LocationCoordinates';
import Footer from './components/Footer';
import TreatmentModal from './components/TreatmentModal';
import { TreatmentItem } from './types';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('Dental Check-ups');
  const [activeModalTreatment, setActiveModalTreatment] = useState<TreatmentItem | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceFromCard = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    scrollToSection('contact');
  };

  const handleBookFromModal = (serviceTitle: string) => {
    setActiveModalTreatment(null);
    setSelectedService(serviceTitle);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#101419] text-[#F5F7FA] font-['Inter'] selection:bg-[#C7FF45] selection:text-[#101419] flex flex-col">
      {/* Sector Coordinate Meta Strip at the very top */}
      <div className="pt-2">
        <SectorMetaStrip />
      </div>

      {/* Floating Technical Header */}
      <Navbar onBookClick={() => scrollToSection('contact')} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full flex flex-col">
        {/* Section 01: Hero - Digital Architecture & Volumetric HUD */}
        <Hero
          onExploreClick={() => scrollToSection('treatments')}
          onRequestConsultationClick={() => scrollToSection('contact')}
        />

        {/* Section 02: Introduction - A Different Perspective */}
        <PerspectiveIntro />

        {/* Section 03: Dental Services - Modular Discovery (Ice-white contrast) */}
        <ServicesMatrix
          onSelectService={handleSelectServiceFromCard}
          onOpenDetails={(item) => setActiveModalTreatment(item)}
        />

        {/* Section 04: Featured Treatment - Decision Architecture */}
        <DecisionArchitecture />

        {/* Section 05: Signature Spatial Architecture - Precision in Motion */}
        <PrecisionMotion />

        {/* Section 06: Trust & Reputation - Verified Metrics */}
        <TrustReputation />

        {/* Section 07: Clinical Dispatch - Consultation Request Form Panel */}
        <ConsultationDesk selectedServicePreset={selectedService} />

        {/* Section 08: Diagnostic Campus - Location & Coordinates */}
        <LocationCoordinates
          onRequestConsultationClick={() => scrollToSection('contact')}
        />
      </main>

      {/* Technical Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Treatment Specification Inspection Modal */}
      <TreatmentModal
        treatment={activeModalTreatment}
        onClose={() => setActiveModalTreatment(null)}
        onBookTreatment={handleBookFromModal}
      />
    </div>
  );
}
