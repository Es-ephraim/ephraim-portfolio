import { ArrowRight, Download } from 'lucide-react'
import { motion } from 'motion/react'

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 px-6 pt-20">

      <div className="absolute left-1/2 top-1/2 -z-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 py-20 lg:grid-cols-2">

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            IT Support & Networking
          </p>

          <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
            Hi, I'm{' '}
            <span className="text-cyan-400">
              Ephraim.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            Information Technology professional focused on IT support,
            networking, hardware troubleshooting and software development.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: 'easeOut',
            }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              View My Work
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="/Ephraim_Kithinji_Curriculum_Vitae.pdf"
              download="Ephraim_Kithinji_Curriculum_Vitae.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-7 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
            }}
            className="mt-10 flex gap-6 text-sm text-slate-500"
          >
            <span>Nairobi, Kenya</span>
            <span>•</span>
            <span>Available for opportunities</span>
          </motion.div>
        </motion.div>

        {/* Profile placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: 'easeOut',
          }}
          className="flex justify-center lg:justify-end"
        >
          <div className="flex h-80 w-80 items-center justify-center rounded-3xl border border-white/10 bg-slate-900 shadow-2xl md:h-96 md:w-96">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-cyan-400/10 text-4xl">
                EM
              </div>

              <p className="text-sm text-slate-500">
                Your professional photo
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero
