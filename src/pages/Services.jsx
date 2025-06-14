import React from 'react';
import ourService from '../assets/images/services.jpg';
import Banner from '../components/Banner';

const Services = () => {
  return (
    <section className="w-full min-h-screen">
      <Banner
        image={ourService}
        alt="Our services image"
        content="Services That Drive Real Business Growth"
        subContent="From boosting visibility to increasing conversions, we offer everything you need to grow your brand online—strategically, efficiently, and affordably."
      />



     
   
  

    </section>
  )
}

export default Services