import { ArrowDown, ArrowUpRight, Download } from 'lucide-react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

const highlights = [
  { label: 'IT SUPPORT', value: '01' },
  { label: 'NETWORKING', value: '02' },
  { label: 'DEVELOPMENT', value: '03' },
]

function Hero() {
  return (
    <section className="hero-grid relative flex min-h-[92svh] items-center overflow-hidden px-6 pb-16 pt-28 text-[var(--text-primary)] transition-colors duration-300 sm:px-10 lg:px-16">
      <div className="hero-glow pointer-events-none absolute -right-40 top-10 h-[500px] w-[500px] rounded-full" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">

        {/* Hero Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent-color)]">
            IT Support · Networking · Software
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl xl:text-[5.5rem]">
            I build, support
            <br />
            and connect
            <br />
            <span className="gradient-text">technology.</span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
            I'm Ephraim Munene Kithinji, an IT professional interested in
            solving technical problems, building practical software and
            making technology work better for people and businesses.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-3 rounded-full bg-[var(--accent-color)] px-7 py-4 text-sm font-bold text-slate-950 transition hover:brightness-110"
            >
              Explore my work
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>

            <a
              href={`${import.meta.env.BASE_URL}Ephraim Munene CV.pdf`}
              download="Ephraim Munene CV.pdf"
              className="inline-flex items-center gap-3 rounded-full border border-[var(--border-color)] px-7 py-4 text-sm font-semibold text-[var(--text-primary)] transition hover:border-[var(--accent-color)] hover:text-[var(--accent-color)]"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-5 text-sm text-[var(--text-secondary)]">
            <span>Nairobi, Kenya</span>
            <span className="opacity-50">/</span>
            <span>Information Technology</span>
            <span className="opacity-50">/</span>

            <a
              href="https://github.com/Es-ephraim"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-[var(--accent-color)]"
            >
              <span className="font-bold">GH</span>
              GitHub
            </a>
          </div>
        </motion.div>

        {/* Abstract Technology Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md lg:ml-auto"
        >
          {/* Decorative outer rings */}
          <div className="absolute -inset-6 rounded-[2rem] border border-[var(--accent-color)]/10" />
          <div className="absolute -inset-12 rounded-[3rem] border border-[var(--border-color)]" />

          {/* Light theme ambient glow */}
          <div className="hero-card-glow pointer-events-none absolute -inset-8 rounded-[3rem]" />

          {/* Main Profile Card */}
          <div className="hero-profile-card light-glass relative overflow-hidden rounded-3xl border border-[var(--border-color)] bg-[var(--surface-bg)] p-6 shadow-2xl transition-all duration-500 hover:-translate-y-1 sm:p-8">

            {/* Card Header */}
            <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-color)]">
                  Technology profile
                </p>

                <p className="mt-2 text-sm text-[var(--text-secondary)]">
                  A little about what I do.
                </p>
              </div>

              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-red-400/70" />
                <span className="h-2 w-2 rounded-full bg-amber-400/70" />
                <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
              </div>
            </div>

            {/* Card Content */}
            <div className="py-9">

              {/* Profile Identity */}
              <div className="mb-8 flex items-center gap-5">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-[var(--accent-color)]/20 bg-[var(--accent-color)]/10">
                  <span
                    className="text-4xl font-bold text-[var(--accent-color)]"
                    style={{ fontFamily: "'Dancing Script', cursive" }}
                  >
                    Eph
                  </span>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[var(--text-primary)]">
                    Ephraim Munene
                  </h2>

                  <p className="mt-1 text-sm text-[var(--text-secondary)]">
                    IT Professional
                  </p>
                </div>
              </div>

              {/* Professional Highlights */}
              <div className="space-y-5">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.value}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.15 }}
                    className="flex items-center justify-between border-b border-[var(--border-color)] pb-4"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs text-[var(--accent-color)]">
                        {item.value}
                      </span>

                      <span className="text-sm font-medium tracking-wider text-[var(--text-primary)]">
                        {item.label}
                      </span>
                    </div>

                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-color)]" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Current Focus */}
            <div className="flex items-center justify-between rounded-xl border border-[var(--border-color)] bg-[var(--surface-secondary)] p-4">
              <div>
                <p className="text-xs text-[var(--text-secondary)]">
                  Current focus
                </p>

                <p className="mt-1 text-sm font-semibold text-[var(--text-primary)]">
                  Building practical solutions
                </p>
              </div>

              <span className="font-mono text-xs text-[var(--accent-color)]">
                01 / 03
              </span>
            </div>
          </div>

          {/* Floating Location Badge */}
          <div className="hero-location-card light-glass absolute -bottom-7 -right-5 hidden rounded-2xl border border-[var(--border-color)] bg-[var(--surface-bg)] p-4 shadow-xl sm:block">
            <p className="text-xs text-[var(--text-secondary)]">
              Based in
            </p>

            <p className="mt-1 text-sm font-semibold text-[var(--text-primary)]">
              Nairobi, Kenya
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#selected-work"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)] transition hover:text-[var(--accent-color)] md:flex"
      >
        Scroll to explore
        <ArrowDown className="h-4 w-4" />
      </a>
    </section>
  )
}

export default Hero