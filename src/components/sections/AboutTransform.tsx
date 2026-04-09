"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import Section from "../ui/Section";
import { Compass } from "lucide-react";
import Link from "next/link";

const AboutTransform = () => {
  return (
    <Section className="pt-10 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-32 -translate-y-4 md:-translate-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 xl:gap-100 items-center">
        
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex items-center justify-center lg:justify-end"
        >
          <div className="relative w-[260px] h-[420px] sm:w-[300px] sm:h-[480px] md:w-[340px] md:h-[540px] lg:w-[380px] lg:h-[580px] bg-[#EAE4D9] rounded-t-full rounded-b-[200px] overflow-hidden shadow-xl border-4 border-white">
            
            {/* 33 */}
            <div className="absolute top-[8%] left-[25%]">
              <motion.span
                initial={{ y: 0 }}
                animate={{ y: [0, -25, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ display: "inline-block" }}
                className="font-serif text-[clamp(80px,10vw,140px)] opacity-90 will-change-transform"
              >
                33
              </motion.span>
            </div>

            {/* 5 */}
            <div className="absolute bottom-[30%] right-[10%]">
              <motion.span
                initial={{ y: 0 }}
                animate={{ y: [0, 20, 0], rotate: [0, -3, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                style={{ display: "inline-block" }}
                className="font-serif text-[clamp(80px,10vw,140px)] opacity-90 will-change-transform"
              >
                5
              </motion.span>
            </div>

            {/* Compass */}
            <div className="absolute top-[45%] right-[60%] opacity-80">
              <motion.div
                initial={{ y: 0 }}
                animate={{ rotate: 360, y: [0, -10, 0] }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                <Compass className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" />
              </motion.div>
            </div>

            {/* SVG lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 380 580"
            >
              <path
                d="M50,100 C150,200 250,50 350,150"
                fill="none"
                stroke="#E07A5F"
                strokeWidth="1"
                opacity="0.5"
              />
              <path
                d="M20,500 C120,400 280,550 360,450"
                fill="none"
                stroke="#E07A5F"
                strokeWidth="1"
                opacity="0.5"
              />
            </svg>

            {/* 25 */}
            <div className="absolute bottom-[5%] left-[20%]">
              <motion.span
                initial={{ y: 0 }}
                animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                style={{ display: "inline-block" }}
                className="font-serif text-[clamp(70px,9vw,120px)] opacity-90 will-change-transform"
              >
                25
              </motion.span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6 md:space-y-8 text-center lg:text-left"
        >
          <div className="text-xs font-bold tracking-[0.2em] text-gray-600 uppercase">
            Who we are
          </div>

          <h2 className="text-[clamp(32px,5vw,60px)] font-serif leading-[1.1] text-secondary font-medium">
            Numerology helps to <br />
            <span className="italic">transform you</span>
          </h2>

          <p className="text-base md:text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
            Numerology is an ancient belief system that assigns spiritual meaning to numbers and their influence on life.
          </p>

          <p className="text-sm md:text-base text-gray-600 max-w-lg mx-auto lg:mx-0">
            It reveals personality traits and life purpose using your birth date and name.
          </p>

          <Link href="/about-us">
            <div className="pt-4 flex justify-center lg:justify-start">
              <Button className="px-4 py-3 border bg-white !text-black shadow-none uppercase">
                Read More
              </Button>
            </div>
          </Link>
        </motion.div>
      </div>
    </Section>
  );
};

export default AboutTransform;