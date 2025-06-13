import React from 'react';

const OptimizationPage = () => {
  return (
     <div className="min-h-screen bg-gradient-to-b from-orange-100 to-yellow-50 text-gray-900">
      
      {/* Hero */}
      <section className="py-16 text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-orange-700">
          SEO Optimization Services That Drive Real Results
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl mb-8">
          Is your business invisible on Google? Our expert SEO Optimization services are designed to help you rank higher, attract the right audience, and turn organic traffic into real revenue.
        </p>
        <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition">
          Get Your Free Audit
        </button>
      </section>

      {/* Why it matters */}
      <section className="py-12 px-4 bg-orange-50">
        <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">
          Why SEO Optimization Matters
        </h2>
        <p className="max-w-3xl mx-auto text-center mb-8">
          Search engines are where customers begin. With millions of searches happening daily, proper SEO ensures your business is found before your competitors.
        </p>
        <ul className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg">
          {[
            "Rank Higher on Google",
            "Attract Consistent Organic Traffic",
            "Convert Visitors into Paying Customers",
            "Outperform Competitors Without Paid Ads",
          ].map((item) => (
            <li key={item} className="flex items-center">
              <span className="text-green-600 mr-2">✅</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Services */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-orange-600 mb-8 text-center">
          What You Get With Our SEO Optimization Services
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {[
            { title: "Complete SEO Audit", desc: "We identify what's holding your site back with a full technical, content, and competitor audit." },
            { title: "Keyword Research & Content Mapping", desc: "We discover profitable keywords your audience is actually searching for, and structure your content accordingly." },
            { title: "On-Page SEO Optimization", desc: "We optimize every element of your site—titles, descriptions, images, structure—for better visibility and user experience." },
            { title: "Technical SEO Fixes", desc: "From fixing site speed and mobile issues to structured data and indexing errors—we get your backend clean and Google-ready." },
            { title: "High-Authority Link Building", desc: "We generate powerful backlinks that improve domain authority and rankings over time." },
            { title: "Local SEO (Optional)", desc: "Perfect for location-based businesses. We optimize your local listings, citations, and local content." },
            { title: "Monthly Reporting & Strategy Updates", desc: "You get transparent reporting, keyword tracking, traffic trends, and expert insights every month." },
          ].map((svc) => (
            <div key={svc.title} className="flex">
              <div className="flex-shrink-0 text-2xl text-orange-500 mr-4">•</div>
              <div>
                <h3 className="text-xl font-semibold mb-1">{svc.title}</h3>
                <p>{svc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 bg-yellow-50">
        <h2 className="text-3xl font-bold text-orange-600 mb-8 text-center">
          Our SEO Optimization Packages & Charges
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-orange-600 text-white">
              <tr>
                {["Package", "Price (Monthly)", "Features"].map((head) => (
                  <th key={head} className="py-4 px-6 text-left">{head}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { pkg: "Starter SEO Plan", price: "KES 15,000", feat: "SEO Audit, Basic On-page, Keyword Setup, Monthly Report" },
                { pkg: "Growth SEO Plan", price: "KES 30,000", feat: "Includes Starter + Link Building, Technical SEO, Blog Optimization" },
                { pkg: "Pro SEO Plan", price: "KES 50,000", feat: "Full Service + Competitor Tracking, Content Strategy, Local SEO" },
                { pkg: "Custom Plan", price: "Quote-based", feat: "Tailored for enterprise websites, eCommerce, or large-scale SEO" },
              ].map((row) => (
                <tr key={row.pkg} className="border-b last:border-none">
                  <td className="py-4 px-6 font-medium">{row.pkg}</td>
                  <td className="py-4 px-6">{row.price}</td>
                  <td className="py-4 px-6">{row.feat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-center font-semibold">
          All packages come with monthly reporting and expert support.
        </p>
      </section>

      {/* Case Studies with images */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-orange-600 mb-8 text-center">
          Our Successful SEO Projects
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
          {[
            {
              name: "City Laptop Shop",
              result: "300% increase in organic traffic in 4 months",
              image: "/images/city-laptop.jpg",
              link: "https://citylaptopshop.com",
            },
            {
              name: "Panda Phones eCommerce",
              result: "Ranked 40+ keywords on page 1",
              image: "/images/panda-phones.jpg",
              link: "https://pandaphones.com/",
            },
            {
              name: "Safari Auto Spares",
              result: "5× growth in local calls and leads",
              image: "/images/safari-auto.jpg",
              link: "https://safariautospares.com",
            },
            {
              name: "Panda Phones eCommerce",
              result: "Ranked 40+ keywords on page 1",
              image: "/images/panda-phones.jpg",
              link: "https://pandaphones.com/",
            },
            {
              name: "City Laptop Shop",
              result: "300% increase in organic traffic in 4 months",
              image: "/images/city-laptop.jpg",
              link: "https://citylaptopshop.com",
            },
            {
              name: "Panda Phones eCommerce",
              result: "Ranked 40+ keywords on page 1",
              image: "/images/panda-phones.jpg",
              link: "https://pandaphones.com/",
            },
            {
              name: "Rondamo Technologies",
              result: "75% jump in ranking keywords",
              image: "/images/rondamo.jpg",
              link: "https://rondamotech.com",
            },
            {
              name: "City Laptop Shop",
              result: "300% increase in organic traffic in 4 months",
              image: "/images/city-laptop.jpg",
              link: "https://citylaptopshop.com",
            }
          ].map((c) => (
            <a
              href={c.link}
              key={c.name}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
            >
              <img src={c.image} alt={c.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-orange-700">{c.name}</h3>
                <p className="mt-2 text-sm text-gray-700">{c.result}</p>
              </div>
            </a>
          ))}
        </div>
        <p className="mt-10 text-center">
          Want to see full case studies? <a href="#contact" className="text-orange-600 font-semibold">Contact us</a> and we’ll share relevant reports.
        </p>
      </section>

      {/* Why choose us */}
      <section className="py-16 px-4 bg-yellow-50">
        <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">
          Why Choose Us for SEO Optimization?
        </h2>
        <ul className="max-w-2xl mx-auto space-y-4 text-lg">
          {[
            "📈 Proven Strategies That Work",
            "👥 Dedicated SEO Specialists",
            "🔎 Transparent Monthly Reporting",
            "🤝 Personalized Service for Every Client",
            "✅ 100% Ethical, White-Hat SEO",
          ].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section id="contact" className="py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-orange-700 mb-4">
          Let’s Get Your Website Ranking Higher Today
        </h2>
        <p className="mb-8">
          Start dominating Google search and generating organic traffic that converts.
        </p>
        <div className="space-y-4 sm:space-y-0 sm:flex sm:justify-center sm:gap-4">
          <a href="tel:+254XXX" className="block bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg">
            📞 Call Us: +254 XXX XXX XXX
          </a>
          <a href="mailto:hello@youragency.com" className="block bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-6 rounded-lg">
            📧 Email Us
          </a>
          <a href="#book" className="block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg">
            📅 Book a Free Strategy Session
          </a>
        </div>
      </section>
    </div>
  );
};

export default OptimizationPage;
