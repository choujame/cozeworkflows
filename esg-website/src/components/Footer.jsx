import { Leaf, Mail, Phone, MapPin } from 'lucide-react'

const links = {
  '產品系列': ['石頭紙箱', '可分解破壞袋', '環保緩衝材', 'PGT 環保餐具', 'ODM 客製服務'],
  '關於琮祐': ['公司簡介', 'ESG 永續理念', '新聞中心', '認證標章'],
  '服務支援': ['索取樣品', '技術規格下載', '常見問題', '聯絡業務'],
}

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-forest rounded-xl flex items-center justify-center">
                <Leaf size={16} strokeWidth={1.5} className="text-white" />
              </div>
              <div>
                <div className="font-medium text-white text-base leading-none">琮祐企業</div>
                <div className="text-white/35 text-[10px] tracking-[0.18em] uppercase mt-0.5">CongYou Enterprise</div>
              </div>
            </div>
            <p className="text-white/45 text-xs font-light leading-relaxed max-w-xs mb-6">
              以天然礦石為原料，打造防水、低碳、堅固的石頭紙系列產品。
              致力於推動無塑永續包裝的未來，助力企業達成碳中和目標。
            </p>
            <div className="space-y-2.5">
              {[
                { Icon: MapPin, text: '台灣 · 台北市內湖區' },
                { Icon: Mail, text: 'info@congyou-esg.com' },
                { Icon: Phone, text: '+886 2 XXXX-XXXX' },
              ].map(({ Icon, text }) => (
                <div key={text} className="flex items-center gap-2.5">
                  <Icon size={12} strokeWidth={1.5} className="text-white/30 shrink-0" />
                  <span className="text-white/40 text-xs font-light">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <p className="text-white/55 text-[10px] font-light tracking-[0.22em] uppercase mb-4">{title}</p>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/35 hover:text-white/65 text-xs font-light transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider & bottom bar */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-[11px] font-light">
            © 2024 琮祐企業股份有限公司 · CongYou Enterprise Co., Ltd.
          </p>
          <div className="flex items-center gap-6">
            {['隱私政策', '服務條款', 'Cookie 政策'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/25 hover:text-white/50 text-[11px] font-light transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
