"use client";

import React from "react";
import Section from "../ui/Section";
import { motion } from "framer-motion";

const ZodiacSection = () => {
    return (
        <Section className="py-20 md:py-32 bg-white overflow-hidden">
            <div className="text-center mb-16 space-y-4">
                <div className="text-xs font-bold tracking-[0.2em] text-[#C5A065] uppercase">
                    Birth Date
                </div>
                <h2 className="text-4xl md:text-5xl font-medium font-serif text-secondary">
                    Your birth date reveals <br />
                    <span className="italic">your unique powers</span>
                </h2>
                <p className="text-secondary max-w-lg mx-auto text-sm pt-4">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
            </div>

            <div className="relative max-w-5xl mx-auto h-[400px] md:h-[600px] overflow-hidden rounded-t-[200px] border-x-8 border-t-8 border-[#1A1A2E]">
                {/* Placeholder for the Zodiac Clock Image */}
                <div className="absolute inset-0 bg-[#1A1A2E] flex items-center justify-center">
                    <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2994&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay" />

                    {/* Clock Hands / Central Element */}
                    <div className="relative z-10 w-48 h-48 md:w-80 md:h-80 rounded-full border border-[#C5A065]/30 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-[#E65100]" />
                        <div className="absolute w-[2px] h-24 bg-[#E65100] bottom-1/2 origin-bottom rotate-45" />
                        <div className="absolute w-[4px] h-20 bg-white bottom-1/2 origin-bottom -rotate-12" />

                        {/* Decorative Circles */}
                        <div className="absolute inset-0 border border-white/10 rounded-full scale-125" />
                        <div className="absolute inset-0 border border-dashed border-[#C5A065]/50 rounded-full scale-150 rotate-90" />
                    </div>

                    {/* Zodiac Signs Ring Placeholder */}
                    <div className="absolute inset-4 rounded-t-[190px] border border-[#C5A065]/20 pointer-events-none" />
                </div>
            </div>
        </Section>
    );
};

export default ZodiacSection;
