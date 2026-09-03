import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
  ]

  const handleNavigation = (href) => {
    setIsOpen(false)

    setTimeout(() => {
      const section = document.querySelector(href)

      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    }, 100)
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: 'easeOut',
      }}
      className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          whileHover={{ scale: 1.05 }}
          className="text-xl font-bold text-white"
        >
          Eph<span className="text-cyan-400">.</span>
        </motion.a>

        {/* Desktop Navigation */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.25,
              },
            },
          }}
          className="hidden items-center gap-8 md:flex"
        >
          {links.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              variants={{
                hidden: {
                  opacity: 0,
                  y: -10,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.4,
                  },
                },
              }}
              whileHover={{ y: -2 }}
              className="text-sm text-slate-300 transition hover:text-cyan-400"
            >
              {link.name}
            </motion.a>
          ))}

          {/* Contact */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.65,
            }}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="rounded-full border border-cyan-400 px-5 py-2 text-sm text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950"
          >
            Contact
          </motion.a>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center rounded-lg p-2 text-slate-300 transition hover:text-cyan-400 md:hidden"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-6 w-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="h-6 w-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-white/10 bg-slate-950/95 md:hidden"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
              }}
              className="flex flex-col px-6 py-5"
            >

              {links.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => handleNavigation(link.href)}
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: -20,
                    },
                    visible: {
                      opacity: 1,
                      x: 0,
                    },
                  }}
                  transition={{ duration: 0.3 }}
                  className="border-b border-white/5 py-4 text-left text-slate-300 transition hover:text-cyan-400"
                >
                  {link.name}
                </motion.button>
              ))}

              <motion.button
                onClick={() => handleNavigation('#contact')}
                variants={{
                  hidden: {
                    opacity: 0,
                    x: -20,
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                  },
                }}
                transition={{ duration: 0.3 }}
                className="mt-4 rounded-full border border-cyan-400 px-5 py-3 text-center text-sm font-medium text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950"
              >
                Contact
              </motion.button>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>
  )
}

export default Navbar