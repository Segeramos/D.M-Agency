import React from 'react'
import Button from './Button';

const Banner = ({image, alt}) => {
  return (
    <section className="w-full h-96 relative">
        <img className="w-full h-full object-cover "
            src={image} 
            alt={alt}
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-start justify-end p-12 space-y-6 ">
            <h2 className="text-4xl font-semibold">
                Welcome to our website
            </h2>
            <p>
                Explore our services and products
            </p>
            <Button 
                label="Learn More"
                className="px-8 py-2 bg-orange-400 rounded-md cursor-pointer hover:bg-orange-500 delay-200"
            />
        </div>
      
    </section>
  )
}

export default Banner
