import React from 'react'
import { servicesContent } from '../constants/index'
import marketing from '../assets/images/mini-hero.jpg'
import Button from './Button';
import { Link } from 'react-router-dom';


const MiniHero = () => {

    console.log(servicesContent)
  return (
    <section className="w-full py-26 grid grid-cols-1 md:grid-cols-2 items-center gap-6 px-4">
        <div className="order-2">
            <img 
                src={marketing} 
                alt="people in meeting"
                className="max-w-xl w-full rounded-md object-contain"
            />
        </div>

        <div className="grid grid-cols-2 gap-6 order-1">
            {
                servicesContent.map((service, index) => (
                    <div key={index} className="space-y-2 hover:bg-orange-500/10 p-4 rounded-md">
                        <div>
                            <img 
                                src={service.icon} 
                                alt={service.title}
                                className="text-xl text-orange-400" 
                            />
                        </div>
                        <div>
                            <h2 className="font-semibold">
                                {service.title}
                            </h2>
                            <p className="text-sm text-gray-200">
                                {service.desc}
                            </p>
                        </div>
                        <Link to={service.path}>
                            <Button 
                            label="Learn More"
                            />
                        </Link>
                    </div>
                ))
            }

        </div>
      
    </section>
  )
}

export default MiniHero
