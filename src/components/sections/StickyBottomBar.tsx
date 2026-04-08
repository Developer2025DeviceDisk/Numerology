"use client";

import React, { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import Modal from "@/app/Modal/Modal";
import usePricing from "@/hooks/usePricing";

const StickyBottomBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

  const pricing = usePricing();

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  // ✅ SET TIMER FROM DB + PERSIST IN LOCALSTORAGE
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
  }, [pricing]);

  // ✅ COUNTDOWN TIMER
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

  // ✅ FORMAT TIME
  const formatTime = (sec) => {
    const hrs = Math.floor(sec / 3600);
    const mins = Math.floor((sec % 3600) / 60);
    const secs = sec % 60;

    return `${hrs}h ${mins}m ${secs}s`;
  };

  // ✅ FALLBACK VALUES
  const price = pricing?.price || 1999;
  const finalPrice = pricing?.finalPrice || price;
  const discount = pricing?.discount || 0;
  const buttonText = pricing?.buttonText || "Get Your Full Report";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-secondary p-3 border-t border-gray-200">

      <div className="relative max-w-4xl mx-auto flex items-center justify-center min-h-[60px]">

        {/* LEFT: PRICE */}
        <div className="hidden md:block absolute left-0 pl-12">
          <p className="text-xl md:text-2xl font-serif font-bold text-gray-900">
            <span className="line-through text-gray-500 mr-2">
              ₹ {price}
            </span>
            ₹ {finalPrice}
          </p>

          {discount > 0 && (
            <span className="text-red-500 text-sm font-bold">
              {discount}% OFF
            </span>
          )}
        </div>

        {/* CENTER: BUTTON */}
        <Button
          onClick={handleOpen}
          className="bg-white !text-black font-bold rounded-full px-10"
        >
          {buttonText}
        </Button>

        {/* RIGHT: COUNTDOWN */}
        <div className="hidden md:block absolute right-0 pr-4">
          {timeLeft > 0 && (
            <p className="text-gray-900 font-bold text-lg md:text-xl">
              ⏳ {formatTime(timeLeft)}
            </p>
          )}
        </div>
      </div>

      {/* MOBILE VIEW */}
      <div className="md:hidden flex flex-col items-center mt-2 gap-1">
        <p className="text-lg font-serif font-bold text-gray-900">
          <span className="line-through text-gray-500 mr-2">
            ₹ {price}
          </span>
          ₹ {finalPrice}
        </p>

        {discount > 0 && (
          <span className="text-red-500 text-sm font-bold">
            {discount}% OFF
          </span>
        )}

        {timeLeft > 0 && (
          <p className="text-gray-900 font-bold text-sm">
            ⏳ {formatTime(timeLeft)}
          </p>
        )}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default StickyBottomBar;