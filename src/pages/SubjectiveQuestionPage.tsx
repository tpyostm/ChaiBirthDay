import { useState } from 'react'
import type { FormEvent } from 'react'

type SubjectiveQuestionPageProps = {
  question: string
  feedback: string | null
  attemptsRemaining: number
  isSolved: boolean
  isLocked: boolean
  onSubmit: (value: string) => void
}

export function SubjectiveQuestionPage({
  question,
  feedback,
  attemptsRemaining,
  isSolved,
  isLocked,
  onSubmit,
}: SubjectiveQuestionPageProps) {
  const [value, setValue] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit(value)
  }

  return (
    <div className="page-shell grid min-h-[70vh] gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="glass-card flex flex-col justify-center p-6">
        <p className="font-body text-sm tracking-[0.22em] text-[#c56a52]">สิ่งสุดท้าย</p>
        <h2 className="mt-3 scribble-title text-5xl text-[#473625]">ยังจำได้ไหม</h2>
        <p className="mt-4 handwritten text-2xl leading-8 text-[#5f4a37]">
          อันนี้เป็นการทดสอบคุณเล่นๆนะว่ายังจำชื่อผมได้รึไม่ หวังว่าจะยังไม่ลืมกันหล่ะ ยยะยังไม่ลืมใช่ไหม ใช่ไหม!!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="glass-card notebook-lines flex flex-col gap-5 p-6">
        <label className="handwritten pl-10 text-[1.85rem] leading-8 text-[#5a4632]" htmlFor="subjective-answer">
          {question}
        </label>
        <textarea
          id="subjective-answer"
          className="min-h-40 rounded-[28px] border-[2px] border-[#8d7252] bg-white/90 px-5 py-4 text-xl text-[#5a4632] shadow-inner outline-none transition focus:border-[#ff9f68] focus:ring-4 focus:ring-orange-100"
          disabled={isLocked}
          placeholder="Type your answer here..."
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <div className="flex flex-wrap gap-3">
          <button type="submit" className="primary-button" disabled={isSolved || isLocked}>
            {isSolved ? 'Unlocked' : 'Submit answer'}
          </button>
        </div>
        <div
          aria-live="polite"
          className="rounded-[24px] border-[2px] border-dashed border-[#8d7252] bg-[#fff7db] px-5 py-4 handwritten text-2xl text-[#8a3b2d]"
        >
          {feedback ?? `ให้โอกาส ${attemptsRemaining} ครั้ง`}
        </div>
      </form>
    </div>
  )
}
