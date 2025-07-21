import { BarChart3, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { useLanguage } from '../hooks/useLanguage'

export function AnalyticsPage() {
  const { t } = useLanguage()

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">{t('nav.analytics')}</h1>
          <p className="text-muted-foreground mt-1">
            View performance metrics and reports
          </p>
        </div>
        <Button>
          <TrendingUp className="w-4 h-4 mr-2" />
          Generate Report
        </Button>
      </div>

      {/* Analytics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className="h-5 w-5" />
            <span>{t('nav.analytics')}</span>
          </CardTitle>
          <CardDescription>
            Performance metrics and business intelligence
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Analytics Dashboard</h3>
            <p className="text-muted-foreground mb-4">
              This section will display charts, metrics, and business intelligence tools.
            </p>
            <Button>
              <TrendingUp className="w-4 h-4 mr-2" />
              Generate Report
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}