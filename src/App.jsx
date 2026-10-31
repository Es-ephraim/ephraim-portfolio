import { useEffect } from 'react'
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import { MotionConfig, motion } from 'motion/react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function PageShell() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="pt-20"
    >
      <Outlet />
    </motion.main>
  )
}

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-slate-950">
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route element={<PageShell />}>
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Footer />
      </div>
    </MotionConfig>
  )
}

export default App