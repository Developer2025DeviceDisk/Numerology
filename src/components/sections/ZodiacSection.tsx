"use client";

import React from "react";
import Section from "../ui/Section";
import { motion } from "framer-motion";

const ZodiacSection = () => {
    return (
        <Section className="py-20 md:py-32 bg-white overflow-hidden">
            <div className="text-center mb-16 space-y-4">
                <div className="text-xs font-bold tracking-[0.2em] text-gray-600 uppercase">
                    Birth Date
                </div>
                <h2 className="text-4xl md:text-5xl font-medium font-serif text-secondary">
                    Your birth date reveals <br />
                    <span className="italic">your unique powers</span>
                </h2>
                <p className="text-gray-600 max-w-lg mx-auto text-sm pt-4">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
            </div>

            <div className="relative max-w-7xl mx-auto h-[400px] md:h-[600px] overflow-hidden rounded-t-[200px] border-x-8 border-t-8 border-white">
            {/* Clean Image Container */}
            <div className="absolute inset-0 bg-white flex items-center justify-center">
            <div 
            className="w-full h-full bg-cover bg-center"
            style={{ 
                backgroundImage: `url("https://images.ctfassets.net/cto6k7l91cv5/2lHxogB7ol6R9suniWeVH8/e3fe5025230c9b74d585b0223e871716/life-path-number-5-meaning.jpg")`
                }}/>
            </div>
           </div>
        </Section>
    );
};

export default ZodiacSection;
