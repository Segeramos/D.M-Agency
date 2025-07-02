import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Services from './pages/Services.jsx';
import OptimizationPage from './pages/OptimizationPage.jsx';
import PPCAdvertisingPage from './pages/PPCAdvertisingPage.jsx';
import WebDesignDevelopmentPage from './pages/WebDesignDevelopmentPage.jsx';
import SocialMediaManagementPage from './pages/SocialMediaManagementPage.jsx';
import GrowBusiness from './pages/GrowBusiness.jsx';
import GraphicDesign from './pages/GraphicDesign.jsx';
import WhatsappBusinessIntegration from './pages/WhatsappBusinessIntegration.jsx';
import Error from './pages/Error.jsx';
import SignUp from './components/SignUp.jsx';

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
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/optimization-page",
        element: <OptimizationPage />
      },
      {
        path: "/pay-per-click-advertising-page",
        element: <PPCAdvertisingPage />
      },
      {
        path: "/social-media-management-page",
        element: <SocialMediaManagementPage />
      },
      {
        path: "/web-design-development-page",
        element: <WebDesignDevelopmentPage />
      },
      {
        path: "/grow-business",
        element: <GrowBusiness />
      },
      {
        path: "/graphic-design",
        element: <GraphicDesign />
      },
      {
        path: "/whats-app",
        element: <WhatsappBusinessIntegration />
      },
      {
        path: "*",
        element: <Error />
      },

      {
        path: "/signup",
        element: <SignUp />
      }
      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
