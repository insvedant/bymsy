import type { Locale } from './i18n';
import type { ServiceId } from './site';

export type VisualType = 'storefront' | 'dashboard' | 'mobile' | 'assistant' | 'dapp' | 'analytics';

export type Project = {
  slug: string;
  service: ServiceId;
  /**
   * 'concept' = a build made to show our approach (shown with a "Concept project" badge).
   * Switch to 'client' only for real delivered work, and replace the copy with the real story.
   */
  kind: 'concept' | 'client';
  visual: VisualType;
  tags: string[];
  t: Record<Locale, { title: string; summary: string; challenge: string; solution: string; features: string[] }>;
};

export const PROJECTS: Project[] = [
  {
    slug: 'outdoor-gear-storefront', service: 'web', kind: 'concept', visual: 'storefront',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    t: {
      en: { title: 'Outdoor gear e-commerce store', summary: 'A fast, mobile-first store with instant filters and a one-page checkout.',
        challenge: 'Shoppers abandon stores that load slowly and make filtering awkward, especially on phones.',
        solution: 'We designed a catalogue with instant filters, server-rendered pages for speed and search visibility, and a single-page checkout with saved carts.',
        features: ['Instant search and filters', 'Server-rendered product pages', 'One-page checkout', 'Admin for products and orders'] },
      fr: { title: 'Boutique en ligne d’équipement de plein air', summary: 'Une boutique rapide, pensée d’abord pour le mobile, avec filtres instantanés et paiement en une page.',
        challenge: 'Les acheteurs abandonnent les boutiques lentes et au filtrage maladroit, surtout sur mobile.',
        solution: 'Nous avons conçu un catalogue à filtres instantanés, des pages rendues côté serveur pour la vitesse et la visibilité, et un paiement en une seule page avec paniers sauvegardés.',
        features: ['Recherche et filtres instantanés', 'Pages produit rendues côté serveur', 'Paiement en une page', 'Administration des produits et des commandes'] },
      es: { title: 'Tienda en línea de equipo para actividades al aire libre', summary: 'Una tienda rápida, pensada primero para móviles, con filtros instantáneos y pago en una sola página.',
        challenge: 'Los compradores abandonan las tiendas lentas y con filtros torpes, sobre todo en el móvil.',
        solution: 'Diseñamos un catálogo con filtros instantáneos, páginas renderizadas en el servidor para velocidad y visibilidad en buscadores, y un pago en una sola página con carritos guardados.',
        features: ['Búsqueda y filtros instantáneos', 'Páginas de producto renderizadas en el servidor', 'Pago en una sola página', 'Administración de productos y pedidos'] },
    },
  },
  {
    slug: 'field-service-dashboard', service: 'web', kind: 'concept', visual: 'dashboard',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
    t: {
      en: { title: 'Field service operations dashboard', summary: 'One live view of jobs, crews and equipment for a service company.',
        challenge: 'Dispatch teams juggle spreadsheets, calls and texts to keep track of jobs across remote sites.',
        solution: 'A real-time dashboard with a job board, crew tracking and automatic status updates, backed by an API other tools can plug into.',
        features: ['Live job board', 'Crew and equipment tracking', 'Role-based access', 'Exportable reports'] },
      fr: { title: 'Tableau de bord des opérations de service sur le terrain', summary: 'Une vue en direct des chantiers, des équipes et de l’équipement pour une entreprise de services.',
        challenge: 'Les équipes de répartition jonglent avec des chiffriers, des appels et des textos pour suivre les travaux sur des sites éloignés.',
        solution: 'Un tableau de bord en temps réel avec tableau des travaux, suivi des équipes et mises à jour automatiques du statut, appuyé par une API où d’autres outils peuvent se brancher.',
        features: ['Tableau des travaux en direct', 'Suivi des équipes et de l’équipement', 'Accès selon les rôles', 'Rapports exportables'] },
      es: { title: 'Panel de operaciones de servicio en campo', summary: 'Una vista en vivo de trabajos, cuadrillas y equipos para una empresa de servicios.',
        challenge: 'Los equipos de despacho manejan hojas de cálculo, llamadas y mensajes para seguir los trabajos en sitios remotos.',
        solution: 'Un panel en tiempo real con tablero de trabajos, seguimiento de cuadrillas y actualizaciones automáticas de estado, respaldado por una API a la que se conectan otras herramientas.',
        features: ['Tablero de trabajos en vivo', 'Seguimiento de cuadrillas y equipos', 'Acceso según roles', 'Informes exportables'] },
    },
  },
  {
    slug: 'clinic-booking-app', service: 'mobile', kind: 'concept', visual: 'mobile',
    tags: ['React Native', 'Node.js', 'MongoDB', 'Firebase'],
    t: {
      en: { title: 'Clinic booking app', summary: 'Book, reschedule and get reminders in a few taps.',
        challenge: 'Phone-based booking leads to missed calls, no-shows and a busy front desk.',
        solution: 'A cross-platform app with real-time availability, reminders and a staff view, designed with privacy in mind from the first screen.',
        features: ['Real-time availability', 'Push and SMS reminders', 'Reschedule in two taps', 'Front-desk staff view'] },
      fr: { title: 'Application de prise de rendez-vous pour clinique', summary: 'Réservez, reportez et recevez des rappels en quelques touches.',
        challenge: 'La prise de rendez-vous par téléphone entraîne des appels manqués, des absences et une réception débordée.',
        solution: 'Une application multiplateforme avec disponibilités en temps réel, rappels et vue pour le personnel, pensée dès le premier écran dans le respect de la vie privée.',
        features: ['Disponibilités en temps réel', 'Rappels par notification et texto', 'Report en deux touches', 'Vue pour la réception'] },
      es: { title: 'App de reservas para clínicas', summary: 'Reserva, reprograma y recibe recordatorios en unos toques.',
        challenge: 'Reservar por teléfono provoca llamadas perdidas, ausencias y una recepción saturada.',
        solution: 'Una app multiplataforma con disponibilidad en tiempo real, recordatorios y vista para el personal, diseñada con la privacidad en mente desde la primera pantalla.',
        features: ['Disponibilidad en tiempo real', 'Recordatorios por notificación y SMS', 'Reprogramación en dos toques', 'Vista para recepción'] },
    },
  },
  {
    slug: 'ai-support-assistant', service: 'ai', kind: 'concept', visual: 'assistant',
    tags: ['Python', 'FastAPI', 'OpenAI API', 'Vector search'],
    t: {
      en: { title: 'AI support assistant', summary: 'A chat assistant that answers from a company’s own help content.',
        challenge: 'Support teams answer the same questions again and again while customers wait.',
        solution: 'We index the help centre, ground every answer in its sources and hand over to a person when confidence is low.',
        features: ['Answers cite their sources', 'Human handoff', 'Website and messaging widget', 'Conversation analytics'] },
      fr: { title: 'Assistant de soutien par IA', summary: 'Un assistant conversationnel qui répond à partir du contenu d’aide de l’entreprise.',
        challenge: 'Les équipes de soutien répondent sans cesse aux mêmes questions pendant que les clients attendent.',
        solution: 'Nous indexons le centre d’aide, appuyons chaque réponse sur ses sources et transférons à une personne lorsque la confiance est faible.',
        features: ['Réponses avec sources citées', 'Transfert à un humain', 'Widget pour site web et messagerie', 'Analytique des conversations'] },
      es: { title: 'Asistente de soporte con IA', summary: 'Un asistente de chat que responde con el propio contenido de ayuda de la empresa.',
        challenge: 'Los equipos de soporte responden las mismas preguntas una y otra vez mientras los clientes esperan.',
        solution: 'Indexamos el centro de ayuda, basamos cada respuesta en sus fuentes y pasamos a una persona cuando la confianza es baja.',
        features: ['Respuestas con fuentes citadas', 'Traspaso a una persona', 'Widget para sitio web y mensajería', 'Analítica de conversaciones'] },
    },
  },
  {
    slug: 'token-vesting-dapp', service: 'blockchain', kind: 'concept', visual: 'dapp',
    tags: ['Solidity', 'Hardhat', 'Next.js', 'ethers.js'],
    t: {
      en: { title: 'Token vesting dApp', summary: 'Schedule, track and claim token vesting on-chain.',
        challenge: 'Teams manage vesting in spreadsheets, which is opaque and easy to get wrong.',
        solution: 'Smart contracts with an automated test suite, plus a dashboard where recipients see schedules and claim what has vested.',
        features: ['Cliff and linear schedules', 'Wallet connection', 'Claim history', 'Test suite with edge cases'] },
      fr: { title: 'dApp d’acquisition progressive de jetons', summary: 'Planifiez, suivez et réclamez l’acquisition de jetons sur la chaîne.',
        challenge: 'Les équipes gèrent l’acquisition dans des chiffriers, ce qui est opaque et source d’erreurs.',
        solution: 'Des contrats intelligents dotés d’une suite de tests automatisés, et un tableau de bord où les bénéficiaires consultent les calendriers et réclament ce qui est acquis.',
        features: ['Calendriers à période de blocage et linéaires', 'Connexion de portefeuille', 'Historique des réclamations', 'Tests des cas limites'] },
      es: { title: 'dApp de liberación gradual de tokens', summary: 'Programa, sigue y reclama la liberación de tokens en la cadena.',
        challenge: 'Los equipos gestionan la liberación en hojas de cálculo, algo opaco y propenso a errores.',
        solution: 'Contratos inteligentes con una batería de pruebas automatizadas y un panel donde los beneficiarios ven los calendarios y reclaman lo liberado.',
        features: ['Calendarios con periodo de espera y lineales', 'Conexión de billetera', 'Historial de reclamaciones', 'Pruebas de casos límite'] },
    },
  },
  {
    slug: 'search-ai-visibility-dashboard', service: 'marketing', kind: 'concept', visual: 'analytics',
    tags: ['Next.js', 'Node.js', 'GA4 API', 'Search Console API'],
    t: {
      en: { title: 'Search and AI visibility dashboard', summary: 'Track rankings, traffic and AI-answer citations in one view.',
        challenge: 'Marketing data lives in five tools, so reporting takes days and slows decisions.',
        solution: 'A dashboard that pulls search, analytics and citation data into one view that is ready for the monthly report.',
        features: ['Rank and traffic trends', 'AI citation tracking', 'Monthly report export', 'Goal and funnel view'] },
      fr: { title: 'Tableau de bord de visibilité dans les moteurs de recherche et d’IA', summary: 'Suivez les classements, le trafic et les citations dans les réponses d’IA en une seule vue.',
        challenge: 'Les données marketing sont réparties dans cinq outils : les rapports prennent des jours et ralentissent les décisions.',
        solution: 'Un tableau de bord qui réunit les données de recherche, d’analytique et de citations dans une vue prête pour le rapport mensuel.',
        features: ['Tendances de classement et de trafic', 'Suivi des citations par l’IA', 'Export du rapport mensuel', 'Vue des objectifs et de l’entonnoir'] },
      es: { title: 'Panel de visibilidad en buscadores y en IA', summary: 'Sigue posiciones, tráfico y citas en respuestas de IA en una sola vista.',
        challenge: 'Los datos de marketing están en cinco herramientas, así que los informes tardan días y frenan las decisiones.',
        solution: 'Un panel que reúne datos de búsqueda, analítica y citas en una sola vista lista para el informe mensual.',
        features: ['Tendencias de posiciones y tráfico', 'Seguimiento de citas en IA', 'Exportación del informe mensual', 'Vista de objetivos y embudo'] },
    },
  },
];

export const projectBySlug = (slug: string) => PROJECTS.find((p) => p.slug === slug);
