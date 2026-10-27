import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductPreview from './components/ProductPreview';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import SecurityPrivacy from './components/SecurityPrivacy';
import Faq from './components/Faq';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <ProductPreview />
        <Features />
        <HowItWorks />
        <SecurityPrivacy />
        <Faq />
        <DownloadSection />
      </main>
      <Footer />
    </>
  );
}
