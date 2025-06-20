import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaWhatsapp
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiTiktok } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-12 px-4">
      <div className="max-w-6xl mx-auto text-center space-y-8">

        {/* Top Nav */}
        <div className="flex justify-center gap-8 text-sm font-medium">
          {[].map((item) => (
            <a href="#" key={item} className="hover:text-white transition">
              {item}
            </a>
          ))}
        </div>

        {/* Logo + Slogan */}
        <div>
        
          <p className="text-sm text-white-400 mt-1">
            Grow Your Business Online Smarter and Faster
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center flex-wrap gap-6 text-lg text-white-400">
          <a href="#" className="hover:text-white transition"><FaFacebookF /></a>
          <a href="#" className="hover:text-white transition"><FaInstagram /></a>
          <a href="#" className="hover:text-white transition"><FaXTwitter /></a>
          <a href="#" className="hover:text-white transition"><FaYoutube /></a>
          <a href="#" className="hover:text-white transition"><FaLinkedinIn /></a>
          <a href="#" className="hover:text-white transition"><FaWhatsapp /></a>
          <a href="#" className="hover:text-white transition"><SiTiktok /></a>
        </div>

        {/* Divider + Copyright */}
        <div className="border-t border-neutral-700 pt-6 text-xs text-white-500">
          © {new Date().getFullYear()} bookie. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
