import { useEffect, useState } from 'react';
import { Menu, MessageCircle, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { profile } from '../data/siteData.js';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        scrolled ? 'border-b border-white/10 bg-[#050816]/82 shadow-2xl backdrop-blur-2xl' : 'bg-transparent'
      }`}
    >
      <nav className="container-shell flex h-[74px] items-center justify-between">
        <a href="#home" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          {profile.logoImageUrl ? (
            <img
              src={profile.logoImageUrl}
              alt={`${profile.logoName} logo`}
              className="h-10 w-10 rounded-full border border-blue-400/45 object-cover shadow-[0_0_22px_rgba(59,130,246,.35)]"
            />
          ) : (
            <span className="gradient-text text-3xl font-black leading-none">
              {profile.initials}
            </span>
          )}
          <span className="text-[15px] font-black uppercase tracking-wide text-white transition group-hover:text-cyan-200">
            {profile.logoName}
          </span>
        </a>

        <div className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative py-7 text-sm font-semibold transition hover:text-white ${
                link.href === '#home' ? 'text-white after:absolute after:bottom-3 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-gradient-to-r after:from-blue-500 after:to-violet-500' : 'text-slate-300'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a href="#contact" className="primary-button hidden px-5 py-2.5 lg:inline-flex">
          Let's Talk <MessageCircle className="ml-2" size={15} />
        </a>

        <button
          type="button"
          aria-label="Menyuni ochish"
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5 text-white lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="container-shell pb-5 lg:hidden"
        >
          <div className="glass-card rounded-3xl p-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-cyan-300/10 hover:text-cyan-100"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="primary-button mt-2 w-full">
              Let's Talk
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
