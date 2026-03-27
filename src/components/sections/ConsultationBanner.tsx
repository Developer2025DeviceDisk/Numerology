"use client";
import React, { useState } from 'react';
import { Calendar, ChevronDown } from 'lucide-react';

const ConsultationBanner = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    location: ''
  });

  // 1. Added loading and status states for better UX
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 2. THE CONNECTION LOGIC
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('https://numerloogy-backend.onrender.com/api/reports', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle PDF download
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Numerology_Report_${formData.fullName.replace(/\s+/g, '_')}.pdf`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);

        setStatus({ type: 'success', message: 'Report generated and download started!' });
        setFormData({ fullName: '', email: '', phone: '', dob: '', gender: '', location: '' });
      } else {
        const errorData = await response.json();
        setStatus({ type: 'error', message: errorData.message || 'Something went wrong.' });
      }
    } catch (error) {
      console.error("Connection Error:", error);
      setStatus({ type: 'error', message: 'Could not connect to the server. Is it running?' });
    } finally {
      setLoading(false);
    }
  };

  return (  
    <div id="consultation" className="bg-[#F9F5EE]">

      <main className="max-w-7xl mx-auto px-6 md:px-16 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div className="space-y-8">
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
          
          {/* 3. Added status message display */}
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
              className="w-full p-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-[#B08D57]/30 focus:outline-none transition-all"
            />
            
            <div className="grid grid-cols-1 gap-4">
              <input 
                type="email" 
                name="email"
                placeholder="Email" 
                value={formData.email}
                onChange={handleChange}
                required
                className="p-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-[#B08D57]/30 focus:outline-none transition-all"
              />
              <input 
                type="tel" 
                name="phone"
                placeholder="Phone" 
                value={formData.phone}
                onChange={handleChange}
                className="p-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-[#B08D57]/30 focus:outline-none transition-all"
              />
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="relative">
                <input 
                  type="date" 
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                  className="w-full p-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-[#B08D57]/30 focus:outline-none transition-all text-gray-400 cursor-pointer block relative z-10 
                  [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-4 [&::-webkit-calendar-picker-indicator]:w-6 [&::-webkit-calendar-picker-indicator]:h-6 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                />
                <Calendar className="absolute right-4 top-4 text-gray-300 w-5 h-5 z-20 pointer-events-none" />
              </div>

              <div className="relative">
                <select 
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-[#B08D57]/30 focus:outline-none appearance-none text-gray-400 transition-all cursor-pointer"
                >
                  <option value="">Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <ChevronDown className="absolute right-4 top-4 text-gray-300 w-5 h-5 pointer-events-none" />
              </div>
            </div>

            <input 
              type="text" 
              name="location"
              placeholder="Location" 
              value={formData.location}
              onChange={handleChange}
              className="w-full p-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-[#B08D57]/30 focus:outline-none transition-all"
            />

            <button 
              disabled={loading}
              className="w-full py-5 mt-6 border-2 border-[#B08D57] text-[#B08D57] font-black rounded-2xl hover:bg-[#B08D57] hover:text-white transition-all duration-300 uppercase tracking-widest text-sm shadow-lg shadow-[#B08D57]/10 disabled:opacity-50"
            >
              {loading ? 'Processing...' : 'Claim Free Report'}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ConsultationBanner;