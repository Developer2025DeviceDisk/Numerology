import { useEffect, useState } from "react";

const API_URL = "http://localhost:5000/api/pricing/";

const usePricing = () => {
  const [pricing, setPricing] = useState(null);

  useEffect(() => {
    const fetchPricing = async () => {
      try {
        const res = await fetch(API_URL, {
          
           cache: "no-cache",
          
        });
        const data = await res.json();
        
        if (res.ok && data?.data) {
          setPricing(data.data);
        }
      } catch (err) {
        console.error("❌ Pricing fetch failed:", err);

        setPricing({
          price: null,
          finalPrice: null,
          discount: null,
          buttonText: "Get Your Full Report",
        });
      }
    };

    fetchPricing();
  }, []);

  return pricing;
};

export default usePricing; // ✅ IMPORTANT