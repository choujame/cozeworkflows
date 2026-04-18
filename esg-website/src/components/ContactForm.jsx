import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from './FadeIn'

const subjects = [
  '石頭紙箱規格詢問',
  '可分解破壞袋洽詢',
  '環保緩衝材詢問',
  'ODM / OEM 客製服務',
  '代理合作洽談',
  '其他',
]

function Field({ label, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs text-graphite font-light tracking-wide">{label}</label>
      {children}
    </div>
  )
}

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-gray-800 font-light placeholder:text-gray-300 focus:outline-none focus:border-forest/40 focus:ring-2 focus:ring-forest/10 transition-all duration-200'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', subject: '', message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  return (
    <section id="contact" className="py-28 px-6 bg-minimal-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left info column */}
          <FadeIn direction="right">
            <div className="lg:sticky lg:top-28">
              <p className="text-forest text-xs tracking-[0.25em] uppercase mb-3 font-light">Contact Us</p>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 leading-snug">
                預約專業諮詢
              </h2>
              <p className="text-sm text-graphite font-light leading-relaxed mb-10 max-w-sm">
                無論您是品牌端、代理商或通路商，歡迎與我們的顧問團隊聯繫，
                共同探索最適合您的永續包裝解決方案。
              </p>

              <div className="space-y-5">
                {[
                  {
                    icon: (
                      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
                        <path d="M10 2a6 6 0 016 6c0 4-6 10-6 10S4 12 4 8a6 6 0 016-6z" stroke="#2D5A27" strokeWidth="1.2"/>
                        <circle cx="10" cy="8" r="2" stroke="#2D5A27" strokeWidth="1.2"/>
                      </svg>
                    ),
                    label: '公司地址',
                    value: '台灣 · 台北市',
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
                        <path d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" stroke="#2D5A27" strokeWidth="1.2"/>
                        <path d="M3 8h14" stroke="#2D5A27" strokeWidth="1.2"/>
                      </svg>
                    ),
                    label: '電子郵件',
                    value: 'info@congyou-esg.com',
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
                        <path d="M3 4a1 1 0 011-1h3l1.5 3.5L7 8a12 12 0 005 5l1.5-1.5L17 13v3a1 1 0 01-1 1C7 17 3 9 3 4z" stroke="#2D5A27" strokeWidth="1.2"/>
                      </svg>
                    ),
                    label: '聯絡電話',
                    value: '+886 2 XXXX-XXXX',
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-forest/[0.08] flex items-center justify-center shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] text-graphite/70 tracking-wide font-light uppercase">{item.label}</p>
                      <p className="text-sm text-gray-700 font-light mt-0.5">{item.value}</p>
                    </div>
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
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-forest/10 flex items-center justify-center mb-5">
                      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
                        <path d="M5 12l5 5L19 7" stroke="#2D5A27" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-light text-gray-900 mb-2">諮詢已送出</h3>
                    <p className="text-sm text-graphite font-light leading-relaxed max-w-xs">
                      感謝您的詢問！我們的顧問將於 1-2 個工作天內與您聯繫。
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-8 px-6 py-2.5 border border-forest/20 text-forest text-sm font-light rounded-full hover:bg-forest/5 transition-colors"
                    >
                      再次填寫
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field label="姓名 *">
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={update('name')}
                          placeholder="您的姓名"
                          className={inputClass}
                        />
                      </Field>
                      <Field label="公司名稱">
                        <input
                          type="text"
                          value={form.company}
                          onChange={update('company')}
                          placeholder="公司 / 品牌名稱"
                          className={inputClass}
                        />
                      </Field>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field label="電子信箱 *">
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={update('email')}
                          placeholder="your@email.com"
                          className={inputClass}
                        />
                      </Field>
                      <Field label="聯絡電話">
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={update('phone')}
                          placeholder="+886 xxx-xxx-xxx"
                          className={inputClass}
                        />
                      </Field>
                    </div>

                    <Field label="洽詢項目">
                      <select
                        value={form.subject}
                        onChange={update('subject')}
                        className={`${inputClass} appearance-none cursor-pointer`}
                      >
                        <option value="">請選擇洽詢項目</option>
                        {subjects.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </Field>

                    <Field label="洽詢內容">
                      <textarea
                        rows={5}
                        value={form.message}
                        onChange={update('message')}
                        placeholder="請說明您的需求，例如：年用量、目標規格、送樣需求等..."
                        className={`${inputClass} resize-none`}
                      />
                    </Field>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="w-full py-4 bg-forest text-white font-light text-sm tracking-wide rounded-xl hover:bg-forest-dark transition-all duration-200 hover:shadow-lg hover:shadow-forest/20"
                    >
                      送出諮詢申請
                    </motion.button>

                    <p className="text-center text-[10px] text-graphite/50 font-light">
                      送出即表示您同意我們的隱私政策。您的資訊僅作業務聯繫使用。
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
