"use client";

import React from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

const StickyBottomBar = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-secondary p-3 border-t border-gray-200">
            
            <div className="relative max-w-5xl mx-auto flex items-center justify-center min-h-[60px]">

                {/* LEFT: Price */}
                <div className="hidden md:block absolute left-0 pl-45">
                    <p className="text-xl md:text-2xl font-serif font-bold text-grey-900">
                        ₹ 1999/- only
                    </p>
                </div>

                {/* CENTER: Button */}
                <Link href="/#consultation">
                    <Button className="bg-white !text-black font-bold rounded-full shadow-none px-10">
                        Get Your Full Report
                    </Button>
                </Link>

                {/* RIGHT: Countdown */}
                <div className="hidden md:block absolute right-0 pr-35">
                    <p className="text-grey-900 font-bold text-lg md:text-xl">
                        Offer Expiry: 00:15:00
                    </p>
                </div>

            </div>

            {/* MOBILE VIEW */}
            <div className="md:hidden flex flex-col items-center mt-2 gap-1">
                <p className="text-lg font-serif font-bold text-grey-900">
                    ₹ 1999 /- Only
                </p>

                <p className="text-grey-900 font-bold text-sm">
                    Offer Expiry: 00:15:00
                </p>
            </div>
        </div>
    );
};

export default StickyBottomBar;