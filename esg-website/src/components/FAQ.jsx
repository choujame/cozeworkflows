import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import FadeIn from './FadeIn'
import { useLanguage } from '../context/LanguageContext'

const CATEGORIES = {
  zh: [
    { key: 'general',   label: '通用' },
    { key: 'stonebox',  label: '石頭紙箱' },
    { key: 'secbag',    label: '二次循環破壞袋' },
    { key: 'vestbag',   label: '背心袋' },
    { key: 'buffer',    label: '緩衝材' },
    { key: 'tableware', label: 'PGT餐具' },
    { key: 'biobag',    label: '環保生物袋' },
  ],
  en: [
    { key: 'general',   label: 'General' },
    { key: 'stonebox',  label: 'Stone Paper Box' },
    { key: 'secbag',    label: 'Recycled Security Bag' },
    { key: 'vestbag',   label: 'Vest Bag' },
    { key: 'buffer',    label: 'Buffer Material' },
    { key: 'tableware', label: 'PGT Tableware' },
    { key: 'biobag',    label: 'Eco Bio Bag' },
  ],
}

const FAQS = {
  zh: {
    general: [
      {
        q: '最小訂購量（MOQ）是多少？',
        a: '標準規格產品起訂量約 1,000 件，客製規格（訂製尺寸、印刷）起訂量約 3,000 件。如需少量測試，可透過網站申請免費樣品（5 件以內）。',
      },
      {
        q: '是否支援訂製印刷與 ODM 服務？',
        a: '支援全彩 CMYK 印刷、燙金、局部 UV 等多種表面處理。ODM 服務可從材料配方、結構設計到印刷一次整合，交期視規格複雜度約 4–8 週。',
      },
      {
        q: '貨期通常需要多長時間？',
        a: '現有庫存規格出貨時間為 3–5 個工作天（台灣本島）。客製規格視數量與複雜度，通常需要 4–8 週。跨境出貨可配合 DDP 或 EXW 條款安排。',
      },
      {
        q: '與傳統包材相比，價格差異大嗎？',
        a: '單價略高於一般紙箱，但考量其耐用性、損耗率低、減少退貨等隱性成本，整體 TCO 通常與傳統包材相當甚至更低，品牌端還可獲得 ESG 行銷加分。',
      },
      {
        q: '是否提供 SGS 或 FDA 檢測報告？',
        a: '是的。所有產品均備有 SGS 第三方檢測報告，部分產品通過 FDA 食品接觸材料認證。洽詢時可免費索取完整報告。',
      },
    ],
    stonebox: [
      {
        q: '石頭紙箱和一般紙箱有什麼不同？',
        a: '石頭紙箱以碳酸鈣礦石粉為主要原料，不含木漿，製造過程無需砍樹、無需用水。物理性能上具備防水、防潮、抗凍、抗撕裂等特性，比傳統紙箱更耐用、更環保。',
      },
      {
        q: '適合哪些物流場景？',
        a: '特別適合冷鏈物流（冷藏 / 冷凍）、潮濕氣候地區運輸、易碎品包裝，以及長途跨境運輸。常溫電商、食品、電子產品、醫療耗材均可使用。',
      },
      {
        q: '耐溫範圍是多少？',
        a: '標準石頭紙箱適用溫度為 -20°C 至 80°C，完全滿足一般冷鏈（冷藏 / 冷凍）需求。如有特殊溫度需求，可與技術團隊討論客製配方。',
      },
      {
        q: '可以訂製尺寸和印刷嗎？',
        a: '可以。支援客製尺寸、結構設計與全彩印刷。訂製起訂量約 3,000 件，交期 4–8 週。建議提供產品尺寸與年用量，由業務顧問規劃最適方案。',
      },
      {
        q: '石頭紙箱如何回收？',
        a: '主要成分為碳酸鈣與少量 HDPE，可進入現有塑料回收體系，也可直接焚燒（燃燒後還原為礦石粉，無有害氣體）。相較於傳統紙箱，碳足跡降低約 67%。',
      },
    ],
    secbag: [
      {
        q: '什麼是「二次循環」破壞袋？',
        a: '指袋體設計具備兩條撕拉線，第一次開封後仍可重新密封再使用一次，減少包材浪費。適合退換貨流程頻繁的電商業者，一個袋子可完成出貨與退貨兩個環節。',
      },
      {
        q: '破壞袋的「破壞性」是什麼意思？',
        a: '開封後袋身留下明顯痕跡，無法在不留痕的情況下重新封口，具備防偽與防竄改功能。適合電商、精品、藥品等對包裝安全性有要求的場景。',
      },
      {
        q: '材質是否環保？如何分解？',
        a: '採用可分解配方，在自然環境中 180 天內完全分解，不殘留微塑料，對土壤和水源無害，通過 SGS 生物分解認證。',
      },
      {
        q: '有哪些尺寸規格？',
        a: '提供多種標準尺寸（A4、A3、B4 等），也支援客製尺寸。可搭配品牌印刷，適合電商品牌建立一致的開箱體驗。',
      },
    ],
    vestbag: [
      {
        q: '背心袋的材質是什麼？',
        a: '採用環保可分解配方製作，主成分為玉米澱粉或 PBAT 混合材料，符合國際生物分解標準。外觀與一般塑膠袋相近，但對環境影響大幅降低。',
      },
      {
        q: '承重能力如何？',
        a: '標準規格背心袋承重約 5–8 公斤，加厚款可達 10 公斤以上。適合超市、零售業、外帶餐飲等日常使用場景。',
      },
      {
        q: '有哪些尺寸可選？',
        a: '提供小（25×40cm）、中（30×50cm）、大（38×60cm）等標準尺寸，亦可依需求訂製。支援品牌 LOGO 印刷。',
      },
      {
        q: '是否符合台灣限塑政策規定？',
        a: '是的。本產品符合台灣環保署可分解塑膠袋認證標準，適用於限塑政策規範下的替代方案，可合規用於餐飲業、零售業等場域。',
      },
    ],
    buffer: [
      {
        q: '緩衝材如何取代保麗龍（EPS）？',
        a: '本緩衝材採用可回收或可分解材料製成，具備與保麗龍相當的防震吸收效果，但重量更輕、體積可壓縮，大幅降低倉儲與運輸成本，且不會造成白色污染。',
      },
      {
        q: '緩衝效果是否通過測試？',
        a: '是的。產品通過 ISTA 國際安全運輸協會的包裝測試標準，可有效保護易碎品（如電子產品、玻璃器皿、精密儀器）在運輸過程中不受損壞。',
      },
      {
        q: '材質如何回收或分解？',
        a: '依規格不同，部分款式可進入現有紙類或塑料回收體系；可分解款在堆肥環境下 90–180 天完全分解。建議洽詢業務顧問確認最適合使用場景的規格。',
      },
      {
        q: '適合哪些產業使用？',
        a: '廣泛應用於電商、電子產品、食品禮盒、醫療器材、精品等需要內裝固定與防震保護的包裝場景。支援裁切成型客製化服務。',
      },
    ],
    tableware: [
      {
        q: 'PGT 餐具是什麼材質？',
        a: 'PGT（Plant-based Green Tableware）以植物纖維為基底，結合專利配方製成，不含塑料成分。外觀質感佳，可替代傳統一次性塑膠、美耐皿或不鏽鋼餐具。',
      },
      {
        q: '耐熱溫度是多少？可以微波嗎？',
        a: 'PGT 餐具耐熱可達 120°C，可安全微波使用，也耐低溫至 -20°C，適合冷熱食皆可盛裝。不建議直接接觸明火或放入烤箱。',
      },
      {
        q: '和美耐皿（Melamine）餐具有什麼不同？',
        a: '美耐皿餐具在受損、刮傷或高溫使用時，可能釋放三聚氰胺（Melamine）有毒物質，對人體造成危害。PGT 餐具即使受損也不含三聚氰胺，不會釋放有害物質，食用安全性更高。',
      },
      {
        q: '重量與不鏽鋼餐具相比如何？',
        a: 'PGT 餐具重量比不鏽鋼輕，大幅降低外燴活動、團膳配送的搬運與運輸成本，同時兼顧耐用性與食安要求，是取代不鏽鋼的輕量環保選項。',
      },
      {
        q: '是否通過食品安全認證？',
        a: '通過美國 FDA 食品接觸材料認證及 SGS 食安檢測，不含螢光增白劑、塑化劑及重金屬，可安全用於直接接觸食物的包裝與餐具。',
      },
      {
        q: '適合哪些餐飲場景？',
        a: '適用於外帶餐盒、便當盒、飲料杯、餐盤等需求，特別適合強調品牌永續形象的餐飲業者、企業餐廳及活動外燴使用。',
      },
    ],
    biobag: [
      {
        q: '環保生物袋和一般塑膠袋有什麼不同？',
        a: '環保生物袋採用 PLA（聚乳酸）或 PBAT 等生物基材料製成，外觀與一般塑膠袋相同，但在特定環境條件下可完全分解，不留殘留物，大幅減少對環境的長期影響。',
      },
      {
        q: '耐熱溫度是多少？可以用於蒸煮包裝嗎？',
        a: '環保生物袋耐熱可達 120°C，適合農產品蒸煮、熱食包裝及需要高溫處理的包裝場景，兼顧食品安全與環保需求。',
      },
      {
        q: '在什麼條件下才會分解？',
        a: '在工業堆肥環境（溫度 ≥ 55°C、適當濕度與微生物）下，約 90–180 天可完全分解。自然環境下分解速度較慢，建議配合各地有機廢棄物回收體系處理。',
      },
      {
        q: '分解後會產生微塑料嗎？',
        a: '不會。環保生物袋分解後還原為水、二氧化碳與有機質，不殘留微塑料，通過 EN 13432 歐盟生物分解標準及 SGS 認證。',
      },
      {
        q: '適合哪些使用場景？',
        a: '廣泛適用於超市購物袋、有機農產品包裝、蒸煮食品袋、廚餘垃圾袋、外帶提袋等。特別適合需要符合限塑規範或主打環保形象的品牌與通路。',
      },
      {
        q: '可以印刷品牌 LOGO 嗎？',
        a: '可以。支援單色至四色品牌印刷，客製起訂量約 3,000 件。印刷油墨亦採用環保水性配方，不影響整體生物分解性能。',
      },
    ],
  },
  en: {
    general: [
      {
        q: 'What is the minimum order quantity (MOQ)?',
        a: 'Standard products start at 1,000 units; custom specifications (sizes, printing) start at 3,000 units. Free samples (up to 5 pcs) can be requested through the website for initial testing.',
      },
      {
        q: 'Do you support custom printing and ODM services?',
        a: 'Yes — full-color CMYK printing, hot stamping, spot UV, and more. ODM services cover material formulation, structural design, and printing in one integrated flow. Lead time is approximately 4–8 weeks depending on complexity.',
      },
      {
        q: 'What are the typical lead times?',
        a: 'In-stock standard items ship in 3–5 business days (Taiwan domestic). Custom orders typically require 4–8 weeks. Cross-border shipments can be arranged under DDP or EXW terms.',
      },
      {
        q: 'How does the price compare to traditional packaging?',
        a: 'Unit price is slightly higher than standard packaging. However, factoring in durability, lower damage rates, and reduced return costs, total TCO is typically comparable or lower. Brands also gain measurable ESG marketing value.',
      },
      {
        q: 'Are SGS or FDA test reports available?',
        a: 'Yes. All products have SGS third-party test reports, and select products carry FDA food-contact material certification. Full reports are available upon request at no charge.',
      },
    ],
    stonebox: [
      {
        q: 'How is stone paper different from regular cardboard?',
        a: 'Stone paper boxes are made primarily from calcium carbonate mineral powder with no wood pulp — no trees cut, no water used in production. They offer superior waterproofing, frost resistance, and tear strength compared to traditional cardboard.',
      },
      {
        q: 'What logistics scenarios are best suited for stone paper boxes?',
        a: 'Ideal for cold-chain logistics (refrigeration/freezing), humid-climate shipping, fragile item packaging, and long-distance cross-border transport. Also suitable for ambient e-commerce, food, electronics, and medical consumables.',
      },
      {
        q: 'What is the operating temperature range?',
        a: 'Standard stone paper boxes operate from -20°C to 80°C, fully covering standard cold-chain requirements. Custom formulations for special temperature needs are available through our technical team.',
      },
      {
        q: 'Can I order custom sizes and printing?',
        a: 'Yes. Custom sizing, structural design, and full-color printing are available. Minimum order for custom specs is 3,000 units with a 4–8 week lead time. Provide your product dimensions and annual volume for a tailored proposal.',
      },
      {
        q: 'How is stone paper recycled?',
        a: 'The main components — calcium carbonate and a small amount of HDPE — are compatible with existing plastic recycling streams. They can also be incinerated cleanly (reverts to mineral powder, no harmful emissions). Carbon footprint is approximately 67% lower than traditional cardboard.',
      },
    ],
    secbag: [
      {
        q: 'What does "recycled" mean for the security bag?',
        a: 'The bag features two tear strips, allowing it to be resealed and reused once after the initial opening. This supports reverse logistics — a single bag can handle both outbound shipping and a return shipment, reducing packaging waste.',
      },
      {
        q: 'What makes it a "security" bag?',
        a: 'Once opened, the bag shows clear tamper-evident marks and cannot be resealed without visible evidence. This makes it ideal for e-commerce, luxury goods, and pharmaceuticals where packaging integrity is critical.',
      },
      {
        q: 'Is the material eco-friendly? How does it degrade?',
        a: 'Made with a biodegradable formulation, the bag fully decomposes within 180 days in natural environments with no microplastic residue — harmless to soil and water. SGS biodegradability certified.',
      },
      {
        q: 'What sizes are available?',
        a: 'Multiple standard sizes are available (A4, A3, B4, etc.) along with custom sizing options. Brand printing is supported to create a consistent unboxing experience.',
      },
    ],
    vestbag: [
      {
        q: 'What material is the vest bag made from?',
        a: 'Made from an eco-friendly biodegradable formulation — primarily corn starch or PBAT blend — meeting international biodegradability standards. It looks and feels like a standard plastic bag but with significantly reduced environmental impact.',
      },
      {
        q: 'What is the load-bearing capacity?',
        a: 'Standard vest bags support 5–8 kg; heavy-duty versions can handle 10+ kg. Suitable for supermarkets, retail, and food takeaway applications.',
      },
      {
        q: 'What sizes are available?',
        a: 'Standard sizes include Small (25×40cm), Medium (30×50cm), and Large (38×60cm), with custom sizing available. Brand logo printing is supported.',
      },
      {
        q: 'Does it comply with plastic reduction regulations?',
        a: 'Yes. This product meets Taiwan EPA biodegradable plastic bag certification standards, making it a compliant alternative under plastic reduction policies for food service and retail industries.',
      },
    ],
    buffer: [
      {
        q: 'How does this replace EPS (styrofoam)?',
        a: 'Made from recyclable or biodegradable materials with shock absorption comparable to EPS, but lighter and compressible — significantly reducing storage and shipping costs while eliminating white pollution.',
      },
      {
        q: 'Has the cushioning performance been tested?',
        a: 'Yes. Products meet ISTA (International Safe Transit Association) packaging test standards, effectively protecting fragile goods such as electronics, glassware, and precision instruments during transport.',
      },
      {
        q: 'How is it recycled or composted?',
        a: 'Depending on the specification, some variants enter standard paper or plastic recycling streams; biodegradable variants fully decompose in composting conditions within 90–180 days. Consult our team for the right spec for your application.',
      },
      {
        q: 'Which industries use this product?',
        a: 'Widely used in e-commerce, electronics, food gift boxes, medical devices, and luxury goods — any application requiring interior fixation and impact protection. Custom die-cutting services are available.',
      },
    ],
    tableware: [
      {
        q: 'What is PGT tableware made from?',
        a: 'PGT (Plant-based Green Tableware) uses plant fiber as its base with a proprietary formulation — plastic-free. It has a premium look and feel, replacing conventional single-use plastic, melamine, or stainless steel tableware.',
      },
      {
        q: 'What is the heat resistance? Is it microwave-safe?',
        a: 'PGT tableware is heat-resistant to 120°C and microwave-safe. It also withstands temperatures down to -20°C, making it suitable for both hot and cold food. Not recommended for direct flame or oven use.',
      },
      {
        q: 'How is it different from melamine tableware?',
        a: 'Melamine tableware can release melamine toxins when scratched, damaged, or used at high temperatures — posing health risks. PGT tableware contains no melamine and releases no harmful substances even when damaged, making it a significantly safer choice.',
      },
      {
        q: 'How does the weight compare to stainless steel?',
        a: 'PGT tableware is lighter than stainless steel, significantly reducing handling and transport costs for catering events and institutional food service — without compromising durability or food safety.',
      },
      {
        q: 'Does it have food safety certification?',
        a: 'Yes. Certified under US FDA food-contact material standards and SGS food safety testing. Free of fluorescent brighteners, plasticizers, and heavy metals — safe for direct food contact.',
      },
      {
        q: 'What food service scenarios is it designed for?',
        a: 'Ideal for takeaway boxes, bento containers, cups, and plates. Especially suited for F&B brands emphasizing sustainability, corporate cafeterias, and catered events.',
      },
    ],
    biobag: [
      {
        q: 'How is an eco bio bag different from a regular plastic bag?',
        a: 'Eco bio bags are made from bio-based materials such as PLA (polylactic acid) or PBAT. They look and function like conventional plastic bags but fully decompose under the right conditions, leaving no residue — significantly reducing long-term environmental impact.',
      },
      {
        q: 'What is the heat resistance? Can it be used for steaming?',
        a: 'Eco bio bags are heat-resistant up to 120°C, making them suitable for steaming, hot food packaging, and applications requiring high-temperature processing — combining food safety with environmental responsibility.',
      },
      {
        q: 'What conditions are required for decomposition?',
        a: 'In an industrial composting environment (temperature ≥ 55°C with adequate moisture and microorganisms), full decomposition takes approximately 90–180 days. Natural environment decomposition is slower; pairing with local organic waste collection is recommended.',
      },
      {
        q: 'Does it leave microplastics?',
        a: 'No. Decomposition yields only water, CO₂, and organic matter — no microplastic residue. Certified to EN 13432 (EU biodegradability standard) and SGS.',
      },
      {
        q: 'What are the main use cases?',
        a: 'Widely used for supermarket shopping bags, organic produce packaging, steaming pouches, kitchen waste bin liners, and takeaway carry bags. Especially suited for brands targeting plastic-reduction compliance or sustainability positioning.',
      },
      {
        q: 'Can I print my brand logo on it?',
        a: 'Yes. Single to four-color brand printing is available, with a minimum order of 3,000 units. Eco water-based inks are used to preserve overall biodegradability.',
      },
    ],
  },
}

