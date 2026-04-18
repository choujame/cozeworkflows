import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from './FadeIn'

const products = [
  {
    id: 'box',
    label: '石頭紙箱',
    en: 'Stone Paper Box',
    description: '以礦石粉複合材料製成的全新一代環保紙箱，完全防水防凍，適用於冷鏈、生鮮、跨境電商等高要求物流場景。',
    specs: [
      { key: '材質', value: '礦石粉 80% + HDPE 20%' },
      { key: '防水等級', value: 'IPX6（72h 浸水不損）' },
      { key: '適用溫度', value: '-20°C ～ 80°C' },
      { key: '規格', value: '多種尺寸，支援訂製印刷' },
      { key: '認證', value: 'SGS · FDA 食品安全' },
      { key: '回收性', value: '100% 可回收再利用' },
    ],
    color: 'from-stone-100 to-stone-200',
    accent: '#8B7355',
    placeholder: '石頭紙箱',
  },
  {
    id: 'bag',
    label: '可分解破壞袋',
    en: 'Degradable Security Bag',
    description: '一次性防偽破壞袋，開封後留下不可逆痕跡，確保內容物安全。180 天內完全生物分解，零塑料殘留。',
    specs: [
      { key: '材質', value: '天然石頭紙複合膜' },
      { key: '安全特性', value: '開封後無法復原（防偽）' },
      { key: '降解時間', value: '180 天完全分解' },
      { key: '用途', value: '快遞包裝 · 機密文件傳遞' },
      { key: '認證', value: 'FDA · 無毒安全' },
      { key: '碳排放', value: '較傳統塑料袋降低 75%' },
    ],
    color: 'from-slate-100 to-slate-200',
    accent: '#4A5568',
    placeholder: '可分解破壞袋',
  },
  {
    id: 'buffer',
    label: '環保緩衝材',
    en: 'Eco Buffer Material',
    description: '採用石頭紙蜂巢立體結構，緩衝係數超越傳統泡棉，重量輕 40%，100% 可回收，完美保護精密電子與脆性物品。',
    specs: [
      { key: '材質', value: '石頭紙蜂巢複合結構' },
      { key: '緩衝係數', value: '> 95%（超越 EPE 泡棉）' },
      { key: '重量優勢', value: '較傳統泡棉輕 40%' },
      { key: '用途', value: '精密儀器 · 電子產品 · 藝術品' },
      { key: '認證', value: 'SGS · 無毒環保' },
      { key: '回收性', value: '100% 可回收，可堆肥降解' },
    ],
    color: 'from-green-50 to-emerald-100',
    accent: '#2D5A27',
    placeholder: '環保緩衝材',
  },
]

function ImagePlaceholder({ product }) {
  return (
    <div
      className={`w-full aspect-[4/3] rounded-xl bg-gradient-to-br ${product.color} flex flex-col items-center justify-center relative overflow-hidden`}
    >
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <filter id="ph-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#ph-noise)" />
        </svg>
      </div>
      <div
        className="w-20 h-20 rounded-2xl flex items-center justify-center mb-3 opacity-25"
        style={{ backgroundColor: product.accent }}
      />
      <p className="text-sm font-light" style={{ color: product.accent, opacity: 0.6 }}>
        {product.placeholder} 圖片
      </p>
      <p className="text-[10px] mt-1 text-gray-400 tracking-wider">Product Image Placeholder</p>
    </div>
  )
}

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState(0)
  const active = products[activeTab]

  return (
    <section id="products" className="py-28 px-6 bg-minimal-white">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-14">
          <p className="text-forest text-xs tracking-[0.25em] uppercase mb-3 font-light">Product Series</p>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">產品系列</h2>
          <p className="text-graphite font-light max-w-md mx-auto text-sm leading-relaxed">
            從包裝到緩衝，全系列石頭紙產品，為您的供應鏈注入永續動能。
          </p>
        </FadeIn>

        {/* Tab bar */}
        <FadeIn delay={0.1}>
          <div className="flex gap-1 p-1.5 bg-white rounded-2xl shadow-sm border border-gray-100 mb-10 max-w-lg mx-auto">
            {products.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActiveTab(i)}
                className="flex-1 relative py-2.5 px-3 rounded-xl text-xs font-light tracking-wide transition-colors duration-200 z-10"
                style={{ color: activeTab === i ? '#2D5A27' : '#6C757D' }}
              >
                {activeTab === i && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute inset-0 bg-forest/[0.08] rounded-xl"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{p.label}</span>
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          >
            <ImagePlaceholder product={active} />

            <div>
              <p className="text-[10px] text-forest tracking-[0.22em] uppercase mb-2 font-light">{active.en}</p>
              <h3 className="text-2xl font-light text-gray-900 mb-4">{active.label}</h3>
              <p className="text-sm text-graphite font-light leading-relaxed mb-8">{active.description}</p>

              <div className="space-y-0">
                {active.specs.map((spec, i) => (
                  <div
                    key={spec.key}
                    className={`flex items-start py-3 text-sm ${
                      i < active.specs.length - 1 ? 'border-b border-gray-100' : ''
                    }`}
                  >
                    <span className="w-28 shrink-0 text-graphite font-light text-xs tracking-wide">{spec.key}</span>
                    <span className="text-gray-700 font-light text-xs">{spec.value}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-forest text-white text-sm font-light rounded-full hover:bg-forest-dark transition-all duration-200 hover:shadow-lg hover:shadow-forest/20"
              >
                索取規格書
                <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
