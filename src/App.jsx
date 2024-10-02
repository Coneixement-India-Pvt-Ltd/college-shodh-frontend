import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import BlogPage from './pages/BlogPage.jsx'
import Colleges from './pages/Colleges.jsx'
import ContactUs from './pages/ContactUs.jsx'
import AboutUs from './pages/AboutUs.jsx'
import BlogDetails from './component/BlogPage/BlogDetails/BlogDetails.jsx'
import HomePage from './pages/HomePage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<HomePage />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="colleges" element={<Colleges />} />
      <Route path="blogs" element={<BlogPage />} />
      <Route path="/blogdetails" element={<BlogDetails />} />
      <Route path="contact" element={<ContactUs />} />
    </Route>
  )
)

function App() {
  
  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
