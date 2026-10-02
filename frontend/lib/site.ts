// Edit these values to match the real business details.
export const SITE = {
  name: 'bymsy',
  url: 'https://bymsy.com',
  email: 'bymsyconsulting@gmail.com',
  phone: '+1 (403) 000-0000', // PLACEHOLDER: replace with the real number
  city: 'Calgary',
  region: 'Alberta',
  country: 'Canada',
  timezone: 'America/Edmonton',
  apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000',
  social: {
    linkedin: 'https://www.linkedin.com/company/bymsy',
    instagram: 'https://www.instagram.com/bymsy',
    x: 'https://x.com/bymsy',
  },
};

export const SERVICE_IDS = [
  'web',
  'mobile',
  'ai',
  'blockchain',
  'cloud',
  'security',
  'design',
  'marketing',
  'branding',
  'sf-implementation',
  'sf-customization',
  'sf-integration',
  'sf-migration',
  'sf-admin',
  'sf-consulting',
  'sap-implementation',
  'sap-migration',
  'sap-integration',
  'sap-support',
  'm365-migration',
  'm365-sharepoint',
  'm365-power',
  'm365-security',
  'bx-implementation',
  'bx-customization',
  'bx-integration',
  'bx-support',
] as const;
export type ServiceId = (typeof SERVICE_IDS)[number];

export const TECH_STACK = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Python',
  'OpenAI API', 'LangChain', 'AWS', 'Azure', 'Google Cloud', 'Docker', 'Solidity', 'React Native',
  'Flutter', 'Figma', 'GitHub Actions', 'Power BI', 'Tableau',
];

export const SERVICE_SLUGS: Record<ServiceId, string> = {
  web: 'web-development',
  mobile: 'mobile-apps',
  ai: 'ai-machine-learning',
  blockchain: 'blockchain-web3',
  cloud: 'cloud-devops',
  security: 'cybersecurity',
  design: 'product-design',
  marketing: 'digital-marketing',
  branding: 'branding',
  'sf-implementation': 'salesforce-implementation',
  'sf-customization': 'salesforce-customization',
  'sf-integration': 'salesforce-integration',
  'sf-migration': 'salesforce-data-migration',
  'sf-admin': 'salesforce-admin-support',
  'sf-consulting': 'salesforce-consulting',
  'sap-implementation': 'sap-implementation',
  'sap-migration': 'sap-migration-upgrade',
  'sap-integration': 'sap-integration',
  'sap-support': 'sap-support-managed-services',
  'm365-migration': 'microsoft-365-migration',
  'm365-sharepoint': 'sharepoint-intranet',
  'm365-power': 'power-platform-automation',
  'm365-security': 'microsoft-365-security-support',
  'bx-implementation': 'bitrix24-implementation',
  'bx-customization': 'bitrix24-customization-automation',
  'bx-integration': 'bitrix24-integration',
  'bx-support': 'bitrix24-training-support',
};

// Mega-menu tabs / practice groups, in display order
export type GroupId = 'engineering' | 'marketing' | 'salesforce' | 'sap' | 'm365' | 'bitrix';
export const GROUP_ORDER: GroupId[] = ['engineering', 'marketing', 'salesforce', 'sap', 'm365', 'bitrix'];
export const SERVICE_GROUPS: Record<GroupId, ServiceId[]> = {
  engineering: ['web', 'mobile', 'ai', 'blockchain', 'cloud', 'security'],
  marketing: ['marketing', 'design', 'branding'],
  salesforce: ['sf-implementation', 'sf-customization', 'sf-integration', 'sf-migration', 'sf-admin', 'sf-consulting'],
  sap: ['sap-implementation', 'sap-migration', 'sap-integration', 'sap-support'],
  m365: ['m365-migration', 'm365-sharepoint', 'm365-power', 'm365-security'],
  bitrix: ['bx-implementation', 'bx-customization', 'bx-integration', 'bx-support'],
};
