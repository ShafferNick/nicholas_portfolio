'use client';
import React, { useState, FormEvent } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import emailjs from '@emailjs/browser';

type ContactFormData = {
  name: string;
  number: string;
  email: string;
  message: string;
  captchaToken: string | null;
};

type ContactProps = {
  onClose: () => void;
};

export default function Contact({ onClose }: ContactProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    number: '',
    email: '',
    message: '',
    captchaToken: null,
  });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const validateForm = () => {
    const newErrors: Partial<ContactFormData> = {};

    // Name validation: at least 2 characters if provided
    if (formData.name && formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
    }

    // Number validation: must be a valid phone number if provided
    if (formData.number && !/^\+?[1-9]\d{1,14}$/.test(formData.number)) {
      newErrors.number = 'Please enter a valid phone number (e.g., +1234567890)';
    }

    // Email validation: required, must be a valid email
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Message validation: required, at least 10 characters
    if (!formData.message) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    // CAPTCHA validation: required
    if (!formData.captchaToken) {
      newErrors.captchaToken = 'Please complete the CAPTCHA';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitMessage('');

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS Service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS Template ID
        {
          name: formData.name || 'Not provided',
          number: formData.number || 'Not provided',
          email: formData.email,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS Public Key
      );

      if (result.text === 'OK') {
        setSubmitMessage('Message sent successfully!');
        setFormData({ name: '', number: '', email: '', message: '', captchaToken: null });
        setTimeout(() => {
          onClose();
        }, 2000); // Close form after 2 seconds
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitMessage('Error: Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleCaptchaVerify = (token: string | null) => {
    setFormData((prev) => ({ ...prev, captchaToken: token }));
    setErrors((prev) => ({ ...prev, captchaToken: undefined }));
  };

  return (
    <div className="contact-form">
      <h2 className="text-2xl font-bold mb-4 text-center">Contact Me</h2>
      {submitMessage && (
        <p
          className={`text-center mb-4 ${
            submitMessage.includes('Error') ? 'text-red-500' : 'text-green-500'
          }`}
        >
          {submitMessage}
        </p>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Number Field */}
        <div>
          <label htmlFor="number" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            id="number"
            name="number"
            value={formData.number}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.number && <p className="text-red-500 text-sm mt-1">{errors.number}</p>}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
            required
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        {/* CAPTCHA */}
        <div className="flex justify-center">
          <HCaptcha
            sitekey="YOUR_HCAPTCHA_SITE_KEY" // Replace with your hCaptcha site key
            onVerify={handleCaptchaVerify}
          />
        </div>
        {errors.captchaToken && (
          <p className="text-red-500 text-sm mt-1 text-center">{errors.captchaToken}</p>
        )}

        {/* Buttons */}
        <div className="flex justify-between items-center">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
}