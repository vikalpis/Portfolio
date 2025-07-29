import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Container from './components/conatiner'
import Skills from './components/Skills'
import Project from './components/Project'
import Footer from './components/Footer'
import Blog from './components/Blog'
import { motion } from 'motion/react'
import BreathingBackground from './components/Breathing'

function App() {
 

  return (
    <>
    <div className='relative overflow-hidden min-h-screen'>
    
    <Container>
      <Navbar/>
      <Hero/>
      <Skills/>
      <Project/>
      <Blog/>
      <Footer/>
    </Container>
    <BreathingBackground/>
</div>
    </>
  )
}

export default App
