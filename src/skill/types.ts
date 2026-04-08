export type Skill = {
  id: number
  label: string
  depth: number
}

export type SavedProfile = {
  id: number
  name: string
  skills: Skill[]
}

export type PresetShape =
  | 'T-Shape'
  | 'Pi-Shape'
  | 'M-Shape'
  | 'V-Shape'
  | 'Reset'

/** Active UI state: either a known preset or user-edited */
export type ActivePreset = PresetShape | 'custom'
