import FadeIn from './FadeIn'

function WaterIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <path
        d="M24 6C24 6 10 22 10 30C10 37.732 16.268 44 24 44C31.732 44 38 37.732 38 30C38 22 24 6 24 6Z"
        stroke="#2D5A27"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 30C16 26 20 22 24 20"
        stroke="#2D5A27"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  )
}

function LeafIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <path
        d="M12 38C12 38 14 24 28 14C36 9 42 10 42 10C42 10 42 18 36 26C30 34 22 36 12 38Z"
        stroke="#2D5A27"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 38C12 38 20 30 26 22"
        stroke="#2D5A27"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
      <circle cx="10" cy="40" r="2" fill="#2D5A27" opacity="0.3" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <path
        d="M24 6L10 12V24C10 33 16 40 24 44C32 40 38 33 38 24V12L24 6Z"
        stroke="#2D5A27"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 24L22 28L30 20"
        stroke="#2D5A27"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.6"
      />
    </svg>
  )
}

const features = [
  {
    icon: <WaterIcon />,
    en: 'Waterproof & Frost-Resistant',
    zh: '防水抗凍',
    description:
      '石頭紙在水中浸泡 72 小時不損壞，抗凍性能達 -20°C，完全適用於冷鏈物流與潮濕環境。',
    tags: ['IPX6 防水', '抗凍 -20°C', '濕度免疫'],
  },
  {
    icon: <LeafIcon />,
    en: 'Low Carbon & Eco-Friendly',
    zh: '減碳環保',
    description:
      '生產過程無需砍伐樹木、無需用水、無酸廢液排放，碳排放量較傳統紙箱降低 60% 以上。',
    tags: ['碳排 -60%', '零用水製程', '完全可回收'],
  },
  {
    icon: <ShieldIcon />,
    en: 'Durable & Reliable',
    zh: '堅固耐用',
    description:
      '礦石粉複合結構提供卓越抗撕裂與抗壓強度，在極端溫差與外力衝擊下仍能維持結構完整性。',
    tags: ['高抗壓強度', '抗撕裂', '耐極端溫差'],
  },
]

export default function Features() {
  return (
    <section id="features" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-16">
          <p className="text-forest text-xs tracking-[0.25em] uppercase mb-3 font-light">Why Stone Paper</p>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">三大核心優勢</h2>
          <p className="text-graphite font-light max-w-md mx-auto text-sm leading-relaxed">
            重新定義環保包裝材料的標準——不妥協性能，不犧牲地球。
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <FadeIn key={feat.zh} delay={i * 0.15} direction="up">
              <div className="group p-8 rounded-2xl border border-gray-100 hover:border-forest/20 hover:shadow-xl hover:shadow-forest/5 transition-all duration-400 bg-white h-full">
                <div className="w-16 h-16 rounded-xl bg-forest/[0.06] flex items-center justify-center mb-6 group-hover:bg-forest/10 transition-colors">
                  {feat.icon}
                </div>
                <p className="text-[10px] text-graphite tracking-[0.2em] uppercase mb-1.5 font-light">{feat.en}</p>
                <h3 className="text-xl font-medium text-gray-900 mb-3">{feat.zh}</h3>
                <p className="text-sm text-graphite font-light leading-relaxed mb-5">{feat.description}</p>
                <div className="flex flex-wrap gap-2">
                  {feat.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-forest/[0.07] text-forest text-[10px] font-light tracking-wide"
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
