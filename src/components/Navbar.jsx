import { useEffect, useState } from 'react'
import {
Menu,
X,
ArrowUpRight,
Sun,
Moon,
} from 'lucide-react'

import {
motion,
AnimatePresence,
useScroll,
useMotionValueEvent,
} from 'motion/react'

import {
Link,
NavLink,
useLocation,
} from 'react-router-dom'

const links = [
{ name: 'Home', href: '/' },
{ name: 'About', href: '/about' },
{ name: 'Skills', href: '/skills' },
{ name: 'Experience', href: '/experience' },
{ name: 'Projects', href: '/projects' },
{ name: 'Contact', href: '/contact' },
]

// Theme Toggle
function ThemeToggle({ theme, onToggle }) {
return (
<button
type="button"
onClick={onToggle}
className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--surface-secondary)] text-[var(--text-primary)] transition hover:border-cyan-400 hover:text-cyan-400"
aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
> <AnimatePresence mode="wait" initial={false}>
{theme === 'dark' ? (
<motion.span
key="sun"
initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
animate={{ rotate: 0, opacity: 1, scale: 1 }}
exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
transition={{ duration: 0.2 }}
> <Sun className="h-4 w-4" />
</motion.span>
) : (
<motion.span
key="moon"
initial={{ rotate: 90, opacity: 0, scale: 0.7 }}
animate={{ rotate: 0, opacity: 1, scale: 1 }}
exit={{ rotate: -90, opacity: 0, scale: 0.7 }}
transition={{ duration: 0.2 }}
> <Moon className="h-4 w-4" />
</motion.span>
)} </AnimatePresence> </button>
)
}

function Navbar() {
const [isOpen, setIsOpen] = useState(false)
const [isVisible, setIsVisible] = useState(true)

const location = useLocation()
const { scrollY } = useScroll()

// Theme
const [theme, setTheme] = useState(
() => localStorage.getItem('portfolio-theme') || 'dark'
)

useEffect(() => {
document.documentElement.dataset.theme = theme
localStorage.setItem('portfolio-theme', theme)
}, [theme])

const toggleTheme = () => {
setTheme((current) =>
current === 'dark' ? 'light' : 'dark'
)
}

// Close mobile menu whenever the route changes.
useEffect(() => {
setIsOpen(false)
}, [location.pathname])

// Keep navbar visible when mobile menu is open.
useEffect(() => {
if (isOpen) {
setIsVisible(true)
}
}, [isOpen])

// Smart scroll behaviour.
useMotionValueEvent(scrollY, 'change', (current) => {
if (isOpen) {
setIsVisible(true)
return
}

// Always show near the top.
if (current < 80) {
  setIsVisible(true)
  return
}

const previous = scrollY.getPrevious() ?? 0
const difference = current - previous

// Ignore small movements to prevent flickering.
if (Math.abs(difference) < 3) return

// Scrolling down hides; scrolling up reveals.
setIsVisible(difference < 0)

})

// Close mobile menu with Escape.
useEffect(() => {
const handleKeyDown = (event) => {
if (event.key === 'Escape') {
setIsOpen(false)
}
}

window.addEventListener('keydown', handleKeyDown)

return () => {
  window.removeEventListener('keydown', handleKeyDown)
}

}, [])

const closeMenu = () => setIsOpen(false)

return (
<motion.div
initial={{ y: 0 }}
animate={{
y: isVisible ? 0 : -130,
}}
transition={{
duration: 0.35,
ease: [0.22, 1, 0.36, 1],
}}
className="fixed inset-x-0 top-0 z-[60] pointer-events-none"
>

  {/* Personal Signature */}
  <motion.div
    initial={{ opacity: 0, x: -15 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
    className="absolute left-5 top-5 z-[60] pointer-events-auto sm:left-8"
  >
    <Link
      to="/"
      onClick={closeMenu}
      className="brand-signature gradient-text"
      aria-label="Eph home"
    >
      Ephraim
    </Link>
  </motion.div>

  {/* Centred Navigation */}
  <div className="absolute left-0 right-0 top-4 z-50 flex justify-end px-4 pointer-events-none md:justify-center">

    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="navbar-glass relative w-full max-w-fit rounded-full border border-[var(--border-color)] shadow-xl shadow-black/10 backdrop-blur-2xl pointer-events-auto"
      style={{
        backgroundColor:
          'color-mix(in srgb, var(--page-bg) 82%, transparent)',
      }}
      aria-label="Main navigation"
    >

      <div className="flex items-center justify-between gap-3 px-3 py-2 sm:gap-5 sm:px-4">

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">

          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              end={link.href === '/'}
              className="relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-300 lg:px-4"
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-full bg-cyan-400/15 ring-1 ring-cyan-400/20"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}

                  <span
                    className={`relative z-10 ${
                      isActive
                        ? 'font-semibold text-cyan-400'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {link.name}
                  </span>
                </>
              )}
            </NavLink>
          ))}

        </div>

        {/* Desktop Theme Toggle */}
        <div className="hidden md:block">
          <ThemeToggle
            theme={theme}
            onToggle={toggleTheme}
          />
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">

          <ThemeToggle
            theme={theme}
            onToggle={toggleTheme}
          />

          <button
            type="button"
            onClick={() => setIsOpen((previous) => !previous)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--surface-secondary)] text-[var(--text-primary)] transition hover:border-cyan-400 hover:text-cyan-400"
            aria-label={
              isOpen
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            <AnimatePresence mode="wait" initial={false}>

              {isOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <X className="h-5 w-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.span>
              )}

            </AnimatePresence>
          </button>

        </div>

      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0, y: -8 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -8 }}
            transition={{
              duration: 0.25,
              ease: 'easeInOut',
            }}
            className="absolute left-0 right-0 top-full mt-3 overflow-hidden rounded-3xl border border-[var(--border-color)] shadow-2xl shadow-black/20 md:hidden"
            style={{
              backgroundColor: 'var(--surface-bg)',
            }}
          >

            <div className="flex flex-col p-3">

              {links.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <NavLink
                    to={link.href}
                    end={link.href === '/'}
                    onClick={closeMenu}
                    className="relative block rounded-xl px-4 py-3.5 text-sm font-medium transition-colors"
                  >
                    {({ isActive }) => (
                      <div
                        className={`flex items-center justify-between ${
                          isActive
                            ? 'text-cyan-400'
                            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                        }`}
                      >
                        {link.name}

                        {isActive && (
                          <motion.span
                            layoutId="mobileActiveNav"
                            className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                          />
                        )}
                      </div>
                    )}
                  </NavLink>
                </motion.div>
              ))}

              <div className="mt-2 border-t border-[var(--border-color)] pt-3">

                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
                >
                  Get in touch
                  <ArrowUpRight className="h-4 w-4" />
                </Link>

              </div>

            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>

  </div>

</motion.div>

)
}

export default Navbar
