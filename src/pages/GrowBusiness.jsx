import React from 'react';

const GrowBusiness = () => {
  return (
    <div className="bg-black text-orange-400 font-sans px-6 py-12 md:px-16">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Grow Your Business Online Smarter and Faster
          </h1>
          <p className="text-lg text-orange-300">
            Our all-in-one digital marketing solutions bring you more traffic, leads, and sales—with speed and precision.
          </p>
        </div>

        {/* Sections */}
        {[
          {
            title: 'Smart SEO Optimization to Boost Visibility',
            points: [
              'In-depth keyword research',
              'On-page optimization (titles, meta tags, internal linking)',
              'Technical SEO for speed and mobile-friendliness',
              'Content strategy to attract and convert',
            ],
            cta: '👉 Learn more about our SEO services',
          },
          {
            title: 'Targeted Ads that Deliver ROI',
            points: [
              'Google Ads, Meta Ads, LinkedIn Ads',
              'A/B testing and audience segmentation',
              'Performance analytics',
            ],
            cta: 'Check out our paid ads case studies',
          },
          {
            title: 'Engage Audiences with Social Media Management',
            points: [
              'Strategic content calendars',
              'Community engagement',
              'Reels, stories, trend-driven posts',
              'Monthly growth tracking',
            ],
            cta: 'Explore our social media success stories',
          },
          {
            title: 'Convert Visitors with High-Impact Web Design',
            points: [
              'UX/UI focused websites',
              'Speed optimized builds',
              'SEO-friendly architecture',
              'Conversion-focused landing pages',
            ],
            cta: 'See our client website portfolio',
          },
          {
            title: 'Everything Works Together—The Power of Integration',
            points: [
              'SEO fuels your blog',
              'Blogs boost your social posts',
              'Ads retarget warm leads',
              'Your site converts them all',
            ],
          },
          {
            title: 'Why Choose Us?',
            points: [
              'Dedicated strategist, designer, writer & analyst',
              'Tailored strategies for your industry & goals',
              'Monthly KPI and ROI reporting',
            ],
            cta: 'See our 300% growth case study',
          },
        ].map((section, idx) => (
          <div key={idx} className="bg-orange-900/10 p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
            <ul className="list-disc list-inside text-orange-200 space-y-2">
              {section.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            {section.cta && (
              <p className="mt-4 text-orange-400 underline hover:text-orange-300 cursor-pointer">
                {section.cta}
              </p>
            )}
          </div>
        ))}

        {/* Call to Action */}
        <div className="bg-orange-600 text-black p-8 rounded-lg text-center space-y-4">
          <h2 className="text-3xl font-bold">Ready to Grow Your Business Online?</h2>
          <p className="text-lg">Work smarter, not harder—with SEO, ads, social media, and more.</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6">
            <button className="bg-black text-orange-400 px-6 py-3 rounded hover:bg-orange-700 hover:text-white transition">
              👉 Book a Free Strategy Call
            </button>
            <button className="bg-orange-800 text-white px-6 py-3 rounded hover:bg-orange-600 transition">
              👉 View Our Pricing Packages
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowBusiness;
