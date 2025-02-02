import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';
import Destinations from './components/Destinations';
import TourPackages from './components/TourPackages';
import GroupTours from './components/GroupTours';
import CustomizedTours from './components/CustomizedTours';

const SECTIONS = {
  home: () => (
    <>
      <Hero />
      <WhyChooseUs />
    </>
  ),
  destinations: Destinations,
  'tour-packages': TourPackages,
  'group-tours': GroupTours,
  'customized-tours': CustomizedTours,
} as const;

type SectionKey = keyof typeof SECTIONS;

function App() {
  const [activeSection, setActiveSection] = useState<SectionKey>('home');

  const SectionComponent = SECTIONS[activeSection] || SECTIONS.home;

return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar onSectionChange={setActiveSection} activeSection={activeSection} />
      <main className="flex-grow">
        <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
          <ErrorBoundary>
            <SectionComponent />
          </ErrorBoundary>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;