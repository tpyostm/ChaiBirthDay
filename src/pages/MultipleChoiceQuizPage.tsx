import type { MultipleChoiceQuestion } from '../data'

type MultipleChoiceQuizPageProps = {
  question: MultipleChoiceQuestion
  questionNumber: number
  totalQuestions: number
  feedback: string | null
  onSelect: (index: number) => void
}

export function MultipleChoiceQuizPage({
  question,
  questionNumber,
  totalQuestions,
  feedback,
  onSelect,
}: MultipleChoiceQuizPageProps) {
  return (
    <div className="page-shell min-h-[70vh] space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-body text-sm uppercase tracking-[0.32em] text-rose-400">Birthday quiz round</p>
          <h2 className="font-display text-4xl text-slate-900">Pick the cutest correct answer</h2>
        </div>
        <p className="rounded-full bg-white/80 px-4 py-2 text-sm font-bold text-rose-600 shadow-sm">
          Question {questionNumber}/{totalQuestions}
        </p>
      </div>

      <div className="glass-card p-6">
        <p className="text-2xl font-bold leading-9 text-slate-800">{question.prompt}</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {question.options.map((option, index) => (
            <button key={option} type="button" className="answer-button min-h-28" onClick={() => onSelect(index)}>
              <span className="mb-2 block font-display text-2xl text-rose-500">{String.fromCharCode(65 + index)}</span>
              <span className="block text-base leading-7">{option}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-[28px] border border-dashed border-rose-200 bg-white/75 px-5 py-4 text-base font-semibold text-rose-600 shadow-sm">
        {feedback ?? 'You can do this. Choose the answer with the strongest birthday energy.'}
      </div>
    </div>
  )
}
