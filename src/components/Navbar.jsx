import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Button from './Button';
import { Menu, X } from 'lucide-react';


// navigation links
const navLinks = [
     {
        path: "/",
        label: "Home"
      },
       {
        path: "/about",
        label: "About Us"
      },
       {
        path: "/services",
        label: "Services"
      },
     
       {
        path: "/contact",
        label: "Contact"
      },
]

const Navbar = () => {

  const [nav, setNav] = useState(false);

  // function to toggle mobile menu
  const toggleNav = () => {
    setNav(!nav);
  }


  return (
    <nav className="w-full h-16 border-b border-neutral-800 sticky top-0 left-0 right-0 z-40 backdrop-blur-sm">

      <div className="w-[90%] mx-auto flex justify-between h-full items-center ">
        <Link to="/" className='text-orange-600 text-2xl font-semibold'>
          Bookie
        </Link>

        <div className="flex items-center gap-8">
          <ul className="md:flex gap-6 hidden">
            {
              navLinks.map((link, index) => (
                <li key={index} className="hover:text-[#f97316] text-sm">
                    <NavLink 
                      to={link.path}
                      className={({isActive, isPending}) => (
                        isActive ? "active" : isPending ? "pending" : ""
                      ) }
                    >
                      {link.label}
                    </NavLink>
                </li>
              ))
            }
          </ul>
         <div className="hidden md:block">
          <Link to="/signup">
            <Button 
              label="SignUp"
            />
          </Link>
        </div>
          <button
            onClick={toggleNav}
            className="block md:hidden border p-[0.8] text-[#f97316] cursor-pointer rounded-sm"
          >
            {
              nav ? <X size={20} className="text-[#f97316]" /> : <Menu  size={20} className="text-[#f97316] " />
            }
          </button>
        </div>

      </div>

      {/* mobile menu */}
      {
        nav && (
            <div
            className="w-11/12 mt-8 max-h-[80vh] mx-auto flex flex-col items-center
              bg-black/70 backdrop-blur-2xl md:hidden rounded-xl py-8
              opacity-0 scale-95"
            style={{
              animation: "fadeInScale 0.4s ease forwards",
            }}
          >
            <ul className="md:hidden z-5 gap-6 flex flex-col justify-center items-center">
              {navLinks.map((link, index) => (
                <li key={index} className="hover:text-[#f97316] text-sm">
                  <NavLink
                    onClick={toggleNav}
                    to={link.path}
                    className={({ isActive, isPending }) =>
                      isActive ? "active" : isPending ? "pending" : ""
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="block md:hidden mt-4">
              <Link to="/signup">
                <Button
                  className="border border-neutral-800 px-6 py-2 rounded-md"
                  label="SignUp"
                />
              </Link>
            </div>
          </div>


        )
      }

    </nav>
  )
}

export default Navbar