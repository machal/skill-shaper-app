import type { PresetShape } from './types'

export const COLORS = {
  pink: '#FF00AA',
  darkBlue: '#000022',
  brightBlue: '#0000FF',
  white: '#FFFFFF',
} as const

export const DEFAULT_CEO_SKILLS = [
  'STRATEGY',
  'OPERATIVE',
  'PEOPLE',
  'FINANCE',
  'SALES',
  'MARKETING',
  'PRODUCT',
  'UX',
  'UI',
  'FE DEV',
  'BE DEV',
  'INFRA',
  'SECURITY',
] as const

export const STORAGE_KEY = 'skill_shaper_v5_profiles'

export const PRESET_BUTTONS: readonly PresetShape[] = [
  'T-Shape',
  'Pi-Shape',
  'M-Shape',
  'V-Shape',
  'Reset',
]
