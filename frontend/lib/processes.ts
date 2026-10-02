import type { Locale } from './i18n';
import type { ServiceId } from './site';

export type ProcessStep = { t: string; d: string; dur: string; out: string; b: string[] };
type ByLocale = Record<Locale, ProcessStep[]>;

/** Per-service "how it goes" steps, shown on each service page's pinned process section. */
export const PROCESSES: Record<ServiceId, ByLocale> = {
  web: {
    en: [
      { t: 'Discovery & planning', d: 'Content, integrations and technical needs mapped out before a line of code is written.', dur: '1 week', out: 'A confirmed sitemap and scope', b: ['Content audit', 'Sitemap & user flows', 'Tech stack confirmed', 'Integration list'] },
      { t: 'Design', d: 'Wireframes and a visual design system built around your brand and goals.', dur: '1–2 weeks', out: 'A design you can walk through', b: ['Wireframes', 'Visual design', 'Responsive layouts', 'Design review'] },
      { t: 'Build & QA', d: 'Pages built, connected to a CMS where needed, and tested across devices and browsers.', dur: '2–6 weeks', out: 'A tested site on staging', b: ['Component build', 'CMS setup', 'Cross-browser testing', 'Performance pass'] },
      { t: 'Launch & handover', d: 'Deployed live with analytics wired up, plus a short walkthrough for your team.', dur: 'Ongoing', out: 'A live site, and a team that knows it', b: ['Go-live', 'Analytics & SEO basics', 'Team walkthrough', '30-day support window'] },
    ],
    fr: [
      { t: 'Découverte et planification', d: 'Contenu, intégrations et besoins techniques cartographiés avant la moindre ligne de code.', dur: '1 semaine', out: 'Un plan du site et une portée confirmés', b: ['Audit de contenu', 'Plan du site et parcours utilisateurs', 'Pile technologique confirmée', 'Liste des intégrations'] },
      { t: 'Design', d: 'Maquettes et système visuel construits autour de votre marque et de vos objectifs.', dur: '1 à 2 semaines', out: 'Un design que vous pouvez parcourir', b: ['Maquettes filaires', 'Design visuel', 'Mises en page adaptatives', 'Revue de design'] },
      { t: 'Développement et tests', d: 'Pages construites, connectées à un CMS au besoin, et testées sur appareils et navigateurs.', dur: '2 à 6 semaines', out: 'Un site testé en préproduction', b: ['Construction des composants', 'Configuration du CMS', 'Tests multi-navigateurs', 'Vérification de performance'] },
      { t: 'Lancement et transfert', d: 'Mis en ligne avec l’analytique branchée, et une courte présentation pour votre équipe.', dur: 'Continu', out: 'Un site en ligne, et une équipe qui le maîtrise', b: ['Mise en ligne', 'Analytique et bases SEO', 'Présentation à l’équipe', 'Soutien pendant 30 jours'] },
    ],
    es: [
      { t: 'Descubrimiento y planificación', d: 'Contenido, integraciones y necesidades técnicas definidos antes de escribir una sola línea de código.', dur: '1 semana', out: 'Un mapa del sitio y un alcance confirmados', b: ['Auditoría de contenido', 'Mapa del sitio y flujos de usuario', 'Stack tecnológico confirmado', 'Lista de integraciones'] },
      { t: 'Diseño', d: 'Wireframes y un sistema de diseño visual construidos en torno a tu marca y objetivos.', dur: '1 a 2 semanas', out: 'Un diseño que puedes recorrer', b: ['Wireframes', 'Diseño visual', 'Diseños adaptables', 'Revisión de diseño'] },
      { t: 'Desarrollo y pruebas', d: 'Páginas construidas, conectadas a un CMS si hace falta, y probadas en dispositivos y navegadores.', dur: '2 a 6 semanas', out: 'Un sitio probado en preproducción', b: ['Construcción de componentes', 'Configuración del CMS', 'Pruebas multinavegador', 'Revisión de rendimiento'] },
      { t: 'Lanzamiento y traspaso', d: 'Desplegado en vivo con la analítica configurada, y una breve capacitación para tu equipo.', dur: 'Continuo', out: 'Un sitio en vivo, y un equipo que lo domina', b: ['Puesta en marcha', 'Analítica y SEO básico', 'Capacitación al equipo', 'Soporte de 30 días'] },
    ],
  },
  mobile: {
    en: [
      { t: 'Discovery & platform plan', d: 'Core flows, target platforms and technical approach agreed before design starts.', dur: '1–2 weeks', out: 'A confirmed platform and feature plan', b: ['User flows', 'Platform decision', 'Feature list', 'Technical plan'] },
      { t: 'Design & prototype', d: 'Screens designed and wired into a clickable prototype you can test before development starts.', dur: '2–3 weeks', out: 'A prototype you can tap through', b: ['UI screens', 'Clickable prototype', 'Design system', 'Usability check'] },
      { t: 'Build & test', d: 'The app built in sprints, with weekly builds you can install and try on a real device.', dur: '6–12 weeks', out: 'A working build on your phone', b: ['Sprint builds', 'Device testing', 'API integration', 'Bug triage'] },
      { t: 'Store submission', d: 'Store listings prepared and the app submitted, with review feedback handled for you.', dur: '1–2 weeks', out: 'An app live on the store', b: ['Store assets', 'App Store & Play submission', 'Review handling', 'Launch monitoring'] },
    ],
    fr: [
      { t: 'Découverte et choix de plateforme', d: 'Parcours principaux, plateformes cibles et approche technique convenus avant le design.', dur: '1 à 2 semaines', out: 'Une plateforme et une liste de fonctions confirmées', b: ['Parcours utilisateurs', 'Choix de la plateforme', 'Liste des fonctionnalités', 'Plan technique'] },
      { t: 'Design et prototype', d: 'Écrans conçus et assemblés en un prototype cliquable à tester avant le développement.', dur: '2 à 3 semaines', out: 'Un prototype que vous pouvez tester', b: ['Écrans d’interface', 'Prototype cliquable', 'Système de design', 'Vérification d’utilisabilité'] },
      { t: 'Développement et tests', d: 'L’application construite par sprints, avec des versions hebdomadaires installables sur un vrai appareil.', dur: '6 à 12 semaines', out: 'Une version fonctionnelle sur votre téléphone', b: ['Versions par sprint', 'Tests sur appareil', 'Intégration API', 'Tri des anomalies'] },
      { t: 'Publication sur les boutiques', d: 'Fiches de boutique préparées et application soumise, suivi des retours d’examen inclus.', dur: '1 à 2 semaines', out: 'Une application en ligne sur la boutique', b: ['Visuels de fiche', 'Soumission App Store et Play', 'Suivi de l’examen', 'Surveillance du lancement'] },
    ],
    es: [
      { t: 'Descubrimiento y plan de plataforma', d: 'Flujos principales, plataformas objetivo y enfoque técnico acordados antes del diseño.', dur: '1 a 2 semanas', out: 'Una plataforma y lista de funciones confirmadas', b: ['Flujos de usuario', 'Decisión de plataforma', 'Lista de funciones', 'Plan técnico'] },
      { t: 'Diseño y prototipo', d: 'Pantallas diseñadas y unidas en un prototipo interactivo que puedes probar antes del desarrollo.', dur: '2 a 3 semanas', out: 'Un prototipo que puedes probar', b: ['Pantallas de interfaz', 'Prototipo interactivo', 'Sistema de diseño', 'Prueba de usabilidad'] },
      { t: 'Desarrollo y pruebas', d: 'La app construida en sprints, con versiones semanales que puedes instalar en un dispositivo real.', dur: '6 a 12 semanas', out: 'Una versión funcional en tu teléfono', b: ['Versiones por sprint', 'Pruebas en dispositivo', 'Integración de API', 'Triage de errores'] },
      { t: 'Publicación en tiendas', d: 'Fichas de tienda preparadas y app enviada, con el seguimiento de la revisión incluido.', dur: '1 a 2 semanas', out: 'Una app en vivo en la tienda', b: ['Materiales de ficha', 'Envío a App Store y Play', 'Seguimiento de revisión', 'Monitoreo del lanzamiento'] },
    ],
  },
  ai: {
    en: [
      { t: 'Discovery & data assessment', d: 'We review your data, use case and constraints to confirm AI is the right tool for the job.', dur: '1–2 weeks', out: 'A validated use case and data plan', b: ['Use-case review', 'Data audit', 'Feasibility check', 'Success metrics'] },
      { t: 'Design & prototype', d: 'A working proof of concept built against real or representative data to validate the approach.', dur: '2–4 weeks', out: 'A working proof of concept', b: ['Approach selection', 'Prompt or model design', 'Proof of concept', 'Early testing'] },
      { t: 'Build & integrate', d: 'The system hardened, connected to your product, and tested against edge cases.', dur: '4–8 weeks', out: 'A production-ready system', b: ['Production build', 'App integration', 'Edge-case testing', 'Guardrails added'] },
      { t: 'Launch & monitor', d: 'Deployed with monitoring in place so accuracy and cost stay visible after launch.', dur: 'Ongoing', out: 'A live system you can watch', b: ['Go-live', 'Usage monitoring', 'Feedback loop', 'Retraining plan'] },
    ],
    fr: [
      { t: 'Découverte et évaluation des données', d: 'Nous examinons votre cas d’usage, vos données et vos contraintes pour confirmer que l’IA est le bon outil.', dur: '1 à 2 semaines', out: 'Un cas d’usage validé et un plan de données', b: ['Revue du cas d’usage', 'Audit des données', 'Étude de faisabilité', 'Indicateurs de succès'] },
      { t: 'Design et prototype', d: 'Une preuve de concept fonctionnelle bâtie sur des données réelles ou représentatives pour valider l’approche.', dur: '2 à 4 semaines', out: 'Une preuve de concept fonctionnelle', b: ['Choix de l’approche', 'Conception du prompt ou du modèle', 'Preuve de concept', 'Tests préliminaires'] },
      { t: 'Développement et intégration', d: 'Le système consolidé, connecté à votre produit, et testé sur des cas limites.', dur: '4 à 8 semaines', out: 'Un système prêt pour la production', b: ['Version de production', 'Intégration à l’application', 'Tests des cas limites', 'Garde-fous ajoutés'] },
      { t: 'Lancement et suivi', d: 'Déployé avec une supervision en place pour garder la précision et le coût visibles après le lancement.', dur: 'Continu', out: 'Un système en ligne que vous pouvez surveiller', b: ['Mise en ligne', 'Suivi de l’utilisation', 'Boucle de rétroaction', 'Plan de réentraînement'] },
    ],
    es: [
      { t: 'Descubrimiento y evaluación de datos', d: 'Revisamos tu caso de uso, tus datos y tus restricciones para confirmar que la IA es la herramienta adecuada.', dur: '1 a 2 semanas', out: 'Un caso de uso validado y un plan de datos', b: ['Revisión del caso de uso', 'Auditoría de datos', 'Estudio de viabilidad', 'Métricas de éxito'] },
      { t: 'Diseño y prototipo', d: 'Una prueba de concepto funcional construida con datos reales o representativos para validar el enfoque.', dur: '2 a 4 semanas', out: 'Una prueba de concepto funcional', b: ['Selección del enfoque', 'Diseño del prompt o modelo', 'Prueba de concepto', 'Pruebas preliminares'] },
      { t: 'Desarrollo e integración', d: 'El sistema reforzado, conectado a tu producto, y probado contra casos límite.', dur: '4 a 8 semanas', out: 'Un sistema listo para producción', b: ['Versión de producción', 'Integración con la app', 'Pruebas de casos límite', 'Límites de seguridad añadidos'] },
      { t: 'Lanzamiento y monitoreo', d: 'Desplegado con monitoreo activo para mantener visibles la precisión y el costo tras el lanzamiento.', dur: 'Continuo', out: 'Un sistema en vivo que puedes vigilar', b: ['Puesta en marcha', 'Monitoreo de uso', 'Ciclo de retroalimentación', 'Plan de reentrenamiento'] },
    ],
  },
  blockchain: {
    en: [
      { t: 'Discovery & architecture', d: 'Chain selection, contract architecture and threat model agreed before any code is written.', dur: '1–2 weeks', out: 'A confirmed architecture and chain', b: ['Chain selection', 'Contract architecture', 'Threat modeling', 'Gas budget'] },
      { t: 'Contract design', d: 'Smart contracts and interfaces specified in detail, with edge cases mapped out.', dur: '2–3 weeks', out: 'A reviewed contract specification', b: ['Contract specs', 'Interface design', 'Edge-case mapping', 'Peer review'] },
      { t: 'Development & audit', d: 'Contracts built with full test coverage, then reviewed line by line before anything touches mainnet.', dur: '3–6 weeks', out: 'Tested, internally audited contracts', b: ['Contract development', 'Automated tests', 'Internal audit', 'Gas optimization'] },
      { t: 'Deployment & monitoring', d: 'Deployed to mainnet with monitoring for contract activity and anomalies.', dur: 'Ongoing', out: 'A live, monitored deployment', b: ['Mainnet deployment', 'Monitoring setup', 'Incident plan', 'Documentation'] },
    ],
    fr: [
      { t: 'Découverte et architecture', d: 'Choix de la chaîne, architecture des contrats et modèle de menaces convenus avant tout développement.', dur: '1 à 2 semaines', out: 'Une architecture et une chaîne confirmées', b: ['Choix de la chaîne', 'Architecture des contrats', 'Modélisation des menaces', 'Budget de gaz'] },
      { t: 'Conception des contrats', d: 'Contrats intelligents et interfaces spécifiés en détail, avec les cas limites définis.', dur: '2 à 3 semaines', out: 'Une spécification de contrat révisée', b: ['Spécifications des contrats', 'Conception des interfaces', 'Cartographie des cas limites', 'Revue par les pairs'] },
      { t: 'Développement et audit', d: 'Contrats construits avec une couverture de tests complète, puis révisés ligne par ligne avant le réseau principal.', dur: '3 à 6 semaines', out: 'Des contrats testés et audités en interne', b: ['Développement des contrats', 'Tests automatisés', 'Audit interne', 'Optimisation du gaz'] },
      { t: 'Déploiement et suivi', d: 'Déployé sur le réseau principal avec une supervision de l’activité et des anomalies des contrats.', dur: 'Continu', out: 'Un déploiement en ligne et supervisé', b: ['Déploiement mainnet', 'Mise en place de la supervision', 'Plan d’incident', 'Documentation'] },
    ],
    es: [
      { t: 'Descubrimiento y arquitectura', d: 'Selección de la cadena, arquitectura de contratos y modelo de amenazas acordados antes de programar.', dur: '1 a 2 semanas', out: 'Una arquitectura y cadena confirmadas', b: ['Selección de cadena', 'Arquitectura de contratos', 'Modelado de amenazas', 'Presupuesto de gas'] },
      { t: 'Diseño de contratos', d: 'Contratos inteligentes e interfaces especificados en detalle, con los casos límite definidos.', dur: '2 a 3 semanas', out: 'Una especificación de contrato revisada', b: ['Especificaciones del contrato', 'Diseño de interfaces', 'Mapeo de casos límite', 'Revisión entre pares'] },
      { t: 'Desarrollo y auditoría', d: 'Contratos construidos con cobertura de pruebas completa, revisados línea por línea antes de la red principal.', dur: '3 a 6 semanas', out: 'Contratos probados y auditados internamente', b: ['Desarrollo de contratos', 'Pruebas automatizadas', 'Auditoría interna', 'Optimización de gas'] },
      { t: 'Despliegue y monitoreo', d: 'Desplegado en la red principal con monitoreo de la actividad y anomalías de los contratos.', dur: 'Continuo', out: 'Un despliegue en vivo y monitoreado', b: ['Despliegue en mainnet', 'Configuración de monitoreo', 'Plan de incidentes', 'Documentación'] },
    ],
  },
  cloud: {
    en: [
      { t: 'Assessment & planning', d: 'Current infrastructure reviewed and a migration or build plan agreed with clear milestones.', dur: '1 week', out: 'A migration plan with milestones', b: ['Infrastructure audit', 'Cost review', 'Architecture plan', 'Risk assessment'] },
      { t: 'Architecture design', d: 'Target architecture designed for scale, security and cost, before anything is provisioned.', dur: '1–2 weeks', out: 'A reviewed target architecture', b: ['Architecture diagram', 'Security design', 'Scaling plan', 'Tooling choices'] },
      { t: 'Build & migrate', d: 'Infrastructure provisioned as code and workloads migrated in a controlled, tested sequence.', dur: '2–6 weeks', out: 'A tested environment ready to cut over', b: ['Infrastructure as code', 'CI/CD pipelines', 'Staged migration', 'Load testing'] },
      { t: 'Launch & optimize', d: 'Cut over with monitoring live, then tuned for cost and performance over the following weeks.', dur: 'Ongoing', out: 'A live, monitored environment', b: ['Production cutover', 'Monitoring & alerts', 'Cost tuning', 'Runbook handover'] },
    ],
    fr: [
      { t: 'Évaluation et planification', d: 'Infrastructure actuelle examinée et plan de migration ou de construction convenu avec des jalons clairs.', dur: '1 semaine', out: 'Un plan de migration avec des jalons', b: ['Audit de l’infrastructure', 'Revue des coûts', 'Plan d’architecture', 'Évaluation des risques'] },
      { t: 'Conception de l’architecture', d: 'Architecture cible conçue pour l’échelle, la sécurité et le coût, avant tout provisionnement.', dur: '1 à 2 semaines', out: 'Une architecture cible révisée', b: ['Schéma d’architecture', 'Conception de la sécurité', 'Plan de mise à l’échelle', 'Choix des outils'] },
      { t: 'Construction et migration', d: 'Infrastructure provisionnée en code et charges de travail migrées selon une séquence contrôlée et testée.', dur: '2 à 6 semaines', out: 'Un environnement testé prêt pour la bascule', b: ['Infrastructure en tant que code', 'Pipelines CI/CD', 'Migration par étapes', 'Tests de charge'] },
      { t: 'Lancement et optimisation', d: 'Bascule effectuée avec supervision en direct, puis ajustée pour le coût et la performance.', dur: 'Continu', out: 'Un environnement en ligne et supervisé', b: ['Bascule en production', 'Supervision et alertes', 'Ajustement des coûts', 'Transfert du guide d’exploitation'] },
    ],
    es: [
      { t: 'Evaluación y planificación', d: 'Infraestructura actual revisada y plan de migración o construcción acordado con hitos claros.', dur: '1 semana', out: 'Un plan de migración con hitos', b: ['Auditoría de infraestructura', 'Revisión de costos', 'Plan de arquitectura', 'Evaluación de riesgos'] },
      { t: 'Diseño de arquitectura', d: 'Arquitectura objetivo diseñada para escala, seguridad y costo, antes de aprovisionar nada.', dur: '1 a 2 semanas', out: 'Una arquitectura objetivo revisada', b: ['Diagrama de arquitectura', 'Diseño de seguridad', 'Plan de escalado', 'Selección de herramientas'] },
      { t: 'Construcción y migración', d: 'Infraestructura aprovisionada como código y cargas de trabajo migradas en una secuencia controlada y probada.', dur: '2 a 6 semanas', out: 'Un entorno probado listo para el cambio', b: ['Infraestructura como código', 'Pipelines de CI/CD', 'Migración por etapas', 'Pruebas de carga'] },
      { t: 'Lanzamiento y optimización', d: 'Cambio a producción con monitoreo activo, luego ajustado para costo y rendimiento.', dur: 'Continuo', out: 'Un entorno en vivo y monitoreado', b: ['Cambio a producción', 'Monitoreo y alertas', 'Ajuste de costos', 'Traspaso del manual operativo'] },
    ],
  },
  security: {
    en: [
      { t: 'Scoping & threat model', d: 'Attack surface mapped and testing scope agreed in writing before any testing begins.', dur: '3–5 days', out: 'A written test scope', b: ['Asset inventory', 'Threat modeling', 'Scope sign-off', 'Test plan'] },
      { t: 'Testing', d: 'Manual and automated testing against the OWASP Top 10 and your specific attack surface.', dur: '1–2 weeks', out: 'A full record of findings', b: ['Automated scanning', 'Manual testing', 'Configuration review', 'Evidence collection'] },
      { t: 'Reporting', d: 'Findings ranked by real-world risk, with clear reproduction steps and fixes for each.', dur: '3–5 days', out: 'A prioritized findings report', b: ['Risk ranking', 'Reproduction steps', 'Fix recommendations', 'Executive summary'] },
      { t: 'Remediation & retest', d: 'We help prioritize fixes, then retest to confirm the vulnerabilities are closed.', dur: '1–2 weeks', out: 'A verified, closed-out report', b: ['Fix support', 'Retesting', 'Verification report', 'Sign-off'] },
    ],
    fr: [
      { t: 'Cadrage et modèle de menaces', d: 'Surface d’attaque cartographiée et portée des tests convenue par écrit avant tout test.', dur: '3 à 5 jours', out: 'Une portée de test écrite', b: ['Inventaire des actifs', 'Modélisation des menaces', 'Validation de la portée', 'Plan de test'] },
      { t: 'Tests', d: 'Tests manuels et automatisés contre le Top 10 de l’OWASP et votre surface d’attaque spécifique.', dur: '1 à 2 semaines', out: 'Un relevé complet des constats', b: ['Analyse automatisée', 'Tests manuels', 'Revue de configuration', 'Collecte de preuves'] },
      { t: 'Rapport', d: 'Constats classés selon le risque réel, avec des étapes de reproduction claires et des correctifs pour chacun.', dur: '3 à 5 jours', out: 'Un rapport de constats priorisé', b: ['Classement des risques', 'Étapes de reproduction', 'Recommandations de correction', 'Résumé pour la direction'] },
      { t: 'Correction et nouveaux tests', d: 'Nous aidons à prioriser les correctifs, puis retestons pour confirmer que les vulnérabilités sont corrigées.', dur: '1 à 2 semaines', out: 'Un rapport vérifié et clos', b: ['Soutien à la correction', 'Nouveaux tests', 'Rapport de vérification', 'Validation finale'] },
    ],
    es: [
      { t: 'Alcance y modelo de amenazas', d: 'Superficie de ataque mapeada y alcance de las pruebas acordado por escrito antes de empezar.', dur: '3 a 5 días', out: 'Un alcance de prueba por escrito', b: ['Inventario de activos', 'Modelado de amenazas', 'Aprobación del alcance', 'Plan de pruebas'] },
      { t: 'Pruebas', d: 'Pruebas manuales y automatizadas contra el Top 10 de OWASP y tu superficie de ataque específica.', dur: '1 a 2 semanas', out: 'Un registro completo de hallazgos', b: ['Escaneo automatizado', 'Pruebas manuales', 'Revisión de configuración', 'Recolección de evidencia'] },
      { t: 'Informe', d: 'Hallazgos clasificados por riesgo real, con pasos de reproducción claros y correcciones para cada uno.', dur: '3 a 5 días', out: 'Un informe de hallazgos priorizado', b: ['Clasificación de riesgo', 'Pasos de reproducción', 'Recomendaciones de corrección', 'Resumen ejecutivo'] },
      { t: 'Corrección y nueva prueba', d: 'Ayudamos a priorizar las correcciones y luego volvemos a probar para confirmar que las vulnerabilidades se cerraron.', dur: '1 a 2 semanas', out: 'Un informe verificado y cerrado', b: ['Apoyo en la corrección', 'Nuevas pruebas', 'Informe de verificación', 'Aprobación final'] },
    ],
  },
  design: {
    en: [
      { t: 'Research & discovery', d: 'User interviews and a review of your current product surface real problems before we design anything.', dur: '1 week', out: 'A clear problem statement', b: ['User interviews', 'Competitive review', 'Problem framing', 'Goals alignment'] },
      { t: 'Wireframes & flows', d: 'Low-fidelity wireframes mapped to core user flows, tested for logic before visual design starts.', dur: '1–2 weeks', out: 'Approved user flows', b: ['User flows', 'Wireframes', 'Information architecture', 'Internal review'] },
      { t: 'Visual design & system', d: 'A full visual design and component system built so it scales past the first screen.', dur: '2–3 weeks', out: 'A reusable design system', b: ['Visual design', 'Component system', 'Prototype', 'Stakeholder review'] },
      { t: 'Handoff & support', d: 'Specs and assets handed to your developers, with support through implementation.', dur: 'Ongoing', out: 'Dev-ready files and support', b: ['Dev-ready specs', 'Asset export', 'Implementation support', 'QA pass'] },
    ],
    fr: [
      { t: 'Recherche et découverte', d: 'Entretiens utilisateurs et revue de votre produit actuel pour faire ressortir les vrais problèmes avant de concevoir quoi que ce soit.', dur: '1 semaine', out: 'Un énoncé clair du problème', b: ['Entretiens utilisateurs', 'Revue concurrentielle', 'Cadrage du problème', 'Alignement des objectifs'] },
      { t: 'Maquettes et parcours', d: 'Maquettes basse fidélité alignées sur les parcours principaux, testées sur la logique avant le design visuel.', dur: '1 à 2 semaines', out: 'Des parcours utilisateurs approuvés', b: ['Parcours utilisateurs', 'Maquettes filaires', 'Architecture de l’information', 'Revue interne'] },
      { t: 'Design visuel et système', d: 'Un design visuel complet et un système de composants conçus pour tenir au-delà du premier écran.', dur: '2 à 3 semaines', out: 'Un système de design réutilisable', b: ['Design visuel', 'Système de composants', 'Prototype', 'Revue avec les parties prenantes'] },
      { t: 'Transfert et soutien', d: 'Spécifications et fichiers transmis à vos développeurs, avec du soutien pendant l’implémentation.', dur: 'Continu', out: 'Des fichiers prêts pour le développement, et du soutien', b: ['Spécifications prêtes pour le développement', 'Export des fichiers', 'Soutien à l’implémentation', 'Vérification qualité'] },
    ],
    es: [
      { t: 'Investigación y descubrimiento', d: 'Entrevistas con usuarios y revisión de tu producto actual para revelar problemas reales antes de diseñar nada.', dur: '1 semana', out: 'Un planteamiento claro del problema', b: ['Entrevistas con usuarios', 'Revisión de competencia', 'Definición del problema', 'Alineación de objetivos'] },
      { t: 'Wireframes y flujos', d: 'Wireframes de baja fidelidad alineados con los flujos principales, probados en lógica antes del diseño visual.', dur: '1 a 2 semanas', out: 'Flujos de usuario aprobados', b: ['Flujos de usuario', 'Wireframes', 'Arquitectura de la información', 'Revisión interna'] },
      { t: 'Diseño visual y sistema', d: 'Un diseño visual completo y un sistema de componentes creado para escalar más allá de la primera pantalla.', dur: '2 a 3 semanas', out: 'Un sistema de diseño reutilizable', b: ['Diseño visual', 'Sistema de componentes', 'Prototipo', 'Revisión con interesados'] },
      { t: 'Traspaso y soporte', d: 'Especificaciones y archivos entregados a tus desarrolladores, con soporte durante la implementación.', dur: 'Continuo', out: 'Archivos listos para desarrollo, y soporte', b: ['Especificaciones listas para desarrollo', 'Exportación de archivos', 'Soporte de implementación', 'Revisión de calidad'] },
    ],
  },
  marketing: {
    en: [
      { t: 'Audit & strategy', d: 'Current channels, competitors and search visibility reviewed to build a channel plan.', dur: '1–2 weeks', out: 'A written channel strategy', b: ['Channel audit', 'Competitor review', 'Keyword research', 'Strategy document'] },
      { t: 'Setup & launch', d: 'Campaigns, tracking and content set up and launched against the agreed plan.', dur: '1–2 weeks', out: 'Live campaigns with tracking in place', b: ['Tracking setup', 'Campaign build', 'Content calendar', 'Launch'] },
      { t: 'Optimize', d: 'Performance reviewed weekly and budgets, targeting and content adjusted based on real data.', dur: 'Ongoing', out: 'Campaigns tuned on real data', b: ['Weekly optimization', 'A/B testing', 'Budget tuning', 'Content updates'] },
      { t: 'Report & scale', d: 'Clear monthly reporting on what is working, with a plan to scale the channels that perform.', dur: 'Monthly', out: 'A monthly report and scale plan', b: ['Monthly report', 'ROI review', 'Scale plan', 'Quarterly strategy check'] },
    ],
    fr: [
      { t: 'Audit et stratégie', d: 'Canaux actuels, concurrents et visibilité dans les moteurs de recherche examinés pour bâtir un plan de canaux.', dur: '1 à 2 semaines', out: 'Une stratégie de canaux écrite', b: ['Audit des canaux', 'Revue concurrentielle', 'Recherche de mots-clés', 'Document de stratégie'] },
      { t: 'Mise en place et lancement', d: 'Campagnes, suivi et contenu configurés et lancés selon le plan convenu.', dur: '1 à 2 semaines', out: 'Des campagnes en ligne avec suivi', b: ['Mise en place du suivi', 'Construction des campagnes', 'Calendrier de contenu', 'Lancement'] },
      { t: 'Optimisation', d: 'Performance revue chaque semaine, budgets, ciblage et contenu ajustés selon des données réelles.', dur: 'Continu', out: 'Des campagnes ajustées sur des données réelles', b: ['Optimisation hebdomadaire', 'Tests A/B', 'Ajustement des budgets', 'Mises à jour du contenu'] },
      { t: 'Rapport et mise à l’échelle', d: 'Un rapport mensuel clair sur ce qui fonctionne, avec un plan pour développer les canaux performants.', dur: 'Mensuel', out: 'Un rapport mensuel et un plan de croissance', b: ['Rapport mensuel', 'Revue du retour sur investissement', 'Plan de mise à l’échelle', 'Point stratégique trimestriel'] },
    ],
    es: [
      { t: 'Auditoría y estrategia', d: 'Canales actuales, competencia y visibilidad en buscadores revisados para construir un plan de canales.', dur: '1 a 2 semanas', out: 'Una estrategia de canales por escrito', b: ['Auditoría de canales', 'Revisión de competencia', 'Investigación de palabras clave', 'Documento de estrategia'] },
      { t: 'Configuración y lanzamiento', d: 'Campañas, seguimiento y contenido configurados y lanzados según el plan acordado.', dur: '1 a 2 semanas', out: 'Campañas activas con seguimiento', b: ['Configuración de seguimiento', 'Construcción de campañas', 'Calendario de contenido', 'Lanzamiento'] },
      { t: 'Optimización', d: 'Rendimiento revisado semanalmente, con presupuestos, segmentación y contenido ajustados según datos reales.', dur: 'Continuo', out: 'Campañas ajustadas con datos reales', b: ['Optimización semanal', 'Pruebas A/B', 'Ajuste de presupuesto', 'Actualizaciones de contenido'] },
      { t: 'Informe y escalado', d: 'Un informe mensual claro sobre qué funciona, con un plan para escalar los canales que rinden.', dur: 'Mensual', out: 'Un informe mensual y un plan de escalado', b: ['Informe mensual', 'Revisión de retorno', 'Plan de escalado', 'Revisión estratégica trimestral'] },
    ],
  },
  branding: {
    en: [
      { t: 'Discovery & research', d: 'Your market, competitors and audience researched to ground the brand in something real.', dur: '3–5 days', out: 'A grounded brand brief', b: ['Brand questionnaire', 'Competitor review', 'Audience research', 'Positioning'] },
      { t: 'Concept development', d: 'Multiple distinct directions explored so you can react to real options, not one guess.', dur: '1 week', out: 'Several concepts to react to', b: ['Concept sketches', 'Multiple directions', 'Colour & type exploration', 'Internal review'] },
      { t: 'Refinement', d: 'Your chosen direction refined and tested across real applications like a website and packaging.', dur: '1 week', out: 'A refined, approved direction', b: ['Direction refinement', 'Application mockups', 'Revision rounds', 'Final approval'] },
      { t: 'Delivery & guidelines', d: 'Final files delivered in every format you need, with a guidelines document so it is used consistently.', dur: '3–5 days', out: 'Final files and a guidelines document', b: ['Final logo files', 'Guidelines document', 'Templates', 'Brand handover'] },
    ],
    fr: [
      { t: 'Découverte et recherche', d: 'Votre marché, vos concurrents et votre public étudiés pour ancrer la marque dans quelque chose de réel.', dur: '3 à 5 jours', out: 'Un brief de marque solide', b: ['Questionnaire de marque', 'Revue concurrentielle', 'Recherche sur le public', 'Positionnement'] },
      { t: 'Développement de concepts', d: 'Plusieurs directions distinctes explorées pour réagir à de vraies options, pas à une seule proposition.', dur: '1 semaine', out: 'Plusieurs concepts à réagir', b: ['Esquisses de concepts', 'Directions multiples', 'Exploration des couleurs et typographies', 'Revue interne'] },
      { t: 'Raffinement', d: 'La direction choisie affinée et testée sur des applications réelles comme un site web et un emballage.', dur: '1 semaine', out: 'Une direction affinée et approuvée', b: ['Raffinement de la direction', 'Maquettes d’application', 'Cycles de révision', 'Approbation finale'] },
      { t: 'Livraison et guide', d: 'Fichiers finaux livrés dans tous les formats nécessaires, avec un guide de marque pour un usage cohérent.', dur: '3 à 5 jours', out: 'Des fichiers finaux et un guide de marque', b: ['Fichiers finaux du logo', 'Guide de marque', 'Gabarits', 'Transfert de la marque'] },
    ],
    es: [
      { t: 'Descubrimiento e investigación', d: 'Tu mercado, competencia y audiencia investigados para fundamentar la marca en algo real.', dur: '3 a 5 días', out: 'Un brief de marca fundamentado', b: ['Cuestionario de marca', 'Revisión de competencia', 'Investigación de audiencia', 'Posicionamiento'] },
      { t: 'Desarrollo de conceptos', d: 'Varias direcciones distintas exploradas para que reacciones a opciones reales, no a una sola propuesta.', dur: '1 semana', out: 'Varios conceptos para elegir', b: ['Bocetos de conceptos', 'Direcciones múltiples', 'Exploración de color y tipografía', 'Revisión interna'] },
      { t: 'Refinamiento', d: 'La dirección elegida refinada y probada en aplicaciones reales como un sitio web y empaques.', dur: '1 semana', out: 'Una dirección refinada y aprobada', b: ['Refinamiento de dirección', 'Maquetas de aplicación', 'Rondas de revisión', 'Aprobación final'] },
      { t: 'Entrega y guía', d: 'Archivos finales entregados en todos los formatos necesarios, con una guía de marca para un uso coherente.', dur: '3 a 5 días', out: 'Archivos finales y una guía de marca', b: ['Archivos finales del logotipo', 'Guía de marca', 'Plantillas', 'Traspaso de la marca'] },
    ],
  },
  'sf-implementation': {
    en: [
      { t: 'Discovery & process mapping', d: 'Your sales, service or field processes mapped so the org is built around how you actually work.', dur: '1–2 weeks', out: 'A documented process design', b: ['Process mapping', 'Requirements workshop', 'Data model plan', 'Success criteria'] },
      { t: 'Configuration', d: 'Objects, automation and permissions configured to match the agreed process design.', dur: '2–4 weeks', out: 'A configured sandbox org', b: ['Org configuration', 'Automation build', 'Permission sets', 'Sandbox review'] },
      { t: 'Testing & UAT', d: 'Your team tests real scenarios in a sandbox before anything goes live.', dur: '1–2 weeks', out: 'A signed-off, tested org', b: ['Test scripts', 'User acceptance testing', 'Bug fixes', 'Sign-off'] },
      { t: 'Go-live & training', d: 'A controlled launch with user training, so your team is confident from day one.', dur: '1 week', out: 'A live org and a trained team', b: ['Go-live plan', 'User training', 'Documentation', 'Early support'] },
    ],
    fr: [
      { t: 'Découverte et cartographie des processus', d: 'Vos processus de vente, de service ou de terrain cartographiés pour bâtir l’organisation autour de votre façon de travailler.', dur: '1 à 2 semaines', out: 'Une conception de processus documentée', b: ['Cartographie des processus', 'Atelier des besoins', 'Plan du modèle de données', 'Critères de réussite'] },
      { t: 'Configuration', d: 'Objets, automatisations et permissions configurés selon la conception de processus convenue.', dur: '2 à 4 semaines', out: 'Une organisation bac à sable configurée', b: ['Configuration de l’organisation', 'Construction des automatisations', 'Ensembles de permissions', 'Revue du bac à sable'] },
      { t: 'Tests et validation utilisateur', d: 'Votre équipe teste des scénarios réels dans un bac à sable avant toute mise en production.', dur: '1 à 2 semaines', out: 'Une organisation testée et validée', b: ['Scénarios de test', 'Tests de validation utilisateur', 'Corrections de bogues', 'Validation finale'] },
      { t: 'Mise en production et formation', d: 'Un lancement contrôlé avec formation des utilisateurs, pour une équipe confiante dès le premier jour.', dur: '1 semaine', out: 'Une organisation en production et une équipe formée', b: ['Plan de mise en production', 'Formation des utilisateurs', 'Documentation', 'Soutien initial'] },
    ],
    es: [
      { t: 'Descubrimiento y mapeo de procesos', d: 'Tus procesos de ventas, servicio o campo mapeados para construir la organización según tu forma real de trabajar.', dur: '1 a 2 semanas', out: 'Un diseño de procesos documentado', b: ['Mapeo de procesos', 'Taller de requisitos', 'Plan del modelo de datos', 'Criterios de éxito'] },
      { t: 'Configuración', d: 'Objetos, automatizaciones y permisos configurados según el diseño de procesos acordado.', dur: '2 a 4 semanas', out: 'Una organización sandbox configurada', b: ['Configuración de la organización', 'Construcción de automatizaciones', 'Conjuntos de permisos', 'Revisión del sandbox'] },
      { t: 'Pruebas y validación de usuario', d: 'Tu equipo prueba escenarios reales en un sandbox antes de pasar a producción.', dur: '1 a 2 semanas', out: 'Una organización probada y aprobada', b: ['Guiones de prueba', 'Pruebas de aceptación de usuario', 'Corrección de errores', 'Aprobación final'] },
      { t: 'Puesta en marcha y capacitación', d: 'Un lanzamiento controlado con capacitación de usuarios, para un equipo seguro desde el primer día.', dur: '1 semana', out: 'Una organización en producción y un equipo capacitado', b: ['Plan de puesta en marcha', 'Capacitación de usuarios', 'Documentación', 'Soporte inicial'] },
    ],
  },
  'sf-customization': {
    en: [
      { t: 'Requirements', d: 'Exactly what needs custom logic, versus what a Flow can handle, is agreed before development starts.', dur: '3–5 days', out: 'A written technical spec', b: ['Technical requirements', 'Declarative vs code decision', 'Design review', 'Estimate'] },
      { t: 'Build', d: 'Apex, Lightning Web Components and Flows built to spec, with tests written alongside the code.', dur: '2–6 weeks', out: 'A working build in sandbox', b: ['Apex & LWC development', 'Flow automation', 'Unit tests', 'Code review'] },
      { t: 'Testing', d: 'Everything tested against real scenarios and edge cases, not just the happy path.', dur: '1 week', out: 'A verified, edge-case tested build', b: ['Test coverage', 'Edge-case testing', 'UAT support', 'Performance check'] },
      { t: 'Deployment', d: 'Deployed through a proper release process, with rollback plans and documentation.', dur: '3–5 days', out: 'A deployed, documented release', b: ['Staged deployment', 'Release notes', 'Rollback plan', 'Handover docs'] },
    ],
    fr: [
      { t: 'Exigences', d: 'Ce qui exige réellement du code, par rapport à ce qu’un Flow peut gérer, est convenu avant le développement.', dur: '3 à 5 jours', out: 'Une spécification technique écrite', b: ['Exigences techniques', 'Choix déclaratif ou code', 'Revue de conception', 'Estimation'] },
      { t: 'Développement', d: 'Apex, composants Lightning Web et Flows construits selon les spécifications, avec des tests écrits en parallèle du code.', dur: '2 à 6 semaines', out: 'Une version fonctionnelle en bac à sable', b: ['Développement Apex et LWC', 'Automatisation par Flow', 'Tests unitaires', 'Revue de code'] },
      { t: 'Tests', d: 'Tout est testé sur des scénarios réels et des cas limites, pas seulement le chemin normal.', dur: '1 semaine', out: 'Une version vérifiée et testée sur les cas limites', b: ['Couverture de tests', 'Tests des cas limites', 'Soutien à la validation utilisateur', 'Vérification de performance'] },
      { t: 'Déploiement', d: 'Déployé selon un processus de mise en production rigoureux, avec plans de retour arrière et documentation.', dur: '3 à 5 jours', out: 'Une mise en production déployée et documentée', b: ['Déploiement par étapes', 'Notes de version', 'Plan de retour arrière', 'Documents de transfert'] },
    ],
    es: [
      { t: 'Requisitos', d: 'Qué necesita lógica personalizada frente a lo que un Flow puede manejar se acuerda antes de desarrollar.', dur: '3 a 5 días', out: 'Una especificación técnica por escrito', b: ['Requisitos técnicos', 'Decisión declarativo o código', 'Revisión de diseño', 'Estimación'] },
      { t: 'Desarrollo', d: 'Apex, componentes Lightning Web y Flows construidos según especificación, con pruebas escritas junto al código.', dur: '2 a 6 semanas', out: 'Una versión funcional en sandbox', b: ['Desarrollo de Apex y LWC', 'Automatización con Flow', 'Pruebas unitarias', 'Revisión de código'] },
      { t: 'Pruebas', d: 'Todo probado con escenarios reales y casos límite, no solo el camino esperado.', dur: '1 semana', out: 'Una versión verificada y probada en casos límite', b: ['Cobertura de pruebas', 'Pruebas de casos límite', 'Apoyo en pruebas de aceptación', 'Revisión de rendimiento'] },
      { t: 'Despliegue', d: 'Desplegado mediante un proceso de lanzamiento adecuado, con planes de reversión y documentación.', dur: '3 a 5 días', out: 'Un lanzamiento desplegado y documentado', b: ['Despliegue por etapas', 'Notas de versión', 'Plan de reversión', 'Documentos de traspaso'] },
    ],
  },
  'sf-integration': {
    en: [
      { t: 'Systems audit', d: 'The systems that need to connect, and how data should flow between them, mapped out clearly.', dur: '3–5 days', out: 'A clear integration plan', b: ['System inventory', 'Data flow mapping', 'API review', 'Integration plan'] },
      { t: 'Integration design', d: 'The integration architecture designed for reliability, including how failures are handled.', dur: '1 week', out: 'An approved integration design', b: ['Architecture design', 'Field mapping', 'Error-handling plan', 'Security review'] },
      { t: 'Build & test', d: 'The integration built and tested against real data volumes, not just sample records.', dur: '2–4 weeks', out: 'A tested, working integration', b: ['Integration build', 'Data validation', 'Load testing', 'Failure testing'] },
      { t: 'Monitor & handover', d: 'Live monitoring set up so failed syncs are caught immediately, with documentation for your team.', dur: 'Ongoing', out: 'A monitored integration and runbook', b: ['Monitoring setup', 'Alerting', 'Runbook', 'Handover'] },
    ],
    fr: [
      { t: 'Audit des systèmes', d: 'Les systèmes à connecter, et la façon dont les données doivent circuler entre eux, clairement définis.', dur: '3 à 5 jours', out: 'Un plan d’intégration clair', b: ['Inventaire des systèmes', 'Cartographie des flux de données', 'Revue des API', 'Plan d’intégration'] },
      { t: 'Conception de l’intégration', d: 'L’architecture d’intégration conçue pour la fiabilité, y compris la gestion des échecs.', dur: '1 semaine', out: 'Une conception d’intégration approuvée', b: ['Conception de l’architecture', 'Mappage des champs', 'Plan de gestion des erreurs', 'Revue de sécurité'] },
      { t: 'Développement et tests', d: 'L’intégration construite et testée avec des volumes de données réels, pas seulement des échantillons.', dur: '2 à 4 semaines', out: 'Une intégration testée et fonctionnelle', b: ['Construction de l’intégration', 'Validation des données', 'Tests de charge', 'Tests de défaillance'] },
      { t: 'Suivi et transfert', d: 'Supervision en direct mise en place pour détecter immédiatement les synchronisations échouées, avec documentation.', dur: 'Continu', out: 'Une intégration supervisée et un guide', b: ['Mise en place de la supervision', 'Alertes', 'Guide d’exploitation', 'Transfert'] },
    ],
    es: [
      { t: 'Auditoría de sistemas', d: 'Los sistemas que deben conectarse, y cómo deben fluir los datos entre ellos, definidos con claridad.', dur: '3 a 5 días', out: 'Un plan de integración claro', b: ['Inventario de sistemas', 'Mapeo de flujo de datos', 'Revisión de API', 'Plan de integración'] },
      { t: 'Diseño de la integración', d: 'La arquitectura de integración diseñada para ser confiable, incluyendo el manejo de fallos.', dur: '1 semana', out: 'Un diseño de integración aprobado', b: ['Diseño de arquitectura', 'Mapeo de campos', 'Plan de manejo de errores', 'Revisión de seguridad'] },
      { t: 'Desarrollo y pruebas', d: 'La integración construida y probada con volúmenes de datos reales, no solo con registros de muestra.', dur: '2 a 4 semanas', out: 'Una integración probada y funcional', b: ['Construcción de la integración', 'Validación de datos', 'Pruebas de carga', 'Pruebas de fallos'] },
      { t: 'Monitoreo y traspaso', d: 'Monitoreo en vivo configurado para detectar sincronizaciones fallidas de inmediato, con documentación para tu equipo.', dur: 'Continuo', out: 'Una integración monitoreada y un manual', b: ['Configuración de monitoreo', 'Alertas', 'Manual operativo', 'Traspaso'] },
    ],
  },
  'sf-migration': {
    en: [
      { t: 'Data audit', d: 'Your current data reviewed for quality, duplicates and structure before any migration plan is made.', dur: '3–5 days', out: 'A data quality report', b: ['Data quality audit', 'Duplicate analysis', 'Field mapping draft', 'Risk areas flagged'] },
      { t: 'Mapping & cleansing', d: 'Fields mapped to Salesforce’s data model and records cleaned and deduplicated.', dur: '1–2 weeks', out: 'Clean, mapped data ready to load', b: ['Field mapping', 'Deduplication', 'Data cleansing', 'Mapping sign-off'] },
      { t: 'Migration & validation', d: 'Data migrated in a sandbox first, then validated record by record against the source.', dur: '1–2 weeks', out: 'A validated sandbox migration', b: ['Sandbox migration', 'Record validation', 'Attachment migration', 'Reconciliation'] },
      { t: 'Sign-off & support', d: 'Final migration to production with a short support window to catch anything that slipped through.', dur: '3–5 days', out: 'A completed, reconciled migration', b: ['Production migration', 'Final reconciliation', 'Sign-off', 'Post-migration support'] },
    ],
    fr: [
      { t: 'Audit des données', d: 'Vos données actuelles examinées pour la qualité, les doublons et la structure avant tout plan de migration.', dur: '3 à 5 jours', out: 'Un rapport sur la qualité des données', b: ['Audit de la qualité des données', 'Analyse des doublons', 'Ébauche du mappage des champs', 'Zones à risque signalées'] },
      { t: 'Mappage et nettoyage', d: 'Champs mappés au modèle de données de Salesforce, et enregistrements nettoyés et dédoublonnés.', dur: '1 à 2 semaines', out: 'Des données propres et mappées, prêtes à charger', b: ['Mappage des champs', 'Dédoublonnage', 'Nettoyage des données', 'Validation du mappage'] },
      { t: 'Migration et validation', d: 'Données migrées d’abord dans un bac à sable, puis validées enregistrement par enregistrement.', dur: '1 à 2 semaines', out: 'Une migration en bac à sable validée', b: ['Migration en bac à sable', 'Validation des enregistrements', 'Migration des pièces jointes', 'Réconciliation'] },
      { t: 'Validation finale et soutien', d: 'Migration finale en production avec une courte fenêtre de soutien pour rattraper ce qui aurait pu échapper.', dur: '3 à 5 jours', out: 'Une migration terminée et réconciliée', b: ['Migration en production', 'Réconciliation finale', 'Validation finale', 'Soutien post-migration'] },
    ],
    es: [
      { t: 'Auditoría de datos', d: 'Tus datos actuales revisados en calidad, duplicados y estructura antes de hacer cualquier plan de migración.', dur: '3 a 5 días', out: 'Un informe de calidad de datos', b: ['Auditoría de calidad de datos', 'Análisis de duplicados', 'Borrador de mapeo de campos', 'Áreas de riesgo señaladas'] },
      { t: 'Mapeo y depuración', d: 'Campos mapeados al modelo de datos de Salesforce, y registros depurados y sin duplicados.', dur: '1 a 2 semanas', out: 'Datos limpios y mapeados, listos para cargar', b: ['Mapeo de campos', 'Eliminación de duplicados', 'Depuración de datos', 'Aprobación del mapeo'] },
      { t: 'Migración y validación', d: 'Datos migrados primero en un sandbox, luego validados registro por registro contra el origen.', dur: '1 a 2 semanas', out: 'Una migración en sandbox validada', b: ['Migración en sandbox', 'Validación de registros', 'Migración de archivos adjuntos', 'Conciliación'] },
      { t: 'Aprobación final y soporte', d: 'Migración final a producción con una breve ventana de soporte para detectar cualquier detalle pendiente.', dur: '3 a 5 días', out: 'Una migración completada y conciliada', b: ['Migración a producción', 'Conciliación final', 'Aprobación final', 'Soporte posterior a la migración'] },
    ],
  },
  'sf-admin': {
    en: [
      { t: 'Onboarding & audit', d: 'Your org reviewed so we understand its quirks before taking on ongoing support.', dur: '1 week', out: 'A documented org review', b: ['Org review', 'Access setup', 'Priority list', 'SLA agreement'] },
      { t: 'SLA & processes', d: 'Response times and escalation paths agreed in writing, so expectations are clear from day one.', dur: '3–5 days', out: 'A written support agreement', b: ['SLA document', 'Escalation path', 'Ticketing setup', 'Communication plan'] },
      { t: 'Ongoing support', d: 'Day-to-day configuration changes, user management and troubleshooting handled as they come up.', dur: 'Monthly', out: 'A smoothly running org', b: ['User management', 'Configuration changes', 'Troubleshooting', 'Monthly report'] },
      { t: 'Quarterly review', d: 'A regular check-in on org health, adoption and what should be prioritized next.', dur: 'Quarterly', out: 'A quarterly health review', b: ['Health check', 'Adoption review', 'Roadmap update', 'Stakeholder review'] },
    ],
    fr: [
      { t: 'Intégration et audit', d: 'Votre organisation examinée pour en comprendre les particularités avant de commencer le soutien continu.', dur: '1 semaine', out: 'Une revue d’organisation documentée', b: ['Revue de l’organisation', 'Configuration des accès', 'Liste des priorités', 'Entente de niveau de service'] },
      { t: 'Entente de service et processus', d: 'Délais de réponse et voies d’escalade convenus par écrit, pour des attentes claires dès le départ.', dur: '3 à 5 jours', out: 'Une entente de soutien écrite', b: ['Document d’entente de service', 'Voie d’escalade', 'Mise en place de la billetterie', 'Plan de communication'] },
      { t: 'Soutien continu', d: 'Modifications de configuration quotidiennes, gestion des utilisateurs et dépannage traités au fil de l’eau.', dur: 'Mensuel', out: 'Une organisation qui tourne sans accroc', b: ['Gestion des utilisateurs', 'Modifications de configuration', 'Dépannage', 'Rapport mensuel'] },
      { t: 'Revue trimestrielle', d: 'Un point régulier sur la santé de l’organisation, l’adoption et les priorités à venir.', dur: 'Trimestriel', out: 'Une revue de santé trimestrielle', b: ['Bilan de santé', 'Revue de l’adoption', 'Mise à jour de la feuille de route', 'Revue avec les parties prenantes'] },
    ],
    es: [
      { t: 'Incorporación y auditoría', d: 'Tu organización revisada para entender sus particularidades antes de asumir el soporte continuo.', dur: '1 semana', out: 'Una revisión de organización documentada', b: ['Revisión de la organización', 'Configuración de accesos', 'Lista de prioridades', 'Acuerdo de nivel de servicio'] },
      { t: 'Acuerdo de servicio y procesos', d: 'Tiempos de respuesta y rutas de escalamiento acordados por escrito, con expectativas claras desde el inicio.', dur: '3 a 5 días', out: 'Un acuerdo de soporte por escrito', b: ['Documento de acuerdo de servicio', 'Ruta de escalamiento', 'Configuración de tickets', 'Plan de comunicación'] },
      { t: 'Soporte continuo', d: 'Cambios de configuración diarios, gestión de usuarios y resolución de problemas atendidos a medida que surgen.', dur: 'Mensual', out: 'Una organización funcionando sin problemas', b: ['Gestión de usuarios', 'Cambios de configuración', 'Resolución de problemas', 'Informe mensual'] },
      { t: 'Revisión trimestral', d: 'Un seguimiento regular del estado de la organización, la adopción y las próximas prioridades.', dur: 'Trimestral', out: 'Una revisión trimestral de estado', b: ['Diagnóstico de estado', 'Revisión de adopción', 'Actualización de hoja de ruta', 'Revisión con interesados'] },
    ],
  },
  'sf-consulting': {
    en: [
      { t: 'Health check', d: 'A full audit of your org’s data model, automation, security and adoption.', dur: '1–2 weeks', out: 'A full audit of your org', b: ['Org audit', 'Data model review', 'Automation review', 'Adoption metrics'] },
      { t: 'Findings & roadmap', d: 'Every finding ranked by impact, with a clear roadmap for what to fix first.', dur: '3–5 days', out: 'A prioritized roadmap', b: ['Findings report', 'Priority ranking', 'Roadmap', 'Stakeholder presentation'] },
      { t: 'Implementation support', d: 'We help your team, or ours, implement the roadmap one priority at a time.', dur: 'Ongoing', out: 'Steady progress against the roadmap', b: ['Fix implementation', 'Change management', 'Progress tracking', 'Adoption support'] },
      { t: 'Follow-up review', d: 'A follow-up review to confirm fixes landed and adoption is actually improving.', dur: 'Quarterly', out: 'Confirmed, measured improvement', b: ['Follow-up audit', 'Metrics review', 'Adjustments', 'Next roadmap'] },
    ],
    fr: [
      { t: 'Bilan de santé', d: 'Un audit complet du modèle de données, de l’automatisation, de la sécurité et de l’adoption de votre organisation.', dur: '1 à 2 semaines', out: 'Un audit complet de votre organisation', b: ['Audit de l’organisation', 'Revue du modèle de données', 'Revue de l’automatisation', 'Indicateurs d’adoption'] },
      { t: 'Constats et feuille de route', d: 'Chaque constat classé selon son impact, avec une feuille de route claire des priorités.', dur: '3 à 5 jours', out: 'Une feuille de route priorisée', b: ['Rapport de constats', 'Classement des priorités', 'Feuille de route', 'Présentation aux parties prenantes'] },
      { t: 'Soutien à l’implémentation', d: 'Nous aidons votre équipe, ou la nôtre, à mettre en œuvre la feuille de route une priorité à la fois.', dur: 'Continu', out: 'Une progression constante de la feuille de route', b: ['Mise en œuvre des correctifs', 'Gestion du changement', 'Suivi de la progression', 'Soutien à l’adoption'] },
      { t: 'Revue de suivi', d: 'Une revue de suivi pour confirmer que les correctifs ont porté fruit et que l’adoption s’améliore vraiment.', dur: 'Trimestriel', out: 'Une amélioration confirmée et mesurée', b: ['Audit de suivi', 'Revue des indicateurs', 'Ajustements', 'Prochaine feuille de route'] },
    ],
    es: [
      { t: 'Diagnóstico', d: 'Una auditoría completa del modelo de datos, automatización, seguridad y adopción de tu organización.', dur: '1 a 2 semanas', out: 'Una auditoría completa de tu organización', b: ['Auditoría de la organización', 'Revisión del modelo de datos', 'Revisión de automatización', 'Métricas de adopción'] },
      { t: 'Hallazgos y hoja de ruta', d: 'Cada hallazgo clasificado por impacto, con una hoja de ruta clara de qué corregir primero.', dur: '3 a 5 días', out: 'Una hoja de ruta priorizada', b: ['Informe de hallazgos', 'Clasificación de prioridades', 'Hoja de ruta', 'Presentación a interesados'] },
      { t: 'Soporte de implementación', d: 'Ayudamos a tu equipo, o al nuestro, a implementar la hoja de ruta una prioridad a la vez.', dur: 'Continuo', out: 'Avance constante en la hoja de ruta', b: ['Implementación de correcciones', 'Gestión del cambio', 'Seguimiento del progreso', 'Apoyo a la adopción'] },
      { t: 'Revisión de seguimiento', d: 'Una revisión de seguimiento para confirmar que las correcciones surtieron efecto y la adopción realmente mejora.', dur: 'Trimestral', out: 'Una mejora confirmada y medida', b: ['Auditoría de seguimiento', 'Revisión de métricas', 'Ajustes', 'Siguiente hoja de ruta'] },
    ],
  },

  'sap-implementation': {
    en: [
      { t: 'Discovery & process mapping', d: 'Your finance, supply chain or operations processes mapped so the system is built around how you work.', dur: '1–2 weeks', out: 'A documented process design', b: ['Process mapping', 'Requirements workshop', 'Module scope', 'Success criteria'] },
      { t: 'Configuration', d: 'Modules configured and tested against your specific business processes in a sandbox.', dur: '4–10 weeks', out: 'A configured sandbox system', b: ['Module configuration', 'Custom workflows', 'Sandbox build', 'Data structure'] },
      { t: 'Testing & UAT', d: 'Your team tests real transactions before anything goes live.', dur: '2–3 weeks', out: 'A signed-off, tested system', b: ['Test scripts', 'User acceptance testing', 'Issue resolution', 'Sign-off'] },
      { t: 'Go-live & training', d: 'A controlled cutover with user training, so your team is confident from day one.', dur: '1–2 weeks', out: 'A live system and a trained team', b: ['Go-live plan', 'User training', 'Documentation', 'Early support'] },
    ],
    fr: [
      { t: 'Découverte et cartographie des processus', d: 'Vos processus de finance, de chaîne d’approvisionnement ou d’exploitation cartographiés pour bâtir le système autour de votre façon de travailler.', dur: '1 à 2 semaines', out: 'Une conception de processus documentée', b: ['Cartographie des processus', 'Atelier des besoins', 'Portée des modules', 'Critères de réussite'] },
      { t: 'Configuration', d: 'Modules configurés et testés selon vos processus d’affaires précis dans un bac à sable.', dur: '4 à 10 semaines', out: 'Un système bac à sable configuré', b: ['Configuration des modules', 'Flux personnalisés', 'Construction du bac à sable', 'Structure des données'] },
      { t: 'Tests et validation utilisateur', d: 'Votre équipe teste des transactions réelles avant toute mise en production.', dur: '2 à 3 semaines', out: 'Un système testé et validé', b: ['Scénarios de test', 'Tests de validation utilisateur', 'Résolution des problèmes', 'Validation finale'] },
      { t: 'Mise en production et formation', d: 'Une bascule contrôlée avec formation des utilisateurs, pour une équipe confiante dès le premier jour.', dur: '1 à 2 semaines', out: 'Un système en production et une équipe formée', b: ['Plan de mise en production', 'Formation des utilisateurs', 'Documentation', 'Soutien initial'] },
    ],
    es: [
      { t: 'Descubrimiento y mapeo de procesos', d: 'Tus procesos de finanzas, cadena de suministro u operaciones mapeados para construir el sistema según tu forma de trabajar.', dur: '1 a 2 semanas', out: 'Un diseño de procesos documentado', b: ['Mapeo de procesos', 'Taller de requisitos', 'Alcance de módulos', 'Criterios de éxito'] },
      { t: 'Configuración', d: 'Módulos configurados y probados según tus procesos de negocio específicos en un sandbox.', dur: '4 a 10 semanas', out: 'Un sistema sandbox configurado', b: ['Configuración de módulos', 'Flujos personalizados', 'Construcción del sandbox', 'Estructura de datos'] },
      { t: 'Pruebas y validación de usuario', d: 'Tu equipo prueba transacciones reales antes de pasar a producción.', dur: '2 a 3 semanas', out: 'Un sistema probado y aprobado', b: ['Guiones de prueba', 'Pruebas de aceptación de usuario', 'Resolución de problemas', 'Aprobación final'] },
      { t: 'Puesta en marcha y capacitación', d: 'Un cambio controlado con capacitación de usuarios, para un equipo seguro desde el primer día.', dur: '1 a 2 semanas', out: 'Un sistema en producción y un equipo capacitado', b: ['Plan de puesta en marcha', 'Capacitación de usuarios', 'Documentación', 'Soporte inicial'] },
    ],
  },
  'sap-migration': {
    en: [
      { t: 'Assessment', d: 'Current system, custom code and data reviewed to scope the migration path.', dur: '2–3 weeks', out: 'A documented migration plan', b: ['System audit', 'Custom code review', 'Data assessment', 'Migration plan'] },
      { t: 'Sandbox migration', d: 'A test migration run in a sandbox to surface issues before production.', dur: '3–6 weeks', out: 'A validated sandbox migration', b: ['Sandbox build', 'Test migration', 'Custom code adaptation', 'Issue log'] },
      { t: 'Validation', d: 'Migrated data and processes validated against the original system.', dur: '2–3 weeks', out: 'A validated, tested environment', b: ['Data validation', 'Process testing', 'Performance check', 'Stakeholder review'] },
      { t: 'Cutover', d: 'A planned production cutover with a rollback plan in place.', dur: '1 week', out: 'A completed, supported migration', b: ['Cutover plan', 'Production migration', 'Rollback readiness', 'Post-migration support'] },
    ],
    fr: [
      { t: 'Évaluation', d: 'Système actuel, code personnalisé et données examinés pour cadrer le parcours de migration.', dur: '2 à 3 semaines', out: 'Un plan de migration documenté', b: ['Audit du système', 'Revue du code personnalisé', 'Évaluation des données', 'Plan de migration'] },
      { t: 'Migration en bac à sable', d: 'Une migration test exécutée dans un bac à sable pour révéler les problèmes avant la production.', dur: '3 à 6 semaines', out: 'Une migration en bac à sable validée', b: ['Construction du bac à sable', 'Migration test', 'Adaptation du code personnalisé', 'Journal des problèmes'] },
      { t: 'Validation', d: 'Données et processus migrés validés par rapport au système d’origine.', dur: '2 à 3 semaines', out: 'Un environnement validé et testé', b: ['Validation des données', 'Tests des processus', 'Vérification de la performance', 'Revue avec les parties prenantes'] },
      { t: 'Bascule', d: 'Une bascule en production planifiée, avec un plan de retour arrière en place.', dur: '1 semaine', out: 'Une migration terminée et soutenue', b: ['Plan de bascule', 'Migration en production', 'Préparation au retour arrière', 'Soutien post-migration'] },
    ],
    es: [
      { t: 'Evaluación', d: 'Sistema actual, código personalizado y datos revisados para definir la ruta de migración.', dur: '2 a 3 semanas', out: 'Un plan de migración documentado', b: ['Auditoría del sistema', 'Revisión de código personalizado', 'Evaluación de datos', 'Plan de migración'] },
      { t: 'Migración en sandbox', d: 'Una migración de prueba ejecutada en un sandbox para detectar problemas antes de producción.', dur: '3 a 6 semanas', out: 'Una migración en sandbox validada', b: ['Construcción del sandbox', 'Migración de prueba', 'Adaptación de código personalizado', 'Registro de incidencias'] },
      { t: 'Validación', d: 'Datos y procesos migrados validados frente al sistema original.', dur: '2 a 3 semanas', out: 'Un entorno validado y probado', b: ['Validación de datos', 'Pruebas de procesos', 'Revisión de rendimiento', 'Revisión con interesados'] },
      { t: 'Cambio a producción', d: 'Un cambio a producción planificado, con un plan de reversión listo.', dur: '1 semana', out: 'Una migración completada y respaldada', b: ['Plan de cambio', 'Migración a producción', 'Preparación de reversión', 'Soporte posterior a la migración'] },
    ],
  },
  'sap-integration': {
    en: [
      { t: 'Systems audit', d: 'Systems to connect and data flow mapped out clearly.', dur: '3–5 days', out: 'A clear integration plan', b: ['System inventory', 'Data flow mapping', 'API review', 'Integration plan'] },
      { t: 'Integration design', d: 'Architecture designed for reliability, including how failures are handled.', dur: '1–2 weeks', out: 'An approved integration design', b: ['Architecture design', 'Field mapping', 'Error-handling plan', 'Security review'] },
      { t: 'Build & test', d: 'Integration built and tested against real data volumes.', dur: '3–6 weeks', out: 'A tested, working integration', b: ['Integration build', 'Data validation', 'Load testing', 'Failure testing'] },
      { t: 'Monitor & handover', d: 'Live monitoring set up so failed syncs are caught immediately.', dur: 'Ongoing', out: 'A monitored integration and runbook', b: ['Monitoring setup', 'Alerting', 'Runbook', 'Handover'] },
    ],
    fr: [
      { t: 'Audit des systèmes', d: 'Systèmes à connecter et flux de données clairement cartographiés.', dur: '3 à 5 jours', out: 'Un plan d’intégration clair', b: ['Inventaire des systèmes', 'Cartographie des flux de données', 'Revue des API', 'Plan d’intégration'] },
      { t: 'Conception de l’intégration', d: 'Architecture conçue pour la fiabilité, y compris la gestion des échecs.', dur: '1 à 2 semaines', out: 'Une conception d’intégration approuvée', b: ['Conception de l’architecture', 'Mappage des champs', 'Plan de gestion des erreurs', 'Revue de sécurité'] },
      { t: 'Développement et tests', d: 'Intégration construite et testée avec des volumes de données réels.', dur: '3 à 6 semaines', out: 'Une intégration testée et fonctionnelle', b: ['Construction de l’intégration', 'Validation des données', 'Tests de charge', 'Tests de défaillance'] },
      { t: 'Suivi et transfert', d: 'Supervision en direct mise en place pour détecter immédiatement les synchronisations échouées.', dur: 'Continu', out: 'Une intégration supervisée et un guide', b: ['Mise en place de la supervision', 'Alertes', 'Guide d’exploitation', 'Transfert'] },
    ],
    es: [
      { t: 'Auditoría de sistemas', d: 'Sistemas a conectar y flujo de datos definidos con claridad.', dur: '3 a 5 días', out: 'Un plan de integración claro', b: ['Inventario de sistemas', 'Mapeo de flujo de datos', 'Revisión de API', 'Plan de integración'] },
      { t: 'Diseño de la integración', d: 'Arquitectura diseñada para ser confiable, incluyendo el manejo de fallos.', dur: '1 a 2 semanas', out: 'Un diseño de integración aprobado', b: ['Diseño de arquitectura', 'Mapeo de campos', 'Plan de manejo de errores', 'Revisión de seguridad'] },
      { t: 'Desarrollo y pruebas', d: 'Integración construida y probada con volúmenes de datos reales.', dur: '3 a 6 semanas', out: 'Una integración probada y funcional', b: ['Construcción de la integración', 'Validación de datos', 'Pruebas de carga', 'Pruebas de fallos'] },
      { t: 'Monitoreo y traspaso', d: 'Monitoreo en vivo configurado para detectar sincronizaciones fallidas de inmediato.', dur: 'Continuo', out: 'Una integración monitoreada y un manual', b: ['Configuración de monitoreo', 'Alertas', 'Manual operativo', 'Traspaso'] },
    ],
  },
  'sap-support': {
    en: [
      { t: 'Onboarding & audit', d: 'Your SAP landscape reviewed before ongoing support begins.', dur: '1–2 weeks', out: 'A documented landscape review', b: ['Landscape review', 'Access setup', 'Priority list', 'SLA agreement'] },
      { t: 'SLA & processes', d: 'Response times and escalation paths agreed in writing.', dur: '3–5 days', out: 'A written support agreement', b: ['SLA document', 'Escalation path', 'Ticketing setup', 'Communication plan'] },
      { t: 'Ongoing support', d: 'Configuration changes and troubleshooting handled as they come up.', dur: 'Monthly', out: 'A smoothly running system', b: ['Configuration changes', 'User support', 'Troubleshooting', 'Monthly report'] },
      { t: 'Quarterly review', d: 'A regular check-in on system health and priorities.', dur: 'Quarterly', out: 'A quarterly health review', b: ['Health check', 'Performance review', 'Roadmap update', 'Stakeholder review'] },
    ],
    fr: [
      { t: 'Intégration et audit', d: 'Votre environnement SAP examiné avant le début du soutien continu.', dur: '1 à 2 semaines', out: 'Une revue d’environnement documentée', b: ['Revue de l’environnement', 'Configuration des accès', 'Liste des priorités', 'Entente de niveau de service'] },
      { t: 'Entente de service et processus', d: 'Délais de réponse et voies d’escalade convenus par écrit.', dur: '3 à 5 jours', out: 'Une entente de soutien écrite', b: ['Document d’entente de service', 'Voie d’escalade', 'Mise en place de la billetterie', 'Plan de communication'] },
      { t: 'Soutien continu', d: 'Modifications de configuration et dépannage traités au fil de l’eau.', dur: 'Mensuel', out: 'Un système qui tourne sans accroc', b: ['Modifications de configuration', 'Soutien aux utilisateurs', 'Dépannage', 'Rapport mensuel'] },
      { t: 'Revue trimestrielle', d: 'Un point régulier sur la santé du système et les priorités.', dur: 'Trimestriel', out: 'Une revue de santé trimestrielle', b: ['Bilan de santé', 'Revue de performance', 'Mise à jour de la feuille de route', 'Revue avec les parties prenantes'] },
    ],
    es: [
      { t: 'Incorporación y auditoría', d: 'Tu entorno SAP revisado antes de comenzar el soporte continuo.', dur: '1 a 2 semanas', out: 'Una revisión de entorno documentada', b: ['Revisión del entorno', 'Configuración de accesos', 'Lista de prioridades', 'Acuerdo de nivel de servicio'] },
      { t: 'Acuerdo de servicio y procesos', d: 'Tiempos de respuesta y rutas de escalamiento acordados por escrito.', dur: '3 a 5 días', out: 'Un acuerdo de soporte por escrito', b: ['Documento de acuerdo de servicio', 'Ruta de escalamiento', 'Configuración de tickets', 'Plan de comunicación'] },
      { t: 'Soporte continuo', d: 'Cambios de configuración y resolución de problemas atendidos a medida que surgen.', dur: 'Mensual', out: 'Un sistema funcionando sin problemas', b: ['Cambios de configuración', 'Soporte a usuarios', 'Resolución de problemas', 'Informe mensual'] },
      { t: 'Revisión trimestral', d: 'Un seguimiento regular del estado del sistema y las prioridades.', dur: 'Trimestral', out: 'Una revisión trimestral de estado', b: ['Diagnóstico de estado', 'Revisión de rendimiento', 'Actualización de hoja de ruta', 'Revisión con interesados'] },
    ],
  },
  'm365-migration': {
    en: [
      { t: 'Assessment & planning', d: 'Current mailboxes, files and Teams data reviewed to build a migration plan.', dur: '1 week', out: 'A documented migration plan', b: ['Environment audit', 'Licensing review', 'Migration plan', 'Risk assessment'] },
      { t: 'Pilot migration', d: 'A small group migrated first to validate the approach before the full rollout.', dur: '1–2 weeks', out: 'A validated migration approach', b: ['Pilot group', 'Test migration', 'Issue resolution', 'Feedback'] },
      { t: 'Full migration', d: 'Remaining mailboxes, files and Teams data migrated in scheduled batches.', dur: '2–4 weeks', out: 'All data migrated and validated', b: ['Batch migration', 'Data validation', 'Mail flow cutover', 'User communication'] },
      { t: 'Cleanup & handover', d: 'Old systems decommissioned and documentation handed over.', dur: '1 week', out: 'A clean, documented handover', b: ['Old system cleanup', 'Final validation', 'Documentation', 'Admin handover'] },
    ],
    fr: [
      { t: 'Évaluation et planification', d: 'Boîtes courriel, fichiers et données Teams actuels examinés pour bâtir un plan de migration.', dur: '1 semaine', out: 'Un plan de migration documenté', b: ['Audit de l’environnement', 'Revue des licences', 'Plan de migration', 'Évaluation des risques'] },
      { t: 'Migration pilote', d: 'Un petit groupe migré en premier pour valider l’approche avant le déploiement complet.', dur: '1 à 2 semaines', out: 'Une approche de migration validée', b: ['Groupe pilote', 'Migration test', 'Résolution des problèmes', 'Rétroaction'] },
      { t: 'Migration complète', d: 'Boîtes courriel, fichiers et données Teams restants migrés par lots planifiés.', dur: '2 à 4 semaines', out: 'Toutes les données migrées et validées', b: ['Migration par lots', 'Validation des données', 'Bascule du courrier', 'Communication aux utilisateurs'] },
      { t: 'Nettoyage et transfert', d: 'Anciens systèmes mis hors service et documentation transmise.', dur: '1 semaine', out: 'Un transfert propre et documenté', b: ['Nettoyage de l’ancien système', 'Validation finale', 'Documentation', 'Transfert administratif'] },
    ],
    es: [
      { t: 'Evaluación y planificación', d: 'Buzones, archivos y datos de Teams actuales revisados para elaborar un plan de migración.', dur: '1 semana', out: 'Un plan de migración documentado', b: ['Auditoría del entorno', 'Revisión de licencias', 'Plan de migración', 'Evaluación de riesgos'] },
      { t: 'Migración piloto', d: 'Un grupo pequeño migrado primero para validar el enfoque antes del despliegue completo.', dur: '1 a 2 semanas', out: 'Un enfoque de migración validado', b: ['Grupo piloto', 'Migración de prueba', 'Resolución de problemas', 'Retroalimentación'] },
      { t: 'Migración completa', d: 'Buzones, archivos y datos de Teams restantes migrados en lotes programados.', dur: '2 a 4 semanas', out: 'Todos los datos migrados y validados', b: ['Migración por lotes', 'Validación de datos', 'Cambio de flujo de correo', 'Comunicación a usuarios'] },
      { t: 'Limpieza y traspaso', d: 'Sistemas antiguos dados de baja y documentación entregada.', dur: '1 semana', out: 'Un traspaso limpio y documentado', b: ['Limpieza del sistema anterior', 'Validación final', 'Documentación', 'Traspaso administrativo'] },
    ],
  },
  'm365-sharepoint': {
    en: [
      { t: 'Discovery', d: 'How your teams currently find and share information reviewed.', dur: '1 week', out: 'A clear information architecture plan', b: ['Content audit', 'User interviews', 'Information architecture', 'Goals alignment'] },
      { t: 'Design', d: 'Site structure and navigation designed around real usage patterns.', dur: '1–2 weeks', out: 'An approved site design', b: ['Site structure', 'Navigation design', 'Visual design', 'Stakeholder review'] },
      { t: 'Build', d: 'Sites, libraries and workflows built and populated with real content.', dur: '2–4 weeks', out: 'A working, populated site', b: ['Site build', 'Document migration', 'Workflow automation', 'Permissions setup'] },
      { t: 'Launch & training', d: 'Rolled out with training so adoption actually happens.', dur: '1 week', out: 'A live intranet and a trained team', b: ['Go-live', 'User training', 'Documentation', 'Early support'] },
    ],
    fr: [
      { t: 'Découverte', d: 'La façon dont vos équipes trouvent et partagent actuellement l’information examinée.', dur: '1 semaine', out: 'Un plan d’architecture de l’information clair', b: ['Audit de contenu', 'Entretiens utilisateurs', 'Architecture de l’information', 'Alignement des objectifs'] },
      { t: 'Design', d: 'Structure du site et navigation conçues selon les habitudes d’utilisation réelles.', dur: '1 à 2 semaines', out: 'Une conception de site approuvée', b: ['Structure du site', 'Conception de la navigation', 'Design visuel', 'Revue avec les parties prenantes'] },
      { t: 'Construction', d: 'Sites, bibliothèques et flux construits et remplis de contenu réel.', dur: '2 à 4 semaines', out: 'Un site fonctionnel et rempli', b: ['Construction du site', 'Migration des documents', 'Automatisation des flux', 'Configuration des permissions'] },
      { t: 'Lancement et formation', d: 'Déployé avec une formation pour que l’adoption se concrétise réellement.', dur: '1 semaine', out: 'Un intranet en ligne et une équipe formée', b: ['Mise en ligne', 'Formation des utilisateurs', 'Documentation', 'Soutien initial'] },
    ],
    es: [
      { t: 'Descubrimiento', d: 'Cómo tus equipos actualmente encuentran y comparten información, revisado.', dur: '1 semana', out: 'Un plan de arquitectura de información claro', b: ['Auditoría de contenido', 'Entrevistas con usuarios', 'Arquitectura de la información', 'Alineación de objetivos'] },
      { t: 'Diseño', d: 'Estructura del sitio y navegación diseñadas según patrones de uso reales.', dur: '1 a 2 semanas', out: 'Un diseño de sitio aprobado', b: ['Estructura del sitio', 'Diseño de navegación', 'Diseño visual', 'Revisión con interesados'] },
      { t: 'Construcción', d: 'Sitios, bibliotecas y flujos construidos y llenados con contenido real.', dur: '2 a 4 semanas', out: 'Un sitio funcional y con contenido', b: ['Construcción del sitio', 'Migración de documentos', 'Automatización de flujos', 'Configuración de permisos'] },
      { t: 'Lanzamiento y capacitación', d: 'Desplegado con capacitación para que la adopción realmente ocurra.', dur: '1 semana', out: 'Una intranet en vivo y un equipo capacitado', b: ['Puesta en marcha', 'Capacitación de usuarios', 'Documentación', 'Soporte inicial'] },
    ],
  },
  'm365-power': {
    en: [
      { t: 'Discovery', d: 'Manual processes and pain points identified and prioritized.', dur: '3–5 days', out: 'A prioritized automation list', b: ['Process audit', 'Pain point list', 'Feasibility check', 'Priority list'] },
      { t: 'Design', d: 'App or workflow design mapped to the real process, not a generic template.', dur: '1 week', out: 'An approved solution design', b: ['Solution design', 'Data model', 'Wireframes', 'Stakeholder review'] },
      { t: 'Build & test', d: 'The app, flow or dashboard built and tested against real scenarios.', dur: '2–5 weeks', out: 'A tested, working solution', b: ['App/flow build', 'Connector setup', 'Testing', 'Bug fixes'] },
      { t: 'Launch & support', d: 'Rolled out with training and a support window for adjustments.', dur: 'Ongoing', out: 'A live solution and a trained team', b: ['Go-live', 'User training', 'Documentation', 'Adjustment window'] },
    ],
    fr: [
      { t: 'Découverte', d: 'Processus manuels et points de friction identifiés et priorisés.', dur: '3 à 5 jours', out: 'Une liste d’automatisation priorisée', b: ['Audit des processus', 'Liste des points de friction', 'Étude de faisabilité', 'Liste des priorités'] },
      { t: 'Conception', d: 'Conception de l’application ou du flux alignée sur le processus réel, pas un gabarit générique.', dur: '1 semaine', out: 'Une conception de solution approuvée', b: ['Conception de la solution', 'Modèle de données', 'Maquettes', 'Revue avec les parties prenantes'] },
      { t: 'Développement et tests', d: 'L’application, le flux ou le tableau de bord construit et testé sur des scénarios réels.', dur: '2 à 5 semaines', out: 'Une solution testée et fonctionnelle', b: ['Construction de l’application ou du flux', 'Configuration des connecteurs', 'Tests', 'Corrections de bogues'] },
      { t: 'Lancement et soutien', d: 'Déployé avec formation et une période de soutien pour les ajustements.', dur: 'Continu', out: 'Une solution en ligne et une équipe formée', b: ['Mise en ligne', 'Formation des utilisateurs', 'Documentation', 'Période d’ajustement'] },
    ],
    es: [
      { t: 'Descubrimiento', d: 'Procesos manuales y puntos de fricción identificados y priorizados.', dur: '3 a 5 días', out: 'Una lista de automatización priorizada', b: ['Auditoría de procesos', 'Lista de puntos de fricción', 'Estudio de viabilidad', 'Lista de prioridades'] },
      { t: 'Diseño', d: 'Diseño de la app o el flujo alineado al proceso real, no una plantilla genérica.', dur: '1 semana', out: 'Un diseño de solución aprobado', b: ['Diseño de la solución', 'Modelo de datos', 'Bocetos', 'Revisión con interesados'] },
      { t: 'Desarrollo y pruebas', d: 'La app, el flujo o el panel construido y probado con escenarios reales.', dur: '2 a 5 semanas', out: 'Una solución probada y funcional', b: ['Construcción de app/flujo', 'Configuración de conectores', 'Pruebas', 'Corrección de errores'] },
      { t: 'Lanzamiento y soporte', d: 'Desplegado con capacitación y una ventana de soporte para ajustes.', dur: 'Continuo', out: 'Una solución en vivo y un equipo capacitado', b: ['Puesta en marcha', 'Capacitación de usuarios', 'Documentación', 'Ventana de ajustes'] },
    ],
  },
  'm365-security': {
    en: [
      { t: 'Security audit', d: 'Current tenant configuration reviewed against your risk profile.', dur: '1 week', out: 'A documented risk assessment', b: ['Tenant audit', 'Risk assessment', 'Compliance review', 'Findings report'] },
      { t: 'Configuration', d: 'Identity, device and data protection policies configured.', dur: '1–2 weeks', out: 'Configured security policies', b: ['Conditional access', 'Device compliance', 'Data loss prevention', 'Identity protection'] },
      { t: 'Testing', d: 'Policies tested to confirm they protect without blocking real work.', dur: '3–5 days', out: 'Verified, working policies', b: ['Policy testing', 'User impact review', 'Adjustments', 'Sign-off'] },
      { t: 'Ongoing support', d: 'Admin tasks and monitoring handled as an ongoing retainer.', dur: 'Monthly', out: 'A secure, monitored tenant', b: ['User management', 'License management', 'Monitoring', 'Monthly report'] },
    ],
    fr: [
      { t: 'Audit de sécurité', d: 'Configuration actuelle du tenant examinée selon votre profil de risque.', dur: '1 semaine', out: 'Une évaluation des risques documentée', b: ['Audit du tenant', 'Évaluation des risques', 'Revue de conformité', 'Rapport de constats'] },
      { t: 'Configuration', d: 'Politiques de protection des identités, des appareils et des données configurées.', dur: '1 à 2 semaines', out: 'Des politiques de sécurité configurées', b: ['Accès conditionnel', 'Conformité des appareils', 'Prévention de la perte de données', 'Protection des identités'] },
      { t: 'Tests', d: 'Politiques testées pour confirmer qu’elles protègent sans bloquer le travail réel.', dur: '3 à 5 jours', out: 'Des politiques vérifiées et fonctionnelles', b: ['Tests des politiques', 'Revue de l’impact utilisateur', 'Ajustements', 'Validation finale'] },
      { t: 'Soutien continu', d: 'Tâches administratives et supervision traitées dans un forfait continu.', dur: 'Mensuel', out: 'Un tenant sécurisé et supervisé', b: ['Gestion des utilisateurs', 'Gestion des licences', 'Supervision', 'Rapport mensuel'] },
    ],
    es: [
      { t: 'Auditoría de seguridad', d: 'Configuración actual del tenant revisada según tu perfil de riesgo.', dur: '1 semana', out: 'Una evaluación de riesgos documentada', b: ['Auditoría del tenant', 'Evaluación de riesgos', 'Revisión de cumplimiento', 'Informe de hallazgos'] },
      { t: 'Configuración', d: 'Políticas de protección de identidad, dispositivos y datos configuradas.', dur: '1 a 2 semanas', out: 'Políticas de seguridad configuradas', b: ['Acceso condicional', 'Cumplimiento de dispositivos', 'Prevención de pérdida de datos', 'Protección de identidad'] },
      { t: 'Pruebas', d: 'Políticas probadas para confirmar que protegen sin bloquear el trabajo real.', dur: '3 a 5 días', out: 'Políticas verificadas y funcionales', b: ['Pruebas de políticas', 'Revisión de impacto en usuarios', 'Ajustes', 'Aprobación final'] },
      { t: 'Soporte continuo', d: 'Tareas administrativas y monitoreo atendidos como un contrato continuo.', dur: 'Mensual', out: 'Un tenant seguro y monitoreado', b: ['Gestión de usuarios', 'Gestión de licencias', 'Monitoreo', 'Informe mensual'] },
    ],
  },
  'bx-implementation': {
    en: [
      { t: 'Discovery & process mapping', d: 'Your sales and operations processes mapped before configuration starts.', dur: '3–5 days', out: 'A documented process design', b: ['Process mapping', 'Requirements workshop', 'Data model plan', 'Success criteria'] },
      { t: 'Configuration', d: 'CRM pipelines, tasks and permissions configured to match your process design.', dur: '1–2 weeks', out: 'A configured Bitrix24 account', b: ['CRM configuration', 'Task structures', 'Permission sets', 'Sandbox review'] },
      { t: 'Data migration', d: 'Existing CRM and contact data imported and cleaned.', dur: '3–5 days', out: 'Clean, migrated data', b: ['Data mapping', 'Import & cleanup', 'Deduplication', 'Validation'] },
      { t: 'Go-live & training', d: 'A controlled launch with user training.', dur: '1 week', out: 'A live account and a trained team', b: ['Go-live plan', 'User training', 'Documentation', 'Early support'] },
    ],
    fr: [
      { t: 'Découverte et cartographie des processus', d: 'Vos processus de vente et d’exploitation cartographiés avant le début de la configuration.', dur: '3 à 5 jours', out: 'Une conception de processus documentée', b: ['Cartographie des processus', 'Atelier des besoins', 'Plan du modèle de données', 'Critères de réussite'] },
      { t: 'Configuration', d: 'Pipelines CRM, tâches et permissions configurés selon la conception de processus convenue.', dur: '1 à 2 semaines', out: 'Un compte Bitrix24 configuré', b: ['Configuration du CRM', 'Structures de tâches', 'Ensembles de permissions', 'Revue du bac à sable'] },
      { t: 'Migration des données', d: 'Données CRM et contacts existants importées et nettoyées.', dur: '3 à 5 jours', out: 'Des données propres et migrées', b: ['Mappage des données', 'Importation et nettoyage', 'Dédoublonnage', 'Validation'] },
      { t: 'Mise en production et formation', d: 'Un lancement contrôlé avec formation des utilisateurs.', dur: '1 semaine', out: 'Un compte en production et une équipe formée', b: ['Plan de mise en production', 'Formation des utilisateurs', 'Documentation', 'Soutien initial'] },
    ],
    es: [
      { t: 'Descubrimiento y mapeo de procesos', d: 'Tus procesos de ventas y operaciones mapeados antes de comenzar la configuración.', dur: '3 a 5 días', out: 'Un diseño de procesos documentado', b: ['Mapeo de procesos', 'Taller de requisitos', 'Plan del modelo de datos', 'Criterios de éxito'] },
      { t: 'Configuración', d: 'Pipelines de CRM, tareas y permisos configurados según el diseño de procesos acordado.', dur: '1 a 2 semanas', out: 'Una cuenta de Bitrix24 configurada', b: ['Configuración del CRM', 'Estructuras de tareas', 'Conjuntos de permisos', 'Revisión del sandbox'] },
      { t: 'Migración de datos', d: 'Datos de CRM y contactos existentes importados y depurados.', dur: '3 a 5 días', out: 'Datos limpios y migrados', b: ['Mapeo de datos', 'Importación y depuración', 'Eliminación de duplicados', 'Validación'] },
      { t: 'Puesta en marcha y capacitación', d: 'Un lanzamiento controlado con capacitación de usuarios.', dur: '1 semana', out: 'Una cuenta en producción y un equipo capacitado', b: ['Plan de puesta en marcha', 'Capacitación de usuarios', 'Documentación', 'Soporte inicial'] },
    ],
  },
  'bx-customization': {
    en: [
      { t: 'Requirements', d: 'What needs automation, versus manual process, agreed before build starts.', dur: '3–5 days', out: 'A written automation scope', b: ['Process review', 'Automation scope', 'Design review', 'Estimate'] },
      { t: 'Build', d: 'Custom fields, automation rules and workflows built to spec.', dur: '1–3 weeks', out: 'Working automation in a test account', b: ['Custom fields', 'Automation rules', 'Workflow build', 'Internal testing'] },
      { t: 'Testing', d: 'Automation tested against real scenarios before rollout.', dur: '3–5 days', out: 'Verified, working automation', b: ['Scenario testing', 'Edge-case testing', 'User feedback', 'Adjustments'] },
      { t: 'Deployment', d: 'Rolled out with documentation so your team understands how it works.', dur: '2–3 days', out: 'A deployed, documented automation', b: ['Deployment', 'Documentation', 'Team walkthrough', 'Handover'] },
    ],
    fr: [
      { t: 'Exigences', d: 'Ce qui nécessite de l’automatisation, par rapport au processus manuel, convenu avant le développement.', dur: '3 à 5 jours', out: 'Une portée d’automatisation écrite', b: ['Revue des processus', 'Portée de l’automatisation', 'Revue de conception', 'Estimation'] },
      { t: 'Développement', d: 'Champs personnalisés, règles d’automatisation et flux construits selon les spécifications.', dur: '1 à 3 semaines', out: 'Une automatisation fonctionnelle dans un compte test', b: ['Champs personnalisés', 'Règles d’automatisation', 'Construction des flux', 'Tests internes'] },
      { t: 'Tests', d: 'Automatisation testée sur des scénarios réels avant le déploiement.', dur: '3 à 5 jours', out: 'Une automatisation vérifiée et fonctionnelle', b: ['Tests de scénarios', 'Tests des cas limites', 'Rétroaction des utilisateurs', 'Ajustements'] },
      { t: 'Déploiement', d: 'Déployé avec documentation pour que votre équipe comprenne son fonctionnement.', dur: '2 à 3 jours', out: 'Une automatisation déployée et documentée', b: ['Déploiement', 'Documentation', 'Présentation à l’équipe', 'Transfert'] },
    ],
    es: [
      { t: 'Requisitos', d: 'Qué necesita automatización, frente al proceso manual, acordado antes de desarrollar.', dur: '3 a 5 días', out: 'Un alcance de automatización por escrito', b: ['Revisión de procesos', 'Alcance de automatización', 'Revisión de diseño', 'Estimación'] },
      { t: 'Desarrollo', d: 'Campos personalizados, reglas de automatización y flujos construidos según especificación.', dur: '1 a 3 semanas', out: 'Automatización funcional en una cuenta de prueba', b: ['Campos personalizados', 'Reglas de automatización', 'Construcción de flujos', 'Pruebas internas'] },
      { t: 'Pruebas', d: 'Automatización probada con escenarios reales antes del despliegue.', dur: '3 a 5 días', out: 'Automatización verificada y funcional', b: ['Pruebas de escenarios', 'Pruebas de casos límite', 'Retroalimentación de usuarios', 'Ajustes'] },
      { t: 'Despliegue', d: 'Desplegado con documentación para que tu equipo entienda cómo funciona.', dur: '2 a 3 días', out: 'Una automatización desplegada y documentada', b: ['Despliegue', 'Documentación', 'Presentación al equipo', 'Traspaso'] },
    ],
  },
  'bx-integration': {
    en: [
      { t: 'Systems audit', d: 'Systems to connect and data flow mapped out.', dur: '2–3 days', out: 'A clear integration plan', b: ['System inventory', 'Data flow mapping', 'API review', 'Integration plan'] },
      { t: 'Integration design', d: 'Integration architecture designed, including error handling.', dur: '3–5 days', out: 'An approved integration design', b: ['Architecture design', 'Field mapping', 'Error-handling plan', 'Security review'] },
      { t: 'Build & test', d: 'Integration built and tested against real data.', dur: '1–3 weeks', out: 'A tested, working integration', b: ['Integration build', 'Data validation', 'Testing', 'Failure testing'] },
      { t: 'Monitor & handover', d: 'Monitoring set up and documentation handed over.', dur: 'Ongoing', out: 'A monitored integration and runbook', b: ['Monitoring setup', 'Alerting', 'Runbook', 'Handover'] },
    ],
    fr: [
      { t: 'Audit des systèmes', d: 'Systèmes à connecter et flux de données cartographiés.', dur: '2 à 3 jours', out: 'Un plan d’intégration clair', b: ['Inventaire des systèmes', 'Cartographie des flux de données', 'Revue des API', 'Plan d’intégration'] },
      { t: 'Conception de l’intégration', d: 'Architecture d’intégration conçue, y compris la gestion des échecs.', dur: '3 à 5 jours', out: 'Une conception d’intégration approuvée', b: ['Conception de l’architecture', 'Mappage des champs', 'Plan de gestion des erreurs', 'Revue de sécurité'] },
      { t: 'Développement et tests', d: 'Intégration construite et testée avec des données réelles.', dur: '1 à 3 semaines', out: 'Une intégration testée et fonctionnelle', b: ['Construction de l’intégration', 'Validation des données', 'Tests', 'Tests de défaillance'] },
      { t: 'Suivi et transfert', d: 'Supervision mise en place et documentation transmise.', dur: 'Continu', out: 'Une intégration supervisée et un guide', b: ['Mise en place de la supervision', 'Alertes', 'Guide d’exploitation', 'Transfert'] },
    ],
    es: [
      { t: 'Auditoría de sistemas', d: 'Sistemas a conectar y flujo de datos definidos.', dur: '2 a 3 días', out: 'Un plan de integración claro', b: ['Inventario de sistemas', 'Mapeo de flujo de datos', 'Revisión de API', 'Plan de integración'] },
      { t: 'Diseño de la integración', d: 'Arquitectura de integración diseñada, incluyendo el manejo de fallos.', dur: '3 a 5 días', out: 'Un diseño de integración aprobado', b: ['Diseño de arquitectura', 'Mapeo de campos', 'Plan de manejo de errores', 'Revisión de seguridad'] },
      { t: 'Desarrollo y pruebas', d: 'Integración construida y probada con datos reales.', dur: '1 a 3 semanas', out: 'Una integración probada y funcional', b: ['Construcción de la integración', 'Validación de datos', 'Pruebas', 'Pruebas de fallos'] },
      { t: 'Monitoreo y traspaso', d: 'Monitoreo configurado y documentación entregada.', dur: 'Continuo', out: 'Una integración monitoreada y un manual', b: ['Configuración de monitoreo', 'Alertas', 'Manual operativo', 'Traspaso'] },
    ],
  },
  'bx-support': {
    en: [
      { t: 'Needs assessment', d: 'Your team\'s current workflows and gaps reviewed.', dur: '2–3 days', out: 'A documented training plan', b: ['Workflow review', 'Skill assessment', 'Training plan', 'Priority list'] },
      { t: 'Hands-on training', d: 'Sessions built around your specific setup, not generic tutorials.', dur: '1–2 weeks', out: 'A trained team', b: ['Live sessions', 'Role-based training', 'Practice exercises', 'Q&A'] },
      { t: 'Adoption support', d: 'Follow-up support as your team starts using it daily.', dur: '2–3 weeks', out: 'A team using the system daily', b: ['Follow-up sessions', 'Troubleshooting', 'Adjustments', 'Usage review'] },
      { t: 'Ongoing support', d: 'Continued support as questions and needs come up.', dur: 'Monthly', out: 'Ongoing access to support', b: ['Help desk access', 'Periodic check-ins', 'New feature training', 'Monthly report'] },
    ],
    fr: [
      { t: 'Évaluation des besoins', d: 'Flux de travail actuels et lacunes de votre équipe examinés.', dur: '2 à 3 jours', out: 'Un plan de formation documenté', b: ['Revue des flux de travail', 'Évaluation des compétences', 'Plan de formation', 'Liste des priorités'] },
      { t: 'Formation pratique', d: 'Séances conçues selon votre configuration précise, pas des tutoriels génériques.', dur: '1 à 2 semaines', out: 'Une équipe formée', b: ['Séances en direct', 'Formation par rôle', 'Exercices pratiques', 'Questions et réponses'] },
      { t: 'Soutien à l’adoption', d: 'Suivi assuré pendant que votre équipe commence à l’utiliser au quotidien.', dur: '2 à 3 semaines', out: 'Une équipe qui utilise le système au quotidien', b: ['Séances de suivi', 'Dépannage', 'Ajustements', 'Revue de l’utilisation'] },
      { t: 'Soutien continu', d: 'Soutien poursuivi à mesure que les questions et les besoins surviennent.', dur: 'Mensuel', out: 'Un accès continu au soutien', b: ['Accès au service d’assistance', 'Suivis périodiques', 'Formation sur les nouvelles fonctions', 'Rapport mensuel'] },
    ],
    es: [
      { t: 'Evaluación de necesidades', d: 'Flujos de trabajo actuales y vacíos de tu equipo revisados.', dur: '2 a 3 días', out: 'Un plan de capacitación documentado', b: ['Revisión de flujos de trabajo', 'Evaluación de habilidades', 'Plan de capacitación', 'Lista de prioridades'] },
      { t: 'Capacitación práctica', d: 'Sesiones creadas según tu configuración específica, no tutoriales genéricos.', dur: '1 a 2 semanas', out: 'Un equipo capacitado', b: ['Sesiones en vivo', 'Capacitación por rol', 'Ejercicios prácticos', 'Preguntas y respuestas'] },
      { t: 'Soporte de adopción', d: 'Seguimiento mientras tu equipo comienza a usarlo a diario.', dur: '2 a 3 semanas', out: 'Un equipo usando el sistema a diario', b: ['Sesiones de seguimiento', 'Resolución de problemas', 'Ajustes', 'Revisión de uso'] },
      { t: 'Soporte continuo', d: 'Soporte continuo a medida que surgen preguntas y necesidades.', dur: 'Mensual', out: 'Acceso continuo a soporte', b: ['Acceso a mesa de ayuda', 'Seguimientos periódicos', 'Capacitación en nuevas funciones', 'Informe mensual'] },
    ],
  },
};
