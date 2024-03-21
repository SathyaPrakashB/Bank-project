import React, { useState } from 'react';
import "./cf.css";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...formData,
                    access_key: 'bdd3f3c7-ec0c-43e3-b5c5-66d4c4b3faab'
                })
            });
            if (response.ok) {
                console.log('Form submitted successfully');
                // Reset form fields
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            } else {
                console.error('Form submission failed');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="contact-container">
            <form onSubmit={handleSubmit} className="contact-left">
                <div className="contact-left-title">
                    <h2>Contact Us</h2>
                    <hr />
                </div>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="contact-input"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="contact-input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    className="contact-input"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                <button type="submit">Submit <img src="assets/arrow icon.png" alt="" /></button>
            </form>
            <div className="contact-right">
                <img src="" alt="" />
            </div>
        </div>
    );
}

export default ContactForm;
