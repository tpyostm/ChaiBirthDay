import vergilImage from '../assets/mcq/vergil.webp'
import cordycepsImage from '../assets/mcq/cordyceps.jpeg'
import mrxImage from '../assets/mcq/mrx.webp'
import type { MultipleChoiceQuestion } from '../data'

type MultipleChoiceQuizPageProps = {
  question: MultipleChoiceQuestion
  questionNumber: number
  totalQuestions: number
  feedback: string | null
  isLocked: boolean
  onSelect: (index: number) => void
}

export function MultipleChoiceQuizPage({
  question,
  questionNumber,
  totalQuestions,
  feedback,
  isLocked,
  onSelect,
}: MultipleChoiceQuizPageProps) {
  const questionImages = [vergilImage, cordycepsImage, mrxImage]
  const currentImage = questionImages[questionNumber - 1] ?? vergilImage

  return (
    <div className="page-shell min-h-[70vh] space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-body text-sm tracking-[0.24em] text-[#c56a52]">เกมแฟนพันธ์แท้</p>
          <h2 className="scribble-title text-4xl text-[#473625]">มาทดสอบความเป็นเกมเมอร์ของคุนกัน</h2>
        </div>
        <p className="sticker sticker-sky">Question {questionNumber}/{totalQuestions}</p>
      </div>

      <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="glass-card p-6">
          <div className="flex h-full min-h-[20rem] items-center justify-center overflow-hidden rounded-[28px] border-[2px] border-dashed border-[#8d7252] bg-[linear-gradient(180deg,_#fffdf8,_#fff6ea)] p-4 text-center">
            <img src={currentImage} alt={question.imageLabel} className="h-full w-full rounded-[22px] object-cover" />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="glass-card p-6">
            <div className="paper-note notebook-lines">
              <p className="handwritten pl-10 text-[1.9rem] leading-9 text-[#5a4632]">{question.prompt}</p>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {question.options.map((option, index) => (
                <button
                  key={option}
                  type="button"
                  className="answer-button min-h-28"
                  disabled={isLocked}
                  onClick={() => onSelect(index)}
                >
                  <span className="mb-2 block scribble-title text-2xl text-[#ff7f50]">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="block text-xl leading-7">{option}</span>
                </button>
              ))}
            </div>
          </div>

          <div
            aria-live="polite"
            className="rounded-[28px] border-[2px] border-dashed border-[#8d7252] bg-[#fff7db] px-5 py-4 handwritten text-2xl text-[#8a3b2d] shadow-sm"
          >
            {feedback ?? 'เลือกคำตอบได้เลยยยย'}
          </div>
        </div>
      </div>
    </div>
  )
}
