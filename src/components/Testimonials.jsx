import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Ronald Richards",
    title: "Ethical Hacker",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    message:
      "Amet minim mollit non deserunt ullamco co est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.",
  },
  {
    id: 2,
    name: "Marvin McKinney",
    title: "Team Leader",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    message:
      "Amet minim mollit non deserunt ullamco co est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.",
  },
  {
    id: 3,
    name: "Ralph Edwards",
    title: "Software Development Manager",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
    message:
      "Amet minim mollit non deserunt ullamco co est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.",
  },
  // Additional testimonials
  {
    id: 4,
    name: "Esther Howard",
    title: "Product Designer",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    message:
      "Extra testimonial: Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
  },
  {
    id: 5,
    name: "Courtney Henry",
    title: "Marketing Specialist",
    image: "https://randomuser.me/api/portraits/women/46.jpg",
    message:
      "Extra testimonial: Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.",
  },
  {
    id: 6,
    name: "Dianne Russell",
    title: "CEO",
    image: "https://randomuser.me/api/portraits/women/47.jpg",
    message:
      "Extra testimonial: Duis enim velit mollit. Exercitation veniam consequat.",
  },
];

export default function Testimonials() {
  const [showAll, setShowAll] = useState(false);

  const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, 3);

  return (
    <section className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column */}
        <div>
          <span className="inline-block bg-gradient-to-r from-orange-500 to-orange-300 text-green-900 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            HAPPY CLIENTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What Customers say about Bookie services
          </h2>
          <p className="text-white mb-8">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          </p>
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-sm font-medium text-white border-b border-gray-300 pb-0.5 hover:border-gray-500 transition cursor-pointer"
          >
            {showAll ? "Show fewer reviews" : "More reviews"}
          </button>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {displayedTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex flex-col space-y-4">
              <p className="text-white">
                “{testimonial.message}”
              </p>
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-orange-500">{testimonial.name}</p>
                  <p className="text-sm text-orange-500">{testimonial.title}</p>
                </div>
              </div>
              <hr className="border-gray-200" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
