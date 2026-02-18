"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import Section from "../ui/Section";
import { Sparkle, Moon, Star } from "lucide-react";

const Hero = () => {
    return (
        <Section className="pt-32 pb-10 md:pt-44 md:pb-20 overflow-hidden bg-background relative">
            {/* Background Subtle Stars */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <Star className="absolute top-1/4 left-10 w-6 h-6 text-secondary" />
                <Star className="absolute top-10 right-1/4 w-4 h-4 text-secondary" />
                <Star className="absolute bottom-1/3 left-1/3 w-3 h-3 text-secondary" />
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8 md:pr-10"
                >
                    <div className="text-xs font-bold tracking-[0.2em] text-[#C5A065] uppercase pl-1">
                        Consultation For Free
                    </div>

                    <h1 className="text-6xl md:text-8xl font-serif font-medium leading-[0.9] text-secondary">
                        Infinite power of <br />
                        <span className="italic">numerology</span>
                    </h1>

                    <p className="text-lg text-secondary max-w-md leading-relaxed pl-1">
                        Unlock the hidden meaning of numbers and discover what destiny holds for you.
                    </p>

                    <div className="pt-4 pl-1">
                        <Button size="lg" className="rounded-none hover:bg-white px-12 py-6 !text-black font-bold tracking-wider bg-white shadow-none uppercase">
                            Read More
                        </Button>
                    </div>

                    <div className="flex items-center gap-12 pt-12 pl-1 border-t border-gray-200 mt-12 max-w-md">
                        <div>
                            <p className="font-serif text-2xl font-bold text-gray-900">85k</p>
                            <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Happy Clients</p>
                        </div>
                        <div>
                            <p className="font-serif text-2xl font-bold text-gray-900">12</p>
                            <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Years Experience</p>
                        </div>
                        <div>
                            <p className="font-serif text-2xl font-bold text-gray-900">5</p>
                            <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Awards Won</p>
                        </div>
                    </div>
                </motion.div>

                {/* Right - Mystical Arch Illustration */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative flex items-center justify-center"
                >
                    {/* Main Arch Container */}
                    <div className="relative w-[350px] h-[550px] md:w-[420px] md:h-[650px] bg-[#EAE4D9] rounded-t-full rounded-b-[100px] overflow-hidden shadow-2xl border-4 border-white">

                        {/* Decorative Lines/Paths */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 600">
                            <path d="M-50,200 Q150,100 250,50 T450,150" fill="none" stroke="#E07A5F" strokeWidth="1.5" opacity="0.6" />
                            <path d="M50,550 Q200,450 350,500" fill="none" stroke="#E07A5F" strokeWidth="1.5" opacity="0.6" />
                        </svg>

                        {/* Elements floating inside */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-[12%] left-[18%] text-[#1C1C1C]"
                        >
                            <span className="font-serif text-[180px] leading-none opacity-90 drop-shadow-lg">5</span>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="absolute bottom-[20%] left-[8%] text-[#1C1C1C]"
                        >
                            <span className="font-serif text-[180px] leading-none opacity-90 drop-shadow-lg">4</span>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -12, 0] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-[30%] right-[8%] text-[#1C1C1C]"
                        >
                            <span className="font-serif text-[160px] leading-none opacity-90 drop-shadow-lg">9</span>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -18, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                            className="absolute -bottom-[2%] right-[25%] text-[#1C1C1C]"
                        >
                            <span className="font-serif text-[120px] leading-none opacity-90 drop-shadow-lg">7</span>
                        </motion.div>

                        {/* Moon/Mystical Graphics placeholders */}
                        <motion.div
                            animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-[32%] left-[32%]"
                        >
                            <Sparkle className="w-10 h-10 text-[#C5A065]" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};

export default Hero;
