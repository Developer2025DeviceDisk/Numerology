"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import Section from "../ui/Section";
import { Sparkle, Compass } from "lucide-react";

const AboutTransform = () => {
    return (
        <Section className="py-20 md:py-32 bg-background overflow-hidden relative">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                {/* Left - Different Arch Illustration */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative flex items-center justify-center md:justify-end md:pr-10"
                >
                    {/* Secondary Arch Container */}
                    <div className="relative w-[320px] h-[500px] md:w-[380px] md:h-[580px] bg-[#EAE4D9] rounded-t-full rounded-b-[200px] overflow-hidden shadow-xl border-4 border-white">
                        {/* Elements floating inside */}
                        <div className="absolute top-[15%] left-[25%] text-[#1C1C1C]">
                            <span className="font-serif text-[140px] leading-none opacity-90 drop-shadow-md">6</span>
                        </div>
                        <div className="absolute bottom-[20%] right-[20%] text-[#1C1C1C]">
                            <span className="font-serif text-[140px] leading-none opacity-90 drop-shadow-md">8</span>
                        </div>
                        <div className="absolute top-[40%] right-[10%] text-[#1C1C1C] opacity-80">
                            <Compass className="w-20 h-20 text-[#1C1C1C]" />
                        </div>

                        {/* Decorative Lines */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 380 580">
                            <path d="M50,100 C150,200 250,50 350,150" fill="none" stroke="#E07A5F" strokeWidth="1" opacity="0.5" />
                            <path d="M20,500 C120,400 280,550 360,450" fill="none" stroke="#E07A5F" strokeWidth="1" opacity="0.5" />
                        </svg>

                        <div className="absolute bottom-[10%] left-[20%] text-center">
                            <span className="font-serif text-[120px] leading-none text-[#1C1C1C] opacity-90">3</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <div className="text-xs font-bold tracking-[0.2em] text-[#C5A065] uppercase pl-1">
                        Who we are
                    </div>

                    <h2 className="text-5xl md:text-6xl font-serif font-medium leading-[1.1] text-secondary">
                        Numerology helps to <br />
                        <span className="italic">transform you</span>
                    </h2>

                    <p className="text-lg text-secondary leading-relaxed max-w-lg pl-1">
                        Numerology is an ancient belief system that assigns spiritual or mystical significance to numbers. It is based on the idea that numbers have vibrations and influence the universe, including human life.
                    </p>

                    <p className="text-base text-secondary leading-relaxed max-w-lg pl-1">
                        By analyzing numbers derived from a person's birth date and name, numerologists claim to reveal insights into personality traits, life purpose.
                    </p>

                    <div className="pt-6 pl-1">
                        <Button size="lg" className="rounded-none px-10 py-5 hover:bg-white !text-black font-bold tracking-wider bg-white shadow-none uppercase">
                            Learn More
                        </Button>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};

export default AboutTransform;
