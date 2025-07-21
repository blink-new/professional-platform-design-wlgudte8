import { useState, useEffect } from 'react'
import { LoginPage } from './components/LoginPage'
import { Dashboard } from './components/Dashboard'
import { PatientsPage } from './components/PatientsPage'
import { AppointmentsPage } from './components/AppointmentsPage'
import { InventoryPage } from './components/InventoryPage'
import { VisitManagementPage } from './components/VisitManagementPage'
import { AnalyticsPage } from './components/AnalyticsPage'
import { SettingsPage } from './components/SettingsPage'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { ThemeProvider } from './components/ThemeProvider'
import { LanguageProvider } from './contexts/LanguageContext'

export type Page = 'dashboard' | 'patients' | 'appointments' | 'visits' | 'inventory' | 'analytics' | 'settings'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentPage, setCurrentPage] = useState<Page>('dashboard')
  const [user, setUser] = useState<{ name: string; email: string } | null>(null)

  // Check for existing session on app load
  useEffect(() => {
    const savedAuth = localStorage.getItem('odonto-auth')
    const savedUser = localStorage.getItem('odonto-user')
    
    if (savedAuth === 'true' && savedUser) {
      setIsAuthenticated(true)
      setUser(JSON.parse(savedUser))
    }
  }, [])

  const handleLogin = (credentials: { email: string; password: string }) => {
    // Mock authentication - accepts any string
    const mockUser = {
      name: credentials.email.split('@')[0] || 'Dr. User',
      email: credentials.email
    }
    
    setUser(mockUser)
    setIsAuthenticated(true)
    
    // Save to localStorage
    localStorage.setItem('odonto-auth', 'true')
    localStorage.setItem('odonto-user', JSON.stringify(mockUser))
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setUser(null)
    setCurrentPage('dashboard')
    
    // Clear localStorage
    localStorage.removeItem('odonto-auth')
    localStorage.removeItem('odonto-user')
  }

  if (!isAuthenticated) {
    return (
      <LanguageProvider>
        <ThemeProvider>
          <LoginPage onLogin={handleLogin} />
        </ThemeProvider>
      </LanguageProvider>
    )
  }

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />
      case 'patients':
        return <PatientsPage />
      case 'appointments':
        return <AppointmentsPage />
      case 'visits':
        return <VisitManagementPage />
      case 'inventory':
        return <InventoryPage />
      case 'analytics':
        return <AnalyticsPage />
      case 'settings':
        return <SettingsPage />
      default:
        return <Dashboard />
    }
  }

  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="flex h-screen bg-background">
          <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
          <div className="flex-1 flex flex-col overflow-hidden">
            <Header user={user} onLogout={handleLogout} />
            <main className="flex-1 overflow-y-auto p-6">
              <div className="animate-fade-in">
                {renderCurrentPage()}
              </div>
            </main>
          </div>
        </div>
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default App