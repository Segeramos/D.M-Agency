import React from 'react';

const PPCAdvertisingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-yellow-50 text-gray-900">
      
      {/* Hero Section */}
      <section className="py-16 text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-orange-700">
          PPC Advertising That Delivers Real ROI
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl mb-8">
          Get instant visibility and measurable results with high-converting Google Ads and Facebook Ads. We design, target, and optimize campaigns that deliver maximum ROI with minimal waste.
        </p>
        <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition">
          Book a Free Strategy Call
        </button>
      </section>

      {/* Why PPC Works */}
      <section className="py-12 px-4 bg-orange-50">
        <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">
          Why Use PPC Advertising?
        </h2>
        <p className="max-w-3xl mx-auto text-center mb-8">
          PPC is one of the fastest ways to drive targeted traffic to your website and get results. Whether it's brand awareness or direct conversions, paid ads help you scale fast and smart.
        </p>
        <ul className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg">
          {[
            "Instant Traffic From Day One",
            "Laser-Focused Targeting",
            "Control Your Budget & Spend",
            "Trackable & Measurable Results",
          ].map((item) => (
            <li key={item} className="flex items-center">
              <span className="text-green-600 mr-2">✅</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Services List */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-orange-600 mb-8 text-center">
          What’s Included in Our PPC Advertising Services
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {[
            { title: "Campaign Strategy & Research", desc: "We analyze your market, audience, and competitors to build an effective paid ads strategy." },
            { title: "Google Ads Campaign Setup", desc: "From keyword targeting to bidding structure and ad copy — we build it right from the start." },
            { title: "Facebook & Instagram Ads", desc: "We craft visual and text ads that speak to your audience on Meta platforms." },
            { title: "Conversion Tracking Setup", desc: "We integrate tools like Google Tag Manager, Pixel, and Analytics to track real performance." },
            { title: "Landing Page Recommendations", desc: "We ensure that your ads convert with UX, speed, and content that gets results." },
            { title: "A/B Testing & Optimization", desc: "Ongoing testing of ad creatives, copy, and CTAs to improve ROI continuously." },
            { title: "Weekly Reports & Adjustments", desc: "Clear insights on what’s working, where to scale, and where to cut waste." },
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

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-yellow-50">
        <h2 className="text-3xl font-bold text-orange-600 mb-8 text-center">
          Our PPC Advertising Packages
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-orange-600 text-white">
              <tr>
                {["Package", "Monthly Fee", "Includes"].map((head) => (
                  <th key={head} className="py-4 px-6 text-left">{head}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                {
                  pkg: "Starter PPC Plan",
                  fee: "KES 20,000 + Ad Spend",
                  includes: "Google Search Ads, Basic Setup, Monthly Report"
                },
                {
                  pkg: "Growth PPC Plan",
                  fee: "KES 35,000 + Ad Spend",
                  includes: "Google + Facebook Ads, A/B Testing, Landing Page Insights"
                },
                {
                  pkg: "Pro PPC Plan",
                  fee: "KES 60,000 + Ad Spend",
                  includes: "Full Funnel PPC, Custom Creatives, Weekly Reports"
                },
                {
                  pkg: "Custom Enterprise Plan",
                  fee: "Quote-based",
                  includes: "Tailored for high-budget or international campaigns"
                }
              ].map((row) => (
                <tr key={row.pkg} className="border-b last:border-none">
                  <td className="py-4 px-6 font-medium">{row.pkg}</td>
                  <td className="py-4 px-6">{row.fee}</td>
                  <td className="py-4 px-6">{row.includes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-center font-semibold">
          All plans include weekly reporting, ongoing optimization, and expert support.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-orange-50">
        <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">
          Why Choose Us for PPC Management?
        </h2>
        <ul className="max-w-2xl mx-auto space-y-4 text-lg">
          {[
            "📊 Data-Driven Strategies That Scale",
            "🎯 Targeting That Hits the Mark",
            "💸 Transparent Budgets & Spend",
            "⚙️ Full-Funnel Setup & Support",
            "📈 Results You Can Measure & Trust"
          ].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center" id="contact">
        <h2 className="text-3xl font-bold text-orange-700 mb-4">
          Let’s Launch Your First High-Converting PPC Campaign
        </h2>
        <p className="mb-8">
          Talk to our team for a free PPC strategy call and ad account audit.
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

export default PPCAdvertisingPage;
