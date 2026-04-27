import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Mail, Phone, CheckCircle, ArrowRight, Loader2 } from 'lucide-react'
import FadeIn from './FadeIn'
import { useLanguage } from '../context/LanguageContext'

const COPY = {
  zh: {
    eyebrow: 'Sample Request',
    title: '索取樣品',
    titleSub: '預約專業諮詢',
    subtitle: '無論您是品牌端、代理商或通路商，歡迎申請免費樣品，或與我們的 ESG 顧問共同規劃最適合您的永續包裝解決方案。',
    usps: ['免費提供樣品，快遞到府', '1–2 個工作天回覆報價', '支援 ODM / OEM 訂製服務', '提供完整 SGS / FDA 檢測報告'],
    infoLabels: ['公司地址', '電子郵件', '聯絡電話'],
    infoValues: ['台灣 · 台北市內湖區', 'info@congyou-esg.com', '+886 2 XXXX-XXXX'],
    fields: { name: '聯絡人姓名', company: '公司 / 品牌名稱', email: '電子信箱', phone: '聯絡電話', items: '申請品項', addItem: '＋ 新增品項', removeItem: '移除', quantityLabel: '數量（件）', message: '補充說明 / 規格需求', submit: '提交樣品申請' },
    ph: { name: '您的姓名', company: '公司或品牌名稱', email: 'your@company.com', phone: '+886 xxx-xxx-xxx', product: '請選擇產品類別', quantity: '例：5', message: '請描述需求，例如：使用場景、尺寸、年用量、是否需要訂製印刷等...' },
    subjects: ['石頭紙箱（冷鏈 / 常溫）', '可分解破壞袋（電商用）', '環保緩衝材（取代保麗龍）', 'PGT 環保餐具', 'ODM / OEM 客製服務', '代理合作洽談', '企業 ESG 解決方案', '其他'],
    success: { title: '樣品申請已送出！', body: '感謝您！我們的業務顧問將於 1–2 個工作天內聯繫確認寄送細節。', again: '再次申請' },
    privacy: '送出即表示您同意我們的隱私政策。您的資訊僅用於業務聯繫。',
  },
  en: {
    eyebrow: 'Sample Request',
    title: 'Request a Sample',
    titleSub: 'Book a Consultation',
    subtitle: 'Whether you\'re a brand owner, distributor, or retailer — request your free sample or consult with our ESG team to design your sustainable packaging strategy.',
    usps: ['Free sample, shipped to your door', 'Quote within 1–2 business days', 'ODM / OEM customization available', 'Full SGS / FDA test reports provided'],
    infoLabels: ['Address', 'Email', 'Phone'],
    infoValues: ['Taipei, Taiwan', 'info@congyou-esg.com', '+886 2 XXXX-XXXX'],
    fields: { name: 'Contact Name', company: 'Company / Brand', email: 'Email Address', phone: 'Phone Number', items: 'Sample Items', addItem: '+ Add Item', removeItem: 'Remove', quantityLabel: 'Qty (pcs)', message: 'Additional Notes', submit: 'Submit Sample Request' },
    ph: { name: 'Your name', company: 'Company or brand name', email: 'your@company.com', phone: '+1 xxx-xxx-xxxx', product: 'Select a product', quantity: 'e.g. 5', message: 'Describe your requirements — use case, dimensions, annual volume, custom print needs, etc.' },
    subjects: ['Stone Paper Box (cold chain / standard)', 'Degradable Security Bag (e-commerce)', 'Eco Buffer Material (EPS replacement)', 'PGT Eco Tableware', 'ODM / OEM Custom Service', 'Distribution Partnership', 'Enterprise ESG Solution', 'Other'],
    success: { title: 'Request Submitted!', body: 'Thank you! Our sales consultant will contact you within 1–2 business days to confirm shipping details.', again: 'Submit Another' },
    privacy: 'By submitting, you agree to our privacy policy. Your info is used for business contact only.',
  },
}

const SHEET_URL = 'https://script.google.com/macros/s/AKfycbw4sbJEWaGXYdKHlh0Znb-j95FO4uR2RRuy5QpQ4fG2WrQ9XnX8cxNIG0V92ixRllW67w/exec'

const infoIcons = [MapPin, Mail, Phone]
const inputClass = 'w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-gray-800 font-light placeholder:text-gray-300 focus:outline-none focus:border-forest/40 focus:ring-2 focus:ring-forest/10 transition-all duration-200'

function Field({ label, required, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[11px] text-graphite font-light tracking-wide">
        {label}{required && <span className="text-forest ml-0.5">*</span>}
      </label>
      {children}
    </div>
  )
}

