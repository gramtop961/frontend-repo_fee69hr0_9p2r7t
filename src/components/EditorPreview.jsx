import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

function Block({ title, accent }) {
  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="group rounded-2xl border border-[#E5E7EB] bg-white/60 p-4 shadow-sm backdrop-blur-md"
    >
      <div className="mb-3 flex items-center justify-between">
        <div className="text-sm font-medium text-[#0F0F10]">{title}</div>
        <span className="h-2 w-2 rounded-full" style={{ background: accent }} />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="h-3 rounded bg-[#F3F4F6]" />
        ))}
      </div>
    </motion.div>
  );
}

export default function EditorPreview() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.98, 1.04]);
  const y = useTransform(scrollYProgress, [0, 1], [30, -10]);

  return (
    <section id="build" ref={ref} className="relative bg-[#F9FAFB] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-[#0F0F10] md:text-4xl">Design your AI, visually.</h2>
          <p className="mt-4 text-[#4B5563]">Drag-and-drop logic, chain models, connect APIs, and deploy in minutes. Zoom in to details; zoom out to orchestration.</p>
        </div>

        <motion.div style={{ scale, y }} className="relative mx-auto grid max-w-6xl grid-cols-1 gap-6 rounded-3xl border border-[#E5E7EB] bg-white/70 p-6 shadow-xl backdrop-blur-xl md:grid-cols-3">
          <div className="md:col-span-2 space-y-4">
            <Block title="Input Parser" accent="#6C47FF" />
            <Block title="Model: GPT-4o" accent="#9b8bff" />
            <Block title="Tool: Web Search" accent="#60A5FA" />
          </div>
          <div className="space-y-4">
            <Block title="Branch: If intent=book" accent="#F59E0B" />
            <Block title="API: Calendar" accent="#34D399" />
            <Block title="Output Formatter" accent="#94A3B8" />
          </div>

          {/* Connection lines */}
          <motion.div
            aria-hidden
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2 }}
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(108,71,255,0.15),transparent_60%)]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
