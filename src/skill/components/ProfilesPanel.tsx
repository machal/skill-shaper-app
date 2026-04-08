import { ChevronRight, Save, Trash2, User } from 'lucide-react'
import { COLORS } from '../constants'
import type { SavedProfile } from '../types'

type Props = {
  profileName: string
  onProfileNameChange: (value: string) => void
  onSaveProfile: () => void
  profiles: SavedProfile[]
  onLoadProfile: (profile: SavedProfile) => void
  onDeleteProfile: (id: number) => void
}

export function ProfilesPanel({
  profileName,
  onProfileNameChange,
  onSaveProfile,
  profiles,
  onLoadProfile,
  onDeleteProfile,
}: Props) {
  return (
    <div className="mx-auto grid max-w-5xl gap-8 pb-12 md:grid-cols-2">
      <div className="rounded-[2.5rem] border border-white/5 bg-white/[0.03] p-8 shadow-xl">
        <h3 className="mb-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
          <Save size={14} className="text-pink-500" aria-hidden />
          Save Active Profile
        </h3>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="e.g. Series B CEO"
            value={profileName}
            onChange={(e) => onProfileNameChange(e.target.value)}
            className="flex-1 rounded-xl border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-bold text-white transition-all focus:border-pink-500 focus:outline-none"
            aria-label="Profile name"
          />
          <button
            type="button"
            onClick={onSaveProfile}
            className="rounded-xl px-6 py-3 text-[11px] font-black uppercase tracking-widest shadow-lg transition-all active:scale-95"
            style={{ backgroundColor: COLORS.pink }}
          >
            Save
          </button>
        </div>
      </div>

      <div className="h-full rounded-[2.5rem] border border-white/5 bg-white/[0.03] p-8 shadow-xl">
        <h3 className="mb-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
          <User size={14} className="text-white/30" aria-hidden />
          Saved Templates
        </h3>
        <div className="custom-scrollbar max-h-44 space-y-3 overflow-y-auto pr-2">
          {profiles.length === 0 && (
            <p className="text-xs italic text-white/5">No templates found.</p>
          )}
          {profiles.map((p) => (
            <div
              key={p.id}
              className="group flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.02] p-4 transition-all hover:bg-white/[0.07]"
            >
              <span className="text-xs font-bold text-white/50 transition-colors group-hover:text-white">
                {p.name}
              </span>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => onLoadProfile(p)}
                  className="text-pink-500 transition-transform hover:scale-125"
                  title="Load"
                  aria-label={`Load profile ${p.name}`}
                >
                  <ChevronRight size={22} />
                </button>
                <button
                  type="button"
                  onClick={() => onDeleteProfile(p.id)}
                  className="text-white/10 transition-colors hover:text-red-500"
                  title="Delete"
                  aria-label={`Delete profile ${p.name}`}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
