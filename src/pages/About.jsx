import React from 'react'
import Banner from '../components/Banner';
import bannerImage from '../assets/images/about.jpg';

const About = () => {
  return (
    <section className="w-full h-screen">
      <Banner 
        className=""
        image={bannerImage}
        alt="About image"
      />

    </section>
  )
}

export default About