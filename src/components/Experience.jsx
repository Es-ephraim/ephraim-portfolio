import { motion } from 'motion/react';
import {
  BriefcaseBusiness,
  CalendarDays,
  ArrowUpRight,
} from 'lucide-react';

const experiences = [
  {
    company: 'Horsebridge Network Systems E.A. Ltd',
    role: 'ICT Systems Engineer',
    period: '2025',
    type: 'Networking & IT Infrastructure',
    description:
      'Worked alongside the ICT team to support IT infrastructure, enterprise systems, networking equipment and integrated security solutions.',
    responsibilities: [
      'Provided first-line technical support, troubleshooting desktop computers, laptops, software and network peripherals.',
      'Managed Windows user accounts within a domain environment.',
      'Installed, configured and supported Microsoft 365 applications, including licensing and user assistance.',
      'Installed, configured and monitored CCTV cameras and Unified Security Management Systems.',
      'Installed and maintained biometric access control systems and automated gate bollards.',
      'Used Znuny IT Service Management to log support requests, track incidents and document technical solutions.',
    ],
    technologies: [
      'Windows',
      'Microsoft 365',
      'Networking',
      'CCTV',
      'Access Control',
      'Znuny ITSM',
    ],
  },
  {
    company: 'National Cereals and Produce Board (NCPB)',
    role: 'ICT Support Technician',
    period: '2024',
    type: 'Corporate IT Support',
    description:
      'Supported day-to-day ICT operations at the Head Office, helping staff maintain productivity through reliable technical support and equipment maintenance.',
    responsibilities: [
      'Provided technical support to staff across different departments.',
      'Diagnosed and assisted in resolving computer hardware and software problems.',
      'Installed and configured software and supported Microsoft 365 applications.',
      'Guided non-technical users through troubleshooting procedures and application usage.',
      'Prepared ICT equipment for dispatch to branches across the country.',
      'Maintained equipment records and documentation to support ICT asset accountability.',
    ],
    technologies: [
      'IT Support',
      'Hardware Troubleshooting',
      'Microsoft 365',
      'Software Installation',
      'ICT Asset Management',
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[var(--surface-secondary)] px-6 py-20 text-[var(--text-primary)] transition-colors duration-300 sm:py-24 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[var(--accent-color)]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-[var(--accent-color)]" />
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--accent-color)]">
              Experience
            </p>
          </div>

          <h2 className="max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Turning technical knowledge into{' '}
            <span className="gradient-text">practical experience.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
            My professional experience spans IT support, enterprise systems,
            networking infrastructure and integrated security solutions.
          </p>
        </motion.div>

        {/* Experience cards */}
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.company}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: 'easeOut',
              }}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl border border-[var(--border-color)] bg-[var(--surface-bg)] p-6 shadow-xl transition-colors duration-300 hover:border-[var(--accent-color)] sm:p-8 lg:p-10"
            >
              {/* Card top accent */}
              <div className="absolute left-0 top-8 h-12 w-1 rounded-r-full bg-[var(--accent-color)] opacity-70 transition-all duration-300 group-hover:h-16 group-hover:opacity-100" />

              {/* Header */}
              <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[var(--border-color)] bg-[var(--surface-secondary)] text-[var(--accent-color)]">
                    <BriefcaseBusiness size={22} />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[var(--text-primary)] sm:text-2xl">
                      {experience.role}
                    </h3>

                    <p className="mt-1 text-base font-medium text-[var(--accent-color)] sm:text-lg">
                      {experience.company}
                    </p>

                    <p className="mt-2 text-sm text-[var(--text-secondary)]">
                      {experience.type}
                    </p>
                  </div>
                </div>

                <div className="flex w-fit items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--surface-secondary)] px-4 py-2 text-sm text-[var(--text-primary)]">
                  <CalendarDays
                    size={15}
                    className="text-[var(--accent-color)]"
                  />
                  {experience.period}
                </div>
              </div>

              {/* Description */}
              <p className="mt-7 max-w-3xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
                {experience.description}
              </p>

              {/* Responsibilities */}
              <div className="mt-8">
                <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                  Key Responsibilities
                </h4>

                <div className="grid gap-x-10 gap-y-4 md:grid-cols-2">
                  {experience.responsibilities.map((item, itemIndex) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.1 + itemIndex * 0.06,
                      }}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-color)]" />

                      <p className="text-sm leading-7 text-[var(--text-secondary)]">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mt-8 border-t border-[var(--border-color)] pt-6">
                <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                  Technologies & Areas
                </h4>

                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-[var(--border-color)] bg-[var(--surface-secondary)] px-3 py-1.5 text-xs font-medium text-[var(--accent-color)] transition-colors hover:border-[var(--accent-color)]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative arrow */}
              <ArrowUpRight
                size={20}
                className="absolute right-6 top-6 text-[var(--text-secondary)] opacity-50 transition-colors group-hover:text-[var(--accent-color)] sm:right-8 sm:top-8"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;