import { Edit3 } from 'lucide-react'
import { COLORS } from '../constants'

type Props = {
  onOpenEditor: () => void
}

export function Header({ onOpenEditor }: Props) {
  return (
    <header className="mb-8 flex flex-col items-center justify-between gap-6 md:flex-row">
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-black tracking-tighter text-white md:text-5xl">
          SKILL<span style={{ color: COLORS.pink }}>SHAPER</span>
        </h1>
        <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.4em] text-white/20">
          Founders DNA • 2026 Ready
        </p>
      </div>

      <button
        type="button"
        onClick={onOpenEditor}
        className="flex items-center gap-2 rounded-full px-8 py-3 font-black shadow-[0_0_40px_rgba(255,0,170,0.2)] transition-all hover:brightness-110 active:scale-95"
        style={{ backgroundColor: COLORS.pink, color: COLORS.white }}
        aria-label="Change skills list"
      >
        <Edit3 size={18} aria-hidden />
        CHANGE SKILLS
      </button>
    </header>
  )
}
