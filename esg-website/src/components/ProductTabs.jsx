import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Package, ShoppingBag, Boxes, Utensils, ArrowRight, Shirt, Leaf } from 'lucide-react'
import FadeIn from './FadeIn'
import { useLanguage } from '../context/LanguageContext'

const PRODUCTS = {
  zh: [
    {
      id: 'box', Icon: Package, badge: '冷鏈物流',
      label: '石頭紙箱', en: 'Stone Paper Box', tagline: '冷鏈物流的最佳拍檔',
      image: null,
      desc: '以礦石粉複合材料製成的全新一代環保紙箱。石頭紙在濕冷環境下仍能保持結構強度，完全解決傳統紙箱遇水即軟的痛點，是冷凍海鮮、肉品與精密電子物流的最佳選擇。',
      gradient: 'from-stone-100 via-amber-50 to-stone-200', iconColor: '#8B7355', iconOpacity: 0.25,
      specs: [
        { key: '材質', value: '礦石粉 80% + HDPE 20%' },
        { key: '防水等級', value: 'IPX6（72h 浸水不損）' },
        { key: '適用溫度', value: '-20°C ～ 80°C' },
        { key: '抗壓強度', value: '較同規格紙箱高 30%' },
        { key: '規格', value: '多種尺寸，支援訂製印刷' },
        { key: '認證', value: 'SGS · FDA 食品安全' },
      ],
    },
    {
      id: 'security-bag', Icon: ShoppingBag, badge: '電商物流',
      label: '二次循環破壞袋', en: 'Recyclable Security Bag', tagline: '電商永續包裝新選擇',
      image: null,
      desc: '採用二次循環石頭紙製成的防偽破壞袋，開封後留下不可逆撕裂痕跡，確保內容物安全。讓消費者在收到商品的同時，感受到品牌的永續誠意。',
      gradient: 'from-slate-100 via-blue-50 to-slate-200', iconColor: '#4A6B8A', iconOpacity: 0.25,
      specs: [
        { key: '材質', value: '二次循環石頭紙複合膜' },
        { key: '安全特性', value: '開封後無法復原（防偽）' },
        { key: '降解時間', value: '180 天完全生物分解' },
        { key: '用途', value: '快遞包裝 · 機密文件傳遞' },
        { key: '認證', value: 'FDA 無毒 · RoHS 合規' },
        { key: '碳排放', value: '較傳統塑料袋降低 75%' },
      ],
    },
    {
      id: 'vest-bag', Icon: Shirt, badge: '零售包裝',
      label: '背心袋', en: 'Stone Paper Vest Bag', tagline: '零售業的綠色升級首選',
      image: null,
      desc: '以石頭紙複合膜製成的背心袋，手感與傳統塑膠袋相近，卻完全無塑、可自然分解。適用於零售門市、超市與精品品牌，讓每一次購物都是一次環保選擇。',
      gradient: 'from-teal-50 via-cyan-50 to-teal-100', iconColor: '#0F766E', iconOpacity: 0.22,
      specs: [
        { key: '材質', value: '石頭紙複合膜' },
        { key: '承重', value: '最大負荷 8 kg' },
        { key: '防水', value: '防油污 · 防潮防濕' },
        { key: '降解時間', value: '180 天自然環境分解' },
        { key: '用途', value: '零售 · 超市 · 精品購物袋' },
        { key: '訂製', value: '支援品牌印刷 · 尺寸訂製' },
      ],
    },
    {
      id: 'buffer', Icon: Boxes, badge: '工業包裝',
      label: '緩衝材', en: 'Eco Buffer Material', tagline: '取代保麗龍的完美方案',
      image: null,
      desc: '採用石頭紙蜂巢立體結構，緩衝係數超越傳統 EPE 泡棉，重量輕 40%，100% 可回收，完美保護精密電子與脆性物品，同時讓工業包裝走向真正的循環經濟。',
      gradient: 'from-emerald-50 via-green-50 to-emerald-100', iconColor: '#2D5A27', iconOpacity: 0.2,
      specs: [
        { key: '材質', value: '石頭紙蜂巢複合結構' },
        { key: '緩衝係數', value: '> 95%（超越 EPE 泡棉）' },
        { key: '重量優勢', value: '較傳統泡棉輕 40%' },
        { key: '用途', value: '精密儀器 · 電子產品 · 藝術品' },
        { key: '認證', value: 'SGS 無毒 · 環保標章' },
        { key: '回收性', value: '100% 可回收，可堆肥降解' },
      ],
    },
    {
      id: 'tableware', Icon: Utensils, badge: '餐飲應用',
      label: '餐具', en: 'PGT Eco Tableware', tagline: '餐飲業的綠色革命',
      image: null,
      desc: 'PGT（Plant + Geo + Technology）環保餐具，以植物纖維與礦石複合技術製成。提供與傳統塑膠同等的耐熱性與機械強度，同時在自然環境中 60 天完全降解，徹底解決一次性餐具的環境問題。',
      gradient: 'from-orange-50 via-amber-50 to-orange-100', iconColor: '#B45309', iconOpacity: 0.22,
      specs: [
        { key: '材質', value: 'PGT 植物礦石複合材' },
        { key: '耐熱溫度', value: '120°C（可微波加熱）' },
        { key: '降解時間', value: '60 天完全降解' },
        { key: '用途', value: '外帶杯 · 餐盤 · 刀叉組' },
        { key: '認證', value: 'FDA 食品安全 · BSCI' },
        { key: '訂製服務', value: '支援品牌印刷與 ODM' },
      ],
    },
    {
      id: 'bio-bag', Icon: Leaf, badge: '生物分解',
      label: '環保生物袋', en: 'Eco Bio Bag', tagline: '真正零負擔的環保承諾',
      image: null,
      desc: '以 PLA 植物基材料與石頭紙複合技術製成，在土壤或堆肥環境中 90 天內完全生物分解，不殘留任何微塑料。適用於家庭垃圾袋、市場購物袋、餐廳外帶袋等各類日常應用。',
      gradient: 'from-lime-50 via-green-50 to-lime-100', iconColor: '#4D7C0F', iconOpacity: 0.22,
      specs: [
        { key: '材質', value: 'PLA + 石頭紙複合膜' },
        { key: '降解時間', value: '90 天完全生物分解' },
        { key: '用途', value: '購物袋 · 垃圾袋 · 堆肥袋' },
        { key: '無毒', value: '不含塑化劑 · 無重金屬' },
        { key: '認證', value: 'EN13432 · ASTM D6400' },
        { key: '應用', value: '家庭 · 餐廳 · 超市 · 市集' },
      ],
    },
  ],
  en: [
    {
      id: 'box', Icon: Package, badge: 'Cold Chain',
      label: 'Stone Paper Box', en: 'Stone Paper Box', tagline: 'The definitive cold chain solution',
      image: null,
      desc: 'Next-generation eco-packaging made from mineral composite. Stone paper maintains structural integrity in wet and frozen environments, eliminating the weakness of traditional cardboard in cold-chain logistics.',
      gradient: 'from-stone-100 via-amber-50 to-stone-200', iconColor: '#8B7355', iconOpacity: 0.25,
      specs: [
        { key: 'Material', value: '80% Mineral Powder + 20% HDPE' },
        { key: 'Waterproof', value: 'IPX6 (72h submersion)' },
        { key: 'Temp. Range', value: '-20°C to 80°C' },
        { key: 'Compression', value: '30% stronger than same-size cardboard' },
        { key: 'Dimensions', value: 'Multiple sizes, custom print available' },
        { key: 'Certifications', value: 'SGS · FDA Food Grade' },
      ],
    },
    {
      id: 'security-bag', Icon: ShoppingBag, badge: 'E-Commerce',
      label: 'Recyclable Security Bag', en: 'Recyclable Security Bag', tagline: 'Sustainable e-commerce packaging',
      image: null,
      desc: "Made from secondary-cycle stone paper, this tamper-evident security bag leaves an irreversible tear mark once opened. Lets customers experience your brand's sustainability commitment at unboxing.",
      gradient: 'from-slate-100 via-blue-50 to-slate-200', iconColor: '#4A6B8A', iconOpacity: 0.25,
      specs: [
        { key: 'Material', value: 'Recycled Stone Paper Composite Film' },
        { key: 'Security', value: 'Tamper-evident, irreversible opening' },
        { key: 'Degradation', value: 'Full biodegradation in 180 days' },
        { key: 'Use Case', value: 'Express packaging · Confidential docs' },
        { key: 'Certifications', value: 'FDA Non-toxic · RoHS Compliant' },
        { key: 'Carbon', value: '75% lower emissions vs. plastic bags' },
      ],
    },
    {
      id: 'vest-bag', Icon: Shirt, badge: 'Retail',
      label: 'Stone Paper Vest Bag', en: 'Stone Paper Vest Bag', tagline: 'The green upgrade for retail',
      image: null,
      desc: 'Made from stone paper composite film, our vest bag feels like traditional plastic yet is completely plastic-free and biodegradable. Ideal for retail stores, supermarkets, and premium brands.',
      gradient: 'from-teal-50 via-cyan-50 to-teal-100', iconColor: '#0F766E', iconOpacity: 0.22,
      specs: [
        { key: 'Material', value: 'Stone Paper Composite Film' },
        { key: 'Load Capacity', value: 'Up to 8 kg' },
        { key: 'Protection', value: 'Oil & moisture resistant' },
        { key: 'Degradation', value: 'Natural degradation in 180 days' },
        { key: 'Use Case', value: 'Retail · Supermarket · Boutique' },
        { key: 'Custom', value: 'Brand printing & custom sizing' },
      ],
    },
    {
      id: 'buffer', Icon: Boxes, badge: 'Industrial',
      label: 'Eco Buffer Material', en: 'Eco Buffer Material', tagline: 'The premier EPS foam alternative',
      image: null,
      desc: 'Stone paper honeycomb structure surpasses traditional EPE foam in cushioning coefficient, 40% lighter, 100% recyclable. Protects precision electronics and fragile items while advancing true circular packaging.',
      gradient: 'from-emerald-50 via-green-50 to-emerald-100', iconColor: '#2D5A27', iconOpacity: 0.2,
      specs: [
        { key: 'Material', value: 'Stone Paper Honeycomb Composite' },
        { key: 'Cushioning', value: '> 95% (exceeds EPE foam)' },
        { key: 'Weight', value: '40% lighter than traditional foam' },
        { key: 'Use Case', value: 'Precision instruments · Electronics · Art' },
        { key: 'Certifications', value: 'SGS Non-toxic · Eco Label' },
        { key: 'Recycling', value: '100% recyclable, compostable' },
      ],
    },
    {
      id: 'tableware', Icon: Utensils, badge: 'Food Service',
      label: 'PGT Eco Tableware', en: 'PGT Eco Tableware', tagline: 'The green revolution for food service',
      image: null,
      desc: 'PGT (Plant + Geo + Technology) tableware made from plant fiber and mineral composite. Delivers equivalent heat resistance and mechanical strength as plastics, yet fully degrades in 60 days.',
      gradient: 'from-orange-50 via-amber-50 to-orange-100', iconColor: '#B45309', iconOpacity: 0.22,
      specs: [
        { key: 'Material', value: 'PGT Plant-Mineral Composite' },
        { key: 'Heat Resistance', value: '120°C (microwave safe)' },
        { key: 'Degradation', value: 'Fully degraded in 60 days' },
        { key: 'Use Case', value: 'Cups · Plates · Cutlery sets' },
        { key: 'Certifications', value: 'FDA Food Grade · BSCI' },
        { key: 'Custom', value: 'Brand printing & ODM available' },
      ],
    },
    {
      id: 'bio-bag', Icon: Leaf, badge: 'Biodegradable',
      label: 'Eco Bio Bag', en: 'Eco Bio Bag', tagline: 'A truly zero-burden eco commitment',
      image: null,
      desc: 'Made from PLA plant-based materials and stone paper composite technology, fully biodegrades in 90 days in soil or compost with zero microplastic residue. Suitable for household, restaurant, and market use.',
      gradient: 'from-lime-50 via-green-50 to-lime-100', iconColor: '#4D7C0F', iconOpacity: 0.22,
      specs: [
        { key: 'Material', value: 'PLA + Stone Paper Composite Film' },
        { key: 'Degradation', value: 'Full biodegradation in 90 days' },
        { key: 'Use Case', value: 'Shopping · Trash · Compost bags' },
        { key: 'Non-toxic', value: 'Plasticizer-free · No heavy metals' },
        { key: 'Certifications', value: 'EN13432 · ASTM D6400' },
        { key: 'Applications', value: 'Home · Restaurant · Supermarket · Market' },
      ],
    },
  ],
}

