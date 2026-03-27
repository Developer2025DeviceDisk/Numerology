"use client";

import React from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

const StickyBottomBar = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#1A1A1A] border-t border-[#C5A065]/30 shadow-[0_-10px_30px_rgba(0,0,0,0.3)] py-3 px-4 md:px-8 flex flex-col sm:flex-row justify-between items-center gap-3 backdrop-blur-md bg-opacity-95">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
                <p className="text-sm md:text-base font-serif font-medium text-white">
                    Unlock your cosmic secrets with a <span className="text-[#C5A065] font-bold">Premium Reading</span>
                </p>
                <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-[#C5A065]"></div>
                <p className="text-[#B08D57] font-bold text-lg md:text-xl">
                    Only $9.99
                </p>
            </div>
            <Link href="/#consultation" className="w-full sm:w-auto shrink-0">
                <Button className="w-full sm:w-auto bg-[#B08D57] hover:bg-[#8e7042] text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-[#B08D57]/30 transition-all transform hover:-translate-y-1">
                    Get Your Full Report
                </Button>
            </Link>
        </div>
    );
};

export default StickyBottomBar;
