import { useState } from 'react'
import { Check, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
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

const PRODUCTS = {
  zh: [
    { key: 'stonebox',  label: '石頭紙箱' },
    { key: 'secbag',    label: '二次循環破壞袋' },
    { key: 'vestbag',   label: '背心袋' },
    { key: 'buffer',    label: '緩衝材' },
    { key: 'tableware', label: 'PGT餐具' },
    { key: 'biobag',    label: '環保生物袋' },
  ],
  en: [
    { key: 'stonebox',  label: 'Stone Paper Box' },
    { key: 'secbag',    label: 'Recycled Security Bag' },
    { key: 'vestbag',   label: 'Vest Bag' },
    { key: 'buffer',    label: 'Buffer Material' },
    { key: 'tableware', label: 'PGT Tableware' },
    { key: 'biobag',    label: 'Eco Bio Bag' },
  ],
}

const DATA = {
  zh: {
    stonebox: {
      col1: '傳統木漿紙箱', col2: '琮祐石頭紙箱',
      rows: [
        { category: '耐水性',     bad: '遇水即軟損',           good: '浸水 72h 不損' },
        { category: '抗凍性',     bad: '低溫脆裂',             good: '抗凍達 -20°C' },
        { category: '抗撕裂強度', bad: '一般（易撕裂）',       good: '高強，耐衝擊' },
        { category: '碳排放量',   bad: '高（砍伐＋製漿）',     good: '減少約 67%' },
        { category: '製程用水',   bad: '大量用水，排放廢液',   good: '無需用水，零廢液' },
        { category: '木材使用',   bad: '每噸耗費 1.2 棵樹',    good: '完全不使用木漿' },
        { category: '使用壽命',   bad: '潮濕後即損耗',         good: '耐用，可多次利用' },
        { category: '回收再利用', bad: '潮濕後無法回收',       good: '100% 可回收' },
        { category: '毒素含量',   bad: '可能含螢光增白劑',     good: '無毒，零有害物質' },
        { category: '食品安全',   bad: '不建議直接接觸食品',   good: 'FDA 食品接觸認證' },
        { category: '環保認證',   bad: '通常無',               good: 'SGS · FDA · ISO 14001' },
      ],
    },
    secbag: {
      col1: '一般塑膠快遞袋', col2: '二次循環破壞袋',
      rows: [
        { category: '可重複使用',   bad: '單次使用即棄',             good: '設計支援兩次封口使用' },
        { category: '防竄改設計',   bad: '無破壞痕跡，安全性低',     good: '開封留痕，防偽防竄改' },
        { category: '退換貨適用',   bad: '需另備退貨包材',           good: '同一袋完成出貨與退貨' },
        { category: '生物分解性',   bad: '數百年不分解',             good: '180 天自然分解' },
        { category: '微塑料殘留',   bad: '分解後殘留微塑料',         good: '無微塑料，零殘留' },
        { category: '防水性',       bad: '標準防水',                 good: '高強度防水防撕裂' },
        { category: '碳足跡',       bad: '石化原料，高碳排',         good: '可分解配方，低碳排' },
        { category: '環保認證',     bad: '通常無',                   good: 'SGS 生物分解認證' },
      ],
    },
    vestbag: {
      col1: '傳統 PE 塑膠袋', col2: '琮祐背心袋',
      rows: [
        { category: '生物分解性', bad: '數百年不分解',           good: '堆肥環境 180 天分解' },
        { category: '微塑料殘留', bad: '分解後殘留微塑料',       good: '無微塑料，零殘留' },
        { category: '承重能力',   bad: '一般（易撕裂）',         good: '標準款 5–8 kg' },
        { category: '碳足跡',     bad: '石化原料，高碳排',       good: '生物基材料，低碳排' },
        { category: '法規合規',   bad: '限塑政策限制使用',       good: '符合台灣環保署認證' },
        { category: '外觀質感',   bad: '普通塑膠質感',           good: '外觀同等，質感提升' },
        { category: '可印刷性',   bad: '一般印刷適性',           good: '環保水性油墨印刷' },
        { category: '環保認證',   bad: '通常無',                 good: '台灣環保署可分解認證' },
      ],
    },
    buffer: {
      col1: '保麗龍（EPS）', col2: '琮祐緩衝材',
      rows: [
        { category: '防震吸收',   bad: '尚可，易碎成小粒',       good: '達 ISTA 測試標準' },
        { category: '可壓縮性',   bad: '體積固定，佔倉儲空間',   good: '可壓縮，節省 60% 倉儲' },
        { category: '生物分解性', bad: '500 年以上不分解',       good: '90–180 天堆肥分解' },
        { category: '白色污染',   bad: '碎裂後造成嚴重污染',     good: '無碎屑，零白色污染' },
        { category: '重量',       bad: '輕但體積大',             good: '更輕，降低運輸成本' },
        { category: '回收再利用', bad: '回收率極低',             good: '可進入回收體系' },
        { category: '碳足跡',     bad: '石化製程，高碳排',       good: '低碳排製程' },
        { category: '環保認證',   bad: '通常無',                 good: 'SGS · ISTA 認證' },
      ],
    },
    tableware: {
      col1: '美耐皿（Melamine）餐具', col2: 'PGT 環保餐具',
      rows: [
        { category: '三聚氰胺釋放', bad: '受損或高溫時釋放三聚氰胺', good: '不含三聚氰胺，零釋放風險' },
        { category: '耐熱溫度',     bad: '超過 70°C 加速溶出毒素',   good: '耐熱達 120°C，安全微波' },
        { category: '食品安全',     bad: '受損後食安疑慮高',         good: 'FDA 食品接觸認證' },
        { category: '重量',         bad: '較重（含填充料）',         good: '比不鏽鋼輕，降低搬運成本' },
        { category: '生物分解性',   bad: '數百年不分解',             good: '堆肥環境 180 天分解' },
        { category: '毒素含量',     bad: '可能含螢光劑、塑化劑',     good: '無毒，零有害物質' },
        { category: '外觀質感',     bad: '一般塑料質感',             good: '植物纖維質感，品牌感強' },
        { category: '環保認證',     bad: '通常無',                   good: 'SGS · FDA 認證' },
      ],
    },
    biobag: {
      col1: '一般塑膠袋', col2: '琮祐環保生物袋',
      rows: [
        { category: '耐熱溫度',   bad: '約 60–80°C（易變形）',   good: '耐熱達 120°C，可蒸煮使用' },
        { category: '生物分解性', bad: '數百年不分解',           good: '工業堆肥 90–180 天分解' },
        { category: '微塑料殘留', bad: '分解後殘留微塑料',       good: '還原為水、CO₂、有機質' },
        { category: '外觀與功能', bad: '普通塑膠',               good: '外觀功能相同，更環保' },
        { category: '承重能力',   bad: '一般',                   good: '相同承重，不妥協性能' },
        { category: '法規合規',   bad: '受限塑政策限制',         good: '符合 EN 13432 歐盟標準' },
        { category: '可印刷性',   bad: '一般印刷適性',           good: '環保水性油墨，不影響分解' },
        { category: '碳足跡',     bad: '石化原料，高碳排',       good: '生物基原料，低碳排' },
        { category: '環保認證',   bad: '通常無',                 good: 'EN 13432 · SGS 認證' },
      ],
    },
  },
  en: {
    stonebox: {
      col1: 'Traditional Cardboard', col2: 'CongYou Stone Paper Box',
      rows: [
        { category: 'Water Resistance',   bad: 'Collapses when wet',          good: '72h submersion — no damage' },
        { category: 'Frost Resistance',   bad: 'Brittle in low temp.',         good: 'Frost-proof to -20°C' },
        { category: 'Tear Strength',      bad: 'Average (tears easily)',       good: 'High strength, impact resistant' },
        { category: 'Carbon Emissions',   bad: 'High (logging + pulping)',     good: '~67% reduction' },
        { category: 'Process Water',      bad: 'High water use, effluent',     good: 'Zero water, zero effluent' },
        { category: 'Wood Use',           bad: '1.2 trees per tonne',          good: 'Zero wood pulp' },
        { category: 'Durability',         bad: 'Degrades when damp',           good: 'Durable, multi-use' },
        { category: 'Recyclability',      bad: 'Not recyclable when wet',      good: '100% recyclable' },
        { category: 'Toxins',             bad: 'May contain fluorescent agents', good: 'Non-toxic, zero hazardous' },
        { category: 'Food Safety',        bad: 'Not for direct food contact',  good: 'FDA food-contact certified' },
        { category: 'Eco Certifications', bad: 'Typically none',               good: 'SGS · FDA · ISO 14001' },
      ],
    },
    secbag: {
      col1: 'Standard Plastic Mailer', col2: 'Recycled Security Bag',
      rows: [
        { category: 'Reusability',        bad: 'Single-use only',                    good: 'Two-seal design — use twice' },
        { category: 'Tamper Evidence',    bad: 'No tamper trace, low security',       good: 'Visible opening marks, anti-tamper' },
        { category: 'Return Logistics',   bad: 'Separate return packaging needed',    good: 'One bag for outbound + return' },
        { category: 'Biodegradability',   bad: 'Hundreds of years to degrade',        good: 'Fully degrades in 180 days' },
        { category: 'Microplastics',      bad: 'Leaves microplastic residue',         good: 'Zero microplastics' },
        { category: 'Water Resistance',   bad: 'Standard waterproofing',              good: 'High-strength waterproof & tear-resistant' },
        { category: 'Carbon Footprint',   bad: 'Petrochemical-based, high carbon',    good: 'Biodegradable formula, low carbon' },
        { category: 'Eco Certifications', bad: 'Typically none',                      good: 'SGS biodegradability certified' },
      ],
    },
    vestbag: {
      col1: 'Traditional PE Plastic Bag', col2: 'CongYou Vest Bag',
      rows: [
        { category: 'Biodegradability',   bad: 'Hundreds of years to degrade',     good: 'Compost-degrades in 180 days' },
        { category: 'Microplastics',      bad: 'Leaves microplastic residue',      good: 'Zero microplastics' },
        { category: 'Load Capacity',      bad: 'Average (tears easily)',            good: 'Standard: 5–8 kg' },
        { category: 'Carbon Footprint',   bad: 'Petrochemical-based, high carbon', good: 'Bio-based materials, low carbon' },
        { category: 'Regulatory',         bad: 'Restricted under plastic bans',    good: 'Taiwan EPA certified compliant' },
        { category: 'Appearance',         bad: 'Ordinary plastic feel',            good: 'Equivalent look, elevated feel' },
        { category: 'Printability',       bad: 'Standard ink compatibility',       good: 'Eco water-based ink printing' },
        { category: 'Eco Certifications', bad: 'Typically none',                   good: 'Taiwan EPA biodegradable cert.' },
      ],
    },
    buffer: {
      col1: 'EPS (Styrofoam)', col2: 'CongYou Buffer Material',
      rows: [
        { category: 'Shock Absorption',   bad: 'Adequate but crumbles',            good: 'ISTA test standard compliant' },
        { category: 'Compressibility',    bad: 'Fixed volume, high storage cost',  good: 'Compressible — 60% less storage' },
        { category: 'Biodegradability',   bad: '500+ years to degrade',            good: 'Compost-degrades in 90–180 days' },
        { category: 'White Pollution',    bad: 'Crumbles into persistent pellets', good: 'No fragments, zero white pollution' },
        { category: 'Weight',             bad: 'Light but very bulky',             good: 'Lighter, lower shipping cost' },
        { category: 'Recyclability',      bad: 'Extremely low recycle rate',       good: 'Compatible with recycling streams' },
        { category: 'Carbon Footprint',   bad: 'Petrochemical process, high CO₂',  good: 'Low-carbon manufacturing' },
        { category: 'Eco Certifications', bad: 'Typically none',                   good: 'SGS · ISTA certified' },
      ],
    },
    tableware: {
      col1: 'Melamine Tableware', col2: 'PGT Eco Tableware',
      rows: [
        { category: 'Melamine Release',   bad: 'Releases melamine when damaged or heated', good: 'No melamine — zero release risk' },
        { category: 'Heat Resistance',    bad: 'Accelerates toxin leaching above 70°C',    good: 'Safe up to 120°C, microwave-safe' },
        { category: 'Food Safety',        bad: 'High food-safety risk when damaged',        good: 'FDA food-contact certified' },
        { category: 'Weight',             bad: 'Heavy (filler-loaded)',                     good: 'Lighter than stainless steel' },
        { category: 'Biodegradability',   bad: 'Hundreds of years to degrade',              good: 'Compost-degrades in 180 days' },
        { category: 'Toxins',             bad: 'May contain fluorescent agents',            good: 'Non-toxic, zero hazardous' },
        { category: 'Appearance',         bad: 'Standard plastic aesthetic',               good: 'Plant-fiber feel, premium look' },
        { category: 'Eco Certifications', bad: 'Typically none',                            good: 'SGS · FDA certified' },
      ],
    },
    biobag: {
      col1: 'Standard Plastic Bag', col2: 'CongYou Eco Bio Bag',
      rows: [
        { category: 'Heat Resistance',    bad: '60–80°C (deforms easily)',           good: 'Heat-resistant to 120°C — steam-safe' },
        { category: 'Biodegradability',   bad: 'Hundreds of years to degrade',       good: 'Industrial compost: 90–180 days' },
        { category: 'Microplastics',      bad: 'Leaves microplastic residue',        good: 'Returns to water, CO₂ & organics' },
        { category: 'Appearance & Use',   bad: 'Standard plastic',                   good: 'Same look & function, eco-friendly' },
        { category: 'Load Capacity',      bad: 'Standard',                           good: 'Same capacity, no trade-off' },
        { category: 'Regulatory',         bad: 'Restricted under plastic bans',      good: 'EN 13432 EU standard compliant' },
        { category: 'Printability',       bad: 'Standard ink compatibility',         good: 'Eco ink — biodegradability intact' },
        { category: 'Carbon Footprint',   bad: 'Petrochemical-based, high carbon',   good: 'Bio-based, low carbon' },
        { category: 'Eco Certifications', bad: 'Typically none',                     good: 'EN 13432 · SGS certified' },
      ],
    },
  },
}

const COPY = {
  zh: {
    eyebrow: 'B2B Performance Comparison',
    title: '規格對比',
    subtitle: '選擇產品，比較傳統包材與琮祐環保方案的實際差異。',
    col0: '比較項目',
    note: '* 數據來源：SGS 第三方獨立檢測報告 · 琮祐企業內部研究數據（2024）',
  },
  en: {
    eyebrow: 'B2B Performance Comparison',
    title: 'Performance Comparison',
    subtitle: 'Select a product to compare traditional packaging against CongYou eco solutions.',
    col0: 'Criteria',
    note: '* Source: SGS third-party test reports · CongYou internal research (2024)',
  },
}

export default function ComparisonTable() {
  const { lang } = useLanguage()
  const c = COPY[lang]
  const products = PRODUCTS[lang]
  const [activeKey, setActiveKey] = useState('stonebox')

  const current = DATA[lang][activeKey]

  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="text-center mb-12">
          <p className="text-forest text-[10px] tracking-[0.28em] uppercase mb-3 font-light">{c.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">{c.title}</h2>
          <p className="text-graphite font-light max-w-md mx-auto text-sm leading-relaxed">{c.subtitle}</p>
        </FadeIn>

        {/* 產品 Tab */}
        <FadeIn delay={0.05}>
          <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-hide">
            {products.map((p) => (
              <button
                key={p.key}
                onClick={() => setActiveKey(p.key)}
                className={`shrink-0 px-4 py-2 rounded-full text-xs font-light transition-all duration-200 border ${
                  activeKey === p.key
                    ? 'bg-forest text-white border-forest'
                    : 'bg-white text-graphite border-gray-200 hover:border-forest/40 hover:text-forest'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* 對比表 */}
        <FadeIn delay={0.1}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeKey}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
            >
              {/* 表頭 */}
              <div className="grid grid-cols-[1.2fr_1fr_1.1fr]">
                <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
                  <span className="text-[10px] text-graphite font-light tracking-[0.2em] uppercase">{c.col0}</span>
                </div>
                <div className="px-5 py-4 bg-gray-50 text-center border-b border-l border-gray-100">
                  <p className="text-xs text-graphite font-light">{current.col1}</p>
                </div>
                <div className="px-5 py-4 bg-forest/[0.05] text-center border-b border-l border-forest/[0.08]">
                  <p className="text-xs text-forest font-medium">{current.col2}</p>
                </div>
              </div>

              {/* 資料列 */}
              {current.rows.map((row, i) => (
                <div
                  key={row.category}
                  className={`grid grid-cols-[1.2fr_1fr_1.1fr] border-b border-gray-50 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'}`}
                >
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
            </motion.div>
          </AnimatePresence>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-center text-[10px] text-graphite/50 font-light mt-5 tracking-wide">{c.note}</p>
        </FadeIn>
      </div>
    </section>
  )
}
