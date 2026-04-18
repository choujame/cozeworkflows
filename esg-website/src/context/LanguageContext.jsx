import { createContext, useContext, useState } from 'react'

const Ctx = createContext({ lang: 'zh', toggle: () => {} })

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('zh')
  return (
    <Ctx.Provider value={{ lang, toggle: () => setLang((l) => (l === 'zh' ? 'en' : 'zh')) }}>
      {children}
    </Ctx.Provider>
  )
}

export const useLanguage = () => useContext(Ctx)
