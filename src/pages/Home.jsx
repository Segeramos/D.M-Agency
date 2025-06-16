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
        content="welcome to hero "
      />

      <main>
        <MiniHero />
        <Accordion />

      </main>
      
    </section>
  );
};

export default Home;
