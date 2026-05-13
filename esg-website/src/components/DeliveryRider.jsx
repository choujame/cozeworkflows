import { Thermometer, Shield, Award, Layers } from 'lucide-react'
import { motion } from 'framer-motion'
import FadeIn from './FadeIn'

const FEATURES = [
  { Icon: Thermometer, text: '裝90°C熱湯，40分鐘不滲漏' },
  { Icon: Layers,      text: '止滑表面設計，保溫箱裡不翻覆' },
  { Icon: Award,       text: '食安認證，塑化劑檢測通過' },
  { Icon: Shield,      text: '撕不破，不讓你被客訴' },
]

export default function DeliveryRider() {
  return (
    <section id="delivery" className="py-28 px-6 bg-[#111614] relative overflow-hidden">
      {/* Background texture */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" opacity="0.06">
        <defs>
          <pattern id="rider-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0L0 0 0 40" fill="none" stroke="#3d7a35" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#rider-grid)" />
      </svg>

      {/* Ghost kanji 路 */}
      <div className="absolute pointer-events-none select-none overflow-hidden hidden lg:flex items-center justify-end" style={{ inset: 0 }}>
        <span style={{
          fontSize: 'clamp(280px,36vw,560px)',
          fontWeight: 300,
          color: '#3d7a35',
          opacity: 0.04,
          lineHeight: 1,
          userSelect: 'none',
          transform: 'translateX(8%) translateY(5%)',
        }}>
          路
        </span>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — Story */}
          <FadeIn direction="right">
            <p className="text-[#3d7a35] text-[10px] tracking-[0.28em] uppercase mb-4 font-light">
              Delivery Rider
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-white mb-3 leading-snug">
              給每天在路上的你
            </h2>
            <p className="text-lg font-light text-white/50 mb-8 leading-relaxed">
              那個袋子不是你選的。但吃到負評的是你。
            </p>

            {/* Scenario card */}
            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.04] p-7 mb-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#3d7a35] to-transparent rounded-l-2xl" />
              <p className="text-sm text-white/70 font-light leading-[2] tracking-wide">
                你接了一單熱炒，騎了 18 分鐘。到了客人門口，袋底已經濕了。湯汁全在袋底。
                <br />
                <span className="text-white/90">一星評論，30 秒寫完。</span>
                <br /><br />
                不是你騎太快。不是你放歪了。
                <br />
                <span className="text-[#3d7a35] font-normal">是袋子的問題。</span>
              </p>
            </div>

            {/* Patent badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.05] mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3d7a35]" />
              <span className="text-[11px] text-white/50 font-light tracking-widest uppercase">
                專利 I804197
              </span>
            </div>
            <h3 className="text-xl text-white font-light mt-3">
              琮祐耐熱石塑袋
            </h3>
          </FadeIn>

          {/* Right — Features + CTA */}
          <FadeIn delay={0.15}>
            <div className="space-y-4 mb-10">
              {FEATURES.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  className="flex items-center gap-5 rounded-xl border border-white/[0.07] bg-white/[0.04] px-6 py-5 hover:border-[#3d7a35]/30 hover:bg-white/[0.07] transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#3d7a35]/15 flex items-center justify-center shrink-0">
                    <f.Icon size={18} strokeWidth={1.5} className="text-[#3d7a35]" />
                  </div>
                  <span className="text-sm text-white/80 font-light leading-relaxed">{f.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 text-center py-4 px-6 rounded-xl bg-[#2D5A27] text-white text-sm font-light tracking-wide hover:bg-[#3d7a35] transition-all duration-200 hover:shadow-lg hover:shadow-[#2D5A27]/30"
              >
                我是店家，索取樣品
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 text-center py-4 px-6 rounded-xl border border-white/15 text-white/75 text-sm font-light tracking-wide hover:border-[#3d7a35]/50 hover:text-white hover:bg-white/[0.05] transition-all duration-200"
              >
                請店家換這款袋子
              </motion.a>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}
