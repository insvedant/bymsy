import { LOCKUP_WIDTH, LOGO_GOLD, SEAL_BY_PATH, WORDMARK_PATH } from '@/lib/logoPaths';

// The seal: ring, serif "BY" and a gold sun on the ring. Inherits colour via currentColor.
function Seal() {
  return (
    <>
      <circle cx="24" cy="24" r="21" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d={SEAL_BY_PATH} fill="currentColor" />
      <circle cx="39" cy="9" r="4" fill={LOGO_GOLD} />
    </>
  );
}

export function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <svg className="logo-mark" width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <Seal />
    </svg>
  );
}

/** Horizontal lockup: seal + BYMSY wordmark (outlined paths, no font needed). */
export function Logo({ light = false, height = 40 }: { light?: boolean; height?: number }) {
  return (
    <span className={`logo${light ? ' logo-light' : ''}`}>
      <svg
        width={(LOCKUP_WIDTH / 48) * height}
        height={height}
        viewBox={`0 0 ${LOCKUP_WIDTH} 48`}
        role="img"
        aria-label="BYMSY"
        focusable="false"
      >
        <Seal />
        <path d={WORDMARK_PATH} fill="currentColor" />
      </svg>
    </span>
  );
}
