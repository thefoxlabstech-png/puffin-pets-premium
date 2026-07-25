'use client';

import Hero from '@/components/Hero';
import Features from '@/components/Features';
import PetShowcase from '@/components/PetShowcase';
import PremiumTiers from '@/components/PremiumTiers';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Features />
      <PetShowcase />
      <PremiumTiers />
      <Testimonials />
      <CTA />
    </div>
  );
}