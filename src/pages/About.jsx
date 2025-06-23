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
        content="Who are we"
        subContent="we are bookie"
      />

      <div className="h-screen w-full">

      </div>

    </section>
  )
}

export default About