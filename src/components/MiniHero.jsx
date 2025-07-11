import React from 'react'
import Button from './Button';
import { Link } from 'react-router-dom';
import miniImage from '../assets/images/our-work.jpg'


const MiniHero = () => {


  return (
    <section className="w-full pt-12 ">
        <div className="w-full pb-20 flex justify-center">
            <div className="max-w-3xl flex flex-col items-center p-8">
                <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-center text-gray-400">
                    Everything You Need to Grow Online In One Place
                </h1>
                <p className="max-w-lg text-center text-sm mt-2 text-gray-400">
                    From traffic to conversions, we deliver tailored digital solutions that help your business thrive.
                </p>
            </div>
        </div>
       
           
        <div className="hero bg-base-200 min-h-screen w-[90%] mx-auto">
            <div className="hero-content flex flex-col md:flex-row items-center w-full">
                <div className="w-1/2">
                    <img
                        src={miniImage}
                        className="w-full rounded-lg shadow-2xl"
                    />
                </div>
                <div className="w-full md:w-1/2 p-4 md:p-6">
  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-400">
    Powerful Digital Services to Elevate Your Brand
  </h1>
  <p className="py-4 text-sm sm:text-base text-gray-400">
    From SEO to social media and stunning web design, we offer a full suite of marketing and development solutions designed to help you grow, engage, and convert. Whether you're starting fresh or scaling up, our expert services are built to deliver results.
  </p>
  <Link to='/services'>
    <button className="bg-orange-700 px-6 py-2 rounded-md cursor-pointer hover:bg-orange-600 text-white text-sm sm:text-base">
      Explore Our Services
    </button>
  </Link>
</div>
            </div>
            
            
        </div>
      
    </section>
  )
}

export default MiniHero
