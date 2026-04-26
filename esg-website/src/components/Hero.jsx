import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const CONTENT = {
  zh: {
    badge: '石頭紙系列 · Stone Paper Series · ESG 2024',
    h1a: '無塑永續',
    h1b: '由石開始',
    tagline: '琮祐企業——引領綠色包裝革命',
    p1: '我們將石頭轉化為纖維，將廢棄物轉化為資源。',
    p2: '100% 無塑 · 無木漿 · 石頭粉技術 · 可完全分解',
    cta1: '探索產品系列',
    cta2: '索取樣品',
  },
  en: {
    badge: 'Stone Paper Series · Eco Innovation · ESG 2024',
    h1a: 'Plastic-Free',
    h1b: 'Born from Stone',
    tagline: 'CongYou — Leading the Green Packaging Revolution',
    p1: 'We transform minerals into fiber, waste into resources.',
    p2: '100% Plastic-Free · No Wood Pulp · Stone Technology · Fully Degradable',
    cta1: 'Explore Products',
    cta2: 'Request Sample',
  },
}

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

const LEAF_DATA = [
  { left: '7%',  top: '24%', size: 22, cls: 'animate-leaf-1', delay: '0s' },
  { left: '12%', top: '68%', size: 16, cls: 'animate-leaf-2', delay: '-3.5s' },
  { left: '87%', top: '19%', size: 20, cls: 'animate-leaf-3', delay: '-1.5s' },
  { left: '91%', top: '60%', size: 17, cls: 'animate-leaf-1', delay: '-5s' },
  { left: '76%', top: '80%', size: 15, cls: 'animate-leaf-2', delay: '-7s' },
  { left: '3%',  top: '82%', size: 23, cls: 'animate-leaf-3', delay: '-2.5s' },
]

function FloatingLeaf({ left, top, size, cls, delay }) {
  return (
    <div
      className={`absolute pointer-events-none hidden lg:block ${cls}`}
      style={{ left, top, animationDelay: delay }}
    >
      <svg width={size} height={Math.round(size * 1.6)} viewBox="0 0 20 32" fill="none">
        <path d="M10 1 C15 1,19 7,19 14 C19 22,15 30,10 31 C5 30,1 22,1 14 C1 7,5 1,10 1Z"
          fill="#2D5A27" fillOpacity="0.55" />
        <line x1="10" y1="2" x2="10" y2="30" stroke="#1e3d1a" strokeWidth="0.7" opacity="0.45" />
        <path d="M10 11 Q16 9,19 11" stroke="#1e3d1a" strokeWidth="0.5" fill="none" opacity="0.35" />
        <path d="M10 17 Q4 15,1 17"  stroke="#1e3d1a" strokeWidth="0.5" fill="none" opacity="0.35" />
        <path d="M10 23 Q15 21,18 23" stroke="#1e3d1a" strokeWidth="0.5" fill="none" opacity="0.3" />
      </svg>
    </div>
  )
}

