"use client";

import React from "react";
import Section from "../ui/Section";
import Card from "../ui/Card";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Jenkins",
        rating: 5,
        review: "Absolutely mind-blowing accuracy. The life path reading described me better than I could describe myself.",
    },
    {
        name: "Michael Chen",
        rating: 5,
        review: "I was skeptical at first, but the career forecast gave me the confidence to start my own business. Best decision ever.",
    },
    {
        name: "Amara Singh",
        rating: 5,
        review: "The compatibility report saved my relationship. We finally understand each other's communication styles.",
    },
];

const Testimonials = () => {
    return (
        <Section id="testimonials" className="py-20 md:py-32 bg-white">
            <div className="text-center mb-16 space-y-4">
                <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-[#F5C77A]/20 rounded-full flex items-center justify-center">
                        <Star className="w-6 h-6 text-[#F5C77A]" />
                    </div>
                </div>
                <h2 className="text-4xl md:text-5xl font-medium font-serif text-secondary">
                    from our clients
                </h2>
                <p className="text-gray-600 max-w-xl mx-auto text-sm">
                    Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, blandit posuere ligula varius congue cursus porta feugiat
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {testimonials.map((t, index) => (
                    <Card key={index} className="flex flex-col items-center text-center p-10 bg-white border border-gray-100 shadow-sm hover:shadow-xl rounded-none">
                        <div className="w-16 h-16 rounded-full overflow-hidden mb-6 border-2 border-white shadow-md">
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                <span className="text-xl font-serif text-gray-400">{t.name[0]}</span>
                            </div>
                        </div>

                        <p className="text-[#E65100] text-xs font-bold uppercase tracking-wider mb-4 border-b border-[#E65100]/20 pb-1">Client</p>

                        <p className="text-gray-600 italic mb-6 text-sm leading-relaxed">"{t.review}"</p>

                        <div className="flex gap-1 mb-2">
                            {[...Array(t.rating)].map((_, i) => (
                                <Star key={i} className="w-3 h-3 text-[#F5C77A] fill-[#F5C77A]" />
                            ))}
                        </div>

                        <p className="font-bold text-gray-900 font-serif text-sm mt-2">{t.name}</p>
                    </Card>
                ))}
            </div>
        </Section>
    );
};

export default Testimonials;
