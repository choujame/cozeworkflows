import { motion } from 'framer-motion'
import { Leaf, Users, BarChart3, CheckCircle2 } from 'lucide-react'
import FadeIn from './FadeIn'
import { useLanguage } from '../context/LanguageContext'

const CONTENT = {
  zh: {
    eyebrow: 'ESG Vision',
    headline: '永續，不只是承諾',
    subheadline: '而是我們每一個決策的基石',
    mission: '我們相信，真正的企業責任不在於報告中的數字，而在於每一條生產線、每一個材料選擇背後所蘊含的價值觀。琮祐的石頭紙，是我們對這個星球最誠懇的回答。',
    pillars: [
      {
        letter: 'E',
        color: '#2D5A27',
        bg: 'bg-emerald-50',
        title: '環境 Environmental',
        items: [
          { metric: '60%', label: '碳排放降低', desc: '全生命週期較傳統紙箱' },
          { metric: '零', label: '製程廢液', desc: '無強酸強鹼排放' },
          { metric: '20棵', label: '每噸保護樹木', desc: '完全不使用木漿' },
          { metric: '100%', label: '可回收材質', desc: '閉環循環經濟' },
        ],
        goal: { year: '2030 目標', text: '全製程 100% 可再生能源，實現碳中和生產' },
      },
      {
        letter: 'S',
        color: '#4A6B8A',
        bg: 'bg-blue-50',
        title: '社會 Social',
        items: [
          { metric: 'FDA', label: '食品安全認證', desc: '保護終端消費者健康' },
          { metric: '0', label: '有害化學添加', desc: '無螢光劑、無塑化劑' },
          { metric: '30+', label: '服務國家', desc: '推動全球綠色轉型' },
          { metric: '500+', label: '合作夥伴', desc: '帶動供應鏈永續升級' },
        ],
        goal: { year: '2030 目標', text: '帶動 1,000+ 家上下游企業完成包材綠色轉型' },
      },
      {
        letter: 'G',
        color: '#B45309',
        bg: 'bg-amber-50',
        title: '治理 Governance',
        items: [
          { metric: 'SGS', label: '國際第三方驗證', desc: '透明、獨立、可信賴' },
          { metric: '年報', label: 'ESG 透明報告', desc: '每年公開永續績效' },
          { metric: '內控', label: 'ESG 治理委員會', desc: '董事會層級監督' },
          { metric: 'ISO', label: '管理系統認證', desc: 'ISO 14001 環境管理' },
        ],
        goal: { year: '2030 目標', text: '取得 B Corp 認證，成為全球公認的永續企業典範' },
      },
    ],
    timeline: {
      title: '永續路徑圖',
      items: [
        { year: '2023', event: '榮獲台灣 ESG 創新獎，完成 ISO 14001 認證' },
        { year: '2025', event: '導入 100% 可再生能源生產線，推出碳足跡標籤' },
        { year: '2027', event: '實現全供應鏈碳中和，完成 B Corp 認證申請' },
        { year: '2030', event: '成為亞太最大石頭紙永續包裝平台' },
      ],
    },
  },
  en: {
    eyebrow: 'ESG Vision',
    headline: 'Sustainability is not a promise',
    subheadline: "It's the foundation of every decision we make",
    mission: "We believe true corporate responsibility isn't measured by numbers in a report, but by the values embedded in every production line and material choice. CongYou's stone paper is our most sincere answer to the planet.",
    pillars: [
      {
        letter: 'E',
        color: '#2D5A27',
        bg: 'bg-emerald-50',
        title: 'Environmental',
        items: [
          { metric: '60%', label: 'Carbon Reduction', desc: 'Full lifecycle vs. cardboard' },
          { metric: 'Zero', label: 'Process Effluent', desc: 'No acid/alkali discharge' },
          { metric: '20', label: 'Trees Saved/Tonne', desc: 'Zero wood pulp used' },
          { metric: '100%', label: 'Recyclable Material', desc: 'Closed-loop circular economy' },
        ],
        goal: { year: '2030 Goal', text: '100% renewable energy across all production, achieving carbon-neutral manufacturing' },
      },
      {
        letter: 'S',
        color: '#4A6B8A',
        bg: 'bg-blue-50',
        title: 'Social',
        items: [
          { metric: 'FDA', label: 'Food Safety Certified', desc: 'Protecting end-consumer health' },
          { metric: '0', label: 'Harmful Additives', desc: 'No fluorescent or plasticizer agents' },
          { metric: '30+', label: 'Countries Served', desc: 'Driving global green transition' },
          { metric: '500+', label: 'Partners', desc: 'Elevating supply chain sustainability' },
        ],
        goal: { year: '2030 Goal', text: 'Enable 1,000+ upstream and downstream companies to complete green packaging transitions' },
      },
      {
        letter: 'G',
        color: '#B45309',
        bg: 'bg-amber-50',
        title: 'Governance',
        items: [
          { metric: 'SGS', label: 'Independent Verification', desc: 'Transparent, credible, auditable' },
          { metric: 'Annual', label: 'ESG Transparency Report', desc: 'Public sustainability performance' },
          { metric: 'Board', label: 'ESG Governance Committee', desc: 'Board-level ESG oversight' },
          { metric: 'ISO', label: 'Management Certification', desc: 'ISO 14001 Environmental Mgmt' },
        ],
        goal: { year: '2030 Goal', text: 'Achieve B Corp certification and become a globally recognized sustainable enterprise model' },
      },
    ],
    timeline: {
      title: 'Sustainability Roadmap',
      items: [
        { year: '2023', event: 'Taiwan ESG Innovation Award · ISO 14001 certified' },
        { year: '2025', event: '100% renewable energy production line · Carbon footprint label launch' },
        { year: '2027', event: 'Full supply chain carbon neutral · B Corp certification application' },
        { year: '2030', event: "Asia-Pacific's largest stone paper sustainable packaging platform" },
      ],
    },
  },
}

