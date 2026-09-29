import React from 'react';
import Navbar from '../components/Navbar';
import CompanyDetails from '../components/CompanyDetails';
import ProductCatalog from '../components/ProductCatalog';
import TenderTable from '../components/TenderTable';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <CompanyDetails />
        <ProductCatalog />
        <TenderTable />
      </main>
      <Footer />
    </div>
  );
}