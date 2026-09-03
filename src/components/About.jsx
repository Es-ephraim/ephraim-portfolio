import { motion } from 'motion/react'

function About() {
  const cards = [
    {
      title: 'IT Support',
      description:
        'Computer troubleshooting, installation, maintenance and technical support.',
    },
    {
      title: 'Networking',
      description:
        'Network troubleshooting, connectivity and infrastructure support.',
    },
    {
      title: 'Security Systems',
      description:
        'Experience with CCTV and unified security management systems.',
    },
    {
      title: 'Software Development',
      description:
        'Building practical applications using modern development technologies.',
    },
  ]

  return (
    <section id="about" className="bg-slate-900 px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-12"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            About Me
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Technology is more than just code.
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <p className="text-lg leading-8 text-slate-300">
              I'm Ephraim Munene Kithinji, an Information Technology
              professional with a strong interest in IT support, networking,
              hardware troubleshooting and software development.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              My experience has given me exposure to diagnosing technical
              problems, supporting users, working with computer systems and
              networks, and implementing technology solutions. I also enjoy
              building practical software that solves real-world problems.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              I approach technology with a problem-solving mindset. Whether
              I'm troubleshooting a computer, configuring a network,
              supporting a security system or developing an application,
              my goal is to create reliable and useful solutions.
            </p>
          </motion.div>

          {/* Skills / Focus Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="grid gap-5 sm:grid-cols-2"
          >
            {cards.map((card) => (
              <motion.div
                key={card.title}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 30,
                  },
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
                  transition: {
                    duration: 0.2,
                  },
                }}
                className="rounded-2xl border border-white/10 bg-slate-950 p-6"
              >
                <h3 className="text-xl font-semibold text-white">
                  {card.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About