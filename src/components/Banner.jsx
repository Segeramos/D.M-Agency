import React from 'react'

const Banner = ({image, alt, content, subContent}) => {
  return (
    <section className="w-full h-96 relative ">
        <img className="w-full h-full object-cover object-center"
            src={image} 
            alt={alt}
            loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent flex flex-col items-start justify-end p-12 space-y-6 ">
            <h2 className="text-4xl font-semibold">
                {content}
            </h2>
            <p className="max-w-lg">
                {subContent}
            </p>
            
        </div>
      
    </section>
  )
}

export default Banner
