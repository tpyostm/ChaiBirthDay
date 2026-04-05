import { useEffect, useState } from 'react'

type TypewriterTextProps = {
  text: string
  speed?: number
}

export function TypewriterText({ text, speed = 28 }: TypewriterTextProps) {
  const [visibleText, setVisibleText] = useState('')

  useEffect(() => {
    let index = 0
    const interval = window.setInterval(() => {
      index += 1
      setVisibleText(text.slice(0, index))
      if (index >= text.length) {
        window.clearInterval(interval)
      }
    }, speed)

    return () => window.clearInterval(interval)
  }, [speed, text])

  return (
    <p className="typing-cursor handwritten min-h-[6rem] text-[1.7rem] leading-9 text-[#5a4632] sm:min-h-[4.5rem]">
      {visibleText}
    </p>
  )
}
