"use client";

import React from "react";
import Section from "../ui/Section";
import Button from "../ui/Button";


const About = () => {
    return (
        <Section id="about" background="secondary" className="text-center">
            <div className="max-w-3xl mx-auto space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-secondary inline-block">
                    What We Do
                </h2>

                <p className="text-lg md:text-xl text-text-gray leading-relaxed">
                    We bridge the gap between ancient numerological wisdom and modern life.
                    Our mission is to empower you with the knowledge of your unique
                    vibrational blueprint, helping you make aligned decisions in love, career, and personal growth.
                    We don’t just predict the future; we help you create it.
                </p>

                <div className="pt-4">
                    <Button variant="outline" size="lg">
                        Learn More About Us
                    </Button>
                </div>
            </div>
        </Section>
    );
};

export default About;
