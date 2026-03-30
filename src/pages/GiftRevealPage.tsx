import { GiftPhoto } from '../components/Illustrations'

type GiftRevealPageProps = {
  isOpened: boolean
  onOpen: () => void
  onContinue: () => void
}

export function GiftRevealPage({ isOpened, onOpen, onContinue }: GiftRevealPageProps) {
  return (
    <div className="page-shell grid min-h-[70vh] gap-6 lg:grid-cols-[0.85fr_1.15fr]">
      <div className="glass-card flex flex-col items-center justify-center p-6 text-center">
        <div
          className={`relative mx-auto flex h-72 w-72 items-center justify-center transition duration-700 ${
            isOpened ? 'scale-95 opacity-85' : 'animate-[giftBounce_2.8s_ease-in-out_infinite]'
          }`}
        >
          {!isOpened ? (
            <button
              type="button"
              onClick={onOpen}
              className="relative h-60 w-60 rounded-[32px] bg-[linear-gradient(145deg,_#fb7185,_#be123c)] shadow-[0_26px_60px_rgba(190,24,93,0.35)] transition hover:scale-[1.02]"
            >
              <span className="absolute inset-x-[42%] top-0 h-full rounded-full bg-rose-50/90" />
              <span className="absolute inset-y-[42%] left-0 w-full rounded-full bg-rose-50/90" />
              <span className="absolute left-1/2 top-3 h-16 w-16 -translate-x-1/2 rounded-full border-[10px] border-rose-50" />
              <span className="absolute left-[36%] top-5 h-12 w-12 rounded-full border-[10px] border-rose-50" />
              <span className="absolute right-[36%] top-5 h-12 w-12 rounded-full border-[10px] border-rose-50" />
              <span className="absolute inset-x-0 bottom-6 text-center font-display text-3xl text-white">Tap to open</span>
            </button>
          ) : (
            <div className="relative h-64 w-64">
              <div className="absolute inset-x-4 top-10 h-24 rounded-[28px] bg-rose-200/70 blur-xl" />
              <div className="absolute inset-x-0 bottom-0 h-28 rounded-[28px] bg-[linear-gradient(180deg,_#fb7185,_#be123c)] shadow-[0_24px_60px_rgba(190,24,93,0.25)]" />
              <div className="absolute left-0 right-0 top-0 h-24 -rotate-6 rounded-[28px] bg-[linear-gradient(145deg,_#fecdd3,_#fb7185)] shadow-[0_18px_40px_rgba(244,63,94,0.18)]" />
              {Array.from({ length: 8 }).map((_, index) => (
                <span
                  key={index}
                  className="absolute rounded-full bg-white"
                  style={{
                    width: `${8 + (index % 3) * 6}px`,
                    height: `${8 + (index % 3) * 6}px`,
                    left: `${20 + index * 10}%`,
                    top: `${6 + (index % 4) * 12}%`,
                    animation: `sparkle ${1.3 + index * 0.12}s ease-in-out infinite`,
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="glass-card p-6">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-rose-400">Gift reveal</p>
          <h2 className="mt-3 font-display text-4xl text-slate-900">A special little surprise for you</h2>
          <p className="mt-3 text-lg leading-8 text-slate-700">
            First comes the cute dramatic box moment. Then comes the reward: your real gift reveal in a sweet little
            card.
          </p>
        </div>

        <div className="glass-card overflow-hidden p-4">
          {isOpened ? (
            <div className="animate-[fadeUp_0.7s_ease-out] space-y-4">
              <div className="overflow-hidden rounded-[28px] border border-white bg-white shadow-[0_18px_45px_rgba(15,23,42,0.1)]">
                <GiftPhoto />
              </div>
              <div className="rounded-[24px] bg-rose-50 px-5 py-4 text-slate-700">
                Replace this illustration later with your actual gift photo, ticket, or surprise image if you want it
                to feel even more personal.
              </div>
              <button type="button" className="primary-button" onClick={onContinue}>
                Continue
              </button>
            </div>
          ) : (
            <div className="rounded-[28px] border border-dashed border-rose-200 bg-white/80 px-5 py-8 text-center text-lg font-semibold text-rose-500">
              Open the gift box to reveal the surprise.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
