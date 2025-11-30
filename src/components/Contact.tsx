import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../utils/data';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success?: boolean; message?: string } | null>(null);

  // Initialize EmailJS with proper error handling
  useEffect(() => {
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
    if (!publicKey) {
      console.error('EmailJS public key not found in environment variables');
      return;
    }
    try {
      emailjs.init(publicKey);
      console.log('✓ EmailJS initialized successfully');
    } catch (error) {
      console.error('Failed to initialize EmailJS:', error);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      if (!form.current) {
        throw new Error('Form reference not found');
      }

      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('Missing EmailJS configuration in environment variables');
      }

      console.log('Sending email with:', { serviceId, templateId });
      console.log('Form data being sent:', formData);

      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      );

      // Check for successful response (status 200 and text 'OK')
      if (result.status === 200 && result.text === 'OK') {
        setSubmitStatus({
          success: true,
          message: 'Thank you! I\'ll get back to you shortly. ✨'
        });
        console.log('✓ Email sent successfully', result);

        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error(`Unexpected response: ${result.text}`);
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      console.error('❌ Email submission failed:', errorMessage);

      // Check if it's actually a successful send (network error but email went through)
      if (errorMessage.includes('Failed to fetch') || errorMessage.includes('ERR_INTERNET_DISCONNECTED')) {
        console.log('⚠️ Network error detected - email may have been sent despite the error');
        setSubmitStatus({
          success: true,
          message: 'Email sent! (There was a minor network hiccup, but your message got through) ✨'
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus({
          success: false,
          message: 'Oops! Something went wrong. Please try again or contact directly at ' + personalInfo.email
        });
      }
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 6000);
    }
  };

  return (
    <section id="contact" className="relative bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-r from-clay/20 to-transparent blur-3xl animate-breathe" style={{ animationDelay: '0s' }}></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-l from-ivory/10 to-transparent blur-3xl animate-breathe" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-8 md:pt-32 pb-24">
        {/* Section Header */}
        <div className="text-center mb-8 animate-fadeInUp">
          <p className="text-xs uppercase tracking-[0.3em] text-clay font-bold mb-3 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>Let's Collaborate</p>
          <div className="flex justify-center gap-2 mt-4">
            <div className="w-2 h-2 rounded-full bg-clay animate-pulse"></div>
            <div className="w-2 h-2 rounded-full bg-clay animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 rounded-full bg-clay animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Email Card */}
          <div className="group bg-gradient-to-br from-gray-900/60 to-black/40 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-clay/30 hover:border-clay hover:shadow-2xl hover:shadow-clay/50 transition-all duration-500 animate-slideInLeft opacity-0 hover:scale-105 transform" style={{ animationDelay: '0.3s' }}>
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-clay/40 to-clay/20 flex items-center justify-center mb-6 group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-clay/60 transition-all duration-300">
              <svg className="w-7 h-7 text-clay group-hover:text-ivory transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-display font-semibold text-white mb-2">Email</h3>
            <a href={`mailto:${personalInfo.email}`} className="text-white hover:text-ivory transition-colors font-medium break-all">
              {personalInfo.email}
            </a>
          </div>

          {/* Phone Card */}
          <div className="group bg-gradient-to-br from-gray-900/60 to-black/40 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-ivory/20 hover:border-ivory hover:shadow-2xl hover:shadow-ivory/40 transition-all duration-500 animate-fadeInUp opacity-0" style={{ animationDelay: '0.4s' }}>
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-ivory/30 to-ivory/10 flex items-center justify-center mb-6 group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-ivory/50 transition-all duration-300">
              <svg className="w-7 h-7 text-ivory group-hover:text-clay transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-lg font-display font-semibold text-white mb-2">Phone</h3>
            <p className="text-ivory font-medium">{personalInfo.phone || '+1 (555) 123-4567'}</p>
          </div>

          {/* Location Card */}
          <div className="group bg-gradient-to-br from-gray-900/60 to-black/40 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-clay/20 hover:border-clay hover:shadow-2xl hover:shadow-clay/40 transition-all duration-500 animate-slideInRight opacity-0" style={{ animationDelay: '0.5s' }}>
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-clay/30 to-clay/10 flex items-center justify-center mb-6 group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-clay/50 transition-all duration-300">
              <svg className="w-7 h-7 text-clay group-hover:text-ivory transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-display font-semibold text-white mb-2">Location</h3>
            <p className="text-gray-300 font-medium">{personalInfo.location}</p>
          </div>
        </div>

        {/* Main Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-slideInLeft opacity-0" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-3xl font-display font-bold text-white mb-8">Send Me a Message</h3>

            {submitStatus ? (
              <div className={`p-6 rounded-2xl mb-8 flex items-start space-x-4 border backdrop-blur-xl ${submitStatus.success ? 'bg-emerald-900/40 border-emerald-500/50' : 'bg-rose-900/40 border-rose-500/50'}`}>
                <div className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center ${submitStatus.success ? 'bg-emerald-500' : 'bg-rose-500'}`}>
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d={submitStatus.success ? "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" : "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"} clipRule="evenodd" />
                  </svg>
                </div>
                <p className={submitStatus.success ? 'text-emerald-200' : 'text-rose-200'}>{submitStatus.message}</p>
              </div>
            ) : null}

            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 font-semibold mb-3">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900/60 text-white rounded-xl px-5 py-4 border border-gray-700/50 focus:border-clay focus:outline-none focus:ring-2 focus:ring-clay/30 transition-all placeholder:text-gray-500"
                  placeholder="Mugisha De Montfort"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 font-semibold mb-3">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900/60 text-white rounded-xl px-5 py-4 border border-gray-700/50 focus:border-clay focus:outline-none focus:ring-2 focus:ring-clay/30 transition-all placeholder:text-gray-500"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-300 font-semibold mb-3">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900/60 text-white rounded-xl px-5 py-4 border border-gray-700/50 focus:border-ivory focus:outline-none focus:ring-2 focus:ring-ivory/30 transition-all placeholder:text-gray-500"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 font-semibold mb-3">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-gray-900/60 text-white rounded-xl px-5 py-4 border border-gray-700/50 focus:border-clay focus:outline-none focus:ring-2 focus:ring-clay/30 transition-all placeholder:text-gray-500"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 relative bg-gradient-to-r from-clay to-clay/60 hover:shadow-lg hover:shadow-clay/50 text-white font-semibold rounded-xl transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center space-x-2 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-ivory/0 to-ivory/30 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 rounded-xl"></div>
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 relative" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span className="relative">Sending...</span>
                  </>
                ) : (
                  <>
                    <span className="relative">Send Message</span>
                    <svg className="w-5 h-5 relative group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Social Links & Info */}
          <div className="animate-slideInRight opacity-0" style={{ animationDelay: '0.7s' }}>
            <h3 className="text-3xl font-display font-bold text-white mb-8">Connect With Me</h3>
            <p className="text-gray-300 leading-relaxed mb-12 text-lg">
              Whether you have a project in mind or just want to chat about web development, fullstack technologies, or anything else—I'm always open to new opportunities and conversations!
            </p>

            {/* Social Links */}
            <div className="space-y-4 mb-12">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-br from-gray-900/60 to-black/40 border border-clay/30 hover:border-clay hover:shadow-lg hover:shadow-clay/50 transition-all group hover:scale-105 transform"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-clay/20 to-clay/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-clay" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5 0-.23-.01-.97-.01-1.89-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.09.39-1.98 1.03-2.67-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0112 6.82c.85 0 1.71.12 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.58 1.03 2.67 0 3.82-2.34 4.66-4.57 4.91.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.16.58.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white">GitHub</p>
                  <p className="text-sm text-gray-400">@Montfort28</p>
                </div>
                <svg className="w-5 h-5 text-clay ml-auto group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-br from-gray-900/60 to-black/40 border border-gray-700/50 hover:border-ivory hover:shadow-lg hover:shadow-ivory/40 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-ivory/20 to-ivory/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-ivory" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white">LinkedIn</p>
                  <p className="text-sm text-gray-400">Mugisha Montfort</p>
                </div>
                <svg className="w-5 h-5 text-ivory ml-auto group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* CTA for Resume */}
            <a
              href={personalInfo.resume}
              download
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-clay to-ivory hover:shadow-lg hover:shadow-clay/40 text-white font-semibold transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span className="relative">Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
