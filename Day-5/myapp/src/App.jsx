import React from 'react'
import './App.css'


import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import CardSection from './components/CardSection'
const App = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <CardSection/>
        <Footer/>
    </div>
  )
}

export default App