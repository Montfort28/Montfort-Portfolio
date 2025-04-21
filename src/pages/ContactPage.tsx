// ContactPage.tsx
import React from 'react';
import Contact from '../components/Contact';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-2">Get In Touch</h1>
        <p className="text-gray-400 mb-12">I'd love to hear from you! Let's discuss your project or any opportunities.</p>
      </div>
      <Contact />
    </div>
  );
};

export default ContactPage;