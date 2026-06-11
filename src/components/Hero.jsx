import { ArrowRight, Briefcase, Box, Clock3, Code2, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { profile, socialLinks } from '../data/siteData.js';

const stats = [
  ['10+', 'Loyihalar', Box],
  ['5+', 'Mamnun mijozlar', Users],
  ['3+', 'Yillik tajriba', Clock3],
  ['100K+', 'Yozilgan kod qatori', Code2],
];

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 sm:pt-32">
      <div className="container-shell grid items-center gap-10 pb-9 lg:grid-cols-[.95fr_1.05fr]">
        <motion.div initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,.9)]" />
            {profile.role}
          </div>

          <h1 className="max-w-xl text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl">
            {profile.firstName}
            <span className="gradient-text block">{profile.lastName}</span>
          </h1>

          <p className="mt-6 max-w-[440px] text-[15px] leading-7 text-slate-300">
            Men Telegram botlar, web ilovalar va backend tizimlar yaratishga ixtisoslashgan dasturchiman.
            G'oyalarni kod orqali real mahsulotga aylantiraman.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="#projects" className="primary-button">
              Loyihalarim <ArrowRight className="ml-2" size={18} />
            </a>
            <a href="#contact" className="secondary-button">
              Mening xizmatlarim <Briefcase className="ml-2" size={16} />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            {socialLinks.map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                title={label}
                className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/[0.055] text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-violet-300/50 hover:bg-violet-300/10 hover:text-white hover:shadow-neon"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative mx-auto w-full max-w-[470px]"
        >
          <div className="absolute inset-4 rounded-full bg-blue-500/25 blur-3xl" />
          <div className="absolute left-8 top-12 h-3 w-3 rounded-full bg-violet-500 shadow-neon" />
          <div className="absolute right-1 top-20 h-4 w-4 rounded-full bg-indigo-500 shadow-neon" />
          <div className="absolute bottom-12 right-10 h-3 w-3 rounded-full bg-violet-500 shadow-neon" />
          <div className="relative mx-auto grid aspect-square w-[78%] min-w-[285px] max-w-[360px] place-items-center rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-600 p-1.5 shadow-neon">
            <div className="grid h-full w-full place-items-center overflow-hidden rounded-full bg-[#151a2c]">
              <div className="grid h-[92%] w-[92%] place-items-center overflow-hidden rounded-full bg-[radial-gradient(circle_at_50%_18%,rgba(148,163,184,.32),rgba(15,23,42,.96)_62%)] text-center">
                {profile.imageUrl ? (
                  <img
                    src={profile.imageUrl}
                    alt={`${profile.firstName} ${profile.lastName}`}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div>
                    <div className="mx-auto mb-5 grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-cyan-300 to-violet-500 text-night shadow-neon">
                      <Code2 size={46} />
                    </div>
                    <p className="text-5xl font-black">{profile.initials}</p>
                    <p className="mt-2 text-sm font-semibold text-slate-300">Profile image</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="container-shell pb-8">
        <div className="glass-card grid gap-0 rounded-xl p-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([value, label, Icon], index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="flex items-center justify-center gap-4 rounded-xl p-4 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.04]"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/[0.045] text-blue-300">
                <Icon size={25} />
              </span>
              <span>
                <span className="block text-3xl font-black text-white">{value}</span>
                <span className="text-sm text-slate-300">{label}</span>
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
