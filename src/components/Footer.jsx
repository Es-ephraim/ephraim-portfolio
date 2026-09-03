function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">

        <p>
          © {new Date().getFullYear()} Ephraim Munene Kithinji. All rights reserved.
        </p>

        <p>
          Built with React & Tailwind CSS
        </p>

      </div>
    </footer>
  )
}

export default Footer