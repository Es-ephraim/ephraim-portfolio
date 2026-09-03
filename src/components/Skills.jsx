import {
  Wrench,
  Network,
  ShieldCheck,
  Code2,
} from 'lucide-react'
import { motion } from 'motion/react'

const skillGroups = [
  {
    title: 'IT Support & Hardware',
    icon: Wrench,
    skills: [
      'Computer Troubleshooting',
      'Hardware Installation',
      'Computer Repair & Maintenance',
      'Windows Troubleshooting',
      'Software Installation',
      'Technical Support',
    ],
  },
  {
    title: 'Networking',
    icon: Network,
    skills: [
      'Network Troubleshooting',
      'TCP/IP',
      'LAN Configuration',
      'Network Connectivity',
      'VPN Troubleshooting',
      'Network Support',
    ],
  },
  {
    title: 'Security Systems',
    icon: ShieldCheck,
    skills: [
      'CCTV Systems',
      'Unified Security Management Systems',
      'Security System Support',
      'System Monitoring',
    ],
  },
  {
    title: 'Software Development',
    icon: Code2,
    skills: [
      'Flutter',
      'Dart',
      'React',
      'JavaScript',
      'Node.js',
      'Firebase',
      'MongoDB',
    ],
  },
]

function Skills() {
  return (
    <section id="skills" className="bg-slate-950 px-6 py-24">
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
            My Skills
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Tools I use to solve problems.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            A combination of technical support, infrastructure and software
            development skills that allows me to approach problems from
            different angles.
          </p>
        </motion.div>

        {/* Skill Groups */}
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
          className="grid gap-6 md:grid-cols-2"
        >
          {skillGroups.map((group) => {
            const Icon = group.icon

            return (
              <motion.div
                key={group.title}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 40,
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
                  y: -6,
                  transition: {
                    duration: 0.25,
                  },
                }}
                className="rounded-2xl border border-white/10 bg-slate-900 p-7 transition duration-300 hover:border-cyan-400/40"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotate: 3,
                  }}
                  transition={{ duration: 0.2 }}
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10"
                >
                  <Icon className="h-6 w-6 text-cyan-400" />
                </motion.div>

                <h3 className="text-xl font-semibold text-white">
                  {group.title}
                </h3>

                {/* Skills */}
                <div className="mt-6 flex flex-wrap gap-3">
                  {group.skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: 0.1 + index * 0.05,
                      }}
                      className="rounded-full border border-slate-700 bg-slate-950 px-4 py-2 text-sm text-slate-300 transition duration-300 hover:border-cyan-400/50 hover:text-cyan-400"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}

export default Skills