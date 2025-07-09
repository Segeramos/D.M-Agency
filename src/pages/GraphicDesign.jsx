import React from 'react';
import ContactActions from '../components/ContactActions';

const GraphicDesign = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-yellow-50 text-gray-900">
      
      {/* Hero Section */}
      <section className="py-16 text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-orange-600">
          Graphic Design That Elevates Your Brand
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl mb-8">
          We turn ideas into visual stories — from logos to social media designs, every pixel serves your brand. Captivating design starts here.
        </p>
        {/* <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition">
          Book a Free Design Call
        </button> */}
      </section>

      {/* Why Graphic Design Matters */}
      <section className="py-12 px-4 bg-orange-50">
        <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">
          Why Great Design Matters
        </h2>
        <p className="max-w-3xl mx-auto text-center mb-8">
          First impressions count. Quality design builds trust, boosts conversions, and communicates your value instantly.
        </p>
        <ul className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg">
          {[
            "Instant Brand Recognition",
            "Visually Persuasive Content",
            "Higher Engagement Rates",
            "Professionalism That Converts",
          ].map((item) => (
            <li key={item} className="flex items-center">
              <span className="text-green-600 mr-2">🎨</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Services List */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-orange-600 mb-8 text-center">
          Graphic Design Services We Offer
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {[
            { title: "Logo & Branding", desc: "From logos to brand guidelines — we craft identities that stick." },
            { title: "Marketing Collateral", desc: "Brochures, flyers, business cards — professional print-ready assets." },
            { title: "Social Media Graphics", desc: "Scroll-stopping visuals for Instagram, Facebook, LinkedIn, and more." },
            { title: "Website & UI Design", desc: "Designs that enhance UX and drive conversions on digital platforms." },
            { title: "Infographics & Data Visualization", desc: "We turn complex data into engaging, easy-to-understand visuals." },
            { title: "Presentation Design", desc: "Investor decks and sales presentations with impact." },
            { title: "Custom Illustration", desc: "Unique artwork tailored to your brand personality." },
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
      <section className="py-20 px-6 bg-orange-100">
        <h2 className="text-3xl font-bold text-orange-600 mb-12 text-center">
          Our Design Packages
        </h2>
        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {[
            {
              pkg: "Starter Design Pack",
              subtitle: "For early-stage brands",
              price: "KES 15,000",
              features: [
                "Logo Design",
                "1 Social Media Template",
                "1 Revision"
              ]
            },
            {
              pkg: "Business Design Pack",
              subtitle: "For serious branding",
              price: "KES 30,000",
              features: [
                "Logo + Branding Kit",
                "3 Social Media Designs",
                "Marketing Collateral"
              ]
            },
            {
              pkg: "Pro Design Pack",
              subtitle: "For multi-channel visuals",
              price: "KES 50,000",
              features: [
                "Complete Brand Kit",
                "5 Social Graphics",
                "Web & Print Ready Files"
              ]
            },
            {
              pkg: "Enterprise Custom Pack",
              subtitle: "For corporate design suites",
              price: "Quote-based",
              features: [
                "Tailored Design Strategy",
                "Unlimited Assets",
                "Dedicated Design Team"
              ]
            }
          ].map((plan, index) => {
            const isDark = index === 1;
            return (
              <div
                key={plan.pkg}
                className={`w-72 p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 ${
                  isDark
                    ? "bg-orange-600 text-white"
                    : "bg-white text-black"
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
            );
          })}
        </div>
        <p className="mt-12 text-center text-black font-medium">
          All packages include source files, design consultation, and full rights.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-orange-50">
        <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">
          Why Choose Our Graphic Design Services?
        </h2>
        <ul className="max-w-2xl mx-auto space-y-4 text-lg">
          {[
            "🎨 Tailored Designs With Brand Purpose",
            "🖌️ Consistency Across All Touchpoints",
            "🧠 Creative Direction + Strategic Thinking",
            "⚡ Fast Turnaround Times",
            "💬 Unlimited Communication Support"
          ].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center" id="contact">
        <h2 className="text-3xl font-bold text-orange-700 mb-4">
          Let’s Design Something Great Together
        </h2>
        <p className="mb-8">
          Talk to our designers for a free consultation and brand audit.
        </p>
        < ContactActions />
      </section>

    </div>
  );
};

export default GraphicDesign;
