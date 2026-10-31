import { motion } from 'motion/react'
import {
  Smartphone,
  Search,
  MapPin,
  Monitor,
  Package,
  ShoppingCart,
  Users,
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

function ProjectPreview({ project }) {
  return (
    <div className="relative flex h-64 items-center justify-center overflow-hidden border-b border-white/10 bg-[#080f1d] p-5 sm:h-72">
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />

      {/* Find a Technician preview */}
      {project.type === 'mobile' && (
        <div className="relative flex h-full w-full items-center justify-center gap-8">
          <div className="hidden space-y-3 sm:block">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Mobile experience
            </p>
            <h4 className="max-w-48 text-xl font-bold leading-snug text-white">
              Technical help, made easier.
            </h4>
            <p className="max-w-48 text-sm leading-6 text-slate-400">
              A mobile platform connecting customers with technicians.
            </p>
          </div>

          <div className="relative w-40 rounded-[2rem] border-[5px] border-slate-700 bg-slate-950 p-3 shadow-2xl">
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-slate-700" />

            <div className="flex items-center justify-between">
              <Smartphone size={15} className="text-cyan-400" />
              <span className="text-[9px] text-slate-500">APP PREVIEW</span>
            </div>

            <h4 className="mt-5 text-sm font-bold text-white">
              Find help nearby
            </h4>

            <div className="mt-3 flex items-center gap-2 rounded-lg border border-white/10 bg-slate-900 p-2">
              <Search size={12} className="text-cyan-400" />
              <span className="text-[9px] text-slate-500">
                Find a technician
              </span>
            </div>

            <div className="mt-4 flex items-center gap-2">
              <MapPin size={11} className="text-cyan-400" />
              <span className="text-[9px] text-slate-400">
                Discover services
              </span>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2">
              {['Electrical', 'Networking', 'Repairs', 'Other'].map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-white/10 bg-slate-900 p-2 text-center"
                >
                  <div className="mx-auto mb-2 h-5 w-5 rounded-md bg-cyan-400/10" />
                  <span className="text-[8px] text-slate-400">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4 h-1.5 rounded-full bg-cyan-400/20">
              <div className="h-1.5 w-2/3 rounded-full bg-cyan-400" />
            </div>
          </div>
        </div>
      )}

      {/* BiasharaBox preview */}
      {project.type === 'pos' && (
        <div className="relative w-full max-w-xl rounded-xl border border-white/10 bg-slate-950/90 p-4 shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                <ShoppingCart size={14} />
              </div>
              <span className="text-xs font-bold text-white">
                BiasharaBox
              </span>
            </div>

            <span className="text-[9px] uppercase tracking-widest text-slate-500">
              Dashboard concept
            </span>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            {[
              { label: 'Sales', icon: ShoppingCart },
              { label: 'Inventory', icon: Package },
              { label: 'Customers', icon: Users },
            ].map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="rounded-lg border border-white/10 bg-slate-900 p-3"
              >
                <Icon size={15} className="text-cyan-400" />
                <p className="mt-3 text-[10px] text-slate-400">
                  {label}
                </p>
                <div className="mt-2 h-2 w-3/4 rounded bg-slate-700" />
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-lg border border-white/10 bg-slate-900 p-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-300">
                Business overview
              </span>
              <Monitor size={14} className="text-cyan-400" />
            </div>

            <div className="mt-4 flex h-16 items-end gap-2">
              {[35, 60, 45, 80, 55, 95, 70, 85, 50, 75].map(
                (height, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t-sm bg-cyan-400/30 transition-colors group-hover:bg-cyan-400/50"
                    style={{ height: `${height}%` }}
                  />
                ),
              )}
            </div>
          </div>
        </div>
      )}

      {/* TechHeroes preview */}
      {project.type === 'repair' && (
        <div className="relative w-full max-w-xl rounded-xl border border-white/10 bg-slate-950/90 p-4 shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-400">
                <Wrench size={14} />
              </div>
              <span className="text-xs font-bold text-white">
                TechHeroes Solutions
              </span>
            </div>

            <span className="text-[9px] uppercase tracking-widest text-slate-500">
              Desktop concept
            </span>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            <div className="col-span-1 space-y-2 border-r border-white/10 pr-3">
              {[
                { label: 'Customers', icon: Users },
                { label: 'Repairs', icon: Wrench },
                { label: 'Records', icon: Database },
              ].map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-lg bg-slate-900 p-2"
                >
                  <Icon size={12} className="text-emerald-400" />
                  <span className="text-[9px] text-slate-400">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <div className="col-span-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-300">
                  Repair workspace
                </span>
                <ClipboardList size={14} className="text-emerald-400" />
              </div>

              <div className="mt-3 space-y-2">
                {['Customer records', 'Repair tracking', 'Service details'].map(
                  (item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-lg border border-white/10 bg-slate-900 p-2"
                    >
                      <span className="text-[9px] text-slate-400">
                        {item}
                      </span>
                      <Check size={12} className="text-emerald-400" />
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <span className="absolute bottom-3 right-5 text-[9px] font-medium uppercase tracking-widest text-slate-600">
        Illustrative preview
      </span>
    </div>
  )
}

function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-950 px-6 py-16 sm:py-20 lg:py-24"
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
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400 sm:tracking-[0.3em]">
            Projects
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Ideas turned into working solutions.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
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
              className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900 transition-colors duration-300 hover:border-cyan-400/40"
            >
              <ProjectPreview project={project} />

              <div className="p-5 sm:p-7">

                {/* Category and status */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                    {project.category}
                  </p>

                  <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-300">
                    {project.status}
                  </span>
                </div>

                {/* Project title */}
                <div className="mt-3 flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>

                  <span className="text-sm font-medium text-slate-600">
                    0{index + 1}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/5 bg-slate-950 px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-cyan-400/30 hover:text-cyan-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Development focus */}
                <div className="mt-7 border-t border-white/10 pt-6">
                  <p className="mb-4 text-sm font-semibold text-white">
                    Development Focus
                  </p>

                  <ul className="grid gap-3 sm:grid-cols-2">
                    {project.focus.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-slate-400"
                      >
                        <Check
                          size={15}
                          className="mt-0.5 shrink-0 text-cyan-400"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer */}
                <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="text-xs text-slate-500">
                    Project {index + 1} / 03
                  </span>

                  <span className="flex items-center gap-2 text-sm font-medium text-cyan-400 transition-all group-hover:gap-3">
                    Development journey
                    <ArrowUpRight size={16} />
                  </span>
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