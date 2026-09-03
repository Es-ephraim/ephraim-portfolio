import { Mail} from 'lucide-react'
import { motion } from 'motion/react'
import { FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa'

function Contact() {
  const contactLinks = [
    {
      title: 'Email',
      description: 'Send me an email',
      href: 'mailto:kithinjimephraim@gmail.com',
      icon: Mail,
    },
    {
        title: 'WhatsApp',
        description: 'Chat on WhatsApp',
        href: 'https://wa.me/+254799689652',
        icon: FaWhatsapp,
        external: true,
      },
    {
      title: 'LinkedIn',
      description: 'Connect with me',
      href: 'https://www.linkedin.com/in/ephraim-munene-ab3321369',
      icon: FaLinkedin,
      external: true,
    },
    {
      title: 'GitHub',
      description: 'View my code',
      href: 'https://github.com/Es-ephraim',
      icon: FaGithub,
      external: true,
    },
  ]

  return (
    <section id="contact" className="bg-slate-900 px-6 py-24">
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Contact
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Let's work together.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            I'm open to opportunities where I can apply my technical skills,
            learn, solve problems and contribute to a team.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >

          {contactLinks.map((contact) => {
            const Icon = contact.icon

            return (
              <motion.a
                key={contact.title}
                href={contact.href}
                {...(contact.external && {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                })}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 35,
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
                className="rounded-2xl border border-white/10 bg-slate-950 p-7 text-center transition duration-300 hover:border-cyan-400/40"
              >
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    ease: 'backOut',
                  }}
                >
                  <Icon className="mx-auto h-8 w-8 text-cyan-400" />
                </motion.div>

                <h3 className="mt-4 font-semibold text-white">
                  {contact.title}
                </h3>

                <p className="mt-2 break-all text-sm text-slate-400">
                  {contact.description}
                </p>
              </motion.a>
            )
          })}

        </motion.div>

      </div>
    </section>
  )
}

export default Contact