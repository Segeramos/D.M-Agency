import React from 'react';
import ourService from '../assets/images/services.jpg';
import Banner from '../components/Banner';

const Services = () => {
  return (
    <section>
      <Banner
        image={ourService}
        alt="Our services image"
      />
    </section>
  )
}

export default Services