import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Package, ShoppingBag, Boxes, Utensils, ArrowRight } from 'lucide-react'
import FadeIn from './FadeIn'

const products = [
  {
    id: 'box',
    Icon: Package,
    label: '石頭紙箱',
    en: 'Stone Paper Box',
    tagline: '冷鏈物流的最佳拍檔',
    desc: '以礦石粉複合材料製成的全新一代環保紙箱。石頭紙在濕冷環境下仍能保持結構強度，完全解決傳統紙箱遇水即軟的痛點，是冷凍海鮮、肉品與精密電子物流的最佳選擇。',
    gradient: 'from-stone-100 via-amber-50 to-stone-200',
    iconColor: '#8B7355',
    iconOpacity: 0.25,
    specs: [
      { key: '材質', value: '礦石粉 80% + HDPE 20%' },
      { key: '防水等級', value: 'IPX6（72h 浸水不損）' },
      { key: '適用溫度', value: '-20°C ～ 80°C' },
      { key: '抗壓強度', value: '較同規格紙箱高 30%' },
      { key: '規格', value: '多種尺寸，支援訂製印刷' },
      { key: '認證', value: 'SGS · FDA 食品安全' },
    ],
    badge: '冷鏈物流',
  },
  {
    id: 'bag',
    Icon: ShoppingBag,
    label: '可分解破壞袋',
    en: 'Degradable Security Bag',
    tagline: '電商永續包裝新選擇',
    desc: '100% 生物可分解的一次性防偽破壞袋，開封後留下不可逆撕裂痕跡，確保內容物安全。讓消費者在收到商品的同時，感受到品牌的永續誠意。',
    gradient: 'from-slate-100 via-blue-50 to-slate-200',
    iconColor: '#4A6B8A',
    iconOpacity: 0.25,
    specs: [
      { key: '材質', value: '天然石頭紙複合膜' },
      { key: '安全特性', value: '開封後無法復原（防偽）' },
      { key: '降解時間', value: '180 天完全生物分解' },
      { key: '用途', value: '快遞包裝 · 機密文件傳遞' },
      { key: '認證', value: 'FDA 無毒 · RoHS 合規' },
      { key: '碳排放', value: '較傳統塑料袋降低 75%' },
    ],
    badge: '綠色電商',
  },
  {
    id: 'buffer',
    Icon: Boxes,
    label: '環保緩衝材',
    en: 'Eco Buffer Material',
    tagline: '取代保麗龍的完美方案',
    desc: '採用石頭紙蜂巢立體結構，緩衝係數超越傳統 EPE 泡棉，重量輕 40%，100% 可回收，完美保護精密電子與脆性物品，同時讓工業包裝走向真正的循環經濟。',
    gradient: 'from-emerald-50 via-green-50 to-emerald-100',
    iconColor: '#2D5A27',
    iconOpacity: 0.2,
    specs: [
      { key: '材質', value: '石頭紙蜂巢複合結構' },
      { key: '緩衝係數', value: '> 95%（超越 EPE 泡棉）' },
      { key: '重量優勢', value: '較傳統泡棉輕 40%' },
      { key: '用途', value: '精密儀器 · 電子產品 · 藝術品' },
      { key: '認證', value: 'SGS 無毒 · 環保標章' },
      { key: '回收性', value: '100% 可回收，可堆肥降解' },
    ],
    badge: '工業包裝',
  },
  {
    id: 'tableware',
    Icon: Utensils,
    label: 'PGT 環保餐具',
    en: 'PGT Eco Tableware',
    tagline: '餐飲業的綠色革命',
    desc: 'PGT（Plant + Geo + Technology）環保餐具，以植物纖維與礦石複合技術製成。提供與傳統塑膠同等的耐熱性與機械強度，同時在自然環境中 60 天完全降解，徹底解決一次性餐具的環境問題。',
    gradient: 'from-orange-50 via-amber-50 to-orange-100',
    iconColor: '#B45309',
    iconOpacity: 0.22,
    specs: [
      { key: '材質', value: 'PGT 植物礦石複合材' },
      { key: '耐熱溫度', value: '120°C（可微波加熱）' },
      { key: '降解時間', value: '60 天完全降解' },
      { key: '用途', value: '外帶杯 · 餐盤 · 刀叉組' },
      { key: '認證', value: 'FDA 食品安全 · BSCI' },
      { key: '訂製服務', value: '支援品牌印刷與 ODM' },
    ],
    badge: '餐飲應用',
  },
]

