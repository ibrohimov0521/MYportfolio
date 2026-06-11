import { Braces, Code2, Container, Database, GitBranch, HardDrive, Server, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const skills = [
  ['Python', Code2],
  ['Node.js', Server],
  ['PostgreSQL', Database],
  ['MongoDB', Database],
  ['Redis', HardDrive],
  ['JavaScript', Braces],
  ['TypeScript', Braces],
  ['Docker', Container],
  ['Git', GitBranch],
  ['Linux', Terminal],
];

export default function Skills() {
  return (
    <section id="skills" className="py-8">
      <div className="container-shell">
        <div className="mb-5">
          <h2 className="section-title">Texnologiyalar</h2>
          <div className="section-underline" />
        </div>

        <div className="glass-card grid gap-2 rounded-xl p-4 sm:grid-cols-5 lg:grid-cols-10">
          {skills.map(([skill, Icon], index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.035 }}
              className="group rounded-xl p-3 text-center transition duration-300 hover:-translate-y-1 hover:bg-white/[0.05]"
            >
              <div className="mx-auto grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-cyan-300/15 to-violet-500/20 text-cyan-100 transition group-hover:scale-110">
                <Icon size={23} />
              </div>
              <p className="mt-3 text-xs font-bold text-slate-100">{skill}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
