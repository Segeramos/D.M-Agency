import React from 'react';
import Button from '../components/Button';
import Banner from '../components/Banner';
import heroImg from '/hero.png'
 


const services = [
  {
    title: "SEO Optimization",
    desc: "Boost your website’s search rankings and attract organic traffic with proven SEO techniques. From keyword research to on-page and technical SEO, we ensure your business stands out where it matters most—on Google.",
    path: '/optimization-page',
  },
  {
    title: "PPC Advertising",
    desc: "Get instant visibility and measurable results with high-converting Google Ads and Facebook Ads. We design, target, and optimize campaigns that deliver maximum ROI with minimal waste.",
    path: "/pay-per-click-advertising-page"
  },
  {
    title: "Social Media Management",
    desc: "Build a loyal community and expand your reach on platforms like Facebook, Instagram, LinkedIn, and X. We handle everything from strategy to content creation and daily engagement.",
    path: "/social-media-management-page"
  },
  {
    title: "Web Design & Development",
    desc: "Create a website that works as hard as you do. Our team designs fast, mobile-friendly, and visually engaging websites built to convert—and tailored to your brand’s identity and business goals.",
    path: "/web-design-development-page"
  }
];

const faqs = [
  {
    question: "What makes Bookie different?",
    answer: "We focus on measurable results, transparent reporting, and customized strategies.",
  },
  {
    question: "Which industries do you work with?",
    answer: "We work across various industries including retail, healthcare, tech, and more.",
  },
  {
    question: "How soon can I expect results?",
    answer: "Digital marketing is a long-term game, but paid ads and SEO can show improvements within weeks.",
  }
];

const Home = () => {
  return (
<<<<<<< HEAD
    <div className=" text-white">
      {/* Hero Section */}
      <Banner 
        image={heroImg}
        alt='hero image'
        content="welcome to hero "
      />
=======
    <div className="w-full min-h-screen relative">Home</div>
  )
}
>>>>>>> nav

      {/* Services Section with Side-by-Side Layout */}
      <section className="bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Image */}
          <div className="flex-shrink-0 w-full lg:w-1/2 flex justify-center">
            <img
              src="public\vitalii7577-jW7C-KidYi0-unsplash.jpg"
              alt="Google Search Mobile"
              className="rounded-xl shadow-xl max-w-full w-[400px] hidden md:flex"
            />
          </div>

          {/* Services */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold mb-8 text-center lg:text-left">Our Core Services</h2>
            <div className="space-y-6">
              {services.map((s, i) => (
                <a key={i} href={s.path} className="block hover:bg-orange-400 p-4 rounded transition duration-800">
                  <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                  <p className="text-gray-300">{s.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {faqs.map((faq, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
