import type { VisualType } from '@/lib/portfolio';

const FONT = "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif";

function Browser({ children }: { children: React.ReactNode }) {
  return (
    <>
      <rect x="44" y="32" width="552" height="336" rx="10" fill="#fff" />
      <path d="M44 42a10 10 0 0 1 10-10h532a10 10 0 0 1 10 10v26H44z" fill="#EEF1F4" />
      <circle cx="62" cy="50" r="4" fill="#F0B3AE" /><circle cx="78" cy="50" r="4" fill="#F1D58E" /><circle cx="94" cy="50" r="4" fill="#A8D5A2" />
      <rect x="120" y="42" width="300" height="16" rx="8" fill="#fff" />
      {children}
    </>
  );
}

/* Decorative product mock-ups. They stand in for screenshots, so they are hidden from assistive tech. */
export function ProjectVisual({ type }: { type: VisualType }) {
  return (
    <svg className="pv" viewBox="0 0 640 400" aria-hidden="true" focusable="false" fontFamily={FONT}>
      {type === 'storefront' && (
        <>
          <rect width="640" height="400" fill="#E4EEE8" />
          <Browser>
            <rect x="64" y="80" width="70" height="10" rx="3" fill="#1F4D3A" />
            {[300, 352, 404, 456].map((x) => <rect key={x} x={x} y="82" width="38" height="6" rx="3" fill="#C5CFCA" />)}
            <circle cx="566" cy="85" r="9" fill="#E3A72F" />
            <rect x="64" y="106" width="512" height="96" rx="8" fill="#1F4D3A" />
            <text x="84" y="142" fontSize="19" fontWeight="700" fill="#fff">Spring trail collection</text>
            <text x="84" y="162" fontSize="11" fill="#B9D3C6">Lightweight layers for long days out</text>
            <rect x="84" y="174" width="74" height="18" rx="9" fill="#E3A72F" />
            <text x="96" y="187" fontSize="10" fontWeight="700" fill="#1a1405">Shop now</text>
            <path d="M400 202 L452 134 L484 176 L520 122 L576 202Z" fill="#2E6B52" />
            {[64, 240, 416].map((x, i) => (
              <g key={x}>
                <rect x={x} y="216" width="160" height="136" rx="8" fill="#F6F8F7" stroke="#E0E7E3" />
                <rect x={x + 8} y="224" width="144" height="66" rx="6" fill={['#C7DDD0', '#DFD2BC', '#BFD3E0'][i]} />
                <rect x={x + 8} y="300" width="90" height="8" rx="3" fill="#2D3B36" />
                <text x={x + 8} y="332" fontSize="13" fontWeight="700" fill="#1F4D3A">{['$129', '$89', '$64'][i]}</text>
                <rect x={x + 100} y="318" width="52" height="20" rx="10" fill="#1F4D3A" />
              </g>
            ))}
          </Browser>
        </>
      )}

      {type === 'dashboard' && (
        <>
          <rect width="640" height="400" fill="#E3EBF4" />
          <rect x="40" y="32" width="560" height="336" rx="10" fill="#fff" />
          <rect x="40" y="32" width="112" height="336" rx="10" fill="#0B2540" />
          <rect x="100" y="32" width="52" height="336" fill="#0B2540" />
          <circle cx="62" cy="58" r="8" fill="#E3A72F" />
          {[92, 120, 148, 176, 204].map((y, i) => <rect key={y} x="56" y={y} width={[64, 52, 60, 46, 56][i]} height="8" rx="4" fill="#fff" opacity={i === 0 ? 0.95 : 0.35} />)}
          {[172, 278, 384, 490].map((x, i) => (
            <g key={x}>
              <rect x={x} y="50" width="98" height="58" rx="8" fill="#F2F6FA" />
              <rect x={x + 10} y="60" width="44" height="6" rx="3" fill="#A9B7C6" />
              <text x={x + 10} y="94" fontSize="20" fontWeight="700" fill="#0B2540">{['24', '87%', '12', '3.4h'][i]}</text>
            </g>
          ))}
          <rect x="172" y="120" width="290" height="132" rx="8" fill="#F2F6FA" />
          <path d="M188 232 L230 204 L272 214 L314 176 L356 190 L398 152 L446 162 L446 238 L188 238Z" fill="#0E7C7B" opacity="0.14" />
          <path d="M188 232 L230 204 L272 214 L314 176 L356 190 L398 152 L446 162" fill="none" stroke="#0E7C7B" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
          <rect x="474" y="120" width="116" height="132" rx="8" fill="#F2F6FA" />
          <circle cx="532" cy="186" r="34" fill="none" stroke="#DCE5EE" strokeWidth="14" />
          <circle cx="532" cy="186" r="34" fill="none" stroke="#0E7C7B" strokeWidth="14" strokeDasharray="120 214" transform="rotate(-90 532 186)" />
          <circle cx="532" cy="186" r="34" fill="none" stroke="#E3A72F" strokeWidth="14" strokeDasharray="42 214" strokeDashoffset="-124" transform="rotate(-90 532 186)" />
          {[268, 298, 328].map((y, i) => (
            <g key={y}>
              <rect x="172" y={y} width="418" height="24" rx="6" fill={i % 2 ? '#fff' : '#F7F9FB'} />
              <rect x="184" y={y + 9} width={[110, 90, 100][i]} height="6" rx="3" fill="#7B8BA0" />
              <rect x="352" y={y + 9} width="70" height="6" rx="3" fill="#B7C2CF" />
              <rect x="520" y={y + 5} width="56" height="14" rx="7" fill={['#CDEBDD', '#FBE7B8', '#CFE0F4'][i]} />
            </g>
          ))}
        </>
      )}

      {type === 'mobile' && (
        <>
          <rect width="640" height="400" fill="#F0E8DC" />
          <g>
            <rect x="130" y="24" width="180" height="352" rx="26" fill="#fff" stroke="#D8CCBB" strokeWidth="2" />
            <rect x="198" y="34" width="44" height="8" rx="4" fill="#E6DED0" />
            <text x="150" y="76" fontSize="15" fontWeight="700" fill="#2A2A2E">Book a visit</text>
            <text x="150" y="96" fontSize="10" fill="#8B8478">June 2026</text>
            {[0, 1, 2, 3].map((r) => [0, 1, 2, 3, 4, 5, 6].map((c) => {
              const n = r * 7 + c + 1;
              const sel = n === 12;
              return (
                <g key={n}>
                  {sel && <circle cx={158 + c * 22} cy={122 + r * 26} r="10" fill="#0E7C7B" />}
                  <text x={158 + c * 22} y={126 + r * 26} fontSize="10" textAnchor="middle" fill={sel ? '#fff' : '#4A4740'}>{n}</text>
                </g>
              );
            }))}
            {[0, 1, 2].map((i) => (
              <g key={i}>
                <rect x={148 + i * 54} y="240" width="48" height="24" rx="12" fill={i === 1 ? '#0E7C7B' : '#F3EEE6'} />
                <text x={172 + i * 54} y="256" fontSize="10" textAnchor="middle" fill={i === 1 ? '#fff' : '#4A4740'}>{['9:30', '10:15', '11:00'][i]}</text>
              </g>
            ))}
            <rect x="148" y="284" width="144" height="34" rx="17" fill="#0B2540" />
            <text x="220" y="305" fontSize="12" fontWeight="700" textAnchor="middle" fill="#fff">Confirm</text>
          </g>
          <g>
            <rect x="330" y="24" width="180" height="352" rx="26" fill="#fff" stroke="#D8CCBB" strokeWidth="2" />
            <rect x="398" y="34" width="44" height="8" rx="4" fill="#E6DED0" />
            <text x="350" y="76" fontSize="15" fontWeight="700" fill="#2A2A2E">Upcoming</text>
            {[0, 1, 2].map((i) => (
              <g key={i}>
                <rect x="348" y={94 + i * 68} width="144" height="58" rx="12" fill={i === 0 ? '#E7F2F1' : '#F7F3EC'} />
                <circle cx="372" cy={123 + i * 68} r="12" fill={['#0E7C7B', '#E3A72F', '#9AA9BC'][i]} />
                <rect x="392" y={112 + i * 68} width={[70, 58, 64][i]} height="7" rx="3" fill="#3B3A36" />
                <rect x="392" y={126 + i * 68} width="46" height="6" rx="3" fill="#9A9488" />
              </g>
            ))}
            <path d="M331 326 H509 V350 a25 25 0 0 1 -25 25 H356 a25 25 0 0 1 -25 -25Z" fill="#fff" />
            {[0, 1, 2, 3].map((i) => <circle key={i} cx={358 + i * 42} cy="350" r="7" fill={i === 1 ? '#0E7C7B' : '#D8D2C6'} />)}
          </g>
        </>
      )}

      {type === 'assistant' && (
        <>
          <rect width="640" height="400" fill="#EAE6F3" />
          <rect x="70" y="30" width="500" height="340" rx="14" fill="#fff" />
          <path d="M70 44a14 14 0 0 1 14-14h472a14 14 0 0 1 14 14v34H70z" fill="#F4F2FA" />
          <circle cx="98" cy="54" r="12" fill="#0E7C7B" />
          <rect x="120" y="45" width="90" height="8" rx="4" fill="#2B2A33" />
          <rect x="120" y="59" width="58" height="6" rx="3" fill="#A9A6B8" />
          <circle cx="538" cy="54" r="5" fill="#5BC48A" />
          <rect x="228" y="96" width="304" height="40" rx="14" fill="#0B2540" />
          <text x="244" y="120" fontSize="12" fill="#fff">Can I change the delivery address?</text>
          <rect x="94" y="152" width="342" height="86" rx="14" fill="#F1EFF8" />
          <text x="110" y="176" fontSize="12" fill="#2B2A33">Yes. Until an order ships you can edit the</text>
          <text x="110" y="194" fontSize="12" fill="#2B2A33">address from your account under Orders.</text>
          <rect x="110" y="208" width="120" height="20" rx="10" fill="#fff" stroke="#0E7C7B" />
          <text x="122" y="222" fontSize="10" fill="#0E7C7B">Help centre · Shipping</text>
          <rect x="238" y="208" width="112" height="20" rx="10" fill="#fff" stroke="#0E7C7B" />
          <text x="250" y="222" fontSize="10" fill="#0E7C7B">Orders · Editing</text>
          <rect x="300" y="252" width="232" height="32" rx="14" fill="#0B2540" />
          <text x="316" y="272" fontSize="12" fill="#fff">Thanks, that works.</text>
          <rect x="94" y="298" width="120" height="30" rx="14" fill="#F1EFF8" />
          <circle cx="118" cy="313" r="3" fill="#9E9BB4" /><circle cx="130" cy="313" r="3" fill="#9E9BB4" /><circle cx="142" cy="313" r="3" fill="#9E9BB4" />
          <rect x="92" y="336" width="416" height="22" rx="11" fill="#F4F2FA" />
          <circle cx="536" cy="347" r="11" fill="#E3A72F" />
        </>
      )}

      {type === 'dapp' && (
        <>
          <rect width="640" height="400" fill="#0A1626" />
          <rect x="40" y="32" width="560" height="336" rx="14" fill="#10243C" stroke="#1C3756" />
          <circle cx="68" cy="62" r="10" fill="#0E7C7B" /><rect x="86" y="57" width="70" height="10" rx="5" fill="#DCE8F3" />
          <rect x="446" y="48" width="132" height="28" rx="14" fill="#0E7C7B" />
          <text x="512" y="66" fontSize="11" fontWeight="700" textAnchor="middle" fill="#fff">0x4f2a…a91c</text>
          {[60, 226, 392].map((x, i) => (
            <g key={x}>
              <rect x={x} y="96" width="150" height="58" rx="10" fill="#0D1E33" stroke="#1C3756" />
              <text x={x + 12} y="116" fontSize="10" fill="#7F97B0">{['Total allocation', 'Vested', 'Claimable'][i]}</text>
              <text x={x + 12} y="140" fontSize="18" fontWeight="700" fill={i === 2 ? '#E3A72F' : '#fff'}>{['120,000', '48,000', '6,500'][i]}</text>
            </g>
          ))}
          <rect x="60" y="170" width="356" height="176" rx="10" fill="#0D1E33" stroke="#1C3756" />
          <path d="M76 322 H132 V300 H176 V284 H220 V262 H264 V240 H308 V214 H352 V190 H400 V322Z" fill="#0E7C7B" opacity="0.28" />
          <path d="M76 322 H132 V300 H176 V284 H220 V262 H264 V240 H308 V214 H352 V190 H400" fill="none" stroke="#2BB3AE" strokeWidth="3" />
          <line x1="132" y1="180" x2="132" y2="322" stroke="#E3A72F" strokeDasharray="4 4" />
          <text x="138" y="192" fontSize="10" fill="#E3A72F">Cliff</text>
          <rect x="430" y="170" width="150" height="176" rx="10" fill="#0D1E33" stroke="#1C3756" />
          <text x="444" y="194" fontSize="10" fill="#7F97B0">Progress</text>
          <rect x="444" y="204" width="122" height="8" rx="4" fill="#1C3756" /><rect x="444" y="204" width="49" height="8" rx="4" fill="#2BB3AE" />
          <text x="444" y="238" fontSize="10" fill="#7F97B0">Next unlock</text>
          <text x="444" y="258" fontSize="14" fontWeight="700" fill="#fff">12 days</text>
          <rect x="444" y="290" width="122" height="34" rx="17" fill="#E3A72F" />
          <text x="505" y="312" fontSize="12" fontWeight="700" textAnchor="middle" fill="#1a1405">Claim 6,500</text>
        </>
      )}

      {type === 'analytics' && (
        <>
          <rect width="640" height="400" fill="#F3ECD9" />
          <Browser>
            <rect x="64" y="80" width="80" height="10" rx="3" fill="#0B2540" />
            {[300, 356, 412].map((x) => <rect key={x} x={x} y="82" width="40" height="6" rx="3" fill="#C9CED6" />)}
            <rect x="64" y="104" width="196" height="104" rx="10" fill="#0B2540" />
            <text x="80" y="126" fontSize="10" fill="#9DB3C8">Organic sessions</text>
            <text x="80" y="156" fontSize="26" fontWeight="700" fill="#fff">18,420</text>
            <path d="M80 194 L108 184 L136 188 L164 170 L192 176 L220 158 L244 150" fill="none" stroke="#E3A72F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="274" y="104" width="302" height="104" rx="10" fill="#F6F7F9" />
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => {
              const h = [30, 38, 34, 46, 44, 54, 50, 62, 58, 70, 66, 78][i];
              return <rect key={i} x={290 + i * 23} y={196 - h} width="14" height={h} rx="3" fill={i > 8 ? '#0E7C7B' : '#B9D6D5'} />;
            })}
            <rect x="64" y="222" width="240" height="132" rx="10" fill="#F6F7F9" />
            <text x="80" y="244" fontSize="11" fontWeight="700" fill="#0B2540">Top queries</text>
            {[0, 1, 2, 3].map((i) => (
              <g key={i}>
                <rect x="80" y={256 + i * 24} width={[120, 100, 132, 90][i]} height="7" rx="3" fill="#8593A5" />
                <rect x="240" y={253 + i * 24} width="48" height="14" rx="7" fill={['#CDEBDD', '#CDEBDD', '#FBE7B8', '#CFE0F4'][i]} />
              </g>
            ))}
            <rect x="318" y="222" width="258" height="132" rx="10" fill="#F6F7F9" />
            <text x="334" y="244" fontSize="11" fontWeight="700" fill="#0B2540">AI answer citations</text>
            {[0, 1, 2].map((i) => (
              <g key={i}>
                <circle cx="342" cy={268 + i * 30} r="8" fill={['#0E7C7B', '#E3A72F', '#0B2540'][i]} />
                <rect x="360" y={262 + i * 30} width={[130, 108, 84][i]} height="7" rx="3" fill="#8593A5" />
                <text x="546" y={272 + i * 30} fontSize="12" fontWeight="700" textAnchor="end" fill="#0B2540">{['+14', '+9', '+5'][i]}</text>
              </g>
            ))}
          </Browser>
        </>
      )}
    </svg>
  );
}
