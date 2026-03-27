import React, { useState } from 'react';
import { Button } from './ui/button'; 
import { Send } from 'lucide-react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // 1. Send data to your Node.js Backend
            const response = await fetch('https://numerloogy-backend.onrender.com/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                alert('Message sent to MongoDB successfully!');
                // 2. Clear form after success
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                alert('Server error: ' + result.error);
            }
        } catch (error) {
            console.error('Connection failed:', error);
            alert('Could not connect to the server. Is it running on Render?');
        }
    };

    return (
        <section>
            <div className="bg-[#FAFAFA] p-8 md:p-12 border border-gray-100 shadow-sm">
                <h3 className="text-2xl font-serif font-bold text-secondary mb-8">Send a Message</h3>
                
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
                    
                    <Button type="submit" className="flex items-center gap-2">
                        Send Message <Send className="w-4 h-4" />
                    </Button>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;