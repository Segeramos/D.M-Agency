// import React, { useEffect, useState } from 'react';
// import ourService from '../assets/images/services.jpg';
// import Banner from '../components/Banner';
// import { Link } from 'react-router-dom';
// import { MoveRight } from 'lucide-react';

// const Services = () => {
//   const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch('http://localhost:1337/api/service-cards?populate=*')
//       .then((res) => res.json())
//       .then((data) => {
//         setServices(data.data || data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error('Error fetching services:', err);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <section className="w-full">
//       {/* Banner */}
//       <Banner
//         image={ourService}
//         alt="Our services image"
//         content="Services That Drive Real Business Growth"
//         subContent="From boosting visibility to increasing conversions, we offer everything you need to grow your brand online—strategically, efficiently, and affordably."
//       />

//       {/* Section Heading */}
//       <div className="w-[80%] mx-auto pt-14 flex items-center">
//         <div className="border-l border-orange-700 bg-orange-700 w-2 h-6" />
//         <p className="ml-2">Our Services</p>
//       </div>

//       {/* Loading State */}
//       {loading && <p className="text-center py-10">Loading services...</p>}

//       {/* Service Cards */}
//       <div className="w-[80%] mx-auto py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-12">
//         {services.map((item) => {
//           if (!item) return null;
//           const { id, Name, Decription, image } = item;
//           const img = Array.isArray(image) && image[0];
//           let imageUrl = null;
//           if (img) {
//             imageUrl = img.formats?.thumbnail?.url
//               ? `http://localhost:1337${img.formats.thumbnail.url}`
//               : `http://localhost:1337${img.url}`;
//           }

//           return (
//             <div
//               key={id}
//               className="max-w-sm rounded overflow-hidden shadow-lg border border-neutral-900 group"
//             >
//               {imageUrl ? (
//                 <img
//                   className="w-full group-hover:scale-110 delay-200 ease-in-out transition-all"
//                   src={imageUrl}
//                   alt={Name || 'Service image'}
//                 />
//               ) : (
//                 <div className="w-full h-48 bg-neutral-800 flex items-center justify-center text-sm text-neutral-400">
//                   No Image
//                 </div>
//               )}
//               <div className="px-6 py-4">
//                 <div className="font-bold text-xl mb-2">{Name || 'No title'}</div>
//                 <p className="text-gray-300 text-sm">
//                   {Decription || 'No description available.'}
//                 </p>
//               </div>
//               <div className="px-6 pt-4 pb-2">
//                 <Link to="#">
//                   <button className="px-8 py-3 rounded-md bg-orange-700 flex gap-2 items-center cursor-pointer hover:bg-orange-600">
//                     Learn More
//                     <MoveRight />
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default Services;


import React from 'react';
import ourService from '../assets/images/services.jpg';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { MoveRight } from 'lucide-react';
import { serviceItems } from '../constants/index'


const Services = () => {
  return (
    <section className="w-full">
      <Banner
        image={ourService}
        alt="Our services image"
        content="Services That Drive Real Business Growth"
        subContent="From boosting visibility to increasing conversions, we offer everything you need to grow your brand online—strategically, efficiently, and affordably."
      />

      <div className="w-[80%] mx-auto pt-14 flex items-center">
        <div 
          className="border-l border-orange-700 bg-orange-700 w-2 h-6"
        />
        <p className="ml-2">
          Our Services
        </p>
      </div>

      <div className="w-[80%] mx-auto py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-12 ">
        
        {
          serviceItems.map((item) => (
            <div 
              key={item.id}
              class="max-w-sm rounded overflow-hidden shadow-lg border border-neutral-900 group"
            >
              <img 
                className="w-full group-hover:scale-110 delay-200 ease-in-out transition-all" 
                src={item.image}
                alt="Seo image"
              />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">
                  {item.title}
                </div>
                <p class="text-gray-300 text-sm">
                  {item.desc}
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <Link to={item.path}>
                  <button className="px-8 py-3 rounded-md bg-orange-700 flex gap-2 items-center cursor-pointer hover:bg-orange-600">
                    Learn More
                    <MoveRight />
                  </button>
                </Link>
              </div>
            </div>

          ))
        }

      </div>



     
   
  

    </section>
  )
}

export default Services