import React from "react";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import AboutTransform from "@/components/sections/AboutTransform";
import Services from "@/components/sections/Services";
import ZodiacSection from "@/components/sections/ZodiacSection";
import FAQ from "@/components/sections/FAQ";
import ConsultationBanner from "@/components/sections/ConsultationBanner";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-white">
      <Header />
      <Hero />
      <AboutTransform />
      <Services />
      <ZodiacSection />
      <FAQ />
      <ConsultationBanner />
      <Testimonials />
      <Footer />
    </main>
  );
}
