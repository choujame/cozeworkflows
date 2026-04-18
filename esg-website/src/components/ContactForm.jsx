import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Mail, Phone, CheckCircle, ArrowRight } from 'lucide-react'
import FadeIn from './FadeIn'

const subjects = [
  '石頭紙箱（冷鏈 / 常溫）',
  '可分解破壞袋（電商用）',
  '環保緩衝材（取代保麗龍）',
  'PGT 環保餐具',
  'ODM / OEM 客製服務',
  '代理合作洽談',
  '企業 ESG 解決方案',
  '其他',
]

const sampleSizes = ['試用樣品（5 件以下）', '小批量（50 件）', '中批量（500 件）', '大批量（1000 件以上）', '不確定，需要建議']

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-gray-800 font-light placeholder:text-gray-300 focus:outline-none focus:border-forest/40 focus:ring-2 focus:ring-forest/10 transition-all duration-200'

function Field({ label, required, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[11px] text-graphite font-light tracking-wide">
        {label}
        {required && <span className="text-forest ml-0.5">*</span>}
      </label>
      {children}
    </div>
  )
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '',
    subject: '', sampleSize: '', message: '',
  })

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  return (
    <section id="contact" className="py-28 px-6 bg-minimal-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
          {/* Info column */}
          <FadeIn direction="right">
            <div className="lg:sticky lg:top-28">
              <p className="text-forest text-[10px] tracking-[0.28em] uppercase mb-3 font-light">Sample Request</p>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 leading-snug">
                索取樣品<br />
                <span className="text-graphite/60 text-2xl">預約專業諮詢</span>
              </h2>
              <p className="text-sm text-graphite font-light leading-relaxed mb-10 max-w-sm">
                無論您是品牌端、代理商或通路商，歡迎申請免費樣品，
                或與我們的 ESG 顧問團隊共同規劃最適合您的永續包裝解決方案。
              </p>

              <div className="space-y-5 mb-10">
                {[
                  { Icon: MapPin, label: '公司地址', value: '台灣 · 台北市內湖區' },
                  { Icon: Mail, label: '電子郵件', value: 'info@congyou-esg.com' },
                  { Icon: Phone, label: '聯絡電話', value: '+886 2 XXXX-XXXX' },
                ].map(({ Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-forest/[0.08] flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={14} strokeWidth={1.5} className="text-forest" />
                    </div>
                    <div>
                      <p className="text-[10px] text-graphite/60 tracking-wide font-light uppercase">{label}</p>
                      <p className="text-sm text-gray-700 font-light mt-0.5">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* USPs */}
              <div className="space-y-3 pt-6 border-t border-gray-100">
                {[
                  '免費提供樣品，快遞到府',
                  '1–2 個工作天回覆報價',
                  '支援 ODM / OEM 訂製服務',
                  '提供完整 SGS / FDA 檢測報告',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={14} strokeWidth={1.5} className="text-forest shrink-0" />
                    <span className="text-xs text-graphite font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Form column */}
          <FadeIn delay={0.15}>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                      className="w-16 h-16 rounded-full bg-forest/10 flex items-center justify-center mb-5"
                    >
                      <CheckCircle size={28} strokeWidth={1.5} className="text-forest" />
                    </motion.div>
                    <h3 className="text-xl font-light text-gray-900 mb-2">樣品申請已送出！</h3>
                    <p className="text-sm text-graphite font-light leading-relaxed max-w-xs">
                      感謝您的申請！我們的業務顧問將於 1–2 個工作天內與您聯繫確認寄送細節。
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-8 px-6 py-2.5 border border-forest/20 text-forest text-sm font-light rounded-full hover:bg-forest/5 transition-colors"
                    >
                      再次申請
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field label="聯絡人姓名" required>
                        <input type="text" required value={form.name} onChange={update('name')} placeholder="您的姓名" className={inputClass} />
                      </Field>
                      <Field label="公司 / 品牌名稱">
                        <input type="text" value={form.company} onChange={update('company')} placeholder="公司或品牌名稱" className={inputClass} />
                      </Field>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field label="電子信箱" required>
                        <input type="email" required value={form.email} onChange={update('email')} placeholder="your@company.com" className={inputClass} />
                      </Field>
                      <Field label="聯絡電話">
                        <input type="tel" value={form.phone} onChange={update('phone')} placeholder="+886 xxx-xxx-xxx" className={inputClass} />
                      </Field>
                    </div>

                    <Field label="感興趣的產品" required>
                      <select required value={form.subject} onChange={update('subject')} className={`${inputClass} cursor-pointer`}>
                        <option value="">請選擇產品類別</option>
                        {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </Field>

                    <Field label="樣品需求數量">
                      <select value={form.sampleSize} onChange={update('sampleSize')} className={`${inputClass} cursor-pointer`}>
                        <option value="">請選擇樣品數量</option>
                        {sampleSizes.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </Field>

                    <Field label="補充說明 / 規格需求">
                      <textarea
                        rows={4}
                        value={form.message}
                        onChange={update('message')}
                        placeholder="請描述您的需求，例如：使用場景、尺寸需求、年用量、是否需要訂製印刷等..."
                        className={`${inputClass} resize-none`}
                      />
                    </Field>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="w-full py-4 bg-forest text-white font-light text-sm tracking-wide rounded-xl hover:bg-forest-dark transition-all duration-200 hover:shadow-lg hover:shadow-forest/20 flex items-center justify-center gap-2"
                    >
                      提交樣品申請
                      <ArrowRight size={14} strokeWidth={1.5} />
                    </motion.button>

                    <p className="text-center text-[10px] text-graphite/40 font-light">
                      送出即表示您同意我們的隱私政策。您的資訊僅用於業務聯繫。
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
