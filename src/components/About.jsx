import { motion } from 'motion/react';
import {
  Monitor,
  Network,
  ShieldCheck,
  Code2,
  GraduationCap,
  BriefcaseBusiness,
} from 'lucide-react';

function About() {
  const cards = [
    {
      number: '01',
      title: 'IT Support',
      description:
        'Hardware and software troubleshooting, computer maintenance, Microsoft 365 support and end-user assistance.',
      icon: Monitor,
    },
    {
      number: '02',
      title: 'Networking',
      description:
        'Network connectivity troubleshooting, infrastructure support and Windows domain user administration.',
      icon: Network,
    },
    {
      number: '03',
      title: 'Security Systems',
      description:
        'Hands-on experience with CCTV installations, access control and unified security management systems.',
      icon: ShieldCheck,
      accent: 'amber',
    },
    {
      number: '04',
      title: 'Software Development',
      description:
        'Developing practical applications using technologies such as React, Flutter, Node.js and databases.',
      icon: Code2,
    },
  ];

  const highlights = [
    {
      icon: GraduationCap,
      label: 'Education',
      value: 'BSc Information Technology',
      accent: 'amber',
    },
    {
      icon: BriefcaseBusiness,
      label: 'Experience',
      value: 'ICT Support & Systems',
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[var(--page-bg)] px-6 py-20 text-[var(--text-primary)] transition-colors duration-300 sm:py-24 lg:py-28"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[var(--accent-color)]/5 blur-[100px]" />

      <div
        className="about-amber-glow pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full opacity-0 blur-[110px] transition-opacity duration-300"
        style={{
          background: 'rgba(245, 158, 11, 0.10)',
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl"
        >
          <p className="mb-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--accent-color)]">
            <span className="h-px w-8 bg-[var(--accent-color)]" />
            About Me
          </p>

          <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Technology is more than just{' '}
            <span className="gradient-text">code.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
            I enjoy understanding how technology works, solving technical
            problems and building solutions that make everyday work easier.
          </p>
        </motion.div>

        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* About content */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-semibold">
              A little about my journey
            </h3>

            <div className="mt-7 space-y-5 text-base leading-8 text-[var(--text-secondary)]">
              <p>
                I'm Ephraim Munene Kithinji, an Information Technology
                graduate with a strong interest in IT support, networking,
                hardware troubleshooting and software development.
              </p>

              <p>
                Through my experience at Horsebridge Network Systems and
                the National Cereals and Produce Board, I've gained practical
                exposure to supporting users, troubleshooting ICT equipment,
                working with Microsoft 365, managing Windows domain accounts
                and supporting network and security systems.
              </p>

              <p>
                Beyond technical support, I enjoy developing software
                applications that address practical problems. My approach
                combines curiosity, problem-solving and a willingness to
                keep learning as technology evolves.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => {
                const Icon = item.icon;
                const isAmber = item.accent === 'amber';

                return (
                  <div
                    key={item.label}
                    className="rounded-xl border border-[var(--border-color)] bg-[var(--surface-bg)] p-4 transition-colors duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={
                          isAmber
                            ? 'rounded-lg p-2 accent-amber-bg'
                            : 'rounded-lg bg-[var(--surface-secondary)] p-2 text-[var(--accent-color)]'
                        }
                      >
                        <Icon size={19} />
                      </div>

                      <span className="text-xs font-medium uppercase tracking-wider text-[var(--text-secondary)]">
                        {item.label}
                      </span>
                    </div>

                    <p className="mt-3 text-sm font-semibold text-[var(--text-primary)]">
                      {item.value}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Areas of focus */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
          >
            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                What I work with
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {cards.map((card) => {
                const Icon = card.icon;
                const isAmber = card.accent === 'amber';

                return (
                  <motion.div
                    key={card.number}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5 },
                      },
                    }}
                    whileHover={{ y: -5 }}
                    className={`group rounded-2xl border border-[var(--border-color)] bg-[var(--surface-bg)] p-6 transition-all duration-300 hover:border-[var(--accent-color)] hover:shadow-lg ${
                      isAmber ? 'hover:shadow-amber-500/10' : ''
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div
                        className={
                          isAmber
                            ? 'rounded-xl border border-transparent p-3 accent-amber-bg accent-amber-border'
                            : 'rounded-xl border border-[var(--border-color)] bg-[var(--surface-secondary)] p-3 text-[var(--accent-color)] transition-colors group-hover:bg-[var(--accent-color)]/10'
                        }
                      >
                        <Icon size={22} />
                      </div>

                      <span
                        className={`text-sm font-medium ${
                          isAmber
                            ? 'accent-amber'
                            : 'text-[var(--text-secondary)] opacity-60'
                        }`}
                      >
                        {card.number}
                      </span>
                    </div>

                    <h3 className="mt-6 text-lg font-semibold text-[var(--text-primary)]">
                      {card.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                      {card.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
