import { useCallback, type RefObject } from 'react'

function clampDepth(raw: number) {
  return Math.max(5, Math.min(100, raw))
}

/**
 * Vertical track: top = low depth, bottom = high depth (matches original UI).
 */
export function useColumnDrag(
  trackRef: RefObject<HTMLElement | null>,
  onDepth: (depth: number) => void,
) {
  const startDrag = useCallback(() => {
    const move = (moveEvent: MouseEvent | TouchEvent) => {
      const el = trackRef.current
      if (!el) return
      const clientY =
        'touches' in moveEvent && moveEvent.touches.length > 0
          ? moveEvent.touches[0].clientY
          : (moveEvent as MouseEvent).clientY
      const rect = el.getBoundingClientRect()
      const relativeY = clientY - rect.top
      const percentage = (relativeY / rect.height) * 100
      onDepth(clampDepth(percentage))
      if ('touches' in moveEvent) moveEvent.preventDefault()
    }

    const end = () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseup', end)
      window.removeEventListener('touchmove', move)
      window.removeEventListener('touchend', end)
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseup', end)
    window.addEventListener('touchmove', move, { passive: false })
    window.addEventListener('touchend', end)
  }, [onDepth, trackRef])

  return startDrag
}
