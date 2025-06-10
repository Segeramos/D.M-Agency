import React from 'react'


const navItems = [
    {
        path: "/",
        name  : 'Home'
      },
       {
        path: "/about",
        element: <About />
      },
       {
        path: "/services",
        element: <Services />
      },
       {
        path: "/ourWork",
        element: <OurWork />
      },
       {
        path: "/contact",
        element: <Contact />
      },
]

const Navbar = () => {
  return (
    <div>Navbar</div> 
  )
}

export default Navbar