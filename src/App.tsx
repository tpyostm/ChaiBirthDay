import { useEffect, useMemo, useRef, useState } from 'react'
import { mcqQuestions, subjectiveQuestion, visualNovelQuestions } from './data'
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

const pageTitles: Record<PageId, string> = {
  intro: 'cover',
  'visual-novel': 'quiz',
  gift: 'gift',
  'multiple-choice': 'choices',
  slot: 'spin',
  subjective: 'note',
  final: 'card',
}

function App() {
  const timeoutsRef = useRef<number[]>([])
  const [currentPage, setCurrentPage] = useState<PageId>('intro')
  const [visualQuestionIndex, setVisualQuestionIndex] = useState(0)
  const [visualFeedback, setVisualFeedback] = useState<string | null>(null)
  const [visualLocked, setVisualLocked] = useState(false)
  const [visualRevealMode, setVisualRevealMode] = useState(false)
  const [giftOpened, setGiftOpened] = useState(false)
  const [mcqIndex, setMcqIndex] = useState(0)
  const [mcqFeedback, setMcqFeedback] = useState<string | null>(null)
  const [mcqLocked, setMcqLocked] = useState(false)
  const [slotResult, setSlotResult] = useState<string | null>(null)
  const [rerollUsed, setRerollUsed] = useState(false)
  const [subjectiveFeedback, setSubjectiveFeedback] = useState<string | null>(null)
  const [subjectiveSolved, setSubjectiveSolved] = useState(false)
  const [subjectiveLocked, setSubjectiveLocked] = useState(false)
  const [subjectiveAttemptsRemaining, setSubjectiveAttemptsRemaining] = useState(3)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentPage])

  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach((timeout) => window.clearTimeout(timeout))
    }
  }, [])

  const queueTimeout = (callback: () => void, delay: number) => {
    const timeout = window.setTimeout(() => {
      timeoutsRef.current = timeoutsRef.current.filter((activeTimeout) => activeTimeout !== timeout)
      callback()
    }, delay)

    timeoutsRef.current.push(timeout)
  }

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

  const handleVisualAnswer = (selectedIndex: number) => {
    if (visualLocked) {
      return
    }

    const currentQuestion = visualNovelQuestions[visualQuestionIndex]
    if (selectedIndex === currentQuestion.correctAnswerIndex) {
      setVisualLocked(true)
      setVisualRevealMode(true)
      const nextIndex = visualQuestionIndex + 1
      setVisualFeedback(currentQuestion.successMessage)
      if (nextIndex >= visualNovelQuestions.length) {
        queueTimeout(() => {
          setCurrentPage('gift')
          setVisualFeedback(null)
          setVisualLocked(false)
          setVisualRevealMode(false)
        }, 4000)
        return
      }

      queueTimeout(() => {
        setVisualQuestionIndex(nextIndex)
        setVisualFeedback(null)
        setVisualLocked(false)
        setVisualRevealMode(false)
      }, 4000)
      return
    }

    setVisualFeedback(currentQuestion.retryMessage)
  }

  const handleMcqAnswer = (selectedIndex: number) => {
    if (mcqLocked) {
      return
    }

    const currentQuestion = mcqQuestions[mcqIndex]
    const isCorrect = currentQuestion.acceptAnyAnswer || selectedIndex === currentQuestion.correctAnswerIndex
    if (isCorrect) {
      setMcqLocked(true)
      const nextIndex = mcqIndex + 1
      setMcqFeedback(currentQuestion.successMessage)
      if (nextIndex >= mcqQuestions.length) {
        queueTimeout(() => {
          setCurrentPage('slot')
          setMcqFeedback(null)
          setMcqLocked(false)
        }, 4000)
        return
      }

      queueTimeout(() => {
        setMcqIndex(nextIndex)
        setMcqFeedback(null)
        setMcqLocked(false)
      }, 4000)
      return
    }

    setMcqFeedback(currentQuestion.retryMessage)
  }

  const handleSpinComplete = (reward: string, usedReroll: boolean) => {
    setSlotResult(reward)
    setRerollUsed(usedReroll)
  }

  const handleSubjectiveSubmit = (value: string) => {
    if (subjectiveLocked) {
      return
    }

    const normalized = value.trim().toLowerCase()
    const matchesExact = normalized === subjectiveQuestion.answer.toLowerCase()
    const matchesKeyword = subjectiveQuestion.acceptedKeywords.every((keyword) =>
      normalized.includes(keyword.toLowerCase()),
    )

    if (matchesExact || matchesKeyword) {
      setSubjectiveLocked(true)
      setSubjectiveFeedback(subjectiveQuestion.successMessage)
      setSubjectiveSolved(true)
      queueTimeout(() => {
        setCurrentPage('final')
        setSubjectiveLocked(false)
      }, 900)
      return
    }

    const nextAttempts = subjectiveAttemptsRemaining - 1
    setSubjectiveAttemptsRemaining(nextAttempts)

    if (nextAttempts <= 0) {
      setSubjectiveLocked(true)
      setSubjectiveFeedback(`เฉลย: ${subjectiveQuestion.answer}`)
      queueTimeout(() => {
        setCurrentPage('final')
        setSubjectiveLocked(false)
      }, 4000)
      return
    }

    setSubjectiveFeedback(`เหลืออีก ${nextAttempts} ครั้ง`)
  }

  const resetExperience = () => {
    timeoutsRef.current.forEach((timeout) => window.clearTimeout(timeout))
    timeoutsRef.current = []
    setCurrentPage('intro')
    setVisualQuestionIndex(0)
    setVisualFeedback(null)
    setVisualLocked(false)
    setGiftOpened(false)
    setMcqIndex(0)
    setMcqFeedback(null)
    setMcqLocked(false)
    setSlotResult(null)
    setRerollUsed(false)
    setSubjectiveFeedback(null)
    setSubjectiveSolved(false)
    setSubjectiveLocked(false)
    setSubjectiveAttemptsRemaining(3)
  }

  return (
    <main className="relative min-h-screen overflow-hidden text-[#3f3425]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 18 }).map((_, index) => (
          <span
            key={index}
            className="heart-float absolute rounded-full bg-white/45 blur-[1px]"
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
        {Array.from({ length: 10 }).map((_, index) => (
          <span
            key={`star-${index}`}
            className="absolute font-display text-3xl text-[#ffb703]/70"
            style={{
              left: `${6 + index * 9}%`,
              top: `${8 + ((index * 17) % 70)}%`,
              transform: `rotate(${index % 2 === 0 ? -12 : 9}deg)`,
            }}
          >
            ★
          </span>
        ))}
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-5 sm:px-6 lg:px-8">
        <header className="mb-6 rounded-[36px] border-[3px] border-[#7a6144] bg-[#fffaf0]/95 px-5 py-4 shadow-[0_12px_0_#d6b07d,0_30px_60px_rgba(122,97,68,0.18)]">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="handwritten text-xl text-[#cb5a5e]">แด่เพื่อนรักของชั้น</p>
              <h1 className="scribble-title text-3xl text-[#473625] sm:text-4xl lg:text-5xl">
                สุขสันต์วันเกิดนะไอช้วย
              </h1>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="sticker sticker-peach">Level {currentStep}</span>
              <span className="sticker sticker-sky">{pageLabel}</span>
              <span className="sticker sticker-yellow">{Math.round(progressPercent)}% sparkle</span>
              {currentPage !== 'intro' && (
                <button type="button" className="secondary-button" onClick={resetExperience}>
                  Restart book
                </button>
              )}
            </div>
          </div>

          <div className="mt-5 doodle-divider" />

          <div className="mt-4 bookmark-tabs">
            {pageOrder.map((page) => {
              const isActive = page === currentPage

              return (
                <div
                  key={page}
                  className={`bookmark-tab ${isActive ? 'bookmark-tab-active' : 'bookmark-tab-idle'}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {pageTitles[page]}
                </div>
              )
            })}
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
            <div>
              <p className="font-body text-sm uppercase tracking-[0.32em] text-[#c56a52]">
                Birthday Surprise Route
              </p>
              <p className="mt-2 max-w-3xl handwritten text-2xl leading-8 text-[#5f4a37]">
                วันเกิดคุณครั้งนี้ผมว่าการอวยพรธรรมดามันอาจจะธรรมดาเกินไปสำหรับพวกเรา ครั้งนี้ผมเลยลองทำเป็นเว็บมาให้เลย
                คอนเท้น ๆ เล่นใหญ่หน่อย วันเกิดไอช่ายทั้งที ฝึกวิชาไปในตัวด้วย หวังว่าจะชอบนะ 55555
              </p>
            </div>
            <div className="paper-note bg-[#fff7e7]">
              <p className="scribble-title text-lg text-[#8a3b2d]">ภารกิจของคุนวันนี้</p>
              <div className="mt-3 grid grid-cols-2 gap-2 text-sm font-bold text-[#5a4632]">
                {pageOrder.map((page, index) => (
                  <div
                    key={page}
                    className={`rounded-full border-[2px] px-3 py-2 ${
                      index < currentStep
                        ? 'border-[#7f4f24] bg-[#ffd9b3]'
                        : 'border-[#bba182] bg-white/80'
                    }`}
                  >
                    {index < currentStep ? '✓' : '○'} {index + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-5 space-y-2">
            <div className="flex items-center justify-between text-sm font-bold text-[#71563d]">
              <span>storybook progress</span>
              <span>page {currentStep} of {pageOrder.length}</span>
            </div>
            <div className="h-4 overflow-hidden rounded-full border-[2px] border-[#8d7252] bg-white/80">
              <div
                className="h-full rounded-full bg-[linear-gradient(90deg,_#ff9f68,_#ff7f50,_#ff8fab,_#8ecae6)] transition-all duration-700 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </header>

        <section className="flex-1">
          {currentPage === 'intro' && <div className="page-shell-enter"><IntroPage onContinue={() => setCurrentPage('visual-novel')} /></div>}
          {currentPage === 'visual-novel' && (
            <div className="page-shell-enter">
              <VisualNovelQuizPage
                question={visualNovelQuestions[visualQuestionIndex]}
              questionNumber={visualQuestionIndex + 1}
              totalQuestions={visualNovelQuestions.length}
              feedback={visualFeedback}
              isLocked={visualLocked}
              isRevealMode={visualRevealMode}
              onAnswer={handleVisualAnswer}
            />
            </div>
          )}
          {currentPage === 'gift' && (
            <div className="page-shell-enter">
              <GiftRevealPage
                isOpened={giftOpened}
                onOpen={() => setGiftOpened(true)}
                onContinue={() => setCurrentPage('multiple-choice')}
              />
            </div>
          )}
          {currentPage === 'multiple-choice' && (
            <div className="page-shell-enter">
              <MultipleChoiceQuizPage
                question={mcqQuestions[mcqIndex]}
                questionNumber={mcqIndex + 1}
                totalQuestions={mcqQuestions.length}
                feedback={mcqFeedback}
                isLocked={mcqLocked}
                onSelect={handleMcqAnswer}
              />
            </div>
          )}
          {currentPage === 'slot' && (
            <div className="page-shell-enter">
              <SlotMachinePage
                initialResult={slotResult}
                rerollUsed={rerollUsed}
                onSpinComplete={handleSpinComplete}
                onContinue={() => setCurrentPage('subjective')}
              />
            </div>
          )}
          {currentPage === 'subjective' && (
            <div className="page-shell-enter">
              <SubjectiveQuestionPage
                question={subjectiveQuestion.prompt}
                feedback={subjectiveFeedback}
                attemptsRemaining={subjectiveAttemptsRemaining}
                isSolved={subjectiveSolved}
                isLocked={subjectiveLocked}
                onSubmit={handleSubjectiveSubmit}
              />
            </div>
          )}
          {currentPage === 'final' && (
            <div className="page-shell-enter">
              <FinalBirthdayPage />
            </div>
          )}
        </section>
      </div>
    </main>
  )
}

export default App
