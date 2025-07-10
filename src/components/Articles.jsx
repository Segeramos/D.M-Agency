import React from "react";

const articles = [
  {
    image: "https://static.semrush.com/blog/uploads/media/20/03/2003ccb9fc4ee1bbbd399d8ddf426ceb/5821a24e5e9b24fc74124d01a669df7c/AD_4nXdwmNZb0PKAA-elG3DM7VgIzLHffzSvEtk38zJAJ1gK_cKWfpVawwelrjsgmo1vkmakwN_-unqTDaVxcxE2dmvVoHJN8ehcTifY042NzaUdysz8mWERAXunft8St0CJb5KSxsL_qg.webp",
    category: "DIGITAL MARKETING • PPC/SEO",
    title: "What Is PPC? A Starter Guide to Pay-Per-Click Marketing",
    author: {
      name: " Hava Salsi",
      avatar: "",
    },
    description:
      "Pay-per-click (PPC) marketing is a type of digital advertising that involves paying a fee each time someone clicks on your ads. ",
    readTime: "14 min read",
    views: "4.9K Reads",
    date: "Jun 18, 2025",
    link: "https://www.semrush.com/blog/what-is-ppc/",
  },
  {
    image: "https://media.geeksforgeeks.org/wp-content/uploads/20240124121809/on-page-seo.jpeg",
    category: "DIGITAL MARKETING • ON-PAGE SEO",
    title: "On-page SEO",
    author: {
      name: "Vlado Pavlik & Others",
      avatar: "",
    },
    description:
      "On-page SEO is the key to making your web pages more relevant and user-friendly for both users and search engines. Learn how to apply the latest techniques, tools, and best practices from the top on-page SEO experts",
    readTime: "6 min read",
    views: "3.2K Reads",
    date: "Jun 19, 2025",
    link: "https://www.semrush.com/blog/category/seo/on-page-seo/",
  },
  {
    image: "https://media.licdn.com/dms/image/v2/D5612AQHRy_D0vBUIcg/article-cover_image-shrink_720_1280/B56ZUCzF.EGUAI-/0/1739508706794?e=2147483647&v=beta&t=DymPup_fvQeGJc2yjMd0JTsVAuMwwYtT-FqGybFQh0g",
    category: "THOUGHT LEADERSHIP • AI ETHICS",
    title: "The Ethics of AI: Navigating Content Ownership in the Age of LLMs",
    author: {
      name: "Dr. Meera Patel",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    description:
      "As AI tools scrape data from millions of sites, who really owns the output? Experts weigh in on consent and transparency.",
    readTime: "7 min read",
    views: "2.8K Reads",
    date: "Jun 16, 2025",
    link: "https://example.com/ai-ethics-ownership",
  },
  {
    image: "https://www.searchenginejournal.com/wp-content/uploads/2023/08/sos-2024-generativeai-featured-image-64eda220ca322-sej.jpg",
    category: "SEO • AI STRATEGY",
    title: "AI-Powered Search Trends to Watch in Late 2025",
    author: {
      name: "Jason Chow",
      avatar: "https://randomuser.me/api/portraits/men/52.jpg",
    },
    description:
      "From AI summaries to multimodal SERPs, here are five shifts in how users will discover content through search engines.",
    readTime: "5 min read",
    views: "6.1K Reads",
    date: "Jun 14, 2025",
    link: "https://www.searchenginejournal.com/state-of-seo/",
  },
  {
    image: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/674b5421dd188bc887300d71_Web%20%26%20App%20dev.jpg",
    category: "WEB DEV • PERFORMANCE",
    title: "Top 10 Tips to Improve Core Web Vitals in 2025",
    author: {
      name: "Amber Lin",
      avatar: "https://randomuser.me/api/portraits/women/25.jpg",
    },
    description:
      "Want a faster site? Discover best practices to boost LCP, FID, and CLS with minimal coding adjustments.",
    readTime: "4 min read",
    views: "5.4K Reads",
    date: "Jun 13, 2025",
    link: "https://example.com/core-web-vitals-2025",
  },
  {
    image: "https://dandelionbranding.com/wp-content/uploads/2022/09/4-1024x788.png",
    category: "MARKETING • STRATEGY",
    title: "5 Top Tips For Improving Your Google Core Web Vitals",
    author: {
      name: "Courtney Hume",
      avatar: "https://dandelionbranding.com/wp-content/uploads/2022/09/4-1024x788.png",
    },
    description:
      "AI-powered engines focus more on contextual relevance than keywords. Here's how content creators should adapt in 2025.",
    readTime: "12 Minutes watch",
    views: "4.6K Reads",
    date: "Jun 12, 2025",
    link: "https://www.youtube.com/watch?v=RuYSz88JDA8",
  },
];

const Articles = () => {
  return (
    <section className="py-16 px-6 bg-black mt-8">
      <h2 className="text-4xl font-extrabold text-center text-orange-500 mb-14 tracking-tight">
        Explore the Smart Side of Digital
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {articles.map((article, idx) => (
          <a
            key={idx}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-orange-50 rounded-2xl shadow-md hover:bg-orange-100 hover:shadow-amber-400 transition duration-300 ease-in-out border border-gray-100"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-52 object-cover rounded-t-2xl"
            />
            <div className="p-5 space-y-4">
              <p className="text-xs font-semibold uppercase text-green-600 tracking-wider">
                {article.category}
              </p>
              <h3 className="text-lg font-semibold text-gray-900 leading-snug group-hover:text-orange-500">
                {article.title}
              </h3>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-7 h-7 rounded-full"
                />
                <span>By {article.author.name}</span>
              </div>
              <p className="text-sm text-gray-700">{article.description}</p>
              <div className="flex items-center text-xs text-gray-500 justify-between pt-2">
                <span>{article.readTime}</span>
                <span>{article.views}</span>
                <span>{article.date}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Articles;
