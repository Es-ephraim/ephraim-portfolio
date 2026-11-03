import { ArrowUp, Heart } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/skills' },
    { name: 'Experience', href: '/experience' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--page-bg)] transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">

          {/* Brand */}
          <div>
            <Link
              to="/"
              className="text-2xl font-bold text-[var(--text-primary)]"
            >
              Ephraim<span className="text-[var(--accent-color)]">.</span>
            </Link>

            <p className="mt-3 max-w-sm text-sm leading-6 text-[var(--text-secondary)]">
              IT Support & Networking professional passionate about
              building reliable technology solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-[var(--text-primary)]">
              Quick Links
            </h3>

            <div className="flex flex-wrap gap-x-5 gap-y-3">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm text-[var(--text-secondary)] transition-colors duration-300 hover:text-[var(--accent-color)]"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-[var(--text-primary)]">
              Connect
            </h3>

            <div className="flex gap-3">
              <a
                href="https://github.com/Es-ephraim"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-xl border border-[var(--border-color)] p-3 text-[var(--text-secondary)] transition-all duration-300 hover:border-[var(--accent-color)] hover:text-[var(--accent-color)]"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/ephraim-munene-ab3321369/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-xl border border-[var(--border-color)] p-3 text-[var(--text-secondary)] transition-all duration-300 hover:border-[var(--accent-color)] hover:text-[var(--accent-color)]"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-[var(--border-color)] pt-6 text-center sm:flex-row">

          <p className="text-sm text-[var(--text-secondary)]">
            © {currentYear} Ephraim Munene. All rights reserved.
          </p>

          {/* Back to Top */}
          <button
            onClick={() =>
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }
            aria-label="Back to top"
            className="rounded-full border border-[var(--border-color)] p-3 text-[var(--text-secondary)] transition-all duration-300 hover:border-[var(--accent-color)] hover:text-[var(--accent-color)]"
          >
            <ArrowUp size={18} />
          </button>

        </div>
      </div>
    </footer>
  )
}

export default Footer