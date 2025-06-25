import React from 'react';
import Button from '../components/Button';
import Banner from '../components/Banner';
import MiniHero from '../components/MiniHero';
import Accordion from '../components/Accordion';
import Hero from '../components/Hero';

const Home = () => {
  return (

    <section className=" text-white w-full min-h-screen">

      <main>
        <Hero />
        <MiniHero />
        <Accordion />

      </main>
      
    </section>
  );
};

export default Home;
