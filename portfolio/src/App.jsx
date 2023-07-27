import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { Home } from './components/Home'
import { About } from './components/About'

export function App() {

  return (
    <div>
      <Navbar />
      <Home />
      <About />
    </div>
  )
}

