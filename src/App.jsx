import React from 'react'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'
import { BrowserRouter, Routes, Route } from 'react-router'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={< Home/>}></Route>
       <Route path='/about-us' element={< AboutUs/>}></Route>
        <Route path='/contact-us' element={< ContactUs/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App