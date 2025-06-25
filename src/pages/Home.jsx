import React from 'react';
import Button from '../components/Button';
import Banner from '../components/Banner';
import Accordion from '../components/Accordion';
import Hero from '../components/Hero';

const Home = () => {
  return (

    <section className=" text-white w-full min-h-screen">

      <main>
        <Hero />
        <Accordion />

      </main>
      
    </section>
  );
};

export default Home;
