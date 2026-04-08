import type { PresetShape, Skill } from './types'

const clampDepth = (d: number) => Math.max(5, Math.min(100, d))

export function applyPreset(type: PresetShape, skills: Skill[]): Skill[] {
  if (skills.length === 0) return skills

  const mid = Math.floor(skills.length / 2)
  const half = Math.max(skills.length / 2, 1)

  switch (type) {
    case 'T-Shape':
      return skills.map((s, i) => ({ ...s, depth: i === 0 ? 95 : 12 }))
    case 'Pi-Shape':
      return skills.map((s, i) => ({ ...s, depth: i === 0 || i === 4 ? 90 : 15 }))
    case 'M-Shape':
      return skills.map((s, i) => ({ ...s, depth: i % 2 === 0 ? 85 : 20 }))
    case 'V-Shape': {
      const scale = 90 / half
      return skills.map((s, i) => ({
        ...s,
        depth: clampDepth(100 - Math.abs(mid - i) * scale),
      }))
    }
    case 'Reset':
      return skills.map((s) => ({ ...s, depth: 40 }))
    default: {
      const _exhaustive: never = type
      return _exhaustive
    }
  }
}
