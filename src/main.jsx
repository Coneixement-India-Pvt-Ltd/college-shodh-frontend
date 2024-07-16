import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './component/Home/Home.jsx'
import Blogs from './component/Blogs/Blogs.jsx'
import Colleges from './component/Colleges/Colleges.jsx'
import Programs from './component/Programs/Programs.jsx'
import ContactUs from './component/ContactUs/ContactUs.jsx'
import AboutUs from './component/AboutUs/AboutUs.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="blogs" element={<Blogs />} />
      <Route path="colleges" element={<Colleges />} />
      <Route path="programs" element={<Programs />} />
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

