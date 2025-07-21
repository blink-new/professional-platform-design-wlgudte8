import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  ClipboardList, 
  Package, 
  BarChart3, 
  Settings,
  Stethoscope
} from 'lucide-react'
import { Button } from './ui/button'
import { useLanguage } from '../hooks/useLanguage'
import { Page } from '../App'

interface SidebarProps {
  currentPage: Page
  onPageChange: (page: Page) => void
}

export function Sidebar({ currentPage, onPageChange }: SidebarProps) {
  const { t } = useLanguage()

  const menuItems = [
    {
      id: 'dashboard' as Page,
      label: t('nav.dashboard'),
      icon: LayoutDashboard,
    },
    {
      id: 'patients' as Page,
      label: t('nav.patients'),
      icon: Users,
    },
    {
      id: 'appointments' as Page,
      label: t('nav.appointments'),
      icon: Calendar,
    },
    {
      id: 'visits' as Page,
      label: t('nav.visits'),
      icon: ClipboardList,
    },
    {
      id: 'inventory' as Page,
      label: t('nav.inventory'),
      icon: Package,
    },
    {
      id: 'analytics' as Page,
      label: t('nav.analytics'),
      icon: BarChart3,
    },
    {
      id: 'settings' as Page,
      label: t('nav.settings'),
      icon: Settings,
    },
  ]

  return (
    <div className="w-64 bg-background border-r border-border flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-foreground">Odonto-Tech</h1>
            <p className="text-xs text-muted-foreground">Professional Platform</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = currentPage === item.id
          
          return (
            <Button
              key={item.id}
              variant={isActive ? 'default' : 'ghost'}
              className={`w-full justify-start space-x-3 h-11 ${
                isActive 
                  ? 'bg-primary text-primary-foreground shadow-sm' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
              onClick={() => onPageChange(item.id)}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Button>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-border">
        <div className="text-xs text-muted-foreground text-center">
          <p>© 2024 Odonto-Tech</p>
          <p>Professional Solutions</p>
        </div>
      </div>
    </div>
  )
}