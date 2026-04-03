"use client";

import { useState } from "react";

export default function Modal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {

  const [form, setForm] = useState({
    name: "",
    dob: "",
    phone: "",
    email: "",
    concern: "",
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    setForm({
      name: "",
      dob: "",
      phone: "",
      email: "",
      concern: "",
    });
    onClose();
  };

  const handleSubmit = () => {
    if (!form.phone || !form.email) {
      alert("Please fill contact details");
      return;
    }

    console.log("Form Data:", form);
    alert("Submitted successfully!");
    handleClose();
  };

  return (
    // ✅ OVERLAY CLICK HANDLER
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      onClick={handleClose}
    >

      {/* ✅ STOP PROPAGATION (VERY IMPORTANT) */}
      <div
        className="bg-white w-full max-w-lg rounded-2xl p-6 relative shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-500 text-xl"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-2">
          🔮 Get Your Personalized Numerology Report
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

          <input
            type="tel"
            name="phone"
            placeholder="WhatsApp Number"
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

          <textarea
            name="concern"
            placeholder="Your concern (Career, Love, Money...)"
            value={form.concern}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <button
            onClick={handleSubmit}
            className="w-full bg-black text-white py-3 rounded-lg font-bold"
          >
            🔒 Get My Report
          </button>
        </div>

        <p className="text-xs text-center text-gray-500 mt-4">
          
        </p>
      </div>
    </div>
  );
}