export type Language = 'en' | 'es' | 'pt' | 'fr' | 'de' | 'it' | 'zh' | 'ja'

// Translation data
export const translations = {
  en: {
    // Common
    common: {
      loading: 'Loading...',
      save: 'Save',
      cancel: 'Cancel',
      delete: 'Delete',
      edit: 'Edit',
      add: 'Add',
      search: 'Search',
      filter: 'Filter',
      export: 'Export',
      import: 'Import',
      refresh: 'Refresh',
      close: 'Close',
      confirm: 'Confirm',
      yes: 'Yes',
      no: 'No',
      ok: 'OK',
      back: 'Back',
      next: 'Next',
      previous: 'Previous',
      submit: 'Submit',
      reset: 'Reset',
      clear: 'Clear',
      select: 'Select',
      selectLanguage: 'Select Language'
    },
    
    // Navigation
    nav: {
      dashboard: 'Dashboard',
      patients: 'Patients',
      appointments: 'Appointments',
      visits: 'Visit Management',
      inventory: 'Inventory',
      analytics: 'Analytics',
      settings: 'Settings'
    },
    
    // Login
    login: {
      title: 'Odonto-Tech',
      subtitle: 'Professional Dental Solutions',
      welcomeBack: 'Welcome Back',
      signInDescription: 'Sign in to access your dental practice dashboard',
      emailLabel: 'Email Address',
      emailPlaceholder: 'doctor@example.com',
      passwordLabel: 'Password',
      passwordPlaceholder: 'Enter your password',
      rememberMe: 'Remember me',
      forgotPassword: 'Forgot password?',
      signIn: 'Sign In',
      signingIn: 'Signing in...',
      noAccount: "Don't have an account?",
      contactAdmin: 'Contact Administrator',
      demoNotice: 'Demo Mode: Any email and password will work'
    },
    
    // Header
    header: {
      searchPlaceholder: 'Search patients, appointments...',
      notifications: 'Notifications',
      profile: 'Profile',
      settings: 'Settings',
      logout: 'Log out',
      myAccount: 'My Account'
    },
    
    // Dashboard
    dashboard: {
      title: 'Technical Support Dashboard',
      subtitle: 'Welcome back! Here\'s your dental equipment support overview.',
      partnerClinics: 'Partner Clinics',
      partnerClinicsDesc: 'Active dental practices',
      todaysVisits: 'Today\'s Support Visits',
      todaysVisitsDesc: 'Scheduled technical support',
      monthlyRevenue: 'Monthly Revenue',
      monthlyRevenueDesc: 'Support services income',
      equipmentUptime: 'Equipment Uptime',
      equipmentUptimeDesc: 'Average equipment reliability',
      scheduleVisit: 'Schedule Visit',
      emergencyCall: 'Emergency Call',
      todaysSupport: 'Today\'s Support Visits',
      todaysSupportDesc: 'Scheduled dental equipment support and maintenance',
      serviceAlerts: 'Service Alerts',
      serviceAlertsDesc: 'Equipment issues and service notifications',
      viewAllVisits: 'View All Support Visits',
      viewAllAlerts: 'View All Alerts',
      quickActions: 'Quick Actions',
      quickActionsDesc: 'Frequently used support tools and shortcuts',
      partsInventory: 'Parts & Inventory',
      equipmentLog: 'Equipment Log',
      serviceReports: 'Service Reports',
      fromLastMonth: 'from last month'
    },
    
    // Patients
    patients: {
      title: 'Patient Management',
      subtitle: 'Manage patient records and information',
      addPatient: 'Add New Patient',
      searchPatients: 'Search patients...',
      totalPatients: 'Total Patients',
      activeToday: 'Active Today',
      newThisMonth: 'New This Month',
      pendingApproval: 'Pending Approval',
      patientId: 'Patient ID',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      lastVisit: 'Last Visit',
      status: 'Status',
      actions: 'Actions',
      viewProfile: 'View Profile',
      editPatient: 'Edit Patient',
      deletePatient: 'Delete Patient',
      active: 'Active',
      inactive: 'Inactive',
      pending: 'Pending'
    },
    
    // Appointments
    appointments: {
      title: 'Appointment Management',
      subtitle: 'Schedule and manage patient appointments',
      newAppointment: 'New Appointment',
      todaysAppointments: 'Today\'s Appointments',
      upcomingAppointments: 'Upcoming Appointments',
      appointmentHistory: 'Appointment History',
      patient: 'Patient',
      date: 'Date',
      time: 'Time',
      service: 'Service',
      doctor: 'Doctor',
      duration: 'Duration',
      confirmed: 'Confirmed',
      pending: 'Pending',
      completed: 'Completed',
      cancelled: 'Cancelled',
      reschedule: 'Reschedule',
      cancelAppointment: 'Cancel Appointment'
    },
    
    // Settings
    settings: {
      title: 'Settings',
      subtitle: 'Manage your account and application preferences',
      profile: 'Profile Settings',
      language: 'Language & Region',
      notifications: 'Notifications',
      security: 'Security',
      billing: 'Billing',
      integrations: 'Integrations',
      languagePreference: 'Language Preference',
      selectLanguage: 'Select your preferred language',
      timeZone: 'Time Zone',
      dateFormat: 'Date Format',
      saveChanges: 'Save Changes'
    }
  },
  
  es: {
    // Common
    common: {
      loading: 'Cargando...',
      save: 'Guardar',
      cancel: 'Cancelar',
      delete: 'Eliminar',
      edit: 'Editar',
      add: 'Agregar',
      search: 'Buscar',
      filter: 'Filtrar',
      export: 'Exportar',
      import: 'Importar',
      refresh: 'Actualizar',
      close: 'Cerrar',
      confirm: 'Confirmar',
      yes: 'Sí',
      no: 'No',
      ok: 'OK',
      back: 'Atrás',
      next: 'Siguiente',
      previous: 'Anterior',
      submit: 'Enviar',
      reset: 'Restablecer',
      clear: 'Limpiar',
      select: 'Seleccionar',
      selectLanguage: 'Seleccionar Idioma'
    },
    
    // Navigation
    nav: {
      dashboard: 'Panel de Control',
      patients: 'Pacientes',
      appointments: 'Citas',
      visits: 'Gestión de Visitas',
      inventory: 'Inventario',
      analytics: 'Análisis',
      settings: 'Configuración'
    },
    
    // Login
    login: {
      title: 'Odonto-Tech',
      subtitle: 'Soluciones Dentales Profesionales',
      welcomeBack: 'Bienvenido de Nuevo',
      signInDescription: 'Inicia sesión para acceder a tu panel de práctica dental',
      emailLabel: 'Dirección de Correo',
      emailPlaceholder: 'doctor@ejemplo.com',
      passwordLabel: 'Contraseña',
      passwordPlaceholder: 'Ingresa tu contraseña',
      rememberMe: 'Recordarme',
      forgotPassword: '¿Olvidaste tu contraseña?',
      signIn: 'Iniciar Sesión',
      signingIn: 'Iniciando sesión...',
      noAccount: '¿No tienes una cuenta?',
      contactAdmin: 'Contactar Administrador',
      demoNotice: 'Modo Demo: Cualquier email y contraseña funcionará'
    },
    
    // Header
    header: {
      searchPlaceholder: 'Buscar pacientes, citas...',
      notifications: 'Notificaciones',
      profile: 'Perfil',
      settings: 'Configuración',
      logout: 'Cerrar Sesión',
      myAccount: 'Mi Cuenta'
    },
    
    // Dashboard
    dashboard: {
      title: 'Panel de Soporte Técnico',
      subtitle: '¡Bienvenido de nuevo! Aquí está tu resumen de soporte de equipos dentales.',
      partnerClinics: 'Clínicas Asociadas',
      partnerClinicsDesc: 'Prácticas dentales activas',
      todaysVisits: 'Visitas de Soporte de Hoy',
      todaysVisitsDesc: 'Soporte técnico programado',
      monthlyRevenue: 'Ingresos Mensuales',
      monthlyRevenueDesc: 'Ingresos por servicios de soporte',
      equipmentUptime: 'Tiempo de Actividad del Equipo',
      equipmentUptimeDesc: 'Confiabilidad promedio del equipo',
      scheduleVisit: 'Programar Visita',
      emergencyCall: 'Llamada de Emergencia',
      todaysSupport: 'Visitas de Soporte de Hoy',
      todaysSupportDesc: 'Soporte y mantenimiento de equipos dentales programados',
      serviceAlerts: 'Alertas de Servicio',
      serviceAlertsDesc: 'Problemas de equipos y notificaciones de servicio',
      viewAllVisits: 'Ver Todas las Visitas',
      viewAllAlerts: 'Ver Todas las Alertas',
      quickActions: 'Acciones Rápidas',
      quickActionsDesc: 'Herramientas de soporte y atajos frecuentemente utilizados',
      partsInventory: 'Inventario de Piezas',
      equipmentLog: 'Registro de Equipos',
      serviceReports: 'Reportes de Servicio',
      fromLastMonth: 'del mes pasado'
    },
    
    // Patients
    patients: {
      title: 'Gestión de Pacientes',
      subtitle: 'Gestionar registros e información de pacientes',
      addPatient: 'Agregar Nuevo Paciente',
      searchPatients: 'Buscar pacientes...',
      totalPatients: 'Total de Pacientes',
      activeToday: 'Activos Hoy',
      newThisMonth: 'Nuevos Este Mes',
      pendingApproval: 'Pendientes de Aprobación',
      patientId: 'ID del Paciente',
      name: 'Nombre',
      email: 'Correo',
      phone: 'Teléfono',
      lastVisit: 'Última Visita',
      status: 'Estado',
      actions: 'Acciones',
      viewProfile: 'Ver Perfil',
      editPatient: 'Editar Paciente',
      deletePatient: 'Eliminar Paciente',
      active: 'Activo',
      inactive: 'Inactivo',
      pending: 'Pendiente'
    },
    
    // Appointments
    appointments: {
      title: 'Gestión de Citas',
      subtitle: 'Programar y gestionar citas de pacientes',
      newAppointment: 'Nueva Cita',
      todaysAppointments: 'Citas de Hoy',
      upcomingAppointments: 'Próximas Citas',
      appointmentHistory: 'Historial de Citas',
      patient: 'Paciente',
      date: 'Fecha',
      time: 'Hora',
      service: 'Servicio',
      doctor: 'Doctor',
      duration: 'Duración',
      confirmed: 'Confirmada',
      pending: 'Pendiente',
      completed: 'Completada',
      cancelled: 'Cancelada',
      reschedule: 'Reprogramar',
      cancelAppointment: 'Cancelar Cita'
    },
    
    // Settings
    settings: {
      title: 'Configuración',
      subtitle: 'Gestiona tu cuenta y preferencias de la aplicación',
      profile: 'Configuración del Perfil',
      language: 'Idioma y Región',
      notifications: 'Notificaciones',
      security: 'Seguridad',
      billing: 'Facturación',
      integrations: 'Integraciones',
      languagePreference: 'Preferencia de Idioma',
      selectLanguage: 'Selecciona tu idioma preferido',
      timeZone: 'Zona Horaria',
      dateFormat: 'Formato de Fecha',
      saveChanges: 'Guardar Cambios'
    }
  },
  
  pt: {
    // Common
    common: {
      loading: 'Carregando...',
      save: 'Salvar',
      cancel: 'Cancelar',
      delete: 'Excluir',
      edit: 'Editar',
      add: 'Adicionar',
      search: 'Pesquisar',
      filter: 'Filtrar',
      export: 'Exportar',
      import: 'Importar',
      refresh: 'Atualizar',
      close: 'Fechar',
      confirm: 'Confirmar',
      yes: 'Sim',
      no: 'Não',
      ok: 'OK',
      back: 'Voltar',
      next: 'Próximo',
      previous: 'Anterior',
      submit: 'Enviar',
      reset: 'Redefinir',
      clear: 'Limpar',
      select: 'Selecionar',
      selectLanguage: 'Selecionar Idioma'
    },
    
    // Navigation
    nav: {
      dashboard: 'Painel',
      patients: 'Pacientes',
      appointments: 'Consultas',
      visits: 'Gestão de Visitas',
      inventory: 'Inventário',
      analytics: 'Análises',
      settings: 'Configurações'
    },
    
    // Login
    login: {
      title: 'Odonto-Tech',
      subtitle: 'Soluções Odontológicas Profissionais',
      welcomeBack: 'Bem-vindo de Volta',
      signInDescription: 'Faça login para acessar seu painel de prática odontológica',
      emailLabel: 'Endereço de Email',
      emailPlaceholder: 'doutor@exemplo.com',
      passwordLabel: 'Senha',
      passwordPlaceholder: 'Digite sua senha',
      rememberMe: 'Lembrar de mim',
      forgotPassword: 'Esqueceu a senha?',
      signIn: 'Entrar',
      signingIn: 'Entrando...',
      noAccount: 'Não tem uma conta?',
      contactAdmin: 'Contatar Administrador',
      demoNotice: 'Modo Demo: Qualquer email e senha funcionará'
    },
    
    // Header
    header: {
      searchPlaceholder: 'Pesquisar pacientes, consultas...',
      notifications: 'Notificações',
      profile: 'Perfil',
      settings: 'Configurações',
      logout: 'Sair',
      myAccount: 'Minha Conta'
    },
    
    // Dashboard
    dashboard: {
      title: 'Painel de Suporte Técnico',
      subtitle: 'Bem-vindo de volta! Aqui está sua visão geral de suporte de equipamentos odontológicos.',
      partnerClinics: 'Clínicas Parceiras',
      partnerClinicsDesc: 'Práticas odontológicas ativas',
      todaysVisits: 'Visitas de Suporte de Hoje',
      todaysVisitsDesc: 'Suporte técnico agendado',
      monthlyRevenue: 'Receita Mensal',
      monthlyRevenueDesc: 'Receita de serviços de suporte',
      equipmentUptime: 'Tempo de Atividade do Equipamento',
      equipmentUptimeDesc: 'Confiabilidade média do equipamento',
      scheduleVisit: 'Agendar Visita',
      emergencyCall: 'Chamada de Emergência',
      todaysSupport: 'Visitas de Suporte de Hoje',
      todaysSupportDesc: 'Suporte e manutenção de equipamentos odontológicos agendados',
      serviceAlerts: 'Alertas de Serviço',
      serviceAlertsDesc: 'Problemas de equipamentos e notificações de serviço',
      viewAllVisits: 'Ver Todas as Visitas',
      viewAllAlerts: 'Ver Todos os Alertas',
      quickActions: 'Ações Rápidas',
      quickActionsDesc: 'Ferramentas de suporte e atalhos frequentemente usados',
      partsInventory: 'Inventário de Peças',
      equipmentLog: 'Registro de Equipamentos',
      serviceReports: 'Relatórios de Serviço',
      fromLastMonth: 'do mês passado'
    },
    
    // Patients
    patients: {
      title: 'Gestão de Pacientes',
      subtitle: 'Gerenciar registros e informações de pacientes',
      addPatient: 'Adicionar Novo Paciente',
      searchPatients: 'Pesquisar pacientes...',
      totalPatients: 'Total de Pacientes',
      activeToday: 'Ativos Hoje',
      newThisMonth: 'Novos Este Mês',
      pendingApproval: 'Pendentes de Aprovação',
      patientId: 'ID do Paciente',
      name: 'Nome',
      email: 'Email',
      phone: 'Telefone',
      lastVisit: 'Última Visita',
      status: 'Status',
      actions: 'Ações',
      viewProfile: 'Ver Perfil',
      editPatient: 'Editar Paciente',
      deletePatient: 'Excluir Paciente',
      active: 'Ativo',
      inactive: 'Inativo',
      pending: 'Pendente'
    },
    
    // Appointments
    appointments: {
      title: 'Gestão de Consultas',
      subtitle: 'Agendar e gerenciar consultas de pacientes',
      newAppointment: 'Nova Consulta',
      todaysAppointments: 'Consultas de Hoje',
      upcomingAppointments: 'Próximas Consultas',
      appointmentHistory: 'Histórico de Consultas',
      patient: 'Paciente',
      date: 'Data',
      time: 'Hora',
      service: 'Serviço',
      doctor: 'Doutor',
      duration: 'Duração',
      confirmed: 'Confirmada',
      pending: 'Pendente',
      completed: 'Concluída',
      cancelled: 'Cancelada',
      reschedule: 'Reagendar',
      cancelAppointment: 'Cancelar Consulta'
    },
    
    // Settings
    settings: {
      title: 'Configurações',
      subtitle: 'Gerencie sua conta e preferências do aplicativo',
      profile: 'Configurações do Perfil',
      language: 'Idioma e Região',
      notifications: 'Notificações',
      security: 'Segurança',
      billing: 'Faturamento',
      integrations: 'Integrações',
      languagePreference: 'Preferência de Idioma',
      selectLanguage: 'Selecione seu idioma preferido',
      timeZone: 'Fuso Horário',
      dateFormat: 'Formato de Data',
      saveChanges: 'Salvar Alterações'
    }
  },
  
  fr: {
    // Common
    common: {
      loading: 'Chargement...',
      save: 'Enregistrer',
      cancel: 'Annuler',
      delete: 'Supprimer',
      edit: 'Modifier',
      add: 'Ajouter',
      search: 'Rechercher',
      filter: 'Filtrer',
      export: 'Exporter',
      import: 'Importer',
      refresh: 'Actualiser',
      close: 'Fermer',
      confirm: 'Confirmer',
      yes: 'Oui',
      no: 'Non',
      ok: 'OK',
      back: 'Retour',
      next: 'Suivant',
      previous: 'Précédent',
      submit: 'Soumettre',
      reset: 'Réinitialiser',
      clear: 'Effacer',
      select: 'Sélectionner',
      selectLanguage: 'Sélectionner la Langue'
    },
    
    // Navigation
    nav: {
      dashboard: 'Tableau de Bord',
      patients: 'Patients',
      appointments: 'Rendez-vous',
      visits: 'Gestion des Visites',
      inventory: 'Inventaire',
      analytics: 'Analyses',
      settings: 'Paramètres'
    },
    
    // Login
    login: {
      title: 'Odonto-Tech',
      subtitle: 'Solutions Dentaires Professionnelles',
      welcomeBack: 'Bon Retour',
      signInDescription: 'Connectez-vous pour accéder à votre tableau de bord de pratique dentaire',
      emailLabel: 'Adresse Email',
      emailPlaceholder: 'docteur@exemple.com',
      passwordLabel: 'Mot de Passe',
      passwordPlaceholder: 'Entrez votre mot de passe',
      rememberMe: 'Se souvenir de moi',
      forgotPassword: 'Mot de passe oublié?',
      signIn: 'Se Connecter',
      signingIn: 'Connexion...',
      noAccount: 'Vous n\'avez pas de compte?',
      contactAdmin: 'Contacter l\'Administrateur',
      demoNotice: 'Mode Démo: N\'importe quel email et mot de passe fonctionnera'
    },
    
    // Header
    header: {
      searchPlaceholder: 'Rechercher patients, rendez-vous...',
      notifications: 'Notifications',
      profile: 'Profil',
      settings: 'Paramètres',
      logout: 'Se Déconnecter',
      myAccount: 'Mon Compte'
    },
    
    // Dashboard
    dashboard: {
      title: 'Tableau de Bord Support Technique',
      subtitle: 'Bon retour! Voici votre aperçu du support d\'équipement dentaire.',
      partnerClinics: 'Cliniques Partenaires',
      partnerClinicsDesc: 'Pratiques dentaires actives',
      todaysVisits: 'Visites de Support d\'Aujourd\'hui',
      todaysVisitsDesc: 'Support technique programmé',
      monthlyRevenue: 'Revenus Mensuels',
      monthlyRevenueDesc: 'Revenus des services de support',
      equipmentUptime: 'Temps de Fonctionnement de l\'Équipement',
      equipmentUptimeDesc: 'Fiabilité moyenne de l\'équipement',
      scheduleVisit: 'Programmer une Visite',
      emergencyCall: 'Appel d\'Urgence',
      todaysSupport: 'Visites de Support d\'Aujourd\'hui',
      todaysSupportDesc: 'Support et maintenance d\'équipement dentaire programmés',
      serviceAlerts: 'Alertes de Service',
      serviceAlertsDesc: 'Problèmes d\'équipement et notifications de service',
      viewAllVisits: 'Voir Toutes les Visites',
      viewAllAlerts: 'Voir Toutes les Alertes',
      quickActions: 'Actions Rapides',
      quickActionsDesc: 'Outils de support et raccourcis fréquemment utilisés',
      partsInventory: 'Inventaire des Pièces',
      equipmentLog: 'Journal de l\'Équipement',
      serviceReports: 'Rapports de Service',
      fromLastMonth: 'du mois dernier'
    },
    
    // Patients
    patients: {
      title: 'Gestion des Patients',
      subtitle: 'Gérer les dossiers et informations des patients',
      addPatient: 'Ajouter un Nouveau Patient',
      searchPatients: 'Rechercher des patients...',
      totalPatients: 'Total des Patients',
      activeToday: 'Actifs Aujourd\'hui',
      newThisMonth: 'Nouveaux ce Mois',
      pendingApproval: 'En Attente d\'Approbation',
      patientId: 'ID du Patient',
      name: 'Nom',
      email: 'Email',
      phone: 'Téléphone',
      lastVisit: 'Dernière Visite',
      status: 'Statut',
      actions: 'Actions',
      viewProfile: 'Voir le Profil',
      editPatient: 'Modifier le Patient',
      deletePatient: 'Supprimer le Patient',
      active: 'Actif',
      inactive: 'Inactif',
      pending: 'En Attente'
    },
    
    // Appointments
    appointments: {
      title: 'Gestion des Rendez-vous',
      subtitle: 'Programmer et gérer les rendez-vous des patients',
      newAppointment: 'Nouveau Rendez-vous',
      todaysAppointments: 'Rendez-vous d\'Aujourd\'hui',
      upcomingAppointments: 'Prochains Rendez-vous',
      appointmentHistory: 'Historique des Rendez-vous',
      patient: 'Patient',
      date: 'Date',
      time: 'Heure',
      service: 'Service',
      doctor: 'Docteur',
      duration: 'Durée',
      confirmed: 'Confirmé',
      pending: 'En Attente',
      completed: 'Terminé',
      cancelled: 'Annulé',
      reschedule: 'Reprogrammer',
      cancelAppointment: 'Annuler le Rendez-vous'
    },
    
    // Settings
    settings: {
      title: 'Paramètres',
      subtitle: 'Gérez votre compte et les préférences de l\'application',
      profile: 'Paramètres du Profil',
      language: 'Langue et Région',
      notifications: 'Notifications',
      security: 'Sécurité',
      billing: 'Facturation',
      integrations: 'Intégrations',
      languagePreference: 'Préférence de Langue',
      selectLanguage: 'Sélectionnez votre langue préférée',
      timeZone: 'Fuseau Horaire',
      dateFormat: 'Format de Date',
      saveChanges: 'Enregistrer les Modifications'
    }
  },
  
  de: {
    // Common
    common: {
      loading: 'Laden...',
      save: 'Speichern',
      cancel: 'Abbrechen',
      delete: 'Löschen',
      edit: 'Bearbeiten',
      add: 'Hinzufügen',
      search: 'Suchen',
      filter: 'Filtern',
      export: 'Exportieren',
      import: 'Importieren',
      refresh: 'Aktualisieren',
      close: 'Schließen',
      confirm: 'Bestätigen',
      yes: 'Ja',
      no: 'Nein',
      ok: 'OK',
      back: 'Zurück',
      next: 'Weiter',
      previous: 'Vorherige',
      submit: 'Senden',
      reset: 'Zurücksetzen',
      clear: 'Löschen',
      select: 'Auswählen',
      selectLanguage: 'Sprache Auswählen'
    },
    
    // Navigation
    nav: {
      dashboard: 'Dashboard',
      patients: 'Patienten',
      appointments: 'Termine',
      visits: 'Besuchsverwaltung',
      inventory: 'Inventar',
      analytics: 'Analysen',
      settings: 'Einstellungen'
    },
    
    // Login
    login: {
      title: 'Odonto-Tech',
      subtitle: 'Professionelle Dentallösungen',
      welcomeBack: 'Willkommen Zurück',
      signInDescription: 'Melden Sie sich an, um auf Ihr Zahnarztpraxis-Dashboard zuzugreifen',
      emailLabel: 'E-Mail-Adresse',
      emailPlaceholder: 'arzt@beispiel.com',
      passwordLabel: 'Passwort',
      passwordPlaceholder: 'Geben Sie Ihr Passwort ein',
      rememberMe: 'Angemeldet bleiben',
      forgotPassword: 'Passwort vergessen?',
      signIn: 'Anmelden',
      signingIn: 'Anmeldung...',
      noAccount: 'Haben Sie kein Konto?',
      contactAdmin: 'Administrator Kontaktieren',
      demoNotice: 'Demo-Modus: Jede E-Mail und jedes Passwort funktioniert'
    },
    
    // Header
    header: {
      searchPlaceholder: 'Patienten, Termine suchen...',
      notifications: 'Benachrichtigungen',
      profile: 'Profil',
      settings: 'Einstellungen',
      logout: 'Abmelden',
      myAccount: 'Mein Konto'
    },
    
    // Dashboard
    dashboard: {
      title: 'Technischer Support Dashboard',
      subtitle: 'Willkommen zurück! Hier ist Ihre Übersicht über den Dentalgeräte-Support.',
      partnerClinics: 'Partner-Kliniken',
      partnerClinicsDesc: 'Aktive Zahnarztpraxen',
      todaysVisits: 'Heutige Support-Besuche',
      todaysVisitsDesc: 'Geplanter technischer Support',
      monthlyRevenue: 'Monatlicher Umsatz',
      monthlyRevenueDesc: 'Einnahmen aus Support-Services',
      equipmentUptime: 'Geräteverfügbarkeit',
      equipmentUptimeDesc: 'Durchschnittliche Gerätezuverlässigkeit',
      scheduleVisit: 'Besuch Planen',
      emergencyCall: 'Notfall-Anruf',
      todaysSupport: 'Heutige Support-Besuche',
      todaysSupportDesc: 'Geplanter Dentalgeräte-Support und -Wartung',
      serviceAlerts: 'Service-Warnungen',
      serviceAlertsDesc: 'Geräteprobleme und Service-Benachrichtigungen',
      viewAllVisits: 'Alle Besuche Anzeigen',
      viewAllAlerts: 'Alle Warnungen Anzeigen',
      quickActions: 'Schnellaktionen',
      quickActionsDesc: 'Häufig verwendete Support-Tools und Verknüpfungen',
      partsInventory: 'Teile-Inventar',
      equipmentLog: 'Geräte-Protokoll',
      serviceReports: 'Service-Berichte',
      fromLastMonth: 'vom letzten Monat'
    },
    
    // Patients
    patients: {
      title: 'Patientenverwaltung',
      subtitle: 'Patientenakten und -informationen verwalten',
      addPatient: 'Neuen Patienten Hinzufügen',
      searchPatients: 'Patienten suchen...',
      totalPatients: 'Gesamte Patienten',
      activeToday: 'Heute Aktiv',
      newThisMonth: 'Neu Diesen Monat',
      pendingApproval: 'Genehmigung Ausstehend',
      patientId: 'Patienten-ID',
      name: 'Name',
      email: 'E-Mail',
      phone: 'Telefon',
      lastVisit: 'Letzter Besuch',
      status: 'Status',
      actions: 'Aktionen',
      viewProfile: 'Profil Anzeigen',
      editPatient: 'Patient Bearbeiten',
      deletePatient: 'Patient Löschen',
      active: 'Aktiv',
      inactive: 'Inaktiv',
      pending: 'Ausstehend'
    },
    
    // Appointments
    appointments: {
      title: 'Terminverwaltung',
      subtitle: 'Patiententermine planen und verwalten',
      newAppointment: 'Neuer Termin',
      todaysAppointments: 'Heutige Termine',
      upcomingAppointments: 'Kommende Termine',
      appointmentHistory: 'Terminhistorie',
      patient: 'Patient',
      date: 'Datum',
      time: 'Zeit',
      service: 'Service',
      doctor: 'Arzt',
      duration: 'Dauer',
      confirmed: 'Bestätigt',
      pending: 'Ausstehend',
      completed: 'Abgeschlossen',
      cancelled: 'Storniert',
      reschedule: 'Umplanen',
      cancelAppointment: 'Termin Stornieren'
    },
    
    // Settings
    settings: {
      title: 'Einstellungen',
      subtitle: 'Verwalten Sie Ihr Konto und Anwendungseinstellungen',
      profile: 'Profil-Einstellungen',
      language: 'Sprache & Region',
      notifications: 'Benachrichtigungen',
      security: 'Sicherheit',
      billing: 'Abrechnung',
      integrations: 'Integrationen',
      languagePreference: 'Spracheinstellung',
      selectLanguage: 'Wählen Sie Ihre bevorzugte Sprache',
      timeZone: 'Zeitzone',
      dateFormat: 'Datumsformat',
      saveChanges: 'Änderungen Speichern'
    }
  },
  
  it: {
    // Common
    common: {
      loading: 'Caricamento...',
      save: 'Salva',
      cancel: 'Annulla',
      delete: 'Elimina',
      edit: 'Modifica',
      add: 'Aggiungi',
      search: 'Cerca',
      filter: 'Filtra',
      export: 'Esporta',
      import: 'Importa',
      refresh: 'Aggiorna',
      close: 'Chiudi',
      confirm: 'Conferma',
      yes: 'Sì',
      no: 'No',
      ok: 'OK',
      back: 'Indietro',
      next: 'Avanti',
      previous: 'Precedente',
      submit: 'Invia',
      reset: 'Reimposta',
      clear: 'Cancella',
      select: 'Seleziona',
      selectLanguage: 'Seleziona Lingua'
    },
    
    // Navigation
    nav: {
      dashboard: 'Dashboard',
      patients: 'Pazienti',
      appointments: 'Appuntamenti',
      visits: 'Gestione Visite',
      inventory: 'Inventario',
      analytics: 'Analisi',
      settings: 'Impostazioni'
    },
    
    // Login
    login: {
      title: 'Odonto-Tech',
      subtitle: 'Soluzioni Dentali Professionali',
      welcomeBack: 'Bentornato',
      signInDescription: 'Accedi per accedere al tuo dashboard di pratica dentale',
      emailLabel: 'Indirizzo Email',
      emailPlaceholder: 'dottore@esempio.com',
      passwordLabel: 'Password',
      passwordPlaceholder: 'Inserisci la tua password',
      rememberMe: 'Ricordami',
      forgotPassword: 'Password dimenticata?',
      signIn: 'Accedi',
      signingIn: 'Accesso...',
      noAccount: 'Non hai un account?',
      contactAdmin: 'Contatta Amministratore',
      demoNotice: 'Modalità Demo: Qualsiasi email e password funzionerà'
    },
    
    // Header
    header: {
      searchPlaceholder: 'Cerca pazienti, appuntamenti...',
      notifications: 'Notifiche',
      profile: 'Profilo',
      settings: 'Impostazioni',
      logout: 'Esci',
      myAccount: 'Il Mio Account'
    },
    
    // Dashboard
    dashboard: {
      title: 'Dashboard Supporto Tecnico',
      subtitle: 'Bentornato! Ecco la tua panoramica del supporto per attrezzature dentali.',
      partnerClinics: 'Cliniche Partner',
      partnerClinicsDesc: 'Pratiche dentali attive',
      todaysVisits: 'Visite di Supporto di Oggi',
      todaysVisitsDesc: 'Supporto tecnico programmato',
      monthlyRevenue: 'Ricavi Mensili',
      monthlyRevenueDesc: 'Entrate dai servizi di supporto',
      equipmentUptime: 'Tempo di Attività Attrezzature',
      equipmentUptimeDesc: 'Affidabilità media delle attrezzature',
      scheduleVisit: 'Programma Visita',
      emergencyCall: 'Chiamata di Emergenza',
      todaysSupport: 'Visite di Supporto di Oggi',
      todaysSupportDesc: 'Supporto e manutenzione attrezzature dentali programmati',
      serviceAlerts: 'Avvisi di Servizio',
      serviceAlertsDesc: 'Problemi attrezzature e notifiche di servizio',
      viewAllVisits: 'Visualizza Tutte le Visite',
      viewAllAlerts: 'Visualizza Tutti gli Avvisi',
      quickActions: 'Azioni Rapide',
      quickActionsDesc: 'Strumenti di supporto e scorciatoie utilizzati frequentemente',
      partsInventory: 'Inventario Parti',
      equipmentLog: 'Registro Attrezzature',
      serviceReports: 'Rapporti di Servizio',
      fromLastMonth: 'dal mese scorso'
    },
    
    // Patients
    patients: {
      title: 'Gestione Pazienti',
      subtitle: 'Gestisci cartelle e informazioni pazienti',
      addPatient: 'Aggiungi Nuovo Paziente',
      searchPatients: 'Cerca pazienti...',
      totalPatients: 'Totale Pazienti',
      activeToday: 'Attivi Oggi',
      newThisMonth: 'Nuovi Questo Mese',
      pendingApproval: 'In Attesa di Approvazione',
      patientId: 'ID Paziente',
      name: 'Nome',
      email: 'Email',
      phone: 'Telefono',
      lastVisit: 'Ultima Visita',
      status: 'Stato',
      actions: 'Azioni',
      viewProfile: 'Visualizza Profilo',
      editPatient: 'Modifica Paziente',
      deletePatient: 'Elimina Paziente',
      active: 'Attivo',
      inactive: 'Inattivo',
      pending: 'In Attesa'
    },
    
    // Appointments
    appointments: {
      title: 'Gestione Appuntamenti',
      subtitle: 'Programma e gestisci appuntamenti pazienti',
      newAppointment: 'Nuovo Appuntamento',
      todaysAppointments: 'Appuntamenti di Oggi',
      upcomingAppointments: 'Prossimi Appuntamenti',
      appointmentHistory: 'Storico Appuntamenti',
      patient: 'Paziente',
      date: 'Data',
      time: 'Ora',
      service: 'Servizio',
      doctor: 'Dottore',
      duration: 'Durata',
      confirmed: 'Confermato',
      pending: 'In Attesa',
      completed: 'Completato',
      cancelled: 'Annullato',
      reschedule: 'Riprogramma',
      cancelAppointment: 'Annulla Appuntamento'
    },
    
    // Settings
    settings: {
      title: 'Impostazioni',
      subtitle: 'Gestisci il tuo account e le preferenze dell\'applicazione',
      profile: 'Impostazioni Profilo',
      language: 'Lingua e Regione',
      notifications: 'Notifiche',
      security: 'Sicurezza',
      billing: 'Fatturazione',
      integrations: 'Integrazioni',
      languagePreference: 'Preferenza Lingua',
      selectLanguage: 'Seleziona la tua lingua preferita',
      timeZone: 'Fuso Orario',
      dateFormat: 'Formato Data',
      saveChanges: 'Salva Modifiche'
    }
  },
  
  zh: {
    // Common
    common: {
      loading: '加载中...',
      save: '保存',
      cancel: '取消',
      delete: '删除',
      edit: '编辑',
      add: '添加',
      search: '搜索',
      filter: '筛选',
      export: '导出',
      import: '导入',
      refresh: '刷新',
      close: '关闭',
      confirm: '确认',
      yes: '是',
      no: '否',
      ok: '确定',
      back: '返回',
      next: '下一步',
      previous: '上一步',
      submit: '提交',
      reset: '重置',
      clear: '清除',
      select: '选择',
      selectLanguage: '选择语言'
    },
    
    // Navigation
    nav: {
      dashboard: '仪表板',
      patients: '患者',
      appointments: '预约',
      visits: '访问管理',
      inventory: '库存',
      analytics: '分析',
      settings: '设置'
    },
    
    // Login
    login: {
      title: 'Odonto-Tech',
      subtitle: '专业牙科解决方案',
      welcomeBack: '欢迎回来',
      signInDescription: '登录以访问您的牙科诊所仪表板',
      emailLabel: '邮箱地址',
      emailPlaceholder: 'doctor@example.com',
      passwordLabel: '密码',
      passwordPlaceholder: '输入您的密码',
      rememberMe: '记住我',
      forgotPassword: '忘记密码？',
      signIn: '登录',
      signingIn: '登录中...',
      noAccount: '没有账户？',
      contactAdmin: '联系管理员',
      demoNotice: '演示模式：任何邮箱和密码都可以使用'
    },
    
    // Header
    header: {
      searchPlaceholder: '搜索患者、预约...',
      notifications: '通知',
      profile: '个人资料',
      settings: '设置',
      logout: '退出',
      myAccount: '我的账户'
    },
    
    // Dashboard
    dashboard: {
      title: '技术支持仪表板',
      subtitle: '欢迎回来！这是您的牙科设备支持概览。',
      partnerClinics: '合作诊所',
      partnerClinicsDesc: '活跃的牙科诊所',
      todaysVisits: '今日支持访问',
      todaysVisitsDesc: '计划的技术支持',
      monthlyRevenue: '月收入',
      monthlyRevenueDesc: '支持服务收入',
      equipmentUptime: '设备正常运行时间',
      equipmentUptimeDesc: '平均设备可靠性',
      scheduleVisit: '安排访问',
      emergencyCall: '紧急呼叫',
      todaysSupport: '今日支持访问',
      todaysSupportDesc: '计划的牙科设备支持和维护',
      serviceAlerts: '服务警报',
      serviceAlertsDesc: '设备问题和服务通知',
      viewAllVisits: '查看所有访问',
      viewAllAlerts: '查看所有警报',
      quickActions: '快速操作',
      quickActionsDesc: '常用支持工具和快捷方式',
      partsInventory: '零件库存',
      equipmentLog: '设备日志',
      serviceReports: '服务报告',
      fromLastMonth: '与上月相比'
    },
    
    // Patients
    patients: {
      title: '患者管理',
      subtitle: '管理患者记录和信息',
      addPatient: '添加新患者',
      searchPatients: '搜索患者...',
      totalPatients: '总患者数',
      activeToday: '今日活跃',
      newThisMonth: '本月新增',
      pendingApproval: '待审批',
      patientId: '患者ID',
      name: '姓名',
      email: '邮箱',
      phone: '电话',
      lastVisit: '最后访问',
      status: '状态',
      actions: '操作',
      viewProfile: '查看资料',
      editPatient: '编辑患者',
      deletePatient: '删除患者',
      active: '活跃',
      inactive: '非活跃',
      pending: '待处理'
    },
    
    // Appointments
    appointments: {
      title: '预约管理',
      subtitle: '安排和管理患者预约',
      newAppointment: '新预约',
      todaysAppointments: '今日预约',
      upcomingAppointments: '即将到来的预约',
      appointmentHistory: '预约历史',
      patient: '患者',
      date: '日期',
      time: '时间',
      service: '服务',
      doctor: '医生',
      duration: '持续时间',
      confirmed: '已确认',
      pending: '待处理',
      completed: '已完成',
      cancelled: '已取消',
      reschedule: '重新安排',
      cancelAppointment: '取消预约'
    },
    
    // Settings
    settings: {
      title: '设置',
      subtitle: '管理您的账户和应用程序偏好',
      profile: '个人资料设置',
      language: '语言和地区',
      notifications: '通知',
      security: '安全',
      billing: '账单',
      integrations: '集成',
      languagePreference: '语言偏好',
      selectLanguage: '选择您的首选语言',
      timeZone: '时区',
      dateFormat: '日期格式',
      saveChanges: '保存更改'
    }
  },
  
  ja: {
    // Common
    common: {
      loading: '読み込み中...',
      save: '保存',
      cancel: 'キャンセル',
      delete: '削除',
      edit: '編集',
      add: '追加',
      search: '検索',
      filter: 'フィルター',
      export: 'エクスポート',
      import: 'インポート',
      refresh: '更新',
      close: '閉じる',
      confirm: '確認',
      yes: 'はい',
      no: 'いいえ',
      ok: 'OK',
      back: '戻る',
      next: '次へ',
      previous: '前へ',
      submit: '送信',
      reset: 'リセット',
      clear: 'クリア',
      select: '選択',
      selectLanguage: '言語を選択'
    },
    
    // Navigation
    nav: {
      dashboard: 'ダッシュボード',
      patients: '患者',
      appointments: '予約',
      visits: '訪問管理',
      inventory: '在庫',
      analytics: '分析',
      settings: '設定'
    },
    
    // Login
    login: {
      title: 'Odonto-Tech',
      subtitle: 'プロフェッショナル歯科ソリューション',
      welcomeBack: 'おかえりなさい',
      signInDescription: '歯科診療ダッシュボードにアクセスするためにサインインしてください',
      emailLabel: 'メールアドレス',
      emailPlaceholder: 'doctor@example.com',
      passwordLabel: 'パスワード',
      passwordPlaceholder: 'パスワードを入力してください',
      rememberMe: 'ログイン状態を保持',
      forgotPassword: 'パスワードを忘れましたか？',
      signIn: 'サインイン',
      signingIn: 'サインイン中...',
      noAccount: 'アカウントをお持ちでないですか？',
      contactAdmin: '管理者に連絡',
      demoNotice: 'デモモード：任意のメールとパスワードが使用できます'
    },
    
    // Header
    header: {
      searchPlaceholder: '患者、予約を検索...',
      notifications: '通知',
      profile: 'プロフィール',
      settings: '設定',
      logout: 'ログアウト',
      myAccount: 'マイアカウント'
    },
    
    // Dashboard
    dashboard: {
      title: 'テクニカルサポートダッシュボード',
      subtitle: 'おかえりなさい！歯科機器サポートの概要です。',
      partnerClinics: 'パートナークリニック',
      partnerClinicsDesc: 'アクティブな歯科診療所',
      todaysVisits: '本日のサポート訪問',
      todaysVisitsDesc: 'スケジュールされた技術サポート',
      monthlyRevenue: '月間収益',
      monthlyRevenueDesc: 'サポートサービス収入',
      equipmentUptime: '機器稼働時間',
      equipmentUptimeDesc: '平均機器信頼性',
      scheduleVisit: '訪問をスケジュール',
      emergencyCall: '緊急コール',
      todaysSupport: '本日のサポート訪問',
      todaysSupportDesc: 'スケジュールされた歯科機器サポートとメンテナンス',
      serviceAlerts: 'サービスアラート',
      serviceAlertsDesc: '機器の問題とサービス通知',
      viewAllVisits: 'すべての訪問を表示',
      viewAllAlerts: 'すべてのアラートを表示',
      quickActions: 'クイックアクション',
      quickActionsDesc: 'よく使用されるサポートツールとショートカット',
      partsInventory: 'パーツ在庫',
      equipmentLog: '機器ログ',
      serviceReports: 'サービスレポート',
      fromLastMonth: '先月から'
    },
    
    // Patients
    patients: {
      title: '患者管理',
      subtitle: '患者記録と情報を管理',
      addPatient: '新しい患者を追加',
      searchPatients: '患者を検索...',
      totalPatients: '総患者数',
      activeToday: '本日アクティブ',
      newThisMonth: '今月の新規',
      pendingApproval: '承認待ち',
      patientId: '患者ID',
      name: '名前',
      email: 'メール',
      phone: '電話',
      lastVisit: '最終訪問',
      status: 'ステータス',
      actions: 'アクション',
      viewProfile: 'プロフィールを表示',
      editPatient: '患者を編集',
      deletePatient: '患者を削除',
      active: 'アクティブ',
      inactive: '非アクティブ',
      pending: '保留中'
    },
    
    // Appointments
    appointments: {
      title: '予約管理',
      subtitle: '患者の予約をスケジュールし管理',
      newAppointment: '新しい予約',
      todaysAppointments: '本日の予約',
      upcomingAppointments: '今後の予約',
      appointmentHistory: '予約履歴',
      patient: '患者',
      date: '日付',
      time: '時間',
      service: 'サービス',
      doctor: '医師',
      duration: '期間',
      confirmed: '確認済み',
      pending: '保留中',
      completed: '完了',
      cancelled: 'キャンセル',
      reschedule: '再スケジュール',
      cancelAppointment: '予約をキャンセル'
    },
    
    // Settings
    settings: {
      title: '設定',
      subtitle: 'アカウントとアプリケーションの設定を管理',
      profile: 'プロフィール設定',
      language: '言語と地域',
      notifications: '通知',
      security: 'セキュリティ',
      billing: '請求',
      integrations: '統合',
      languagePreference: '言語設定',
      selectLanguage: '希望する言語を選択してください',
      timeZone: 'タイムゾーン',
      dateFormat: '日付形式',
      saveChanges: '変更を保存'
    }
  }
}

// Translation function
export function getTranslation(key: string, language: Language): string {
  const keys = key.split('.')
  let translation: any = translations[language]
  
  for (const k of keys) {
    if (translation && typeof translation === 'object' && k in translation) {
      translation = translation[k]
    } else {
      // Fallback to English if translation not found
      translation = translations.en
      for (const fallbackKey of keys) {
        if (translation && typeof translation === 'object' && fallbackKey in translation) {
          translation = translation[fallbackKey]
        } else {
          return key // Return key if no translation found
        }
      }
      break
    }
  }
  
  return typeof translation === 'string' ? translation : key
}