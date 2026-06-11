import { Code2, Mail, MapPin, UserRound } from 'lucide-react';
import { motion } from 'framer-motion';
import { profile } from '../data/siteData.js';

export default function About() {
  return (
    <section id="about" className="py-5">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65 }}
          className="glass-card relative overflow-hidden rounded-xl p-7 sm:p-9"
        >
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[.8fr_1.45fr] lg:items-center">
            <div className="hidden rounded-3xl border border-white/10 bg-white/[0.035] p-9 lg:block">
              <div className="relative mx-auto grid h-40 w-40 place-items-center rounded-3xl bg-gradient-to-br from-blue-500/15 to-violet-500/20 shadow-neon">
                <div className="absolute left-8 top-8 h-14 w-14 rounded-full bg-gradient-to-br from-blue-400 to-violet-500" />
                <UserRound className="relative mt-10 text-violet-300" size={84} />
                <span className="absolute right-8 top-16 grid h-10 w-10 place-items-center rounded-xl bg-[#26305f] text-blue-200">
                  <Code2 size={22} />
                </span>
              </div>
            </div>
            <div>
              <h2 className="section-title">Men haqimda</h2>
              <div className="section-underline" />
              <p className="mt-6 text-[15px] leading-7 text-slate-300">
                Men Javohir Ibrohimov - backend developer va Telegram bot yaratuvchisiman. Python,
                Node.js, PostgreSQL va zamonaviy web texnologiyalar bilan ishlayman. Maqsadim - foydali,
                tez va ishonchli mahsulotlar yaratish.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <a
                  href={`https://maps.google.com/?q=${profile.location}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] p-3 text-sm text-slate-200 transition hover:border-cyan-300/30 hover:bg-cyan-300/10"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/[0.045]"><MapPin className="text-pink-200" size={20} /></span>
                  <span><span className="block text-xs text-slate-400">Manzil:</span>{profile.location}</span>
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] p-3 text-sm text-slate-200 transition hover:border-cyan-300/30 hover:bg-cyan-300/10"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/[0.045]"><Mail className="text-slate-200" size={20} /></span>
                  <span><span className="block text-xs text-slate-400">Email:</span><span className="break-all">{profile.email}</span></span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
