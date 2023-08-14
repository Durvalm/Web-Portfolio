import './App.css'

import { Navbar } from './components/Navbar'
import { Home } from './components/Home'
import { About } from './components/About'
import { Project } from './components/Project'

export function App() {

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Project />
    </div>
  )
}

