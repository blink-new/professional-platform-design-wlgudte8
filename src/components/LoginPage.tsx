import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Stethoscope, Mail, Lock, Eye, EyeOff } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import { LanguageSelector } from './LanguageSelector'

interface LoginPageProps {
  onLogin: (credentials: { email: string; password: string }) => void
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { t } = useLanguage()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email.trim() || !password.trim()) {
      return
    }

    setIsLoading(true)
    
    // Simulate loading for better UX
    await new Promise(resolve => setTimeout(resolve, 800))
    
    onLogin({ email, password })
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 flex items-center justify-center p-4">
      {/* Language Selector - Top Right */}
      <div className="absolute top-4 right-4">
        <LanguageSelector />
      </div>

      <div className="w-full max-w-md">
        {/* Logo and Brand */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 rounded-2xl mb-4 shadow-lg">
            <Stethoscope className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{t('login.title')}</h1>
          <p className="text-gray-600">{t('login.subtitle')}</p>
        </div>

        {/* Login Card */}
        <Card className="shadow-2xl border-0 animate-slide-up">
          <CardHeader className="space-y-1 pb-6">
            <CardTitle className="text-2xl font-semibold text-center">{t('login.welcomeBack')}</CardTitle>
            <CardDescription className="text-center text-gray-600">
              {t('login.signInDescription')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  {t('login.emailLabel')}
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder={t('login.emailPlaceholder')}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 h-12"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">
                  {t('login.passwordLabel')}
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder={t('login.passwordPlaceholder')}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10 h-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 h-4 w-4 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="text-gray-600">{t('login.rememberMe')}</span>
                </label>
                <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">
                  {t('login.forgotPassword')}
                </a>
              </div>

              <Button
                type="submit"
                className="w-full h-12 text-base font-medium bg-primary-500 hover:bg-primary-600 transition-all duration-200"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>{t('login.signingIn')}</span>
                  </div>
                ) : (
                  t('login.signIn')
                )}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                {t('login.noAccount')}{' '}
                <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">
                  {t('login.contactAdmin')}
                </a>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Demo Notice */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
            <p className="text-sm text-blue-700">
              {t('login.demoNotice')}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}