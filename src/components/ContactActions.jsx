// ContactActions.jsx

import React from 'react';

const ContactActions = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
      {/* Call Us Button */}
      <a
        href="tel:+254712345678"
        className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 transition"
      >
        📞 <span>Call Us: +254 756627342</span>
      </a>

      {/* Email Us Button */}
      <a
        href="mailto:youremail@example.com"
        className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 transition"
      >
        📧 <span>Email Us</span>
      </a>

      {/* Book a Free Strategy Session Button */}
      <a
        href="https://yourcalendlylink.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl flex items-center gap-2 transition"
      >
        📅 <span>Book a Free Strategy Session</span>
      </a>
    </div>
  );
};

export default ContactActions;
