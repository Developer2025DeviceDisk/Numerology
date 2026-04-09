"use client";

import React, { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import Modal from "@/app/Modal/Modal";
import usePricing from "@/hooks/usePricing";

// ✅ Pricing Type
type PricingType = {
  price: number;
  finalPrice: number;
  discount: number;
  buttonText: string;
  countdown: number;
  offerId: string; // ✅ ADD THIS
};

const StickyBottomBar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isReady, setIsReady] = useState(false);

  const pricing = usePricing() as PricingType | null;

  const isExpired = isReady && timeLeft <= 0;

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  // ✅ TIMER SETUP
useEffect(() => {
  if (!pricing?.countdown || !pricing?.offerId) return;

  const storedOfferId = localStorage.getItem("offer_id");

  // ✅ NEW OFFER DETECTED → RESET EVERYTHING
  if (storedOfferId !== pricing.offerId) {
    localStorage.setItem("offer_id", pricing.offerId);
    localStorage.removeItem("offer_end_time");
    localStorage.removeItem("offer_expired");
  }

  const savedEndTime = localStorage.getItem("offer_end_time");
  const isExpiredStored = localStorage.getItem("offer_expired");

  // ✅ If already expired → don't restart
  if (isExpiredStored === "true") {
    setTimeLeft(0);
    setIsReady(true);
    return;
  }

  if (savedEndTime) {
    const remaining = Math.floor(
      (parseInt(savedEndTime) - Date.now()) / 1000
    );

    if (remaining <= 0) {
      localStorage.setItem("offer_expired", "true");
      setTimeLeft(0);
    } else {
      setTimeLeft(remaining);
    }
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

  // ✅ DELETE LOCALSTORAGE WHEN EXPIRED
  useEffect(() => {
    if (isReady && timeLeft === 0) {
      localStorage.setItem("offer_expired", "true");
    }
  }, [timeLeft, isReady]);

  // ✅ FORMAT TIME
  const formatTime = (sec: number): string => {
    const hrs = Math.floor(sec / 3600);
    const mins = Math.floor((sec % 3600) / 60);
    const secs = sec % 60;

    const pad = (n: number) => n.toString().padStart(2, "0");

    return `${pad(hrs)}h ${pad(mins)}m ${pad(secs)}s`;
  };

  // ✅ PRICING LOGIC
  const price = pricing?.price ?? 1999;
  const finalPrice = !isExpired ? pricing?.finalPrice ?? price : price;
  const discount = !isExpired ? pricing?.discount ?? 0 : 0;
  const buttonText = pricing?.buttonText ?? "Get Your Full Report";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-secondary p-3 border-t border-gray-200">

      <div className="relative max-w-4xl mx-auto flex items-center justify-center min-h-[60px]">

        {/* LEFT: PRICE */}
        <div className="hidden md:block absolute left-0 pl-12">
          <p className="text-xl md:text-2xl font-serif font-bold text-gray-900">
            {!isExpired && (
              <span className="line-through text-gray-500 mr-2">
                ₹ {price}
              </span>
            )}
            ₹ {finalPrice}
          </p>

          {!isExpired && discount > 0 && (
            <span className="text-red-500 text-sm font-bold">
              {discount}% OFF
            </span>
          )}
        </div>

        {/* CENTER: BUTTON */}
        <Button
          onClick={handleOpen}
          className="bg-white !text-black font-bold rounded-full shadow-none border border-black-300 px-10"
        >
          {buttonText}
        </Button>

        {/* RIGHT: TIMER */}
        <div className="hidden md:block absolute right-0 pr-4">
          {timeLeft > 0 ? (
            <p className="text-gray-900 font-bold text-lg md:text-xl">
              ⏳ {formatTime(timeLeft)}
            </p>
          ) : isReady ? (
            <p className="text-red-500 font-bold text-lg">

            </p>
          ) : null}
        </div>
      </div>

      {/* MOBILE */}
      <div className="md:hidden flex flex-col items-center mt-2 gap-1">
        <p className="text-lg font-serif font-bold text-gray-900">
          {!isExpired && (
            <span className="line-through text-gray-500 mr-2">
              ₹ {price}
            </span>
          )}
          ₹ {finalPrice}
        </p>

        {!isExpired && discount > 0 && (
          <span className="text-red-500 text-sm font-bold">
            {discount}% OFF
          </span>
        )}

        {timeLeft > 0 ? (
          <p className="text-gray-900 font-bold text-sm">
            ⏳ {formatTime(timeLeft)}
          </p>
        ) : isReady ? (
          <p className="text-red-500 font-bold text-sm">

          </p>
        ) : null}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default StickyBottomBar;