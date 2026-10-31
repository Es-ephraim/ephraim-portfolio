import { useState } from 'react'
import {
  Wrench,
  Network,
  ShieldCheck,
  Code2,
  Server,
  ArrowUpRight,
} from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

const skillGroups = [
  {
    number: '01',
    title: 'IT Support & Hardware',
    subtitle: 'Technical support and troubleshooting',
    icon: Wrench,
    skills: [
      {
        name: 'Computer Troubleshooting',
        description:
          'Diagnosing and resolving common computer hardware and software problems.',
      },
      {
        name: 'Hardware Installation',
        description:
          'Installing, configuring and replacing computer components and peripherals.',
      },
      {
        name: 'Computer Repair & Maintenance',
        description:
          'Performing preventive maintenance and assisting with computer hardware repairs.',
      },
      {
        name: 'Windows Troubleshooting',
        description:
          'Identifying and resolving Windows operating system and configuration issues.',
      },
      {
        name: 'Software Installation',
        description:
          'Installing, configuring and troubleshooting desktop applications and software.',
      },
      {
        name: 'Technical Support',
        description:
          'Providing first-line technical assistance and guiding users through solutions.',
      },
      {
        name: 'Microsoft 365 Support',
        description:
          'Supporting Microsoft 365 installation, applications, licensing and user issues.',
      },
    ],
  },
  {
    number: '02',
    title: 'Networking & Systems',
    subtitle: 'Infrastructure and system administration',
    icon: Network,
    skills: [
      {
        name: 'Network Troubleshooting',
        description:
          'Diagnosing network problems and restoring connectivity between devices.',
      },
      {
        name: 'TCP/IP',
        description:
          'Understanding TCP/IP addressing and the fundamentals of network communication.',
      },
      {
        name: 'LAN Configuration',
        description:
          'Working with local area network connectivity and device configurations.',
      },
      {
        name: 'Network Connectivity',
        description:
          'Identifying and resolving connectivity issues across network devices.',
      },
      {
        name: 'VPN Troubleshooting',
        description:
          'Investigating common VPN connection and remote access problems.',
      },
      {
        name: 'Windows Domain Accounts',
        description:
          'Managing Windows user accounts within a domain environment.',
      },
      {
        name: 'Windows Server',
        description:
          'Academic exposure to Windows Server installation and administration.',
      },
    ],
  },
  {
    number: '03',
    title: 'Security Systems',
    subtitle: 'Physical security technology',
    icon: ShieldCheck,
    skills: [
      {
        name: 'CCTV Installation & Configuration',
        description:
          'Installing, configuring and troubleshooting CCTV camera systems.',
      },
      {
        name: 'Unified Security Management Systems',
        description:
          'Deploying and maintaining centralized security monitoring systems.',
      },
      {
        name: 'Security System Monitoring',
        description:
          'Monitoring security systems and assisting with technical issues.',
      },
      {
        name: 'Biometric Access Control',
        description:
          'Installing and maintaining biometric access control equipment.',
      },
      {
        name: 'Gate Bollards',
        description:
          'Working with automated gate bollard installation and maintenance.',
      },
    ],
  },
  {
    number: '04',
    title: 'Software Development',
    subtitle: 'Application development technologies',
    icon: Code2,
    skills: [
      {
        name: 'Flutter',
        description:
          'Developing cross-platform application interfaces using Flutter.',
      },
      {
        name: 'Dart',
        description:
          'Writing application logic and functionality using the Dart language.',
      },
      {
        name: 'React',
        description:
          'Building component-based web interfaces using React.',
      },
      {
        name: 'JavaScript',
        description:
          'Implementing interactive functionality and application logic for the web.',
      },
      {
        name: 'Node.js',
        description:
          'Building server-side application functionality using JavaScript and Node.js.',
      },
      {
        name: 'Firebase',
        description:
          'Working with Firebase services for application authentication and data storage.',
      },
      {
        name: 'MongoDB',
        description:
          'Working with document-based databases for application data management.',
      },
      {
        name: 'SQLite',
        description:
          'Using lightweight relational databases for local application data storage.',
      },
    ],
  },
  {
    number: '05',
    title: 'Tools & Platforms',
    subtitle: 'Software and productivity tools',
    icon: Server,
    skills: [
      {
        name: 'Microsoft 365',
        description:
          'Installing, supporting and managing Microsoft 365 applications and licensing.',
      },
      {
        name: 'Znuny ITSM',
        description:
          'Logging incidents and service requests and documenting technical resolutions.',
      },
      {
        name: 'Git & GitHub',
        description:
          'Managing source code, version history and collaborative development workflows.',
      },
      {
        name: 'Visual Studio Code',
        description:
          'Using a code editor for software development and project management.',
      },
      {
        name: 'Vite',
        description:
          'Using Vite as a development server and build tool for web applications.',
      },
      {
        name: 'Azure Data Fundamentals Training',
        description:
          'Completed foundational training covering core data concepts and Azure data services.',
      },
    ],
  },
]

