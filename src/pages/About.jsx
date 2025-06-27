import React from 'react';
import Banner from '../components/Banner';
import bannerImage from '../assets/images/about.jpg';


const teamMembers = [
  { name: "Segera Amos", title: "Director of Operations", img: "/images/team/anna.jpg" },
  { name: "Joshua Kibwage", title: "Front-End Web Developer", img: "/images/team/sarah.jpg" },
  { name: "Larry Morroni", title: "Principal", img: "/images/team/larry.jpg" },
  { name: "Ryan Parker", title: "Developer & Designer", img: "/images/team/ryan-parker.jpg" },
  { name: "Chris Lee", title: "Web Developer", img: "/images/team/chris.jpg" },
  { name: "Sophie Sapp", title: "Media Specialist", img: "/images/team/sophie.jpg" },
  { name: "Nina Morroni", title: "Search Associate", img: "/images/team/nina.jpg" },
  { name: "Ryan Baker", title: "Social Media Consultant", img: "/images/team/ryan-baker.jpg" },
];

const coreValues = [
  {
    title: "Commitment to Excellence",
    desc: "Dedicated to your success. Your goals are our goals. Our unwavering team delivers top-tier digital marketing and web development solutions. Partner with us for the long haul, and trust us to bring your vision to life."
  },
  {
    title: "Growth Mindset",
    desc: "Our extensive portfolio of services ensures that we have the tools to address your every need. From creating visually stunning websites to crafting strategic marketing campaigns."
  },
  {
    title: "Alignment with Your Goals",
    desc: "We work closely with you to ensure that our strategies are perfectly aligned with your objectives. Your success is our success."
  },
  {
    title: "Future Proof",
    desc: "We stay up to date with the latest trends and tech to provide sustainable, scalable solutions that stand the test of time."
  }
];

const About = () => {
  return (
    <section className="bg-black text-white">
      {/* Hero Banner */}
      <Banner
        image={bannerImage}
        alt="About image"
        className="h-[70vh] object-cover"
      />

      {/* Intro Message */}
      <div className="text-center py-16 bg-[#181818] rounded-b-[100px]">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          We Are a <span className="text-[#ff5a1f] italic font-semibold">Team</span> of Digital Experts,<br />Working Together.
        </h1>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto py-20 px-6 items-start">
        <div>
          <h3 className="uppercase text-[#ff5a1f] text-sm font-bold mb-2">Mission & Vision</h3>
          <h2 className="text-3xl font-semibold mb-4 text-white">Trust is our upmost commitment.</h2>
        </div>
        <div className="text-gray-300 space-y-4">
          <p>
            We’re on a mission to make the digital world more exciting and accessible. Everyone deserves a spotlight online—and our skilled team is here to make that happen.
          </p>
          <p>
            Our vision is to transform ideas into vibrant, living websites. Every website should tell a unique story, and reflect the diversity of the people behind them.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="py-20 px-6 bg-black-700">
        <div className="max-w-5xl mx-auto">
          <h3 className="uppercase text-orange-600 text-sm font-bold mb-2">Core Values</h3>
          <h2 className="text-3xl font-semibold mb-8 text-white">Our core values shape how we work.</h2>
          <div className="divide-y divide-gray-700">
            {coreValues.map((value, idx) => (
              <div key={idx} className="py-6">
                <h4 className="text-xl font-semibold mb-2 text-white">{value.title}</h4>
                <p className="text-gray-300">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Members */}
      <div className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h3 className="uppercase text-orange-600 text-sm font-bold mb-2">People</h3>
          <h2 className="text-3xl font-semibold mb-8 text-white">Meet our team.</h2>
          <p className="text-gray-300 mb-12 max-w-3xl">
            Our dynamic team of experts is dedicated to driving your projects forward and ensuring they meet your goals.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="bg-[#181818] p-4 rounded-lg text-center shadow border border-[#ff5a1f]/20">
                <img src={member.img} alt={member.name} className="w-28 h-28 object-cover rounded-full mx-auto mb-4" />
                <h4 className="font-semibold text-white">{member.name}</h4>
                <p className="text-sm text-gray-400">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
