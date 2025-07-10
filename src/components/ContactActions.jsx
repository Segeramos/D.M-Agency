// ContactActions.jsx

import React from 'react';

const ContactActions = () => {
  // Optional: Protect against Calendly not loaded yet
  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/yourusername/strategy-session'
      });
    } else {
      window.open('https://calendly.com/yourusername/strategy-session', '_blank');
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
      {/* Call Us Button */}
      <a
        href="tel:+254712345678"
        className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 transition"
      >
        📞 <span>Call Us: +254 756 627 342</span>
      </a>

      {/* Email Us Button */}
      <a
        href="mailto:segeramos87@example.com"
        className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 transition"
      >
        📧 <span>Email Us</span>
      </a>

      {/* Book a Free Strategy Session Button (Calendly Popup) */}
   <button
  type="button"
  onClick={() =>
    window.Calendly.initPopupWidget({
      url: 'https://calendly.com/bookie254'
    })
  }
  className="bg-orange-500 hover:bg-orange-600 text-whiteq
   px-6 py-3 rounded-xl flex items-center gap-2 transition"
>
  📅 <span>Book a Free Strategy Session</span>
</button>
    </div>
  );
};

export default ContactActions;

