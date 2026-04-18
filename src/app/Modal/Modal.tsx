"use client";

import { useState } from "react";
import { submitModal } from "../../Service/api";

type FormState = {
  name: string;
  dob: string;
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
    dob: "",
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
      dob: "",
      phone: "",
      email: "",
      birthPlace: "", 
    });
    setStatus(null);
    onClose();
  };

  const handleSubmit = async () => {
    if (loading) return;

    if (
      !form.name ||
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
      const data = await submitModal({
        fullName: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        dob: form.dob,
        birthPlace: form.birthPlace.trim(),
      });

      setStatus({
        type: "success",
        message: data?.message || "Submitted successfully!",
      });

      setForm({
        name: "",
        dob: "",
        phone: "",
        email: "",
        birthPlace: "", 
      });
    } catch (error: unknown) {
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
    } finally {
      setLoading(false);
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
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="date"
            name="dob"
            value={form.dob}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

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