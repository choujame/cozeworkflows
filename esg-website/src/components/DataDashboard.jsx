import { useRef, useEffect, useState } from 'react'
import { useInView } from 'framer-motion'
import { Trees, Wind, Award, Users } from 'lucide-react'
import FadeIn from './FadeIn'
import { useLanguage } from '../context/LanguageContext'

function Counter({ to, suffix = '', duration = 2.5 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    let rafId
    const startTime = performance.now()
    const tick = (now) => {
      const t = Math.min((now - startTime) / (duration * 1000), 1)
      setVal(Math.round(to * (1 - Math.pow(1 - t, 4))))
      if (t < 1) rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [inView, to, duration])

  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>
}

const STATS = {
  zh: [
    { Icon: Trees, value: 20000, suffix: '+', unit: '棵 / 年', label: '保護樹木', desc: '等效保護成年樹木數量' },
    { Icon: Wind,  value: 8500,  suffix: '噸', unit: '/ 年',   label: 'CO₂ 減量', desc: '相較傳統紙箱年均減碳' },
    { Icon: Award, value: 12,    suffix: '+', unit: '項認證',   label: '國際認證', desc: 'SGS · FDA · ISO · CE' },
    { Icon: Users, value: 500,   suffix: '+', unit: '全球夥伴', label: '合作企業', desc: '橫跨 30+ 個國家與地區' },
  ],
  en: [
    { Icon: Trees, value: 20000, suffix: '+', unit: 'trees / yr',     label: 'Trees Saved', desc: 'Equivalent mature trees annually' },
    { Icon: Wind,  value: 8500,  suffix: 't', unit: '/ yr',           label: 'CO₂ Reduced', desc: 'vs. traditional packaging' },
    { Icon: Award, value: 12,    suffix: '+', unit: 'certifications',  label: 'Certified',   desc: 'SGS · FDA · ISO · CE' },
    { Icon: Users, value: 500,   suffix: '+', unit: 'global partners', label: 'Partners',    desc: 'Across 30+ countries' },
  ],
}

const FOOTER = {
  zh: ['榮獲 2023 台灣 ESG 創新獎', '碳足跡標籤認證企業', 'ISO 14001 環境管理', 'B Corp 認證申請中'],
  en: ['2023 Taiwan ESG Innovation Award', 'Carbon Footprint Labeled', 'ISO 14001 Certified', 'B Corp Pending'],
}

const COPY = {
  zh: { eyebrow: 'Impact Data', title: '環保貢獻數據', subtitle: '每一份訂單，都是對地球的一份承諾。' },
  en: { eyebrow: 'Impact Data', title: 'Environmental Impact', subtitle: 'Every order is a commitment to the planet.' },
}

export default function DataDashboard() {
  const { lang } = useLanguage()
  const stats = STATS[lang]
  const c = COPY[lang]

  return (
    <section className="py-24 bg-forest-dark relative overflow-hidden">
      {/* Noise texture */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.025] pointer-events-none">
        <filter id="dd-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#dd-noise)" fill="white" />
      </svg>

      {/* Strong radial gradient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%,rgba(61,122,53,0.45) 0%,transparent 70%)' }}
      />

      {/* Ghost "緑" kanji — right side */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden hidden lg:flex items-center justify-end">
        <span style={{
          fontSize: 'clamp(320px,42vw,640px)',
          fontWeight: 300,
          color: 'white',
          opacity: 0.022,
          lineHeight: 1,
          userSelect: 'none',
          marginRight: '-6%',
        }}>
          緑
        </span>
      </div>

      {/* Bamboo silhouette — left side */}
      <svg
        className="absolute left-0 bottom-0 top-0 pointer-events-none hidden lg:block"
        viewBox="0 0 120 300"
        style={{ height: '100%', width: 'auto', opacity: 0.055 }}
        preserveAspectRatio="xMinYMid meet"
      >
        <g fill="white">
          <rect x="10"  y="0"   width="9"  height="300" rx="4.5" />
          <rect x="7"   y="40"  width="15" height="4"   rx="2" />
          <rect x="7"   y="90"  width="15" height="4"   rx="2" />
          <rect x="7"   y="140" width="15" height="4"   rx="2" />
          <rect x="7"   y="190" width="15" height="4"   rx="2" />
          <rect x="7"   y="240" width="15" height="4"   rx="2" />
          <path d="M14 42 C28 28,46 33,56 28 C44 38,28 43,14 48Z" />
          <path d="M14 42 C2 30,-12 34,-18 30 C-10 38,2 44,14 50Z" />
          <path d="M14 142 C28 128,44 132,52 128 C40 138,26 143,14 149Z" />
          <path d="M14 192 C2 180,-12 184,-18 180 C-10 188,2 194,14 200Z" />

          <rect x="52" y="20"  width="7"  height="280" rx="3.5" />
          <rect x="49" y="65"  width="13" height="3.5" rx="1.75" />
          <rect x="49" y="115" width="13" height="3.5" rx="1.75" />
          <rect x="49" y="165" width="13" height="3.5" rx="1.75" />
          <rect x="49" y="215" width="13" height="3.5" rx="1.75" />
          <rect x="49" y="265" width="13" height="3.5" rx="1.75" />
          <path d="M56 67 C68 53,83 57,91 53 C81 62,67 67,56 72Z" />
          <path d="M56 167 C44 153,30 157,22 153 C32 162,46 167,56 173Z" />

          <rect x="83" y="50"  width="6"  height="250" rx="3" />
          <rect x="80" y="88"  width="12" height="3"   rx="1.5" />
          <rect x="80" y="135" width="12" height="3"   rx="1.5" />
          <rect x="80" y="182" width="12" height="3"   rx="1.5" />
          <rect x="80" y="229" width="12" height="3"   rx="1.5" />
          <path d="M86 90 C98 77,112 81,119 77 C109 86,96 90,86 95Z" />
          <path d="M86 183 C74 170,60 174,53 170 C63 179,76 183,86 188Z" />
        </g>
      </svg>

      {/* Wave cut at bottom */}
      <svg
        className="absolute bottom-0 left-0 right-0 w-full pointer-events-none"
        viewBox="0 0 1440 52"
        preserveAspectRatio="none"
        style={{ display: 'block' }}
      >
        <path
          d="M0,30 C180,8 360,46 540,24 C720,2 900,40 1080,22 C1260,4 1350,32 1440,20 L1440,52 L0,52 Z"
          fill="white"
        />
      </svg>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <FadeIn className="text-center mb-14">
          <p className="text-white/40 text-[10px] tracking-[0.28em] uppercase mb-3 font-light">{c.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-light text-white mb-3">{c.title}</h2>
          <p className="text-white/50 font-light text-sm max-w-sm mx-auto">{c.subtitle}</p>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1}>
              <div className="group bg-white/[0.06] hover:bg-white/[0.11] border border-white/[0.08] hover:border-white/[0.18] rounded-2xl p-6 text-center transition-all duration-400 h-full">
                <div className="w-11 h-11 rounded-xl bg-white/[0.09] group-hover:bg-white/[0.15] flex items-center justify-center mx-auto mb-4 transition-colors">
                  <stat.Icon className="w-5 h-5 text-white/60" strokeWidth={1.5} />
                </div>
                <div className="text-3xl md:text-[2.4rem] font-light text-white leading-none mb-1">
                  <Counter to={stat.value} suffix={stat.suffix} duration={2.2 + i * 0.25} />
                </div>
                <div className="text-white/35 text-[10px] tracking-wide font-light mb-3">{stat.unit}</div>
                <div className="text-white/80 text-sm font-light">{stat.label}</div>
                <div className="text-white/35 text-[10px] font-light mt-1">{stat.desc}</div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4} className="mt-12">
          <div className="flex flex-wrap items-center justify-center gap-6 py-6 border-t border-white/[0.08]">
            {FOOTER[lang].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-white/30" />
                <span className="text-white/40 text-xs font-light">{item}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
