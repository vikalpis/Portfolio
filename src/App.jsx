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
import Resume from './components/Resume'
import ParticlesComponent from './components/Particle'

function App() {
 

  return (
    <>
    <div className='relative overflow-hidden min-h-screen scroll-smooth'>
    
    <Container>
      <Navbar/>
      <Hero/>
      {/* <Resume/> */}
      <Skills/>
      <Project/>
      <Blog/>
      <Footer/>
    </Container>
    {/* <BreathingBackground/> */}
    <ParticlesComponent/>
</div>
    </>
  )
}

export default App
