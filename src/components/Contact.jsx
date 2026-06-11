import { useState } from 'react';
import { Mail, MapPin, Send, MessageCircle, Navigation } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '../data/siteData.js';

const contactItems = [
  { label: 'Telegram', value: profile.telegramUsername, icon: Send, href: profile.telegramUrl },
  { label: 'Email', value: profile.email, icon: Mail, href: `mailto:${profile.email}` },
  { label: 'Manzil', value: profile.location, icon: MapPin, href: `https://maps.google.com/?q=${profile.location}` },
];

export default function Contact() {
  const [toast, setToast] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setToast(true);
    event.currentTarget.reset();
    window.setTimeout(() => setToast(false), 2600);
  };

  return (
    <section id="contact" className="relative py-8">
      <div className="container-shell">
        <div className="mb-5">
          <h2 className="section-title">Men bilan bog'laning</h2>
          <div className="section-underline" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
          className="glass-card grid gap-6 overflow-hidden rounded-xl p-5 sm:p-6 xl:grid-cols-[.9fr_1fr_1.25fr]"
        >
          <div className="relative">
            <p className="text-[15px] leading-7 text-slate-300">
              Sizda loyiha yoki taklif bormi? Menga yozing, birgalikda ajoyib narsa yaratamiz!
            </p>
            <div className="mt-8 hidden h-28 w-44 rotate-[-12deg] place-items-center rounded-[2rem] bg-gradient-to-br from-blue-500/30 to-violet-600/40 text-blue-100 shadow-neon sm:grid">
              <Navigation size={64} />
            </div>
          </div>
          <div className="space-y-4">
              {contactItems.map(({ label, value, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target={label === 'Email' ? undefined : '_blank'}
                  rel={label === 'Email' ? undefined : 'noreferrer'}
                  className="flex items-center gap-3 rounded-xl p-2 transition hover:bg-white/[0.04]"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/[0.045] text-cyan-100">
                    <Icon size={19} />
                  </span>
                  <span>
                    <span className="text-sm font-bold text-slate-300">{label}: </span>
                    <span className="break-words text-sm text-white">{value}</span>
                  </span>
                </a>
              ))}
          </div>

          <form onSubmit={handleSubmit} className="relative rounded-xl border border-white/10 bg-night/35 p-4">
            <div className="absolute -right-14 -top-16 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />
            <div className="relative grid gap-3 2xl:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-slate-200">
                <span className="sr-only">Ismingiz</span>
                <input
                  required
                  name="name"
                  className="rounded-lg border border-white/10 bg-white/[0.035] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/45 focus:ring-4 focus:ring-cyan-300/10"
                  placeholder="Ismingizni kiriting"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-200">
                <span className="sr-only">Emailingiz</span>
                <input
                  required
                  type="email"
                  name="email"
                  className="rounded-lg border border-white/10 bg-white/[0.035] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/45 focus:ring-4 focus:ring-cyan-300/10"
                  placeholder="email@example.com"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-200 2xl:col-span-2">
                <span className="sr-only">Xabaringiz</span>
                <textarea
                  required
                  name="message"
                  rows="4"
                  className="resize-none rounded-lg border border-white/10 bg-white/[0.035] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/45 focus:ring-4 focus:ring-cyan-300/10"
                  placeholder="Loyiha haqida qisqacha yozing"
                />
              </label>
              <button type="submit" className="primary-button mt-1 w-full 2xl:col-span-2">
                <MessageCircle className="mr-2" size={18} />
                Yuborish
              </button>
            </div>
          </form>
        </motion.div>
      </div>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.94 }}
            className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-2xl border border-cyan-300/30 bg-night/90 px-5 py-3 text-sm font-bold text-cyan-100 shadow-neon backdrop-blur-xl"
          >
            Xabaringiz yuborildi!
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
