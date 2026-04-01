"use client";
import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

const ConsultationBanner = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dob: '',
    gender: '', // Stores 'male' or 'female'
    birthPlace: '',
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle gender selection specifically
  const handleGenderSelect = (val: string) => {
    setFormData({ ...formData, gender: val });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.gender) {
      setStatus({ type: 'error', message: 'Please select a gender.' });
      return;
    }
    setLoading(true);
    // ... rest of your fetch logic ...
  };

  const getInputClass = (value: string) => 
    `w-full h-[50px] p-4 bg-gray-50 border border-transparent rounded-2xl 
     focus:bg-white focus:border-[#B08D57]/30 focus:outline-none transition-all 
     appearance-none outline-none ${value ? 'text-black' : 'text-gray-400'}`;

  return (
    <div id="consultation" className="bg-[#F9F5EE]">
      <main className="max-w-6xl mx-auto px-4 md:px-10 py-10 lg:py-30 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        <div className="space-y-6">
          <div>
            <span className="text-[10px] font-black tracking-[0.2em] text-gray-400 uppercase">Free Report</span>
            <h1 className="mt-4 text-5xl md:text-7xl font-bold text-[#B08D57] leading-[1.1]">
              Free numerological <br />
              <span className="opacity-90">express consultation</span>
            </h1>
          </div>
          <p className="text-gray-500 text-lg max-w-md leading-relaxed">
            Contact us for a free 15-minute consultation to understand how
            numerology can help you achieve your life goals.
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50 relative">
          {status.message && (
            <div className={`mb-4 p-3 rounded-xl text-sm font-medium ${
              status.type === 'success' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
            }`}>
              {status.message}
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className={getInputClass(formData.fullName)}
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className={getInputClass(formData.email)}
            />

            {/* Date of Birth */}
            <div className="relative">
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
                className={`${getInputClass(formData.dob)} cursor-pointer block relative z-10 
                [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-4 [&::-webkit-calendar-picker-indicator]:w-6 [&::-webkit-calendar-picker-indicator]:h-6 [&::-webkit-calendar-picker-indicator]:cursor-pointer`}
              />
              <Calendar className="absolute right-4 top-4 text-gray-300 w-5 h-5 z-20 pointer-events-none" />
            </div>

            {/* NEW GENDER SELECTION BUTTONS */}
            <div className="space-y-2">
              <label className="text-[10px] font-black tracking-widest text-gray-400 uppercase ml-2">Gender</label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => handleGenderSelect('male')}
                  className={`h-[45px] rounded-4xl font-bold transition-all border-2 flex items-center justify-center ${
                    formData.gender === 'male' 
                    ? 'bg-[#B08D57] border-[#B08D57] text-white shadow-md shadow-[#B08D57]/20' 
                    : 'bg-gray-50 border-transparent text-gray-300 hover:bg-gray-100'
                  }`}
                >
                  Male
                </button>
                <button
                  type="button"
                  onClick={() => handleGenderSelect('female')}
                  className={`h-[45px] rounded-4xl font-bold transition-all border-2 flex items-center justify-center ${
                    formData.gender === 'female' 
                    ? 'bg-[#B08D57] border-[#B08D57] text-white shadow-md shadow-[#B08D57]/20' 
                    : 'bg-gray-50 border-transparent text-gray-300 hover:bg-gray-100'
                  }`}
                >
                  Female
                </button>
              </div>
            </div>

            <input
              type="text"
              name="birthPlace"
              placeholder="Birth Place"
              value={formData.birthPlace}
              onChange={handleChange}
              className={getInputClass(formData.birthPlace)}
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-5 mt-1 border-2 border-[#B08D57] text-[#B08D57] font-black rounded-2xl hover:bg-[#B08D57] hover:text-white transition-all duration-300 uppercase tracking-widest text-sm shadow-lg shadow-[#B08D57]/10 disabled:opacity-50"
            >
              {loading ? 'Processing...' : 'Get Free Report'}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ConsultationBanner;