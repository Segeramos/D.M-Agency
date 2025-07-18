import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ContactActions from '../components/ContactActions';
import NCHImage from '../assets/images/NCH.png';

const OptimizationPage = () => {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) scrollToNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const scrollToNext = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth = container.firstChild.offsetWidth + 16;
    const nextScrollLeft =
      container.scrollLeft + cardWidth >= container.scrollWidth - container.clientWidth
        ? 0
        : container.scrollLeft + cardWidth;
    container.scrollTo({ left: nextScrollLeft, behavior: 'smooth' });
  };

  const scrollToPrev = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth = container.firstChild.offsetWidth + 16;
    const prevScrollLeft =
      container.scrollLeft - cardWidth <= 0
        ? container.scrollWidth
        : container.scrollLeft - cardWidth;
    container.scrollTo({ left: prevScrollLeft, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-yellow-50 text-gray-900 font-sans">
      {/* Hero */}
      <section className="py-20 text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-orange-700">
          SEO Optimization Services That Drive Real Results
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl mb-8">
          Is your business invisible on Google? Our expert SEO Optimization services are
          designed to help you rank higher, attract the right audience, and turn organic
          traffic into real revenue.
        </p>
      </section>

      {/* Why it matters */}
      <section className="py-16 px-4 bg-orange-50">
        <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">
          Why SEO Optimization Matters
        </h2>
        <p className="max-w-3xl mx-auto text-center mb-10">
          Search engines are where customers begin. With millions of searches happening
          daily, proper SEO ensures your business is found before your competitors.
        </p>
        <ul className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg">
          {[
            'Rank Higher on Google',
            'Attract Consistent Organic Traffic',
            'Convert Visitors into Paying Customers',
            'Outperform Competitors Without Paid Ads',
          ].map((item) => (
            <li key={item} className="flex items-start space-x-3">
              <span className="text-green-600 text-xl">✅</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Services */}
      <section className="py-20 px-4">
        <h2 className="text-3xl font-bold text-orange-600 mb-10 text-center">
          What You Get With Our SEO Optimization Services
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {[
            {
              title: 'Complete SEO Audit',
              desc: "We identify what's holding your site back with a full technical, content, and competitor audit.",
            },
            {
              title: 'Keyword Research & Content Mapping',
              desc:
                'We discover profitable keywords your audience is actually searching for, and structure your content accordingly.',
            },
            {
              title: 'On-Page SEO Optimization',
              desc:
                'We optimize every element of your site—titles, descriptions, images, structure—for better visibility and user experience.',
            },
            {
              title: 'Technical SEO Fixes',
              desc:
                'From fixing site speed and mobile issues to structured data and indexing errors—we get your backend clean and Google-ready.',
            },
            {
              title: 'High-Authority Link Building',
              desc:
                'We generate powerful backlinks that improve domain authority and rankings over time.',
            },
            {
              title: 'Local SEO (Optional)',
              desc:
                'Perfect for location-based businesses. We optimize your local listings, citations, and local content.',
            },
            {
              title: 'Monthly Reporting & Strategy Updates',
              desc:
                'You get transparent reporting, keyword tracking, traffic trends, and expert insights every month.',
            },
          ].map((svc) => (
            <div key={svc.title} className="flex items-start">
              <div className="flex-shrink-0 text-2xl text-orange-500 mt-1">•</div>
              <div className="ml-3">
                <h3 className="text-xl font-semibold mb-1">{svc.title}</h3>
                <p>{svc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-yellow-50">
        <h2 className="text-3xl font-bold text-orange-600 mb-12 text-center">
          Our SEO Optimization Packages & Charges
        </h2>
        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {[
            {
              pkg: 'Starter SEO Plan',
              subtitle: 'For early stage websites',
              price: 'KES 15,000',
              features: ['SEO Audit', 'Basic On-page Optimization', 'Keyword Setup', 'Monthly Report'],
            },
            {
              pkg: 'Growth SEO Plan',
              subtitle: 'For growing brands',
              price: 'KES 30,000',
              features: ['Everything in Starter', 'Link Building', 'Technical SEO', 'Blog Optimization'],
            },
            {
              pkg: 'Pro SEO Plan',
              subtitle: 'For competitive industries',
              price: 'KES 50,000',
              features: ['All Growth features', 'Competitor Tracking', 'Content Strategy', 'Local SEO'],
            },
            {
              pkg: 'Custom Plan',
              subtitle: 'For large or custom projects',
              price: 'Quote-based',
              features: ['Tailored SEO Approach', 'eCommerce SEO', 'Enterprise Auditing', 'Advanced Analytics'],
            },
          ].map((plan, index) => (
            <div
              key={plan.pkg}
              className={`w-72 p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 ${
                index === 1 ? 'bg-orange-600 text-white' : 'bg-white text-black'
              }`}
            >
              <h3 className="text-xl font-bold mb-1">{plan.pkg}</h3>
              <p className="text-sm mb-4 opacity-70">{plan.subtitle}</p>
              <p className="text-3xl font-bold mb-6">{plan.price}</p>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-2">
                    <span className="text-green-500 text-xl">✔️</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center text-black font-medium">
          All packages come with monthly reporting and expert support.
        </p>
      </section>

      {/* Case Studies Carousel */}
      <section className="py-20 px-4">
        <h2 className="text-3xl font-bold text-orange-600 mb-10 text-center">
          Our Successful SEO Projects
        </h2>
        <div className="relative max-w-7xl mx-auto">
          <button
            onClick={scrollToPrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow p-2 hover:bg-orange-100"
          >
            <ChevronLeft className="w-6 h-6 text-orange-600" />
          </button>

          <div
            ref={scrollRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="carousel flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth px-10"
          >
            {[
              {
                name: 'Nairobi Camera House',
                result: '300% increase in organic traffic in 4 months',
                image: NCHImage,
                link: 'https://nairobicamerahouse.com/',
              },
              {
                name: 'Panda Phones',
                result: 'Ranked 40+ keywords on page 1',
                image: 'https://via.placeholder.com/800x400?text=Panda+Phones',
                link: 'https://pandaphones.com/',
              },
              {
                name: 'Mighty Ape',
                result: '5× growth in local calls and leads',
                image: 'https://via.placeholder.com/800x400?text=Mighty+Ape',
                link: 'https://mightyape.co.ke/',
              },
              {
                name: 'Rondamo Technologies',
                result: 'Ranked 40+ keywords on page 1',
                image: 'https://via.placeholder.com/800x400?text=Rondamo+Technologies',
                link: 'https://rondamo.co.ke/',
              },
            ].map((c) => (
              <a
                key={c.name}
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className="carousel-item flex-shrink-0 w-full md:w-1/2 snap-center flex flex-col items-center bg-orange-100 rounded-lg shadow"
              >
                <img src={c.image} alt={c.name} className="w-full h-64 object-cover" />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-orange-600">{c.name}</h3>
                  <p className="text-gray-700 mt-2">{c.result}</p>
                  <span className="text-sm text-orange-500 underline mt-2 inline-block">Visit Website</span>
                </div>
              </a>
            ))}
          </div>

          <button
            onClick={scrollToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow p-2 hover:bg-orange-100"
          >
            <ChevronRight className="w-6 h-6 text-orange-600" />
          </button>
        </div>

        <p className="mt-10 text-center text-sm text-gray-600">
          Want to see full case studies?{' '}
          <a href="#contact" className="text-orange-600 font-semibold underline">
            Contact us
          </a>{' '}
          and we’ll share relevant reports.
        </p>
      </section>

      {/* Why choose us */}
      <section className="py-20 px-4 bg-yellow-50">
        <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">
          Why Choose Us for SEO Optimization?
        </h2>
        <ul className="max-w-2xl mx-auto space-y-4 text-lg text-center">
          {[
            '📈 Proven Strategies That Work',
            '👥 Dedicated SEO Specialists',
            '🔎 Transparent Monthly Reporting',
            '🤝 Personalized Service for Every Client',
            '✅ 100% Ethical, White-Hat SEO',
          ].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 px-4 text-center">
        <h2 className="text-3xl font-bold text-orange-700 mb-4">
          Let’s Get Your Website Ranking Higher Today
        </h2>
        <p className="mb-8">
          Start dominating Google search and generating organic traffic that converts.
        </p>
        <ContactActions />
      </section>
    </div>
  );
};

export default OptimizationPage;
