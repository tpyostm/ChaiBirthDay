import { CharacterPortrait } from '../components/Illustrations'
import { TypewriterText } from '../components/TypewriterText'
import type { YesNoQuestion } from '../data'

type VisualNovelQuizPageProps = {
  question: YesNoQuestion
  questionNumber: number
  totalQuestions: number
  feedback: string | null
  onAnswer: (answer: boolean) => void
}

export function VisualNovelQuizPage({
  question,
  questionNumber,
  totalQuestions,
  feedback,
  onAnswer,
}: VisualNovelQuizPageProps) {
  return (
    <div className="page-shell flex min-h-[70vh] flex-col gap-6">
      <div className="flex items-center justify-between">
        <p className="rounded-full bg-rose-100 px-4 py-2 text-sm font-bold text-rose-600">
          Visual Novel Quiz {questionNumber}/{totalQuestions}
        </p>
        <p className="font-semibold text-slate-500">Choose carefully, birthday star.</p>
      </div>

      <div className="grid flex-1 gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="glass-card overflow-hidden p-5">
          <div className="mx-auto aspect-square max-w-sm rounded-[32px] bg-[linear-gradient(180deg,_rgba(255,255,255,0.96),_rgba(251,113,133,0.2))] p-4 shadow-inner">
            <CharacterPortrait />
          </div>
          <div className="mt-4 rounded-[24px] bg-rose-50 px-4 py-3 text-center text-sm font-semibold text-rose-600">
            Tiny character reaction: absolutely watching your answer choices
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="glass-card flex-1 p-6">
            <p className="font-body text-sm uppercase tracking-[0.3em] text-rose-400">Dialogue box</p>
            <div className="mt-4 rounded-[28px] bg-white p-5 shadow-inner">
              <TypewriterText key={question.prompt} text={question.prompt} />
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <button type="button" className="answer-button text-center text-lg" onClick={() => onAnswer(true)}>
                Yes
              </button>
              <button type="button" className="answer-button text-center text-lg" onClick={() => onAnswer(false)}>
                No
              </button>
            </div>
          </div>

          <div className="rounded-[28px] border border-dashed border-rose-200 bg-white/75 px-5 py-4 text-base font-semibold text-rose-600 shadow-sm">
            {feedback ?? 'Answer with confidence. This quiz is powered by birthday feelings, not logic.'}
          </div>
        </div>
      </div>
    </div>
  )
}
