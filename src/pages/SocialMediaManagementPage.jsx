import React from 'react';
import ContactActions from '../components/ContactActions';
const SocialMediaManagementPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-yellow-50 text-gray-900">

      {/* Hero */}
      <section className="py-16 text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-orange-700">
          Social Media Management That Grows Your Brand
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl mb-8">
          Build a loyal community and expand your reach on platforms like Facebook, Instagram, LinkedIn, and X. We handle everything from strategy to content creation and daily engagement.
        </p>
        {/* <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition">
          Start With a Free Social Audit
        </button> */}
      </section>

      {/* Why Social Media Matters */}
      <section className="py-12 px-4 bg-orange-50">
        <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">
          Why Invest in Social Media Management?
        </h2>
        <p className="max-w-3xl mx-auto text-center mb-8">
          Your customers are scrolling — make sure they see you. Social media isn't just for likes; it's a vital channel for brand trust, audience building, and conversion.
        </p>
        <ul className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg">
          {[
            "Increase Brand Awareness",
            "Boost Customer Loyalty",
            "Drive Consistent Engagement",
            "Humanize Your Brand",
          ].map((item) => (
            <li key={item} className="flex items-center">
              <span className="text-green-600 mr-2">✅</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-orange-600 mb-8 text-center">
          What We Offer in Social Media Management
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {[
            { title: "Social Media Strategy", desc: "Tailored growth strategies based on your goals and target audience." },
            { title: "Content Calendar & Creation", desc: "We plan and produce engaging content that resonates on each platform." },
            { title: "Graphic Design & Reels", desc: "Eye-catching visuals, stories, and videos crafted for high engagement." },
            { title: "Community Management", desc: "We respond, comment, and interact to build a vibrant community." },
            { title: "Platform Optimization", desc: "Bios, hashtags, CTAs — everything optimized for better performance." },
            { title: "Analytics & Monthly Reports", desc: "Track growth, engagement, and ROI with clear monthly insights." },
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
     <section className="py-20 px-6 bg-yellow-50">
  <h2 className="text-3xl font-bold text-orange-600 mb-12 text-center">
    Social Media Management Plans
  </h2>
  <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
    {[
      {
        plan: "Starter Social Plan",
        subtitle: "For small pages or startups",
        fee: "KES 18,000",
        features: [
          "2 platforms",
          "3 posts/week",
          "Basic visuals",
          "Monthly reporting"
        ]
      },
      {
        plan: "Growth Social Plan",
        subtitle: "For brands looking to scale",
        fee: "KES 35,000",
        features: [
          "Up to 4 platforms",
          "5 posts/week",
          "Custom graphics",
          "Engagement support"
        ]
      },
      {
        plan: "Pro Social Plan",
        subtitle: "Full-scale social management",
        fee: "KES 60,000",
        features: [
          "Full strategy",
          "Daily posts + Stories + Reels",
          "Analytics reports",
          "Response handling"
        ]
      },
      {
        plan: "Custom Plan",
        subtitle: "Tailored for enterprise brands",
        fee: "Quote-based",
        features: [
          "Multi-region strategy",
          "Creative campaigns",
          "Dedicated manager",
          "Comprehensive insights"
        ]
      }
    ].map((pkg, index) => {
      const isDark = index === 1;
      return (
        <div
          key={pkg.plan}
          className={`w-72 p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 ${
            isDark
              ? "bg-orange-600 text-white"
              : "bg-white text-black"
          }`}
        >
          <h3 className="text-xl font-bold mb-1">{pkg.plan}</h3>
          <p className="text-sm mb-4 opacity-70">{pkg.subtitle}</p>
          <p className="text-3xl font-bold mb-6">{pkg.fee}</p>
          <ul className="mb-6 space-y-2">
            {pkg.features.map((feature) => (
              <li key={feature} className="flex items-center space-x-2">
                <span className="text-green-500 text-xl">✔️</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          {/* <button
            className={`w-full py-2 rounded-full font-semibold transition ${
              isDark
                ? "bg-white text-orange-600 hover:bg-orange-100"
                : "bg-orange-600 text-white hover:bg-orange-700"
            }`}
          >
            Subscribe now
          </button> */}
        </div>
      );
    })}
  </div>
  <p className="mt-12 text-center text-black font-medium">
    All plans include content planning, design, scheduling, and basic reporting.
  </p>
</section>

      {/* Social Media Projects Showcase */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-orange-600 mb-8 text-center">
          Our Social Media Work
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {[
            {
              platform: "Facebook – Jambo Cafe",
              img: "/images/facebook-jambo.jpg",
              desc: "Increased page engagement by 400% with storytelling & ads.",
              link: "https://facebook.com/jambocafe"
            },
            {
              platform: "Instagram – Modish Boutique",
              img: "/images/insta-modish.jpg",
              desc: "Created daily reels & themed content, doubling followers in 2 months.",
              link: "https://instagram.com/modishboutique"
            },
            {
              platform: "LinkedIn – TechSmart HR",
              img: "/images/linkedin-techsmart.jpg",
              desc: "B2B post strategy drove 3x more job applicants via LinkedIn.",
              link: "https://linkedin.com/company/techsmarthr"
            },
            {
              platform: "X (Twitter) – FastWheels KE",
              img: "/images/x-fastwheels.jpg",
              desc: "Viral community memes & promotions increased web clicks 5x.",
              link: "https://x.com/fastwheelske"
            },
          ].map((item) => (
            <a
              key={item.platform}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <img src={item.img} alt={item.platform} className="w-full h-52 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold text-orange-700">{item.platform}</h3>
                <p className="mt-2 text-sm text-gray-700">{item.desc}</p>
              </div>
            </a>
          ))}
        </div>
        <p className="mt-10 text-center">
          Want to see full results and case studies?{" "}
          <a href="#contact" className="text-orange-600 font-semibold">Let’s talk</a>.
        </p>
      </section>

      {/* Why Us */}
      <section className="py-16 px-4 bg-orange-50">
        <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">
          Why Choose Us to Manage Your Social Media?
        </h2>
        <ul className="max-w-2xl mx-auto space-y-4 text-lg">
          {[
            "📅 Consistent, Professional Content",
            "🎨 Custom Designs & Visuals",
            "💬 Active Engagement With Followers",
            "📊 Transparent Monthly Analytics",
            "🧠 Strategies Tailored to Your Brand"
          ].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center" id="contact">
        <h2 className="text-3xl font-bold text-orange-700 mb-4">
          Let’s Grow Your Social Presence Today
        </h2>
        <p className="mb-8">
          Book a free consultation to see how our team can help your brand thrive online.
        </p>
        < ContactActions />
      </section>

    </div>
  );
};

export default SocialMediaManagementPage;
