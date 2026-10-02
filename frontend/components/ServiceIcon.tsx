import type { ServiceId } from '@/lib/site';

const common = { width: 26, height: 26, viewBox: '0 0 26 26', fill: 'none' as const, 'aria-hidden': true };
const sw = { strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

export function ServiceIcon({ id }: { id: ServiceId }) {
  switch (id) {
    case 'web':
      return (
        <svg {...common}>
          <path d="M9 7 3 13l6 6M17 7l6 6-6 6M15 4 11 22" stroke="currentColor" {...sw} />
        </svg>
      );
    case 'mobile':
      return (
        <svg {...common}>
          <rect x="7" y="2.5" width="12" height="21" rx="2.6" stroke="currentColor" {...sw} />
          <line x1="11.5" y1="20" x2="14.5" y2="20" stroke="currentColor" {...sw} />
        </svg>
      );
    case 'ai':
      return (
        <svg {...common}>
          <path d="M13 2 L15.1 9.2 22 11.5 15.1 13.8 13 21 10.9 13.8 4 11.5 10.9 9.2 Z" stroke="currentColor" {...sw} strokeLinejoin="round" />
        </svg>
      );
    case 'blockchain':
      return (
        <svg {...common}>
          <rect x="2.5" y="9" width="8" height="8" rx="2" stroke="currentColor" {...sw} />
          <rect x="15.5" y="9" width="8" height="8" rx="2" stroke="currentColor" {...sw} />
          <path d="M10.5 13h5" stroke="currentColor" {...sw} />
        </svg>
      );
    case 'cloud':
      return (
        <svg {...common}>
          <path d="M7.5 19a4.5 4.5 0 0 1-.6-8.96A5.5 5.5 0 0 1 17.4 8.6 4.25 4.25 0 0 1 17 17.1" stroke="currentColor" {...sw} />
          <path d="M13 14v6m0-6-2.4 2.4M13 14l2.4 2.4" stroke="currentColor" {...sw} />
        </svg>
      );
    case 'security':
      return (
        <svg {...common}>
          <path d="M13 2.5 21.5 6v6.2c0 6-3.6 9.7-8.5 11.3C8.1 21.9 4.5 18.2 4.5 12.2V6Z" stroke="currentColor" {...sw} strokeLinejoin="round" />
          <path d="M9.3 13.1 12 15.8l4.9-5.6" stroke="currentColor" {...sw} />
        </svg>
      );
    case 'design':
      return (
        <svg {...common}>
          <rect x="3" y="3" width="12" height="12" rx="2.4" stroke="currentColor" {...sw} />
          <path d="M11 15v3.6A2.4 2.4 0 0 0 13.4 21H21a2 2 0 0 0 2-2v-7.6A2.4 2.4 0 0 0 20.6 9H17" stroke="currentColor" {...sw} />
        </svg>
      );
    case 'marketing':
      return (
        <svg {...common}>
          <path d="M3 15v-4l14-5v14Z" stroke="currentColor" {...sw} strokeLinejoin="round" />
          <path d="M17 8.3a4.2 4.2 0 0 1 0 7.4M7 15v4.5a1.8 1.8 0 0 0 3.6 0V16" stroke="currentColor" {...sw} />
        </svg>
      );
    case 'branding':
      return (
        <svg {...common}>
          <path d="M3 13.2 13.2 3l7.8 7.8L10.8 21 3 13.2Z" stroke="currentColor" {...sw} strokeLinejoin="round" />
          <circle cx="15.5" cy="8.5" r="1.6" fill="currentColor" />
        </svg>
      );
    case 'sf-implementation':
      return (
        <svg {...common}>
          <path d="M7.5 19a4.5 4.5 0 0 1-.6-8.96A5.5 5.5 0 0 1 17.4 8.6 4.25 4.25 0 0 1 17 17.1" stroke="currentColor" {...sw} />
          <path d="M13 17v-6m0 0-2.6 2.6M13 11l2.6 2.6" stroke="currentColor" {...sw} />
        </svg>
      );
    case 'sf-customization':
      return (
        <svg {...common}>
          <path d="M7.5 19a4.5 4.5 0 0 1-.6-8.96A5.5 5.5 0 0 1 17.4 8.6 4.25 4.25 0 0 1 17 17.1" stroke="currentColor" {...sw} />
          <path d="M13 10.5v1m0 7v1m3.5-4.5h-1m-5 0h-1m5.7-2.7-.7.7m-4 4-.7.7m0-5.4.7.7m4 4 .7.7" stroke="currentColor" {...sw} />
          <circle cx="13" cy="14.5" r="1.8" stroke="currentColor" {...sw} />
        </svg>
      );
    case 'sf-integration':
      return (
        <svg {...common}>
          <path d="M7 18a4 4 0 0 1-.5-7.96 5 5 0 0 1 9.4-2.2" stroke="currentColor" {...sw} />
          <circle cx="6.5" cy="21" r="2.3" stroke="currentColor" {...sw} />
          <circle cx="20" cy="10" r="2.3" stroke="currentColor" {...sw} />
          <circle cx="20" cy="21" r="2.3" stroke="currentColor" {...sw} />
          <path d="M8.6 19.6 17.8 11.4M17.8 12.8v6.9" stroke="currentColor" {...sw} />
        </svg>
      );
    case 'sf-migration':
      return (
        <svg {...common}>
          <path d="M7.5 19a4.5 4.5 0 0 1-.6-8.96A5.5 5.5 0 0 1 17.4 8.6 4.25 4.25 0 0 1 17 17.1" stroke="currentColor" {...sw} />
          <path d="M8.5 14 12 17.5 15.5 14M12 6.5v11" stroke="currentColor" {...sw} />
        </svg>
      );
    case 'sf-admin':
      return (
        <svg {...common}>
          <path d="M5 15v-2a8 8 0 0 1 16 0v2" stroke="currentColor" {...sw} />
          <rect x="3.5" y="14" width="4" height="6" rx="1.6" stroke="currentColor" {...sw} />
          <rect x="18.5" y="14" width="4" height="6" rx="1.6" stroke="currentColor" {...sw} />
          <path d="M20.5 20v.5a3 3 0 0 1-3 3h-3.4" stroke="currentColor" {...sw} />
        </svg>
      );
    case 'sf-consulting':
      return (
        <svg {...common}>
          <circle cx="11.5" cy="11.5" r="6.5" stroke="currentColor" {...sw} />
          <path d="M8.3 12.2 10.4 14l4-4.3" stroke="currentColor" {...sw} />
          <line x1="16.3" y1="16.3" x2="21" y2="21" stroke="currentColor" {...sw} />
        </svg>
      );
    case 'sap-implementation':
      return (
        <svg {...common}>
          <rect x="3" y="5" width="20" height="16" rx="2.4" stroke="currentColor" {...sw} />
          <path d="M7 15.5 10 11l3 3.2 4-5.7" stroke="currentColor" {...sw} />
          <circle cx="17" cy="8.5" r="1.4" fill="currentColor" />
        </svg>
      );
    case 'sap-migration':
      return (
        <svg {...common}>
          <rect x="2.5" y="4" width="8.5" height="8.5" rx="2" stroke="currentColor" {...sw} />
          <rect x="15" y="13.5" width="8.5" height="8.5" rx="2" stroke="currentColor" {...sw} />
          <path d="M11 8.3h6a3 3 0 0 1 3 3v2.2M15 17.7H9a3 3 0 0 1-3-3v-2.2" stroke="currentColor" {...sw} />
          <path d="M17.5 10.8 20.5 13.5 17.5 16.2M8.5 14.8 5.5 12.1 8.5 9.4" stroke="currentColor" {...sw} />
        </svg>
      );
    case 'sap-integration':
      return (
        <svg {...common}>
          <rect x="2.5" y="9" width="8" height="8" rx="2" stroke="currentColor" {...sw} />
          <rect x="15.5" y="9" width="8" height="8" rx="2" stroke="currentColor" {...sw} />
          <path d="M10.5 13h5" stroke="currentColor" {...sw} />
        </svg>
      );
    case 'sap-support':
      return (
        <svg {...common}>
          <path d="M5 15v-2a8 8 0 0 1 16 0v2" stroke="currentColor" {...sw} />
          <rect x="3.5" y="14" width="4" height="6" rx="1.6" stroke="currentColor" {...sw} />
          <rect x="18.5" y="14" width="4" height="6" rx="1.6" stroke="currentColor" {...sw} />
          <path d="M20.5 20v.5a3 3 0 0 1-3 3h-3.4" stroke="currentColor" {...sw} />
        </svg>
      );
    case 'm365-migration':
      return (
        <svg {...common}>
          <rect x="2.5" y="6" width="21" height="14" rx="2.2" stroke="currentColor" {...sw} />
          <path d="M2.5 8.5 13 15l10.5-6.5" stroke="currentColor" {...sw} />
          <path d="M17 21v-3.2m0 0-2.1 2.1M17 17.8l2.1 2.1" stroke="currentColor" {...sw} />
        </svg>
      );
    case 'm365-sharepoint':
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="4.3" stroke="currentColor" {...sw} />
          <circle cx="17" cy="9.5" r="3.2" stroke="currentColor" {...sw} />
          <path d="M3.5 20.5c.6-3.6 3-5.7 5.9-5.7 2.5 0 4.5 1.4 5.4 3.6" stroke="currentColor" {...sw} />
          <path d="M14 21c.4-2.6 2-4 4.2-4 2 0 3.6 1.3 4.3 3.2" stroke="currentColor" {...sw} />
        </svg>
      );
    case 'm365-power':
      return (
        <svg {...common}>
          <path d="M13.2 2.5 5.5 14h5.8l-1 7.5L19 10h-5.8Z" stroke="currentColor" {...sw} strokeLinejoin="round" />
        </svg>
      );
    case 'm365-security':
      return (
        <svg {...common}>
          <path d="M13 2.5 21.5 6v6.2c0 6-3.6 9.7-8.5 11.3C8.1 21.9 4.5 18.2 4.5 12.2V6Z" stroke="currentColor" {...sw} strokeLinejoin="round" />
          <path d="M9.3 13.1 12 15.8l4.9-5.6" stroke="currentColor" {...sw} />
        </svg>
      );
    case 'bx-implementation':
      return (
        <svg {...common}>
          <circle cx="8" cy="7" r="3" stroke="currentColor" {...sw} />
          <circle cx="17" cy="7" r="3" stroke="currentColor" {...sw} />
          <path d="M2.8 20c.7-3.8 2.9-6 5.2-6 1.4 0 2.6.6 3.5 1.8M20.2 20c-.5-3.8-2.6-6-5-6a4.6 4.6 0 0 0-2.2.6" stroke="currentColor" {...sw} />
        </svg>
      );
    case 'bx-customization':
      return (
        <svg {...common}>
          <path d="M13 10.5v1m0 7v1m3.5-4.5h-1m-5 0h-1m5.7-2.7-.7.7m-4 4-.7.7m0-5.4.7.7m4 4 .7.7" stroke="currentColor" {...sw} />
          <circle cx="13" cy="14.5" r="1.8" stroke="currentColor" {...sw} />
          <path d="M6 10.5V4m0 0L3.7 6.3M6 4l2.3 2.3" stroke="currentColor" {...sw} />
        </svg>
      );
    case 'bx-integration':
      return (
        <svg {...common}>
          <rect x="2.5" y="9" width="8" height="8" rx="2" stroke="currentColor" {...sw} />
          <rect x="15.5" y="9" width="8" height="8" rx="2" stroke="currentColor" {...sw} />
          <path d="M10.5 13h5" stroke="currentColor" {...sw} />
        </svg>
      );
    case 'bx-support':
      return (
        <svg {...common}>
          <path d="M5 15v-2a8 8 0 0 1 16 0v2" stroke="currentColor" {...sw} />
          <rect x="3.5" y="14" width="4" height="6" rx="1.6" stroke="currentColor" {...sw} />
          <rect x="18.5" y="14" width="4" height="6" rx="1.6" stroke="currentColor" {...sw} />
          <path d="M20.5 20v.5a3 3 0 0 1-3 3h-3.4" stroke="currentColor" {...sw} />
        </svg>
      );
    default:
      return null;
  }
}
