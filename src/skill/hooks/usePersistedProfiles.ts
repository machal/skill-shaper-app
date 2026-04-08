import { useEffect, useState } from 'react'
import type { SavedProfile } from '../types'
import { STORAGE_KEY } from '../constants'

function readStoredProfiles(): SavedProfile[] {
  if (typeof window === 'undefined') return []
  const raw = localStorage.getItem(STORAGE_KEY)
  if (!raw) return []
  try {
    const parsed = JSON.parse(raw) as unknown
    return Array.isArray(parsed) ? (parsed as SavedProfile[]) : []
  } catch (e) {
    console.error('Failed to parse saved profiles', e)
    return []
  }
}

export function usePersistedProfiles() {
  const [profiles, setProfiles] = useState<SavedProfile[]>(readStoredProfiles)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profiles))
  }, [profiles])

  return { profiles, setProfiles }
}
