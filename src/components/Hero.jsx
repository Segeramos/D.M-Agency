import React from 'react'

import hero1 from "/hero.png";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="w-full h-screen relative">

        <img 
            src={hero1} 
            alt="" 
            className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center space-y-3 pl-2 md:pl-12 items-start">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-200 max-w-3xl">
                Grow Your Business Online Smarter and Faster
            </h1>
            <p className="max-w-lg text-gray-300">
                Get more traffic, more leads, and more sales with our all-in-one digital marketing solutions. From SEO to ads, social media, and web design, we’ve got you covered.
            </p>
            <button className="mt-4">
                <Link
                    to='/grow-business'
                    className="bg-orange-600 px-12 py-4 rounded-md cursor-pointer hover:bg-orange-500 font-semibold"
                >
                    Learn More
                </Link>
            </button>
        </div>
      
    </section>
  )
}

export default Hero