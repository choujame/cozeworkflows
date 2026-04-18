import { motion } from 'framer-motion'

function Blob({ style, animate, duration }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{ filter: 'blur(90px)', ...style }}
      animate={animate}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut', repeatType: 'mirror' }}
    />
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Base background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(145deg, #F9F8F6 0%, #EDEAE4 30%, #F3F1EC 55%, #FBFAF8 80%, #F7F5F2 100%)',
        }}
      />

      {/* SVG marble texture */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <filter id="hero-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-noise)" />
      </svg>

      {/* Animated gradient blobs — Shinkai-style luminous glow */}
      <Blob
        style={{
          width: 900,
          height: 900,
          background: 'radial-gradient(circle at center, rgba(45,90,39,0.13) 0%, transparent 70%)',
          left: '-15%',
          top: '-20%',
        }}
        animate={{ x: [0, 60, 0], y: [0, 80, 0] }}
        duration={22}
      />
      <Blob
        style={{
          width: 700,
          height: 700,
          background: 'radial-gradient(circle at center, rgba(130,195,220,0.09) 0%, transparent 70%)',
          right: '-10%',
          bottom: '10%',
        }}
        animate={{ x: [0, -50, 0], y: [0, -60, 0] }}
        duration={18}
      />
      <Blob
        style={{
          width: 500,
          height: 500,
          background: 'radial-gradient(circle at center, rgba(45,90,39,0.07) 0%, transparent 70%)',
          right: '5%',
          top: '-5%',
        }}
        animate={{ x: [0, 40, 0], y: [0, 50, 0] }}
        duration={14}
      />

      {/* Center light bloom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 45%, rgba(255,255,255,0.7) 0%, transparent 60%)',
        }}
      />

      {/* Marble veins */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.035]">
        <filter id="vblur"><feGaussianBlur stdDeviation="2.5" /></filter>
        <path d="M-20 220Q180 160,420 320T900 260T1400 370T1800 220" stroke="#2D5A27" strokeWidth="1.8" fill="none" filter="url(#vblur)" />
        <path d="M-20 520Q280 430,600 600T1200 500T1800 580" stroke="#2D5A27" strokeWidth="1.2" fill="none" filter="url(#vblur)" />
        <path d="M220 -20Q380 200,300 520T340 900" stroke="#8B9EA8" strokeWidth="0.9" fill="none" filter="url(#vblur)" />
      </svg>

      {/* Floating decorative rings */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[22%] left-[7%] w-40 h-40 rounded-full border border-forest/10 hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 25, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-[20%] right-[9%] w-64 h-64 rounded-full border border-forest/[0.06] hidden lg:block"
      />
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-[38%] right-[20%] w-10 h-10 rounded-full bg-forest/[0.08] hidden lg:block"
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-forest/[0.08] text-forest text-[11px] font-light tracking-[0.2em] uppercase mb-10"
        >
          <span className="w-1.5 h-1.5 bg-forest rounded-full animate-pulse" />
          石頭紙系列 · Stone Paper Series · ESG 2024
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 44 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-[3.2rem] sm:text-[4.5rem] md:text-[6rem] font-extralight text-gray-900 tracking-tighter leading-[1.04] mb-5"
        >
          無塑永續
          <br />
          <span className="font-light" style={{ color: '#2D5A27' }}>由石開始</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.72 }}
          className="text-sm md:text-base text-graphite font-light max-w-lg mx-auto mb-4 leading-relaxed"
        >
          我們將石頭轉化為纖維，將廢棄物轉化為資源。
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="text-xs md:text-sm text-graphite/60 font-light max-w-md mx-auto mb-12 leading-relaxed tracking-wide"
        >
          100% 無塑 · 無木漿 · 石頭粉技術 · 可完全分解
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
        >
          <a
            href="#products"
            className="px-8 py-4 bg-forest text-white rounded-full font-light text-sm tracking-wide hover:bg-forest-dark transition-all duration-300 hover:shadow-xl hover:shadow-forest/20"
          >
            探索產品系列
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-graphite/25 text-graphite rounded-full font-light text-sm tracking-wide hover:border-forest hover:text-forest transition-all duration-300 bg-white/50 backdrop-blur-sm"
          >
            索取樣品
          </a>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          animate={{ y: [0, 9, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[9px] text-graphite/40 tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-graphite/25 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}
