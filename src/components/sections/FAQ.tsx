"use client";

import React, { useState } from "react";
import Section from "../ui/Section";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "What is Numerology?",
            answer: "Numerology is the study of numbers and their energetic influence on our lives. It reveals hidden patterns, personality traits, and life cycles based on your birth date and name.",
        },
        {
            question: "How can a reading help me?",
            answer: "A reading can provide clarity on your life purpose, relationship compatibility, career path, and upcoming opportunities. It acts as a roadmap for your soul's journey.",
        },
        {
            question: "Do I need my birth time?",
            answer: "For a full comprehensive chart, birth time is recommended but much can be done with just the birth date and full name.",
        },
    ];

    return (
        <Section id="faq" className="py-20 md:py-32 bg-[#F9F9F9]">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                {/* Left - Visuals */}
                <div className="relative h-[500px] hidden md:flex items-center justify-center">
                    <div className="relative font-serif text-[280px] leading-none text-[#1C1C1C] opacity-90 select-none">
                        8
                        <span className="absolute -top-10 -right-20 text-[180px] text-[#C5A065] opacity-80 rotate-12">2</span>
                        <span className="absolute -bottom-10 -left-20 text-[200px] text-[#1C1C1C] opacity-10 -rotate-12">6</span>
                        <span className="absolute bottom-20 -right-32 text-[220px] text-[#1C1C1C] opacity-5">?</span>
                    </div>
                </div>

                {/* Right - Accordion */}
                <div className="space-y-10">
                    <div className="space-y-4">
                        <div className="text-xs font-bold tracking-[0.2em] text-[#C5A065] uppercase">
                            Commmon Questions
                        </div>
                        <h2 className="text-4xl md:text-5xl font-medium font-serif text-secondary">
                            Feel free to ask <br />
                            <span className="italic">more questions</span>
                        </h2>
                        <p className="text-gray-500 text-sm">
                            Can't find the answer you're looking for? Reach out to our customer support team.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`border-b border-gray-200 transition-all duration-300 ${activeIndex === index ? "pb-6" : "pb-4"
                                    }`}
                            >
                                <button
                                    className="w-full flex items-center justify-between text-left focus:outline-none group"
                                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                >
                                    <span className={`font-serif text-xl ${activeIndex === index ? "text-[#E65100]" : "text-gray-900 group-hover:text-[#E65100] transition-colors"}`}>
                                        {faq.question}
                                    </span>
                                    {activeIndex === index ? (
                                        <span className="text-[#E65100] text-2xl">–</span>
                                    ) : (
                                        <span className="text-gray-400 text-2xl">+</span>
                                    )}
                                </button>
                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="pt-4 text-gray-600 leading-relaxed text-sm max-w-md">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    <div className="pt-4">
                        <Button variant="primary" className="rounded-none bg-white !text-black hover:bg-white px-8 py-3 text-xs uppercase tracking-wider font-bold">
                            Contact Us
                        </Button>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default FAQ;
