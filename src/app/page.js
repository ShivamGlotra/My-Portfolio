'use client'

import { useState } from 'react'
import styles from './navigation/navigation.css'

// Import individual pages
import About from './navigation/about'
import Career from './navigation/career'
import Interests from './navigation/interest'
import Goals from './navigation/goals'
import Projects from './navigation/projects'

export default function Home() {
  // State to control which section is active
  const [activeSection, setActiveSection] = useState('about')

  // Map the active section to the corresponding component
  const sections = {
    about: <About />,
    career: <Career />,
    interests: <Interests />,
    goals: <Goals />,
    projects: <Projects />,
  }

  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li>
            <button onClick={() => setActiveSection('about')}>About Me</button>
          </li>
          <li>
            <button onClick={() => setActiveSection('career')}>Career</button>
          </li>
          <li>
            <button onClick={() => setActiveSection('interests')}>Interests</button>
          </li>
          <li>
            <button onClick={() => setActiveSection('goals')}>Goals</button>
          </li>
          <li>
            <button onClick={() => setActiveSection('projects')}>Projects</button>
          </li>
        </ul>
      </nav>

      {/* Display the active section */}
      <section className="section">
        {sections[activeSection]}
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Shivam Glotra. All rights reserved.</p>
      </footer>
    </div>
  )
}
