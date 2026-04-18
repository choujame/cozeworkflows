import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: '關於我們', href: '#features' },
  { label: '產品系列', href: '#products' },
  { label: '認證標章', href: '#certifications' },
  { label: '聯絡我們', href: '#contact' },
]

function LeafIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
      <path d="M17 8C8 10 5.9 16.17 3.82 19.22L5.71 21l1-1.29C7.72 18.1 9.05 16.33 12 15c3.5-1.5 5-4 5-4-1 2-3 4-5 4.5-2 .5-3.5 2-4.5 4L12 21l1.5-1.5c1-1 2.5-1.5 4-1.5C21.5 18 22 12 17 8z" />
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 bg-forest rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-forest/30 transition-shadow">
            <LeafIcon />
          </div>
          <div>
            <div className="font-semibold text-forest text-lg leading-none tracking-tight">琮祐企業</div>
            <div className="text-graphite text-[10px] tracking-[0.18em] uppercase mt-0.5">CongYou ESG</div>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-graphite hover:text-forest text-sm font-light tracking-wide transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2.5 bg-forest text-white text-sm font-light rounded-full hover:bg-forest-dark transition-all duration-200 hover:shadow-md hover:shadow-forest/20"
          >
            預約諮詢
          </a>
        </div>

        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="選單"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`h-px bg-forest transition-all duration-300 origin-center ${
                menuOpen ? 'rotate-45 translate-y-[7px]' : ''
              }`}
            />
            <span
              className={`h-px bg-forest transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`}
            />
            <span
              className={`h-px bg-forest transition-all duration-300 origin-center ${
                menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
              }`}
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-2xl border-t border-black/5 overflow-hidden"
          >
            <div className="px-6 py-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3.5 text-graphite hover:text-forest text-sm font-light border-b border-gray-50 last:border-0 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block mt-4 text-center py-3 bg-forest text-white text-sm font-light rounded-full"
              >
                預約諮詢
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
