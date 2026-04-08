import { useEffect, useState } from "react";

const API_URL = "http://localhost:5000/api/pricing/";

const usePricing = () => {
  const [pricing, setPricing] = useState(null);

  useEffect(() => {
    const fetchPricing = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();

        if (res.ok && data?.data) {
          setPricing(data.data);
        }
      } catch (err) {
        console.error("❌ Pricing fetch failed:", err);

        setPricing({
          price: 1999,
          finalPrice: 499,
          discount: 75,
          buttonText: "Get Your Full Report",
        });
      }
    };

    fetchPricing();
  }, []);

  return pricing;
};

export default usePricing; // ✅ IMPORTANT