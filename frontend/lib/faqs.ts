import type { Locale } from './i18n';
import type { ServiceId } from './site';

type QA = { q: string; a: string };
type ByLocale = Record<Locale, QA[]>;

export const FAQS: Record<ServiceId, ByLocale> = {
  web: {
    en: [
      { q: 'How long does a website take to build?', a: 'A landing page takes about a week, a business site two to four weeks and a custom web application two to four months. You get a written timeline before work starts.' },
      { q: 'Will my site work on phones and rank in search?', a: 'Yes. Every site is responsive, tested on real devices and built with clean markup, fast loading and technical SEO in place before launch.' },
      { q: 'Can I edit the content myself?', a: 'Yes. We connect a CMS or an admin panel so your team can update pages, blog posts and products without a developer.' },
    ],
    fr: [
      { q: 'Combien de temps faut-il pour créer un site ?', a: 'Une page d’atterrissage prend environ une semaine, un site d’entreprise deux à quatre semaines et une application web sur mesure deux à quatre mois. Vous recevez un calendrier écrit avant le début des travaux.' },
      { q: 'Mon site fonctionnera-t-il sur mobile et sera-t-il bien référencé ?', a: 'Oui. Chaque site est adaptatif, testé sur de vrais appareils et construit avec un code propre, un chargement rapide et un SEO technique en place avant le lancement.' },
      { q: 'Puis-je modifier le contenu moi-même ?', a: 'Oui. Nous branchons un CMS ou un panneau d’administration pour que votre équipe mette à jour pages, articles et produits sans développeur.' },
    ],
    es: [
      { q: '¿Cuánto tarda en construirse un sitio web?', a: 'Una página de aterrizaje toma cerca de una semana, un sitio corporativo de dos a cuatro semanas y una aplicación web a medida de dos a cuatro meses. Recibes un calendario por escrito antes de empezar.' },
      { q: '¿Mi sitio funcionará en móviles y posicionará en buscadores?', a: 'Sí. Cada sitio es adaptable, se prueba en dispositivos reales y se construye con código limpio, carga rápida y SEO técnico listo antes del lanzamiento.' },
      { q: '¿Puedo editar el contenido yo mismo?', a: 'Sí. Conectamos un CMS o un panel de administración para que tu equipo actualice páginas, artículos y productos sin un desarrollador.' },
    ],
  },
  mobile: {
    en: [
      { q: 'Native or cross-platform: which should I choose?', a: 'Cross-platform (one codebase for iOS and Android) suits most products and costs less. We recommend native only when you need deep device features or maximum performance.' },
      { q: 'Do you publish the app to the stores?', a: 'Yes. Store submission for Apple and Google is included in our app packages, including listing assets and review support.' },
      { q: 'What is an MVP app?', a: 'A first version with only the core features, built to test your idea with real users before you invest in the full product.' },
    ],
    fr: [
      { q: 'Natif ou multiplateforme : que choisir ?', a: 'Le multiplateforme (une seule base de code pour iOS et Android) convient à la plupart des produits et coûte moins cher. Nous recommandons le natif seulement pour des fonctions d’appareil poussées ou une performance maximale.' },
      { q: 'Publiez-vous l’application sur les boutiques ?', a: 'Oui. La publication sur l’App Store et Google Play est incluse dans nos forfaits, y compris les visuels de fiche et le suivi de l’examen.' },
      { q: 'Qu’est-ce qu’une application MVP ?', a: 'Une première version limitée aux fonctions essentielles, conçue pour tester votre idée auprès de vrais utilisateurs avant d’investir dans le produit complet.' },
    ],
    es: [
      { q: '¿Nativa o multiplataforma: cuál elegir?', a: 'La multiplataforma (un solo código para iOS y Android) sirve para la mayoría de los productos y cuesta menos. Recomendamos nativa solo si necesitas funciones profundas del dispositivo o el máximo rendimiento.' },
      { q: '¿Publican la app en las tiendas?', a: 'Sí. El envío a App Store y Google Play está incluido en nuestros paquetes, con materiales de la ficha y apoyo durante la revisión.' },
      { q: '¿Qué es una app MVP?', a: 'Una primera versión con solo las funciones esenciales, creada para probar tu idea con usuarios reales antes de invertir en el producto completo.' },
    ],
  },
  ai: {
    en: [
      { q: 'Do I need a lot of data to use AI?', a: 'Not always. Chatbots and generative AI can work from your existing documents and website content. Custom models need more data, and we assess that in a consulting session first.' },
      { q: 'Will the chatbot make things up?', a: 'We ground answers in your own content, add guardrails and hand off to a person when confidence is low, then review real conversations to keep improving it.' },
      { q: 'Where does my data go?', a: 'We choose providers and settings that fit your privacy needs, and we can run models inside your own cloud account when required.' },
    ],
    fr: [
      { q: 'Faut-il beaucoup de données pour utiliser l’IA ?', a: 'Pas toujours. Les agents conversationnels et l’IA générative peuvent s’appuyer sur vos documents et le contenu de votre site. Les modèles sur mesure exigent plus de données ; nous l’évaluons d’abord lors d’une séance de conseil.' },
      { q: 'L’agent conversationnel peut-il inventer des réponses ?', a: 'Nous fondons les réponses sur votre propre contenu, ajoutons des garde-fous et transférons à une personne quand la confiance est faible, puis nous examinons de vraies conversations pour l’améliorer.' },
      { q: 'Où vont mes données ?', a: 'Nous choisissons des fournisseurs et des réglages adaptés à vos exigences de confidentialité, et nous pouvons exécuter les modèles dans votre propre compte infonuagique au besoin.' },
    ],
    es: [
      { q: '¿Necesito muchos datos para usar IA?', a: 'No siempre. Los chatbots y la IA generativa pueden trabajar con tus documentos y el contenido de tu sitio. Los modelos a medida requieren más datos, y lo evaluamos primero en una sesión de consultoría.' },
      { q: '¿El chatbot puede inventar respuestas?', a: 'Basamos las respuestas en tu propio contenido, añadimos límites de seguridad y pasamos a una persona cuando la confianza es baja; luego revisamos conversaciones reales para mejorarlo.' },
      { q: '¿A dónde van mis datos?', a: 'Elegimos proveedores y ajustes acordes a tus necesidades de privacidad, y podemos ejecutar los modelos dentro de tu propia cuenta en la nube cuando haga falta.' },
    ],
  },
  blockchain: {
    en: [
      { q: 'Are smart contracts safe?', a: 'They are only as safe as their testing. We write automated tests, review the code line by line and recommend an independent audit before any contract holds real funds.' },
      { q: 'Which blockchains do you build on?', a: 'Ethereum and EVM-compatible networks such as Polygon are our main targets. We pick the chain based on your fees, speed and audience.' },
      { q: 'Do I really need a blockchain?', a: 'Often not. We will tell you honestly if a conventional database does the job, and only recommend blockchain when it adds real value.' },
    ],
    fr: [
      { q: 'Les contrats intelligents sont-ils sûrs ?', a: 'Ils ne sont aussi sûrs que leurs tests. Nous écrivons des tests automatisés, révisons le code ligne par ligne et recommandons un audit indépendant avant que tout contrat ne détienne de vrais fonds.' },
      { q: 'Sur quelles chaînes de blocs travaillez-vous ?', a: 'Ethereum et les réseaux compatibles EVM comme Polygon sont nos cibles principales. Nous choisissons la chaîne selon vos frais, votre vitesse et votre public.' },
      { q: 'Ai-je vraiment besoin d’une chaîne de blocs ?', a: 'Souvent non. Nous vous dirons franchement si une base de données classique suffit, et ne recommandons la chaîne de blocs que lorsqu’elle apporte une vraie valeur.' },
    ],
    es: [
      { q: '¿Son seguros los contratos inteligentes?', a: 'Son tan seguros como sus pruebas. Escribimos pruebas automatizadas, revisamos el código línea por línea y recomendamos una auditoría independiente antes de que cualquier contrato maneje fondos reales.' },
      { q: '¿En qué blockchains trabajan?', a: 'Ethereum y redes compatibles con EVM como Polygon son nuestro foco principal. Elegimos la cadena según tus comisiones, velocidad y público.' },
      { q: '¿Realmente necesito una blockchain?', a: 'Muchas veces no. Te diremos con honestidad si una base de datos convencional resuelve el problema, y solo recomendamos blockchain cuando aporta valor real.' },
    ],
  },
  cloud: {
    en: [
      { q: 'Which cloud providers do you work with?', a: 'AWS, Google Cloud and Azure. We choose based on your workload, team skills and budget, and avoid lock-in where it matters.' },
      { q: 'Can you lower our cloud bill?', a: 'Usually. We review usage, right-size resources and remove waste, and report savings against your current spend.' },
      { q: 'What does CI/CD give me?', a: 'Every code change is built, tested and deployed automatically, so releases are faster, safer and no longer depend on one person.' },
    ],
    fr: [
      { q: 'Avec quels fournisseurs infonuagiques travaillez-vous ?', a: 'AWS, Google Cloud et Azure. Nous choisissons selon votre charge de travail, les compétences de votre équipe et votre budget, en évitant la dépendance là où cela compte.' },
      { q: 'Pouvez-vous réduire notre facture infonuagique ?', a: 'Généralement. Nous examinons l’utilisation, ajustons les ressources et éliminons le gaspillage, puis nous chiffrons les économies par rapport à vos dépenses actuelles.' },
      { q: 'Que m’apporte le CI/CD ?', a: 'Chaque modification du code est compilée, testée et déployée automatiquement : les livraisons sont plus rapides, plus sûres et ne dépendent plus d’une seule personne.' },
    ],
    es: [
      { q: '¿Con qué proveedores de nube trabajan?', a: 'AWS, Google Cloud y Azure. Elegimos según tu carga de trabajo, las habilidades de tu equipo y tu presupuesto, evitando la dependencia donde importa.' },
      { q: '¿Pueden reducir nuestra factura de nube?', a: 'Normalmente sí. Revisamos el uso, ajustamos los recursos y eliminamos el desperdicio, y reportamos el ahorro frente a tu gasto actual.' },
      { q: '¿Qué me aporta el CI/CD?', a: 'Cada cambio de código se compila, prueba y despliega automáticamente, así que los lanzamientos son más rápidos, más seguros y ya no dependen de una sola persona.' },
    ],
  },
  security: {
    en: [
      { q: 'What does a security audit cover?', a: 'We test your application for common vulnerabilities such as those in the OWASP Top 10, review code and configuration, and deliver a prioritized report with fixes.' },
      { q: 'Will testing disrupt my live site?', a: 'We agree the scope and timing with you first and test carefully so normal operations continue. Risky tests run in a staging copy.' },
      { q: 'How often should we audit?', a: 'At least once a year, and after major releases or infrastructure changes. Monthly monitoring fills the gaps in between.' },
    ],
    fr: [
      { q: 'Que couvre un audit de sécurité ?', a: 'Nous testons votre application contre les vulnérabilités courantes, notamment celles du Top 10 de l’OWASP, examinons le code et la configuration, puis remettons un rapport priorisé avec les correctifs.' },
      { q: 'Les tests perturberont-ils mon site en production ?', a: 'Nous convenons d’abord de la portée et du calendrier avec vous et testons avec soin pour que l’activité continue normalement. Les tests risqués s’exécutent sur une copie de préproduction.' },
      { q: 'À quelle fréquence faut-il auditer ?', a: 'Au moins une fois par an, ainsi qu’après les versions majeures ou les changements d’infrastructure. La surveillance mensuelle comble l’intervalle.' },
    ],
    es: [
      { q: '¿Qué cubre una auditoría de seguridad?', a: 'Probamos tu aplicación frente a vulnerabilidades comunes como las del OWASP Top 10, revisamos código y configuración, y entregamos un informe priorizado con las correcciones.' },
      { q: '¿Las pruebas afectarán mi sitio en producción?', a: 'Primero acordamos contigo el alcance y el momento, y probamos con cuidado para que la operación siga normal. Las pruebas riesgosas se hacen en una copia de pruebas.' },
      { q: '¿Cada cuánto conviene auditar?', a: 'Al menos una vez al año, y después de lanzamientos importantes o cambios de infraestructura. El monitoreo mensual cubre el tiempo intermedio.' },
    ],
  },
  design: {
    en: [
      { q: 'Why prototype before development?', a: 'A clickable prototype lets you and your users test the idea while changes are still cheap, so development starts with fewer surprises.' },
      { q: 'Do we get the design files?', a: 'Yes. You own the Figma files and the design system we build, so any developer can pick them up.' },
      { q: 'Can you redesign an existing product?', a: 'Yes. We start with an audit of your current flows and analytics, then redesign what holds users back.' },
    ],
    fr: [
      { q: 'Pourquoi prototyper avant le développement ?', a: 'Un prototype cliquable permet à vous et à vos utilisateurs de tester l’idée quand les changements coûtent encore peu, et le développement démarre avec moins de surprises.' },
      { q: 'Recevons-nous les fichiers de design ?', a: 'Oui. Vous êtes propriétaire des fichiers Figma et du système de design que nous créons, de sorte que tout développeur peut les reprendre.' },
      { q: 'Pouvez-vous refondre un produit existant ?', a: 'Oui. Nous commençons par un audit de vos parcours et de vos statistiques, puis nous refondons ce qui freine les utilisateurs.' },
    ],
    es: [
      { q: '¿Por qué crear un prototipo antes de desarrollar?', a: 'Un prototipo interactivo te permite a ti y a tus usuarios probar la idea cuando los cambios aún cuestan poco, y el desarrollo empieza con menos sorpresas.' },
      { q: '¿Recibimos los archivos de diseño?', a: 'Sí. Eres dueño de los archivos de Figma y del sistema de diseño que creamos, para que cualquier desarrollador pueda retomarlos.' },
      { q: '¿Pueden rediseñar un producto existente?', a: 'Sí. Empezamos con una auditoría de tus flujos y analítica actuales, y rediseñamos lo que frena a los usuarios.' },
    ],
  },
  marketing: {
    en: [
      { q: 'What are AEO and GEO?', a: 'Answer Engine Optimisation and Generative Engine Optimisation help your business get found and cited in AI answers from tools like ChatGPT, Perplexity and Google AI Overviews, alongside classic SEO.' },
      { q: 'How soon will I see results?', a: 'Paid ads can bring traffic within days. SEO usually takes three to six months to build momentum. We report on both every month.' },
      { q: 'Do you require long contracts?', a: 'Monthly plans can be cancelled with notice. We earn the next month with reporting you can check yourself.' },
    ],
    fr: [
      { q: 'Que sont l’AEO et le GEO ?', a: 'L’optimisation pour les moteurs de réponses (AEO) et pour les moteurs génératifs (GEO) aident votre entreprise à être trouvée et citée dans les réponses d’IA d’outils comme ChatGPT, Perplexity et les aperçus IA de Google, en plus du SEO classique.' },
      { q: 'Quand verrai-je des résultats ?', a: 'La publicité payante peut générer du trafic en quelques jours. Le SEO prend généralement de trois à six mois pour prendre son élan. Nous faisons rapport sur les deux chaque mois.' },
      { q: 'Exigez-vous de longs contrats ?', a: 'Les forfaits mensuels peuvent être résiliés avec préavis. Nous méritons le mois suivant grâce à des rapports que vous pouvez vérifier vous-même.' },
    ],
    es: [
      { q: '¿Qué son AEO y GEO?', a: 'La optimización para motores de respuestas (AEO) y para motores generativos (GEO) ayudan a que tu negocio sea encontrado y citado en respuestas de IA de herramientas como ChatGPT, Perplexity y los resúmenes de IA de Google, junto con el SEO clásico.' },
      { q: '¿Cuándo veré resultados?', a: 'La publicidad de pago puede traer tráfico en días. El SEO suele tardar de tres a seis meses en ganar impulso. Reportamos ambos cada mes.' },
      { q: '¿Exigen contratos largos?', a: 'Los planes mensuales se pueden cancelar con aviso previo. Nos ganamos el mes siguiente con reportes que puedes verificar tú mismo.' },
    ],
  },
  branding: {
    en: [
      { q: 'What do I receive at the end?', a: 'Final logo files in every format you need, a colour and type system, and a guidelines document so anyone can apply the brand consistently.' },
      { q: 'How many concepts and revisions are included?', a: 'Starter branding includes three concepts. Every package includes revision rounds, which we agree in writing before we begin.' },
      { q: 'Do I own the logo?', a: 'Yes. Once the final invoice is paid, you own the final artwork and files outright.' },
    ],
    fr: [
      { q: 'Que reçois-je à la fin ?', a: 'Les fichiers finaux du logo dans tous les formats nécessaires, un système de couleurs et de typographie, et un guide de marque pour que chacun applique l’image de marque de façon cohérente.' },
      { q: 'Combien de concepts et de révisions sont inclus ?', a: 'L’image de marque de base comprend trois concepts. Chaque forfait inclut des cycles de révision, convenus par écrit avant le début.' },
      { q: 'Suis-je propriétaire du logo ?', a: 'Oui. Une fois la facture finale payée, vous détenez pleinement l’œuvre finale et les fichiers.' },
    ],
    es: [
      { q: '¿Qué recibo al final?', a: 'Los archivos finales del logotipo en todos los formatos necesarios, un sistema de color y tipografía, y una guía de marca para que cualquiera aplique la marca de forma coherente.' },
      { q: '¿Cuántos conceptos y revisiones se incluyen?', a: 'El branding inicial incluye tres conceptos. Cada paquete incluye rondas de revisión, acordadas por escrito antes de empezar.' },
      { q: '¿Soy dueño del logotipo?', a: 'Sí. Una vez pagada la factura final, eres dueño de la obra final y de los archivos.' },
    ],
  },

  'sf-implementation': {
    en: [
      { q: 'How long does a Salesforce implementation take?', a: 'A single-cloud implementation typically runs 6 to 10 weeks depending on process complexity. Multi-cloud rollouts take longer and are usually phased.' },
      { q: 'Which Salesforce clouds do you work with?', a: 'Sales Cloud, Service Cloud and Experience Cloud most often. Tell us which one you are on and we will confirm fit during scoping.' },
      { q: 'Do you provide training after launch?', a: 'Yes. Every implementation includes user training and handover documentation, and admin support is available afterward.' },
    ],
    fr: [
      { q: 'Combien de temps dure une implémentation Salesforce ?', a: 'Une implémentation à un seul cloud prend généralement de 6 à 10 semaines selon la complexité des processus. Les déploiements multi-cloud prennent plus de temps et sont habituellement réalisés par phases.' },
      { q: 'Avec quels clouds Salesforce travaillez-vous ?', a: 'Le plus souvent Sales Cloud, Service Cloud et Experience Cloud. Indiquez-nous lequel vous utilisez et nous confirmerons la compatibilité lors du cadrage.' },
      { q: 'Offrez-vous une formation après le lancement ?', a: 'Oui. Chaque implémentation comprend la formation des utilisateurs et des documents de transfert, et un soutien administratif reste disponible par la suite.' },
    ],
    es: [
      { q: '¿Cuánto dura una implementación de Salesforce?', a: 'Una implementación de una sola nube suele tomar de 6 a 10 semanas según la complejidad de los procesos. Los despliegues multi-nube toman más tiempo y normalmente se hacen por fases.' },
      { q: '¿Con qué nubes de Salesforce trabajan?', a: 'Con mayor frecuencia Sales Cloud, Service Cloud y Experience Cloud. Dinos cuál usas y confirmaremos la compatibilidad durante el alcance.' },
      { q: '¿Ofrecen capacitación después del lanzamiento?', a: 'Sí. Cada implementación incluye capacitación de usuarios y documentos de traspaso, y el soporte administrativo sigue disponible después.' },
    ],
  },
  'sf-customization': {
    en: [
      { q: 'Apex vs Flow — how do you decide?', a: 'We default to declarative tools (Flow, validation rules) wherever they hold up, and reach for Apex only where logic genuinely needs code — it is easier for your team to maintain.' },
      { q: 'Will customizations survive Salesforce upgrades?', a: 'Yes. We follow Salesforce’s own development patterns and test coverage requirements, so seasonal releases do not break custom work.' },
      { q: 'Can you work inside our existing org?', a: 'Yes. Most engagements start with an audit of what is already built before adding anything new.' },
    ],
    fr: [
      { q: 'Apex ou Flow : comment choisissez-vous ?', a: 'Nous privilégions par défaut les outils déclaratifs (Flow, règles de validation) tant qu’ils suffisent, et recourons à Apex seulement quand la logique exige vraiment du code — c’est plus facile à maintenir pour votre équipe.' },
      { q: 'Les personnalisations résisteront-elles aux mises à jour Salesforce ?', a: 'Oui. Nous suivons les modèles de développement de Salesforce et ses exigences de couverture de tests, afin que les versions saisonnières ne cassent pas le travail personnalisé.' },
      { q: 'Pouvez-vous travailler dans notre organisation existante ?', a: 'Oui. La plupart des mandats commencent par un audit de l’existant avant d’ajouter quoi que ce soit.' },
    ],
    es: [
      { q: '¿Apex o Flow? ¿Cómo deciden?', a: 'Por defecto usamos herramientas declarativas (Flow, reglas de validación) mientras sean suficientes, y recurrimos a Apex solo cuando la lógica realmente necesita código, lo que facilita el mantenimiento para tu equipo.' },
      { q: '¿Las personalizaciones sobrevivirán a las actualizaciones de Salesforce?', a: 'Sí. Seguimos los patrones de desarrollo de Salesforce y sus requisitos de cobertura de pruebas, para que las versiones estacionales no rompan el trabajo personalizado.' },
      { q: '¿Pueden trabajar dentro de nuestra organización existente?', a: 'Sí. La mayoría de los proyectos comienzan con una auditoría de lo que ya existe antes de agregar algo nuevo.' },
    ],
  },
  'sf-integration': {
    en: [
      { q: 'Which systems can you connect to Salesforce?', a: 'Websites, ERPs, marketing platforms, data warehouses and most systems with an API. We assess your specific stack during scoping.' },
      { q: 'How do you handle integration failures?', a: 'Every integration ships with error handling, retry logic and monitoring, so failed syncs are caught and retried rather than silently lost.' },
      { q: 'Is real-time sync possible?', a: 'Yes, where the source system supports it. Otherwise we use scheduled or event-driven sync, whichever fits the data and volume.' },
    ],
    fr: [
      { q: 'Quels systèmes pouvez-vous connecter à Salesforce ?', a: 'Sites web, ERP, plateformes marketing, entrepôts de données et la plupart des systèmes dotés d’une API. Nous évaluons votre pile technologique spécifique lors du cadrage.' },
      { q: 'Comment gérez-vous les échecs d’intégration ?', a: 'Chaque intégration comprend la gestion des erreurs, une logique de nouvelle tentative et une supervision, afin que les synchronisations échouées soient détectées et reprises plutôt que perdues silencieusement.' },
      { q: 'La synchronisation en temps réel est-elle possible ?', a: 'Oui, lorsque le système source la prend en charge. Sinon, nous utilisons une synchronisation planifiée ou déclenchée par événement, selon les données et le volume.' },
    ],
    es: [
      { q: '¿Con qué sistemas pueden conectar Salesforce?', a: 'Sitios web, ERP, plataformas de marketing, almacenes de datos y la mayoría de los sistemas con una API. Evaluamos tu stack específico durante el alcance.' },
      { q: '¿Cómo manejan los fallos de integración?', a: 'Cada integración incluye manejo de errores, lógica de reintento y monitoreo, para que las sincronizaciones fallidas se detecten y reintenten en vez de perderse en silencio.' },
      { q: '¿Es posible la sincronización en tiempo real?', a: 'Sí, cuando el sistema de origen lo permite. De lo contrario, usamos sincronización programada o basada en eventos, según los datos y el volumen.' },
    ],
  },
  'sf-migration': {
    en: [
      { q: 'Will our historical data transfer accurately?', a: 'We map every field before moving anything, run the migration against a sandbox first, and validate record counts and key fields before final sign-off.' },
      { q: 'What happens to duplicate records?', a: 'We de-duplicate and clean data as part of the migration, with rules agreed with you in advance rather than decided silently.' },
      { q: 'How long does migration take?', a: 'A standard migration runs 2 to 4 weeks. Multiple sources, large attachment volumes or complex history extend that timeline.' },
    ],
    fr: [
      { q: 'Nos données historiques seront-elles transférées avec exactitude ?', a: 'Nous cartographions chaque champ avant tout transfert, exécutons d’abord la migration sur un bac à sable, puis validons le nombre d’enregistrements et les champs clés avant l’approbation finale.' },
      { q: 'Qu’advient-il des enregistrements en double ?', a: 'Nous dédoublonnons et nettoyons les données dans le cadre de la migration, selon des règles convenues avec vous à l’avance plutôt que décidées sans vous consulter.' },
      { q: 'Combien de temps dure une migration ?', a: 'Une migration standard prend de 2 à 4 semaines. Plusieurs sources, un grand volume de pièces jointes ou un historique complexe allongent ce délai.' },
    ],
    es: [
      { q: '¿Nuestros datos históricos se transferirán con precisión?', a: 'Mapeamos cada campo antes de mover nada, ejecutamos primero la migración en un sandbox y validamos el conteo de registros y los campos clave antes de la aprobación final.' },
      { q: '¿Qué pasa con los registros duplicados?', a: 'Depuramos y eliminamos duplicados como parte de la migración, con reglas acordadas contigo de antemano en lugar de decidirse en silencio.' },
      { q: '¿Cuánto dura una migración?', a: 'Una migración estándar toma de 2 a 4 semanas. Múltiples fuentes, grandes volúmenes de archivos adjuntos o un historial complejo extienden ese plazo.' },
    ],
  },
  'sf-admin': {
    en: [
      { q: 'What does a managed support retainer include?', a: 'User and permission management, ongoing configuration changes, and a monthly report on the health of your org.' },
      { q: 'How fast do you respond to urgent issues?', a: 'Response times are agreed in writing before the retainer starts, with priority handling for anything blocking your team from working.' },
      { q: 'Can you take over from our current admin?', a: 'Yes. We start with a short handover and org review so nothing gets lost in the transition.' },
    ],
    fr: [
      { q: 'Qu’inclut un forfait de soutien géré ?', a: 'La gestion des utilisateurs et des permissions, des modifications de configuration continues, et un rapport mensuel sur l’état de santé de votre organisation.' },
      { q: 'À quelle vitesse répondez-vous aux problèmes urgents ?', a: 'Les délais de réponse sont convenus par écrit avant le début du forfait, avec un traitement prioritaire pour tout ce qui empêche votre équipe de travailler.' },
      { q: 'Pouvez-vous prendre la relève de notre administrateur actuel ?', a: 'Oui. Nous commençons par un bref transfert et une révision de l’organisation pour que rien ne se perde durant la transition.' },
    ],
    es: [
      { q: '¿Qué incluye un contrato de soporte gestionado?', a: 'Gestión de usuarios y permisos, cambios de configuración continuos, y un informe mensual sobre el estado de tu organización.' },
      { q: '¿Qué tan rápido responden a problemas urgentes?', a: 'Los tiempos de respuesta se acuerdan por escrito antes de iniciar el contrato, con atención prioritaria para todo lo que impida trabajar a tu equipo.' },
      { q: '¿Pueden tomar el relevo de nuestro administrador actual?', a: 'Sí. Comenzamos con un breve traspaso y una revisión de la organización para que nada se pierda en la transición.' },
    ],
  },
  'sf-consulting': {
    en: [
      { q: 'What does a Salesforce health check involve?', a: 'A full audit of your org — data model, automation, security and adoption — with a prioritized report of what to fix first.' },
      { q: 'Do you replace our current admin or work with them?', a: 'We work alongside your team by default. Consulting is about giving your admin a clear roadmap, not replacing them.' },
      { q: 'How is a quote determined without published pricing?', a: 'We scope the specific work first — org size, complexity and goals all affect it — then send a clear, fixed quote before anything starts.' },
    ],
    fr: [
      { q: 'En quoi consiste un bilan de santé Salesforce ?', a: 'Un audit complet de votre organisation — modèle de données, automatisation, sécurité et adoption — avec un rapport de constats priorisés sur ce qu’il faut corriger en premier.' },
      { q: 'Remplacez-vous notre administrateur actuel ou travaillez-vous avec lui ?', a: 'Par défaut, nous travaillons aux côtés de votre équipe. Le conseil vise à donner à votre administrateur une feuille de route claire, pas à le remplacer.' },
      { q: 'Comment le devis est-il établi sans tarifs publiés ?', a: 'Nous cadrons d’abord le travail précis — la taille de l’organisation, la complexité et les objectifs entrent tous en jeu — puis nous envoyons un devis clair et fixe avant de commencer.' },
    ],
    es: [
      { q: '¿En qué consiste un diagnóstico de Salesforce?', a: 'Una auditoría completa de tu organización — modelo de datos, automatización, seguridad y adopción — con un informe priorizado de qué corregir primero.' },
      { q: '¿Reemplazan a nuestro administrador actual o trabajan con él?', a: 'Por defecto trabajamos junto a tu equipo. La consultoría busca darle a tu administrador una hoja de ruta clara, no reemplazarlo.' },
      { q: '¿Cómo se determina una cotización sin precios publicados?', a: 'Primero definimos el alcance del trabajo específico — el tamaño de la organización, la complejidad y los objetivos influyen — y luego enviamos una cotización clara y fija antes de empezar.' },
    ],
  },

  'sap-implementation': {
    en: [
      { q: 'How long does an SAP implementation take?', a: 'A single-module rollout typically runs 3 to 6 months depending on process complexity. Multi-module implementations take longer and are usually phased.' },
      { q: 'Which SAP modules do you work with?', a: 'FI/CO, MM, SD and S/4HANA most often. Tell us which modules you run and we will confirm fit during scoping.' },
      { q: 'Do you provide training after go-live?', a: 'Yes. Every implementation includes user training and documentation, with support available after go-live.' },
    ],
    fr: [
      { q: 'Combien de temps dure une implémentation SAP ?', a: 'Un déploiement à un seul module prend généralement de 3 à 6 mois selon la complexité des processus. Les implémentations multi-modules prennent plus de temps et sont habituellement réalisées par phases.' },
      { q: 'Avec quels modules SAP travaillez-vous ?', a: 'Le plus souvent FI/CO, MM, SD et S/4HANA. Indiquez-nous vos modules et nous confirmerons la compatibilité lors du cadrage.' },
      { q: 'Offrez-vous une formation après la mise en production ?', a: 'Oui. Chaque implémentation comprend la formation des utilisateurs et de la documentation, avec un soutien disponible après la mise en production.' },
    ],
    es: [
      { q: '¿Cuánto dura una implementación de SAP?', a: 'Un despliegue de un solo módulo suele tomar de 3 a 6 meses según la complejidad de los procesos. Las implementaciones multi-módulo toman más tiempo y normalmente se hacen por fases.' },
      { q: '¿Con qué módulos de SAP trabajan?', a: 'Con mayor frecuencia FI/CO, MM, SD y S/4HANA. Dinos qué módulos usas y confirmaremos la compatibilidad durante el alcance.' },
      { q: '¿Ofrecen capacitación después de la puesta en marcha?', a: 'Sí. Cada implementación incluye capacitación de usuarios y documentación, con soporte disponible después de la puesta en marcha.' },
    ],
  },
  'sap-migration': {
    en: [
      { q: 'What does migrating to S/4HANA involve?', a: 'A technical and functional assessment of your current system, a data cleanup, and a tested cutover — usually run in a sandbox before touching production.' },
      { q: 'Will our customizations carry over?', a: 'Custom code and configuration are reviewed individually; some migrate as-is, some need rework for S/4HANA\'s data model. We flag this during assessment.' },
      { q: 'How much downtime should we expect?', a: 'A well-planned cutover usually happens over a weekend or a scheduled maintenance window, with a rollback plan in place.' },
    ],
    fr: [
      { q: 'Qu’implique une migration vers S/4HANA ?', a: 'Une évaluation technique et fonctionnelle de votre système actuel, un nettoyage des données et une bascule testée — habituellement d’abord dans un bac à sable avant de toucher la production.' },
      { q: 'Nos personnalisations seront-elles conservées ?', a: 'Le code personnalisé et la configuration sont examinés individuellement ; certains migrent tels quels, d’autres doivent être adaptés au modèle de données de S/4HANA. Nous le signalons lors de l’évaluation.' },
      { q: 'À quelle interruption devons-nous nous attendre ?', a: 'Une bascule bien planifiée se déroule habituellement sur une fin de semaine ou une plage de maintenance planifiée, avec un plan de retour arrière en place.' },
    ],
    es: [
      { q: '¿Qué implica migrar a S/4HANA?', a: 'Una evaluación técnica y funcional de tu sistema actual, una depuración de datos y un cambio probado, normalmente primero en un sandbox antes de tocar producción.' },
      { q: '¿Nuestras personalizaciones se conservarán?', a: 'El código personalizado y la configuración se revisan de forma individual; algunos migran tal cual, otros necesitan ajustes para el modelo de datos de S/4HANA. Lo señalamos durante la evaluación.' },
      { q: '¿Cuánta interrupción debemos esperar?', a: 'Un cambio bien planificado suele ocurrir en un fin de semana o una ventana de mantenimiento programada, con un plan de reversión listo.' },
    ],
  },
  'sap-integration': {
    en: [
      { q: 'Which systems can you connect to SAP?', a: 'CRMs, e-commerce platforms, warehouse systems and reporting tools most often, using SAP\'s own APIs or middleware.' },
      { q: 'How do you handle integration failures?', a: 'Every integration ships with error handling, retry logic and monitoring, so failed syncs are caught and retried rather than lost.' },
      { q: 'Can you work with our existing SAP landscape?', a: 'Yes. Most engagements start with a review of your current SAP environment before adding anything new.' },
    ],
    fr: [
      { q: 'Quels systèmes pouvez-vous connecter à SAP ?', a: 'Le plus souvent des CRM, des plateformes de commerce électronique, des systèmes d’entrepôt et des outils de rapports, via les API de SAP ou un intergiciel.' },
      { q: 'Comment gérez-vous les échecs d’intégration ?', a: 'Chaque intégration comprend la gestion des erreurs, une logique de nouvelle tentative et une supervision, afin que les synchronisations échouées soient détectées et reprises plutôt que perdues.' },
      { q: 'Pouvez-vous travailler avec notre environnement SAP existant ?', a: 'Oui. La plupart des mandats commencent par une revue de votre environnement SAP actuel avant d’ajouter quoi que ce soit.' },
    ],
    es: [
      { q: '¿Con qué sistemas pueden conectar SAP?', a: 'Con mayor frecuencia CRM, plataformas de comercio electrónico, sistemas de almacén y herramientas de informes, usando las API propias de SAP o middleware.' },
      { q: '¿Cómo manejan los fallos de integración?', a: 'Cada integración incluye manejo de errores, lógica de reintento y monitoreo, para que las sincronizaciones fallidas se detecten y reintenten en vez de perderse.' },
      { q: '¿Pueden trabajar con nuestro entorno SAP existente?', a: 'Sí. La mayoría de los proyectos comienzan con una revisión de tu entorno SAP actual antes de agregar algo nuevo.' },
    ],
  },
  'sap-support': {
    en: [
      { q: 'What does a managed support retainer include?', a: 'Configuration changes, user and authorization management, troubleshooting, and a monthly report on system health.' },
      { q: 'How fast do you respond to urgent issues?', a: 'Response times are agreed in writing before the retainer starts, with priority handling for anything blocking business-critical processes.' },
      { q: 'Can you take over from our current SAP team?', a: 'Yes. We start with a short handover and system review so nothing gets lost in the transition.' },
    ],
    fr: [
      { q: 'Qu’inclut un forfait de soutien géré ?', a: 'Les modifications de configuration, la gestion des utilisateurs et des autorisations, le dépannage, et un rapport mensuel sur l’état du système.' },
      { q: 'À quelle vitesse répondez-vous aux problèmes urgents ?', a: 'Les délais de réponse sont convenus par écrit avant le début du forfait, avec un traitement prioritaire pour tout ce qui bloque des processus critiques.' },
      { q: 'Pouvez-vous prendre la relève de notre équipe SAP actuelle ?', a: 'Oui. Nous commençons par un bref transfert et une révision du système pour que rien ne se perde durant la transition.' },
    ],
    es: [
      { q: '¿Qué incluye un contrato de soporte gestionado?', a: 'Cambios de configuración, gestión de usuarios y autorizaciones, resolución de problemas, y un informe mensual sobre el estado del sistema.' },
      { q: '¿Qué tan rápido responden a problemas urgentes?', a: 'Los tiempos de respuesta se acuerdan por escrito antes de iniciar el contrato, con atención prioritaria para todo lo que bloquee procesos críticos.' },
      { q: '¿Pueden tomar el relevo de nuestro equipo de SAP actual?', a: 'Sí. Comenzamos con un breve traspaso y una revisión del sistema para que nada se pierda en la transición.' },
    ],
  },
  'm365-migration': {
    en: [
      { q: 'Will we lose any data during migration?', a: 'No. Mailboxes, files and Teams data are migrated with validation at each step, and your old system stays untouched until you confirm everything moved correctly.' },
      { q: 'How much downtime should we expect?', a: 'Most migrations run with little to no downtime, since mail flow and file access are cut over gradually rather than all at once.' },
      { q: 'Do you handle licensing too?', a: 'Yes. We help you pick the right Microsoft 365 plan mix for your team before migrating.' },
    ],
    fr: [
      { q: 'Risquons-nous de perdre des données pendant la migration ?', a: 'Non. Les boîtes courriel, les fichiers et les données Teams sont migrés avec une validation à chaque étape, et votre ancien système reste intact jusqu’à ce que vous confirmiez que tout a bien été transféré.' },
      { q: 'À quelle interruption devons-nous nous attendre ?', a: 'La plupart des migrations se déroulent avec peu ou pas d’interruption, car le courrier et l’accès aux fichiers basculent graduellement plutôt que d’un seul coup.' },
      { q: 'Vous occupez-vous aussi des licences ?', a: 'Oui. Nous vous aidons à choisir la bonne combinaison de forfaits Microsoft 365 pour votre équipe avant la migration.' },
    ],
    es: [
      { q: '¿Perderemos datos durante la migración?', a: 'No. Los buzones, archivos y datos de Teams se migran con validación en cada paso, y tu sistema anterior permanece intacto hasta que confirmes que todo se transfirió correctamente.' },
      { q: '¿Cuánta interrupción debemos esperar?', a: 'La mayoría de las migraciones se realizan con poca o ninguna interrupción, ya que el correo y el acceso a archivos se cambian gradualmente en vez de todo a la vez.' },
      { q: '¿Se encargan también de las licencias?', a: 'Sí. Te ayudamos a elegir la combinación correcta de planes de Microsoft 365 para tu equipo antes de migrar.' },
    ],
  },
  'm365-sharepoint': {
    en: [
      { q: 'Do you migrate our existing files into SharePoint?', a: 'Yes, with a cleanup pass first — migrating years of disorganized files as-is just recreates the same mess in a new place.' },
      { q: 'Will our team actually use it?', a: 'We design around how people already search for and share information, and include training, which usually determines adoption more than the software itself.' },
      { q: 'Can you build custom pages and workflows?', a: 'Yes, using SharePoint\'s own tools and Power Automate for anything that needs automation.' },
    ],
    fr: [
      { q: 'Migrez-vous nos fichiers existants vers SharePoint ?', a: 'Oui, après un nettoyage préalable — migrer des années de fichiers désorganisés tels quels ne fait que recréer le même désordre ailleurs.' },
      { q: 'Notre équipe l’utilisera-t-elle vraiment ?', a: 'Nous concevons selon la façon dont les gens cherchent et partagent déjà l’information, et incluons une formation, ce qui détermine habituellement l’adoption plus que le logiciel lui-même.' },
      { q: 'Pouvez-vous créer des pages et des flux personnalisés ?', a: 'Oui, avec les outils propres de SharePoint et Power Automate pour tout ce qui nécessite de l’automatisation.' },
    ],
    es: [
      { q: '¿Migran nuestros archivos actuales a SharePoint?', a: 'Sí, con una depuración previa — migrar años de archivos desorganizados tal cual solo recrea el mismo desorden en otro lugar.' },
      { q: '¿Nuestro equipo realmente lo usará?', a: 'Diseñamos según cómo las personas ya buscan y comparten información, e incluimos capacitación, que suele determinar la adopción más que el software en sí.' },
      { q: '¿Pueden crear páginas y flujos personalizados?', a: 'Sí, con las herramientas propias de SharePoint y Power Automate para lo que necesite automatización.' },
    ],
  },
  'm365-power': {
    en: [
      { q: 'What can Power Apps and Power Automate replace?', a: 'Manual spreadsheet processes, email-based approvals, and repetitive data entry are the most common targets.' },
      { q: 'Do we need Power BI licenses already?', a: 'No, we can advise on the right licensing tier based on what you are trying to build and who needs access.' },
      { q: 'Can these tools connect to our other systems?', a: 'Yes, Power Platform has connectors for most common business systems, and custom connectors can be built for anything else.' },
    ],
    fr: [
      { q: 'Que peuvent remplacer Power Apps et Power Automate ?', a: 'Les processus manuels sur chiffrier, les approbations par courriel et la saisie de données répétitive sont les cibles les plus courantes.' },
      { q: 'Avons-nous déjà besoin de licences Power BI ?', a: 'Non, nous pouvons vous conseiller sur le bon niveau de licence selon ce que vous voulez construire et qui doit y accéder.' },
      { q: 'Ces outils peuvent-ils se connecter à nos autres systèmes ?', a: 'Oui, Power Platform dispose de connecteurs pour la plupart des systèmes d’affaires courants, et des connecteurs personnalisés peuvent être créés pour le reste.' },
    ],
    es: [
      { q: '¿Qué pueden reemplazar Power Apps y Power Automate?', a: 'Los procesos manuales en hojas de cálculo, las aprobaciones por correo y la captura de datos repetitiva son los objetivos más comunes.' },
      { q: '¿Necesitamos ya licencias de Power BI?', a: 'No, podemos asesorarte sobre el nivel de licencia adecuado según lo que quieras construir y quién necesita acceso.' },
      { q: '¿Estas herramientas pueden conectarse con nuestros otros sistemas?', a: 'Sí, Power Platform tiene conectores para la mayoría de los sistemas de negocio comunes, y se pueden crear conectores personalizados para el resto.' },
    ],
  },
  'm365-security': {
    en: [
      { q: 'What does a security configuration cover?', a: 'Identity protection, conditional access, device compliance and data loss prevention, configured to match your risk profile.' },
      { q: 'Do you handle ongoing admin tasks too?', a: 'Yes, day-to-day user and license management can be included as an ongoing support retainer.' },
      { q: 'Can you audit our current tenant first?', a: 'Yes. We start with a security and configuration review before recommending changes.' },
    ],
    fr: [
      { q: 'Que couvre une configuration de sécurité ?', a: 'La protection des identités, l’accès conditionnel, la conformité des appareils et la prévention de la perte de données, configurés selon votre profil de risque.' },
      { q: 'Vous occupez-vous aussi des tâches administratives courantes ?', a: 'Oui, la gestion quotidienne des utilisateurs et des licences peut être incluse dans un forfait de soutien continu.' },
      { q: 'Pouvez-vous d’abord auditer notre tenant actuel ?', a: 'Oui. Nous commençons par une revue de la sécurité et de la configuration avant de recommander des changements.' },
    ],
    es: [
      { q: '¿Qué cubre una configuración de seguridad?', a: 'Protección de identidades, acceso condicional, cumplimiento de dispositivos y prevención de pérdida de datos, configurados según tu perfil de riesgo.' },
      { q: '¿También se encargan de tareas administrativas continuas?', a: 'Sí, la gestión diaria de usuarios y licencias puede incluirse como un contrato de soporte continuo.' },
      { q: '¿Pueden auditar primero nuestro tenant actual?', a: 'Sí. Comenzamos con una revisión de seguridad y configuración antes de recomendar cambios.' },
    ],
  },
  'bx-implementation': {
    en: [
      { q: 'What does a Bitrix24 implementation include?', a: 'CRM pipelines, task and project structures, and user permissions configured to match how your team actually works.' },
      { q: 'How long does setup take?', a: 'A standard implementation runs 2 to 4 weeks depending on how many processes need configuring.' },
      { q: 'Do you migrate our existing CRM data?', a: 'Yes, we can import contacts, deals and history from most common CRMs and spreadsheets.' },
    ],
    fr: [
      { q: 'Qu’inclut une implémentation Bitrix24 ?', a: 'Les pipelines CRM, les structures de tâches et de projets, et les permissions des utilisateurs configurés selon la façon dont votre équipe travaille réellement.' },
      { q: 'Combien de temps prend la configuration ?', a: 'Une implémentation standard prend de 2 à 4 semaines selon le nombre de processus à configurer.' },
      { q: 'Migrez-vous les données de notre CRM actuel ?', a: 'Oui, nous pouvons importer les contacts, les transactions et l’historique depuis la plupart des CRM et chiffriers courants.' },
    ],
    es: [
      { q: '¿Qué incluye una implementación de Bitrix24?', a: 'Pipelines de CRM, estructuras de tareas y proyectos, y permisos de usuario configurados según cómo tu equipo realmente trabaja.' },
      { q: '¿Cuánto tarda la configuración?', a: 'Una implementación estándar toma de 2 a 4 semanas según cuántos procesos haya que configurar.' },
      { q: '¿Migran los datos de nuestro CRM actual?', a: 'Sí, podemos importar contactos, negocios e historial desde la mayoría de los CRM y hojas de cálculo comunes.' },
    ],
  },
  'bx-customization': {
    en: [
      { q: 'What kind of automation can Bitrix24 handle?', a: 'Deal stage triggers, automated follow-ups, task assignment rules and approval workflows are the most common.' },
      { q: 'Can you build custom fields and reports?', a: 'Yes, tailored to the specific data your sales and operations teams actually track.' },
      { q: 'Will automation break if we change our process later?', a: 'We build rules that are easy to adjust, and document how they work so your team can change them without breaking anything.' },
    ],
    fr: [
      { q: 'Quel type d’automatisation Bitrix24 peut-il gérer ?', a: 'Les déclencheurs par étape de transaction, les relances automatisées, les règles d’attribution de tâches et les flux d’approbation sont les plus courants.' },
      { q: 'Pouvez-vous créer des champs et des rapports personnalisés ?', a: 'Oui, adaptés aux données précises que vos équipes de vente et d’exploitation suivent réellement.' },
      { q: 'L’automatisation cessera-t-elle de fonctionner si nous changeons notre processus plus tard ?', a: 'Nous créons des règles faciles à ajuster et documentons leur fonctionnement pour que votre équipe puisse les modifier sans rien casser.' },
    ],
    es: [
      { q: '¿Qué tipo de automatización puede manejar Bitrix24?', a: 'Los disparadores por etapa de negociación, los seguimientos automáticos, las reglas de asignación de tareas y los flujos de aprobación son los más comunes.' },
      { q: '¿Pueden crear campos e informes personalizados?', a: 'Sí, adaptados a los datos específicos que tus equipos de ventas y operaciones realmente registran.' },
      { q: '¿La automatización dejará de funcionar si cambiamos nuestro proceso más adelante?', a: 'Creamos reglas fáciles de ajustar y documentamos cómo funcionan para que tu equipo pueda modificarlas sin romper nada.' },
    ],
  },
  'bx-integration': {
    en: [
      { q: 'Can Bitrix24 connect to our phone system?', a: 'Yes, Bitrix24 has built-in telephony integration, and we can connect most common VoIP providers.' },
      { q: 'What about our accounting software?', a: 'We can integrate Bitrix24 with common accounting platforms so invoices and deals stay in sync.' },
      { q: 'Is website form integration included?', a: 'Yes, leads from your website forms can flow directly into Bitrix24\'s CRM.' },
    ],
    fr: [
      { q: 'Bitrix24 peut-il se connecter à notre système téléphonique ?', a: 'Oui, Bitrix24 intègre la téléphonie de façon native, et nous pouvons connecter la plupart des fournisseurs VoIP courants.' },
      { q: 'Qu’en est-il de notre logiciel de comptabilité ?', a: 'Nous pouvons intégrer Bitrix24 aux plateformes comptables courantes pour que les factures et les transactions restent synchronisées.' },
      { q: 'L’intégration des formulaires du site web est-elle incluse ?', a: 'Oui, les prospects de vos formulaires de site web peuvent transiter directement vers le CRM de Bitrix24.' },
    ],
    es: [
      { q: '¿Bitrix24 puede conectarse con nuestro sistema telefónico?', a: 'Sí, Bitrix24 tiene integración de telefonía incorporada, y podemos conectar la mayoría de los proveedores de VoIP comunes.' },
      { q: '¿Y nuestro software de contabilidad?', a: 'Podemos integrar Bitrix24 con plataformas contables comunes para que las facturas y negociaciones se mantengan sincronizadas.' },
      { q: '¿Incluye integración con formularios del sitio web?', a: 'Sí, los leads de los formularios de tu sitio web pueden fluir directamente al CRM de Bitrix24.' },
    ],
  },
  'bx-support': {
    en: [
      { q: 'What does training actually cover?', a: 'Hands-on sessions for your specific setup, not generic Bitrix24 tutorials, covering the workflows your team will use daily.' },
      { q: 'How long does it take for a team to adopt it?', a: 'Most teams are comfortable within two to three weeks with proper training, though full adoption depends on team size.' },
      { q: 'Do you offer ongoing support after training?', a: 'Yes, as a retainer for questions, adjustments and troubleshooting as your team keeps using it.' },
    ],
    fr: [
      { q: 'Que couvre réellement la formation ?', a: 'Des séances pratiques pour votre configuration précise, pas des tutoriels génériques Bitrix24, couvrant les flux que votre équipe utilisera au quotidien.' },
      { q: 'Combien de temps faut-il à une équipe pour l’adopter ?', a: 'La plupart des équipes sont à l’aise en deux à trois semaines avec une formation adéquate, bien que l’adoption complète dépende de la taille de l’équipe.' },
      { q: 'Offrez-vous un soutien continu après la formation ?', a: 'Oui, sous forme de forfait pour les questions, les ajustements et le dépannage à mesure que votre équipe continue de l’utiliser.' },
    ],
    es: [
      { q: '¿Qué cubre realmente la capacitación?', a: 'Sesiones prácticas para tu configuración específica, no tutoriales genéricos de Bitrix24, cubriendo los flujos que tu equipo usará a diario.' },
      { q: '¿Cuánto tarda un equipo en adoptarlo?', a: 'La mayoría de los equipos se sienten cómodos en dos a tres semanas con una capacitación adecuada, aunque la adopción completa depende del tamaño del equipo.' },
      { q: '¿Ofrecen soporte continuo después de la capacitación?', a: 'Sí, como un contrato para preguntas, ajustes y resolución de problemas mientras tu equipo lo sigue usando.' },
    ],
  },
};
