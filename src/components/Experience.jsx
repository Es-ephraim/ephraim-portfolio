import { motion } from 'motion/react'

const experiences = [
  {
    company: 'Horsebridge Network Systems',
    role: 'IT Intern',
    period: '2025',
    description:
      'Provided technical support and assisted with IT infrastructure, networking and security systems.',
    responsibilities: [
      'Provided computer hardware and software troubleshooting and technical support.',
      'Assisted with network connectivity and infrastructure troubleshooting.',
      'Supported CCTV systems and unified security management systems.',
      'Assisted with installation, configuration and maintenance of IT equipment.',
      'Diagnosed and resolved day-to-day technical issues for users and systems.',
    ],
  },
  {
    company: 'National Cereals and Produce Board (NCPB)',
    role: 'IT Intern',
    period: '2024',
    description:
      'Gained practical experience supporting IT operations and assisting with day-to-day technical activities.',
    responsibilities: [
      'Provided technical support to users and staff.',
      'Assisted with computer hardware and software troubleshooting.',
      'Supported routine IT maintenance and system operations.',
      'Assisted with network and connectivity-related issues.',
    ],
  },
]

function Experience() {
  return (
    <section id="experience" className="bg-slate-900 px-6 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-14"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400 sm:tracking-[0.3em]">
            Experience
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Where I've put my skills to work.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            Practical experience supporting users, IT infrastructure,
            networks and security systems.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="relative ml-3 border-l border-slate-700"
        >

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.company}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
                ease: 'easeOut',
              }}
              className="relative mb-12 pl-8 last:mb-0"
            >

              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.2 + 0.2,
                  ease: 'backOut',
                }}
                className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-4 border-slate-900 bg-cyan-400"
              />

              {/* Experience Card */}
              <motion.div
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                className="rounded-2xl border border-white/10 bg-slate-950 p-5 transition duration-300 hover:border-cyan-400/40 sm:p-7"
              >

                <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">

                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      {experience.role}
                    </h3>

                    <p className="mt-1 text-lg text-cyan-400">
                      {experience.company}
                    </p>
                  </div>

                  <span className="w-fit rounded-full border border-slate-700 px-4 py-1 text-sm text-slate-400">
                    {experience.period}
                  </span>

                </div>

                <p className="mt-5 leading-7 text-slate-400">
                  {experience.description}
                </p>

                {/* Responsibilities */}
                <motion.ul
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.08,
                        delayChildren: 0.2,
                      },
                    },
                  }}
                  className="mt-6 space-y-3"
                >
                  {experience.responsibilities.map((item) => (
                    <motion.li
                      key={item}
                      variants={{
                        hidden: {
                          opacity: 0,
                          x: -10,
                        },
                        visible: {
                          opacity: 1,
                          x: 0,
                          transition: {
                            duration: 0.4,
                          },
                        },
                      }}
                      className="flex gap-3 text-slate-300"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>

              </motion.div>
            </motion.div>
          ))}

        </motion.div>

      </div>
    </section>
  )
}

export default Experience