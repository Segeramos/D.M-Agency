import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import OurWork from './pages/OurWork.jsx';
import Contact from './pages/Contact.jsx';
import Services from './pages/Services.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
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
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
