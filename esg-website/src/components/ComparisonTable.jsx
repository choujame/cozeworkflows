import { Check, X } from 'lucide-react'
import FadeIn from './FadeIn'

function GoodCell({ text }) {
  return (
    <div className="flex items-center gap-2 bg-forest/[0.03]">
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 rounded-full bg-forest/10 flex items-center justify-center shrink-0">
          <Check size={11} strokeWidth={2.5} className="text-forest" />
        </div>
        <span className="text-xs text-gray-700 font-light">{text}</span>
      </div>
    </div>
  )
}

function BadCell({ text }) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-5 h-5 rounded-full bg-graphite/[0.07] flex items-center justify-center shrink-0">
        <X size={11} strokeWidth={2.5} className="text-graphite/60" />
      </div>
      <span className="text-xs text-graphite font-light">{text}</span>
    </div>
  )
}

const rows = [
  {
    category: '耐水性',
    traditional: <BadCell text="遇水即軟損" />,
    congyou: <GoodCell text="浸水 72h 結構不損" />,
  },
  {
    category: '抗凍性',
    traditional: <BadCell text="低溫脆裂" />,
    congyou: <GoodCell text="抗凍達 -20°C" />,
  },
  {
    category: '抗撕裂強度',
    traditional: <BadCell text="一般（易撕裂）" />,
    congyou: <GoodCell text="高強，耐衝擊" />,
  },
  {
    category: '碳排放量',
    traditional: <BadCell text="高（砍伐＋製漿）" />,
    congyou: <GoodCell text="低，減少 60%" />,
  },
  {
    category: '製程用水',
    traditional: <BadCell text="大量用水，排放廢液" />,
    congyou: <GoodCell text="無需用水，零廢液" />,
  },
  {
    category: '木材使用',
    traditional: <BadCell text="每噸耗費 1.2 棵樹" />,
    congyou: <GoodCell text="完全不使用木漿" />,
  },
  {
    category: '使用壽命',
    traditional: <BadCell text="潮濕後即損耗" />,
    congyou: <GoodCell text="耐用，可多次利用" />,
  },
  {
    category: '回收再利用',
    traditional: <BadCell text="潮濕後無法回收" />,
    congyou: <GoodCell text="100% 可回收" />,
  },
  {
    category: '毒素含量',
    traditional: <BadCell text="可能含螢光劑" />,
    congyou: <GoodCell text="無毒，零有害物質" />,
  },
  {
    category: '食品安全',
    traditional: <BadCell text="不建議直接接觸食品" />,
    congyou: <GoodCell text="FDA 食品接觸認證" />,
  },
  {
    category: '環保認證',
    traditional: <BadCell text="通常無" />,
    congyou: <GoodCell text="SGS · FDA · ISO 14001" />,
  },
]

export default function ComparisonTable() {
  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="text-center mb-14">
          <p className="text-forest text-[10px] tracking-[0.28em] uppercase mb-3 font-light">
            B2B Performance Comparison
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">規格對比</h2>
          <p className="text-graphite font-light max-w-md mx-auto text-sm leading-relaxed">
            傳統木漿紙箱 vs 琮祐石頭紙箱——讓數據說話。
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
            {/* Header */}
            <div className="grid grid-cols-[1.2fr_1fr_1.1fr]">
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
                <span className="text-[10px] text-graphite font-light tracking-[0.2em] uppercase">比較項目</span>
              </div>
              <div className="px-5 py-4 bg-gray-50 text-center border-b border-l border-gray-100">
                <p className="text-xs text-graphite font-light">傳統紙箱</p>
                <p className="text-[9px] text-gray-400 mt-0.5 tracking-wide">Traditional Box</p>
              </div>
              <div className="px-5 py-4 bg-forest/[0.05] text-center border-b border-l border-forest/[0.08]">
                <p className="text-xs text-forest font-medium">琮祐石頭紙箱</p>
                <p className="text-[9px] text-forest/50 mt-0.5 tracking-wide">CongYou Stone Paper</p>
              </div>
            </div>

            {/* Rows */}
            {rows.map((row, i) => (
              <div
                key={row.category}
                className={`grid grid-cols-[1.2fr_1fr_1.1fr] border-b border-gray-50 last:border-0 ${
                  i % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'
                }`}
              >
                <div className="px-6 py-3.5 flex items-center">
                  <span className="text-xs text-gray-700 font-light">{row.category}</span>
                </div>
                <div className="px-5 py-3.5 border-l border-gray-100 flex items-center">
                  {row.traditional}
                </div>
                <div className="px-5 py-3.5 border-l border-forest/[0.06] bg-forest/[0.02] flex items-center">
                  {row.congyou}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-center text-[10px] text-graphite/50 font-light mt-5 tracking-wide">
            * 數據來源：SGS 第三方獨立檢測報告 · 琮祐企業內部研究數據（2024）
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
