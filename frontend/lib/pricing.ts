import type { ServiceId } from './site';
import type { Locale } from './i18n';

export type Plan = {
  id: string;
  cat: ServiceId;
  popular?: boolean;
  // [name, feature1, feature2, feature3]
  t: Record<Locale, [string, string, string, string]>;
};

export const PLANS: Plan[] = [
  // Web
  { id: 'web-landing', cat: 'web', t: {
    en: ['Landing page', 'Single conversion-focused page', 'Lead form and analytics', 'Live in under a week'],
    fr: ['Page d’atterrissage', 'Une page unique axée sur la conversion', 'Formulaire de prospects et analytique', 'En ligne en moins d’une semaine'],
    es: ['Página de aterrizaje', 'Una sola página enfocada en convertir', 'Formulario de contacto y analítica', 'En línea en menos de una semana'] } },
  { id: 'web-starter', cat: 'web', t: {
    en: ['Starter website', '5–7 responsive pages', 'CMS and contact forms', 'SEO-ready structure'],
    fr: ['Site vitrine de base', '5 à 7 pages adaptatives', 'CMS et formulaires de contact', 'Structure prête pour le SEO'],
    es: ['Sitio web básico', '5 a 7 páginas adaptables', 'CMS y formularios de contacto', 'Estructura lista para SEO'] } },
  { id: 'web-business', cat: 'web', popular: true, t: {
    en: ['Business website', 'Custom UI design', 'Blog and advanced analytics', 'Performance and security hardening'],
    fr: ['Site d’entreprise', 'Design d’interface sur mesure', 'Blogue et analytique avancée', 'Performance et sécurité renforcées'],
    es: ['Sitio corporativo', 'Diseño de interfaz a medida', 'Blog y analítica avanzada', 'Rendimiento y seguridad reforzados'] } },
  { id: 'web-ecom', cat: 'web', t: {
    en: ['E-commerce store', 'Catalogue, cart and checkout', 'Payment gateway and inventory', 'Order tracking and accounts'],
    fr: ['Boutique en ligne', 'Catalogue, panier et paiement', 'Passerelle de paiement et inventaire', 'Suivi des commandes et comptes clients'],
    es: ['Tienda en línea', 'Catálogo, carrito y pago', 'Pasarela de pago e inventario', 'Seguimiento de pedidos y cuentas'] } },
  { id: 'web-app', cat: 'web', t: {
    en: ['Custom web application', 'Dashboards and API development', 'Database design', 'Third-party integrations'],
    fr: ['Application web sur mesure', 'Tableaux de bord et API', 'Conception de base de données', 'Intégrations tierces'],
    es: ['Aplicación web a medida', 'Paneles y desarrollo de API', 'Diseño de base de datos', 'Integraciones de terceros'] } },

  // Mobile
  { id: 'mobile-mvp', cat: 'mobile', popular: true, t: {
    en: ['MVP app', 'Core features, one platform', 'Push notifications and analytics', 'App store submission'],
    fr: ['Application MVP', 'Fonctions essentielles, une plateforme', 'Notifications push et analytique', 'Publication sur les boutiques d’applications'],
    es: ['App MVP', 'Funciones esenciales, una plataforma', 'Notificaciones push y analítica', 'Publicación en las tiendas de apps'] } },
  { id: 'mobile-cross', cat: 'mobile', t: {
    en: ['Cross-platform app', 'iOS and Android, one codebase', 'Native-feeling performance', 'Cloud backend included'],
    fr: ['Application multiplateforme', 'iOS et Android, une seule base de code', 'Performance proche du natif', 'Serveur infonuagique inclus'],
    es: ['App multiplataforma', 'iOS y Android, un solo código base', 'Rendimiento cercano al nativo', 'Backend en la nube incluido'] } },
  { id: 'mobile-care', cat: 'mobile', t: {
    en: ['App maintenance', 'Bug fixes and OS updates', 'Security patches', 'Monthly performance report'],
    fr: ['Maintenance d’application', 'Correctifs et mises à jour du système', 'Correctifs de sécurité', 'Rapport de performance mensuel'],
    es: ['Mantenimiento de apps', 'Corrección de errores y actualizaciones del sistema', 'Parches de seguridad', 'Informe mensual de rendimiento'] } },

  // AI
  { id: 'ai-consult', cat: 'ai', t: {
    en: ['AI consulting', 'Use-case assessment', 'ROI projections', 'Technology roadmap'],
    fr: ['Conseil en IA', 'Évaluation des cas d’usage', 'Projections de retour sur investissement', 'Feuille de route technologique'],
    es: ['Consultoría de IA', 'Evaluación de casos de uso', 'Proyecciones de retorno de inversión', 'Hoja de ruta tecnológica'] } },
  { id: 'ai-chat', cat: 'ai', popular: true, t: {
    en: ['Chatbot & generative AI', 'Trained on your content', 'Multi-channel deployment', 'Analytics dashboard'],
    fr: ['Agent conversationnel et IA générative', 'Entraîné sur votre contenu', 'Déploiement multicanal', 'Tableau de bord analytique'],
    es: ['Chatbot e IA generativa', 'Entrenado con tu contenido', 'Despliegue multicanal', 'Panel de analítica'] } },
  { id: 'ai-ml', cat: 'ai', t: {
    en: ['Custom ML model', 'Data preparation and training', 'Optimisation and deployment', 'Ongoing monitoring'],
    fr: ['Modèle d’apprentissage sur mesure', 'Préparation des données et entraînement', 'Optimisation et déploiement', 'Suivi continu'],
    es: ['Modelo de aprendizaje a medida', 'Preparación de datos y entrenamiento', 'Optimización y despliegue', 'Monitoreo continuo'] } },
  { id: 'ai-care', cat: 'ai', t: {
    en: ['AI support retainer', 'Model monitoring and tuning', 'Retraining and data pipeline', 'Incident response'],
    fr: ['Soutien continu en IA', 'Suivi et ajustement des modèles', 'Réentraînement et flux de données', 'Intervention en cas d’incident'],
    es: ['Soporte continuo de IA', 'Monitoreo y ajuste de modelos', 'Reentrenamiento y flujo de datos', 'Respuesta a incidentes'] } },

  // Blockchain
  { id: 'chain-contracts', cat: 'blockchain', popular: true, t: {
    en: ['Smart contracts', 'Solidity development and tests', 'Gas optimisation', 'Multi-chain deployment'],
    fr: ['Contrats intelligents', 'Développement Solidity et tests', 'Optimisation des frais de gaz', 'Déploiement multichaîne'],
    es: ['Contratos inteligentes', 'Desarrollo en Solidity y pruebas', 'Optimización de gas', 'Despliegue multicadena'] } },
  { id: 'chain-dapp', cat: 'blockchain', t: {
    en: ['Decentralized app', 'Wallet connection', 'Contract interface and token integration', 'IPFS storage'],
    fr: ['Application décentralisée', 'Connexion de portefeuille', 'Interface de contrat et intégration de jetons', 'Stockage IPFS'],
    es: ['Aplicación descentralizada', 'Conexión de billetera', 'Interfaz de contrato e integración de tokens', 'Almacenamiento IPFS'] } },

  // Cloud
  { id: 'cloud-infra', cat: 'cloud', popular: true, t: {
    en: ['Cloud infrastructure', 'Architecture and auto-scaling', 'Disaster recovery', 'Cost optimisation'],
    fr: ['Infrastructure infonuagique', 'Architecture et mise à l’échelle automatique', 'Reprise après sinistre', 'Optimisation des coûts'],
    es: ['Infraestructura en la nube', 'Arquitectura y escalado automático', 'Recuperación ante desastres', 'Optimización de costos'] } },
  { id: 'cloud-cicd', cat: 'cloud', t: {
    en: ['CI/CD & DevOps', 'Automated build and test pipelines', 'Infrastructure as code', 'Deployment automation'],
    fr: ['CI/CD et DevOps', 'Pipelines de build et de tests automatisés', 'Infrastructure en tant que code', 'Automatisation des déploiements'],
    es: ['CI/CD y DevOps', 'Pipelines automáticos de compilación y pruebas', 'Infraestructura como código', 'Automatización de despliegues'] } },
  { id: 'cloud-managed', cat: 'cloud', t: {
    en: ['Managed services', 'Monitoring and incident response', 'Security updates', 'Backup management'],
    fr: ['Services gérés', 'Supervision et gestion des incidents', 'Mises à jour de sécurité', 'Gestion des sauvegardes'],
    es: ['Servicios gestionados', 'Monitoreo y respuesta a incidentes', 'Actualizaciones de seguridad', 'Gestión de copias de seguridad'] } },

  // Security
  { id: 'sec-audit', cat: 'security', popular: true, t: {
    en: ['Application security audit', 'Vulnerability scanning and pen testing', 'Code review', 'Report with remediation guide'],
    fr: ['Audit de sécurité applicative', 'Analyse de vulnérabilités et tests d’intrusion', 'Revue de code', 'Rapport avec guide de correction'],
    es: ['Auditoría de seguridad de aplicaciones', 'Análisis de vulnerabilidades y pruebas de penetración', 'Revisión de código', 'Informe con guía de corrección'] } },
  { id: 'sec-monitor', cat: 'security', t: {
    en: ['Security monitoring', 'Threat detection and log analysis', 'Alerting and incident response', 'Compliance monitoring'],
    fr: ['Surveillance de sécurité', 'Détection des menaces et analyse des journaux', 'Alertes et gestion des incidents', 'Suivi de la conformité'],
    es: ['Monitoreo de seguridad', 'Detección de amenazas y análisis de registros', 'Alertas y respuesta a incidentes', 'Monitoreo de cumplimiento'] } },

  // Design
  { id: 'design-ux', cat: 'design', popular: true, t: {
    en: ['UX research & prototypes', 'User research and testing', 'Wireframes and clickable prototypes', 'User flows'],
    fr: ['Recherche UX et prototypes', 'Recherche et tests utilisateurs', 'Maquettes et prototypes cliquables', 'Parcours utilisateur'],
    es: ['Investigación UX y prototipos', 'Investigación y pruebas con usuarios', 'Wireframes y prototipos interactivos', 'Flujos de usuario'] } },
  { id: 'design-system', cat: 'design', t: {
    en: ['Product & brand design', 'UI design and design system', 'Component library', 'Brand guidelines'],
    fr: ['Design produit et image de marque', 'Design d’interface et système de design', 'Bibliothèque de composants', 'Guide de marque'],
    es: ['Diseño de producto y marca', 'Diseño de interfaz y sistema de diseño', 'Biblioteca de componentes', 'Guía de marca'] } },

  // Marketing
  { id: 'mkt-seo', cat: 'marketing', t: {
    en: ['SEO, AEO & GEO', 'Technical audit and on-page work', 'Content and link strategy', 'AI search visibility tracking'],
    fr: ['SEO, AEO et GEO', 'Audit technique et optimisation des pages', 'Stratégie de contenu et de liens', 'Suivi de la visibilité dans les moteurs IA'],
    es: ['SEO, AEO y GEO', 'Auditoría técnica y optimización de páginas', 'Estrategia de contenido y enlaces', 'Seguimiento de visibilidad en buscadores de IA'] } },
  { id: 'mkt-ads', cat: 'marketing', popular: true, t: {
    en: ['Performance marketing', 'Google, Meta and LinkedIn ads', 'A/B testing and conversion tracking', 'Unified monthly reporting'],
    fr: ['Marketing de performance', 'Publicités Google, Meta et LinkedIn', 'Tests A/B et suivi des conversions', 'Rapport mensuel unifié'],
    es: ['Marketing de rendimiento', 'Anuncios en Google, Meta y LinkedIn', 'Pruebas A/B y seguimiento de conversiones', 'Informe mensual unificado'] } },
  { id: 'mkt-social', cat: 'marketing', t: {
    en: ['Social media management', '2–3 platforms, 16–20 posts a month', 'Reels, carousels and community replies', 'Monthly analytics review'],
    fr: ['Gestion des réseaux sociaux', '2 à 3 plateformes, 16 à 20 publications par mois', 'Vidéos courtes, carrousels et gestion de communauté', 'Bilan analytique mensuel'],
    es: ['Gestión de redes sociales', '2 a 3 plataformas, 16 a 20 publicaciones al mes', 'Reels, carruseles y atención a la comunidad', 'Revisión mensual de analítica'] } },

  // Branding
  { id: 'brand-starter', cat: 'branding', t: {
    en: ['Starter branding', 'Logo with three concepts', 'Colour palette and typography', 'Business card and social kit'],
    fr: ['Image de marque de base', 'Logo en trois concepts', 'Palette de couleurs et typographie', 'Carte professionnelle et kit pour les réseaux'],
    es: ['Branding inicial', 'Logotipo con tres conceptos', 'Paleta de color y tipografía', 'Tarjeta de presentación y kit para redes'] } },
  { id: 'brand-growth', cat: 'branding', popular: true, t: {
    en: ['Growth branding', 'Full brand identity and voice', 'Guidelines document, 20–40 pages', 'Pitch deck and templates'],
    fr: ['Image de marque évolutive', 'Identité de marque et ton complets', 'Guide de marque de 20 à 40 pages', 'Présentation investisseurs et gabarits'],
    es: ['Branding de crecimiento', 'Identidad y voz de marca completas', 'Guía de marca de 20 a 40 páginas', 'Presentación para inversionistas y plantillas'] } },
  { id: 'brand-premium', cat: 'branding', t: {
    en: ['Premium brand identity', 'Discovery workshop and strategy', 'Full design system in Figma', 'Motion, web and app UI'],
    fr: ['Identité de marque haut de gamme', 'Atelier de découverte et stratégie', 'Système de design complet dans Figma', 'Animation, interface web et mobile'],
    es: ['Identidad de marca premium', 'Taller de descubrimiento y estrategia', 'Sistema de diseño completo en Figma', 'Motion, interfaz web y de app'] } },

  // Salesforce Implementation
  { id: 'sf-impl-core', cat: 'sf-implementation', popular: true, t: {
    en: ['Core implementation', 'Sales or Service Cloud setup', 'Process-mapped configuration', 'Go-live plan and user training'],
    fr: ['Mise en œuvre de base', 'Configuration de Sales ou Service Cloud', 'Paramétrage aligné sur vos processus', 'Plan de lancement et formation des utilisateurs'],
    es: ['Implementación principal', 'Configuración de Sales o Service Cloud', 'Configuración alineada a tus procesos', 'Plan de lanzamiento y capacitación de usuarios'] } },
  { id: 'sf-impl-multi', cat: 'sf-implementation', t: {
    en: ['Multi-cloud rollout', 'Sales, Service and/or Experience Cloud', 'Cross-team process design', 'Phased rollout plan'],
    fr: ['Déploiement multi-cloud', 'Sales, Service et/ou Experience Cloud', 'Conception de processus interéquipes', 'Plan de déploiement par phases'],
    es: ['Implementación multi-cloud', 'Sales, Service y/o Experience Cloud', 'Diseño de procesos entre equipos', 'Plan de implementación por fases'] } },

  // Salesforce Customization & Development
  { id: 'sf-cust-declarative', cat: 'sf-customization', popular: true, t: {
    en: ['Declarative customization', 'Custom objects and fields', 'Flows and validation rules', 'Page layouts and permissions'],
    fr: ['Personnalisation déclarative', 'Objets et champs personnalisés', 'Flows et règles de validation', 'Présentations de page et permissions'],
    es: ['Personalización declarativa', 'Objetos y campos personalizados', 'Flows y reglas de validación', 'Diseños de página y permisos'] } },
  { id: 'sf-cust-dev', cat: 'sf-customization', t: {
    en: ['Apex & Lightning development', 'Apex triggers and classes', 'Lightning Web Components', 'Test coverage included'],
    fr: ['Développement Apex et Lightning', 'Déclencheurs et classes Apex', 'Composants Lightning Web', 'Couverture de tests incluse'],
    es: ['Desarrollo en Apex y Lightning', 'Triggers y clases Apex', 'Componentes Lightning Web', 'Cobertura de pruebas incluida'] } },

  // Salesforce Integration
  { id: 'sf-int-single', cat: 'sf-integration', popular: true, t: {
    en: ['Single-system integration', 'One external system connected', 'Field mapping and error handling', 'Monitoring and alerts'],
    fr: ['Intégration à un système', 'Un système externe connecté', 'Mappage des champs et gestion des erreurs', 'Supervision et alertes'],
    es: ['Integración de un sistema', 'Un sistema externo conectado', 'Mapeo de campos y manejo de errores', 'Monitoreo y alertas'] } },
  { id: 'sf-int-multi', cat: 'sf-integration', t: {
    en: ['Multi-system integration', 'ERP, marketing and data warehouse', 'Middleware or API-based sync', 'Ongoing integration monitoring'],
    fr: ['Intégration multi-systèmes', 'ERP, marketing et entrepôt de données', 'Synchronisation via intergiciel ou API', 'Supervision continue des intégrations'],
    es: ['Integración multisistema', 'ERP, marketing y almacén de datos', 'Sincronización vía middleware o API', 'Monitoreo continuo de integraciones'] } },

  // Salesforce Data Migration
  { id: 'sf-mig-standard', cat: 'sf-migration', popular: true, t: {
    en: ['Standard migration', 'Legacy CRM or spreadsheet data', 'Cleansing and deduplication', 'Validated data load'],
    fr: ['Migration standard', 'Données d’un CRM existant ou de tableurs', 'Nettoyage et dédoublonnage', 'Chargement de données validé'],
    es: ['Migración estándar', 'Datos de un CRM anterior o de hojas de cálculo', 'Depuración y eliminación de duplicados', 'Carga de datos validada'] } },
  { id: 'sf-mig-complex', cat: 'sf-migration', t: {
    en: ['Complex migration', 'Multiple sources and objects', 'Historical data and attachments', 'Reconciliation and sign-off'],
    fr: ['Migration complexe', 'Plusieurs sources et objets', 'Données historiques et pièces jointes', 'Réconciliation et validation finale'],
    es: ['Migración compleja', 'Múltiples fuentes y objetos', 'Datos históricos y archivos adjuntos', 'Conciliación y aprobación final'] } },

  // Salesforce Admin & Managed Support
  { id: 'sf-admin-retainer', cat: 'sf-admin', popular: true, t: {
    en: ['Managed support retainer', 'User and permission management', 'Ongoing configuration changes', 'Monthly health report'],
    fr: ['Forfait de soutien géré', 'Gestion des utilisateurs et des permissions', 'Modifications de configuration continues', 'Rapport de santé mensuel'],
    es: ['Soporte gestionado por contrato', 'Gestión de usuarios y permisos', 'Cambios de configuración continuos', 'Informe mensual de estado'] } },
  { id: 'sf-admin-oncall', cat: 'sf-admin', t: {
    en: ['On-call admin support', 'Priority response for urgent issues', 'Troubleshooting and bug fixes', 'Hours banked month to month'],
    fr: ['Soutien administratif sur demande', 'Réponse prioritaire aux problèmes urgents', 'Dépannage et corrections', 'Heures reportables d’un mois à l’autre'],
    es: ['Soporte administrativo bajo demanda', 'Respuesta prioritaria a problemas urgentes', 'Resolución de errores y problemas', 'Horas acumulables mes a mes'] } },

  // Salesforce CRM Consulting
  { id: 'sf-consult-health', cat: 'sf-consulting', popular: true, t: {
    en: ['Salesforce health check', 'Full org audit', 'Prioritized findings report', 'Roadmap for fixes and adoption'],
    fr: ['Bilan de santé Salesforce', 'Audit complet de l’organisation', 'Rapport de constats priorisés', 'Feuille de route pour corrections et adoption'],
    es: ['Diagnóstico de Salesforce', 'Auditoría completa de la organización', 'Informe de hallazgos priorizados', 'Hoja de ruta de correcciones y adopción'] } },
  { id: 'sf-consult-advisory', cat: 'sf-consulting', t: {
    en: ['Ongoing CRM advisory', 'Quarterly strategy sessions', 'Release readiness reviews', 'Adoption and reporting guidance'],
    fr: ['Conseil CRM continu', 'Séances de stratégie trimestrielles', 'Revues de préparation aux versions', 'Accompagnement sur l’adoption et les rapports'],
    es: ['Asesoría continua de CRM', 'Sesiones trimestrales de estrategia', 'Revisiones de preparación para versiones', 'Guía de adopción y reportes'] } },

  // SAP Implementation
  { id: 'sap-impl-core', cat: 'sap-implementation', popular: true, t: {
    en: ['Core implementation', 'Single-module rollout', 'Process-mapped configuration', 'Go-live plan and user training'],
    fr: ['Mise en œuvre de base', 'Déploiement à un seul module', 'Configuration alignée sur vos processus', 'Plan de lancement et formation des utilisateurs'],
    es: ['Implementación principal', 'Despliegue de un solo módulo', 'Configuración alineada a tus procesos', 'Plan de lanzamiento y capacitación de usuarios'] } },
  { id: 'sap-impl-multi', cat: 'sap-implementation', t: {
    en: ['Multi-module rollout', 'FI/CO, MM and/or SD', 'Cross-team process design', 'Phased rollout plan'],
    fr: ['Déploiement multi-modules', 'FI/CO, MM et/ou SD', 'Conception de processus interéquipes', 'Plan de déploiement par phases'],
    es: ['Implementación multi-módulo', 'FI/CO, MM y/o SD', 'Diseño de procesos entre equipos', 'Plan de implementación por fases'] } },

  // SAP Migration & Upgrade
  { id: 'sap-mig-assessment', cat: 'sap-migration', popular: true, t: {
    en: ['Migration assessment', 'System and custom code review', 'Data readiness report', 'Migration roadmap'],
    fr: ['Évaluation de migration', 'Revue du système et du code personnalisé', 'Rapport de préparation des données', 'Feuille de route de migration'],
    es: ['Evaluación de migración', 'Revisión del sistema y código personalizado', 'Informe de preparación de datos', 'Hoja de ruta de migración'] } },
  { id: 'sap-mig-full', cat: 'sap-migration', t: {
    en: ['Full S/4HANA migration', 'Sandbox and production migration', 'Custom code remediation', 'Planned cutover with rollback'],
    fr: ['Migration complète vers S/4HANA', 'Migration en bac à sable et en production', 'Correction du code personnalisé', 'Bascule planifiée avec retour arrière'],
    es: ['Migración completa a S/4HANA', 'Migración en sandbox y producción', 'Corrección de código personalizado', 'Cambio planificado con reversión'] } },

  // SAP Integration
  { id: 'sap-int-single', cat: 'sap-integration', popular: true, t: {
    en: ['Single-system integration', 'One external system connected', 'Field mapping and error handling', 'Monitoring and alerts'],
    fr: ['Intégration à un système', 'Un système externe connecté', 'Mappage des champs et gestion des erreurs', 'Supervision et alertes'],
    es: ['Integración de un sistema', 'Un sistema externo conectado', 'Mapeo de campos y manejo de errores', 'Monitoreo y alertas'] } },
  { id: 'sap-int-multi', cat: 'sap-integration', t: {
    en: ['Multi-system integration', 'CRM, e-commerce and warehouse', 'Middleware or API-based sync', 'Ongoing integration monitoring'],
    fr: ['Intégration multi-systèmes', 'CRM, commerce électronique et entrepôt', 'Synchronisation via intergiciel ou API', 'Supervision continue des intégrations'],
    es: ['Integración multisistema', 'CRM, comercio electrónico y almacén', 'Sincronización vía middleware o API', 'Monitoreo continuo de integraciones'] } },

  // SAP Support & Managed Services
  { id: 'sap-sup-retainer', cat: 'sap-support', popular: true, t: {
    en: ['Managed support retainer', 'Configuration and authorization changes', 'Ongoing troubleshooting', 'Monthly health report'],
    fr: ['Forfait de soutien géré', 'Modifications de configuration et d’autorisations', 'Dépannage continu', 'Rapport de santé mensuel'],
    es: ['Soporte gestionado por contrato', 'Cambios de configuración y autorizaciones', 'Resolución de problemas continua', 'Informe mensual de estado'] } },
  { id: 'sap-sup-oncall', cat: 'sap-support', t: {
    en: ['On-call support', 'Priority response for urgent issues', 'Hours banked month to month', 'Escalation path included'],
    fr: ['Soutien sur demande', 'Réponse prioritaire aux problèmes urgents', 'Heures reportables d’un mois à l’autre', 'Voie d’escalade incluse'],
    es: ['Soporte bajo demanda', 'Respuesta prioritaria a problemas urgentes', 'Horas acumulables mes a mes', 'Ruta de escalamiento incluida'] } },

  // Microsoft 365 Migration
  { id: 'm365-mig-standard', cat: 'm365-migration', popular: true, t: {
    en: ['Standard migration', 'Mailboxes, files and Teams data', 'Pilot then full rollout', 'Minimal-downtime cutover'],
    fr: ['Migration standard', 'Boîtes courriel, fichiers et données Teams', 'Pilote puis déploiement complet', 'Bascule à interruption minimale'],
    es: ['Migración estándar', 'Buzones, archivos y datos de Teams', 'Piloto y luego despliegue completo', 'Cambio con interrupción mínima'] } },
  { id: 'm365-mig-complex', cat: 'm365-migration', t: {
    en: ['Complex migration', 'Multiple source systems', 'Large mailbox and file volumes', 'Extended validation and reconciliation'],
    fr: ['Migration complexe', 'Plusieurs systèmes sources', 'Gros volumes de boîtes et de fichiers', 'Validation et réconciliation étendues'],
    es: ['Migración compleja', 'Múltiples sistemas de origen', 'Grandes volúmenes de buzones y archivos', 'Validación y conciliación extendidas'] } },

  // SharePoint & Intranet
  { id: 'm365-sp-starter', cat: 'm365-sharepoint', popular: true, t: {
    en: ['Starter intranet', 'Single site with core libraries', 'Standard navigation and branding', 'Launch training included'],
    fr: ['Intranet de base', 'Site unique avec bibliothèques essentielles', 'Navigation et image de marque standards', 'Formation de lancement incluse'],
    es: ['Intranet inicial', 'Sitio único con bibliotecas esenciales', 'Navegación y marca estándar', 'Capacitación de lanzamiento incluida'] } },
  { id: 'm365-sp-custom', cat: 'm365-sharepoint', t: {
    en: ['Custom intranet', 'Multiple sites and hub structure', 'Custom workflows and branding', 'Ongoing content governance plan'],
    fr: ['Intranet personnalisé', 'Plusieurs sites et structure de hub', 'Flux et image de marque personnalisés', 'Plan de gouvernance du contenu continu'],
    es: ['Intranet personalizada', 'Varios sitios y estructura de hub', 'Flujos y marca personalizados', 'Plan continuo de gobernanza de contenido'] } },

  // Power Platform Automation
  { id: 'm365-power-app', cat: 'm365-power', popular: true, t: {
    en: ['Single app or flow', 'One Power App or Power Automate flow', 'Connector setup', 'Testing and documentation'],
    fr: ['Une application ou un flux', 'Une Power App ou un flux Power Automate', 'Configuration des connecteurs', 'Tests et documentation'],
    es: ['Una app o flujo', 'Una Power App o flujo de Power Automate', 'Configuración de conectores', 'Pruebas y documentación'] } },
  { id: 'm365-power-suite', cat: 'm365-power', t: {
    en: ['Automation suite', 'Multiple connected apps and flows', 'Power BI dashboard included', 'Governance and training'],
    fr: ['Suite d’automatisation', 'Plusieurs applications et flux connectés', 'Tableau de bord Power BI inclus', 'Gouvernance et formation'],
    es: ['Suite de automatización', 'Varias apps y flujos conectados', 'Panel de Power BI incluido', 'Gobernanza y capacitación'] } },

  // Microsoft 365 Security & Support
  { id: 'm365-sec-baseline', cat: 'm365-security', popular: true, t: {
    en: ['Security baseline', 'Conditional access and MFA', 'Device compliance policies', 'Configuration report'],
    fr: ['Base de sécurité', 'Accès conditionnel et authentification multifacteur', 'Politiques de conformité des appareils', 'Rapport de configuration'],
    es: ['Base de seguridad', 'Acceso condicional y MFA', 'Políticas de cumplimiento de dispositivos', 'Informe de configuración'] } },
  { id: 'm365-sec-managed', cat: 'm365-security', t: {
    en: ['Managed security & support', 'Ongoing policy tuning', 'User and license management', 'Monthly security report'],
    fr: ['Sécurité et soutien gérés', 'Ajustement continu des politiques', 'Gestion des utilisateurs et des licences', 'Rapport de sécurité mensuel'],
    es: ['Seguridad y soporte gestionados', 'Ajuste continuo de políticas', 'Gestión de usuarios y licencias', 'Informe mensual de seguridad'] } },

  // Bitrix24 Implementation
  { id: 'bx-impl-core', cat: 'bx-implementation', popular: true, t: {
    en: ['Core implementation', 'CRM and task configuration', 'Data migration included', 'Go-live plan and training'],
    fr: ['Mise en œuvre de base', 'Configuration du CRM et des tâches', 'Migration des données incluse', 'Plan de lancement et formation'],
    es: ['Implementación principal', 'Configuración de CRM y tareas', 'Migración de datos incluida', 'Plan de lanzamiento y capacitación'] } },
  { id: 'bx-impl-multi', cat: 'bx-implementation', t: {
    en: ['Multi-department rollout', 'Sales, tasks and projects together', 'Cross-team process design', 'Phased rollout plan'],
    fr: ['Déploiement multi-départements', 'Ventes, tâches et projets réunis', 'Conception de processus interéquipes', 'Plan de déploiement par phases'],
    es: ['Implementación multidepartamento', 'Ventas, tareas y proyectos juntos', 'Diseño de procesos entre equipos', 'Plan de implementación por fases'] } },

  // Bitrix24 Customization & Automation
  { id: 'bx-cust-automation', cat: 'bx-customization', popular: true, t: {
    en: ['Automation package', 'Custom fields and pipelines', 'Automation rules', 'Approval workflows'],
    fr: ['Forfait d’automatisation', 'Champs et pipelines personnalisés', 'Règles d’automatisation', 'Flux d’approbation'],
    es: ['Paquete de automatización', 'Campos y pipelines personalizados', 'Reglas de automatización', 'Flujos de aprobación'] } },
  { id: 'bx-cust-advanced', cat: 'bx-customization', t: {
    en: ['Advanced customization', 'Complex business processes', 'Custom reporting', 'Ongoing refinement rounds'],
    fr: ['Personnalisation avancée', 'Processus d’affaires complexes', 'Rapports personnalisés', 'Cycles de raffinement continus'],
    es: ['Personalización avanzada', 'Procesos de negocio complejos', 'Informes personalizados', 'Rondas continuas de refinamiento'] } },

  // Bitrix24 Integration
  { id: 'bx-int-single', cat: 'bx-integration', popular: true, t: {
    en: ['Single-system integration', 'One external system connected', 'Field mapping and error handling', 'Monitoring included'],
    fr: ['Intégration à un système', 'Un système externe connecté', 'Mappage des champs et gestion des erreurs', 'Supervision incluse'],
    es: ['Integración de un sistema', 'Un sistema externo conectado', 'Mapeo de campos y manejo de errores', 'Monitoreo incluido'] } },
  { id: 'bx-int-multi', cat: 'bx-integration', t: {
    en: ['Multi-system integration', 'Telephony, accounting and website forms', 'Two-way data sync', 'Ongoing integration monitoring'],
    fr: ['Intégration multi-systèmes', 'Téléphonie, comptabilité et formulaires web', 'Synchronisation bidirectionnelle', 'Supervision continue des intégrations'],
    es: ['Integración multisistema', 'Telefonía, contabilidad y formularios web', 'Sincronización bidireccional', 'Monitoreo continuo de integraciones'] } },

  // Bitrix24 Training & Support
  { id: 'bx-sup-training', cat: 'bx-support', popular: true, t: {
    en: ['Team training package', 'Role-based live sessions', 'Practice exercises', 'Follow-up Q&A session'],
    fr: ['Forfait de formation d’équipe', 'Séances en direct selon les rôles', 'Exercices pratiques', 'Séance de questions de suivi'],
    es: ['Paquete de capacitación de equipo', 'Sesiones en vivo por rol', 'Ejercicios prácticos', 'Sesión de preguntas de seguimiento'] } },
  { id: 'bx-sup-retainer', cat: 'bx-support', t: {
    en: ['Ongoing support retainer', 'Help desk access', 'Periodic check-ins', 'New feature training'],
    fr: ['Forfait de soutien continu', 'Accès au service d’assistance', 'Suivis périodiques', 'Formation sur les nouvelles fonctions'],
    es: ['Contrato de soporte continuo', 'Acceso a mesa de ayuda', 'Seguimientos periódicos', 'Capacitación en nuevas funciones'] } },
];