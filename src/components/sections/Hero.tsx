"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import Section from "../ui/Section";
import { Sparkle, Star } from "lucide-react"; 
import Modal from "../../app/Modal/Modal";
import Link from "next/link"; 
import usePricing from "@/hooks/usePricing";

const Hero = () => {
  const [open, setOpen] = useState(false);
  const pricing = usePricing(

  );
  const discount = pricing?.discount || 50;

  return (
    <>
      <Section className="pt-32 pb-10 md:pt-20 md:pb-20 overflow-hidden bg-background relative">

        {/* Background Stars */}
        <div className="absolute inset-0 pointer-events-none opacity-70">

          <motion.div
            className="absolute top-1/4 left-10"
            animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Star className="w-6 h-6 text-secondary" />
          </motion.div>

          <motion.div
            className="absolute top-[30%] right-[10%]"
            animate={{ y: [0, -8, 0], scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Star className="w-4 h-4 text-secondary" />
          </motion.div>

          <motion.div
            className="absolute bottom-1/3 left-[30%]"
            animate={{ y: [0, -12, 0], scale: [1, 1.12, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <Star className="w-3 h-3 text-secondary" />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 md:pr-10"
          >
            <div className="text-xs font-bold tracking-[0.2em] text-gray-600 uppercase pl-1">
              Consultation For Free
            </div>

            <h1 className="text-2xl md:text-7xl font-serif font-medium leading-[0.9] text-secondary">
              Infinite power of <br />
              <span className="italic">numerology</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-md leading-relaxed pl-1">
              Unlock the hidden meaning of numbers and discover what destiny holds for you.
            </p>

            <div className="flex flex-col items-start">

              <Button
                size="md"
                onClick={() => setOpen(true)}
                className="rounded-xl border border-black !text-black font-bold uppercase bg-white shadow-none"
              >
                BUY NOW AT {discount}% OFF
              </Button>

              {/* ✅ FIXED LINK */}
              <Link href="/#Consultation">
                <span className="relative mt-3 inline-block text-sm font-medium text-secondary group cursor-pointer">
                  Or Get a short For Free
                  <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-secondary transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>

            </div>

            {/* STATS */}
            <div className="flex items-center gap-12 pt-12 pl-1 border-t border-gray-200 mt-12 max-w-md">
              <div>
                <p className="font-serif text-2xl font-bold text-secondary">85k</p>
                <p className="text-xs text-gray-500 uppercase mt-1">Happy Clients</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-bold text-secondary">12</p>
                <p className="text-xs text-gray-500 uppercase mt-1">Years Experience</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-bold text-secondary">5</p>
                <p className="text-xs text-gray-500 uppercase mt-1">Awards Won</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-[350px] h-[550px] md:w-[420px] md:h-[650px] bg-[#EAE4D9] rounded-t-full rounded-b-[100px] overflow-hidden shadow-2xl border-4 border-white">

              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 600">
                <path d="M-50,200 Q150,100 250,50 T450,150" fill="none" stroke="#E07A5F" strokeWidth="1.5" opacity="0.6" />
                <path d="M50,550 Q200,450 350,400" fill="none" stroke="#E07A5F" strokeWidth="1.5" opacity="0.6" />
              </svg>

              <motion.div className="absolute top-[5%] left-[18%]" animate={{ y: [0, -15, 0] }} transition={{ duration: 3, repeat: Infinity }}>
                <span className="text-[150px] font-serif">45</span>
              </motion.div>

              <motion.div className="absolute bottom-[30%] right-[8%]" animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity }}>
                <span className="text-[120px] font-serif">7</span>
              </motion.div>

              <motion.div className="absolute -bottom-[2%] right-[50%]" animate={{ y: [0, -18, 0] }} transition={{ duration: 5, repeat: Infinity }}>
                <span className="text-[150px] font-serif">18</span>
              </motion.div>

              <motion.div className="absolute top-[32%] left-[32%]" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 3, repeat: Infinity }}>
                <Sparkle className="w-10 h-10 text-[#C5A065]" />
              </motion.div>

              <motion.div className="absolute top-[68%] right-[68%]" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 3, repeat: Infinity }}>
                <Sparkle className="w-10 h-10 text-[#C5A065]" />
              </motion.div>

            </div>
          </motion.div>

        </div>
      </Section>

      <Modal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Hero;