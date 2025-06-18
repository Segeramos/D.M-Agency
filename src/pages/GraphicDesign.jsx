import React from 'react';

const GraphicDesign = () => {
  return (
    <div className="bg-gradient-to-b from-orange-50 to-yellow-50 text-gray-800 font-sans px-6 py-12 md:px-16">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Hero Header */}
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-orange-700">
            Grow Your Business Online — Smarter & Faster
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-700">
            Our all-in-one digital marketing solutions bring you more traffic, leads, and sales—efficiently and effectively.
          </p>
        </section>

        {/* Service Sections */}
        {[
          {
            title: '📈 Smart SEO Optimization',
            points: [
              'Keyword research & competitor analysis',
              'On-page SEO: titles, meta, linking',
              'Technical optimization for speed & mobile',
              'Content strategy that converts',
            ],
            cta: '👉 Learn more about our SEO services',
          },
          {
            title: '🎯 Targeted Paid Ads',
            points: [
              'Google, Meta, LinkedIn Ads',
              'Audience segmentation & A/B testing',
              'Real-time performance tracking',
            ],
            cta: '📊 View our paid ads case studies',
          },
          {
            title: '📱 Social Media Management',
            points: [
              'Monthly content calendars',
              'Reels, carousels & trends',
              'Community engagement',
              'Follower growth & insights',
            ],
            cta: '🔥 Explore our social media results',
          },
          {
            title: '💻 High-Impact Web Design',
            points: [
              'Conversion-optimized layouts',
              'SEO architecture & responsive builds',
              'Speed-focused deployment',
              'Landing pages that perform',
            ],
            cta: '🌐 Browse our web design portfolio',
          },
          {
            title: '🔁 All Services Working Together',
            points: [
              'SEO boosts your content strategy',
              'Content fuels your social media',
              'Ads retarget your warm leads',
              'Your website converts them all',
            ],
          },
          {
            title: '🏆 Why Clients Choose Us',
            points: [
              'Dedicated team: strategist, designer, writer',
              'Custom plans built around your goals',
              'Monthly reporting on ROI & KPIs',
            ],
            cta: '📈 Read our 300% growth case study',
          },
        ].map((section, idx) => (
          <section key={idx} className="bg-white border-l-4 border-orange-500 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-orange-600 mb-4">{section.title}</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {section.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            {section.cta && (
              <p className="mt-4 text-orange-600 font-medium hover:underline cursor-pointer">
                {section.cta}
              </p>
            )}
          </section>
        ))}

        {/* Final Call to Action */}
        <section className="bg-orange-600 text-white p-10 rounded-xl text-center space-y-6 shadow-lg">
          <h2 className="text-3xl font-bold">Ready to Level Up Your Digital Marketing?</h2>
          <p className="text-lg max-w-xl mx-auto">
            Partner with a team that gets results through smart strategy, sharp design, and flawless execution.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <button className="bg-white text-orange-600 font-bold px-6 py-3 rounded-lg hover:bg-orange-100 transition">
              📅 Book a Free Strategy Call
            </button>
            <button className="bg-orange-800 text-white font-bold px-6 py-3 rounded-lg hover:bg-orange-700 transition">
              💸 View Pricing Packages
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GraphicDesign;
