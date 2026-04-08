import type { ActivePreset, PresetShape } from '../types'
import { PRESET_BUTTONS } from '../constants'

type Props = {
  activePreset: ActivePreset
  onSelect: (preset: PresetShape) => void
}

export function PresetBar({ activePreset, onSelect }: Props) {
  return (
    <div className="mb-12 flex flex-wrap justify-center gap-3">
      {PRESET_BUTTONS.map((type) => (
        <button
          key={type}
          type="button"
          onClick={() => onSelect(type)}
          className={`rounded-lg border px-6 py-1.5 text-xs font-bold uppercase tracking-widest transition-all ${
            activePreset === type
              ? 'border-white bg-white text-[#000022] shadow-[0_0_20px_rgba(255,255,255,0.2)]'
              : 'border-white/10 bg-white/5 text-white/30 hover:border-white/30 hover:text-white/50'
          }`}
        >
          {type}
        </button>
      ))}
    </div>
  )
}
