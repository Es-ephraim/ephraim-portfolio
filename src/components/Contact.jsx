import { useState } from 'react'
import { motion } from 'motion/react'
import {
Mail,
ArrowUpRight,
MessageCircle,
Send,
User,
AtSign,
} from 'lucide-react'
import { FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa'

const contactLinks = [
{
title: 'Email',
description: 'Drop me an email',
detail: 'Available for professional enquiries',
href: 'mailto@gmail.com',
icon: Mail,
},
{
title: 'WhatsApp',
description: 'Start a conversation',
detail: "Let's start a conversation",
href: 'https://wa.me/254799689652',
icon: FaWhatsapp,
external: true,
},
{
title: 'LinkedIn',
description: 'Connect professionally',
detail: 'View my profile',
href: 'https://www.linkedin.com/in/ephraim-munene-ab3321369',
icon: FaLinkedin,
external: true,
},
{
title: 'GitHub',
description: 'Explore my projects',
detail: 'View my repositories',
href: 'https://github.com/Es-ephraim',
icon: FaGithub,
external: true,
},
]

function WhatsAppContactForm() {
const [form, setForm] = useState({
name: '',
email: '',
message: '',
})

const [error, setError] = useState('')

const handleChange = (e) => {
setForm({
...form,
[e.target.name]: e.target.value,
})

setError('')

}

const handleSubmit = (e) => {
e.preventDefault()

const name = form.name.trim()
const email = form.email.trim()
const message = form.message.trim()

if (!name || !email || !message) {
  setError('Please complete all fields before sending.')
  return
}

const whatsappMessage = [
  'Hello Ephraim!',
  '',
  `My name is ${name}.`,
  `My email address is ${email}.`,
  '',
  'Here is my message:',
  message,
  '',
  '_Sent from portfolio_',
].join('\n')

const whatsappURL = `https://wa.me/254799689652?text=${encodeURIComponent(
  whatsappMessage
)}`

window.open(whatsappURL, '_blank', 'noopener,noreferrer')

setForm({
  name: '',
  email: '',
  message: '',
})

}

const inputClass =
'w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3.5 text-sm text-white placeholder outline-none transition duration-300 focus/60 focus focus/10'

return (
<form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-2xl space-y-6" >
{/* Name */}
<div>
<label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-slate-300" >
Your Name
</label>

    <div className="relative">
      <User
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
      />

      <input
        id="contact-name"
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Enter your full name"
        autoComplete="name"
        maxLength={100}
        required
        className={`${inputClass} pl-11`}
      />
    </div>
  </div>

  {/* Email */}
  <div>
    <label
      htmlFor="contact-email"
      className="mb-2 block text-sm font-medium text-slate-300"
    >
      Your Email
    </label>

    <div className="relative">
      <AtSign
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
      />

      <input
        id="contact-email"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Enter your email address"
        autoComplete="email"
        maxLength={254}
        required
        className={`${inputClass} pl-11`}
      />
    </div>
  </div>

  {/* Message */}
  <div>
    <label
      htmlFor="contact-message"
      className="mb-2 block text-sm font-medium text-slate-300"
    >
      Your Message
    </label>

    <textarea
      id="contact-message"
      name="message"
      value={form.message}
      onChange={handleChange}
      placeholder="Tell me about your project, opportunity or enquiry..."
      rows={6}
      maxLength={3000}
      required
      className={`${inputClass} resize-none`}
    />

    <p className="mt-2 text-right text-xs text-slate-500">
      {form.message.length}/3000 characters
    </p>
  </div>

  {/* Error */}
  {error && (
    <p role="alert" className="text-sm text-red-400">
      {error}
    </p>
  )}

  {/* Submit */}
  <button
    type="submit"
    className="flex w-full items-center justify-center gap-3 rounded-xl bg-cyan-400 px-6 py-4 font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20 active:scale-[0.98]"
  >
    <FaWhatsapp size={21} />
    Send Message via WhatsApp
    <ArrowUpRight size={18} />
  </button>

  <p className="text-center text-xs leading-6 text-slate-500">
    Your message will open in WhatsApp. Review it and press Send to
    deliver it.
  </p>
</form>

)
}

function Contact() {
return (
<section id="contact" className="relative overflow-hidden bg-slate-900 px-6 py-20 sm:py-24 lg:py-28" >
{/* Background decoration */}
<div className="pointer-events-none absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/5 blur-3xl" />

  <div className="relative mx-auto max-w-6xl">

    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-3xl text-center"
    >
      <div className="mb-5 flex items-center justify-center gap-3">
        <span className="h-px w-10 bg-cyan-400" />

        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          Get in touch
        </p>

        <span className="h-px w-10 bg-cyan-400" />
      </div>

      <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
        Have a project or opportunity?

        <span className="mt-2 block text-cyan-400">
          Let's talk.
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
        I'm open to IT support, networking and technology-related
        opportunities where I can contribute my skills, solve problems
        and continue growing professionally.
      </p>
    </motion.div>

    {/* Availability indicator */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mx-auto mt-9 flex w-fit items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-5 py-2.5"
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />

        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
      </span>

      <span className="text-sm font-medium text-emerald-300">
        Open to opportunities
      </span>
    </motion.div>

    {/* Contact cards */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.12 },
        },
      }}
      className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
    >
      {contactLinks.map((contact) => {
        const Icon = contact.icon

        return (
          <motion.a
            key={contact.title}
            href={contact.href}
            target={contact.external ? '_blank' : undefined}
            rel={contact.external ? 'noopener noreferrer' : undefined}
            aria-label={`${contact.title}: ${contact.description}`}
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5 },
              },
            }}
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.98 }}
            className="group relative rounded-2xl border border-white/10 bg-slate-950/60 p-6 backdrop-blur-xl transition-colors duration-300 hover:border-cyan-400/40 hover:bg-slate-950 sm:p-7"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400 transition-colors duration-300 group-hover:bg-cyan-400 group-hover:text-slate-950">
                <Icon size={23} />
              </div>

              <ArrowUpRight
                size={19}
                className="text-slate-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400"
              />
            </div>

            <h3 className="mt-6 text-lg font-semibold text-white">
              {contact.title}
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              {contact.description}
            </p>

            <p className="mt-4 break-words text-xs font-medium text-cyan-300/80">
              {contact.detail}
            </p>
          </motion.a>
        )
      })}
    </motion.div>

    {/* WhatsApp Contact Form */}
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
      className="mt-20 border-t border-white/10 pt-16"
    >
      <div className="mx-auto max-w-2xl text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
          <MessageCircle size={26} />
        </div>

        <h3 className="mt-6 text-2xl font-bold text-white sm:text-3xl">
          Let's start a conversation.
        </h3>

        <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
          Have an opportunity, project or question? Fill in the form
          below and send me a message directly through WhatsApp.
        </p>
      </div>

      <WhatsAppContactForm />
    </motion.div>

    {/* Bottom CTA */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-14 text-center"
    >
      <p className="text-sm text-slate-500">
        I look forward to hearing from you.
      </p>

      <a
        href="https://wa.me/254799689652"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-3 text-sm font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
      >
        <FaWhatsapp size={19} />
        Connect on WhatsApp
        <Send size={15} />
      </a>
    </motion.div>

  </div>
</section>

)
}

export default Contact