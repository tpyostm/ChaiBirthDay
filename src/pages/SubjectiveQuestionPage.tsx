import { useState } from 'react'
import type { FormEvent } from 'react'

type SubjectiveQuestionPageProps = {
  question: string
  feedback: string | null
  isSolved: boolean
  onSubmit: (value: string) => void
}

export function SubjectiveQuestionPage({
  question,
  feedback,
  isSolved,
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
        <p className="font-body text-sm uppercase tracking-[0.32em] text-rose-400">Final little checkpoint</p>
        <h2 className="mt-3 font-display text-5xl text-slate-900">One heartfelt answer left</h2>
        <p className="mt-4 text-lg leading-8 text-slate-700">
          Type the answer and unlock the final card. It is not a trick question. This whole site has been loudly
          hinting at it the entire time.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="glass-card flex flex-col gap-5 p-6">
        <label className="text-xl font-bold leading-8 text-slate-800" htmlFor="subjective-answer">
          {question}
        </label>
        <textarea
          id="subjective-answer"
          className="min-h-40 rounded-[28px] border border-rose-100 bg-white px-5 py-4 text-lg text-slate-700 shadow-inner outline-none transition focus:border-rose-300 focus:ring-4 focus:ring-rose-100"
          placeholder="Type your answer here..."
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <div className="flex flex-wrap gap-3">
          <button type="submit" className="primary-button" disabled={isSolved}>
            {isSolved ? 'Unlocked' : 'Submit answer'}
          </button>
        </div>
        <div className="rounded-[24px] border border-dashed border-rose-200 bg-rose-50 px-5 py-4 text-base font-semibold text-rose-600">
          {feedback ?? 'Hint: two words. Very classic. Very birthday.'}
        </div>
      </form>
    </div>
  )
}
