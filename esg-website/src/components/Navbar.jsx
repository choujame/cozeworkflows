import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Leaf, Globe } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const NAV = {
  zh: [
    { label: '核心技術', href: '#features' },
    { label: '產業應用', href: '#solutions' },
    { label: '產品系列', href: '#products' },
    { label: '認證標章', href: '#certifications' },
    { label: '聯絡我們', href: '#contact' },
  ],
  en: [
    { label: 'Technology', href: '#features' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Products', href: '#products' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ],
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { lang, toggle } = useLanguage()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection('#' + e.target.id)
        }),
      { threshold: 0.35 }
    )
    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  const items = NAV[lang]
  const cta = { zh: '索取樣品', en: 'Get Sample' }[lang]
  const langLabel = lang === 'zh' ? 'EN' : '中'

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-2xl shadow-sm border-b border-black/5'
          : 'bg-white/20 backdrop-blur-md'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 bg-forest rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-forest/30 transition-shadow">
            <Leaf size={17} strokeWidth={1.5} className="text-white" />
          </div>
          <div>
            <div className="font-semibold text-forest text-lg leading-none tracking-tight">琮祐企業</div>
            <div className="text-graphite text-[10px] tracking-[0.18em] uppercase mt-0.5">CongYou ESG</div>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative text-sm font-light tracking-wide transition-colors duration-200 pb-1 ${
                activeSection === item.href ? 'text-forest' : 'text-graphite hover:text-forest'
              }`}
            >
              {item.label}
              {activeSection === item.href && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-px bg-forest rounded-full"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </a>
          ))}

          {/* Language toggle */}
          <button
            onClick={toggle}
            className="flex items-center gap-1.5 text-xs font-light text-graphite hover:text-forest border border-graphite/20 hover:border-forest/30 px-3 py-1.5 rounded-full transition-all duration-200"
          >
            <Globe size={12} strokeWidth={1.5} />
            {langLabel}
          </button>

          <a
            href="#contact"
            className="px-5 py-2.5 bg-forest text-white text-sm font-light rounded-full hover:bg-forest-dark transition-all duration-200 hover:shadow-md hover:shadow-forest/20"
          >
            {cta}
          </a>
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggle}
            className="flex items-center gap-1 text-[11px] font-light text-graphite border border-graphite/20 px-2.5 py-1 rounded-full"
          >
            <Globe size={11} strokeWidth={1.5} />
            {langLabel}
          </button>
          <button className="p-2 -mr-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="選單">
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`h-px bg-forest transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`h-px bg-forest transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`h-px bg-forest transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28 }}
            className="md:hidden bg-white/95 backdrop-blur-2xl border-t border-black/5 overflow-hidden"
          >
            <div className="px-6 py-4">
              {items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-3.5 text-sm font-light border-b border-gray-50 last:border-0 transition-colors ${
                    activeSection === item.href ? 'text-forest' : 'text-graphite'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block mt-4 text-center py-3 bg-forest text-white text-sm font-light rounded-full"
              >
                {cta}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
