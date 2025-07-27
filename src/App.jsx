import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Container from './components/conatiner'
import Skills from './components/Skills'
import Project from './components/Project'

function App() {
 

  return (
    <>
    <Container>
      <Navbar/>
      <Hero/>
      <Skills/>
      <Project/>
    </Container>

    </>
  )
}

export default App
