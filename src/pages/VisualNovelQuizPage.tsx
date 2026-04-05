import memoryPhoto1 from '../assets/memories/1.jpg'
import memoryPhoto2 from '../assets/memories/2.jpg'
import memoryPhoto3 from '../assets/memories/3.jpg'
import revealPhoto1 from '../assets/reveals/1.jpg'
import revealPhoto2 from '../assets/reveals/2.jpg'
import revealPhoto3 from '../assets/reveals/3.jpg'
import type { VisualQuizQuestion } from '../data'

type VisualNovelQuizPageProps = {
  question: VisualQuizQuestion
  questionNumber: number
  totalQuestions: number
  feedback: string | null
  isLocked: boolean
  isRevealMode: boolean
  onAnswer: (selectedIndex: number) => void
}

export function VisualNovelQuizPage({
  question,
  questionNumber,
  totalQuestions,
  feedback,
  isLocked,
  isRevealMode,
  onAnswer,
}: VisualNovelQuizPageProps) {
  const memoryPhotos = [memoryPhoto1, memoryPhoto2, memoryPhoto3]
  const revealPhotos = [revealPhoto3, revealPhoto2, revealPhoto1]
  const currentPhoto = (isRevealMode ? revealPhotos : memoryPhotos)[questionNumber - 1] ?? memoryPhoto1
  const memoryHints = ['รูปนี้ที่ซีคอนแหละ', 'รูปนี้ปี 1 จำได้ไหม', 'รูปนี้ไม่รู้อ่ะยังไม่ทันรู้จัก']
  const currentHint = memoryHints[questionNumber - 1] ?? memoryHints[0]

  return (
    <div className="page-shell flex min-h-[70vh] flex-col gap-6">
      <div className="flex items-center justify-between">
        <p className="sticker sticker-peach">Memories Quiz {questionNumber}/{totalQuestions}</p>
        <p className="handwritten text-2xl text-[#5f4a37]">แบบทดสอบคนชอบกิน</p>
      </div>

      <div className="grid flex-1 gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass-card flex flex-col gap-4 overflow-hidden p-5">
          <div className="flex items-center justify-between gap-3">
            <span className="sticker sticker-sky">ความทรงจำรูปที่ {questionNumber}</span>
            <span className="font-body text-sm text-[#8d7252]">
              {isRevealMode ? 'เฉลยแล้วน้า' : `เหลืออีก ${totalQuestions - questionNumber + 1} รูป`}
            </span>
          </div>

          <div className="mx-auto aspect-square w-full max-w-md overflow-hidden rounded-[36px] border-[3px] border-[#8d7252] bg-white shadow-inner">
            <img
              src={currentPhoto}
              alt={isRevealMode ? `รูปเฉลยร้านที่ ${questionNumber}` : `รูปความทรงจำร้านที่ ${questionNumber}`}
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="rounded-[24px] border-[2px] border-[#4d6b8a] bg-[#e7f6ff] px-4 py-4 text-center handwritten text-2xl leading-8 text-[#31506c]">
            ร้านนี้ร้านอะไรเอ่ย จำได้ไหมน่าาา
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="glass-card p-7">
            <div className="space-y-3">
              <p className="font-body text-sm uppercase tracking-[0.28em] text-[#c56a52]">Guess The Place</p>
              <h2 className="scribble-title text-[2rem] leading-tight text-[#473625]">
                จะมาดูกันนะครับว่าจะจำร้านพวกนี้ได้หรือไม่
              </h2>
              <p className="font-body text-base leading-7 text-[#715945]">{currentHint}</p>
            </div>
          </div>

          <div className="glass-card flex-1 p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {question.options.map((option, index) => (
                <button
                  key={option}
                  type="button"
                  className="answer-button min-h-[5.5rem] text-center text-xl"
                  disabled={isLocked}
                  onClick={() => onAnswer(index)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div
            aria-live="polite"
            className={`glass-card p-6 text-center shadow-sm ${
              feedback
                ? 'border-[#8a6b1d] bg-[#fff0a8]'
                : 'bg-[#fff7db]'
            }`}
          >
            <div
              className={`rounded-[24px] border-[2px] px-5 py-4 ${
                feedback
                  ? 'border-[#8a6b1d] bg-[#fff3b8] handwritten text-2xl text-[#8a3b2d]'
                  : 'border-dashed border-[#8d7252] bg-white/50 font-body text-lg text-[#6f5844]'
              }`}
            >
              {feedback ?? 'ตอบได้เลย เดี๋ยวถ้าถูกจะมีรูปเฉลยขึ้นให้ดู 4 วินาทีก่อนเปลี่ยนข้อ'}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
