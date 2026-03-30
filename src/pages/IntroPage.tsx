type IntroPageProps = {
  onContinue: () => void
}

export function IntroPage({ onContinue }: IntroPageProps) {
  return (
    <div className="page-shell grid min-h-[70vh] items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-6 text-left">
        <p className="font-body text-sm uppercase tracking-[0.35em] text-rose-500">A birthday surprise just for you</p>
        <div className="space-y-4">
          <h2 className="font-display text-5xl leading-tight text-slate-900 sm:text-6xl">
            Happy Birthday,
            <br />
            cutie.
          </h2>
          <p className="max-w-xl text-lg leading-8 text-slate-700 sm:text-xl">
            This is not just a page. It is a tiny handmade birthday journey filled with soft hearts, playful teasing,
            little rewards, and one very sincere ending waiting for you.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button type="button" className="primary-button" onClick={onContinue}>
            Continue
          </button>
          <div className="rounded-full bg-white/80 px-5 py-3 text-sm font-semibold text-rose-500 shadow-sm">
            Warning: extreme birthday affection ahead
          </div>
        </div>
      </div>

      <div className="glass-card relative overflow-hidden p-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.95),_transparent_58%)]" />
        <div className="relative mx-auto aspect-square max-w-md rounded-[32px] bg-[linear-gradient(160deg,_rgba(255,255,255,0.9),_rgba(251,113,133,0.28))] p-6 shadow-inner">
          <div className="absolute left-5 top-5 rounded-full bg-rose-100 px-4 py-2 text-sm font-bold text-rose-600">
            Birthday Delivery
          </div>
          <div className="mt-16 grid gap-4">
            {['Cute questions', 'Present reveal', 'Lucky reward', 'Heartfelt ending'].map((item, index) => (
              <div
                key={item}
                className="animate-[fadeUp_0.7s_ease-out] rounded-[24px] border border-white/70 bg-white/80 px-5 py-4 text-left shadow-[0_10px_24px_rgba(244,63,94,0.14)]"
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                <p className="font-display text-2xl text-rose-600">{`0${index + 1}`}</p>
                <p className="font-semibold text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
