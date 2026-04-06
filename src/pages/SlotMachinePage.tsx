import { useEffect, useRef, useState } from 'react'
import { slotRewards } from '../data'

type SlotMachinePageProps = {
  initialResult: string | null
  rerollUsed: boolean
  onSpinComplete: (reward: string, usedReroll: boolean) => void
  onContinue: () => void
}

export function SlotMachinePage({
  initialResult,
  rerollUsed,
  onSpinComplete,
  onContinue,
}: SlotMachinePageProps) {
  const [displayedReward, setDisplayedReward] = useState(initialResult ?? slotRewards[0])
  const [isSpinning, setIsSpinning] = useState(false)
  const [currentResult, setCurrentResult] = useState<string | null>(initialResult)
  const [localRerollUsed, setLocalRerollUsed] = useState(rerollUsed)
  const intervalRef = useRef<number | null>(null)

  useEffect(() => {
    setDisplayedReward(initialResult ?? slotRewards[0])
    setCurrentResult(initialResult)
  }, [initialResult])

  useEffect(() => {
    setLocalRerollUsed(rerollUsed)
  }, [rerollUsed])

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current)
      }
    }
  }, [])

  const spin = (asReroll = false) => {
    setIsSpinning(true)
    let ticks = 0
    const totalTicks = 14
    intervalRef.current = window.setInterval(() => {
      setDisplayedReward(slotRewards[ticks % slotRewards.length])
      ticks += 1
      if (ticks >= totalTicks) {
        if (intervalRef.current) {
          window.clearInterval(intervalRef.current)
          intervalRef.current = null
        }
        const finalReward = slotRewards[(ticks + Math.floor(Math.random() * slotRewards.length)) % slotRewards.length]
        setDisplayedReward(finalReward)
        setCurrentResult(finalReward)
        setIsSpinning(false)
        if (asReroll) {
          setLocalRerollUsed(true)
        }
        onSpinComplete(finalReward, asReroll || localRerollUsed)
      }
    }, 120)
  }

  return (
    <div className="page-shell min-h-[70vh] space-y-6">
      <div className="space-y-3 text-center">
        <p className="font-body text-sm tracking-[0.22em] text-[#c56a52]">มาสุ่มรางวัลกัน</p>
        <h2 className="scribble-title text-5xl text-[#473625]">คุนน่าจะเดาได้ยุแล้วแหละว่าผมอาจจะซื้อเกมให้5555</h2>
        <p className="mx-auto max-w-2xl handwritten text-2xl leading-8 text-[#5f4a37]">
          แต่ๆๆแบบนั้นมันก็จะง่ายไปเรามาสุ่มกาชาแบบที่เรารักกันดีกว่า กฏง่ายๆเลยถ้ามันขึ้นอะไรผมจะซื้อให้ตามนั้นเลย
        </p>
      </div>

      <div className="glass-card mx-auto max-w-3xl p-6">
        <div className="rounded-[32px] border-[3px] border-[#7a6144] bg-[linear-gradient(180deg,_#ffd166,_#ff9f68,_#ff8fab)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]">
          <div className="grid gap-4 rounded-[28px] bg-[#fff7db] p-5 md:grid-cols-[0.2fr_1fr_0.2fr] md:items-center">
            <div className="scribble-title text-5xl text-[#ff7f50]">★</div>
            <div className="rounded-[24px] border-[4px] border-dashed border-[#8d7252] bg-white px-6 py-10 text-center shadow-inner">
              <p className="handwritten text-4xl text-[#5a4632]">{displayedReward}</p>
            </div>
            <div className="scribble-title text-5xl text-[#8ecae6]">★</div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            className="primary-button"
            disabled={isSpinning || currentResult !== null}
            onClick={() => spin(false)}
          >
            {currentResult ? 'สุ่มอีกที' : 'สุ่มเลย'}
          </button>
          <button
            type="button"
            className="secondary-button"
            disabled={isSpinning || !currentResult || localRerollUsed}
            onClick={() => spin(true)}
          >
            {localRerollUsed ? 'ใช้สิทธิ์ไปแล้ว' : 'ใช้ 1 reroll'}
          </button>
          <button
            type="button"
            className="secondary-button"
            disabled={!currentResult || isSpinning}
            onClick={onContinue}
          >
            ไปต่อ
          </button>
        </div>

        <p aria-live="polite" className="mt-4 text-center handwritten text-2xl text-[#8a3b2d]">
          {currentResult ? `รางวัลที่ได้: ${currentResult}` : 'กดสุ่มแล้วแคปมาด้วยนะ เป็นหลักฐานแลกของรางวัล'}
        </p>
      </div>
    </div>
  )
}
