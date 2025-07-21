import { 
  Users, 
  Calendar, 
  DollarSign, 
  TrendingUp,
  Clock,
  UserCheck,
  AlertCircle,
  Activity,
  Wrench,
  Monitor,
  Zap,
  MapPin,
  Package,
  AlertTriangle
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { useLanguage } from '../hooks/useLanguage'

export function Dashboard() {
  const { t } = useLanguage()

  const stats = [
    {
      title: t('dashboard.partnerClinics'),
      value: '127',
      change: '+8',
      changeType: 'positive' as const,
      icon: Users,
      description: t('dashboard.partnerClinicsDesc')
    },
    {
      title: t('dashboard.todaysVisits'),
      value: '12',
      change: '+2',
      changeType: 'positive' as const,
      icon: Calendar,
      description: t('dashboard.todaysVisitsDesc')
    },
    {
      title: t('dashboard.monthlyRevenue'),
      value: '$68,450',
      change: '+15.3%',
      changeType: 'positive' as const,
      icon: DollarSign,
      description: t('dashboard.monthlyRevenueDesc')
    },
    {
      title: t('dashboard.equipmentUptime'),
      value: '98.7%',
      change: '+1.2%',
      changeType: 'positive' as const,
      icon: TrendingUp,
      description: t('dashboard.equipmentUptimeDesc')
    }
  ]

  const recentVisits = [
    {
      id: 1,
      clinic: 'Smile Dental Clinic',
      time: '09:00 AM',
      service: 'X-Ray Calibration',
      status: 'confirmed',
      duration: '2 hours',
      priority: 'high',
      technician: 'Team A'
    },
    {
      id: 2,
      clinic: 'Advanced Dental Care',
      time: '10:30 AM',
      service: 'Chair Maintenance',
      status: 'in-progress',
      duration: '1.5 hours',
      priority: 'medium',
      technician: 'Team B'
    },
    {
      id: 3,
      clinic: 'Family Dentistry Plus',
      time: '02:00 PM',
      service: 'Sterilization Repair',
      status: 'confirmed',
      duration: '3 hours',
      priority: 'high',
      technician: 'Team A'
    },
    {
      id: 4,
      clinic: 'Precision Dental',
      time: '03:30 PM',
      service: 'Software Update',
      status: 'pending',
      duration: '1 hour',
      priority: 'low',
      technician: 'Team C'
    }
  ]

  const alerts = [
    {
      id: 1,
      type: 'warning',
      message: 'High priority: X-Ray machine down at Downtown Dental',
      time: '30 minutes ago'
    },
    {
      id: 2,
      type: 'inventory',
      message: 'Low stock alert: LED Light Modules (2 remaining)',
      time: '1 hour ago'
    },
    {
      id: 3,
      type: 'critical',
      message: 'Out of stock: Pressure Sensor Kits - Reorder needed',
      time: '1 hour ago'
    },
    {
      id: 4,
      type: 'info',
      message: 'New service contract signed with Westside Dental Group',
      time: '2 hours ago'
    },
    {
      id: 5,
      type: 'success',
      message: 'Preventive maintenance completed at 5 locations',
      time: '4 hours ago'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800'
      case 'in-progress':
        return 'bg-blue-100 text-blue-800'
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800'
      case 'medium':
        return 'bg-yellow-100 text-yellow-800'
      case 'low':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getServiceIcon = (service: string) => {
    if (service.includes('X-Ray') || service.includes('Imaging')) {
      return <Monitor className="h-4 w-4 text-blue-600" />
    } else if (service.includes('Chair') || service.includes('Equipment')) {
      return <Wrench className="h-4 w-4 text-orange-600" />
    } else if (service.includes('Software') || service.includes('System')) {
      return <Zap className="h-4 w-4 text-purple-600" />
    }
    return <Wrench className="h-4 w-4 text-gray-600" />
  }

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'warning':
        return <AlertCircle className="h-4 w-4 text-yellow-600" />
      case 'inventory':
        return <Package className="h-4 w-4 text-orange-600" />
      case 'critical':
        return <AlertTriangle className="h-4 w-4 text-red-600" />
      case 'success':
        return <UserCheck className="h-4 w-4 text-green-600" />
      default:
        return <Activity className="h-4 w-4 text-blue-600" />
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">{t('dashboard.title')}</h1>
          <p className="text-muted-foreground mt-1">
            {t('dashboard.subtitle')}
          </p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" size="sm">
            <Clock className="w-4 h-4 mr-2" />
            {t('dashboard.scheduleVisit')}
          </Button>
          <Button size="sm">
            <MapPin className="w-4 h-4 mr-2" />
            {t('dashboard.emergencyCall')}
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title} className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="flex items-center space-x-2 mt-1">
                  <span className={`text-sm font-medium ${
                    stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change}
                  </span>
                  <span className="text-sm text-muted-foreground">{t('dashboard.fromLastMonth')}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Support Visits */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-primary-600" />
              <span>{t('dashboard.todaysSupport')}</span>
            </CardTitle>
            <CardDescription>
              {t('dashboard.todaysSupportDesc')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentVisits.map((visit) => (
                <div
                  key={visit.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                      {getServiceIcon(visit.service)}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{visit.clinic}</p>
                      <p className="text-sm text-gray-600">{visit.service}</p>
                      <p className="text-xs text-gray-500">{visit.technician}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{visit.time}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge className={getPriorityColor(visit.priority)}>
                        {visit.priority}
                      </Badge>
                      <Badge className={getStatusColor(visit.status)}>
                        {visit.status}
                      </Badge>
                    </div>
                    <span className="text-xs text-gray-500">{visit.duration}</span>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              {t('dashboard.viewAllVisits')}
            </Button>
          </CardContent>
        </Card>

        {/* Alerts & Notifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertCircle className="h-5 w-5 text-yellow-600" />
              <span>{t('dashboard.serviceAlerts')}</span>
            </CardTitle>
            <CardDescription>
              {t('dashboard.serviceAlertsDesc')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {alerts.map((alert) => (
                <div key={alert.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  {getAlertIcon(alert.type)}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">{alert.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              {t('dashboard.viewAllAlerts')}
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>{t('dashboard.quickActions')}</CardTitle>
          <CardDescription>
            {t('dashboard.quickActionsDesc')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <Calendar className="h-6 w-6" />
              <span className="text-sm">{t('dashboard.scheduleVisit')}</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <AlertCircle className="h-6 w-6" />
              <span className="text-sm">{t('dashboard.emergencyCall')}</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <Package className="h-6 w-6" />
              <span className="text-sm">{t('dashboard.partsInventory')}</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <Wrench className="h-6 w-6" />
              <span className="text-sm">{t('dashboard.equipmentLog')}</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <TrendingUp className="h-6 w-6" />
              <span className="text-sm">{t('dashboard.serviceReports')}</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}