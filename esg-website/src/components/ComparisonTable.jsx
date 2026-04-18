import FadeIn from './FadeIn'

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
      <circle cx="10" cy="10" r="9" fill="#2D5A27" fillOpacity="0.12" />
      <path d="M6 10l3 3 5-5" stroke="#2D5A27" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
      <circle cx="10" cy="10" r="9" fill="#6C757D" fillOpacity="0.08" />
      <path d="M7 7l6 6M13 7l-6 6" stroke="#6C757D" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

const rows = [
  {
    category: '耐水性',
    traditional: { icon: <XIcon />, text: '遇水即軟損', bad: true },
    congyou: { icon: <CheckIcon />, text: '浸水 72h 不損', bad: false },
  },
  {
    category: '抗凍性',
    traditional: { icon: <XIcon />, text: '低溫易脆裂', bad: true },
    congyou: { icon: <CheckIcon />, text: '抗凍達 -20°C', bad: false },
  },
  {
    category: '碳排放',
    traditional: { icon: <XIcon />, text: '高碳排（砍伐＋製漿）', bad: true },
    congyou: { icon: <CheckIcon />, text: '低碳排（-60%）', bad: false },
  },
  {
    category: '製程用水',
    traditional: { icon: <XIcon />, text: '大量用水，排放廢液', bad: true },
    congyou: { icon: <CheckIcon />, text: '無需用水，零廢液', bad: false },
  },
  {
    category: '使用壽命',
    traditional: { icon: <XIcon />, text: '一次性，易損耗', bad: true },
    congyou: { icon: <CheckIcon />, text: '耐用，可多次使用', bad: false },
  },
  {
    category: '回收再利用',
    traditional: { icon: <XIcon />, text: '潮濕後無法回收', bad: true },
    congyou: { icon: <CheckIcon />, text: '100% 可回收', bad: false },
  },
  {
    category: '環保認證',
    traditional: { icon: <XIcon />, text: '通常無', bad: true },
    congyou: { icon: <CheckIcon />, text: 'SGS · FDA · ISO', bad: false },
  },
  {
    category: '食品安全',
    traditional: { icon: <XIcon />, text: '受限（含螢光劑）', bad: true },
    congyou: { icon: <CheckIcon />, text: 'FDA 認證，無毒安全', bad: false },
  },
]

export default function ComparisonTable() {
  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="text-center mb-14">
          <p className="text-forest text-xs tracking-[0.25em] uppercase mb-3 font-light">Comparison</p>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">傳統 vs 琮祐</h2>
          <p className="text-graphite font-light max-w-md mx-auto text-sm leading-relaxed">
            全面對比傳統紙箱與琮祐石頭紙箱，讓數據說話。
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
            {/* Header */}
            <div className="grid grid-cols-[1fr_1fr_1fr] bg-gray-50 border-b border-gray-100">
              <div className="px-6 py-4 text-xs text-graphite font-light tracking-widest uppercase">比較項目</div>
              <div className="px-6 py-4 text-center border-l border-gray-100">
                <p className="text-xs text-graphite font-light tracking-wide">傳統紙箱</p>
                <p className="text-[10px] text-gray-400 mt-0.5">Traditional Box</p>
              </div>
              <div className="px-6 py-4 text-center bg-forest/[0.04] border-l border-forest/10">
                <p className="text-xs text-forest font-medium tracking-wide">琮祐石頭紙箱</p>
                <p className="text-[10px] text-forest/60 mt-0.5">CongYou Stone Paper</p>
              </div>
            </div>

            {/* Rows */}
            {rows.map((row, i) => (
              <div
                key={row.category}
                className={`grid grid-cols-[1fr_1fr_1fr] border-b border-gray-50 last:border-0 ${
                  i % 2 === 0 ? 'bg-white' : 'bg-gray-50/40'
                }`}
              >
                <div className="px-6 py-4 flex items-center">
                  <span className="text-sm text-gray-700 font-light">{row.category}</span>
                </div>
                <div className="px-6 py-4 flex items-center gap-2.5 border-l border-gray-100">
                  {row.traditional.icon}
                  <span className="text-xs text-graphite font-light">{row.traditional.text}</span>
                </div>
                <div className="px-6 py-4 flex items-center gap-2.5 bg-forest/[0.025] border-l border-forest/10">
                  {row.congyou.icon}
                  <span className="text-xs text-gray-700 font-light">{row.congyou.text}</span>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Bottom note */}
        <FadeIn delay={0.2}>
          <p className="text-center text-xs text-graphite/60 font-light mt-6 tracking-wide">
            * 數據來源：SGS 第三方檢測報告 · 內部研究數據
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
