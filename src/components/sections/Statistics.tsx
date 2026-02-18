"use client";

import React from "react";
import Section from "../ui/Section";
import { motion } from "framer-motion";

const stats = [
    { label: "Happy Clients", value: "25k+" },
    { label: "Years Experience", value: "12+" },
    { label: "Consultations", value: "50k+" },
    { label: "Expert Numerologists", value: "15" },
];

const Statistics = () => {
    return (
        <Section className="py-16 bg-background relative overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="space-y-2"
                    >
                        <div className="text-4xl md:text-5xl font-bold text-accent-gold font-mono">
                            {stat.value}
                        </div>
                        <div className="text-sm md:text-base text-secondary uppercase tracking-wider">
                            {stat.label}
                        </div>
                    </motion.div>
                ))}
            </div>
            {/* Background glow for ambience */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent-gold/5 blur-[120px] rounded-full pointer-events-none" />
        </Section>
    );
};

export default Statistics;
