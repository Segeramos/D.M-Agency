import React from 'react';
import Button from '../components/Button';
import Banner from '../components/Banner';
import heroImg from '/hero.png'
import MiniHero from '../components/MiniHero';
import Accordion from '../components/Accordion';

const Home = () => {
  return (

    <section className=" text-white w-full min-h-screen">
      {/* Hero Section */}
      <Banner 
        image={heroImg}
        alt='hero image'
        content="Grow Your Business Online Smarter and Faster"
        subContent="Get more traffic, more leads, and more sales with our all-in-one digital marketing solutions. From SEO to ads, social media, and web design, we’ve got you covered."
        path='/grow-business'
      />

      <main>
        <MiniHero />
        <Accordion />

      </main>
      
    </section>
  );
};

export default Home;
