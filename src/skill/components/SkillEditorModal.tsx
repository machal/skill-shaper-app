import { RotateCcw, X } from 'lucide-react'
import { COLORS } from '../constants'

type Props = {
  open: boolean
  skillText: string
  onSkillTextChange: (value: string) => void
  onClose: () => void
  onApply: () => void
  onResetDefaults: () => void
}

export function SkillEditorModal({
  open,
  skillText,
  onSkillTextChange,
  onClose,
  onApply,
  onResetDefaults,
}: Props) {
  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#000022]/95 p-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="skill-editor-title"
    >
      <div className="w-full max-w-xl overflow-hidden rounded-[3rem] border border-white/10 bg-[#000022] shadow-[0_0_100px_rgba(255,0,170,0.1)]">
        <div className="p-10">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h3
                id="skill-editor-title"
                className="text-3xl font-black tracking-tighter text-white"
              >
                SKILL EDITOR
              </h3>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">
                One entry per line
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="text-white/10 transition-colors hover:text-white"
              aria-label="Close editor"
            >
              <X size={32} />
            </button>
          </div>

          <textarea
            rows={8}
            className="w-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 font-mono text-sm text-white transition-all focus:border-pink-500 focus:outline-none"
            value={skillText}
            onChange={(e) => onSkillTextChange(e.target.value)}
            aria-label="Skills, one per line"
          />

          <div className="mt-10 flex gap-4">
            <button
              type="button"
              onClick={onApply}
              className="flex-1 rounded-2xl py-4 text-xs font-black uppercase tracking-widest text-white shadow-xl transition-all hover:brightness-110 active:scale-95"
              style={{ backgroundColor: COLORS.pink }}
            >
              Generate Visualizer
            </button>
            <button
              type="button"
              onClick={onResetDefaults}
              className="rounded-2xl border border-white/5 bg-white/5 p-4 text-white/20 transition-colors hover:text-white"
              title="Reset defaults"
              aria-label="Reset to default CEO skills"
            >
              <RotateCcw size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
