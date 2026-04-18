import { motion } from 'framer-motion'

const stats = [
  { value: '60%', label: '減少碳排放' },
  { value: '100%', label: '可回收材質' },
  { value: '0%', label: '木漿使用' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Marble background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 20% 80%, rgba(45,90,39,0.07) 0%, transparent 55%),
            radial-gradient(ellipse at 80% 20%, rgba(45,90,39,0.05) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 40%, rgba(255,255,255,0.65) 0%, transparent 65%),
            linear-gradient(145deg, #F9F7F5 0%, #ECE8E2 25%, #F4F1EC 50%, #FAFAF8 75%, #F6F4F1 100%)
          `,
        }}
      />

      {/* SVG marble noise texture */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
        <filter id="marble-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#marble-noise)" />
      </svg>

      {/* Subtle vein lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <filter id="vein-blur">
          <feGaussianBlur stdDeviation="2" />
        </filter>
        <path
          d="M-10 200 Q 200 150, 400 300 T 800 250 T 1200 350 T 1600 200"
          stroke="#2D5A27"
          strokeWidth="1.5"
          fill="none"
          filter="url(#vein-blur)"
        />
        <path
          d="M-10 500 Q 300 420, 600 580 T 1100 480 T 1600 560"
          stroke="#2D5A27"
          strokeWidth="1"
          fill="none"
          filter="url(#vein-blur)"
        />
        <path
          d="M200 -10 Q 350 200, 280 500 T 320 900"
          stroke="#6C757D"
          strokeWidth="0.8"
          fill="none"
          filter="url(#vein-blur)"
        />
      </svg>

      {/* Floating decorative circles */}
      <motion.div
        animate={{ y: [0, -18, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-[8%] w-36 h-36 rounded-full border border-forest/10 hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 22, 0], rotate: [0, -4, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute bottom-1/4 right-[10%] w-56 h-56 rounded-full border border-forest/[0.07] hidden lg:block"
      />
      <motion.div
        animate={{ scale: [1, 1.06, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute top-[35%] right-[22%] w-12 h-12 rounded-full bg-forest/[0.06] hidden lg:block"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-[30%] left-[18%] w-8 h-8 rounded-full bg-forest/[0.08] hidden lg:block"
      />

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-forest/[0.08] text-forest text-xs font-light tracking-[0.2em] uppercase mb-10"
        >
          <span className="w-1.5 h-1.5 bg-forest rounded-full animate-pulse" />
          石頭紙系列 · Stone Paper Series
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="text-[3.5rem] sm:text-7xl md:text-8xl font-extralight text-gray-900 tracking-tight leading-[1.05] mb-6"
        >
          無塑永續
          <br />
          <span className="text-forest font-light">由石開始</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-base md:text-lg text-graphite font-light max-w-xl mx-auto mb-12 leading-relaxed"
        >
          以天然礦石為原料，完全取代傳統塑料與木漿。
          <br className="hidden sm:block" />
          防水 · 減碳 · 堅固 · 可完全回收
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
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
            className="px-8 py-4 border border-graphite/25 text-graphite rounded-full font-light text-sm tracking-wide hover:border-forest hover:text-forest transition-all duration-300 bg-white/40"
          >
            預約諮詢
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="flex items-center justify-center gap-0 max-w-sm mx-auto"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex-1 text-center">
              {i > 0 && <div className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-px bg-graphite/15" />}
              <div className="relative">
                {i > 0 && <div className="absolute -left-px top-1/2 -translate-y-1/2 h-8 w-px bg-graphite/15" />}
                <div className="text-2xl font-light text-forest">{stat.value}</div>
                <div className="text-[10px] text-graphite mt-0.5 tracking-wide">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] text-graphite/50 tracking-[0.25em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-graphite/30 to-transparent" />
      </motion.div>
    </section>
  )
}
