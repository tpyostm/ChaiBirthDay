import { useEffect, useRef, useState } from 'react'

const melody = [523.25, 659.25, 783.99, 659.25, 698.46, 587.33, 523.25]

export function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false)
  const contextRef = useRef<AudioContext | null>(null)
  const timeoutRef = useRef<number | null>(null)
  const noteIndexRef = useRef(0)
  const isPlayingRef = useRef(false)

  useEffect(() => {
    isPlayingRef.current = isPlaying
  }, [isPlaying])

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }
      contextRef.current?.close().catch(() => undefined)
    }
  }, [])

  const togglePlayback = async () => {
    if (isPlaying) {
      setIsPlaying(false)
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }
      return
    }

    const context = contextRef.current ?? new window.AudioContext()
    contextRef.current = context
    await context.resume()
    setIsPlaying(true)
  }

  useEffect(() => {
    if (!isPlaying) {
      return
    }

    const scheduleNextNote = () => {
      if (!contextRef.current) {
        return
      }

      const context = contextRef.current
      const oscillator = context.createOscillator()
      const gain = context.createGain()
      const note = melody[noteIndexRef.current % melody.length]

      oscillator.type = 'sine'
      oscillator.frequency.value = note
      gain.gain.setValueAtTime(0.0001, context.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.08, context.currentTime + 0.02)
      gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.34)

      oscillator.connect(gain)
      gain.connect(context.destination)
      oscillator.start()
      oscillator.stop(context.currentTime + 0.36)

      noteIndexRef.current += 1
      timeoutRef.current = window.setTimeout(() => {
        if (isPlayingRef.current) {
          scheduleNextNote()
        }
      }, 380)
    }

    scheduleNextNote()

    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [isPlaying])

  return (
    <button type="button" className="secondary-button" onClick={() => void togglePlayback()}>
      {isPlaying ? 'Pause birthday melody' : 'Play birthday melody'}
    </button>
  )
}
