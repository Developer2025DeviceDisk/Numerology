"use client";

import React from "react";
import Section from "../ui/Section";
import Card from "../ui/Card";
import Button from "../ui/Button";
import {
    Users,
    Heart,
    Calendar,
    Briefcase,
    Sparkles,
    Search
} from "lucide-react";

const services = [
    {
        title: "Life Path Analysis",
        description: "Discover your life's purpose and the unique path you were born to travel.",
        icon: <Search className="w-6 h-6" />,
    },
    {
        title: "Expression Number",
        description: "Unlock your natural talents and how you express yourself to the world.",
        icon: <Sparkles className="w-6 h-6" />,
    },
    {
        title: "Name Numerology",
        description: "Analyze the power and vibration behind your name and its impact on your destiny.",
        icon: <Briefcase className="w-6 h-6" />,
    },
    {
        title: "Birth Day Insight",
        description: "Understand the special gifts bestowed upon you by your day of birth.",
        icon: <Calendar className="w-6 h-6" />,
    },
    {
        title: "Compatibility Reading",
        description: "Explore the dynamics between you and your partner through numbers.",
        icon: <Heart className="w-6 h-6" />,
    },
    {
        title: "Annual Forecast",
        description: "Get ready for the year ahead with a detailed personalized prediction.",
        icon: <Users className="w-6 h-6" />,
    },
];

const Services = () => {
    return (
        <Section id="services" className="bg-[#1A1A2E] py-20 md:py-32">
            <div className="text-center mb-16 space-y-4">
                <div className="text-xs font-bold tracking-[0.2em] text-[#C5A065] uppercase">
                    Our Services
                </div>
                <h2 className="text-secondary text-4xl md:text-5xl font-medium mb-4 font-serif ">
                    We explain what each <br />
                    <span className="italic">number means</span>
                </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div key={index} className="group p-8 border border-black/10 bg-[#1f352500] hover:bg-[#1f352500] transition-colors duration-300 rounded-sm">
                        <div className="w-10 h-10 mb-6 text-secondary">
                            {service.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-blackfont-serif">{service.title}</h3>
                        <p className="text-secondary text-sm leading-relaxed mb-6">
                            {service.description}
                        </p>
                        <a href="#" className="inline-block text-xs font-bold text-black uppercase tracking-wider border-white/20 pb-1 hover:border-white transition-colors">
                            Read More
                        </a>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Services;
