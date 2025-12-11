'use client'

import { useState, useEffect } from 'react'
import styles from './navigation/navigation.css'
import '../styles/footer.css'


// Import individual pages
import About from './navigation/about'
import Career from './navigation/career'
import Interests from './navigation/interest'
import Goals from './navigation/goals'
import Projects from './navigation/projects'
import LandingPage from './navigation/LandingPage'

export default function Home() {
  // State to control which section is active
  const [activeSection, setActiveSection] = useState('LandingPage')
  const [showNavbar, setShowNavbar] = useState(true)

  useEffect(() => {
    let lastScrollY = typeof window !== 'undefined' ? window.scrollY : 0

    function onScroll() {
      const currentY = window.scrollY
      if (currentY > lastScrollY && currentY > 60) {
        // scrolling down
        setShowNavbar(false)
      } else {
        // scrolling up
        setShowNavbar(true)
      }
      lastScrollY = currentY
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Map the active section to the corresponding component
  const sections = {
    LandingPage: <LandingPage onProceed={() => setActiveSection('about')} />,
    about: <About />,
    career: <Career />,
    interests: <Interests />,
    goals: <Goals />,
    projects: <Projects />,
  }

  return (
    <div className="container">
      {/* Navbar */}
      <nav className={`navbar ${showNavbar ? 'navbar-visible' : 'navbar-hidden'}`}>
        <ul>
          <li>
            <button onClick={() => setActiveSection('LandingPage')}>Home</button>
          </li>
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
      <div className="social-icons" aria-hidden="false" style={{paddingLeft:"40%"}}>
            <a
              href="https://github.com/ShivamGlotra/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="icon"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.96 3.22 9.17 7.69 10.65.56.1.77-.24.77-.54 0-.27-.01-1-.02-1.95-3.13.68-3.79-1.51-3.79-1.51-.51-1.3-1.26-1.65-1.26-1.65-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.73 2.65 1.23 3.3.94.1-.74.4-1.23.73-1.52-2.5-.28-5.12-1.25-5.12-5.56 0-1.23.44-2.23 1.16-3.02-.12-.28-.5-1.41.11-2.94 0 0 .95-.31 3.12 1.15.9-.25 1.86-.38 2.82-.38.96 0 1.92.13 2.82.38 2.17-1.46 3.12-1.15 3.12-1.15.61 1.53.23 2.66.11 2.94.72.79 1.16 1.79 1.16 3.02 0 4.32-2.62 5.27-5.12 5.55.41.35.77 1.03.77 2.08 0 1.5-.01 2.71-.01 3.08 0 .3.21.65.78.54C20.03 20.92 23.25 16.71 23.25 11.75 23.25 5.48 18.27.5 12 .5z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/shivam-glotra-86a62318b/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="icon"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.49 6S0 4.88 0 3.5 1.12 1 2.49 1s2.49 1.12 2.49 2.5zM.2 8.9h4.56V24H.2V8.9zM8.98 8.9h4.38v2.08h.06c.61-1.16 2.11-2.38 4.35-2.38 4.66 0 5.52 3.06 5.52 7.04V24h-4.56v-6.58c0-1.57-.03-3.6-2.19-3.6-2.2 0-2.53 1.71-2.53 3.48V24H8.98V8.9z" />
              </svg>
            </a>
          </div>
      <p>
        &copy; 2025 <a href="/">My Portfolio</a>. All rights reserved.
      </p>
      <div className="credit">
        Designed and developed by <a href="https://yourportfolio.com" target="_blank">Shivam Glotra</a>
      </div>      </footer>
    </div>
  )
}
