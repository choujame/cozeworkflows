import { motion } from 'framer-motion'
import { Thermometer, Shield, Award, Layers, Droplets, RotateCcw, ShieldCheck, Leaf, Package, Boxes, Recycle, Scale } from 'lucide-react'
import FadeIn from './FadeIn'

const STORIES = [
  {
    id: 'cold-chain',
    dark: true,
    persona: '生鮮電商採購 / 冷鏈物流主管',
    eyebrow: 'Cold Chain Logistics',
    kanji: '冷',
    headline: '那箱蝦，到了客人家已經是湯了',
    subtitle: '紙箱遇水就垮。你的商譽跟著一起垮。',
    scenario: (
      <>
        你出了一批急凍白蝦，冷藏車裡跑了四個小時。到了配送站，四個箱子塌了兩個。冷凝水把底部泡爛了。
        <br /><br />
        客人收到的是一箱融化的冰水和蝦。退款、一星、截圖上社群。
        <br /><br />
        <span className="text-white/90">一個箱子的成本，不到二十元。一個客人的終身價值，你自己算。</span>
      </>
    ),
    accentScenario: null,
    product: '琮祐石頭紙箱',
    patent: null,
    features: [
      { Icon: Droplets,    text: '浸水 72 小時，結構完整不損壞' },
      { Icon: Thermometer, text: '抗凍達 -20°C，冷鏈全程穩固' },
      { Icon: Layers,      text: '抗壓強度較同規格紙箱高 30%' },
      { Icon: ShieldCheck, text: 'SGS · FDA 食品接觸認證' },
    ],
    ctaPrimary:   { label: '索取石頭紙箱樣品', href: '#contact' },
    ctaSecondary: { label: '下載規格書',       href: '#contact' },
    productHref: '#products',
  },
  {
    id: 'ecommerce',
    dark: false,
    persona: '電商品牌主 / 行銷負責人',
    eyebrow: 'E-Commerce Packaging',
    kanji: '開',
    headline: '開箱影片破十萬，留言第一條罵包裝',
    subtitle: '品牌花了三年建立。客人花了三秒就失望。',
    scenario: (
      <>
        你做了開箱行銷，KOL 幫你發了，十萬次觀看。底下留言置頂的是：「袋子有臭味」、「收到是破的」、「這包裝一點都不環保」。
        <br /><br />
        你的品牌說永續，但你的包裝說的是塑膠。
        <br /><br />
        <span className="font-normal text-gray-900">一個包材決策，影響的是每一個開箱瞬間。</span>
      </>
    ),
    product: '二次循環破壞袋',
    patent: null,
    features: [
      { Icon: Shield,      text: '開封留不可逆撕裂痕，防偽防竄改' },
      { Icon: RotateCcw,   text: '支援二次封口，同一袋完成退貨' },
      { Icon: Recycle,     text: '180 天完全生物分解，零微塑料' },
      { Icon: ShieldCheck, text: 'FDA 無毒 · RoHS 合規認證' },
    ],
    ctaPrimary:   { label: '索取破壞袋樣品',  href: '#contact' },
    ctaSecondary: { label: '了解 ODM 服務',   href: '#contact' },
    productHref: '#products',
  },
  {
    id: 'retail',
    dark: true,
    persona: '連鎖超市採購 / 零售門市負責人',
    eyebrow: 'Retail & Supermarket',
    kanji: '規',
    headline: '限塑令上路，你的舊庫存變違禁品',
    subtitle: '法規不等人。但換袋子，也不必傷筋動骨。',
    scenario: (
      <>
        你還有兩噸 PE 袋在倉庫裡。環保署的期限是下一季。上次採購說「還能用」，現在變成合規問題。
        <br /><br />
        罰款不是最貴的，被媒體拍到才是。
        <br /><br />
        <span className="text-white/90">你需要的不是一個「環保」的說法，而是一個真的能用、法規認可、消費者買單的替代方案。</span>
      </>
    ),
    product: '琮祐背心袋',
    patent: null,
    features: [
      { Icon: ShieldCheck, text: '台灣環保署可分解認證，合規無疑' },
      { Icon: Layers,      text: '外觀手感與 PE 袋相同，無縫替換' },
      { Icon: Package,     text: '承重 5–8 kg，性能不妥協' },
      { Icon: Award,       text: '支援品牌印刷與尺寸訂製' },
    ],
    ctaPrimary:   { label: '索取背心袋樣品',  href: '#contact' },
    ctaSecondary: { label: '確認合規規格',     href: '#contact' },
    productHref: '#products',
  },
  {
    id: 'industrial',
    dark: false,
    persona: '製造業包裝主管 / 外銷採購',
    eyebrow: 'Industrial Packaging',
    kanji: '鏈',
    headline: '保麗龍被退回來了，客人說不收',
    subtitle: '你的包材政策，正在成為別人的採購門檻。',
    scenario: (
      <>
        你的歐洲買家來信了。他們的 ESG 政策更新，要求所有供應商在明年底前移除保麗龍包材。你有三條產線、四十個 SKU，每個都用保麗龍緩衝。
        <br /><br />
        這不是一個包裝問題。
        <br /><br />
        <span className="font-normal text-gray-900">這是一個訂單存活問題。</span>
      </>
    ),
    product: '琮祐緩衝材',
    patent: null,
    features: [
      { Icon: Boxes,       text: '緩衝係數 > 95%，超越 EPE 泡棉' },
      { Icon: Layers,      text: '可壓縮，節省 60% 倉儲空間' },
      { Icon: Recycle,     text: '100% 可回收，符合循環經濟要求' },
      { Icon: ShieldCheck, text: 'SGS · ISTA 認證，歐盟 ESG 合規' },
    ],
    ctaPrimary:   { label: '索取緩衝材樣品',  href: '#contact' },
    ctaSecondary: { label: '了解替換方案',     href: '#contact' },
    productHref: '#products',
  },
  {
    id: 'food',
    dark: true,
    persona: '餐廳老闆 / 外帶品牌採購',
    eyebrow: 'Food & Beverage',
    kanji: '袋',
    headline: '你的袋子，讓外送員被打了一星',
    subtitle: '那個負評不是外送員的問題。是你的包材。',
    scenario: (
      <>
        你接了外送平台訂單，一單熱炒，一碗湯。騎手騎了十八分鐘。到了客人門口，袋底已經濕了。湯汁全在袋底。
        <br /><br />
        一星評論，三十秒寫完。你的店評從 4.8 掉到 4.6。平台開始降低你的曝光排名。
        <br /><br />
        <span className="text-white/90">不是騎手騎太快。不是放歪了。是袋子的問題。</span>
      </>
    ),
    product: '琮祐耐熱石塑袋',
    patent: '專利 I804197',
    features: [
      { Icon: Thermometer, text: '裝 90°C 熱湯，40 分鐘不滲漏' },
      { Icon: Layers,      text: '止滑表面設計，保溫箱裡不翻覆' },
      { Icon: Award,       text: '食安認證，塑化劑檢測通過' },
      { Icon: Shield,      text: '撕不破，不讓你被客訴' },
    ],
    ctaPrimary:   { label: '索取耐熱袋樣品',    href: '#contact' },
    ctaSecondary: { label: '了解餐飲包材方案',   href: '#contact' },
    productHref: '#products',
  },
  {
    id: 'organic',
    dark: false,
    persona: '有機農產品牌 / 生鮮市集業者',
    eyebrow: 'Organic & Fresh Produce',
    kanji: '有',
    headline: '你說有機，但你的袋子還是石化的',
    subtitle: '消費者在意的，不只是食材本身。',
    scenario: (
      <>
        你的農場通過有機認證，不用農藥，配送用冷鏈。但客人拿到的，是一個印著有機標章的普通塑膠袋。
        <br /><br />
        他拍了照，發了文：「說環保，但包裝是塑膠。」
        <br /><br />
        <span className="font-normal text-gray-900">你的品牌故事，在那個袋子上破功了。</span>
      </>
    ),
    product: '環保生物袋',
    patent: null,
    features: [
      { Icon: Leaf,        text: 'PLA 植物基，工業堆肥 90 天分解' },
      { Icon: Recycle,     text: '零微塑料，還原為水、CO₂ 與有機質' },
      { Icon: Thermometer, text: '耐熱 120°C，可直接蒸煮使用' },
      { Icon: Scale,       text: 'EN 13432 · SGS 歐盟標準認證' },
    ],
    ctaPrimary:   { label: '索取環保生物袋樣品', href: '#contact' },
    ctaSecondary: { label: '了解農產包材方案',   href: '#contact' },
    productHref: '#products',
  },
]

