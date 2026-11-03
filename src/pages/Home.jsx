import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Monitor,
  Network,
  ShieldCheck,
} from 'lucide-react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'

// Background glow — visible only in light mode
function LightModeGlow() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden dark:hidden"
    >
      {/* Top-right blue glow */}
      <div className="absolute -right-40 -top-40 h-[550px] w-[550px] rounded-full bg-blue-400/35 blur-[110px]" />

      {/* Bottom-left cyan glow */}
      <div className="absolute -bottom-48 -left-40 h-[500px] w-[500px] rounded-full bg-cyan-400/30 blur-[110px]" />

      {/* Central blue ambient glow */}
      <div className="absolute left-[35%] top-[40%] h-[400px] w-[400px] rounded-full bg-sky-400/25 blur-[120px]" />
    </div>
  )
}

const projects = [
  {
    number: '01',
    title: 'BiasharaBox',
    category: 'BUSINESS SOFTWARE',
    image: 'biasharabox-dashboard-laptop-preview.png',
    imageAlt: 'BiasharaBox dashboard displayed on a laptop',
    description:
      'A point-of-sale and inventory management application designed to help businesses manage sales, stock and customers.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    status: 'In development',
    icon: Monitor,
    accent: 'from-cyan-500/20 to-blue-500/5',
  },
  {
    number: '02',
    title: 'Find a Technician',
    category: 'MOBILE APPLICATION',
    image: 'find-a-technician-phone-preview.png',
    imageAlt: 'Find a Technician mobile application displayed on a smartphone',
    description:
      'A mobile platform being developed to connect customers with technicians and make technical services easier to find.',
    technologies: ['Flutter', 'Dart', 'Firebase'],
    status: 'In development',
    icon: Network,
    accent: 'from-violet-500/20 to-indigo-500/5',
  },
  {
    number: '03',
    title: 'TechHeroes Solutions',
    category: 'DESKTOP APPLICATION',
    image: 'techheroes-repair-dashboard-laptop-preview.png',
    imageAlt:
      'TechHeroes Solutions repair management dashboard displayed on a laptop',
    description:
      'A technology services project with a desktop application focused on customer and repair management.',
    technologies: ['Flutter', 'Dart', 'SQLite'],
    status: 'Development project',
    icon: Code2,
    accent: 'from-emerald-500/20 to-teal-500/5',
  },
]

const focusAreas = [
  {
    icon: Monitor,
    title: 'IT Support',
    description: 'Hardware, software and end-user technical support.',
  },
  {
    icon: Network,
    title: 'Networking',
    description: 'Network infrastructure and connectivity troubleshooting.',
  },
  {
    icon: ShieldCheck,
    title: 'Security Systems',
    description: 'CCTV, access control and security monitoring systems.',
  },
  {
    icon: Code2,
    title: 'Software Development',
    description: 'Building practical applications for everyday problems.',
  },
]

