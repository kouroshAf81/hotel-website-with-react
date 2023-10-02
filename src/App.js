import React from 'react'
import  './App.css' 
import { Navbar } from './common/Navbar/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/about/About'
import Gallery from './components/gallery/Gallery'
import Destionations from './components/Destinations/Home'
import SinglePage from './SinglePage/SinglePage'
import Blog from './components/blog/Blog'
import BlogSingle from './components/blog/blog-single-page/BlogSingle'
import Testimonial from './components/testimonial/Testimonial'
import Contact from './components/contact/Contact'
import Login from './components/login/Login'
import Register from './components/login/Register'
import Footer from './common/footer/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/'  element={<Home />}></Route>
        <Route path='/about'  element={<About />}></Route>
        <Route path='/gallery'  element={<Gallery />}></Route>
        <Route path='/destinations' element={<Destionations />}></Route>
        <Route path='/singlepage/:id' element={<SinglePage />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='//blogsingle/:id' element={<BlogSingle />}></Route>
        <Route path='/testimonial' element={<Testimonial />}></Route>
        <Route path='/testimonial' element={<Testimonial />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/sign-in' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
