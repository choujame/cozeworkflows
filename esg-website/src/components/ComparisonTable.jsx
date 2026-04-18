import { Check, X } from 'lucide-react'
import FadeIn from './FadeIn'
import { useLanguage } from '../context/LanguageContext'

function Good({ text }) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-5 h-5 rounded-full bg-forest/10 flex items-center justify-center shrink-0">
        <Check size={11} strokeWidth={2.5} className="text-forest" />
      </div>
      <span className="text-xs text-gray-700 font-light">{text}</span>
    </div>
  )
}
function Bad({ text }) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-5 h-5 rounded-full bg-graphite/[0.07] flex items-center justify-center shrink-0">
        <X size={11} strokeWidth={2.5} className="text-graphite/60" />
      </div>
      <span className="text-xs text-graphite font-light">{text}</span>
    </div>
  )
}

const ROWS = {
  zh: [
    { category: '耐水性', bad: '遇水即軟損', good: '浸水 72h 不損' },
    { category: '抗凍性', bad: '低溫脆裂', good: '抗凍達 -20°C' },
    { category: '抗撕裂強度', bad: '一般（易撕裂）', good: '高強，耐衝擊' },
    { category: '碳排放量', bad: '高（砍伐＋製漿）', good: '低，減少 60%' },
    { category: '製程用水', bad: '大量用水，排放廢液', good: '無需用水，零廢液' },
    { category: '木材使用', bad: '每噸耗費 1.2 棵樹', good: '完全不使用木漿' },
    { category: '使用壽命', bad: '潮濕後即損耗', good: '耐用，可多次利用' },
    { category: '回收再利用', bad: '潮濕後無法回收', good: '100% 可回收' },
    { category: '毒素含量', bad: '可能含螢光劑', good: '無毒，零有害物質' },
    { category: '食品安全', bad: '不建議直接接觸食品', good: 'FDA 食品接觸認證' },
    { category: '環保認證', bad: '通常無', good: 'SGS · FDA · ISO 14001' },
  ],
  en: [
    { category: 'Water Resistance', bad: 'Collapses when wet', good: '72h submersion — no damage' },
    { category: 'Frost Resistance', bad: 'Brittle in low temp.', good: 'Frost-proof to -20°C' },
    { category: 'Tear Strength', bad: 'Average (tears easily)', good: 'High strength, impact resistant' },
    { category: 'Carbon Emissions', bad: 'High (logging + pulping)', good: 'Low — 60% reduction' },
    { category: 'Process Water', bad: 'High water use, effluent', good: 'Zero water, zero effluent' },
    { category: 'Wood Use', bad: '1.2 trees per tonne', good: 'Zero wood pulp' },
    { category: 'Durability', bad: 'Degrades when damp', good: 'Durable, multi-use' },
    { category: 'Recyclability', bad: 'Not recyclable when wet', good: '100% recyclable' },
    { category: 'Toxins', bad: 'May contain fluorescent agents', good: 'Non-toxic, zero hazardous' },
    { category: 'Food Safety', bad: 'Not for direct food contact', good: 'FDA food-contact certified' },
    { category: 'Eco Certifications', bad: 'Typically none', good: 'SGS · FDA · ISO 14001' },
  ],
}

const COPY = {
  zh: {
    eyebrow: 'B2B Performance Comparison',
    title: '規格對比',
    subtitle: '傳統木漿紙箱 vs 琮祐石頭紙箱——讓數據說話。',
    col0: '比較項目', col1: '傳統紙箱', col1sub: 'Traditional Box',
    col2: '琮祐石頭紙箱', col2sub: 'CongYou Stone Paper',
    note: '* 數據來源：SGS 第三方獨立檢測報告 · 琮祐企業內部研究數據（2024）',
  },
  en: {
    eyebrow: 'B2B Performance Comparison',
    title: 'Performance Comparison',
    subtitle: 'Traditional cardboard vs. CongYou Stone Paper — let the data speak.',
    col0: 'Criteria', col1: 'Traditional Box', col1sub: 'Traditional Cardboard',
    col2: 'CongYou Stone Paper', col2sub: 'CongYou Stone Paper',
    note: '* Source: SGS third-party test reports · CongYou internal research (2024)',
  },
}

export default function ComparisonTable() {
  const { lang } = useLanguage()
  const rows = ROWS[lang]
  const c = COPY[lang]

  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="text-center mb-14">
          <p className="text-forest text-[10px] tracking-[0.28em] uppercase mb-3 font-light">{c.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">{c.title}</h2>
          <p className="text-graphite font-light max-w-md mx-auto text-sm leading-relaxed">{c.subtitle}</p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
            <div className="grid grid-cols-[1.2fr_1fr_1.1fr]">
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
                <span className="text-[10px] text-graphite font-light tracking-[0.2em] uppercase">{c.col0}</span>
              </div>
              <div className="px-5 py-4 bg-gray-50 text-center border-b border-l border-gray-100">
                <p className="text-xs text-graphite font-light">{c.col1}</p>
                <p className="text-[9px] text-gray-400 mt-0.5 tracking-wide">{c.col1sub}</p>
              </div>
              <div className="px-5 py-4 bg-forest/[0.05] text-center border-b border-l border-forest/[0.08]">
                <p className="text-xs text-forest font-medium">{c.col2}</p>
                <p className="text-[9px] text-forest/50 mt-0.5 tracking-wide">{c.col2sub}</p>
              </div>
            </div>
            {rows.map((row, i) => (
              <div key={row.category} className={`grid grid-cols-[1.2fr_1fr_1.1fr] border-b border-gray-50 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'}`}>
                <div className="px-6 py-3.5 flex items-center">
                  <span className="text-xs text-gray-700 font-light">{row.category}</span>
                </div>
                <div className="px-5 py-3.5 border-l border-gray-100 flex items-center">
                  <Bad text={row.bad} />
                </div>
                <div className="px-5 py-3.5 border-l border-forest/[0.06] bg-forest/[0.02] flex items-center">
                  <Good text={row.good} />
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-center text-[10px] text-graphite/50 font-light mt-5 tracking-wide">{c.note}</p>
        </FadeIn>
      </div>
    </section>
  )
}
