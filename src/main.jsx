import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './component/Home/Home.jsx'
import BlogPage from './component/BlogPage/BlogPage.jsx'
import Colleges from './component/Colleges/Colleges.jsx'
import ContactUs from './component/ContactUs/ContactUs.jsx'
import AboutUs from './component/AboutUs/AboutUs.jsx'
import BlogDetails from './component/BlogPage/BlogDetails/BlogDetails.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="blogs" element={<BlogPage />} />
      <Route path="/blogdetails" element={<BlogDetails />} />
      <Route path="colleges" element={<Colleges />} />
      <Route path="contact" element={<ContactUs />} />
      <Route path="about" element={<AboutUs />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

