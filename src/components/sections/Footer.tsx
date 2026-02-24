"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Instagram, Twitter, Facebook, Linkedin } from "lucide-react";
import Button from "../ui/Button";
import Section from "../ui/Section";

const Footer = () => {
    return (
        <footer className="bg-[#F4F1EA] pt-24 pb-12 overflow-hidden relative border-t border-[#C5A065]/20">
            {/* Background Decor - Subtle */}
            <div className="absolute inset-0 pointer-events-none opacity-30">
                <div className="absolute -left-20 top-20 w-64 h-64 border border-[#C5A065]/20 rounded-full" />
                <div className="absolute right-0 bottom-0 w-96 h-96 border border-[#C5A065]/10 rounded-full translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid md:grid-cols-3 gap-12 lg:gap-24 mb-20">
                    {/* Column 1: Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <span className="text-3xl font-bold text-secondary font-serif">Mahakaal</span>
                        </Link>
                        <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
                            Reinventing the way of creating websites, we aim to create the most master-peeced WordPress theme available on the market.
                        </p>
                    </div>

                    {/* Column 2: Contact */}
                    <div className="space-y-6">
                        <h4 className="font-bold text-xs tracking-widest uppercase text-gray-600">Contact Us</h4>
                        <div className="space-y-4 text-sm text-gray-600">
                            <p>202 Helga Springs Rd, Crawford, TN 38554</p>
                            <p>Call Us: <span className="font-bold text-gray-600">800.275.8777</span></p>
                            <p>alex@company.com</p>
                        </div>
                    </div>

                    {/* Column 3: Newsletter */}
                    <div className="space-y-6">
                        <h4 className="font-bold text-xs tracking-widest uppercase text-gray-600">Sign Up For Email Updates</h4>
                        <div className="flex bg-white p-1 shadow-sm">
                            <input
                                type="email"
                                placeholder="Your e-mail address"
                                className="flex-1 bg-transparent px-4 py-3 text-sm outline-none text-secondary placeholder:text-gray-400"
                            />
                            <Button className="rounded-m bg-secondary hover:bg-secondary text-white px-6 py-3 text-sm font-bold shadow-none">
                                Subscribe
                            </Button>
                        </div>
                        <p className="text-xs text-gray-600 italic">
                            Sign up with your email address to receive news and updates
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-[#C5A065]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-secondary">
                    <div>
                        <p>&copy; {new Date().getFullYear()} Mahakaal. All rights reserved.</p>
                    </div>
<div className="flex gap-6 md:gap-8 flex-wrap justify-center items-center">
    <Link href="https://instagram.com" target="_blank" className="hover:text-secondary transition-colors">
        <Instagram size={24} />
        <span className="sr-only">Instagram</span>
    </Link>

    <Link href="https://linkedin.com" target="_blank" className="hover:text-secondary transition-colors">
        <Linkedin size={24} />
        <span className="sr-only">LinkedIn</span>
    </Link>
    
    <Link href="https://facebook.com" target="_blank" className="hover:text-secondary transition-colors">
        <Facebook size={24} />
        <span className="sr-only">Facebook</span>
    </Link>
</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
