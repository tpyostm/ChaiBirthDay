import { useState } from 'react'
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

  const spin = (asReroll = false) => {
    setIsSpinning(true)
    let ticks = 0
    const totalTicks = 14
    const interval = window.setInterval(() => {
      setDisplayedReward(slotRewards[ticks % slotRewards.length])
      ticks += 1
      if (ticks >= totalTicks) {
        window.clearInterval(interval)
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
        <p className="font-body text-sm uppercase tracking-[0.32em] text-rose-400">Lucky bonus spin</p>
        <h2 className="font-display text-5xl text-slate-900">Birthday reward machine</h2>
        <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-700">
          Press spin to get your little bonus prize. You can reroll once, but only once, because too much power would
          make the birthday star unstoppable.
        </p>
      </div>

      <div className="glass-card mx-auto max-w-3xl p-6">
        <div className="rounded-[32px] bg-[linear-gradient(180deg,_#881337,_#e11d48,_#fb7185)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]">
          <div className="grid gap-4 rounded-[28px] bg-rose-50 p-5 md:grid-cols-[0.2fr_1fr_0.2fr] md:items-center">
            <div className="font-display text-5xl text-rose-500">♥</div>
            <div className="rounded-[24px] border-4 border-dashed border-rose-200 bg-white px-6 py-10 text-center shadow-inner">
              <p className="font-display text-3xl text-slate-900">{displayedReward}</p>
            </div>
            <div className="font-display text-5xl text-rose-500">♥</div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button type="button" className="primary-button" disabled={isSpinning} onClick={() => spin(false)}>
            {currentResult ? 'Spin again' : 'Spin'}
          </button>
          <button
            type="button"
            className="secondary-button"
            disabled={isSpinning || !currentResult || localRerollUsed}
            onClick={() => spin(true)}
          >
            {localRerollUsed ? 'Reroll used' : 'Use 1 reroll'}
          </button>
          <button
            type="button"
            className="secondary-button"
            disabled={!currentResult || isSpinning}
            onClick={onContinue}
          >
            Continue
          </button>
        </div>

        <p className="mt-4 text-center text-sm font-semibold text-rose-500">
          {currentResult
            ? `Current reward: ${currentResult}`
            : 'The machine is waiting for one brave birthday tap.'}
        </p>
      </div>
    </div>
  )
}
