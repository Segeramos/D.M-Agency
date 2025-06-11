import React from 'react'
import work from '../assets/images/our-work.jpg';
import Banner from '../components/Banner';

const OurWork = () => {
  return (
    <section>
      <Banner
        image={work}
        alt="Our work"
      />
    </section>
  )
}

export default OurWork