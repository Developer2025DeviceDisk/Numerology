"use client";

import { useState } from "react";
import { generateReport, createPaymentOrder } from "../../Service/api";

type FormState = {
  name: string;
  birthName: string;
  dob: string;
  birthTime: string;
  phone: string;
  email: string;
  birthPlace: string; 
};

export default function Modal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [form, setForm] = useState<FormState>({
    name: "",
    birthName: "",
    dob: "",
    birthTime: "",
    phone: "",
    email: "",
    birthPlace: "", 
  });
  
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClose = () => {
    setForm({
      name: "",
      birthName: "",
      dob: "",
      birthTime: "",
      phone: "",
      email: "",
      birthPlace: "", 
    });
    setStatus(null);
    onClose();
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleRazorpayPayment = async () => {
    const isLoaded = await loadRazorpayScript();
    if (!isLoaded) {
      throw new Error("Razorpay SDK failed to load. Are you online?");
    }

    const { data } = await createPaymentOrder();
    
    if (!data || !data.orderId) {
      throw new Error("Failed to initialize payment order");
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_SfdcuN5bv09PMM",
      amount: data.amount,
      currency: data.currency,
      name: "Numerology Report",
      description: "Payment for Personalized Numerology Report",
      order_id: data.orderId,
      handler: async function (response: any) {
        try {
          setLoading(true);
          setStatus({
            type: "success",
            message: "Payment successful. Generating your report...",
          });

          // Generate report using the existing generateReport which returns a blob
          const pdfBlob = await generateReport({
            fullName: form.name.trim(),
            birthName: form.birthName.trim(),
            email: form.email.trim(),
            phone: form.phone.trim(),
            dob: form.dob,
            birthTime: form.birthTime,
            birthPlace: form.birthPlace.trim(),
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature,
          });

          // Trigger download
          const url = window.URL.createObjectURL(pdfBlob);
          const a = document.createElement("a");
          a.href = url;
          a.download = `Numerology_Report_${form.name.replace(/\s+/g, "_")}.pdf`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);

          setStatus({
            type: "success",
            message: "Report downloaded successfully!",
          });

          setTimeout(() => {
            handleClose();
          }, 3000); // Close modal automatically after 3 seconds on success

        } catch (error: unknown) {
          console.error("Report Generation Error:", error);
          setStatus({
            type: "error",
            message: "Payment recorded but PDF download failed. Please contact support.",
          });
        } finally {
          setLoading(false);
        }
      },
      prefill: {
        name: form.name,
        email: form.email,
        contact: form.phone,
      },
      theme: {
        color: "#B08D57",
      },
    };

    const paymentObject = new (window as any).Razorpay(options);
    paymentObject.on("payment.failed", function (response: any) {
      setStatus({
        type: "error",
        message: response.error.description || "Payment failed. Please try again.",
      });
      setLoading(false);
    });
    
    paymentObject.open();
  };

  const handleSubmit = async () => {
    if (loading) return;

    if (
      !form.name ||
      !form.birthName ||
      !form.email ||
      !form.phone ||
      !form.dob ||
      !form.birthPlace 
    ) {
      setStatus({
        type: "error",
        message: "Please fill all fields.",
      });
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      await handleRazorpayPayment();
    } catch (error: unknown) {
      setLoading(false);
      if (error instanceof Error) {
        setStatus({
          type: "error",
          message: error.message,
        });
      } else {
        setStatus({
          type: "error",
          message: "Something went wrong",
        });
      }
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      onClick={handleClose}
    >
      <div
        className="bg-white w-full max-w-lg rounded-2xl p-6 relative shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-500 text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-center mb-4">
          Get Your Personalized Numerology Report
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Current Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            name="birthName"
            placeholder="Full Name at Birth (Exactly as on Certificate)"
            value={form.birthName}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <div className="flex gap-2">
            <input
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleChange}
              className="w-1/2 border p-3 rounded-lg"
            />
            <input
              type="time"
              name="birthTime"
              value={form.birthTime}
              onChange={handleChange}
              className="w-1/2 border p-3 rounded-lg"
            />
          </div>

          {/* ✅ ADDED BIRTH PLACE FIELD */}
          <input
            type="text"
            name="birthPlace"
            placeholder="Birth Place"
            value={form.birthPlace}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-black text-white py-3 rounded-lg font-bold disabled:opacity-50"
          >
            {loading ? "Submitting..." : "🔒 Get My Report"}
          </button>

          {status && (
            <p
              className={`text-sm mt-2 text-center ${
                status.type === "success"
                  ? "text-green-600"
                  : "text-red-500"
              }`}
            >
              {status.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}