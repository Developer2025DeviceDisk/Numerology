"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import Section from "../ui/Section";
import { Compass } from "lucide-react";
import Link from "next/link";

const AboutTransform = () => {
  return (
    <Section className="pt-10 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-20 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-[80%] max-w-[380px] aspect-[3/5] bg-[#EAE4D9] rounded-t-full rounded-b-[200px] overflow-hidden shadow-xl border-4 border-white">

            {/* 33 */}
            <motion.span
              className="absolute top-[8%] left-[20%] font-serif text-[clamp(70px,10vw,130px)] opacity-90"
              animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              33
            </motion.span>

            {/* 5 */}
            <motion.span
              className="absolute bottom-[30%] right-[10%] font-serif text-[clamp(70px,10vw,130px)] opacity-90"
              animate={{ y: [0, 20, 0], rotate: [0, -3, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              5
            </motion.span>

            {/* Compass */}
            <motion.div
              className="absolute top-[45%] left-[15%] opacity-80"
              animate={{ rotate: 360, y: [0, -10, 0] }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                y: { duration: 4, repeat: Infinity },
              }}
            >
              <Compass className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16" />
            </motion.div>

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
            <motion.span
              className="absolute bottom-[5%] left-[20%] font-serif text-[clamp(60px,9vw,110px)] opacity-90"
              animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              25
            </motion.span>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-5 md:space-y-6 text-center lg:text-left"
        >
          <div className="text-xs font-bold tracking-[0.2em] text-gray-600 uppercase">
            Who we are
          </div>

          <h2 className="text-[clamp(28px,5vw,56px)] font-serif leading-tight text-secondary">
            Numerology helps to <br />
            <span className="italic">transform you</span>
          </h2>

          <p className="text-sm md:text-base text-gray-600 max-w-md mx-auto lg:mx-0">
            Numerology is an ancient belief system that assigns spiritual meaning to numbers and their influence on life.
          </p>

          <p className="text-sm md:text-base text-gray-600 max-w-md mx-auto lg:mx-0">
            It reveals personality traits and life purpose using your birth date and name.
          </p>

          <Link href="/about-us">
            <div className="pt-3 flex justify-center lg:justify-start">
              <Button className="px-5 py-3 border bg-white !text-black uppercase shadow-none">
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