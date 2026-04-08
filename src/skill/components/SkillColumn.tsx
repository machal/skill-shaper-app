import { useRef } from 'react'
import { COLORS } from '../constants'
import type { Skill } from '../types'
import { useColumnDrag } from '../hooks/useColumnDrag'

type Props = {
  skill: Skill
  onDepthChange: (id: number, depth: number) => void
}

export function SkillColumn({ skill, onDepthChange }: Props) {
  const trackRef = useRef<HTMLDivElement>(null)
  const startDrag = useColumnDrag(trackRef, (depth) =>
    onDepthChange(skill.id, depth),
  )

  const glowAlpha = 0.15 + (skill.depth / 100) * 0.45

  return (
    <div className="group relative flex h-full flex-1 flex-col items-center">
      <div className="mb-14 flex h-12 w-full items-end justify-center px-1 text-center">
        <span className="text-[10px] font-black uppercase tracking-wider text-white/80 transition-colors group-hover:text-white">
          {skill.label}
        </span>
      </div>

      <div
        ref={trackRef}
        id={`track-${skill.id}`}
        className="relative h-[380px] w-12 cursor-ns-resize rounded-b-full bg-white/[0.02] transition-all md:w-16"
        onMouseDown={startDrag}
        onTouchStart={startDrag}
        role="slider"
        aria-valuenow={Math.round(skill.depth)}
        aria-valuemin={5}
        aria-valuemax={100}
        aria-label={`${skill.label} depth`}
        aria-orientation="vertical"
      >
        <div
          className="absolute inset-x-0 top-0 flex items-end justify-center overflow-hidden rounded-b-[2rem] pb-5 transition-all duration-200 ease-out"
          style={{
            height: `${skill.depth}%`,
            background: `linear-gradient(180deg, ${COLORS.pink} 0%, ${COLORS.pink}cc 100%)`,
            boxShadow: `0 10px 40px rgba(255, 0, 170, ${glowAlpha}), inset 0 -4px 12px rgba(0,0,0,0.3)`,
            opacity: 0.4 + (skill.depth / 100) * 0.6,
          }}
        >
          <div className="pointer-events-none absolute left-2 top-0 h-full w-2 rounded-full bg-white/30 opacity-50 blur-[2px]" />
          <div className="pointer-events-none absolute right-2 top-4 h-1/2 w-1 rounded-full bg-white/10 blur-[1px]" />

          <span className="z-20 text-[11px] font-black tracking-tighter text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            {Math.round(skill.depth)}%
          </span>
        </div>

        <div
          className="pointer-events-none absolute left-1/2 z-30 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-white opacity-0 shadow-[0_0_15px_rgba(255,255,255,1)] transition-opacity group-hover:opacity-100"
          style={{ top: `${skill.depth}%`, backgroundColor: COLORS.pink }}
        />
      </div>
    </div>
  )
}
