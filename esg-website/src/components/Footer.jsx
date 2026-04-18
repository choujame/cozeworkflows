export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-forest rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                  <path d="M17 8C8 10 5.9 16.17 3.82 19.22L5.71 21l1-1.29C7.72 18.1 9.05 16.33 12 15c3.5-1.5 5-4 5-4-1 2-3 4-5 4.5-2 .5-3.5 2-4.5 4L12 21l1.5-1.5c1-1 2.5-1.5 4-1.5C21.5 18 22 12 17 8z" />
                </svg>
              </div>
              <div>
                <div className="font-medium text-white text-sm">琮祐企業</div>
                <div className="text-white/40 text-[10px] tracking-wider">CongYou ESG</div>
              </div>
            </div>
            <p className="text-white/50 text-xs font-light leading-relaxed max-w-xs">
              以天然礦石為原料，打造防水、低碳、堅固的石頭紙系列產品。
              致力於推動無塑永續包裝的未來。
            </p>
          </div>

          <div>
            <p className="text-white/70 text-xs font-light tracking-widest uppercase mb-4">產品</p>
            <ul className="space-y-2.5">
              {['石頭紙箱', '可分解破壞袋', '環保緩衝材', 'ODM 客製服務'].map((item) => (
                <li key={item}>
                  <a href="#products" className="text-white/40 hover:text-white/70 text-xs font-light transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white/70 text-xs font-light tracking-widest uppercase mb-4">關於</p>
            <ul className="space-y-2.5">
              {['關於我們', '永續理念', '認證標章', '聯絡我們'].map((item) => (
                <li key={item}>
                  <a href="#contact" className="text-white/40 hover:text-white/70 text-xs font-light transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs font-light">
            © 2024 琮祐企業股份有限公司 · CongYou Enterprise Co., Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['隱私政策', '服務條款'].map((item) => (
              <a key={item} href="#" className="text-white/30 hover:text-white/50 text-xs font-light transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
