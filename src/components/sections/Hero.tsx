"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import Section from "../ui/Section";
import { Sparkle, Star } from "lucide-react";
import Modal from "../../app/Modal/Modal";
import usePricing from "@/hooks/usePricing";

type PricingType = {
  price: number;
  finalPrice: number;
  discount: number;
  buttonText: string;
  countdown: number;
};

const Hero: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isReady, setIsReady] = useState(false);

  const pricing = usePricing() as PricingType | null;

  // ✅ TIMER SETUP
  useEffect(() => {
    if (!pricing?.countdown) return;

    const savedEndTime = localStorage.getItem("offer_end_time");

    if (savedEndTime) {
      const remaining = Math.floor(
        (parseInt(savedEndTime) - Date.now()) / 1000
      );
      setTimeLeft(remaining > 0 ? remaining : 0);
    } else {
      const endTime = Date.now() + pricing.countdown * 1000;
      localStorage.setItem("offer_end_time", endTime.toString());
      setTimeLeft(pricing.countdown);
    }

    setIsReady(true);
  }, [pricing]);

  // ✅ COUNTDOWN
  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const isExpired = isReady && timeLeft <= 0;

  return (
    <>
      <Section className="pt-28 pb-12 sm:pt-32 md:pt-24 lg:pt-28 md:pb-20 overflow-hidden relative">

        {/* ⭐ Background */}
        <div className="absolute inset-0 pointer-events-none opacity-60">

          <motion.div
            className="absolute top-1/4 left-6 md:left-10"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Star className="w-4 h-4 md:w-6 md:h-6 text-secondary" />
          </motion.div>

          <motion.div
            className="absolute top-[30%] right-[8%]"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Star className="w-3 h-3 md:w-4 md:h-4 text-secondary" />
          </motion.div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6 md:space-y-8 text-center md:text-left"
          >
            <div className="text-xs tracking-[0.2em] text-gray-600 uppercase">
              Consultation For Free
            </div>

            <h1 className="font-serif font-medium leading-tight text-secondary text-[clamp(28px,6vw,64px)]">
              Infinite power of <br />
              <span className="italic">numerology</span>
            </h1>

            <p className="text-sm md:text-base text-gray-600 max-w-md mx-auto md:mx-0">
              Unlock the hidden meaning of numbers and discover what destiny holds for you.
            </p>

            <div className="flex justify-center md:justify-start">
              <Button
                onClick={() => setOpen(true)}
                className="rounded-xl border border-black !text-black shadow-none font-bold uppercase bg-white"
              >
                {!isExpired && pricing?.discount
                  ? `BUY NOW AT ${pricing.discount}% OFF`
                  : "BUY NOW"}
              </Button>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 max-w-md mx-auto md:mx-0 text-center md:text-left">
              <div>
                <p className="font-serif text-xl md:text-2xl font-bold text-secondary">85k</p>
                <p className="text-[10px] md:text-xs text-gray-500 uppercase mt-1">
                  Happy Clients
                </p>
              </div>
              <div>
                <p className="font-serif text-xl md:text-2xl font-bold text-secondary">12</p>
                <p className="text-[10px] md:text-xs text-gray-500 uppercase mt-1">
                  Years Experience
                </p>
              </div>
              <div>
                <p className="font-serif text-xl md:text-2xl font-bold text-secondary">5</p>
                <p className="text-[10px] md:text-xs text-gray-500 uppercase mt-1">
                  Awards Won
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <div className="relative w-[85%] max-w-[420px] aspect-[2/3] bg-[#EAE4D9] rounded-t-full rounded-b-[100px] overflow-hidden shadow-2xl border-4 border-white">

              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 600">
                <path d="M-50,200 Q150,100 250,50 T450,150" fill="none" stroke="#E07A5F" strokeWidth="1.2" opacity="0.6" />
                <path d="M50,550 Q200,450 350,400" fill="none" stroke="#E07A5F" strokeWidth="1.2" opacity="0.6" />
              </svg>

              {/* Numbers */}
              <motion.span
                className="absolute top-[6%] left-[15%] text-[clamp(80px,12vw,140px)] font-serif"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                45
              </motion.span>

              <motion.span
                className="absolute bottom-[30%] right-[8%] text-[clamp(70px,10vw,120px)] font-serif"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                7
              </motion.span>

              <motion.span
                className="absolute bottom-[0%] left-[35%] text-[clamp(80px,12vw,140px)] font-serif"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                18
              </motion.span>

              {/* Sparkles */}
              <motion.div
                className="absolute top-[30%] left-[30%]"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Sparkle className="w-6 h-6 md:w-10 md:h-10 text-[#C5A065]" />
              </motion.div>

              <motion.div
                className="absolute bottom-[25%] left-[15%]"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Sparkle className="w-5 h-5 md:w-8 md:h-8 text-[#C5A065]" />
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