import { Droplets, TreePine, Recycle, ShieldCheck, Leaf, Layers } from 'lucide-react'
import FadeIn from './FadeIn'

const features = [
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
]

export default function Features() {
  return (
    <section id="features" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-16">
          <p className="text-forest text-[10px] tracking-[0.28em] uppercase mb-3 font-light">
            Core Technology
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">核心技術優勢</h2>
          <p className="text-graphite font-light max-w-md mx-auto text-sm leading-relaxed">
            重新定義環保包裝材料的標準——不妥協性能，不犧牲地球。
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feat, i) => (
            <FadeIn key={feat.title} delay={i * 0.1} direction="up">
              <div className="group h-full p-7 rounded-2xl border border-gray-100 hover:border-forest/20 hover:shadow-xl hover:shadow-forest/[0.07] transition-all duration-400 bg-white">
                <div className="w-12 h-12 rounded-xl bg-forest/[0.07] flex items-center justify-center mb-5 group-hover:bg-forest/[0.12] transition-colors">
                  <feat.Icon className="w-5 h-5 text-forest" strokeWidth={1.5} />
                </div>
                <p className="text-[9px] text-graphite/60 tracking-[0.22em] uppercase mb-1.5 font-light">
                  {feat.en}
                </p>
                <h3 className="text-lg font-medium text-gray-900 mb-2.5">{feat.title}</h3>
                <p className="text-xs text-graphite font-light leading-relaxed mb-4">{feat.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {feat.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full bg-forest/[0.07] text-forest text-[10px] font-light tracking-wide"
                    >
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
