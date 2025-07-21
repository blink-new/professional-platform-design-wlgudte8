import { Package, Plus } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { useLanguage } from '../hooks/useLanguage'

export function InventoryPage() {
  const { t } = useLanguage()

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">{t('nav.inventory')}</h1>
          <p className="text-muted-foreground mt-1">
            Manage equipment and supplies inventory
          </p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          {t('common.add')} Item
        </Button>
      </div>

      {/* Inventory Management */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Package className="h-5 w-5" />
            <span>{t('nav.inventory')}</span>
          </CardTitle>
          <CardDescription>
            Track and manage dental equipment and supplies
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Inventory Management</h3>
            <p className="text-muted-foreground mb-4">
              This section will display inventory tracking and management tools.
            </p>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              {t('common.add')} Item
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}