function StorySection({ story, index }) {
  const isDark = story.dark
  const isEven = index % 2 === 0

  const bg = isDark ? 'bg-[#111614]' : 'bg-[#F7F4EF]'
  const textMain = isDark ? 'text-white' : 'text-gray-900'
  const textSub = isDark ? 'text-white/50' : 'text-gray-500'
  const textBody = isDark ? 'text-white/70' : 'text-gray-600'
  const accent = '#3d7a35'
  const cardBg = isDark ? 'bg-white/[0.04] border-white/[0.07]' : 'bg-white border-gray-200'
  const cardHover = isDark ? 'hover:border-[#3d7a35]/30 hover:bg-white/[0.07]' : 'hover:border-[#3d7a35]/40 hover:shadow-sm'
  const tagBg = isDark ? 'bg-white/[0.05] border-white/10' : 'bg-forest/[0.06] border-forest/10'
  const tagText = isDark ? 'text-white/50' : 'text-forest'
  const scenarioBg = isDark ? 'bg-white/[0.04] border-white/[0.07]' : 'bg-white border-gray-100'
  const scenarioAccent = isDark ? 'from-[#3d7a35] to-transparent' : 'from-forest to-transparent'
  const ctaSecBorder = isDark ? 'border-white/15 text-white/75 hover:border-[#3d7a35]/50 hover:text-white hover:bg-white/[0.05]' : 'border-gray-300 text-gray-600 hover:border-forest hover:text-forest'

  const storyCol = (
    <FadeIn direction={isEven ? 'right' : 'left'}>
      <p className="text-[10px] tracking-[0.28em] uppercase mb-4 font-light" style={{ color: accent }}>
        {story.eyebrow}
      </p>
      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border ${tagBg} mb-5`}>
        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accent }} />
        <span className={`text-[11px] font-light tracking-wide ${tagText}`}>{story.persona}</span>
      </div>
      <h2 className={`text-2xl md:text-3xl font-light mb-3 leading-snug ${textMain}`}>
        {story.headline}
      </h2>
      <p className={`text-base font-light mb-7 ${textSub}`}>{story.subtitle}</p>

      <div className={`rounded-2xl border ${scenarioBg} p-7 relative overflow-hidden`}>
        <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${scenarioAccent} rounded-l-2xl`} />
        <p className={`text-sm font-light leading-[2] tracking-wide ${textBody}`}>
          {story.scenario}
        </p>
      </div>

      <div className="mt-6 flex items-center gap-3">
        {story.patent && (
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border ${tagBg}`}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accent }} />
            <span className={`text-[10px] font-light tracking-widest uppercase ${tagText}`}>{story.patent}</span>
          </div>
        )}
        <a href={story.productHref} className="text-sm font-light" style={{ color: accent }}>
          {story.product} →
        </a>
      </div>
    </FadeIn>
  )

  const featuresCol = (
    <FadeIn delay={0.15} direction={isEven ? 'left' : 'right'}>
      <div className="space-y-3.5 mb-8">
        {story.features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: isEven ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 + 0.2 }}
            className={`flex items-center gap-5 rounded-xl border ${cardBg} ${cardHover} px-6 py-4 transition-all duration-300`}
          >
            <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: accent + '22' }}>
              <f.Icon size={18} strokeWidth={1.5} style={{ color: accent }} />
            </div>
            <span className={`text-sm font-light leading-relaxed ${textBody}`}>{f.text}</span>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <motion.a
          href={story.ctaPrimary.href}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex-1 text-center py-4 px-6 rounded-xl text-white text-sm font-light tracking-wide transition-all duration-200 hover:shadow-lg"
          style={{ backgroundColor: '#2D5A27', '--tw-shadow-color': '#2D5A2730' }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = accent}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = '#2D5A27'}
        >
          {story.ctaPrimary.label}
        </motion.a>
        <motion.a
          href={story.ctaSecondary.href}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`flex-1 text-center py-4 px-6 rounded-xl border text-sm font-light tracking-wide transition-all duration-200 ${ctaSecBorder}`}
        >
          {story.ctaSecondary.label}
        </motion.a>
      </div>
    </FadeIn>
  )

  return (
    <section id={`story-${story.id}`} className={`py-24 px-6 ${bg} relative overflow-hidden`}>
      {/* Background grid texture */}
      {isDark && (
        <svg className="absolute inset-0 w-full h-full pointer-events-none" opacity="0.055">
          <defs>
            <pattern id={`grid-${story.id}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0L0 0 0 40" fill="none" stroke="#3d7a35" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#grid-${story.id})`} />
        </svg>
      )}

      {/* Ghost kanji */}
      <div className={`absolute pointer-events-none select-none overflow-hidden hidden lg:flex items-center ${isEven ? 'justify-end' : 'justify-start'}`} style={{ inset: 0 }}>
        <span style={{
          fontSize: 'clamp(240px,30vw,480px)',
          fontWeight: 300,
          color: isDark ? '#3d7a35' : '#2D5A27',
          opacity: isDark ? 0.04 : 0.03,
          lineHeight: 1,
          userSelect: 'none',
          transform: isEven ? 'translateX(10%) translateY(5%)' : 'translateX(-10%) translateY(5%)',
        }}>
          {story.kanji}
        </span>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center ${!isEven ? 'lg:[&>*:first-child]:order-2' : ''}`}>
          {storyCol}
          {featuresCol}
        </div>
      </div>
    </section>
  )
}

export default function ProductStories() {
  return (
    <>
      {STORIES.map((story, i) => (
        <StorySection key={story.id} story={story} index={i} />
      ))}
    </>
  )
}
