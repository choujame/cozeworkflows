import { motion } from 'framer-motion'
import FadeIn from './FadeIn'

const certs = [
  { abbr: 'SGS', name: 'SGS 認證', desc: '國際品質驗證' },
  { abbr: 'FDA', name: 'FDA 認證', desc: '美國食品安全' },
  { abbr: 'ISO\n14001', name: 'ISO 14001', desc: '環境管理系統' },
  { abbr: 'RoHS', name: 'RoHS 合規', desc: '歐盟有害物質限制' },
  { abbr: 'CE', name: 'CE 認證', desc: '歐盟合規標誌' },
  { abbr: '環保\n標章', name: '台灣環保標章', desc: '通過環保署認證' },
  { abbr: 'Carbon\nFP', name: '碳足跡標籤', desc: 'Carbon Footprint' },
  { abbr: 'BSCI', name: 'BSCI 認證', desc: '商業社會責任' },
]

const partners = [
  { name: '鴻海集團', en: 'Foxconn' },
  { name: '統一企業', en: 'Uni-President' },
  { name: '全聯福利中心', en: 'PX Mart' },
  { name: '家樂福', en: 'Carrefour' },
  { name: '順豐速運', en: 'SF Express' },
  { name: 'MUJI', en: '無印良品' },
  { name: '博客來', en: 'Books.com.tw' },
  { name: 'Shopee', en: '蝦皮購物' },
  { name: 'DHL', en: '敦豪快遞' },
  { name: 'IKEA', en: '宜家家居' },
]

function CertCard({ cert }) {
  return (
    <div className="flex-shrink-0 mx-3 w-40 bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.12] hover:border-white/[0.22] rounded-2xl p-5 flex flex-col items-center gap-3 transition-all duration-300">
      <div className="w-14 h-14 rounded-xl bg-white/[0.12] flex items-center justify-center">
        <span className="text-white font-light text-[11px] tracking-wide whitespace-pre-line text-center leading-tight">
          {cert.abbr}
        </span>
      </div>
      <div className="text-center">
        <p className="text-white text-xs font-light">{cert.name}</p>
        <p className="text-white/45 text-[10px] font-light mt-0.5">{cert.desc}</p>
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
          <p className="text-white/40 text-[10px] tracking-[0.28em] uppercase mb-3 font-light">Certifications</p>
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">國際認證標章</h2>
          <p className="text-white/55 font-light max-w-md mx-auto text-sm leading-relaxed">
            通過全球最嚴格第三方機構驗證，品質與環保雙重保障。
          </p>
        </FadeIn>
      </div>

      {/* Infinite cert scroll */}
      <div className="relative overflow-hidden mb-20">
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-forest to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-forest to-transparent pointer-events-none" />
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          className="flex py-2"
          style={{ width: 'max-content' }}
        >
          {duplicated.map((cert, i) => (
            <CertCard key={i} cert={cert} />
          ))}
        </motion.div>
      </div>

      {/* Partner logos wall */}
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-10">
          <p className="text-white/40 text-[10px] tracking-[0.28em] uppercase font-light">Trusted Partners</p>
          <p className="text-white/60 text-sm font-light mt-2">全球品牌信賴夥伴</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {partners.map((p) => (
              <div
                key={p.name}
                className="bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.07] hover:border-white/[0.15] rounded-xl px-4 py-4 text-center transition-all duration-300 group"
              >
                <p className="text-white/70 text-xs font-light group-hover:text-white/90 transition-colors">{p.name}</p>
                <p className="text-white/30 text-[10px] font-light mt-0.5">{p.en}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Stats */}
        <FadeIn delay={0.2} className="mt-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.07] rounded-2xl overflow-hidden">
            {[
              { value: '8+', label: '國際認證' },
              { value: '15+', label: '年產業經驗' },
              { value: '30+', label: '服務國家' },
              { value: '500+', label: '合作企業' },
            ].map((item) => (
              <div key={item.label} className="bg-white/[0.04] px-8 py-6 text-center">
                <div className="text-2xl font-light text-white mb-1">{item.value}</div>
                <div className="text-white/45 text-[10px] tracking-wide font-light">{item.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
