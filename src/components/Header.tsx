import { Bell, Search, Moon, Sun, LogOut, User, Settings } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from './ui/dropdown-menu'
import { Avatar, AvatarFallback } from './ui/avatar'
import { useTheme } from '../hooks/useTheme'
import { useLanguage } from '../hooks/useLanguage'
import { LanguageSelector } from './LanguageSelector'

interface HeaderProps {
  user: { name: string; email: string } | null
  onLogout: () => void
}

export function Header({ user, onLogout }: HeaderProps) {
  const { theme, setTheme } = useTheme()
  const { t } = useLanguage()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  return (
    <header className="h-16 bg-background border-b border-border flex items-center justify-between px-6 shadow-sm">
      {/* Search */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder={t('header.searchPlaceholder')}
            className="pl-10 bg-muted/50 border-border focus:bg-background transition-colors"
          />
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-4">
        {/* Language Selector */}
        <LanguageSelector />

        {/* Theme Toggle */}
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleTheme}
          className="w-9 h-9 p-0"
        >
          {theme === 'light' ? (
            <Moon className="h-4 w-4" />
          ) : (
            <Sun className="h-4 w-4" />
          )}
        </Button>

        {/* Notifications */}
        <Button variant="ghost" size="sm" className="w-9 h-9 p-0 relative">
          <Bell className="h-4 w-4" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs flex items-center justify-center">
            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
          </span>
        </Button>

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-9 px-2 space-x-2">
              <Avatar className="w-7 h-7">
                <AvatarFallback className="bg-primary/10 text-primary text-xs font-medium">
                  {user ? getInitials(user.name) : 'U'}
                </AvatarFallback>
              </Avatar>
              <div className="text-left hidden sm:block">
                <p className="text-sm font-medium text-foreground">
                  {user?.name || 'User'}
                </p>
                <p className="text-xs text-muted-foreground">
                  {user?.email || 'user@example.com'}
                </p>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>{t('header.myAccount')}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>{t('header.profile')}</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>{t('header.settings')}</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={onLogout} className="text-red-600">
              <LogOut className="mr-2 h-4 w-4" />
              <span>{t('header.logout')}</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}