import { Settings, User, Globe, Bell, Shield, CreditCard, Zap } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Label } from './ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { useLanguage } from '../hooks/useLanguage'
import { LanguageSelector } from './LanguageSelector'
import { Language } from '../lib/translations'

export function SettingsPage() {
  const { t, language, setLanguage } = useLanguage()

  const languageOptions = [
    { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
    { code: 'es' as Language, name: 'Español', flag: '🇪🇸' },
    { code: 'pt' as Language, name: 'Português', flag: '🇧🇷' },
    { code: 'fr' as Language, name: 'Français', flag: '🇫🇷' },
    { code: 'de' as Language, name: 'Deutsch', flag: '🇩🇪' },
    { code: 'it' as Language, name: 'Italiano', flag: '🇮🇹' },
    { code: 'zh' as Language, name: '中文', flag: '🇨🇳' },
    { code: 'ja' as Language, name: '日本語', flag: '🇯🇵' },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">{t('settings.title')}</h1>
          <p className="text-muted-foreground mt-1">
            {t('settings.subtitle')}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Settings Navigation */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Settings Categories</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="ghost" className="w-full justify-start">
                <User className="w-4 h-4 mr-2" />
                {t('settings.profile')}
              </Button>
              <Button variant="default" className="w-full justify-start">
                <Globe className="w-4 h-4 mr-2" />
                {t('settings.language')}
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Bell className="w-4 h-4 mr-2" />
                {t('settings.notifications')}
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Shield className="w-4 h-4 mr-2" />
                {t('settings.security')}
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <CreditCard className="w-4 h-4 mr-2" />
                {t('settings.billing')}
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Zap className="w-4 h-4 mr-2" />
                {t('settings.integrations')}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Language Settings */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="h-5 w-5" />
                <span>{t('settings.language')}</span>
              </CardTitle>
              <CardDescription>
                Customize your language and regional preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Language Preference */}
              <div className="space-y-3">
                <Label className="text-sm font-medium">{t('settings.languagePreference')}</Label>
                <p className="text-sm text-muted-foreground">
                  {t('settings.selectLanguage')}
                </p>
                <Select value={language} onValueChange={(value: Language) => setLanguage(value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {languageOptions.map((lang) => (
                      <SelectItem key={lang.code} value={lang.code}>
                        <div className="flex items-center space-x-2">
                          <span>{lang.flag}</span>
                          <span>{lang.name}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Time Zone */}
              <div className="space-y-3">
                <Label className="text-sm font-medium">{t('settings.timeZone')}</Label>
                <Select defaultValue="utc">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="utc">UTC (Coordinated Universal Time)</SelectItem>
                    <SelectItem value="est">EST (Eastern Standard Time)</SelectItem>
                    <SelectItem value="pst">PST (Pacific Standard Time)</SelectItem>
                    <SelectItem value="cet">CET (Central European Time)</SelectItem>
                    <SelectItem value="jst">JST (Japan Standard Time)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Date Format */}
              <div className="space-y-3">
                <Label className="text-sm font-medium">{t('settings.dateFormat')}</Label>
                <Select defaultValue="mdy">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mdy">MM/DD/YYYY (US Format)</SelectItem>
                    <SelectItem value="dmy">DD/MM/YYYY (European Format)</SelectItem>
                    <SelectItem value="ymd">YYYY-MM-DD (ISO Format)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Save Button */}
              <div className="pt-4">
                <Button className="w-full">
                  {t('settings.saveChanges')}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Language Demo */}
          <Card>
            <CardHeader>
              <CardTitle>Language Demo</CardTitle>
              <CardDescription>
                See how the interface looks in different languages
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-medium mb-2">Current Language: {languageOptions.find(l => l.code === language)?.name}</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>{t('nav.dashboard')}:</strong> {t('dashboard.title')}</p>
                    <p><strong>{t('nav.patients')}:</strong> {t('patients.title')}</p>
                    <p><strong>{t('nav.appointments')}:</strong> {t('appointments.title')}</p>
                    <p><strong>{t('common.save')}:</strong> {t('common.save')}</p>
                    <p><strong>{t('common.cancel')}:</strong> {t('common.cancel')}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Quick language switcher:</span>
                  <LanguageSelector />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}