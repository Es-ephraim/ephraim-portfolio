import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import {
  Wrench,
  ClipboardList,
  Database,
  ArrowUpRight,
  Check,
} from 'lucide-react'

const projects = [
  {
    title: 'Find a Technician',
    category: 'Mobile Application',
    status: 'In Development',
    type: 'mobile',
    description:
      'A mobile application being developed to connect customers with technicians and make it easier to discover and access technical services.',
    technologies: [
      'Flutter',
      'Dart',
      'Firebase Authentication',
      'Cloud Firestore',
    ],
    focus: [
      'Technician discovery',
      'Customer experience',
      'Firebase integration',
      'Mobile application development',
    ],
  },
  {
    title: 'BiasharaBox',
    category: 'POS & Inventory System',
    status: 'In Development',
    type: 'pos',
    description:
      'A point-of-sale and inventory management application designed to help businesses manage sales, stock, customers and business operations.',
    technologies: [
      'React',
      'Vite',
      'Node.js',
      'Express',
      'MongoDB',
    ],
    focus: [
      'Point-of-sale operations',
      'Inventory management',
      'Sales and transaction records',
      'Customer and vendor management',
    ],
  },
  {
    title: 'TechHeroes Solutions',
    category: 'Desktop Application',
    status: 'Development Project',
    type: 'repair',
    description:
      'A technology services project featuring a desktop application designed to support customer records and repair management.',
    technologies: [
      'Flutter',
      'Dart',
      'SQLite',
    ],
    focus: [
      'Customer management',
      'Repair management',
      'Local database integration',
    ],
  },
]

function ProjectPreview({ project, onImageClick }) {
  const imagePreviews = {
    mobile: {
      src: 'find-a-technician-phone-preview.png',
      alt: 'Find a Technician mobile application displayed on a smartphone',
      label: 'View full Find a Technician image',
    },
    pos: {
      src: 'biasharabox-dashboard-laptop-preview.png',
      alt: 'BiasharaBox dashboard displayed on a laptop',
      label: 'View full BiasharaBox dashboard preview',
    },
    repair: {
      src: 'techheroes-repair-dashboard-laptop-preview.png',
      alt: 'TechHeroes Solutions repair management dashboard displayed on a laptop',
      label: 'View full TechHeroes repair dashboard preview',
    },
  }

  const imagePreview = imagePreviews[project.type]

  return (
    <div
      className={`relative flex h-64 items-center justify-center overflow-hidden border-b border-[var(--border-color)] sm:h-72 ${
        imagePreview
          ? 'bg-slate-950 p-0'
          : 'bg-[var(--surface-secondary)] p-5'
      }`}
    >
      {/* Background ambient glows for projects without image previews */}
      {!imagePreview && (
        <>
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
        </>
      )}

      {/* Actual project image previews */}
      {imagePreview && (
        <button
          type="button"
          onClick={onImageClick}
          aria-label={imagePreview.label}
          className="absolute inset-0 z-10 h-full w-full cursor-zoom-in"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/${imagePreview.src}`}
            alt={imagePreview.alt}
            className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
            loading="lazy"
          />

          <span className="absolute bottom-4 right-4 rounded-full bg-black/60 px-3 py-2 text-xs font-medium text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
            Click to enlarge
          </span>
        </button>
      )}
    </div>
  )
}

function Projects() {
  const [previewImage, setPreviewImage] = useState(null)

  // Close image preview using Escape
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setPreviewImage(null)
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [])

  // Prevent background scrolling while image is open
  useEffect(() => {
    document.body.style.overflow = previewImage ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [previewImage])

  return (
    <section
      id="projects"
      className="bg-[var(--page-bg)] px-6 py-16 transition-colors duration-300 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-14"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent-color)] sm:tracking-[0.3em]">
            Projects
          </p>

          <h2 className="text-3xl font-bold text-[var(--text-primary)] sm:text-4xl md:text-5xl">
            Ideas turned into working solutions.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
            A selection of software and technology projects I've worked on
            while developing my technical skills.
          </p>
        </motion.div>

        {/* Project cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid gap-8 lg:grid-cols-2"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: 'easeOut',
                  },
                },
              }}
              whileHover={{
                y: -6,
                transition: { duration: 0.25 },
              }}
              className="group overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--surface-bg)] transition-colors duration-300 hover:border-[var(--accent-color)]/50"
            >
              <ProjectPreview
                project={project}
                onImageClick={() => {
                  setPreviewImage(
                    `${import.meta.env.BASE_URL}images/${
                      project.type === 'mobile'
                        ? 'find-a-technician-phone-preview.png'
                        : project.type === 'pos'
                          ? 'biasharabox-dashboard-laptop-preview.png'
                          : 'techheroes-repair-dashboard-laptop-preview.png'
                    }`
                  )
                }}
              />

              <div className="p-5 sm:p-7">

                {/* Category and status */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-color)]">
                    {project.category}
                  </p>

                  <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-600 dark:text-amber-300">
                    {project.status}
                  </span>
                </div>

                {/* Project title */}
                <div className="mt-3 flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-bold text-[var(--text-primary)]">
                    {project.title}
                  </h3>

                  <span className="text-sm font-medium text-[var(--text-secondary)] opacity-60">
                    0{index + 1}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-[var(--border-color)] bg-[var(--surface-secondary)] px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)] transition-colors hover:border-[var(--accent-color)] hover:text-[var(--accent-color)]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Development focus */}
                <div className="mt-7 border-t border-[var(--border-color)] pt-6">
                  <p className="mb-4 text-sm font-semibold text-[var(--text-primary)]">
                    Development Focus
                  </p>

                  <ul className="grid gap-3 sm:grid-cols-2">
                    {project.focus.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                      >
                        <Check
                          size={15}
                          className="mt-0.5 shrink-0 text-[var(--accent-color)]"
                        />

                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer */}
                <div className="mt-7 flex items-center justify-between border-t border-[var(--border-color)] pt-5">
                  <span className="text-xs text-[var(--text-secondary)]">
                    Project {index + 1} / 03
                  </span>

                  <span className="flex items-center gap-2 text-sm font-medium text-[var(--accent-color)] transition-all group-hover:gap-3">
                    Development journey
                    <ArrowUpRight size={16} />
                  </span>
                </div>

              </div>
            </motion.article>
          ))}
        </motion.div>

      </div>

      {/* Full-screen image preview */}
      {previewImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
          onClick={() => setPreviewImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Full-size project image preview"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setPreviewImage(null)}
            aria-label="Close image preview"
            className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition-colors hover:bg-white/20"
          >
            &times;
          </button>

          {/* Full image without cropping */}
          <img
            src={previewImage}
            alt="Full-size project preview"
            onClick={(event) => event.stopPropagation()}
            className="max-h-[90vh] max-w-[95vw] rounded-xl object-contain shadow-2xl"
          />
        </div>
      )}
    </section>
  )
}

export default Projects