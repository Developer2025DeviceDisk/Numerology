"use client";

import React from "react";
import Section from "../ui/Section";
import Button from "../ui/Button";

const ConsultationBanner = () => {
    return (
        <Section className="py-20 bg-[#151525] border-y border-white/5 overflow-hidden relative">
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                <div className="space-y-6">
                    <div className="text-xs font-bold tracking-[0.2em] text-gray-600 uppercase">
                        Free Reading
                    </div>
                    <h2 className="text-4xl md:text-5xl font-medium font-serif text-secondary leading-tight">
                        Free numerological express <br />
                        <span className="italic">consultation</span>
                    </h2>
                    <p className="text-gray-600 max-w-md text-sm leading-relaxed">
                        Contact us for a free 15-minute consultation to understand how numerology can help you achieve your life goals.
                    </p>
                    <div className="pt-4">
                        <a href="#" className="inline-block text-gray-600 border-b border-[#C5A065] pb-1 uppercase tracking-wider text-xs font-bold  hover:border-secondary transition-colors">
                            Book Now
                        </a>
                    </div>
                </div>

                <div className="relative h-full min-h-[300px] flex items-center justify-end">
                    {/* Floating Numbers Decoration */}
                    <div className="font-serif text-[150px] md:text-[180px] leading-none text-[#C5A065] opacity-20 absolute top-0 right-20 animate-pulse">
                        2
                    </div>
                    <div className="font-serif text-[150px] md:text-[180px] leading-none text-white opacity-10 absolute bottom-0 right-40">
                        9
                    </div>
                    <div className="font-serif text-[120px] md:text-[140px] leading-none text-white opacity-5 absolute top-10 right-80">
                        1
                    </div>
                    <div className="font-serif text-[120px] md:text-[140px] leading-none text-[#C5A065] opacity-10 absolute bottom-10 right-0">
                        5
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default ConsultationBanner;