export default function Hero() {
  const { lang } = useLanguage()
  const c = CONTENT[lang]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Base marble background */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(145deg,#F9F8F6 0%,#EDEAE4 30%,#F3F1EC 55%,#FBFAF8 80%,#F7F5F2 100%)' }}
      />

      {/* SVG noise texture */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <filter id="hero-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-noise)" />
      </svg>

      {/* ── Ensō circle (slowly rotating brush-stroke circle) ── */}
      <motion.div
        className="absolute pointer-events-none hidden lg:block"
        style={{ top: '50%', left: '50%', marginTop: -390, marginLeft: -390, width: 780, height: 780 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 220, repeat: Infinity, ease: 'linear' }}
      >
        <svg width="780" height="780" viewBox="0 0 780 780" fill="none" opacity="0.042">
          <path
            d="M390 48 C548 40,698 158,722 314 C746 472,668 622,518 680 C368 738,194 696,106 566 C18 436,32 258,126 154 C220 50,356 56,384 50"
            stroke="#2D5A27"
            strokeWidth="38"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </motion.div>

      {/* ── Ghost "石" kanji ── */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden hidden lg:flex items-center">
        <span style={{
          fontSize: 'clamp(300px,38vw,600px)',
          fontWeight: 300,
          color: '#2D5A27',
          opacity: 0.026,
          lineHeight: 1,
          userSelect: 'none',
          transform: 'translateX(55%) translateY(8%)',
        }}>
          石
        </span>
      </div>

      {/* ── Animated gradient blobs ── */}
      <Blob
        style={{ width: 900, height: 900, background: 'radial-gradient(circle,rgba(45,90,39,0.13) 0%,transparent 70%)', left: '-15%', top: '-20%' }}
        animate={{ x: [0, 60, 0], y: [0, 80, 0] }}
        duration={22}
      />
      <Blob
        style={{ width: 700, height: 700, background: 'radial-gradient(circle,rgba(130,195,220,0.09) 0%,transparent 70%)', right: '-10%', bottom: '10%' }}
        animate={{ x: [0, -50, 0], y: [0, -60, 0] }}
        duration={18}
      />
      <Blob
        style={{ width: 500, height: 500, background: 'radial-gradient(circle,rgba(45,90,39,0.07) 0%,transparent 70%)', right: '5%', top: '-5%' }}
        animate={{ x: [0, 40, 0], y: [0, 50, 0] }}
        duration={14}
      />

      {/* Center light bloom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 45%,rgba(255,255,255,0.72) 0%,transparent 60%)' }}
      />

      {/* Marble veins */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none">
        <filter id="vblur"><feGaussianBlur stdDeviation="2.5" /></filter>
        <path d="M-20 220Q180 160,420 320T900 260T1400 370T1800 220" stroke="#2D5A27" strokeWidth="1.8" fill="none" filter="url(#vblur)" />
        <path d="M-20 520Q280 430,600 600T1200 500T1800 580" stroke="#2D5A27" strokeWidth="1.2" fill="none" filter="url(#vblur)" />
        <path d="M220 -20Q380 200,300 520T340 900" stroke="#8B9EA8" strokeWidth="0.9" fill="none" filter="url(#vblur)" />
      </svg>

      {/* ── Floating leaves ── */}
      {LEAF_DATA.map((leaf, i) => <FloatingLeaf key={i} {...leaf} />)}

      {/* Floating rings */}
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

      {/* ── Bamboo silhouette at bottom corners ── */}
      <svg
        className="absolute bottom-0 left-0 right-0 w-full pointer-events-none"
        viewBox="0 0 1440 140"
        preserveAspectRatio="xMidYMax meet"
        style={{ opacity: 0.075 }}
      >
        <g fill="#2D5A27">
          {/* Left cluster */}
          <rect x="18" y="8"  width="12" height="132" rx="6" />
          <rect x="15" y="42" width="18" height="5" rx="2.5" />
          <rect x="15" y="82" width="18" height="5" rx="2.5" />
          <rect x="15" y="118" width="18" height="5" rx="2.5" />
          <path d="M22 44 C38 28,60 34,72 30 C58 40,40 46,22 50Z" />
          <path d="M22 44 C8 30,-8 34,-14 30 C-4 38,10 44,22 50Z" />
          <path d="M22 84 C8 70,-10 74,-16 70 C-6 78,10 84,22 90Z" />

          <rect x="74" y="22"  width="10" height="118" rx="5" />
          <rect x="71" y="55"  width="16" height="4" rx="2" />
          <rect x="71" y="92"  width="16" height="4" rx="2" />
          <rect x="71" y="126" width="16" height="4" rx="2" />
          <path d="M79 57 C93 43,112 48,122 44 C110 52,94 57,79 63Z" />
          <path d="M79 94 C65 80,48 84,40 80 C52 88,66 94,79 100Z" />

          <rect x="116" y="44"  width="9" height="96" rx="4.5" />
          <rect x="113" y="72"  width="15" height="4" rx="2" />
          <rect x="113" y="108" width="15" height="4" rx="2" />
          <path d="M121 74 C135 60,152 64,160 60 C148 68,134 73,121 79Z" />

          {/* Right cluster */}
          <rect x="1410" y="8"  width="12" height="132" rx="6" />
          <rect x="1407" y="42"  width="18" height="5" rx="2.5" />
          <rect x="1407" y="82"  width="18" height="5" rx="2.5" />
          <rect x="1407" y="118" width="18" height="5" rx="2.5" />
          <path d="M1418 44 C1402 28,1380 34,1368 30 C1382 40,1400 46,1418 50Z" />
          <path d="M1418 44 C1432 30,1448 34,1454 30 C1444 38,1430 44,1418 50Z" />
          <path d="M1418 84 C1432 70,1450 74,1456 70 C1446 78,1430 84,1418 90Z" />

          <rect x="1356" y="22"  width="10" height="118" rx="5" />
          <rect x="1353" y="55"  width="16" height="4" rx="2" />
          <rect x="1353" y="92"  width="16" height="4" rx="2" />
          <rect x="1353" y="126" width="16" height="4" rx="2" />
          <path d="M1361 57 C1347 43,1328 48,1318 44 C1330 52,1346 57,1361 63Z" />
          <path d="M1361 94 C1375 80,1392 84,1400 80 C1388 88,1374 94,1361 100Z" />

          <rect x="1315" y="44"  width="9" height="96" rx="4.5" />
          <rect x="1312" y="72"  width="15" height="4" rx="2" />
          <rect x="1312" y="108" width="15" height="4" rx="2" />
          <path d="M1319 74 C1305 60,1288 64,1280 60 C1292 68,1306 73,1319 79Z" />
        </g>
      </svg>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-forest/[0.08] text-forest text-[11px] font-light tracking-[0.18em] mb-10"
        >
          <span className="w-1.5 h-1.5 bg-forest rounded-full animate-pulse" />
          {c.badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 44 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-[3.2rem] sm:text-[4.5rem] md:text-[6rem] font-extralight text-gray-900 tracking-tighter leading-[1.04] mb-4"
        >
          {c.h1a}
          <br />
          <span className="font-light text-forest">{c.h1b}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="text-base md:text-lg text-gray-500 font-light mb-2 tracking-wide"
        >
          {c.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.78 }}
          className="text-sm text-graphite font-light max-w-lg mx-auto mb-4 leading-relaxed"
        >
          {c.p1}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="text-xs text-graphite/55 font-light tracking-widest mb-12"
        >
          {c.p2}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#products"
            className="px-8 py-4 bg-forest text-white rounded-full font-light text-sm tracking-wide hover:bg-forest-dark transition-all duration-300 hover:shadow-xl hover:shadow-forest/20"
          >
            {c.cta1}
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-graphite/25 text-graphite rounded-full font-light text-sm tracking-wide hover:border-forest hover:text-forest transition-all duration-300 bg-white/50 backdrop-blur-sm"
          >
            {c.cta2}
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 9, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] text-graphite/40 tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-graphite/25 to-transparent" />
      </motion.div>
    </section>
  )
}
