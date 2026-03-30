import { MusicToggle } from '../components/MusicToggle'

type FinalBirthdayPageProps = {
  message: string
}

export function FinalBirthdayPage({ message }: FinalBirthdayPageProps) {
  return (
    <div className="page-shell min-h-[74vh] overflow-hidden">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[40px] border border-white/70 bg-[linear-gradient(180deg,_rgba(255,255,255,0.97),_rgba(255,228,235,0.95))] p-6 shadow-[0_25px_90px_rgba(157,23,77,0.22)] sm:p-8">
        <div className="pointer-events-none absolute inset-0">
          {Array.from({ length: 24 }).map((_, index) => (
            <span
              key={index}
              className="absolute text-rose-300"
              style={{
                left: `${(index * 9) % 100}%`,
                top: `${(index * 17) % 100}%`,
                fontSize: `${12 + (index % 4) * 8}px`,
                animation: `drift ${5 + (index % 5)}s ease-in-out infinite`,
              }}
            >
              ♥
            </span>
          ))}
        </div>

        <div className="relative grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="glass-card p-6 text-left">
            <p className="font-body text-sm uppercase tracking-[0.32em] text-rose-400">Birthday card</p>
            <h2 className="mt-3 font-display text-5xl leading-tight text-slate-900">
              The final reward
              <br />
              is all the love.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              You made it all the way through the little birthday route, which means this card officially belongs to
              you now.
            </p>
            <div className="mt-6">
              <MusicToggle />
            </div>
          </div>

          <div className="rounded-[34px] border border-rose-100 bg-white/90 p-6 shadow-[0_18px_50px_rgba(225,29,72,0.12)]">
            <div className="rounded-[28px] bg-[linear-gradient(180deg,_#fff1f2,_#ffffff)] p-6 shadow-inner">
              <p className="font-display text-3xl text-rose-600">Happy Birthday</p>
              <div className="mt-4 whitespace-pre-line text-lg leading-8 text-slate-700">{message}</div>
              <div className="mt-8 rounded-[24px] bg-rose-50 px-5 py-4 text-base font-semibold text-rose-600">
                P.S. You are very, very loved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
