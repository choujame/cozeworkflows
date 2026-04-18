import { useRef } from 'react'
import { motion } from 'framer-motion'
import FadeIn from './FadeIn'

const certs = [
  { abbr: 'SGS', name: 'SGS 認證', desc: '國際標準品質驗證' },
  { abbr: 'FDA', name: 'FDA 認證', desc: '美國食品藥物安全' },
  { abbr: 'ISO\n14001', name: 'ISO 14001', desc: '環境管理系統' },
  { abbr: 'CE', name: 'CE 認證', desc: '歐盟合規標誌' },
  { abbr: '綠標', name: '台灣環保標章', desc: '通過台灣環保署認證' },
  { abbr: 'Carbon\nFP', name: '碳足跡標籤', desc: 'Carbon Footprint Label' },
  { abbr: 'ECOLOGO', name: 'ECOLOGO', desc: '北美環保認證' },
]

function CertCard({ cert }) {
  return (
    <div className="flex-shrink-0 mx-3 w-44 bg-white/10 hover:bg-white/15 border border-white/15 hover:border-white/25 rounded-2xl p-5 flex flex-col items-center gap-3 transition-all duration-300 cursor-default">
      <div className="w-16 h-16 rounded-xl bg-white/15 flex items-center justify-center">
        <span className="text-white font-light text-[11px] tracking-wide whitespace-pre-line text-center leading-tight">
          {cert.abbr}
        </span>
      </div>
      <div className="text-center">
        <p className="text-white text-xs font-light">{cert.name}</p>
        <p className="text-white/50 text-[10px] font-light mt-0.5 leading-snug">{cert.desc}</p>
      </div>
    </div>
  )
}

export default function Certification() {
  const duplicated = [...certs, ...certs]

  return (
    <section id="certifications" className="py-28 bg-forest overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-14">
          <p className="text-white/50 text-xs tracking-[0.25em] uppercase mb-3 font-light">Certifications</p>
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">國際認證標章</h2>
          <p className="text-white/60 font-light max-w-md mx-auto text-sm leading-relaxed">
            通過嚴格第三方機構驗證，品質與環保雙重保障。
          </p>
        </FadeIn>
      </div>

      {/* Infinite scroll strip */}
      <div className="relative overflow-hidden">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-forest to-transparent pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-forest to-transparent pointer-events-none" />

        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          className="flex"
          style={{ width: 'max-content' }}
        >
          {duplicated.map((cert, i) => (
            <CertCard key={i} cert={cert} />
          ))}
        </motion.div>
      </div>

      {/* Bottom stats */}
      <div className="max-w-4xl mx-auto px-6 mt-16">
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
            {[
              { value: '7+', label: '國際認證' },
              { value: '15+', label: '年產業經驗' },
              { value: '30+', label: '服務國家' },
              { value: '500+', label: '合作企業' },
            ].map((item) => (
              <div key={item.label} className="bg-forest/80 px-8 py-6 text-center">
                <div className="text-3xl font-light text-white mb-1">{item.value}</div>
                <div className="text-white/50 text-[11px] tracking-wide font-light">{item.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
