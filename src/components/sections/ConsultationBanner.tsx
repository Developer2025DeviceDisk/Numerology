"use client";
import React, { useState } from "react";

const ConsultationBanner = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    birthPlace: "",
    concern: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.gender) {
      setStatus({ type: "error", message: "Please select a gender." });
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setStatus({
        type: "success",
        message: "Report requested successfully!",
      });
    }, 1500);
  };

  const inputClass =
    "w-full h-[52px] px-4 bg-white border border-gray-200 rounded-xl text-black focus:outline-none focus:border-[#B08D57] focus:ring-2 focus:ring-[#B08D57]/20 transition-all";

  const labelClass = "text-sm text-gray-600 mb-1 block";

  return (
    <div className="bg-[#F9F5EE] py-20">
      <main className="w-full max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-[1fr_520px] gap-12 lg:gap-20 items-start lg:items-center">
        
        {/* LEFT CONTENT */}
        <div className="space-y-6 max-w-lg lg:max-w-xl text-center lg:text-left">
          <span className="text-xs tracking-widest text-gray-500 uppercase">
            Free Consultation
          </span>

          <h1 className="text-[clamp(36px,5vw,64px)] font-bold text-[#B08D57] leading-tight">
            Get Your Personalized <br /> Numerology Report
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed">
            Discover insights about your career, relationships, and life path
            through a detailed numerology analysis tailored just for you.
          </p>
        </div>

        {/* FORM */}
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 w-full max-w-lg lg:max-w-xl mx-auto lg:ml-auto">
          
          {status.message && (
            <div
              className={`mb-4 p-3 rounded-lg text-sm ${
                status.type === "success"
                  ? "bg-green-50 text-green-600"
                  : "bg-red-50 text-red-600"
              }`}
            >
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Full Name */}
            <div>
              <label className={labelClass}>Full Name *</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className={inputClass}
              />
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>
            </div>

            {/* DOB & Gender */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Date of Birth *</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>Gender *</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Birth Place */}
            <div>
              <label className={labelClass}>Birth Place</label>
              <input
                type="text"
                name="birthPlace"
                value={formData.birthPlace}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            {/* Concern */}
            <div>
              <label className={labelClass}>Main Concern</label>
              <select
                name="concern"
                value={formData.concern}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">Select your concern</option>
                <option value="career">Career</option>
                <option value="love">Love</option>
                <option value="money">Money</option>
                <option value="health">Health</option>
              </select>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-[#B08D57] text-white font-semibold hover:opacity-90 transition-all disabled:opacity-50"
            >
              {loading ? "Processing..." : "Get Free Report"}
            </button>

            <p className="text-xs text-gray-400 text-center">
             
            </p>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ConsultationBanner;