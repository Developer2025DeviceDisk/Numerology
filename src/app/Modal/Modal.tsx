"use client";

import { useState } from "react";
import {
  submitModal,
  generateReport,
  createPaymentOrder,
} from "../../Service/api";

declare global {
  interface Window {
    Razorpay: any;
  }
}

type FormState = {
  name: string;
  birthName: string;
  dob: string;
  birthTime: string;
  phone: string;
  email: string;
  birthPlace: string;
};

type RazorpayResponse = {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
};

export default function Modal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const initialForm: FormState = {
    name: "",
    birthName: "",
    dob: "",
    birthTime: "",
    phone: "",
    email: "",
    birthPlace: "",
  };

  const [form, setForm] = useState<FormState>(initialForm);

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
    setForm(initialForm);
    setStatus(null);
    onClose();
  };

  const loadRazorpayScript = async (): Promise<boolean> => {
    if (window.Razorpay) return true;

    return new Promise((resolve) => {
      const script = document.createElement("script");

      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;

      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);

      document.body.appendChild(script);
    });
  };

  const generateAndDownloadReport = async (
    response: RazorpayResponse
  ) => {
    try {
      setStatus({
        type: "success",
        message: "Payment successful. Generating report...",
      });

      await submitModal({
        fullName: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        dob: form.dob,
        birthPlace: form.birthPlace.trim(),
      });

      const pdfBlob = await generateReport({
        fullName: form.name.trim(),
        birthName: form.birthName.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        dob: form.dob,
        birthTime: form.birthTime,
        birthPlace: form.birthPlace.trim(),
        ...response,
      });

      const url = URL.createObjectURL(pdfBlob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `Numerology_Report_${form.name.replace(
        /\s+/g,
        "_"
      )}.pdf`;

      document.body.appendChild(a);
      a.click();

      a.remove();

      URL.revokeObjectURL(url);

      setStatus({
        type: "success",
        message: "Report downloaded successfully!",
      });

      setTimeout(handleClose, 3000);

    } catch (error) {
      console.error(error);

      setStatus({
        type: "error",
        message:
          "Payment completed but report generation failed.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleRazorpayPayment = async () => {
    const loaded = await loadRazorpayScript();

    if (!loaded) {
      throw new Error(
        "Failed to load Razorpay. Check internet connection."
      );
    }

    const { data } = await createPaymentOrder();

    if (!data?.orderId) {
      throw new Error("Payment initialization failed");
    }

    const options = {
      key:
        process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID ??
        "rzp_test_SfdcuN5bv09PMM",

      amount: data.amount,
      currency: data.currency,
      order_id: data.orderId,

      name: "Numerology Report",

      description:
        "Payment for Personalized Numerology Report",

      prefill: {
        name: form.name,
        email: form.email,
        contact: form.phone,
      },

      theme: {
        color: "#B08D57",
      },

      handler: async (
        response: RazorpayResponse
      ) => {
        await generateAndDownloadReport(response);
      },
    };

    const razorpay = new window.Razorpay(options);

    razorpay.on(
      "payment.failed",
      (response: any) => {
        setLoading(false);

        setStatus({
          type: "error",
          message:
            response?.error?.description ??
            "Payment failed",
        });
      }
    );

    razorpay.open();
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
        message: "Please fill all required fields",
      });

      return;
    }

    try {
      setLoading(true);
      setStatus(null);

      await handleRazorpayPayment();
    } catch (error) {
      setLoading(false);

      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong",
      });
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
          className="absolute right-3 top-3 text-gray-500 text-xl"
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
            placeholder="Full Name at Birth"
            value={form.birthName}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <div className="flex gap-2">

            {/* Date of Birth */}
            <input
              type={form.dob ? "date" : "text"}
              name="dob"
              placeholder="Date of Birth"
              value={form.dob}
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => {
                if (!form.dob) e.target.type = "text";
              }}
              onChange={handleChange}
              className="w-1/2 border p-3 rounded-lg"
            />

            {/* Birth Time */}
            <input
              type={form.birthTime ? "time" : "text"}
              name="birthTime"
              placeholder="Birth Time"
              value={form.birthTime}
              onFocus={(e) => (e.target.type = "time")}
              onBlur={(e) => {
                if (!form.birthTime) e.target.type = "text";
              }}
              onChange={handleChange}
              className="w-1/2 border p-3 rounded-lg"
            />
          </div>

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
            {loading
              ? "Processing..."
              : "Get My Report"}
          </button>

          {status && (
            <p
              className={`text-sm text-center ${status.type === "success"
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