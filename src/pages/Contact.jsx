import React, { useRef, useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import Toast from '../components/Toast';

const Contact = () => {
  const form = useRef();
  const [toast, setToast] = useState({ message: '', type: '', show: false });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(
      (result) => {
        console.log(result.text);
        setToast({ message: 'Message sent successfully!', type: 'success', show: true });
        setTimeout(() => setToast({ ...toast, show: false }), 3000);
      },
      (error) => {
        console.log(error.text);
        setToast({ message: 'Failed to send message. Please try again.', type: 'error', show: true });
        setTimeout(() => setToast({ ...toast, show: false }), 3000);
      }
    );

    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-black py-16 px-4 sm:px-8 text-white relative">
      {toast.show && <Toast message={toast.message} type={toast.type} />}

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left: Contact Info */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="mb-8">
            Feel free to use the form or drop us an email. Old-fashioned phone calls work too.
          </p>
          <ul className="space-y-6 text-lg">
            <li className="flex items-center space-x-4">
              <FaPhone className="text-orange-500 text-xl" />
              <span>+254 7XX XXX XXX</span>
            </li>
            <li className="flex items-center space-x-4">
              <FaEnvelope className="text-orange-500 text-xl" />
              <span>info@bookie.com</span>
            </li>
            <li className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-orange-500 text-xl mt-1" />
              <span>
                Nairobi<br />
                Moi Avenue, Pa. 00100
              </span>
            </li>
          </ul>
        </div>

        {/* Right: EmailJS Form */}
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">First</label>
              <input name="first_name" type="text" placeholder="First" required className="w-full border border-gray-300 rounded px-3 py-2 mt-1 bg-transparent text-white" />
            </div>
            <div>
              <label className="block text-sm font-medium">Last</label>
              <input name="last_name" type="text" placeholder="Last" required className="w-full border border-gray-300 rounded px-3 py-2 mt-1 bg-transparent text-white" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input name="email" type="email" placeholder="example@email.com" required className="w-full border border-gray-300 rounded px-3 py-2 mt-1 bg-transparent text-white" />
          </div>

          <div>
            <label className="block text-sm font-medium">Phone (optional)</label>
            <input name="phone" type="text" placeholder="xxx-xxx-xxxx" className="w-full border border-gray-300 rounded px-3 py-2 mt-1 bg-transparent text-white" />
          </div>

          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea name="message" rows="5" placeholder="Type your message ..." required className="w-full border border-gray-300 rounded px-3 py-2 mt-1 bg-transparent text-white"></textarea>
          </div>

          <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-8 rounded-full transition cursor-pointer">
            Submit
          </button>
        </form>
      </div>

      {/* Additional Section */}
      <div className="max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Office Hours */}
        <div>
          <h3 className="text-xl font-semibold mb-2">🕒 Office Hours</h3>
          <ul className="text-white text-base">
            <li>Mon - Fri: 9:00 AM – 5:00 PM</li>
            <li>Sat: 10:00 AM – 2:00 PM</li>
            <li>Sun: Closed</li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="text-xl font-semibold mb-2">📬 Subscribe to Our Newsletter</h3>
          <p className="mb-4 text-white text-sm">Get free tips, updates and exclusive offers in your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-2 bg-orange-50 text-gray-600 rounded">
            <input
              type="email"
              placeholder="you@email.com"
              className="flex-1 px-4 py-2 rounded"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">
              Subscribe
            </button>
          </form>
        </div>

        {/* Map Embed */}
        <div>
          <h3 className="text-xl font-semibold mb-2">📍 Find Us</h3>
          <iframe
            className="w-full h-48 rounded-md border-0"
            title="Google Map"
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.121110778099!2d36.817244!3d-1.286389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d50dd7a8c5%3A0x8b6dd9980ff30b1!2sMoi%20Ave%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1700000000000"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
