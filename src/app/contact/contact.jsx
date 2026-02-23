import React, { useState } from 'react';
import { Button } from './ui/button'; // Adjust based on your file path
import { Send } from 'lucide-react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    console.log('Current form data:', formData); // Debugging log

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // 2. PLACE THE HANDLESUBMIT HERE
    const handleSubmit = (e) => {
        e.preventDefault();

        // Get existing data
        const existingMessages = JSON.parse(localStorage.getItem('formSubmissions') || '[]');

        // Add new data
        const updatedMessages = [...existingMessages, { ...formData, id: Date.now() }];

        // Save to localStorage
        localStorage.setItem('formSubmissions', JSON.stringify(updatedMessages));

        alert('Message saved locally!');
        
        // Reset the form
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    // 3. Your Component UI
    return (
        <section>
            <div className="bg-[#FAFAFA] p-8 md:p-12 border border-gray-100 shadow-sm">
                <h3 className="text-2xl font-serif font-bold text-secondary mb-8">Send a Message</h3>
                
                {/* Ensure onSubmit is linked here */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* ... your input fields ... */}
                    
                    <Button type="submit" className="border-2 border-black ...">
                        Send Message <Send className="w-4 h-4" />
                    </Button>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;