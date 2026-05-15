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
  offerId: string;
};

const StickyBottomBar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isReady, setIsReady] = useState(false);

  const pricing = usePricing() as PricingType | null;

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  // ✅ WAIT FOR REAL ADMIN DATA
  const countdown = pricing?.countdown;
  const offerId = pricing?.offerId;

  // ✅ TIMER SETUP
  useEffect(() => {
    // ✅ WAIT UNTIL API DATA LOADS
    if (!pricing || !countdown || !offerId) return;

    const storedOfferId = localStorage.getItem("offer_id");

    // ✅ RESET ONLY IF ADMIN CHANGES OFFER
    if (storedOfferId && storedOfferId !== offerId) {
      localStorage.removeItem("offer_end_time");
      localStorage.removeItem("offer_expired");
    }

    // ✅ SAVE CURRENT OFFER
    localStorage.setItem("offer_id", offerId);

    const expired = localStorage.getItem("offer_expired");

    // ✅ IF ALREADY EXPIRED
    if (expired === "true") {
      setTimeLeft(0);
      setIsReady(true);
      return;
    }

    let endTime = localStorage.getItem("offer_end_time");

    // ✅ CREATE TIMER ONLY FIRST TIME
    if (!endTime) {
      const newEndTime = Date.now() + countdown * 1000;

      localStorage.setItem(
        "offer_end_time",
        newEndTime.toString()
      );

      endTime = newEndTime.toString();
    }

    // ✅ TIMER FUNCTION
    const updateTimer = () => {
      const remaining = Math.max(
        0,
        Math.floor((parseInt(endTime as string) - Date.now()) / 1000)
      );

      setTimeLeft(remaining);

      // ✅ MARK EXPIRED
      if (remaining <= 0) {
        localStorage.setItem("offer_expired", "true");
      }
    };

    // ✅ INITIAL RUN
    updateTimer();

    // ✅ START INTERVAL
    const interval = setInterval(updateTimer, 1000);

    setIsReady(true);

    return () => clearInterval(interval);
  }, [pricing, countdown, offerId]);

  // ✅ FORMAT TIME
  const formatTime = (sec: number): string => {
    const hrs = Math.floor(sec / 3600);
    const mins = Math.floor((sec % 3600) / 60);
    const secs = sec % 60;

    const pad = (n: number) => n.toString().padStart(2, "0");

    return `${pad(hrs)}h ${pad(mins)}m ${pad(secs)}s`;
  };

  const isExpired = timeLeft <= 0;

  // ✅ PRICING LOGIC
  const price = pricing?.price ?? 1999;

  const finalPrice = !isExpired
    ? pricing?.finalPrice ?? price
    : price;

  const discount = !isExpired
    ? pricing?.discount ?? 0
    : 0;

  const buttonText =
    pricing?.buttonText ?? "Get Your Full Report";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-secondary p-3 border-t border-gray-200">

      <div className="relative max-w-4xl mx-auto flex items-center justify-center min-h-[60px]">

        {/* LEFT PRICE */}
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

        {/* CENTER BUTTON */}
        <Button
          onClick={handleOpen}
          className="bg-white !text-black font-bold rounded-full shadow-none border border-black-300 px-10"
        >
          {buttonText}
        </Button>

        {/* RIGHT TIMER */}
        <div className="hidden md:block absolute right-0 pr-4">

          {isReady && !isExpired && (
            <p className="text-gray-900 font-bold text-lg md:text-xl">
              ⏳ {formatTime(timeLeft)}
            </p>
          )}

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

        {isReady && !isExpired && (
          <p className="text-gray-900 font-bold text-sm">
            ⏳ {formatTime(timeLeft)}
          </p>
        )}

      </div>

      {/* MODAL */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default StickyBottomBar;