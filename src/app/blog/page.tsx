import React from "react";
import Link from "next/link";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { Calendar, User, ArrowRight } from "lucide-react";

const blogPosts = [
    {
        id: 1,
        title: "Understanding Your Life Path Number",
        excerpt: "Discover what your birth date reveals about your personality, strengths, and life purpose.",
        date: "Feb 15, 2026",
        author: "Sarah Jenkins",
        category: "Numerology Basics",
        image: "https://images.unsplash.com/photo-1531346878377-a513bc95fce7?q=80&w=2727&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "The Magic of Master Numbers 11, 22, 33",
        excerpt: "Why these numbers carry a higher vibration and how they impact your spiritual journey.",
        date: "Feb 10, 2026",
        author: "David Chen",
        category: "Advanced Insights",
        image: "https://images.unsplash.com/photo-1507692942488-826c71020478?q=80&w=2576&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Aligning Your Chakras with Numbers",
        excerpt: "Explore the connection between numerology and energy centers for a balanced life.",
        date: "Feb 05, 2026",
        author: "Emily Rose",
        category: "Holistic Health",
        image: "https://images.unsplash.com/photo-1599447332152-ed9d9d48dd27?q=80&w=2670&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Numerology for 2026: A Universal '9' Year",
        excerpt: "What does this year hold for the collective consciousness? Preparation and completion.",
        date: "Jan 28, 2026",
        author: "Sarah Jenkins",
        category: "Forecasts",
        image: "https://images.unsplash.com/photo-1462331940185-000000000000?q=80&w=2487&auto=format&fit=crop"
    },
    {
        id: 5,
        title: "Choosing a Business Name with Numerology",
        excerpt: "How to calculate the vibration of your brand name to attract success and abundance.",
        date: "Jan 15, 2026",
        author: "Michael Lee",
        category: "Business",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop"
    },
    {
        id: 6,
        title: "The Secret Meaning of Repeated Numbers",
        excerpt: "Do you keep seeing 11:11 or 333? Here is what the universe is trying to tell you.",
        date: "Jan 02, 2026",
        author: "Jessica White",
        category: "Signs & Symbols",
        image: "https://images.unsplash.com/photo-1518063319789-7217e6706b04?q=80&w=2574&auto=format&fit=crop"
    }
];

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-white">
            <Header />

            {/* Hero Section */}
            <Section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-[#F4F1EA] text-center relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute inset-0 pointer-events-none opacity-20">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] border border-[#C5A065]/30 rounded-full translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E65100]/5 rounded-full blur-3xl" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4">
                    <div className="text-xs font-bold tracking-[0.2em] text-[#C5A065] uppercase mb-4">
                        Our Journal
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif font-medium text-gray-900 mb-6">
                        Wisdom from the <br />
                        <span className="italic text-secondary">stars & numbers</span>
                    </h1>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                        Explore articles, guides, and insights to deepen your understanding of the mystical arts.
                    </p>
                </div>
            </Section>

            {/* Blog Grid */}
            <Section className="py-20 bg-white">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-4">
                    {blogPosts.map((post) => (
                        <article key={post.id} className="group cursor-pointer flex flex-col h-full bg-white border border-gray-100 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                            {/* Image */}
                            <div className="relative h-64 overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${post.image})` }}
                                />
                                <div className="absolute top-4 left-4 bg-[#1A1A2E] text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                                    {post.category}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 p-8 flex flex-col">
                                <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                                    <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3 group-hover:text-[#E65100] transition-colors line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                                    <span className="text-xs font-bold text-gray-900 uppercase tracking-widest group-hover:underline">Read Article</span>
                                    <div className="w-8 h-8 rounded-full bg-[#F4F1EA] flex items-center justify-center text-[#1A1A2E] group-hover:bg-[#E65100] group-hover:text-white transition-colors">
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="flex justify-center pt-16">
                    <Button className="rounded-m px-12 py-4 bg-white shadow-none border border-black-2 !text-black hover:bg-white uppercase tracking-wider font-bold">
                        View All Posts
                    </Button>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
