import { motion } from 'framer-motion';

const items = [
  {
    title: 'Prebuilt Models & Agents',
    desc: 'Start with expert-curated blueprints. Swap models, chain tools, and publish fast.',
  },
  {
    title: 'Workflow Builder',
    desc: 'Visual orchestration with branches, retries, evals, and human-in-the-loop.',
  },
  {
    title: 'Integrations & APIs',
    desc: 'Connect your stack — databases, webhooks, vector search, analytics, and more.',
  },
  {
    title: 'Real-time Testing',
    desc: 'Stream logs, trace tokens, diff outputs, and ship with confidence.',
  },
];

export default function Features() {
  return (
    <section id="demo" className="relative bg-[#F9FAFB] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-[#0F0F10] md:text-4xl">Why it’s different</h2>
          <p className="mt-4 text-[#4B5563]">Luxury-grade interaction design meets production rigor. Every detail has intent.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.05, duration: 0.6, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-[#E5E7EB] bg-white/70 p-6 shadow-sm backdrop-blur-md"
            >
              <div className="text-lg font-semibold text-[#0F0F10]">{it.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-[#4B5563]">{it.desc}</p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-[#E5E7EB] to-transparent" />
              <div className="mt-4 text-sm text-[#4B5563]">Micro-polished interactions. Feels alive, never loud.</div>
            </motion.div>
          ))}
        </div>

        {/* Minimal testimonial strip */}
        <div className="mx-auto mt-16 max-w-5xl rounded-2xl border border-[#E5E7EB] bg-white/60 p-6 text-center backdrop-blur-md">
          <blockquote className="text-lg text-[#0F0F10]">“NeuronForge compresses months into days. We shipped an enterprise-grade AI agent in a week.”</blockquote>
          <div className="mt-2 text-sm text-[#4B5563]">Amira K., CTO • Meridian Systems</div>
        </div>
      </div>
    </section>
  );
}
