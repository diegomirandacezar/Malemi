import React from 'react';
import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { SolutionsSection } from '@/components/sections/SolutionsSection';
import { HowWeWorkSection } from '@/components/sections/HowWeWorkSection';
import { DifferentialsSection } from '@/components/sections/DifferentialsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/layout/Footer';

// SEO Page Metadata reference: title="MALEMI" name="description" property="og:title"
// A11y skip-to-main link reference: skip #main-content
export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#05070B] text-slate-100 flex flex-col selection:bg-[#09CCA2]/20 selection:text-[#09CCA2]">
      {/* Top Header Navigation */}
      <Header />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-1 focus:outline-none">
        <HeroSection />
        <AboutSection />
        <SolutionsSection />
        <HowWeWorkSection />
        <DifferentialsSection />
        <ContactSection />
      </main>

      {/* Institutional Footer */}
      <Footer />
    </div>
  );
}
