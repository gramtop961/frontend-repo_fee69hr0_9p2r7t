import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section className="relative bg-[#F9FAFB] pb-28 pt-2">
      {/* Pricing embedded */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="text-3xl font-semibold tracking-tight text-[#0F0F10] md:text-4xl">Simple, transparent pricing</h3>
          <p className="mt-3 text-[#4B5563]">Scale from idea to production. No hidden fees.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { name: 'Starter', price: 'Free', desc: 'Prototype quickly. Community support.' },
            { name: 'Pro', price: '$49/mo', desc: 'For teams shipping real products.' },
            { name: 'Enterprise', price: 'Let’s talk', desc: 'Security, SSO, SOC2, SLAs.' },
          ].map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              whileHover={{ scale: 1.01 }}
              className="relative rounded-2xl border border-[#E5E7EB] bg-white/70 p-6 shadow-sm backdrop-blur-md"
            >
              <div className="text-sm uppercase tracking-wide text-[#4B5563]">{t.name}</div>
              <div className="mt-2 text-3xl font-semibold text-[#0F0F10]">{t.price}</div>
              <div className="mt-2 text-sm text-[#4B5563]">{t.desc}</div>
              <a href="#" className="mt-6 inline-flex rounded-lg border border-[#E5E7EB] bg-white/70 px-4 py-2 text-sm text-[#0F0F10] transition-colors hover:border-[#d6d9df]">Choose</a>
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-700 hover:opacity-100" style={{ boxShadow: '0 0 60px 20px rgba(108,71,255,0.08) inset' }} />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-4xl px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-semibold text-[#0F0F10] md:text-5xl"
        >
          The Future Belongs to the Builders.
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mx-auto mt-4 max-w-2xl text-[#4B5563]"
        >
          Move from idea to intelligent software in hours, not months. Craft with intention — ship with elegance.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="mt-8"
        >
          <a href="#build" className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-[#6C47FF] px-6 py-3 text-white shadow-sm transition-transform duration-300 will-change-transform hover:scale-[1.02] active:scale-[0.99]">
            <span className="absolute inset-0 rounded-xl bg-white/10 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
            <span className="relative z-10">Start Building</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
