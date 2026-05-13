import { Leaf, Mail, Phone, MapPin } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const COPY = {
  zh: {
    tagline: '以天然礦石為原料，打造防水、低碳、堅固的石頭紙系列。致力於推動無塑永續包裝，助力企業達成碳中和目標。',
    cols: [
      { title: '產品系列', items: ['石頭紙箱', '可分解破壞袋', '環保緩衝材', 'PGT 環保餐具', 'ODM 客製服務'] },
      { title: '關於琮祐', items: ['公司簡介', 'ESG 永續理念', '新聞中心', '認證標章'] },
      { title: '服務支援', items: ['索取樣品', '技術規格下載', '常見問題', '聯絡業務'] },
    ],
    address: '台灣 · 台北市內湖區',
    copyright: '© 2024 琮祐企業股份有限公司 · CongYou Enterprise Co., Ltd.',
    legal: ['隱私政策', '服務條款', 'Cookie 政策'],
  },
  en: {
    tagline: 'Transforming natural minerals into waterproof, low-carbon, durable stone paper products. Championing plastic-free sustainable packaging worldwide.',
    cols: [
      { title: 'Products', items: ['Stone Paper Box', 'Degradable Security Bag', 'Eco Buffer Material', 'PGT Eco Tableware', 'ODM Custom Service'] },
      { title: 'Company', items: ['About Us', 'ESG Vision', 'Newsroom', 'Certifications'] },
      { title: 'Support', items: ['Request Sample', 'Spec Downloads', 'FAQ', 'Contact Sales'] },
    ],
    address: 'Taipei, Taiwan',
    copyright: '© 2024 CongYou Enterprise Co., Ltd. All rights reserved.',
    legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
  },
}

export default function Footer() {
  const { lang } = useLanguage()
  const c = COPY[lang]

  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-forest rounded-xl flex items-center justify-center">
                <Leaf size={16} strokeWidth={1.5} className="text-white" />
              </div>
              <div>
                <div className="font-medium text-white text-base leading-none">琮祐企業</div>
                <div className="text-white/35 text-[10px] tracking-[0.18em] uppercase mt-0.5">CongYou ESG</div>
              </div>
            </div>
            <p className="text-white/45 text-xs font-light leading-relaxed max-w-xs mb-6">{c.tagline}</p>
            <div className="space-y-2.5">
              {[
                { Icon: MapPin, text: c.address },
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

          {/* Link cols */}
          {c.cols.map((col) => (
            <div key={col.title}>
              <p className="text-white/55 text-[10px] font-light tracking-[0.22em] uppercase mb-4">{col.title}</p>
              <ul className="space-y-2.5">
                {col.items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white/35 hover:text-white/65 text-xs font-light transition-colors duration-200">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-[11px] font-light">{c.copyright}</p>
          <div className="flex items-center gap-6">
            {c.legal.map((item) => (
              <a key={item} href="#" className="text-white/25 hover:text-white/50 text-[11px] font-light transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