const COPY = {
  zh: { eyebrow: 'FAQ', title: '常見問題', subtitle: '選擇產品分類，快速找到您需要的答案。' },
  en: { eyebrow: 'FAQ', title: 'Frequently Asked Questions', subtitle: 'Select a product category to find the answers you need.' },
}

function AccordionItem({ q, a, isOpen, onClick, index }) {
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={onClick}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
      >
        <div className="flex items-start gap-3">
          <span className="text-[11px] text-forest/50 font-light tracking-widest mt-0.5 shrink-0">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-sm text-gray-800 font-light leading-snug group-hover:text-forest transition-colors duration-200">
            {q}
          </span>
        </div>
        <div className="shrink-0 w-6 h-6 rounded-full border border-gray-200 group-hover:border-forest/30 flex items-center justify-center transition-colors duration-200 mt-0.5">
          {isOpen
            ? <Minus size={11} strokeWidth={2} className="text-forest" />
            : <Plus size={11} strokeWidth={2} className="text-graphite/60" />
          }
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <p className="text-sm text-graphite font-light leading-relaxed pl-7 pb-5">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const { lang } = useLanguage()
  const c = COPY[lang]
  const categories = CATEGORIES[lang]
  const [activeKey, setActiveKey] = useState('general')
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = FAQS[lang][activeKey] || []

  const handleTabChange = (key) => {
    setActiveKey(key)
    setOpenIndex(0)
  }

  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <FadeIn className="text-center mb-12">
          <p className="text-forest text-[10px] tracking-[0.28em] uppercase mb-3 font-light">{c.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">{c.title}</h2>
          <p className="text-graphite font-light max-w-lg mx-auto text-sm leading-relaxed">{c.subtitle}</p>
        </FadeIn>

        {/* 產品分類 Tab */}
        <FadeIn delay={0.05}>
          <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => handleTabChange(cat.key)}
                className={`shrink-0 px-4 py-2 rounded-full text-xs font-light transition-all duration-200 border ${
                  activeKey === cat.key
                    ? 'bg-forest text-white border-forest'
                    : 'bg-white text-graphite border-gray-200 hover:border-forest/40 hover:text-forest'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* FAQ 列表 */}
        <FadeIn delay={0.1}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeKey}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm px-8 py-2"
            >
              {faqs.map((item, i) => (
                <AccordionItem
                  key={i}
                  index={i}
                  q={item.q}
                  a={item.a}
                  isOpen={openIndex === i}
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-10 text-center">
          <p className="text-sm text-graphite font-light mb-4">
            {lang === 'zh' ? '找不到答案？歡迎直接聯繫我們的業務顧問。' : "Can't find your answer? Our sales team is ready to help."}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-forest/[0.08] text-forest text-sm font-light rounded-full hover:bg-forest/[0.14] transition-colors duration-200"
          >
            {lang === 'zh' ? '聯絡業務顧問' : 'Contact Sales'}
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
