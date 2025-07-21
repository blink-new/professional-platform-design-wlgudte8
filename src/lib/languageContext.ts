import { createContext } from 'react'
import { Language } from './translations'

export interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string, params?: Record<string, string | number>) => string
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined)