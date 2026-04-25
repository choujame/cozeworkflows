import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import FadeIn from './FadeIn'
import { useLanguage } from '../context/LanguageContext'

const FAQS = {
  zh: [
    {
      q: '石頭紙可以完全替代傳統紙箱嗎？',
      a: '是的。石頭紙箱在防水、抗凍、抗壓等物理性能上全面優於傳統木漿紙箱，特別適合冷鏈物流、潮濕環境與高強度運輸場景。常溫電商、食品、電子產品等均可使用，且支援訂製尺寸與品牌印刷。',
    },
    {
      q: '石頭紙如何回收或自然分解？',
      a: '石頭紙主要成分為碳酸鈣（礦石粉）與少量 HDPE，可進入現有塑料回收體系。部分產品如可分解破壞袋，則在自然環境中 180 天內完全分解，不殘留微塑料，對土壤和水源無害。',
    },
    {
      q: '最小訂購量（MOQ）是多少？',
      a: '標準規格產品起訂量約 1,000 件，客製規格（訂製尺寸、印刷）起訂量約 3,000 件。如需少量樣品測試，可透過網站申請免費樣品（5 件以內）。我們提供靈活的分批出貨方案以配合不同採購節奏。',
    },
    {
      q: '是否支援訂製印刷與 ODM 服務？',
      a: '支援全彩 CMYK 印刷、燙金、局部 UV 等多種表面處理。ODM 服務可從材料配方、結構設計到印刷一次整合，交期視規格複雜度約 4–8 週。建議聯繫業務顧問提供詳細需求。',
    },
    {
      q: '石頭紙的耐溫範圍是多少？',
      a: '標準石頭紙箱適用溫度為 -20°C 至 80°C，完全滿足一般冷鏈（冷藏 / 冷凍）需求。PGT 環保餐具耐熱可達 120°C，可安全微波使用。如有特殊溫度需求，可與技術團隊討論客製配方。',
    },
    {
      q: '石頭紙是否通過食品安全認證？',
      a: '是的。琮祐石頭紙系列通過美國 FDA 食品接觸材料認證，不含螢光增白劑、塑化劑及重金屬，可安全用於食品外包裝。SGS 第三方檢測報告可於洽詢時免費提供。',
    },
    {
      q: '與傳統包材相比，價格差異大嗎？',
      a: '石頭紙單價略高於一般紙箱，但考量其耐用性（可重複使用）、損耗率低（防水防破損）、以及減少退貨/損毀等隱性成本，整體 TCO（總持有成本）通常與傳統包材相當甚至更低。品牌端還可獲得 ESG 加分的行銷效益。',
    },
    {
      q: '貨期通常需要多長時間？',
      a: '現有庫存規格出貨時間為 3–5 個工作天（台灣本島）。客製規格視數量與複雜度，通常需要 4–8 週。大量採購建議提前 6–8 週下單以確保交期。跨境出貨可配合 DDP 或 EXW 條款安排。',
    },
  ],
  en: [
    {
      q: 'Can stone paper completely replace traditional cardboard?',
      a: 'Yes. Stone paper boxes outperform traditional wood-pulp cardboard in waterproofing, frost resistance, and compression strength — especially suited for cold-chain logistics, humid environments, and high-stress shipping. Compatible with ambient e-commerce, food, and electronics, with custom sizes and brand printing available.',
    },
    {
      q: 'How is stone paper recycled or biodegraded?',
      a: 'Stone paper is primarily calcium carbonate (mineral powder) and a small amount of HDPE, making it compatible with existing plastic recycling streams. Products like degradable security bags decompose fully within 180 days in natural environments with no microplastic residue, harmless to soil and water.',
    },
    {
      q: 'What is the minimum order quantity (MOQ)?',
      a: 'Standard products start at 1,000 units; custom specifications (sizes, printing) start at 3,000 units. Free samples (up to 5 pcs) can be requested through the website for initial testing. We offer flexible split-shipment arrangements to accommodate different procurement cycles.',
    },
    {
      q: 'Do you support custom printing and ODM services?',
      a: 'Yes — full-color CMYK printing, hot stamping, spot UV, and more. ODM services cover material formulation, structural design, and printing in one integrated flow. Lead time is approximately 4–8 weeks depending on complexity. Contact our sales team with your specifications.',
    },
    {
      q: 'What is the temperature range for stone paper?',
      a: 'Standard stone paper boxes operate from -20°C to 80°C, fully covering standard cold-chain (refrigeration/freezing) needs. PGT eco-tableware is heat-resistant up to 120°C and microwave-safe. Custom formulations for special temperature requirements are available — consult our technical team.',
    },
    {
      q: 'Does stone paper have food safety certification?',
      a: "Yes. CongYou's stone paper line is FDA food-contact material certified, free of fluorescent brighteners, plasticizers, and heavy metals, safe for food outer packaging. SGS third-party test reports are available upon request at no charge.",
    },
    {
      q: 'How does the price compare to traditional packaging?',
      a: 'Stone paper carries a slightly higher unit price than standard cardboard. However, factoring in durability (reusable), lower damage rates (waterproof, tear-resistant), and reduced return/loss costs, the total cost of ownership (TCO) is typically comparable or lower. Brands also gain measurable ESG marketing value.',
    },
    {
      q: 'What are the typical lead times?',
      a: 'In-stock standard items ship in 3–5 business days (Taiwan domestic). Custom orders typically require 4–8 weeks depending on quantity and complexity. For large volumes, we recommend ordering 6–8 weeks in advance. Cross-border shipments can be arranged under DDP or EXW terms.',
    },
  ],
}

const COPY = {
  zh: { eyebrow: 'FAQ', title: '常見問題', subtitle: '關於石頭紙、訂購流程與技術規格，您最常問的問題都在這裡。' },
  en: { eyebrow: 'FAQ', title: 'Frequently Asked Questions', subtitle: 'Everything you need to know about stone paper, ordering, and technical specifications.' },
}

function AccordionItem({ q, a, isOpen, onClick, index }) {
  return (
    <div className={`border-b border-gray-100 last:border-0`}>
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
  const faqs = FAQS[lang]
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <FadeIn className="text-center mb-16">
          <p className="text-forest text-[10px] tracking-[0.28em] uppercase mb-3 font-light">{c.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">{c.title}</h2>
          <p className="text-graphite font-light max-w-lg mx-auto text-sm leading-relaxed">{c.subtitle}</p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-8 py-2">
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
          </div>
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
