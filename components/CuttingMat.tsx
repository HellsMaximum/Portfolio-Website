/**
 * Cutting-mat background with a fine and main grid, ruler ticks along the top and left edges,
 * and 30°/45°/60° guide lines that fan out from the bottom-left corner. Fills its nearest positioned parent.
 */

/** Ruler marks every 50 px, numbered every 100 px */
const topMarks = Array.from({ length: 51 }, (_, i) => (i + 1) * 50);
const sideMarks = Array.from({ length: 25 }, (_, i) => (i + 1) * 50);

/** Guide lines and labels, measured from the bottom-left corner */
const guides = [
  { to: "2598 -1500", label: "30°", x: 292, y: -161 },
  { to: "2121 -2121", label: "45°", x: 239, y: -229 },
  { to: "1500 -2598", label: "60°", x: 171, y: -282 },
];

export default function CuttingMat({ id }: { id: string }) {
  return (
    <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full">
      {/** Grid and fine tick patterns */}
      <defs>
        <pattern id={`${id}-fine`} width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" fill="none" strokeWidth="1" className="stroke-mat-grid-fine" />
        </pattern>
        <pattern id={`${id}-main`} width="100" height="100" patternUnits="userSpaceOnUse">
          <rect width="100" height="100" fill={`url(#${id}-fine)`} />
          <path d="M100 0H0V100" fill="none" strokeWidth="1.5" className="stroke-mat-grid-main" />
        </pattern>
        <pattern id={`${id}-tx`} width="10" height="24" patternUnits="userSpaceOnUse">
          <path d="M0.5 0V6" strokeWidth="1" className="stroke-mat-tick" />
        </pattern>
        <pattern id={`${id}-ty`} width="24" height="10" patternUnits="userSpaceOnUse">
          <path d="M0 0.5H6" strokeWidth="1" className="stroke-mat-tick" />
        </pattern>
      </defs>

      <rect width="100%" height="100%" fill={`url(#${id}-main)`} />
      <rect width="100%" height="24" fill={`url(#${id}-tx)`} />
      <rect width="24" height="100%" fill={`url(#${id}-ty)`} />

      {/** Rulers */}
      <g strokeWidth="1.5" className="stroke-mat-tick fill-mat-number font-mono text-[10px]">
        {topMarks.map((x) => (
          <g key={`t${x}`}>
            <path d={`M${x + 0.5} 0V${x % 100 ? 10 : 14}`} />
            {x % 100 === 0 && <text x={x + 4} y="22" stroke="none">{x / 100}</text>}
          </g>
        ))}
        {sideMarks.map((y) => (
          <g key={`s${y}`}>
            <path d={`M0 ${y + 0.5}H${y % 100 ? 10 : 14}`} />
            {y % 100 === 0 && <text x="17" y={y - 4} stroke="none">{y / 100}</text>}
          </g>
        ))}
      </g>

      {/** Angle guides, anchored to the bottom-left corner */}
      <svg x="0" y="100%" overflow="visible">
        <g fill="none" strokeWidth="1.2" className="stroke-mat-guide">
          {guides.map((g) => (
            <path key={g.label} d={`M0 0L${g.to}`} strokeDasharray="8 6" />
          ))}
          <path d="M300 0A300 300 0 0 0 0 -300" />
          <path d="M320 0A320 320 0 0 0 0 -320" />
        </g>
        <g className="fill-mat-number font-mono text-[10px]">
          {guides.map((g) => (
            <text key={g.label} x={g.x} y={g.y}>{g.label}</text>
          ))}
        </g>
      </svg>
    </svg>
  );
}
