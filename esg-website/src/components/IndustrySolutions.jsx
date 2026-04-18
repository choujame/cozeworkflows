import { Truck, ShoppingCart, Factory, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import FadeIn from './FadeIn'
import { useLanguage } from '../context/LanguageContext'

const SOLUTIONS = {
  zh: {
    eyebrow: 'Industry Solutions',
    title: '產業應用',
    subtitle:
      '從冷鏈物流到綠色電商，石頭紙技術為各行各業提供無妥協的永續包裝解決方案。',
    items: [
      {
        Icon: Truck,
        color: '#2563EB',
        gradient: 'from-blue-50 via-sky-50 to-cyan-50',
        title: '冷鏈物流',
        en: 'Cold Chain Logistics',
        desc: '石頭紙箱能有效抵禦冷凝水，即使在 -20°C 低溫冷藏環境下仍保持結構強度，徹底解決傳統紙箱遇水即軟的痛點。是冷凍海鮮、生鮮肉品、精密電子物流的最佳選擇。',
        tags: ['冷凍倉儲', '生鮮電商', '跨境冷鏈', '肉品包裝'],
        product: '石頭紙箱',
        productHref: '#products',
      },
      {
        Icon: ShoppingCart,
        color: '#7C3AED',
        gradient: 'from-violet-50 via-purple-50 to-indigo-50',
        title: '綠色電商',
        en: 'Green E-Commerce',
        desc: '100% 生物可分解破壞袋讓消費者在開箱瞬間感受到品牌的永續誠意。一次性防偽設計確保物流安全，180 天內完全分解，不留任何塑膠殘留，助品牌贏得 Z 世代信任。',
        tags: ['電商包裝', '品牌升級', '防偽安全', '永續行銷'],
        product: '可分解破壞袋',
        productHref: '#products',
      },
      {
        Icon: Factory,
        color: '#B45309',
        gradient: 'from-amber-50 via-orange-50 to-yellow-50',
        title: '工業緩衝',
        en: 'Industrial Buffering',
        desc: '取代保麗龍的最佳環保方案。石頭紙蜂巢緩衝材提供卓越的避震與緩衝屬性，重量輕 40%，100% 可回收，協助製造業走向真正的循環經濟包裝模式。',
        tags: ['精密儀器', '電子產品', '藝術品運輸', '取代保麗龍'],
        product: '環保緩衝材',
        productHref: '#products',
      },
    ],
    viewProduct: '了解',
  },
  en: {
    eyebrow: 'Industry Solutions',
    title: 'Industry Solutions',
    subtitle:
      'From cold chain to e-commerce, our stone paper technology delivers uncompromising sustainable packaging for every industry.',
    items: [
      {
        Icon: Truck,
        color: '#2563EB',
        gradient: 'from-blue-50 via-sky-50 to-cyan-50',
        title: 'Cold Chain Logistics',
        en: 'Cold Chain Logistics',
        desc: 'Stone paper boxes effectively resist condensation, maintaining structural integrity at -20°C. The definitive solution for frozen seafood, fresh meat, and precision electronics logistics.',
        tags: ['Cold Storage', 'Fresh E-Commerce', 'Cross-border Cold Chain', 'Meat Packaging'],
        product: 'Stone Paper Box',
        productHref: '#products',
      },
      {
        Icon: ShoppingCart,
        color: '#7C3AED',
        gradient: 'from-violet-50 via-purple-50 to-indigo-50',
        title: 'Green E-Commerce',
        en: 'Green E-Commerce',
        desc: '100% biodegradable security bags let customers experience your brand\'s sustainability commitment at unboxing. Tamper-evident, fully degrading in 180 days with zero plastic residue.',
        tags: ['E-com Packaging', 'Brand Upgrade', 'Tamper Evidence', 'Sustainable Marketing'],
        product: 'Degradable Security Bag',
        productHref: '#products',
      },
      {
        Icon: Factory,
        color: '#B45309',
        gradient: 'from-amber-50 via-orange-50 to-yellow-50',
        title: 'Industrial Buffering',
        en: 'Industrial Buffering',
        desc: 'The premier eco-alternative to polystyrene foam. Stone paper honeycomb buffers provide superior shock absorption at 40% lighter weight, 100% recyclable — enabling true circular packaging.',
        tags: ['Precision Instruments', 'Electronics', 'Art Transport', 'EPS Replacement'],
        product: 'Eco Buffer Material',
        productHref: '#products',
      },
    ],
    viewProduct: 'View',
  },
}

export default function IndustrySolutions() {
  const { lang } = useLanguage()
  const s = SOLUTIONS[lang]

  return (
    <section id="solutions" className="py-28 px-6 bg-minimal-white">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-16">
          <p className="text-forest text-[10px] tracking-[0.28em] uppercase mb-3 font-light">{s.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">{s.title}</h2>
          <p className="text-graphite font-light max-w-lg mx-auto text-sm leading-relaxed">{s.subtitle}</p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {s.items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.12}>
              <div className="group h-full rounded-2xl overflow-hidden border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-400 bg-white flex flex-col">
                {/* Colored header */}
                <div className={`p-7 bg-gradient-to-br ${item.gradient} relative overflow-hidden`}>
                  {/* Decorative rings */}
                  <div
                    className="absolute -top-8 -right-8 w-36 h-36 rounded-full border-2 opacity-[0.12]"
                    style={{ borderColor: item.color }}
                  />
                  <div
                    className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full border opacity-[0.08]"
                    style={{ borderColor: item.color }}
                  />
                  <div className="relative z-10">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: item.color + '18' }}
                    >
                      <item.Icon size={22} strokeWidth={1.5} style={{ color: item.color }} />
                    </div>
                    <p
                      className="text-[9px] tracking-[0.22em] uppercase font-light mb-1"
                      style={{ color: item.color }}
                    >
                      {item.en}
                    </p>
                    <h3 className="text-xl font-light text-gray-900">{item.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-sm text-graphite font-light leading-relaxed mb-5 flex-1">{item.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full bg-gray-50 text-graphite text-[10px] font-light"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <motion.a
                    href={item.productHref}
                    whileHover={{ x: 3 }}
                    className="flex items-center gap-1.5 text-xs font-light transition-colors"
                    style={{ color: item.color }}
                  >
                    {s.viewProduct} {item.product}
                    <ArrowRight size={12} strokeWidth={1.5} />
                  </motion.a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
