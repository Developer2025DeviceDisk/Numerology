import React from "react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { Star, Target, Heart } from "lucide-react";

export default function AboutUs() {
    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-white">
            <Header />

            {/* Page Header / Hero */}
            <Section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-[#F4F1EA] text-center relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-10 left-10 w-32 h-32 border-2 border-[#C5A065] rounded-full" />
                    <div className="absolute bottom-10 right-10 w-64 h-64 border border-[#C5A065] rounded-full" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4">
                    <div className="text-xs font-bold tracking-[0.2em] text-[#C5A065] uppercase mb-4">
                        Our Story
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif font-medium text-gray-900 mb-6">
                        We help you find your <br />
                        <span className="italic text-[#E65100]">true path</span>
                    </h1>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                        Mahakal was founded with a simple mission: to make the ancient wisdom of numerology accessible to everyone. We believe that numbers hold the key to understanding our potential and destiny.
                    </p>
                </div>
            </Section>

            {/* Mission & Vision */}
            <Section className="py-20 bg-white">
                <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    <div className="text-center space-y-4 p-8 border border-gray-100 bg-[#FAFAFA] hover:shadow-lg transition-shadow duration-300">
                        <div className="w-16 h-16 mx-auto bg-[#E65100]/10 flex items-center justify-center rounded-full text-[#E65100]">
                            <Target className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-gray-900">Our Mission</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            To empower individuals with self-knowledge through precision numerology reports and expert guidance.
                        </p>
                    </div>

                    <div className="text-center space-y-4 p-8 border border-gray-100 bg-[#FAFAFA] hover:shadow-lg transition-shadow duration-300">
                        <div className="w-16 h-16 mx-auto bg-[#C5A065]/10 flex items-center justify-center rounded-full text-[#C5A065]">
                            <Star className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-gray-900">Our Vision</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            A world where everyone embraces their unique cosmic blueprint and lives in alignment with their purpose.
                        </p>
                    </div>

                    <div className="text-center space-y-4 p-8 border border-gray-100 bg-[#FAFAFA] hover:shadow-lg transition-shadow duration-300">
                        <div className="w-16 h-16 mx-auto bg-[#1A1A2E]/10 flex items-center justify-center rounded-full text-[#1A1A2E]">
                            <Heart className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-gray-900">Our Values</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Integrity, accuracy, and compassion are at the heart of everything we do. We put our community first.
                        </p>
                    </div>
                </div>
            </Section>

            {/* Image / Story Section */}
            <Section className="py-20 bg-[#1A1A2E] text-white overflow-hidden relative">
                <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto relative z-10">
                    <div className="relative">
                        <div className="w-full h-[500px] bg-gray-800 rounded-t-full border-4 border-[#C5A065]/30 overflow-hidden relative">
                            {/* Placeholder for About Image */}
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2727&auto=format&fit=crop')] bg-cover bg-center opacity-60" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E] to-transparent opacity-80" />
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#E65100] rounded-full flex items-center justify-center text-center p-4 shadow-xl">
                            <p className="font-serif font-bold text-lg leading-tight">
                                10+ <br /><span className="text-xs font-sans font-normal uppercase tracking-wider">Years of Magic</span>
                            </p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="text-xs font-bold tracking-[0.2em] text-[#C5A065] uppercase">
                            Why Choose Us
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif font-medium text-white leading-tight">
                            Guided by the stars, <br />
                            <span className="italic">grounded in wisdom</span>
                        </h2>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            Unlike generic horoscope sites, we use complex mathematical calculations based on the Pythagorean system to generate your unique charts. Our experts act as your personal guides.
                        </p>
                        <ul className="space-y-4 pt-4">
                            {["Certified Numerologists", "Deeply Personalized Reports", "24/7 Spiritual Support", "Secure & Confidential"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-300">
                                    <span className="w-2 h-2 bg-[#E65100] rounded-full" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="pt-6">
                            <Button variant="primary" className="rounded-none px-10 py-4 bg-[#E65100] hover:bg-[#CC4600] text-white uppercase tracking-wider font-bold">
                                Get Your Reading
                            </Button>
                        </div>
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
