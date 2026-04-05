import { useState } from 'react'
import giftBoxImage from '../assets/gifts/gift-box.png'
import giftRevealImage from '../assets/gifts/gift-reveal.jpg'

type GiftRevealPageProps = {
  isOpened: boolean
  onOpen: () => void
  onContinue: () => void
}

export function GiftRevealPage({ isOpened, onOpen, onContinue }: GiftRevealPageProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)

  return (
    <>
      <div className="page-shell grid min-h-[70vh] gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="glass-card flex flex-col items-center justify-center p-6 text-center">
        <div
          className={`relative mx-auto flex h-72 w-72 items-center justify-center transition duration-700 ${
            isOpened ? 'scale-95 opacity-85' : 'animate-[giftFloat_3.4s_ease-in-out_infinite]'
          }`}
        >
          {!isOpened ? (
            <button
              type="button"
              onClick={onOpen}
              className="group relative flex h-60 w-60 items-center justify-center rounded-[32px] border-[3px] border-[#7a6144] bg-[linear-gradient(180deg,_#fffaf4,_#ffe9ef)] p-5 shadow-[0_16px_0_#7a6144,0_26px_60px_rgba(190,24,93,0.16)] transition hover:scale-[1.02]"
              aria-label="เปิดของขวัญ"
            >
              <span className="absolute inset-6 rounded-[26px] border border-dashed border-[#d8b5be]" />
              <img
                src={giftBoxImage}
                alt="กล่องของขวัญ"
                className="relative z-10 h-full w-full object-contain drop-shadow-[0_14px_18px_rgba(190,24,93,0.18)] transition duration-300 group-hover:-translate-y-1"
              />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setIsPreviewOpen(true)}
              className="relative flex h-[18rem] w-full max-w-[26rem] items-center justify-center overflow-hidden rounded-[30px] border-[3px] border-[#8d7252] bg-[#fffaf4] p-3 shadow-[0_20px_50px_rgba(141,114,82,0.18)] transition hover:scale-[1.01]"
              aria-label="เปิดดูของขวัญขนาดเต็ม"
            >
              <img src={giftRevealImage} alt="ของขวัญวันเกิด" className="h-full w-full object-contain" />
            </button>
          )}
        </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="glass-card p-6">
            {isOpened ? (
              <>
                <p className="font-body text-sm tracking-[0.2em] text-[#c56a52]">รางวัลแด่คนช่างกิน</p>
                <h2 className="mt-3 scribble-title text-4xl text-[#473625]">บัตรกินข้าวฟรี 1 ครั้งงง</h2>
                <p className="mt-3 handwritten text-2xl leading-8 text-[#5f4a37]">
                  เห็นว่าคุนเป็นคนชอบกิน(?)ก็เลยให้สิ่งนี้เอาไว้เพื่อให้คุนได้อิ่มหน่ำสำราญ ผมหน่ะสนับสนุนที่จะทำให้เพื่อนของผมได้โตเต็มวัยอยู่แล้ว 😎 วันไหนคุนอยากกินข้าวฟรีบอกผมได้เลยเด่วผมเลี้ยงมื้อนึงง
                </p>
              </>
            ) : (
              <>
                <p className="font-body text-sm tracking-[0.2em] text-[#c56a52]">รางวัลกำลังรออยู่</p>
                <p className="mt-3 handwritten text-2xl leading-8 text-[#5f4a37]">รอคุนมาเปิดอยู่น้า</p>
              </>
            )}
          </div>

          <div className="glass-card overflow-hidden p-4">
            {isOpened ? (
              <div className="animate-[fadeUp_0.7s_ease-out] space-y-4">
                <div className="rounded-[24px] border-[2px] border-[#8a6b1d] bg-[#fff0a8] px-5 py-4 handwritten text-2xl text-[#6a5311]">
                  ปล.เดียวเพื่อนๆเขาจะนัดกันเที่ยวแถวเดอะมอลอยากให้คุนมาร่วมนะเอามาใช้วันนั้นได้นะเราจะได้มาฉลองวันเกิดร่วมกันนน55555
                </div>
              </div>
            ) : (
              <div className="rounded-[28px] border-[2px] border-dashed border-[#8d7252] bg-white/80 px-5 py-8 text-center handwritten text-3xl text-[#cb5a5e]">
                เปิดของขวัญเลยยๆๆๆ
              </div>
            )}
          </div>

          {isOpened ? (
            <div className="flex justify-center pt-1">
              <button type="button" className="secondary-button min-w-44" onClick={onContinue}>
                Continue
              </button>
            </div>
          ) : null}
        </div>
      </div>
      {isOpened && isPreviewOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#2f2418]/65 px-4 py-8 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="ดูของขวัญขนาดเต็ม"
          onClick={() => setIsPreviewOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl rounded-[32px] border-[3px] border-[#8d7252] bg-[#fffaf4] p-4 shadow-[0_24px_70px_rgba(15,23,42,0.28)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsPreviewOpen(false)}
              className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border-[2px] border-[#8d7252] bg-white text-2xl text-[#5f4a37] shadow-[0_6px_14px_rgba(95,74,55,0.12)]"
              aria-label="ปิดภาพ"
            >
              ×
            </button>
            <div className="flex max-h-[80vh] items-center justify-center overflow-hidden rounded-[24px] bg-white p-4">
              <img src={giftRevealImage} alt="ของขวัญที่เตรียมไว้ให้ช่าย" className="max-h-[72vh] w-full object-contain" />
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
