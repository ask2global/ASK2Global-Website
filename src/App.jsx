import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TradingoHero from './components/TradingoHero';
import CompanyDetails from './components/CompanyDetails';
import TenderTable from './components/TenderTable';
import ProductCatalog from './components/ProductCatalog';
import EcommercePage from './pages/EcommercePage';
import ServicesPage from './pages/ServicesPage';
import Footer from './components/Footer';

import bgImage from './assets/bgimage.jpeg';

export default function App() {
  const [currentView, setCurrentView] = useState('all');

  return (
    /* REMOVED 'overflow-x-hidden' FROM HERE TO ENABLE STICKY NAVBAR */
    <div className="relative min-h-screen w-full bg-black text-slate-100 font-sans selection:bg-amber-500 selection:text-black">
      
      {/* Full Website Fixed Background Image Layer */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed pointer-events-none"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Dark Tint Overlay to Remove Brightness completely */}
        <div className="absolute inset-0 bg-black/85 backdrop-blur-[2px]" />
      </div>

      {/* Main App Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen w-full">
        <Navbar currentView={currentView} setCurrentView={setCurrentView} />

        {currentView === 'ecommerce' ? (
          <main className="w-full flex-grow">
            <EcommercePage setCurrentView={setCurrentView} />
          </main>
        ) : currentView === 'tenders' ? (
          <main className="w-full flex-grow">
            <TenderTable />
          </main>
        ) : currentView === 'products' ? (
          <main className="w-full flex-grow">
            <ProductCatalog />
          </main>
        ) : currentView === 'services' ? (
          <main className="w-full flex-grow">
            <ServicesPage onContactClick={() => {
              const footerElement = document.getElementById('footer');
              if (footerElement) {
                footerElement.scrollIntoView({ behavior: 'smooth' });
              }
            }} />
          </main>
        ) : (
          /* Full Page View */
          <main className="w-full space-y-0 flex-grow">
            <TradingoHero />
            <CompanyDetails />
            <TenderTable />
            <ProductCatalog />
          </main>
        )}

        {currentView !== 'ecommerce' && <Footer />}
      </div>
    </div>
  );
}