function Home() {
  return (
    <main>
      <Hero />

      {/* Selected work */}
      <section
        id="selected-work"
        className="section-grid relative isolate overflow-hidden bg-[var(--surface-secondary)] px-6 py-24 sm:px-10 lg:px-16"
      >
        <LightModeGlow />

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end"
          >
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-cyan-500">
                01 / Selected work
              </p>

              <h2 className="text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">
                Building ideas into
                <br />
                <span className="gradient-text">digital solutions.</span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-8 text-[var(--text-secondary)]">
                A collection of software projects focused on solving practical
                problems through technology, creativity and continuous learning.
              </p>
            </div>

            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-cyan-500 transition hover:text-cyan-400"
            >
              Explore all projects
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </motion.div>

          {/* Project Cards */}
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => {
              const Icon = project.icon

              return (
                <motion.article
                  key={project.number}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                  whileHover={{ y: -6 }}
                  className={`group overflow-hidden rounded-3xl border border-[var(--border-color)] bg-[var(--surface-bg)] transition-all duration-300 hover:border-cyan-400/30 ${
                    index === 0 ? 'lg:col-span-2' : ''
                  }`}
                >
                  {/* Project Image Preview */}
                  <div
                    className={`relative overflow-hidden bg-gradient-to-br ${project.accent} ${
                      index === 0 ? 'h-72 sm:h-80' : 'h-60 sm:h-72'
                    }`}
                  >
                    {/* Ambient background */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(8,145,178,0.09),transparent_65%)]" />

                    {/* Project icon — visible by default on desktop */}
                    <div className="absolute inset-0 z-10 flex items-center justify-center transition-all duration-500 ease-in-out opacity-0 md:opacity-100 md:group-hover:scale-110 md:group-hover:opacity-0">
                      <div className="flex h-28 w-28 items-center justify-center rounded-3xl border border-white/10 bg-black/20 backdrop-blur-sm">
                        <Icon className="h-14 w-14 text-cyan-500 md:text-white/70" />
                      </div>
                    </div>

                    {/* Project image — always visible on mobile, revealed on desktop hover */}
                    <img
                      src={`${import.meta.env.BASE_URL}images/${project.image}`}
                      alt={project.imageAlt}
                      loading="lazy"
                      className="absolute inset-0 z-10 h-full w-full object-cover object-center opacity-100 transition-all duration-700 ease-in-out md:scale-[1.04] md:opacity-0 md:group-hover:scale-100 md:group-hover:opacity-100"
                    />

                    {/* Project number and category */}
                    <div className="absolute left-6 top-6 z-20 flex items-center gap-3">
                      
                      
                      <span className="rounded-md bg-black/60 px-2 py-1 text-[10px] font-bold tracking-[0.2em] text-cyan-300 backdrop-blur-md">
                        {project.category}
                      </span>
                    </div>

                    {/* Project status */}
                    <span className="absolute bottom-5 right-6 z-20 rounded-full border border-white/20 bg-black/60 px-4 py-2 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                      {project.status}
                    </span>
                  </div>

                  {/* Project Information */}
                  <div className="p-7 sm:p-9">
                    <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
                      <div>
                        <h3 className="text-2xl font-bold text-[var(--text-primary)] transition group-hover:text-cyan-500 sm:text-3xl">
                          {project.title}
                        </h3>

                        <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--text-secondary)]">
                          {project.description}
                        </p>
                      </div>

                      <span className="hidden font-mono text-3xl text-[var(--text-secondary)]/30 sm:block">
                        {project.number}
                      </span>
                    </div>

                    {/* Technologies */}
                    <div className="mt-7 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-[var(--border-color)] bg-[var(--surface-secondary)] px-4 py-2 text-xs font-medium text-[var(--text-secondary)] transition hover:border-cyan-400/30 hover:text-cyan-500"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="mt-8 flex items-center justify-between border-t border-[var(--border-color)] pt-6">
                      <span className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--text-secondary)]">
                        Project overview
                      </span>

                      <Link
                        to="/projects"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-500 transition hover:text-cyan-400"
                      >
                        Explore
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technical focus */}
      <section className="relative isolate overflow-hidden bg-[var(--page-bg)] px-6 py-24 sm:px-10 lg:px-16">
        <LightModeGlow />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-14">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-cyan-500">
              02 / What I do
            </p>

            <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">
              Technology from the
              <span className="gradient-text"> ground up.</span>
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((area, index) => {
              const Icon = area.icon

              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface-bg)] p-6 transition hover:border-cyan-400/30"
                >
                  <Icon className="h-7 w-7 text-cyan-500" />

                  <h3 className="mt-6 text-lg font-bold text-[var(--text-primary)]">
                    {area.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                    {area.description}
                  </p>
                </motion.div>
              )
            })}
          </div>

          <div className="mt-12 flex justify-end">
            <Link
              to="/skills"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-500 transition hover:text-cyan-400"
            >
              Explore technical skills
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Experience preview */}
      <section className="relative isolate overflow-hidden bg-[var(--surface-secondary)] px-6 py-24 sm:px-10 lg:px-16">
        <LightModeGlow />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-cyan-500">
              03 / Experience
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">
              Learning by
              <br />
              <span className="gradient-text">doing.</span>
            </h2>

            <p className="mt-6 max-w-md leading-8 text-[var(--text-secondary)]">
              Practical experience supporting users, maintaining ICT
              equipment and working with business technology systems.
            </p>

            <Link
              to="/experience"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-500 transition hover:text-cyan-400"
            >
              View experience
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="space-y-5">
            <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface-bg)] p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-500">
                  2025
                </span>

                <span className="rounded-full border border-[var(--border-color)] px-3 py-1 text-xs text-[var(--text-secondary)]">
                  Networking & Security
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-bold text-[var(--text-primary)]">
                Horsebridge Network Systems E.A. Ltd
              </h3>

              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                ICT Systems Engineer
              </p>

              <p className="mt-5 leading-7 text-[var(--text-secondary)]">
                User support, Windows domain accounts, Microsoft 365,
                CCTV, access control and unified security monitoring.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface-bg)] p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-500">
                  2024
                </span>

                <span className="rounded-full border border-[var(--border-color)] px-3 py-1 text-xs text-[var(--text-secondary)]">
                  Corporate ICT Support
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-bold text-[var(--text-primary)]">
                National Cereals and Produce Board
              </h3>

              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                ICT Support Technician
              </p>

              <p className="mt-5 leading-7 text-[var(--text-secondary)]">
                End-user support, hardware and software troubleshooting,
                Microsoft 365 assistance and ICT equipment documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact call to action */}
      <section className="relative isolate overflow-hidden bg-[var(--page-bg)] px-6 py-24 sm:px-10 lg:px-16">
        <LightModeGlow />

        <div className="relative z-10 mx-auto max-w-7xl overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-[var(--surface-bg)] to-violet-500/10 p-8 sm:p-12 lg:p-16">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-500">
            04 / Get in touch
          </p>

          <h2 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">
            Have an opportunity or an idea?
            <span className="gradient-text"> Let's connect.</span>
          </h2>

          <p className="mt-6 max-w-xl leading-8 text-[var(--text-secondary)]">
            I'm open to IT opportunities, collaborations and projects
            where technology can make a meaningful difference.
          </p>

          <Link
            to="/contact"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-cyan-500 px-7 py-4 text-sm font-bold text-white transition hover:bg-cyan-400"
          >
            Get in touch
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Home
