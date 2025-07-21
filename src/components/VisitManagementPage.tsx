import { ClipboardList, Plus } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { useLanguage } from '../hooks/useLanguage'

export function VisitManagementPage() {
  const { t } = useLanguage()

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">{t('nav.visits')}</h1>
          <p className="text-muted-foreground mt-1">
            Manage technical support visits and schedules
          </p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Schedule Visit
        </Button>
      </div>

      {/* Visit Management */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <ClipboardList className="h-5 w-5" />
            <span>{t('nav.visits')}</span>
          </CardTitle>
          <CardDescription>
            Schedule and track technical support visits
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <ClipboardList className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Visit Management</h3>
            <p className="text-muted-foreground mb-4">
              This section will display visit scheduling and tracking tools.
            </p>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Schedule Visit
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}