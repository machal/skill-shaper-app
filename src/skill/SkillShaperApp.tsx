import { useCallback, useState } from 'react'
import { COLORS, DEFAULT_CEO_SKILLS } from './constants'
import { applyPreset } from './presets'
import type { ActivePreset, PresetShape, SavedProfile, Skill } from './types'
import { usePersistedProfiles } from './hooks/usePersistedProfiles'
import { Header } from './components/Header'
import { PresetBar } from './components/PresetBar'
import { VisualizationCanvas } from './components/VisualizationCanvas'
import { ProfilesPanel } from './components/ProfilesPanel'
import { SkillEditorModal } from './components/SkillEditorModal'

export function SkillShaperApp() {
  const [skills, setSkills] = useState<Skill[]>(() =>
    DEFAULT_CEO_SKILLS.map((label, i) => ({ id: i + 1, label, depth: 40 })),
  )
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [skillText, setSkillText] = useState(() =>
    DEFAULT_CEO_SKILLS.join('\n'),
  )
  const [activePreset, setActivePreset] = useState<ActivePreset>('custom')
  const { profiles, setProfiles } = usePersistedProfiles()
  const [profileName, setProfileName] = useState('')

  const updateDepth = useCallback((id: number, newDepth: number) => {
    const clamped = Math.max(5, Math.min(100, newDepth))
    setSkills((prev) =>
      prev.map((s) => (s.id === id ? { ...s, depth: clamped } : s)),
    )
    setActivePreset('custom')
  }, [])

  const handleApplyPreset = useCallback((type: PresetShape) => {
    setActivePreset(type)
    setSkills((prev) => applyPreset(type, prev))
  }, [])

  const handleBulkUpdate = useCallback(() => {
    const lines = skillText.split('\n').filter((line) => line.trim() !== '')
    const newSkills = lines.map((label, i) => ({
      id: Date.now() + i,
      label: label.trim().toUpperCase(),
      depth: 40,
    }))
    setSkills(newSkills)
    setIsModalOpen(false)
  }, [skillText])

  const handleSaveProfile = useCallback(() => {
    const name = profileName.trim()
    if (!name) return
    const newProfile: SavedProfile = {
      id: Date.now(),
      name,
      skills: [...skills],
    }
    setProfiles((prev) => [...prev, newProfile])
    setProfileName('')
  }, [profileName, skills, setProfiles])

  const handleLoadProfile = useCallback((p: SavedProfile) => {
    setSkills(p.skills)
    setSkillText(p.skills.map((s) => s.label).join('\n'))
    setActivePreset('custom')
  }, [])

  const handleDeleteProfile = useCallback(
    (id: number) => {
      setProfiles((prev) => prev.filter((x) => x.id !== id))
    },
    [setProfiles],
  )

  return (
    <div
      className="min-h-screen overflow-x-hidden p-4 font-sans selection:bg-pink-500/30 md:p-12"
      style={{ backgroundColor: COLORS.darkBlue, color: COLORS.white }}
    >
      <div className="mx-auto max-w-7xl">
        <Header onOpenEditor={() => setIsModalOpen(true)} />
        <PresetBar activePreset={activePreset} onSelect={handleApplyPreset} />
        <VisualizationCanvas skills={skills} onDepthChange={updateDepth} />
        <ProfilesPanel
          profileName={profileName}
          onProfileNameChange={setProfileName}
          onSaveProfile={handleSaveProfile}
          profiles={profiles}
          onLoadProfile={handleLoadProfile}
          onDeleteProfile={handleDeleteProfile}
        />
        <SkillEditorModal
          open={isModalOpen}
          skillText={skillText}
          onSkillTextChange={setSkillText}
          onClose={() => setIsModalOpen(false)}
          onApply={handleBulkUpdate}
          onResetDefaults={() => setSkillText(DEFAULT_CEO_SKILLS.join('\n'))}
        />
      </div>
    </div>
  )
}