function ProductVisual({ product }) {
  return (
    <div
      className={`w-full aspect-[4/3] rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center relative overflow-hidden`}
    >
      {/* Subtle noise */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.02] pointer-events-none">
        <filter id="pv-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#pv-noise)" />
      </svg>
      {/* Decorative rings */}
      <div
        className="absolute -top-6 -right-6 w-48 h-48 rounded-full border"
        style={{ borderColor: product.iconColor, opacity: 0.1 }}
      />
      <div
        className="absolute -bottom-8 -left-8 w-64 h-64 rounded-full border"
        style={{ borderColor: product.iconColor, opacity: 0.07 }}
      />
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center gap-4">
        <product.Icon
          size={96}
          strokeWidth={0.7}
          style={{ color: product.iconColor, opacity: product.iconOpacity }}
        />
        <div className="text-center">
          <p className="text-[11px] font-light" style={{ color: product.iconColor, opacity: 0.45 }}>
            {product.label}
          </p>
          <p className="text-[10px] font-light text-gray-400 mt-0.5 tracking-wide">Product Image Placeholder</p>
        </div>
      </div>
    </div>
  )
}

export default function ProductTabs() {
  const [active, setActive] = useState(0)
  const product = products[active]

  return (
    <section id="products" className="py-28 px-6 bg-minimal-white">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-12">
          <p className="text-forest text-[10px] tracking-[0.28em] uppercase mb-3 font-light">Product Series</p>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">互動式產品系列</h2>
          <p className="text-graphite font-light max-w-md mx-auto text-sm leading-relaxed">
            從包裝到餐具，全系列石頭紙產品，為您的供應鏈注入永續動能。
          </p>
        </FadeIn>

        {/* Tab bar */}
        <FadeIn delay={0.1}>
          <div className="flex overflow-x-auto scrollbar-hide gap-1 p-1.5 bg-white rounded-2xl shadow-sm border border-gray-100 mb-10 max-w-2xl mx-auto">
            {products.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActive(i)}
                className="flex-1 min-w-[90px] relative py-2.5 px-2 rounded-xl text-[11px] font-light tracking-wide transition-colors duration-200 whitespace-nowrap"
                style={{ color: active === i ? '#2D5A27' : '#6C757D' }}
              >
                {active === i && (
                  <motion.div
                    layoutId="product-tab"
                    className="absolute inset-0 bg-forest/[0.08] rounded-xl"
                    transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                  />
                )}
                <span className="relative z-10 flex items-center justify-center gap-1.5">
                  <p.Icon size={13} strokeWidth={1.5} />
                  {p.label}
                </span>
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          >
            <ProductVisual product={product} />

            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-forest/[0.08] text-forest text-[10px] font-light tracking-wide">
                  {product.badge}
                </span>
                <span className="text-[10px] text-graphite/60 font-light tracking-wide">{product.en}</span>
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-1">{product.label}</h3>
              <p className="text-sm text-forest font-light mb-4">{product.tagline}</p>
              <p className="text-sm text-graphite font-light leading-relaxed mb-8">{product.desc}</p>

              <div className="divide-y divide-gray-50">
                {product.specs.map((spec) => (
                  <div key={spec.key} className="flex items-start py-2.5">
                    <span className="w-28 shrink-0 text-[11px] text-graphite/70 font-light tracking-wide pt-px">{spec.key}</span>
                    <span className="text-[11px] text-gray-700 font-light leading-snug">{spec.value}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-forest text-white text-sm font-light rounded-full hover:bg-forest-dark transition-all duration-200 hover:shadow-lg hover:shadow-forest/20"
              >
                索取樣品 / 規格書
                <ArrowRight size={14} strokeWidth={1.5} />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
