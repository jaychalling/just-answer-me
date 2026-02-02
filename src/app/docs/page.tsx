'use client';

import { AlertTriangle, BookOpen, Brain, CheckCircle, ClipboardList, Code, Database, FileText, Globe, Layout, MessageSquare, Rocket, Server, Shield, Zap } from 'lucide-react';
import { PageShell } from '@/components/page-shell';

export default function DocsPage() {
  return (
    <PageShell
      projectId="just-answer-me"
      projectTitle="JustAnswerMe"
      subtitle="깊이 생각하고, 짧게 답한다 — AI 결정 도우미"
      activeTab="docs"
      date="2026-02-02"
      badges={[
        { label: 'AI 채팅', className: 'bg-indigo-500/20 text-indigo-600' },
        { label: 'Next.js', className: 'bg-purple-500/20 text-purple-600' },
        { label: 'GPT-4o', className: 'bg-emerald-500/20 text-emerald-600' },
      ]}
      hasReport={false}
    >
      {/* QuickStart Banner */}
      <div className="rounded-lg border-2 border-indigo-500 p-4 mb-8 bg-card">
        <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
          <Rocket size={20} className="text-indigo-600" />Quick Start
        </h3>
        <pre className="bg-secondary border rounded-md p-3 text-sm overflow-x-auto">
          <code>{`npx create-next-app@latest just-answer-me --typescript --tailwind --app
cd just-answer-me
npx shadcn@latest init
npm install ai openai @supabase/supabase-js stripe
npm run dev`}</code>
        </pre>
      </div>

      {/* 시스템 아키텍처 */}
      <h2 className="text-xl font-bold mt-8 mb-3 flex items-center gap-2">
        <Layout size={20} className="text-indigo-600" />시스템 아키텍처
      </h2>
      <pre className="bg-secondary border rounded-md p-3 text-sm overflow-x-auto mb-4">
        <code>{`[사용자] → [Next.js Frontend]
                    ↓
              [API Routes]
              /api/ask    → GPT-4o (단답, 250 토큰)
              /api/reason → GPT-4o (추론, 2500 토큰, 스트리밍)
              /api/share  → Canvas API → 이미지 생성
                    ↓
         [Supabase] Auth + DB + Storage
                    ↓
         [Stripe] 구독 결제 ($4.99/월)`}</code>
      </pre>

      {/* 프로젝트 구조 */}
      <h2 className="text-xl font-bold mt-8 mb-3 flex items-center gap-2">
        <Code size={20} className="text-indigo-600" />프로젝트 구조
      </h2>
      <pre className="bg-secondary border rounded-md p-3 text-sm overflow-x-auto mb-4">
        <code>{`src/
├── app/
│   ├── page.tsx              # 랜딩 + 채팅 UI
│   ├── api/
│   │   ├── ask/route.ts      # 단답 생성 API
│   │   ├── reason/route.ts   # 추론 생성 API (스트리밍)
│   │   ├── share/route.ts    # 공유 카드 생성 API
│   │   └── webhook/route.ts  # Stripe 웹훅
│   ├── pricing/page.tsx      # 가격 페이지
│   └── login/page.tsx        # 로그인
├── components/
│   ├── chat-input.tsx        # 질문 입력
│   ├── answer-card.tsx       # 단답 카드 (애니메이션)
│   ├── reasoning-panel.tsx   # 추론 펼치기 (스트리밍)
│   ├── share-card.tsx        # 공유 카드 생성
│   └── example-questions.tsx # FTUE 예시 질문
├── lib/
│   ├── prompts.ts            # 시스템 프롬프트
│   ├── supabase.ts           # Supabase 클라이언트
│   └── stripe.ts             # Stripe 유틸리티
└── types/
    └── index.ts              # 타입 정의`}</code>
      </pre>

      {/* 핵심 프롬프트 */}
      <h2 className="text-xl font-bold mt-8 mb-3 flex items-center gap-2">
        <Brain size={20} className="text-indigo-600" />핵심 프롬프트 설계
      </h2>
      <h3 className="text-lg font-semibold mt-4 mb-2">단답 프롬프트</h3>
      <pre className="bg-secondary border rounded-md p-3 text-sm overflow-x-auto mb-4">
        <code>{`const ANSWER_SYSTEM_PROMPT = \`
너는 JustAnswerMe의 AI 결정 도우미야.
유저의 고민에 대해:
1. 반드시 한 쪽을 선택해서 단답으로 답해
2. "양쪽 다 장단점이..." 같은 양시론 절대 금지
3. 친한 형/누나 톤으로 (반말)
4. 답변은 10자 이내
5. 이모지 1개 포함
6. 자연스러운 한국어 (번역체 금지)

예시:
Q: "얘랑 사귈까?" → "사귀어 💛"
Q: "이직할까?" → "당장 이직해 🚀"
Q: "돈 빌려줄까?" → "빌려주지 마 🙅"
\``}</code>
      </pre>
      <h3 className="text-lg font-semibold mt-4 mb-2">추론 프롬프트</h3>
      <pre className="bg-secondary border rounded-md p-3 text-sm overflow-x-auto mb-4">
        <code>{`const REASON_SYSTEM_PROMPT = \`
위 질문에 대해 깊이 분석해줘:
1. 핵심 고려사항 3~5개
2. 왜 이 결정을 추천하는지
3. 반대 의견도 인정하되, 추천 이유가 더 강한 이유
4. 300~500자
5. 친근한 톤 유지
\``}</code>
      </pre>

      {/* DB 스키마 */}
      <h2 className="text-xl font-bold mt-8 mb-3 flex items-center gap-2">
        <Database size={20} className="text-indigo-600" />데이터베이스 스키마
      </h2>
      <pre className="bg-secondary border rounded-md p-3 text-sm overflow-x-auto mb-4">
        <code>{`-- conversations
CREATE TABLE conversations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  reasoning TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- subscriptions
CREATE TABLE subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users UNIQUE,
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT,
  status TEXT DEFAULT 'free', -- free | pro | cancelled
  current_period_end TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- daily_usage (무료 유저 제한용)
CREATE TABLE daily_usage (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users,
  date DATE DEFAULT CURRENT_DATE,
  count INT DEFAULT 0,
  UNIQUE(user_id, date)
);`}</code>
      </pre>

      {/* API 구현 예시 */}
      <h2 className="text-xl font-bold mt-8 mb-3 flex items-center gap-2">
        <Server size={20} className="text-indigo-600" />API 구현 예시
      </h2>
      <h3 className="text-lg font-semibold mt-4 mb-2">/api/ask/route.ts</h3>
      <pre className="bg-secondary border rounded-md p-3 text-sm overflow-x-auto mb-4">
        <code>{`import { openai } from '@ai-sdk/openai'
import { generateText } from 'ai'
import { ANSWER_SYSTEM_PROMPT } from '@/lib/prompts'

export async function POST(req: Request) {
  const { question } = await req.json()

  const { text } = await generateText({
    model: openai('gpt-4o'),
    system: ANSWER_SYSTEM_PROMPT,
    prompt: question,
    maxTokens: 50,
  })

  // DB에 저장
  const id = await saveConversation(question, text)

  return Response.json({ id, answer: text })
}`}</code>
      </pre>
      <h3 className="text-lg font-semibold mt-4 mb-2">/api/reason/route.ts</h3>
      <pre className="bg-secondary border rounded-md p-3 text-sm overflow-x-auto mb-4">
        <code>{`import { openai } from '@ai-sdk/openai'
import { streamText } from 'ai'
import { REASON_SYSTEM_PROMPT } from '@/lib/prompts'

export async function POST(req: Request) {
  const { questionId } = await req.json()
  const conversation = await getConversation(questionId)

  const result = streamText({
    model: openai('gpt-4o'),
    system: REASON_SYSTEM_PROMPT,
    prompt: \`질문: \${conversation.question}\\n내 답변: \${conversation.answer}\\n\\n위 답변에 대한 상세 분석:\`,
    maxTokens: 800,
  })

  return result.toDataStreamResponse()
}`}</code>
      </pre>

      {/* 안전 가이드라인 */}
      <h2 className="text-xl font-bold mt-8 mb-3 flex items-center gap-2">
        <Shield size={20} className="text-indigo-600" />안전 가이드라인
      </h2>
      <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
        <li><strong>면책조항:</strong> 모든 답변 하단에 &quot;AI의 분석이며, 최종 결정은 본인의 몫입니다&quot; 표시</li>
        <li><strong>민감 키워드:</strong> 자해/자살 → 전문 상담 연결 (정신건강위기상담 1577-0199)</li>
        <li><strong>의료/법률/투자:</strong> 감지 시 &quot;전문가 상담을 권장합니다&quot; 추가 안내</li>
        <li><strong>미성년자:</strong> 성인 주제 필터링</li>
        <li><strong>개인정보:</strong> 대화 내용은 서버에 최소 저장, 삭제 기능 제공</li>
      </ul>

      {/* 비용 최적화 */}
      <h2 className="text-xl font-bold mt-8 mb-3 flex items-center gap-2">
        <Zap size={20} className="text-indigo-600" />비용 최적화 전략
      </h2>
      <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
        <li><strong>프롬프트 캐싱:</strong> OpenAI Prompt Caching → 시스템 프롬프트 50% 할인, 10~15% 비용 절감</li>
        <li><strong>on-demand 추론:</strong> 추론은 &quot;왜?&quot; 클릭 시에만 생성 → 전체의 30%만 발생</li>
        <li><strong>maxTokens 제한:</strong> 단답 50 토큰, 추론 800 토큰으로 제한</li>
        <li><strong>장기:</strong> 자체 fine-tuned 모델로 비용 90% 절감 (v2.0)</li>
      </ul>

      {/* 프롬프트 테스트 전략 */}
      <h2 className="text-xl font-bold mt-8 mb-3 flex items-center gap-2">
        <CheckCircle size={20} className="text-indigo-600" />프롬프트 테스트 전략
      </h2>
      <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
        <li>같은 질문 10회 → 7회 이상 동일 결론이면 PASS</li>
        <li>프롬프트 변형 3개 A/B 테스트 → 재방문율 기준 선정</li>
        <li>테스트 질문 세트: 연애 10개, 진로 10개, 돈 10개, 인간관계 10개</li>
        <li>정량 목표: 단답 평균 5~15 토큰, 양시론 발생률 10% 미만</li>
      </ul>
    </PageShell>
  );
}
