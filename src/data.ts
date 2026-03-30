export type YesNoQuestion = {
  prompt: string
  correctAnswer: boolean
  retryMessage: string
  successMessage: string
}

export type MultipleChoiceQuestion = {
  prompt: string
  options: string[]
  correctAnswerIndex: number
  retryMessage: string
  successMessage: string
}

export const visualNovelQuestions: YesNoQuestion[] = [
  {
    prompt: 'Is today officially your day to be spoiled extra, smiled at extra, and adored extra?',
    correctAnswer: true,
    retryMessage: 'Hmm... suspicious answer. Birthday royalty should probably pick the sweeter option.',
    successMessage: 'Correct. The birthday cutie remembers the rules of the universe.',
  },
  {
    prompt: 'Would I ever build a whole tiny birthday world without packing it with teasing and affection?',
    correctAnswer: false,
    retryMessage: 'Hehe, nice try. This surprise was always going to be overflowing with both.',
    successMessage: 'Exactly. Maximum affection. Zero restraint.',
  },
  {
    prompt: 'Should the birthday star continue and claim their very deserved present?',
    correctAnswer: true,
    retryMessage: 'That sounded adorably shy. Let’s try the confident birthday answer.',
    successMessage: 'Yay. March onward, birthday star. Your present is waiting.',
  },
]

export const mcqQuestions: MultipleChoiceQuestion[] = [
  {
    prompt: 'Which energy fits this birthday journey best?',
    options: [
      'Soft hearts, sparkles, and sweet chaos',
      'Strict serious exam room',
      'Mysterious villain training arc',
      'Monday morning spreadsheet mood',
    ],
    correctAnswerIndex: 0,
    retryMessage: 'That answer is far too serious for a page this covered in pink.',
    successMessage: 'Exactly. The official vibe is sweet chaos with perfect birthday sparkle.',
  },
  {
    prompt: 'What should happen when the birthday person smiles?',
    options: [
      'Nothing at all',
      'At least three invisible hearts should appear',
      'The website should file taxes',
      'A dramatic thunderstorm should begin',
    ],
    correctAnswerIndex: 1,
    retryMessage: 'Cute, but no. This birthday universe runs on smiles and suspiciously many hearts.',
    successMessage: 'Correct. Invisible hearts are now legally required.',
  },
  {
    prompt: 'Which reward does the birthday hero deserve most?',
    options: [
      'A boring pat on the back',
      'One tiny crumb of joy',
      'A whole bundle of love, treats, and happy memories',
      'Homework with extra steps',
    ],
    correctAnswerIndex: 2,
    retryMessage: 'Nope. We are not doing low-effort rewards on this special day.',
    successMessage: 'Perfect answer. Bundle of joy unlocked with zero hesitation.',
  },
]

export const slotRewards = [
  'A dessert date chosen by you',
  'A cuddle coupon with no expiration',
  'A victory selfie session together',
  'One playlist made just for your mood',
  'A surprise snack delivery mission',
  'A golden pass to pick our next little adventure',
]

export const subjectiveQuestion = {
  prompt: 'Final checkpoint: what are the two most important words this birthday site wants to tell you?',
  answer: 'happy birthday',
  acceptedKeywords: ['happy', 'birthday'],
  retryMessage:
    'So close, birthday bean. It is the classic phrase this whole little world has been wrapping up for you.',
  successMessage: 'Yes. The password of the day has been spoken perfectly.',
}

export const FINAL_MESSAGE = `Happy Birthday, my favorite person.

I made this tiny little world so you could click through a trail of smiles, teasing, prizes, and soft feelings and end up exactly where you belong: surrounded by love.

I hope this year brings you warm mornings, proud little victories, sweet surprises, and so many reasons to laugh until your cheeks hurt.

Thank you for being wonderful in all the ways that are loud, quiet, brave, silly, and beautifully you.

Today is yours, and I hope it feels full of comfort, celebration, and the kind of happiness that stays glowing long after the candles are gone.`
