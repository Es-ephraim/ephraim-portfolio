import { motion } from 'motion/react'

const projects = [
  {
    title: 'Find a Technician',
    category: 'Mobile Application',
    description:
      'A Flutter and Firebase-based platform designed to connect customers with technicians and simplify the process of finding, booking and managing technical services.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Firestore'],
    features: [
      'User authentication',
      'Technician discovery',
      'Booking management',
      'Payment processing',
      'Ratings and reviews',
      'Notifications',
    ],
  },
  {
    title: 'BiasharaBox',
    category: 'POS & Inventory System',
    description:
      'A point-of-sale and inventory management system designed for businesses such as bookshops, supporting sales, inventory, customers, vendors and reporting.',
    technologies: ['React', 'Vite', 'Node.js', 'MongoDB'],
    features: [
      'Point of sale',
      'Inventory management',
      'Sales history',
      'Customer management',
      'Vendor management',
      'Reports',
    ],
  },
  {
    title: 'TechHeroes Solutions',
    category: 'Technology Platform',
    description:
      'A technology-focused project exploring IT services, software solutions and practical digital tools for users and businesses.',
    technologies: ['Flutter', 'Dart', 'Web Technologies'],
    features: [
      'Technology services',
      'Software solutions',
      'IT support concepts',
    ],
  },
]

function Projects() {
  return (
    <section id="projects" className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-14"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Projects
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Things I've built.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            A selection of software and technology projects I've worked on
            while developing my technical skills.
          </p>
        </motion.div>

        {/* Project Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid gap-8 lg:grid-cols-2"
        >

          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 50,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.7,
                    ease: 'easeOut',
                  },
                },
              }}
              whileHover={{
                y: -8,
                transition: {
                  duration: 0.25,
                },
              }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900 transition duration-300 hover:border-cyan-400/40"
            >

              {/* Project Image Placeholder */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex h-56 items-center justify-center bg-slate-800"
              >
                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: 2,
                  }}
                  transition={{ duration: 0.25 }}
                  className="text-center"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl font-bold text-cyan-400">
                    {project.title.charAt(0)}
                  </div>

                  <p className="mt-3 text-sm text-slate-500">
                    Project screenshot
                  </p>
                </motion.div>
              </motion.div>

              <div className="p-7">

                <p className="text-sm font-medium text-cyan-400">
                  {project.category}
                </p>

                <h3 className="mt-2 text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.06,
                        delayChildren: 0.15,
                      },
                    },
                  }}
                  className="mt-6 flex flex-wrap gap-2"
                >
                  {project.technologies.map((technology) => (
                    <motion.span
                      key={technology}
                      variants={{
                        hidden: {
                          opacity: 0,
                          scale: 0.8,
                        },
                        visible: {
                          opacity: 1,
                          scale: 1,
                        },
                      }}
                      transition={{ duration: 0.3 }}
                      className="rounded-full bg-slate-950 px-3 py-1.5 text-xs font-medium text-slate-300 transition duration-300 hover:text-cyan-400"
                    >
                      {technology}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Features */}
                <div className="mt-7 border-t border-white/10 pt-6">
                  <p className="mb-3 text-sm font-semibold text-white">
                    Key Features
                  </p>

                  <motion.ul
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: {},
                      visible: {
                        transition: {
                          staggerChildren: 0.07,
                          delayChildren: 0.2,
                        },
                      },
                    }}
                    className="grid gap-2 sm:grid-cols-2"
                  >
                    {project.features.map((feature) => (
                      <motion.li
                        key={feature}
                        variants={{
                          hidden: {
                            opacity: 0,
                            x: -10,
                          },
                          visible: {
                            opacity: 1,
                            x: 0,
                          },
                        }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center gap-2 text-sm text-slate-400"
                      >
                        <span className="text-cyan-400">✓</span>
                        {feature}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>

              </div>
            </motion.article>
          ))}

        </motion.div>

      </div>
    </section>
  )
}

export default Projects