export default function ESGVision() {
  const { lang } = useLanguage()
  const c = CONTENT[lang]

  return (
    <section id="esg" className="py-28 px-6 bg-[#FDFCFA]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <FadeIn className="text-center mb-20">
          <p className="text-forest text-[10px] tracking-[0.28em] uppercase mb-4 font-light">{c.eyebrow}</p>
          <h2 className="text-4xl md:text-6xl font-extralight text-gray-900 tracking-tight leading-none mb-3">
            {c.headline}
          </h2>
          <p className="text-xl md:text-2xl font-light text-forest/80 mb-8">{c.subheadline}</p>
          <p className="text-sm text-graphite font-light max-w-2xl mx-auto leading-relaxed">{c.mission}</p>
        </FadeIn>

        {/* E / S / G Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {c.pillars.map((pillar, i) => (
            <FadeIn key={pillar.letter} delay={i * 0.12}>
              <div className="rounded-2xl overflow-hidden border border-gray-100 h-full">
                {/* Pillar header */}
                <div className={`${pillar.bg} px-7 py-6 flex items-center gap-4 border-b border-gray-100`}>
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-2xl font-light shrink-0"
                    style={{ backgroundColor: pillar.color }}
                  >
                    {pillar.letter}
                  </div>
                  <h3 className="text-base font-light text-gray-900">{pillar.title}</h3>
                </div>

                {/* Metrics */}
                <div className="bg-white px-7 py-5 grid grid-cols-2 gap-4">
                  {pillar.items.map((item) => (
                    <div key={item.label} className="py-2">
                      <div className="text-lg font-light mb-0.5" style={{ color: pillar.color }}>
                        {item.metric}
                      </div>
                      <div className="text-xs text-gray-800 font-light">{item.label}</div>
                      <div className="text-[10px] text-graphite/60 font-light mt-0.5 leading-snug">{item.desc}</div>
                    </div>
                  ))}
                </div>

                {/* Goal */}
                <div className="bg-gray-50/70 border-t border-gray-100 px-7 py-4 flex items-start gap-3">
                  <CheckCircle2 size={14} strokeWidth={1.5} className="shrink-0 mt-0.5" style={{ color: pillar.color }} />
                  <div>
                    <p className="text-[10px] font-medium tracking-wide uppercase mb-0.5" style={{ color: pillar.color }}>
                      {pillar.goal.year}
                    </p>
                    <p className="text-xs text-graphite font-light leading-snug">{pillar.goal.text}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Timeline */}
        <FadeIn>
          <div className="bg-white rounded-2xl border border-gray-100 p-10">
            <div className="flex items-center gap-3 mb-10">
              <BarChart3 size={18} strokeWidth={1.5} className="text-forest" />
              <h3 className="text-base font-light text-gray-900">{c.timeline.title}</h3>
            </div>

            {/* Desktop timeline */}
            <div className="hidden md:block relative">
              {/* Track */}
              <div className="absolute top-5 left-0 right-0 h-px bg-gray-200" />
              {/* Animated fill */}
              <motion.div
                className="absolute top-5 left-0 h-px bg-forest origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1.8, ease: 'easeOut', delay: 0.3 }}
                viewport={{ once: true }}
                style={{ width: '100%' }}
              />
              <div className="grid grid-cols-4 gap-4 relative z-10">
                {c.timeline.items.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center gap-4"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.4 + i * 0.2, type: 'spring' }}
                      viewport={{ once: true }}
                      className="w-10 h-10 rounded-full bg-forest flex items-center justify-center shadow-lg shadow-forest/20"
                    >
                      <span className="text-white text-[10px] font-light">{item.year.slice(2)}</span>
                    </motion.div>
                    <div>
                      <p className="text-sm font-medium text-forest mb-1">{item.year}</p>
                      <p className="text-xs text-graphite font-light leading-relaxed">{item.event}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile timeline (vertical) */}
            <div className="md:hidden space-y-6">
              {c.timeline.items.map((item, i) => (
                <FadeIn key={item.year} delay={i * 0.1}>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-9 h-9 rounded-full bg-forest flex items-center justify-center shrink-0">
                        <span className="text-white text-[10px] font-light">{item.year.slice(2)}</span>
                      </div>
                      {i < c.timeline.items.length - 1 && (
                        <div className="w-px flex-1 bg-gray-200 mt-2 mb-0 min-h-[24px]" />
                      )}
                    </div>
                    <div className="pb-4">
                      <p className="text-sm font-medium text-forest mb-1">{item.year}</p>
                      <p className="text-xs text-graphite font-light leading-relaxed">{item.event}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