// Individual interactive skill tag
function SkillTag({ skill, isOpen, onToggle, onClose }) {
  return (
    <div className="relative">
      <button
        type="button"
        onClick={onToggle}
        onMouseEnter={onToggle}
        onMouseLeave={onClose}
        onFocus={onToggle}
        onBlur={onClose}
        aria-expanded={isOpen}
        aria-label={`${skill.name}. ${skill.description}`}
        className={`rounded-lg border px-3 py-2 text-left text-xs transition-colors duration-200 sm:text-sm ${
          isOpen
            ? 'border-cyan-400/50 bg-cyan-400/10 text-cyan-300'
            : 'border-white/[0.07] bg-slate-950/80 text-slate-300 hover:border-cyan-400/40 hover:text-cyan-300'
        }`}
      >
        {skill.name}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.96 }}
            transition={{ duration: 0.18 }}
            className="absolute bottom-full left-1/2 z-50 mb-3 w-56 -translate-x-1/2 rounded-xl border border-cyan-400/20 bg-slate-900/65 p-4 shadow-xl shadow-black/30 backdrop-blur-xl"
          >
            <p className="text-xs font-semibold text-cyan-400">
              {skill.name}
            </p>

            <p className="mt-2 text-xs leading-6 text-slate-300">
              {skill.description}
            </p>

            <div className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-b border-r border-cyan-400/20 bg-slate-900" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function Skills() {
  const [activeSkill, setActiveSkill] = useState(null)

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#070b14] px-6 py-20 sm:py-24 lg:py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-40 top-40 h-96 w-96 rounded-full bg-cyan-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl"
        >
          <p className="mb-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            <span className="h-px w-8 bg-cyan-400" />
            Technical Skills
          </p>

          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Tools I use to{' '}
            <span className="gradient-text">solve problems.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            My technical foundation combines hands-on IT support,
            infrastructure, security systems and software development.
            I continue to expand my skills through practical work and
            independent projects.
          </p>

          <p className="mt-4 text-sm text-slate-500">
            Hover over or tap any skill to learn more.
          </p>
        </motion.div>

        {/* Skill cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {skillGroups.map((group) => {
            const Icon = group.icon

            return (
              <motion.div
                key={group.number}
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5 },
                  },
                }}
                whileHover={{ y: -5 }}
                className="group flex flex-col rounded-2xl border border-white/10 bg-slate-900/60 p-6 transition-colors duration-300 hover:border-cyan-400/30 hover:bg-slate-900 sm:p-7"
              >
                {/* Card header */}
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/10 text-cyan-400 transition-colors group-hover:bg-cyan-400/15">
                    <Icon size={23} />
                  </div>

                  <span className="text-sm font-medium tracking-widest text-slate-600">
                    {group.number}
                  </span>
                </div>

                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-white">
                    {group.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    {group.subtitle}
                  </p>
                </div>

                {/* Interactive skills */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => {
                    const skillId = `${group.number}-${skill.name}`

                    return (
                      <SkillTag
                        key={skillId}
                        skill={skill}
                        isOpen={activeSkill === skillId}
                        onToggle={() => setActiveSkill(skillId)}
                        onClose={() =>
                          setActiveSkill((current) =>
                            current === skillId ? null : current,
                          )
                        }
                      />
                    )
                  })}
                </div>

                <div className="mt-auto flex justify-end pt-6">
                  <ArrowUpRight
                    size={17}
                    className="text-slate-600 transition-colors group-hover:text-cyan-400"
                  />
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Closing note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-10 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.03] p-6 sm:p-8"
        >
          <p className="text-sm leading-7 text-slate-400 sm:text-base">
            <span className="font-semibold text-cyan-400">
              Always learning.
            </span>{' '}
            Technology keeps evolving, and so do I. I'm continuously
            developing my technical capabilities through hands-on projects,
            experimentation and professional learning.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills