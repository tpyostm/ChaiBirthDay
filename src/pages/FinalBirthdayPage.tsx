import { useState } from 'react'
import finalNoteImage from '../assets/final-note.jpg'

export function FinalBirthdayPage() {
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false)

  return (
    <>
      <div className="page-shell min-h-[74vh]">
        <div className="mx-auto flex max-w-5xl flex-col gap-5">
          <p className="text-center font-body text-sm text-[#8d7252]">
            อาจจะอ่านยากนิดนึงนะ555 แต่กดขยายได้ยุนะช่วยนิงนุงๆ
          </p>

          <button
            type="button"
            onClick={() => setIsFullscreenOpen(true)}
            className="overflow-hidden rounded-[32px] border-[3px] border-[#8d7252] bg-white p-3 shadow-[0_18px_50px_rgba(141,114,82,0.14)] transition hover:scale-[1.01]"
            aria-label="ขยายภาพอวยพร"
          >
            <img src={finalNoteImage} alt="ภาพอวยพรวันเกิด" className="w-full rounded-[24px] object-contain" />
          </button>
        </div>
      </div>

      {isFullscreenOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#2f2418]/70 px-4 py-8 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="ภาพอวยพรวันเกิดขนาดเต็ม"
          onClick={() => setIsFullscreenOpen(false)}
        >
          <div
            className="relative w-full max-w-6xl rounded-[32px] border-[3px] border-[#8d7252] bg-[#fffaf4] p-4 shadow-[0_24px_70px_rgba(15,23,42,0.28)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsFullscreenOpen(false)}
              className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border-[2px] border-[#8d7252] bg-white text-2xl text-[#5f4a37] shadow-[0_6px_14px_rgba(95,74,55,0.12)]"
              aria-label="ปิดภาพ"
            >
              ×
            </button>
            <div className="flex max-h-[84vh] items-center justify-center overflow-hidden rounded-[24px] bg-white p-2">
              <img src={finalNoteImage} alt="ภาพอวยพรวันเกิดแบบเต็มจอ" className="max-h-[80vh] w-full object-contain" />
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
