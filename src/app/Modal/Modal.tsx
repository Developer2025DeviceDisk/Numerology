"use client";

import { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose }: ModalProps) {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    name: "",
    dob: "",
    phone: "",
    email: "",
    concern: "",
  });

  // ❌ Don't render if closed
  if (!isOpen) return null;

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Step controls (safe)
  const nextStep = () => {
    if (!form.name || !form.dob) {
      alert("Please fill your Name and Date of Birth");
      return;
    }
    setStep((prev) => Math.min(prev + 1, 2));
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  // Reset + Close
  const handleClose = () => {
    setStep(1);
    setForm({
      name: "",
      dob: "",
      phone: "",
      email: "",
      concern: "",
    });
    onClose();
  };

  // Submit
  const handleSubmit = () => {
    if (!form.phone || !form.email) {
      alert("Please fill contact details");
      return;
    }

    console.log("Form Data:", form);

    // 👉 Add API / payment integration here
    alert("Submitted successfully!");

    handleClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      
      {/* Modal */}
      <div className="bg-white w-full max-w-lg rounded-2xl p-6 relative shadow-xl">

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

        {/* Step */}
        <p className="text-center text-sm text-gray-500 mb-4">
          Step {step} of 2
        </p>

        {/* STEP 1 */}
        {step === 1 && (
          <div className="space-y-4">

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg outline-none"
            />

            <input
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg outline-none"
            />

            <button
              type="button"
              onClick={nextStep}
              className="w-full bg-black text-white py-3 rounded-lg font-bold"
            >
              Continue
            </button>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="space-y-4">

            <input
              type="tel"
              name="phone"
              placeholder="WhatsApp Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg outline-none"
            />

            <textarea
              name="concern"
              placeholder="Your concern (Career, Love, Money...)"
              value={form.concern}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg outline-none"
            />

            <div className="flex gap-3">
              <button
                type="button"
                onClick={prevStep}
                className="w-1/2 border py-3 rounded-lg"
              >
                Back
              </button>

              <button
                type="button"
                onClick={handleSubmit}
                className="w-1/2 bg-black text-white py-3 rounded-lg font-bold"
              >
                🔒 Get My Report
              </button>
            </div>
          </div>
        )}

        {/* Footer */}
        <p className="text-xs text-center text-gray-500 mt-4">
          🔒 Your data is सुरक्षित & 100% confidential
        </p>
      </div>
    </div>
  );
}