export default function ContactForm() {
  const { lang } = useLanguage()
  const c = COPY[lang]
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', items: [{ product: '', qty: '' }], message: '' })

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))
  const addItem = () => setForm(f => ({ ...f, items: [...f.items, { product: '', qty: '' }] }))
  const removeItem = (i) => setForm(f => ({ ...f, items: f.items.filter((_, idx) => idx !== i) }))
  const updateItem = (i, key) => (e) => setForm(f => ({ ...f, items: f.items.map((item, idx) => idx === i ? { ...item, [key]: e.target.value } : item) }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    const filledItems = form.items.filter(it => it.product)
    try {
      await fetch(SHEET_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify({
          timestamp: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }),
          name: form.name,
          company: form.company,
          email: form.email,
          phone: form.phone,
          items: filledItems.map(it => ({ product: it.product, qty: it.qty || '' })),
          message: form.message,
        }),
      })
    } catch (_) {}
    setSubmitting(false)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-28 px-6 bg-minimal-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
          {/* Info */}
          <FadeIn direction="right">
            <div className="lg:sticky lg:top-28">
              <p className="text-forest text-[10px] tracking-[0.28em] uppercase mb-3 font-light">{c.eyebrow}</p>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-2 leading-snug">{c.title}</h2>
              <p className="text-xl font-light text-graphite/60 mb-6">{c.titleSub}</p>
              <p className="text-sm text-graphite font-light leading-relaxed mb-10 max-w-sm">{c.subtitle}</p>
              <div className="space-y-5 mb-10">
                {c.infoLabels.map((label, i) => {
                  const Icon = infoIcons[i]
                  return (
                    <div key={label} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-forest/[0.08] flex items-center justify-center shrink-0 mt-0.5">
                        <Icon size={14} strokeWidth={1.5} className="text-forest" />
                      </div>
                      <div>
                        <p className="text-[10px] text-graphite/60 tracking-wide font-light uppercase">{label}</p>
                        <p className="text-sm text-gray-700 font-light mt-0.5">{c.infoValues[i]}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="space-y-3 pt-6 border-t border-gray-100">
                {c.usps.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={14} strokeWidth={1.5} className="text-forest shrink-0" />
                    <span className="text-xs text-graphite font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={0.15}>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div key="ok" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-16 text-center">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200, delay: 0.1 }} className="w-16 h-16 rounded-full bg-forest/10 flex items-center justify-center mb-5">
                      <CheckCircle size={28} strokeWidth={1.5} className="text-forest" />
                    </motion.div>
                    <h3 className="text-xl font-light text-gray-900 mb-2">{c.success.title}</h3>
                    <p className="text-sm text-graphite font-light leading-relaxed max-w-xs">{c.success.body}</p>
                    <button onClick={() => setSubmitted(false)} className="mt-8 px-6 py-2.5 border border-forest/20 text-forest text-sm font-light rounded-full hover:bg-forest/5 transition-colors">{c.success.again}</button>
                  </motion.div>
                ) : (
                  <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field label={c.fields.name} required><input type="text" required value={form.name} onChange={update('name')} placeholder={c.ph.name} className={inputClass} /></Field>
                      <Field label={c.fields.company}><input type="text" value={form.company} onChange={update('company')} placeholder={c.ph.company} className={inputClass} /></Field>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field label={c.fields.email} required><input type="email" required value={form.email} onChange={update('email')} placeholder={c.ph.email} className={inputClass} /></Field>
                      <Field label={c.fields.phone}><input type="tel" value={form.phone} onChange={update('phone')} placeholder={c.ph.phone} className={inputClass} /></Field>
                    </div>
                    <Field label={c.fields.items} required>
                      <div className="space-y-2">
                        <div className="grid grid-cols-[1fr_80px_auto] gap-2 items-center">
                          <span className="text-[10px] text-graphite/50 font-light px-1">{c.ph.product.replace('請選擇', '')}</span>
                          <span className="text-[10px] text-graphite/50 font-light px-1">{c.fields.quantityLabel}</span>
                          <span />
                        </div>
                        {form.items.map((item, i) => (
                          <div key={i} className="grid grid-cols-[1fr_80px_auto] gap-2 items-center">
                            <select
                              required
                              value={item.product}
                              onChange={updateItem(i, 'product')}
                              className={`${inputClass} cursor-pointer`}
                            >
                              <option value="">{c.ph.product}</option>
                              {c.subjects.map(s => <option key={s} value={s}>{s}</option>)}
                            </select>
                            <input
                              type="number"
                              min="1"
                              value={item.qty}
                              onChange={updateItem(i, 'qty')}
                              placeholder={c.ph.quantity}
                              className={inputClass}
                            />
                            {form.items.length > 1 ? (
                              <button
                                type="button"
                                onClick={() => removeItem(i)}
                                className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-300 hover:text-red-400 hover:bg-red-50 transition-colors text-lg leading-none"
                                aria-label={c.fields.removeItem}
                              >
                                ×
                              </button>
                            ) : (
                              <span className="w-8" />
                            )}
                          </div>
                        ))}
                        <button
                          type="button"
                          onClick={addItem}
                          className="text-xs text-forest font-light flex items-center gap-1 hover:opacity-70 transition-opacity mt-1 py-1"
                        >
                          {c.fields.addItem}
                        </button>
                      </div>
                    </Field>
                    <Field label={c.fields.message}>
                      <textarea rows={4} value={form.message} onChange={update('message')} placeholder={c.ph.message} className={`${inputClass} resize-none`} />
                    </Field>
                    <motion.button type="submit" disabled={submitting} whileHover={{ scale: submitting ? 1 : 1.01 }} whileTap={{ scale: submitting ? 1 : 0.99 }} className="w-full py-4 bg-forest text-white font-light text-sm tracking-wide rounded-xl hover:bg-forest-dark transition-all duration-200 hover:shadow-lg hover:shadow-forest/20 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">
                      {submitting ? (
                        <><Loader2 size={14} strokeWidth={1.5} className="animate-spin" />{lang === 'zh' ? '送出中…' : 'Sending…'}</>
                      ) : (
                        <>{c.fields.submit}<ArrowRight size={14} strokeWidth={1.5} /></>
                      )}
                    </motion.button>
                    <p className="text-center text-[10px] text-graphite/40 font-light">{c.privacy}</p>
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
