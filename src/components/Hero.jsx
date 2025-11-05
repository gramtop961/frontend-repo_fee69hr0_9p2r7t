import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-[#F9FAFB]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Atmospheric gradient veil */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-[#F9FAFB]/80 to-[#F9FAFB]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-24 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white/70 px-4 py-2 text-xs font-medium text-[#4B5563] backdrop-blur-md"
        >
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[#6C47FF]" />
          NeuronForge AI • Build intelligent apps in minutes — no code, infinite power.
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-4xl text-5xl font-semibold leading-tight text-[#0F0F10] md:text-7xl"
          style={{ fontFamily: 'Inter, ui-sans-serif, system-ui' }}
        >
          Build AI Apps Without Limits.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.9, ease: 'easeOut' }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#4B5563] md:text-lg"
        >
          Create, orchestrate, and deploy intelligent software visually. A platform designed for founders and teams who value speed, precision, and craftsmanship.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9, ease: 'easeOut' }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#build"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-[#6C47FF] px-6 py-3 text-white shadow-sm transition-transform duration-300 will-change-transform hover:scale-[1.02] active:scale-[0.99]"
          >
            <span className="absolute inset-0 rounded-xl bg-white/10 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
            <span className="relative z-10">Start Building</span>
          </a>
          <a
            href="#demo"
            className="group inline-flex items-center justify-center rounded-xl border border-[#E5E7EB] bg-white/70 px-6 py-3 text-[#0F0F10] backdrop-blur-md transition-colors hover:border-[#d6d9df]"
          >
            Watch Demo
          </a>
        </motion.div>
      </div>
    </section>
  );
}
