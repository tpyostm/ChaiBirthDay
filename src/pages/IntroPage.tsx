import introPhoto from '../assets/intro-photo.jpg'
import { siteProfile } from '../data'

type IntroPageProps = {
  onContinue: () => void
}

export function IntroPage({ onContinue }: IntroPageProps) {
  return (
    <div className="page-shell grid min-h-[70vh] items-center gap-6 lg:grid-cols-[1fr_0.92fr] lg:gap-8">
      <div className="space-y-6 text-left">
        <span className="sticker sticker-yellow">{siteProfile.coverSticker}</span>
        <div className="space-y-4">
          <h2 className="scribble-title text-5xl leading-tight text-[#473625] sm:text-6xl">
            ภารกิจของคุณในวันนี้นะครับ
            <br />
            (CHAI APPROVES)
          </h2>
          <p className="max-w-xl handwritten text-2xl leading-8 text-[#5f4a37] sm:text-[1.7rem]">
            จงเผชิญหน้ากับภารกิจที่กำลังจะเจอข้างหน้าเพื่อรับของขวัญสุด Exclusive ที่จัดเตรียมมาเพื่อคุณโดยเฉพาะ หากคุณพร้อมแล้ว
            กดปุ่มข้างล่างเพื่อลุยต่อได้เลย!!
          </p>
        </div>
        <div className="doodle-divider max-w-lg" />
        <div className="flex flex-wrap gap-3">
          <button type="button" className="primary-button" onClick={onContinue}>
            เริ่มภารกิจ
          </button>
          <div className="sticker sticker-sky">{siteProfile.warningSticker}</div>
        </div>
      </div>

      <div className="glass-card overflow-hidden p-3 sm:p-4">
        <div className="overflow-hidden rounded-[24px] border-[3px] border-[#8d7252] bg-white shadow-[0_14px_32px_rgba(15,23,42,0.08)]">
          <img
            src={introPhoto}
            alt="ภาพประกอบเปิดภารกิจวันเกิด"
            className="aspect-square w-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  )
}
