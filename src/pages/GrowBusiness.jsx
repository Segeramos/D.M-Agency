import React from 'react';
import SSM from '../assets/images/SSM.webp';  
import Articles from '../components/Articles';



const GrowBusiness = () => {
  return (
    <section className="bg-black text-white px-6 py-16 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-14">
        <h1 className="text-4xl font-bold text-center mb-6">Why Digital Marketing Matters for Your Business</h1>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <img
            src="https://api.nounq.com/admin/images/blog/why-digital-marketing-is-important-for-business.jpg"
            alt="Digital marketing team"
            className="rounded-xl md:w-1/2"
          />
          <p className="text-lg md:w-1/2">
            In today’s competitive market, <strong>digital marketing</strong> is the heartbeat of modern business success. From search visibility and content to design and social reach, it’s how modern brands grow faster, smarter, and stronger.
          </p>
        </div>

        <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Search Engine Optimization (SEO)</h2>
            <p>
              SEO helps you rank higher on search engines, attracting organic traffic that converts. Tools we use: <a href="https://ahrefs.com" target="_blank" className="text-orange-400 underline">Ahrefs</a>, <a href="https://semrush.com" target="_blank" className="text-orange-400 underline">SEMRush</a>, <a href="https://analytics.google.com" target="_blank" className="text-orange-400 underline">Google Analytics</a>.
              Learn more at <a href="https://moz.com/beginners-guide-to-seo" target="_blank" className="text-orange-400 underline">Moz Guide</a>, <a href="https://audiologydesign.com/the-hearing-professionals-guide-to-common-search-engine-optimization-seo-terms/" target="_blank" className="text-orange-400 underline">Audiologydesign</a>..
            </p>
          </div>
          <img
            src="https://www.dacgroup.com/wp-content/uploads/2025/01/Blog-articles-Banners-2.png"
            alt="SEO tools"
            className="rounded-xl md:w-1/2 h-auto"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <img
            src="https://www.fifthshield.com/wp-content/uploads/2025/04/what-is-ppc-pay-per-click-advertising-and-how-does-it-work.webp"
            alt="PPC campaigns"
            className="rounded-xl md:w-1/2"
          />
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Paid Per Click Advertising (PPC)</h2>
            <p>
              PPC drives instant traffic and measurable ROI through platforms like <a href="https://ads.google.com/" target="_blank" className="text-orange-400 underline">Google Ads</a> and <a href="https://www.facebook.com/business/ads" target="_blank" className="text-orange-400 underline">Meta Ads</a>. We monitor and optimize your ads using advanced strategies and tools like <a href="https://ads.microsoft.com" target="_blank" className="text-orange-400 underline">Microsoft Ads</a>. See results from real campaigns at <a href="https://www.wordstream.com/blog/ws/2017/02/28/ppc-case-studies" target="_blank" className="text-orange-400 underline">WordStream</a>.
            </p>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Social Media Management</h2>
            <p>
              We help brands grow on platforms like Facebook, Instagram, X, and LinkedIn. Our strategies include planning, content creation, and engagement using tools like <a href="https://buffer.com" target="_blank" className="text-orange-400 underline">Buffer</a>, <a href="https://hootsuite.com" target="_blank" className="text-orange-400 underline">Hootsuite</a>, and <a href="https://www.canva.com/" target="_blank" className="text-orange-400 underline">Canva</a>. See social success stories at <a href="https://sproutsocial.com/insights/social-media-case-studies/" target="_blank" className="text-orange-400 underline">Sprout Social</a>.
            </p>
          </div>
          <img
            src="https://www.postplanner.com/hubfs/Best%20Social%20Media%20Management%20Tools.jpg"
            alt="Social media planning"
            className="rounded-xl md:w-1/2"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <img
            src="https://gingersauce.co/wp-content/uploads/2021/03/pasted-image-0-1-3-1024x683.png"
            alt="Graphic design tools"
            className="rounded-xl md:w-1/2"
          />
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Graphic Design & Brand Identity</h2>
            <p>
              Visuals speak louder than words. We create scroll-stopping graphics using <a href="https://www.adobe.com/creativecloud.html" target="_blank" className="text-orange-400 underline">Adobe Creative Cloud</a>, <a href="https://figma.com" target="_blank" className="text-orange-400 underline">Figma</a>, and <a href="https://www.canva.com/" target="_blank" className="text-orange-400 underline">Canva</a>. Learn what makes a strong brand at <a href="https://99designs.com/blog/branding/brand-identity/" target="_blank" className="text-orange-400 underline">99Designs</a>.
            </p>
          </div>
        </div>

        <div className="text-center space-y-4">
          <h2 className="text-2xl font-semibold">Success Stories</h2>
          <img
            src="https://dailyinspiredlife.com/wp-content/uploads/2022/03/inspirational-success-stories.jpg"
            alt="Team celebrating success"
            className="rounded-xl w-full max-w-2xl mx-auto"
          />
          <p>
            From doubling revenue to improving brand engagement, our work has transformed businesses. See what our clients say on 
            <a href="https://www.clutch.co/agencies/digital-marketing" target="_blank" className="text-orange-400 underline">Clutch</a> or browse our 
            <a href="/case-studies" className="text-orange-400 underline">Case Studies</a>, 
            
          </p>
        </div>

        <div className="bg-orange-500 text-white p-6 rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">Let’s Grow Your Brand Online</h3>
          <p>
            Partner with us to unlock a creative, data-driven marketing experience tailored to your goals.
          </p>
        </div>
      </div>
      <div>
        < Articles />
      </div>
    </section>
    
  );
};

export default GrowBusiness;