const COPY = {
  zh: { eyebrow: 'Product Series', title: '產品系列', subtitle: '從包裝到餐具，全系列石頭紙產品，為您的供應鏈注入永續動能。', cta: '索取樣品 / 規格書' },
  en: { eyebrow: 'Product Series', title: 'Product Series', subtitle: 'From packaging to tableware — our full stone paper line powers your sustainable supply chain.', cta: 'Request Sample / Spec Sheet' },
}

function ProductVisual({ product }) {
  if (product.image) {
    return (
      <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
        <img src={product.image} alt={product.label} className="w-full h-full object-cover" />
      </div>
    )
  }
  return (
    <div className={`w-full aspect-[4/3] rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center relative overflow-hidden`}>
      <svg className="absolute inset-0 w-full h-full opacity-[0.02] pointer-events-none">
        <filter id="pv-n"><feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" stitchTiles="stitch" /></filter>
        <rect width="100%" height="100%" filter="url(#pv-n)" />
      </svg>
      <div className="absolute -top-6 -right-6 w-48 h-48 rounded-full border" style={{ borderColor: product.iconColor, opacity: 0.1 }} />
      <div className="absolute -bottom-8 -left-8 w-64 h-64 rounded-full border" style={{ borderColor: product.iconColor, opacity: 0.07 }} />
      <div className="relative z-10 flex flex-col items-center gap-3">
        <product.Icon size={96} strokeWidth={0.7} style={{ color: product.iconColor, opacity: product.iconOpacity }} />
        <p className="text-[11px] font-light" style={{ color: product.iconColor, opacity: 0.4 }}>產品圖片</p>
      </div>
    </div>
  )
}

