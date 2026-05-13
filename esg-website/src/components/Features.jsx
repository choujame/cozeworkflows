import { Droplets, TreePine, Recycle, ShieldCheck, Leaf, Layers } from 'lucide-react'
import FadeIn from './FadeIn'
import { useLanguage } from '../context/LanguageContext'

const FEATURES = {
  zh: [
    {
      Icon: Droplets,
      title: '防水抗凍',
      en: 'Waterproof & Frost-Resistant',
      desc: '石頭紙在浸水 72 小時後結構完整，抗凍達 -20°C。完美適用冷凍海鮮、肉品與精密電子物流場景。',
      tags: ['IPX6 防水', '抗凍 -20°C', '濕度免疫'],
    },
    {
      Icon: TreePine,
      title: '無木造紙',
      en: 'Tree-Free Paper',
      desc: '完全不使用木漿，每噸石頭紙可保護 20 棵成年樹木，守護珍貴的森林資源與生物多樣性。',
      tags: ['零木漿', '保護森林', '20棵/噸'],
    },
    {
      Icon: Recycle,
      title: '零污染製程',
      en: 'Zero Pollution Process',
      desc: '製程不排放強酸、強鹼廢水，無漂白劑，無有害化學物質，且具備完整的循環回收體系。',
      tags: ['零廢水', '無漂白', '循環回收'],
    },
    {
      Icon: ShieldCheck,
      title: 'FDA 食品安全',
      en: 'FDA Food Grade',
      desc: '通過美國 FDA 食品接觸材料認證，無塑化劑、無螢光劑，可直接用於食品包裝，安全無毒。',
      tags: ['FDA 認證', '無塑化劑', '食品接觸安全'],
    },
    {
      Icon: Leaf,
      title: '減碳環保',
      en: 'Low Carbon Footprint',
      desc: '全生命週期碳排放較傳統紙箱降低 60%，助力企業達成 ESG 碳中和目標，符合歐盟綠色新政。',
      tags: ['碳排 -60%', 'ESG 合規', '碳中和'],
    },
    {
      Icon: Layers,
      title: '高強抗撕',
      en: 'High Tear Resistance',
      desc: '礦石複合結構提供卓越的抗撕裂與抗壓強度，在極端溫差、跌落衝擊下仍能保持結構完整性。',
      tags: ['抗撕裂', '高抗壓', '耐衝擊'],
    },
  ],
  en: [
    {
      Icon: Droplets,
      title: 'Waterproof & Frost-Resistant',
      en: 'Waterproof & Frost-Resistant',
      desc: 'Stone paper maintains structural integrity after 72 hours submerged, with frost resistance to -20°C. Perfect for cold-chain and electronics logistics.',
      tags: ['IPX6 Waterproof', 'Frost to -20°C', 'Moisture Immune'],
    },
    {
      Icon: TreePine,
      title: 'Tree-Free Paper',
      en: 'Tree-Free Paper',
      desc: 'Zero wood pulp used. Every tonne of stone paper saves 20 mature trees, protecting forest biodiversity and carbon sinks.',
      tags: ['Zero Wood Pulp', 'Forest Protection', '20 Trees / Tonne'],
    },
    {
      Icon: Recycle,
      title: 'Zero Pollution Process',
      en: 'Zero Pollution Process',
      desc: 'No acid/alkali effluent, no bleaching agents, no hazardous chemicals in production. Full circular recycling infrastructure included.',
      tags: ['Zero Effluent', 'No Bleach', 'Circular Recycling'],
    },
    {
      Icon: ShieldCheck,
      title: 'FDA Food Grade',
      en: 'FDA Food Grade',
      desc: 'US FDA food-contact material certified. Free of plasticizers and fluorescent agents — safe for direct food packaging use.',
      tags: ['FDA Certified', 'Plasticizer-Free', 'Food Contact Safe'],
    },
    {
      Icon: Leaf,
      title: 'Low Carbon Footprint',
      en: 'Low Carbon Footprint',
      desc: 'Lifecycle carbon emissions 60% lower than traditional cardboard, supporting corporate ESG carbon-neutral targets and EU Green Deal compliance.',
      tags: ['Carbon -60%', 'ESG Compliant', 'Carbon Neutral Path'],
    },
    {
      Icon: Layers,
      title: 'High Tear Resistance',
      en: 'High Tear Resistance',
      desc: 'Mineral composite structure delivers superior tear resistance and compression strength, maintaining integrity under extreme temperature and impact.',
      tags: ['Tear Resistant', 'High Compression', 'Impact Tolerant'],
    },
  ],
}

