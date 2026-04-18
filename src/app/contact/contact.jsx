"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import { sendContact } from "@/services/api"; // ✅ import added

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ UPDATED: using centralized API
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setLoading(true);

    try {
      await sendContact(formData);

      alert("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error: any) {
      console.error("Error:", error);
      alert(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <div className="bg-[#FAFAFA] p-8 md:p-12 border border-gray-100 shadow-sm">
        <h3 className="text-2xl font-serif font-bold text-secondary mb-8">
          Send a Message
        </h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full p-2 border"
          />

          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full p-2 border"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="w-full p-2 border"
          />

          <Button
            type="submit"
            disabled={loading}
            className="flex items-center gap-2"
          >
            {loading ? "Sending..." : "Send Message"}
            <Send className="w-4 h-4" />
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;