import React from 'react'
import { servicesContent } from '../constants/index'
import marketing from '../assets/images/mini-hero.jpg'
import Button from './Button';
import { Link } from 'react-router-dom';


const MiniHero = () => {


  return (
    <section className="w-full py-26 ">
        <div className="w-full pb-20 flex justify-center">
            <div className="max-w-3xl flex flex-col items-center p-8">
                <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-center text-gray-300">
                    Everything You Need to Grow Online In One Place
                </h1>
                <p className="max-w-lg text-center text-sm mt-2 text-gray-400">
                    From traffic to conversions, we deliver tailored digital solutions that help your business thrive.
                </p>
            </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center space-x-4 px-4">
            <div className="">
                <img 
                    src={marketing} 
                    alt="people in meeting"
                    className="max-w-xl w-full object-contain"
                />
            </div>

            <div className="grid grid-cols-2 gap-2 mt-8 md:mt-0">
                {
                    servicesContent.map((service, index) => (
                        <div key={index} className="group rounded-md max-w-sm ">
                            <div className="space-y-2 p-4 group-hover:-translate-y-1 delay-200 transition-all group-hover:shadow-xs shadow-orange-400">
                                <div>
                                    <img 
                                        src={service.icon} 
                                        alt={service.title}
                                        className="text-xl text-white" 
                                    />
                                </div>
                                <div className="space-y-2">
                                    <h2 className="font-semibold text-l">
                                        {service.title}
                                    </h2>
                                    <p className="text-xs text-gray-200">
                                        {service.desc}
                                    </p>
                                </div>
                                <Link to={service.path} className="">
                                    <Button 
                                    label="Learn More"
                                    />
                                </Link>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
      
    </section>
  )
}

export default MiniHero
