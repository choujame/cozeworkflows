import { useRef, useEffect, useState } from 'react'
import { useInView } from 'framer-motion'
import { Trees, Wind, Award, Users } from 'lucide-react'
import FadeIn from './FadeIn'

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
      const eased = 1 - Math.pow(1 - t, 4)
      setVal(Math.round(to * eased))
      if (t < 1) rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [inView, to, duration])

  return (
    <span ref={ref}>
      {val.toLocaleString()}
      {suffix}
    </span>
  )
}

const stats = [
  {
    Icon: Trees,
    value: 20000,
    suffix: '+',
    unit: '棵 / 年',
    label: '保護樹木',
    desc: '等效保護成年樹木數量',
  },
  {
    Icon: Wind,
    value: 8500,
    suffix: '噸',
    unit: '/ 年',
    label: 'CO₂ 減量',
    desc: '相較傳統紙箱年均減碳',
  },
  {
    Icon: Award,
    value: 12,
    suffix: '+',
    unit: '項認證',
    label: '國際認證',
    desc: 'SGS · FDA · ISO · CE',
  },
  {
    Icon: Users,
    value: 500,
    suffix: '+',
    unit: '全球夥伴',
    label: '合作企業',
    desc: '橫跨 30+ 個國家與地區',
  },
]

export default function DataDashboard() {
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
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(61,122,53,0.35) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <FadeIn className="text-center mb-14">
          <p className="text-white/40 text-[10px] tracking-[0.28em] uppercase mb-3 font-light">
            Impact Data
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-white mb-3">環保貢獻數據</h2>
          <p className="text-white/50 font-light text-sm max-w-sm mx-auto leading-relaxed">
            每一份訂單，都是對地球的一份承諾。
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1}>
              <div className="group bg-white/[0.05] hover:bg-white/[0.09] border border-white/[0.07] hover:border-white/[0.15] rounded-2xl p-6 text-center transition-all duration-400 h-full">
                <div className="w-11 h-11 rounded-xl bg-white/[0.08] group-hover:bg-white/[0.13] flex items-center justify-center mx-auto mb-4 transition-colors">
                  <stat.Icon className="w-5 h-5 text-white/55" strokeWidth={1.5} />
                </div>
                <div className="text-3xl md:text-[2.4rem] font-light text-white leading-none mb-1">
                  <Counter to={stat.value} suffix={stat.suffix} duration={2.2 + i * 0.25} />
                </div>
                <div className="text-white/35 text-[10px] tracking-wide font-light mb-3">{stat.unit}</div>
                <div className="text-white/80 text-sm font-light">{stat.label}</div>
                <div className="text-white/35 text-[10px] font-light mt-1 leading-snug">{stat.desc}</div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom bar */}
        <FadeIn delay={0.4} className="mt-12">
          <div className="flex flex-wrap items-center justify-center gap-6 py-6 border-t border-white/[0.08]">
            {[
              '榮獲 2023 台灣 ESG 創新獎',
              '碳足跡標籤認證企業',
              'ISO 14001 環境管理',
              'B Corp 認證申請中',
            ].map((item) => (
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
