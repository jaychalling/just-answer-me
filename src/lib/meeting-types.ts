export interface Speaker {
  emoji: string
  name: string
  color: string
}

export interface Message {
  speaker: Speaker
  content: string
}

export interface Round {
  number: number
  stage: string
  title: string
  messages: Message[]
}

export interface MeetingMeta {
  title: string
  date: string
  participants: string
  rounds: string
  idea: string
}

export const SPEAKERS: Record<string, Speaker> = {
  '사회자': { emoji: '🎙️', name: '사회자', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
  '리스크매니저': { emoji: '⚠️', name: '리스크매니저', color: 'bg-amber-500/20 text-amber-400 border-amber-500/30' },
  '비즈니스모델러': { emoji: '💰', name: '비즈니스모델러', color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
  '수학자': { emoji: '🔢', name: '수학자', color: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30' },
  '경쟁분석가': { emoji: '🔍', name: '경쟁분석가', color: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30' },
  '기발한놈': { emoji: '💡', name: '기발한놈', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' },
  '브랜딩마스터': { emoji: '🎨', name: '브랜딩마스터', color: 'bg-pink-500/20 text-pink-400 border-pink-500/30' },
  '빌더': { emoji: '🛠️', name: '빌더', color: 'bg-orange-500/20 text-orange-400 border-orange-500/30' },
  '채찍맨': { emoji: '🔨', name: '채찍맨', color: 'bg-red-500/20 text-red-400 border-red-500/30' },
  '사용자대변인': { emoji: '👤', name: '사용자대변인', color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
  '비관론자': { emoji: '😈', name: '비관론자', color: 'bg-rose-500/20 text-rose-400 border-rose-500/30' },
  '마케팅전략가': { emoji: '📈', name: '마케팅전략가', color: 'bg-green-500/20 text-green-400 border-green-500/30' },
}
