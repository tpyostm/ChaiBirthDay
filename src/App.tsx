import { useEffect, useMemo, useState } from 'react'
import { FINAL_MESSAGE, mcqQuestions, subjectiveQuestion, visualNovelQuestions } from './data'
import { FinalBirthdayPage } from './pages/FinalBirthdayPage'
import { GiftRevealPage } from './pages/GiftRevealPage'
import { IntroPage } from './pages/IntroPage'
import { MultipleChoiceQuizPage } from './pages/MultipleChoiceQuizPage'
import { SlotMachinePage } from './pages/SlotMachinePage'
import { SubjectiveQuestionPage } from './pages/SubjectiveQuestionPage'
import { VisualNovelQuizPage } from './pages/VisualNovelQuizPage'

type PageId =
  | 'intro'
  | 'visual-novel'
  | 'gift'
  | 'multiple-choice'
  | 'slot'
  | 'subjective'
  | 'final'

const pageOrder: PageId[] = [
  'intro',
  'visual-novel',
  'gift',
  'multiple-choice',
  'slot',
  'subjective',
  'final',
]

function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('intro')
  const [visualQuestionIndex, setVisualQuestionIndex] = useState(0)
  const [visualFeedback, setVisualFeedback] = useState<string | null>(null)
  const [giftOpened, setGiftOpened] = useState(false)
  const [mcqIndex, setMcqIndex] = useState(0)
  const [mcqFeedback, setMcqFeedback] = useState<string | null>(null)
  const [slotResult, setSlotResult] = useState<string | null>(null)
  const [rerollUsed, setRerollUsed] = useState(false)
  const [subjectiveFeedback, setSubjectiveFeedback] = useState<string | null>(null)
  const [subjectiveSolved, setSubjectiveSolved] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentPage])

  const currentStep = pageOrder.indexOf(currentPage) + 1
  const progressPercent = (currentStep / pageOrder.length) * 100

  const pageLabel = useMemo(() => {
    switch (currentPage) {
      case 'intro':
        return 'Opening the surprise'
      case 'visual-novel':
        return 'Cute checkpoint'
      case 'gift':
        return 'Present time'
      case 'multiple-choice':
        return 'Birthday brain test'
      case 'slot':
        return 'Lucky bonus spin'
      case 'subjective':
        return 'One final answer'
      case 'final':
        return 'Birthday ending'
    }
  }, [currentPage])

  const handleVisualAnswer = (answer: boolean) => {
    const currentQuestion = visualNovelQuestions[visualQuestionIndex]
    if (answer === currentQuestion.correctAnswer) {
      const nextIndex = visualQuestionIndex + 1
      setVisualFeedback(currentQuestion.successMessage)
      if (nextIndex >= visualNovelQuestions.length) {
        window.setTimeout(() => {
          setCurrentPage('gift')
          setVisualFeedback(null)
        }, 800)
        return
      }

      window.setTimeout(() => {
        setVisualQuestionIndex(nextIndex)
        setVisualFeedback(null)
      }, 900)
      return
    }

    setVisualFeedback(currentQuestion.retryMessage)
  }

  const handleMcqAnswer = (selectedIndex: number) => {
    const currentQuestion = mcqQuestions[mcqIndex]
    if (selectedIndex === currentQuestion.correctAnswerIndex) {
      const nextIndex = mcqIndex + 1
      setMcqFeedback(currentQuestion.successMessage)
      if (nextIndex >= mcqQuestions.length) {
        window.setTimeout(() => {
          setCurrentPage('slot')
          setMcqFeedback(null)
        }, 900)
        return
      }

      window.setTimeout(() => {
        setMcqIndex(nextIndex)
        setMcqFeedback(null)
      }, 900)
      return
    }

    setMcqFeedback(currentQuestion.retryMessage)
  }

  const handleSpinComplete = (reward: string, usedReroll: boolean) => {
    setSlotResult(reward)
    setRerollUsed(usedReroll)
  }

  const handleSubjectiveSubmit = (value: string) => {
    const normalized = value.trim().toLowerCase()
    const matchesExact = normalized === subjectiveQuestion.answer.toLowerCase()
    const matchesKeyword = subjectiveQuestion.acceptedKeywords.every((keyword) =>
      normalized.includes(keyword.toLowerCase()),
    )

    if (matchesExact || matchesKeyword) {
      setSubjectiveFeedback(subjectiveQuestion.successMessage)
      setSubjectiveSolved(true)
      window.setTimeout(() => {
        setCurrentPage('final')
      }, 900)
      return
    }

    setSubjectiveFeedback(subjectiveQuestion.retryMessage)
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.96),_rgba(255,228,235,0.92)_30%,_rgba(255,194,205,0.82)_62%,_rgba(255,170,183,0.85)_100%)] text-slate-900">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 18 }).map((_, index) => (
          <span
            key={index}
            className="heart-float absolute rounded-full bg-white/40 blur-sm"
            style={{
              width: `${20 + (index % 4) * 12}px`,
              height: `${20 + (index % 4) * 12}px`,
              left: `${(index * 11) % 100}%`,
              top: `${(index * 13) % 100}%`,
              animationDelay: `${index * 0.35}s`,
              animationDuration: `${6 + (index % 5)}s`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-5 sm:px-6 lg:px-8">
        <header className="mb-6 rounded-[32px] border border-white/60 bg-white/55 px-5 py-4 shadow-[0_20px_80px_rgba(166,31,65,0.18)] backdrop-blur">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-body text-sm uppercase tracking-[0.32em] text-rose-500">
                Birthday Surprise Route
              </p>
              <h1 className="font-display text-3xl text-slate-900 sm:text-4xl">
                A tiny love-filled world, made just for one birthday star
              </h1>
            </div>
            <div className="rounded-full bg-rose-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-rose-300/50">
              Step {currentStep} / {pageOrder.length}
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between text-sm text-slate-600">
              <span>{pageLabel}</span>
              <span>{Math.round(progressPercent)}% full of birthday magic</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-white/75">
              <div
                className="h-full rounded-full bg-[linear-gradient(90deg,_#fb7185,_#e11d48,_#881337)] transition-all duration-700 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </header>

        <section className="flex-1">
          {currentPage === 'intro' && <IntroPage onContinue={() => setCurrentPage('visual-novel')} />}
          {currentPage === 'visual-novel' && (
            <VisualNovelQuizPage
              question={visualNovelQuestions[visualQuestionIndex]}
              questionNumber={visualQuestionIndex + 1}
              totalQuestions={visualNovelQuestions.length}
              feedback={visualFeedback}
              onAnswer={handleVisualAnswer}
            />
          )}
          {currentPage === 'gift' && (
            <GiftRevealPage
              isOpened={giftOpened}
              onOpen={() => setGiftOpened(true)}
              onContinue={() => setCurrentPage('multiple-choice')}
            />
          )}
          {currentPage === 'multiple-choice' && (
            <MultipleChoiceQuizPage
              question={mcqQuestions[mcqIndex]}
              questionNumber={mcqIndex + 1}
              totalQuestions={mcqQuestions.length}
              feedback={mcqFeedback}
              onSelect={handleMcqAnswer}
            />
          )}
          {currentPage === 'slot' && (
            <SlotMachinePage
              initialResult={slotResult}
              rerollUsed={rerollUsed}
              onSpinComplete={handleSpinComplete}
              onContinue={() => setCurrentPage('subjective')}
            />
          )}
          {currentPage === 'subjective' && (
            <SubjectiveQuestionPage
              question={subjectiveQuestion.prompt}
              feedback={subjectiveFeedback}
              isSolved={subjectiveSolved}
              onSubmit={handleSubjectiveSubmit}
            />
          )}
          {currentPage === 'final' && <FinalBirthdayPage message={FINAL_MESSAGE} />}
        </section>
      </div>
    </main>
  )
}

export default App
