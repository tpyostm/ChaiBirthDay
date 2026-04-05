export type VisualQuizQuestion = {
  prompt: string
  options: string[]
  correctAnswerIndex: number
  retryMessage: string
  successMessage: string
}

export type MultipleChoiceQuestion = {
  prompt: string
  options: string[]
  correctAnswerIndex: number
  retryMessage: string
  successMessage: string
  acceptAnyAnswer?: boolean
  imageLabel: string
}

export const siteProfile = {
  recipientName: 'ไอเบียวช่าย',
  nickname: 'คุน',
  signature: 'เพือนที่ยอมฟังมุก Vergil, HIGGS, Joel และเพลย์ลิสต์ Nirvana ของคุนเสมอ',
  coverSticker: 'สำหรับช่ายโดยเฉพาะ',
  warningSticker: 'ใช้เวลาไม่นาน เล่นแปปเดียวว',
  finalTagline: 'from your anime-and-gacha enabler',
  collectorNote:
    'collector note: หน้านี้มีกลิ่นคล้ายสีเทียน ปลา ของสีแดง กาชาเกลือ และความเอ็นดูคุนแบบปิดไม่มิด',
}

export const visualNovelQuestions: VisualQuizQuestion[] = [
  {
    prompt: '',
    options: ['Chester grill', 'Sizzler'],
    correctAnswerIndex: 0,
    retryMessage: 'ไม่ใช่เฟร้ย',
    successMessage: 'เก่งมากๆๆทำได้ดีหนิ',
  },
  {
    prompt: '',
    options: ['ร้านเขียว', 'ร้านข้างๆร้านเขียว'],
    correctAnswerIndex: 0,
    retryMessage: 'ไม่ใช่เฟร้ย',
    successMessage: 'จริงๆชั้นก็ไม่แน่ใจเหมือนกัน 55555',
  },
  {
    prompt: '',
    options: ['KFC', 'Macdonald'],
    correctAnswerIndex: 0,
    retryMessage: 'ไม่ใช่เฟร้ย',
    successMessage: 'ประทับใจนะ อย่างน้อยก็ยังจำได้',
  },
]

export const mcqQuestions: MultipleChoiceQuestion[] = [
  {
    prompt: 'ฉากนี้คือวันที่เท่าไหร่ในเกม',
    options: ['June 15', 'July 15', 'June 25', 'July 25'],
    correctAnswerIndex: 0,
    retryMessage: 'เอาดีๆๆๆ',
    successMessage: 'เก่งมากค่อยสมกับรูปโปรเวอจิลหน่อย',
    imageLabel: 'รูปประกอบข้อ 1',
  },
  {
    prompt: 'เชื้อราปรสิตในเกมนี้ใช้ชื่อว่าอะไร',
    options: ['Copilot', 'Cordycept', 'Ringworm', 'Ringjingjing'],
    correctAnswerIndex: 1,
    retryMessage: 'อาจจะยังนะ',
    successMessage: 'เยี่ยยมม เก่งว่า',
    imageLabel: 'รูปประกอบข้อ 2',
  },
  {
    prompt: 'เกมต่อไปที่แกจะต้องเล่นคืออะไร',
    options: ['Resident Evil 3', 'Resident Evil 4', 'Resident Evil 7', 'Resident Evil 8'],
    correctAnswerIndex: 0,
    retryMessage: 'จริงๆข้อนี้คุนจะเล่นไรก็ได้แหละ อิอิ',
    successMessage: 'จริงๆข้อนี้คุนจะเล่นไรก็ได้แหละ อิอิ',
    acceptAnyAnswer: true,
    imageLabel: 'รูปประกอบข้อ 3',
  },
]

export const slotRewards = [
  'Resident Evil 7',
  'Resident Evil 7 + เสื้อ 1 ตัว',
  'Resident Evil 7+8',
  'Resident Evil 7+8+3',
  'Resident Evil 7+8+3 และเสื้อ 1 ตัว',
]

export const subjectiveQuestion = {
  prompt: 'ด่านสุดท้าย : ชื่อนามสกุลตรูภาษาไทยเขียนยังไง (spacebar เว้นให้ด้วยนะ เช่น ณัฐชยา พัวจันทร์)',
  answer: 'ปิยะพล สุนทรารชุน',
  acceptedKeywords: ['ปิยะพล', 'สุนทรารชุน'],
  retryMessage: 'ให้โอกาส 3 ครั้ง',
  successMessage: 'ถูกต้องงง จำได้ด้วย',
}

export const FINAL_MESSAGE = `Happy Birthday, ${siteProfile.recipientName}.

เราทำโลกจิ๋วใบนี้ไว้ให้คุนค่อย ๆ กดผ่านทางเดินของรอยยิ้ม มุกแหย่เล่น รางวัลเล็ก ๆ และความรู้สึกนุ่มฟู จนมาจบตรงที่คุนควรอยู่ที่สุด นั่นคือท่ามกลางความรักเยอะ ๆ

ขอให้ปีนี้ของคุนมีเช้าที่อบอุ่น มีชัยชนะเล็ก ๆ ที่น่าภูมิใจ มีเซอร์ไพรส์ดี ๆ มีกาชา Wuthering Waves ที่ใจดีกับคุนขึ้นอีกนิด และมีหลายวันมากพอให้คุนได้หัวเราะจนแก้มปวด

ขอบคุณที่เป็นคุนในทุกเวอร์ชัน ทั้งตอนเบียว ตอนซน ตอนใจดี ตอนจริงจัง ตอนหวีด Vergil, HIGGS, Joel หรือตอนเปิด Nirvana แล้วทำหน้ามี lore ของตัวเอง และตอนที่เป็นตัวเองอย่างน่ารักที่สุด

วันนี้เป็นวันของคุน และเราอยากให้มันเต็มไปด้วยความสบายใจ การฉลอง ของกินที่มีปลา สีแดงที่คุนชอบ และความสุขแบบที่ยังเรือง ๆ อยู่แม้เค้กจะหมด เทียนจะดับ และอาร์ควันเกิดตอนนี้จะจบไปแล้วก็ตาม`
