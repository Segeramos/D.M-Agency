import React from 'react'
import Banner from '../components/Banner';
import bannerImage from '../assets/images/about.jpg';

const team = [
  { name: 'Alice Kimani', role: 'Founder & Lead Strategist', img: '/team/alice.jpg' },
  { name: 'Brian Otieno', role: 'PPC Expert', img: '/team/brian.jpg' },
  { name: 'Diana Njeri', role: 'Social Media Manager', img: '/team/diana.jpg' },
];

const stats = [
  // // { value: '200+', label: 'Brands Scaled', icon: <FaChartLine /> },
  // { value: '98%', label: 'Client Retention', icon: <FaHandshake /> },
  // { value: '350+', label: 'Campaigns Managed', icon: <FaBullseye /> },
  // { value: '25k+', label: 'Leads Generated', icon: <FaUsers /> },
];


const About = () => {
  return (
    <section className="w-full h-screen">
      <Banner 
        className=""
        image={bannerImage}
        alt="About image"
      />

      <h1>hellp</h1>

    </section>
  )
}

export default About