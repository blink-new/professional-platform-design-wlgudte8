import { Calendar, Plus, Clock } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { useLanguage } from '../hooks/useLanguage'

export function AppointmentsPage() {
  const { t } = useLanguage()

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">{t('appointments.title')}</h1>
          <p className="text-muted-foreground mt-1">
            {t('appointments.subtitle')}
          </p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          {t('appointments.newAppointment')}
        </Button>
      </div>

      {/* Appointment Management */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="h-5 w-5" />
            <span>{t('appointments.title')}</span>
          </CardTitle>
          <CardDescription>
            {t('appointments.subtitle')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">{t('appointments.title')}</h3>
            <p className="text-muted-foreground mb-4">
              This section will display appointment scheduling and management tools.
            </p>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              {t('appointments.newAppointment')}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}