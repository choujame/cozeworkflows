import { motion } from 'framer-motion'
import FadeIn from './FadeIn'
import { useLanguage } from '../context/LanguageContext'

const certs = [
  { abbr: 'SGS', name: 'SGS', desc: { zh: '國際品質驗證', en: 'International Quality' } },
  { abbr: 'FDA', name: 'FDA', desc: { zh: '美國食品安全', en: 'US Food Safety' } },
  { abbr: 'ISO\n14001', name: 'ISO 14001', desc: { zh: '環境管理系統', en: 'Environmental Mgmt' } },
  { abbr: 'RoHS', name: 'RoHS', desc: { zh: '歐盟有害物質限制', en: 'EU Hazardous Restriction' } },
  { abbr: 'CE', name: 'CE', desc: { zh: '歐盟合規標誌', en: 'EU Conformity Mark' } },
  { abbr: '環保\n標章', name: { zh: '台灣環保標章', en: 'Taiwan Eco Label' }, desc: { zh: '通過環保署認證', en: 'EPA Certified' } },
  { abbr: 'Carbon\nFP', name: { zh: '碳足跡標籤', en: 'Carbon Footprint' }, desc: { zh: 'Carbon Footprint Label', en: 'Carbon Footprint Label' } },
  { abbr: 'BSCI', name: 'BSCI', desc: { zh: '商業社會責任', en: 'Business Social Compliance' } },
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

const COPY = {
  zh: {
    eyebrow: 'Certifications',
    title: '國際認證標章',
    subtitle: '通過全球最嚴格第三方機構驗證，品質與環保雙重保障。',
    partnersLabel: 'Trusted Partners',
    partnersTitle: '全球品牌信賴夥伴',
  },
  en: {
    eyebrow: 'Certifications',
    title: 'Certifications',
    subtitle: 'Verified by the world\'s most rigorous third-party institutions — quality and sustainability guaranteed.',
    partnersLabel: 'Trusted Partners',
    partnersTitle: 'Trusted by Global Brands',
  },
}

const STATS = {
  zh: [{ v: '8+', l: '國際認證' }, { v: '15+', l: '年產業經驗' }, { v: '30+', l: '服務國家' }, { v: '500+', l: '合作企業' }],
  en: [{ v: '8+', l: 'Certifications' }, { v: '15+', l: 'Years Experience' }, { v: '30+', l: 'Countries Served' }, { v: '500+', l: 'Partners' }],
}

function CertCard({ cert, lang }) {
  const name = typeof cert.name === 'object' ? cert.name[lang] : cert.name
  const desc = cert.desc[lang]
  return (
    <div className="flex-shrink-0 mx-3 w-40 bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.12] hover:border-white/[0.22] rounded-2xl p-5 flex flex-col items-center gap-3 transition-all duration-300">
      <div className="w-14 h-14 rounded-xl bg-white/[0.12] flex items-center justify-center">
        <span className="text-white font-light text-[11px] whitespace-pre-line text-center leading-tight">{cert.abbr}</span>
      </div>
      <div className="text-center">
        <p className="text-white text-xs font-light">{name}</p>
        <p className="text-white/45 text-[10px] font-light mt-0.5">{desc}</p>
      </div>
    </div>
  )
}

export default function Certification() {
  const { lang } = useLanguage()
  const c = COPY[lang]
  const stats = STATS[lang]
  const duplicated = [...certs, ...certs]

  return (
    <section id="certifications" className="py-28 bg-forest overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-14">
          <p className="text-white/40 text-[10px] tracking-[0.28em] uppercase mb-3 font-light">{c.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">{c.title}</h2>
          <p className="text-white/55 font-light max-w-md mx-auto text-sm leading-relaxed">{c.subtitle}</p>
        </FadeIn>
      </div>

      {/* Infinite cert scroll */}
      <div className="relative overflow-hidden mb-20">
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-forest to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-forest to-transparent pointer-events-none" />
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
          className="flex py-2"
          style={{ width: 'max-content' }}
        >
          {duplicated.map((cert, i) => (
            <CertCard key={i} cert={cert} lang={lang} />
          ))}
        </motion.div>
      </div>

      {/* Partner logos */}
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-10">
          <p className="text-white/40 text-[10px] tracking-[0.28em] uppercase font-light">{c.partnersLabel}</p>
          <p className="text-white/60 text-sm font-light mt-2">{c.partnersTitle}</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {partners.map((p) => (
              <div key={p.name} className="group bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.07] hover:border-white/[0.15] rounded-xl px-4 py-4 text-center transition-all duration-300">
                <p className="text-white/70 text-xs font-light group-hover:text-white/90 transition-colors">{lang === 'zh' ? p.name : p.en}</p>
                <p className="text-white/30 text-[10px] font-light mt-0.5">{lang === 'zh' ? p.en : p.name}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.07] rounded-2xl overflow-hidden">
            {stats.map((s) => (
              <div key={s.l} className="bg-white/[0.04] px-8 py-6 text-center">
                <div className="text-2xl font-light text-white mb-1">{s.v}</div>
                <div className="text-white/45 text-[10px] tracking-wide font-light">{s.l}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
