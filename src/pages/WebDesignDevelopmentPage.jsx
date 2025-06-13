import React from 'react';

const WebDesignDevelopmentPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-yellow-50 text-gray-900">

      {/* Hero Section */}
      <section className="py-16 text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-orange-700">
          Web Design & Development That Converts
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl mb-8">
          Create a website that works as hard as you do. Our team designs fast, mobile-friendly, and visually engaging websites built to convert—and tailored to your brand’s identity and business goals.
        </p>
        <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition">
          Get a Free Website Audit
        </button>
      </section>

      {/* Why Web Design Matters */}
      <section className="py-12 px-4 bg-orange-50">
        <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">
          Why Invest in a Professional Website?
        </h2>
        <p className="max-w-3xl mx-auto text-center mb-8">
          Your website is your 24/7 digital salesperson. It should look great, load fast, and convert visitors into leads or customers—on every device.
        </p>
        <ul className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg">
          {[
            "Mobile-First, Responsive Design",
            "Optimized for Conversions",
            "SEO-Ready From Day One",
            "Built to Represent Your Brand",
          ].map((item) => (
            <li key={item} className="flex items-center">
              <span className="text-green-600 mr-2">✅</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Services Offered */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-orange-600 mb-8 text-center">
          Our Web Design & Development Services
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {[
            { title: "Custom Website Design", desc: "We design modern, brand-aligned sites that engage and convert." },
            { title: "Mobile Responsive Development", desc: "Every site works seamlessly across phones, tablets, and desktops." },
            { title: "eCommerce Websites", desc: "Set up online stores with Shopify, WooCommerce, or custom platforms." },
            { title: "Landing Pages", desc: "Focused pages for ads, launches, or lead-gen — fast, effective, high-converting." },
            { title: "WordPress Development", desc: "Robust, scalable WordPress solutions with CMS training and support." },
            { title: "Site Speed Optimization", desc: "Fast load times = better UX, higher rankings, and more conversions." },
            { title: "Maintenance & Support", desc: "We keep your website secure, updated, and running smoothly." },
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

      {/* Pricing Table */}
      <section className="py-16 px-4 bg-yellow-50">
        <h2 className="text-3xl font-bold text-orange-600 mb-8 text-center">
          Web Design & Development Packages
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-orange-600 text-white">
              <tr>
                {["Plan", "Cost", "Details"].map((head) => (
                  <th key={head} className="py-4 px-6 text-left">{head}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                {
                  plan: "Starter Website",
                  cost: "KES 25,000",
                  details: "Up to 5 pages, responsive design, contact form, basic SEO"
                },
                {
                  plan: "Growth Website",
                  cost: "KES 50,000",
                  details: "10+ pages, blog integration, performance optimization, animations"
                },
                {
                  plan: "eCommerce Website",
                  cost: "KES 85,000",
                  details: "Shopify/WooCommerce setup, payment integration, training"
                },
                {
                  plan: "Custom Project",
                  cost: "Quote-based",
                  details: "Enterprise systems, SaaS platforms, APIs, portals"
                }
              ].map((row) => (
                <tr key={row.plan} className="border-b last:border-none">
                  <td className="py-4 px-6 font-medium">{row.plan}</td>
                  <td className="py-4 px-6">{row.cost}</td>
                  <td className="py-4 px-6">{row.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-center font-semibold">
          Every package includes launch support, Google indexing, and speed optimization.
        </p>
      </section>

      {/* Website Projects */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-orange-600 mb-8 text-center">
          Websites We've Designed & Developed
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {[
            {
              name: "City Laptop Shop",
              img: "/images/web-city-laptop.jpg",
              desc: "Clean UI, product catalog, and optimized for local SEO.",
              link: "https://citylaptopshop.com"
            },
            {
              name: "Panda Phones eCommerce",
              img: "/images/web-panda-phones.jpg",
              desc: "Built on WooCommerce with integrated mobile checkout.",
              link: "https://pandaphones.co.ke"
            },
            {
              name: "Rondamo Technologies",
              img: "/images/web-rondamo.jpg",
              desc: "Professional B2B layout with blog, FAQ, and live chat.",
              link: "https://rondamotech.com"
            },
            {
              name: "Safari Auto Spares",
              img: "/images/web-safari.jpg",
              desc: "Service-based site with booking system and WhatsApp CTA.",
              link: "https://safariautospares.com"
            },
          ].map((site) => (
            <a
              key={site.name}
              href={site.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <img src={site.img} alt={site.name} className="w-full h-52 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold text-orange-700">{site.name}</h3>
                <p className="mt-2 text-sm text-gray-700">{site.desc}</p>
              </div>
            </a>
          ))}
        </div>
        <p className="mt-10 text-center">
          Want to see more client sites and code work?{" "}
          <a href="#contact" className="text-orange-600 font-semibold">Contact us</a>.
        </p>
      </section>

      {/* Why Us */}
      <section className="py-16 px-4 bg-orange-50">
        <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">
          Why Choose Us for Web Design & Development?
        </h2>
        <ul className="max-w-2xl mx-auto space-y-4 text-lg">
          {[
            "📱 Mobile-First, Conversion-Focused Design",
            "⚡ Fast Load Times & Core Web Vitals Optimization",
            "🎯 Built for Your Goals & Brand Identity",
            "💼 Proven Results Across Industries",
            "🔧 Support, Maintenance, and Growth Tools"
          ].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center" id="contact">
        <h2 className="text-3xl font-bold text-orange-700 mb-4">
          Ready to Build a Website That Performs?
        </h2>
        <p className="mb-8">
          Let’s turn your website into your strongest sales tool. Book a free consultation today.
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

export default WebDesignDevelopmentPage;
