"use client";

import React, { useState } from "react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

   // 1. Add 'async' so we can wait for the database response
    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
        const response = await fetch('http://localhost:5000/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (response.ok) {
            alert("Success! Data saved to MongoDB.");
            setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
            alert("Backend Error: " + (result.message || "Unknown error"));
        }
    } catch (error) {
        console.error("Connection Refused:", error);
        alert("Check if your Node.js server is running on Port 5000!");
    }
};

    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-white">
            <Header />

            {/* Hero Section */}
            <Section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-[#F4F1EA] text-center relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute inset-0 pointer-events-none opacity-20">
                    <div className="absolute bottom-10 right-10 w-64 h-64 border border-[#C5A065]/50 rounded-full" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4">
                    <div className="text-xs font-bold tracking-[0.2em] text-gray-600 uppercase mb-4">
                        Contact Us
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif font-medium text-gray-900 mb-6">
                        We'd love to <br />
                        <span className="italic text-secondary ">hear from you</span>
                    </h1>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                        Whether you have a question about our services, pricing, or just want to say hello, we are always happy to help.
                    </p>
                </div>
            </Section>

            {/* Contact Content */}
            <Section className="py-20 bg-white">
                <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h3 className="text-3xl font-serif font-bold text-secondary">Get in Touch</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Have a question or need assistance? Reach out to us via phone, email, or visit our office.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4 group">
                                <div className="w-12 h-12 bg-[#F4F1EA] rounded-full flex items-center justify-center text-[#E65100] group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-secondary font-serif text-lg">Visit Us</h4>
                                    <p className="text-gray-600">202 Helga Springs Rd,<br />Crawford, TN 38554</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="w-12 h-12 bg-[#F4F1EA] rounded-full flex items-center justify-center text-[#E65100] group-hover:bg-[#E65100] group-hover:text-white transition-colors duration-300">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-secondary font-serif text-lg">Call Us</h4>
                                    <p className="text-gray-600">800.275.8777</p>
                                    <p className="text-gray-500 text-sm">Mon-Fri: 9am - 6pm EST</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="w-12 h-12 bg-[#F4F1EA] rounded-full flex items-center justify-center text-[#E65100] group-hover:bg-[#E65100] group-hover:text-white transition-colors duration-300">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-secondary font-serif text-lg">Email Us</h4>
                                    <p className="text-gray-600">alex@company.com</p>
                                    <p className="text-gray-500 text-sm">Support 24/7</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-[#FAFAFA] p-8 md:p-12 border border-gray-100 shadow-sm">
                        <h3 className="text-2xl font-serif font-bold text-secondary mb-8">Send a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-bold text-secondary uppercase tracking-wide">Name</label>
                                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-gray-200 focus:outline-none focus:border-[#E65100] transition-colors" placeholder="Your Name" required />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-bold text-secondary uppercase tracking-wide">Email</label>
                                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-gray-200 focus:outline-none focus:border-[#E65100] transition-colors" placeholder="Your Email" required />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-bold text-secondary uppercase tracking-wide">Subject</label>
                                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-gray-200 focus:outline-none focus:border-[#E65100] transition-colors" placeholder="Subject" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-bold text-secondary uppercase tracking-wide">Message</label>
                                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-3 bg-white border border-gray-200 focus:outline-none focus:border-[#E65100] transition-colors resize-none" placeholder="Your Message" required />
                            </div>
                            <Button type="submit" variant="primary" className="w-full rounded-m py-4 bg-white hover:bg-white !text-black font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-none border border-2-black">
                                Send Message <Send className="w-4 h-4" />
                            </Button>
                        </form>
                    </div>
                </div>
            </Section>

            {/* Map Section (Placeholder) */}
            <div className="h-[400px] w-full bg-gray-200 relative grayscale">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.348687241284!2d-85.25367802426364!3d36.13328810505963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8867a6e78848d70b%3A0xe5349e37cc600d8!2sCrawford%2C%20TN%2038554%2C%20USA!5e0!3m2!1sen!2sin!4v1708250000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>

            <Footer />
        </main>
    );
}