const COPY = {
  zh: { eyebrow: 'Core Technology', title: '核心技術優勢', subtitle: '重新定義環保包裝材料的標準——不妥協性能，不犧牲地球。' },
  en: { eyebrow: 'Core Technology', title: 'Core Technology', subtitle: 'Redefining eco-packaging standards — no performance compromise, no planet sacrifice.' },
}

export default function Features() {
  const { lang } = useLanguage()
  const features = FEATURES[lang]
  const c = COPY[lang]

  return (
    <section id="features" className="py-28 px-6 bg-[#F7F4EF] relative overflow-hidden">

      {/* Seigaiha (Japanese overlapping circles) pattern background */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" opacity="0.042">
        <defs>
          <pattern id="seigaiha" x="0" y="0" width="80" height="52" patternUnits="userSpaceOnUse">
            <circle cx="40" cy="52" r="38" fill="none" stroke="#2D5A27" strokeWidth="1.2" />
            <circle cx="80" cy="52" r="38" fill="none" stroke="#2D5A27" strokeWidth="1.2" />
            <circle cx="0"  cy="52" r="38" fill="none" stroke="#2D5A27" strokeWidth="1.2" />
            <circle cx="40" cy="0"  r="38" fill="none" stroke="#2D5A27" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#seigaiha)" />
      </svg>

      {/* Ghost "技" kanji */}
      <div className="absolute pointer-events-none select-none overflow-hidden hidden lg:flex items-center" style={{ inset: 0 }}>
        <span style={{
          fontSize: 'clamp(320px,40vw,620px)',
          fontWeight: 300,
          color: '#2D5A27',
          opacity: 0.022,
          lineHeight: 1,
          userSelect: 'none',
          transform: 'translateX(-8%) translateY(10%)',
        }}>
          技
        </span>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <FadeIn className="text-center mb-16">
          {/* Ink brush accent */}
          <div className="flex justify-center mb-4">
            <svg width="110" height="14" viewBox="0 0 110 14" fill="none" opacity="0.22">
              <path d="M4 7 C22 3,38 11,58 6 C78 1,92 9,106 5"
                stroke="#2D5A27" strokeWidth="3.5" strokeLinecap="round" />
              <path d="M12 9 C28 12,46 5,64 9 C82 13,96 6,106 8"
                stroke="#2D5A27" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
            </svg>
          </div>
          <p className="text-forest text-[10px] tracking-[0.28em] uppercase mb-3 font-light">{c.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">{c.title}</h2>
          <p className="text-graphite font-light max-w-md mx-auto text-sm leading-relaxed">{c.subtitle}</p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feat, i) => (
            <FadeIn key={feat.title} delay={i * 0.1} direction="up">
              <div className="group h-full relative p-7 rounded-2xl bg-white border border-gray-100
                border-l-[3px] border-l-forest/30
                hover:border-l-forest/60 hover:shadow-xl hover:shadow-forest/[0.08]
                transition-all duration-300 overflow-hidden">

                {/* Ghost card number */}
                <span
                  className="absolute top-1 right-3 font-light text-forest pointer-events-none select-none leading-none"
                  style={{ fontSize: 88, opacity: 0.045 }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="w-12 h-12 rounded-xl bg-forest/[0.09] flex items-center justify-center mb-5 group-hover:bg-forest/[0.16] transition-colors">
                  <feat.Icon className="w-5 h-5 text-forest" strokeWidth={1.5} />
                </div>
                <p className="text-[9px] text-graphite/55 tracking-[0.22em] uppercase mb-1.5 font-light">{feat.en}</p>
                <h3 className="text-lg font-medium text-gray-900 mb-2.5">{feat.title}</h3>
                <p className="text-xs text-graphite font-light leading-relaxed mb-4">{feat.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {feat.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-full bg-forest/[0.08] text-forest text-[10px] font-light tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
