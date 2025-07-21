import React, { useState, useEffect, ReactNode } from 'react'
import { Language, getTranslation } from '../lib/translations'
import { LanguageContext, LanguageContextType } from '../lib/languageContext'

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>('en')

  // Load saved language preference on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('odonto-language') as Language
    if (savedLanguage && ['en', 'es', 'pt', 'fr', 'de', 'it', 'zh', 'ja'].includes(savedLanguage)) {
      setLanguageState(savedLanguage)
    } else {
      // Detect browser language
      const browserLang = navigator.language.split('-')[0] as Language
      if (['en', 'es', 'pt', 'fr', 'de', 'it', 'zh', 'ja'].includes(browserLang)) {
        setLanguageState(browserLang)
      }
    }
  }, [])

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage)
    localStorage.setItem('odonto-language', newLanguage)
  }

  // Translation function with parameter substitution
  const t = (key: string, params?: Record<string, string | number>): string => {
    const translation = getTranslation(key, language)
    
    if (!params) return translation
    
    // Replace parameters in the translation
    return Object.entries(params).reduce((text, [param, value]) => {
      return text.replace(new RegExp(`{{${param}}}`, 'g'), String(value))
    }, translation)
  }

  const value: LanguageContextType = {
    language,
    setLanguage,
    t
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}