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
    <footer className="border-t border-white/10 bg-[#070b14]">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">

          <div>
            <Link to="/" className="text-2xl font-bold text-white">
              Ephraim<span className="text-cyan-400">.</span>
            </Link>

            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">
              IT Support & Networking professional passionate about
              building reliable technology solutions.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">
              Quick Links
            </h3>

            <div className="flex flex-wrap gap-x-5 gap-y-3">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm text-slate-400 transition hover:text-cyan-400"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">
              Connect
            </h3>

            <div className="flex gap-3">
              <a
                href="https://github.com/Es-ephraim"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="rounded-xl border border-white/10 p-3 text-slate-400 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/ephraim-munene-ab3321369/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="rounded-xl border border-white/10 p-3 text-slate-400 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-6 text-center sm:flex-row">

          <p className="text-sm text-slate-500">
            © {currentYear} Ephraim Munene. All rights reserved.
          </p>

          <p className="flex items-center gap-2 text-sm text-slate-500">
            Built with <Heart size={14} className="text-red-400" /> using React
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="rounded-full border border-white/10 p-3 text-slate-400 transition hover:border-cyan-400 hover:text-cyan-400"
          >
            <ArrowUp size={18} />
          </button>

        </div>
      </div>
    </footer>
  )
}

export default Footer