export default function ProductTabs() {
  const [active, setActive] = useState(0)
  const { lang } = useLanguage()
  const products = PRODUCTS[lang]
  const c = COPY[lang]
  const product = products[active]

  return (
    <section id="products" className="py-28 px-6 bg-minimal-white">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-12">
          <p className="text-forest text-[10px] tracking-[0.28em] uppercase mb-3 font-light">{c.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">{c.title}</h2>
          <p className="text-graphite font-light max-w-md mx-auto text-sm leading-relaxed">{c.subtitle}</p>
        </FadeIn>

        {/* Tab bar */}
        <FadeIn delay={0.1}>
          <div className="flex overflow-x-auto scrollbar-hide gap-1 p-1.5 bg-white rounded-2xl shadow-sm border border-gray-100 mb-10 max-w-3xl mx-auto">
            {products.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActive(i)}
                className="flex-1 min-w-[80px] relative py-2.5 px-2 rounded-xl text-[11px] font-light tracking-wide transition-colors duration-200 whitespace-nowrap"
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
            key={`${lang}-${active}`}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          >
            <ProductVisual product={product} />
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-forest/[0.08] text-forest text-[10px] font-light tracking-wide">{product.badge}</span>
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
              <a href="#contact" className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-forest text-white text-sm font-light rounded-full hover:bg-forest-dark transition-all duration-200 hover:shadow-lg hover:shadow-forest/20">
                {c.cta}
                <ArrowRight size={14} strokeWidth={1.5} />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
