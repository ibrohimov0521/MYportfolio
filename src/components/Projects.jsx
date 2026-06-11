import { Bot, Boxes, ShoppingBag, ClipboardCheck, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'BestGamers Assistant',
    text: 'Telegram bot orqali foydalanuvchilarga avtomatlashtirilgan xizmat ko‘rsatish.',
    tag: 'Telegram Bot',
    icon: Bot,
  },
  {
    title: 'EMU Test Bot',
    text: 'Testlar, imtihonlar va natijalarni boshqaradigan Telegram bot.',
    tag: 'Telegram Bot',
    icon: ClipboardCheck,
  },
  {
    title: 'Best Tacos',
    text: 'Fast food buyurtma qilish va yetkazib berish xizmati.',
    tag: 'Web App',
    icon: ShoppingBag,
  },
  {
    title: 'Ombor Hisob Tizimi',
    text: 'Ombordagi tovarlar kirim-chiqimi va qoldiqni boshqarish tizimi.',
    tag: 'Web App',
    icon: Boxes,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-8">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="mb-5 flex items-end justify-between gap-4"
        >
          <div>
            <h2 className="section-title">Loyihalarim</h2>
            <div className="section-underline" />
          </div>
          <a href="#contact" className="secondary-button hidden px-4 py-2 text-xs sm:inline-flex">
            Barcha loyihalar <ArrowUpRight className="ml-2" size={15} />
          </a>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {projects.map(({ title, text, tag, icon: Icon }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.28 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="glass-card group relative overflow-hidden rounded-xl p-5 transition duration-300 hover:-translate-y-2 hover:border-violet-300/35 hover:shadow-neon"
            >
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-cyan-300/10 blur-3xl transition group-hover:bg-cyan-300/20" />
              <div className="relative">
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 text-white shadow-neon">
                  <Icon size={30} />
                </div>
              </div>
              <h3 className="relative mt-7 text-base font-black text-white">{title}</h3>
              <p className="relative mt-3 min-h-[64px] text-xs leading-6 text-slate-300">{text}</p>
              <span className="relative mt-4 inline-flex rounded-full bg-white/[0.06] px-3 py-1.5 text-[11px] font-bold text-white">
                {tag}
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
