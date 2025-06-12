import React from 'react';

const services = [
  {
    title: "SEO Optimization",
    desc: "Improve your website’s visibility and rankings with expert SEO strategies.",
    path: "/services/seo-optimization"
  },
  {
    title: "PPC Advertising",
    desc: "Maximize ROI with precisely targeted Google Ads and Facebook campaigns.",
    path: "/services/ppc-advertising"
  },
  {
    title: "Social Media Management",
    desc: "Engage and grow your audience across all major platforms.",
    path: "/services/social-media-management"
  },
  {
    title: "Content & Email Marketing",
    desc: "Drive conversions with compelling content and strategic email outreach.",
    path: "/services/content-email-marketing"
  },
  {
    title: "Web Design & Development",
    desc: "Get a stunning, responsive website tailored to your business goals.",
    path: "/services/web-design-development"
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
    <div className=" text-white">
      {/* Hero Section */}
      <section
            className="bg-cover bg-center bg-no-repeat px-6 py-32 min-h-screen flex items-center"
            style={{
                backgroundImage: "url('/hero.png')"
            }}
            >
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 ">Grow Your Business with Bookie</h1>
          <p className="text-lg mb-6">Expert digital marketing services that deliver real results.</p>
          <button
            className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-md text-white font-semibold transition"
            onClick={() => window.scrollTo({ top: 700, behavior: 'smooth' })}
          >
            Get Started
          </button>
        </div>
      </section>

      {/* Services Section with Side-by-Side Layout */}
      <section className="bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Image */}
          <div className="flex-shrink-0 w-full lg:w-1/2 flex justify-center">
            <img
              src="public\vitalii7577-jW7C-KidYi0-unsplash.jpg"
              alt="Google Search Mobile"
              className="rounded-xl shadow-xl max-w-full w-[400px]"
            />
          </div>

          {/* Services */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold mb-8 text-center lg:text-left">Our Core Services</h2>
            <div className="space-y-6">
              {services.map((s, i) => (
                <a key={i} href={s.path} className="block hover:bg-gray-800 p-4 rounded transition duration-200">
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
