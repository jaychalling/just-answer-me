'use client';

import { AlertTriangle, ArrowRight, BarChart3, BookOpen, CheckCircle, ClipboardList, Code, DollarSign, FileText, Globe, Layers, LineChart, MessageSquare, Rocket, Scale, Search, Shield, Star, Target, TrendingUp, Users, Wrench, XCircle, Zap, Brain, Share2 } from 'lucide-react';
import { PageShell } from '@/components/page-shell';

export default function JustAnswerMePage() {
  return (
    <PageShell
      projectId="just-answer-me"
      projectTitle="JustAnswerMe"
      subtitle="깊이 생각하고, 짧게 답한다 — AI 결정 도우미"
      activeTab="main"
      date="2026-02-02"
      badges={[
        { label: 'AI 채팅', className: 'bg-indigo-500/20 text-indigo-600' },
        { label: '결정 도우미', className: 'bg-purple-500/20 text-purple-600' },
        { label: '바이럴', className: 'bg-pink-500/20 text-pink-600' },
        { label: 'Go', className: 'bg-emerald-500/20 text-emerald-600' },
      ]}
      hasReport={false}
    >
      {/* 별점 배지 */}
      <div className="flex items-center gap-2 mb-6">
        <span className="inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold bg-yellow-500/20 text-yellow-600 gap-1"><Star size={10} />4/5</span>
        <span className="inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold bg-indigo-500/20 text-indigo-600">조건부 Go</span>
        <span className="inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold bg-purple-500/20 text-purple-600">11인 전문가</span>
        <span className="inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold bg-pink-500/20 text-pink-600">10라운드</span>
      </div>

      {/* ========== Part 1: 서비스 기획서 ========== */}
      <div className="flex items-center gap-2 mt-8 mb-4">
        <FileText size={22} className="text-indigo-600" />
        <h2 className="text-xl font-bold text-indigo-600">Part 1: 서비스 기획서</h2>
      </div>
      <hr className="mb-6" />

      {/* 1. 서비스 개요 */}
      <h2 className="text-xl font-bold mt-8 mb-3 flex items-center gap-2">
        <Target size={20} className="text-indigo-600" />1. 서비스 개요
      </h2>
      <div className="rounded-lg border-2 border-indigo-500 p-4 mb-4 bg-card">
        <p className="font-semibold mb-2">&quot;Think deep. Answer short.&quot; — JustAnswerMe</p>
        <p className="text-muted-foreground text-sm mb-2">AI가 System 2(깊은 추론)로 분석한 뒤, System 1(직관적 단답)으로 결과를 제시하는 결정 도우미 서비스. &quot;얘랑 사귈까?&quot; → AI가 성격, 가치관, 관계 패턴 등을 분석 → &quot;사귀어&quot; 단답 → &quot;왜?&quot; 버튼으로 추론 과정 공개.</p>
        <p className="text-muted-foreground text-sm"><strong>핵심 가치:</strong> ChatGPT의 양시론(&quot;장단점이 있습니다&quot;)을 거부하고, 한 쪽을 콕 집어 결정을 내려주는 AI. 친한 형/누나의 조언처럼.</p>
      </div>

      <h3 className="text-lg font-semibold mt-6 mb-2">왜 지금?</h3>
      <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
        <li><strong>AI 양시론 피로감</strong> — ChatGPT/Claude는 항상 &quot;다양한 관점이 있습니다&quot;로 시작. 사용자는 &quot;그래서 어쩌라고?&quot;가 본심</li>
        <li><strong>타로/사주 시장 대체 기회</strong> — 비과학적 결정 도우미에 이미 돈이 흐르는 시장 ($3~10/월)</li>
        <li><strong>바이럴 내장 UX</strong> — &quot;AI가 이직하래 ㅋㅋ&quot; 캡처 공유가 자연스러움</li>
        <li><strong>GPT-4o 비용 하락</strong> — 단답은 250 토큰으로 비용 거의 0, 추론은 on-demand</li>
      </ul>

      <h3 className="text-lg font-semibold mt-6 mb-2">핵심 차별점</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
        <div className="rounded-lg border p-3 bg-card text-center">
          <MessageSquare size={24} className="mx-auto mb-2 text-indigo-600" />
          <p className="font-semibold text-sm">단답 UX</p>
          <p className="text-xs text-muted-foreground">깊은 추론 → 한 줄 결론</p>
        </div>
        <div className="rounded-lg border p-3 bg-card text-center">
          <Brain size={24} className="mx-auto mb-2 text-purple-600" />
          <p className="font-semibold text-sm">결정 특화</p>
          <p className="text-xs text-muted-foreground">양시론 금지, 콕 집어줌</p>
        </div>
        <div className="rounded-lg border p-3 bg-card text-center">
          <Share2 size={24} className="mx-auto mb-2 text-pink-600" />
          <p className="font-semibold text-sm">바이럴 공유</p>
          <p className="text-xs text-muted-foreground">카드형 캡처 공유</p>
        </div>
      </div>

      {/* 2. 타겟 고객 */}
      <h2 className="text-xl font-bold mt-8 mb-3 flex items-center gap-2">
        <Users size={20} className="text-indigo-600" />2. 타겟 고객
      </h2>
      <div className="table-wrap">
        <table className="w-full text-sm border-collapse">
          <thead><tr className="border-b border-border bg-secondary">
            <th className="text-left px-2 py-2 font-semibold text-muted-foreground">구분</th>
            <th className="text-left px-2 py-2 font-semibold text-muted-foreground">대상</th>
            <th className="text-left px-2 py-2 font-semibold text-muted-foreground">규모</th>
          </tr></thead>
          <tbody>
            <tr className="border-b border-border hover:bg-secondary/30">
              <td className="px-2 py-2 font-semibold text-indigo-600">Primary</td>
              <td className="px-2 py-2 text-muted-foreground">20~35세, 연애/진로/인간관계 고민, 모바일 중심</td>
              <td className="px-2 py-2 text-muted-foreground">285만 (한국)</td>
            </tr>
            <tr className="border-b border-border hover:bg-secondary/30">
              <td className="px-2 py-2 font-semibold text-indigo-600">Secondary</td>
              <td className="px-2 py-2 text-muted-foreground">35~45세, 직장 내 고민(이직, 갈등), 블라인드 유저</td>
              <td className="px-2 py-2 text-muted-foreground">150만</td>
            </tr>
            <tr className="border-b border-border hover:bg-secondary/30">
              <td className="px-2 py-2 font-semibold text-indigo-600">Tertiary</td>
              <td className="px-2 py-2 text-muted-foreground">10대 후반, 진로/학업 고민, 에브리타임 유저</td>
              <td className="px-2 py-2 text-muted-foreground">80만</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 3. 경쟁사 분석 */}
      <h2 className="text-xl font-bold mt-8 mb-3 flex items-center gap-2">
        <Search size={20} className="text-indigo-600" />3. 경쟁사 분석
      </h2>
      <div className="table-wrap">
        <table className="w-full text-sm border-collapse">
          <thead><tr className="border-b border-border bg-secondary">
            <th className="text-left px-2 py-2 font-semibold text-muted-foreground">서비스</th>
            <th className="text-left px-2 py-2 font-semibold text-muted-foreground">가격</th>
            <th className="text-left px-2 py-2 font-semibold text-muted-foreground">약점</th>
          </tr></thead>
          <tbody>
            <tr className="border-b border-border hover:bg-secondary/30">
              <td className="px-2 py-2 text-muted-foreground">ChatGPT</td>
              <td className="px-2 py-2 text-muted-foreground">$20/월</td>
              <td className="px-2 py-2 text-muted-foreground">범용, 양시론, 단답 UX 없음</td>
            </tr>
            <tr className="border-b border-border hover:bg-secondary/30">
              <td className="px-2 py-2 text-muted-foreground">Character.ai</td>
              <td className="px-2 py-2 text-muted-foreground">$9.99/월</td>
              <td className="px-2 py-2 text-muted-foreground">엔터테인먼트 중심, 진지한 조언 약함</td>
            </tr>
            <tr className="border-b border-border hover:bg-secondary/30">
              <td className="px-2 py-2 text-muted-foreground">타로/사주 앱</td>
              <td className="px-2 py-2 text-muted-foreground">$3~10/월</td>
              <td className="px-2 py-2 text-muted-foreground">비과학적, 템플릿 기반, 개인화 약함</td>
            </tr>
            <tr className="border-b border-border hover:bg-secondary/30">
              <td className="px-2 py-2 font-semibold text-indigo-600">JustAnswerMe</td>
              <td className="px-2 py-2 font-semibold text-indigo-600">$4.99/월</td>
              <td className="px-2 py-2 text-indigo-600">단답+추론+공유 = 빈 자리 선점</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-muted-foreground text-sm mt-2 mb-4"><strong>포지셔닝:</strong> Perplexity가 &quot;AI 검색&quot; 카테고리를 만들었듯, JustAnswerMe가 &quot;AI 단답 상담&quot; 카테고리를 만든다.</p>

      {/* 4. 수익 모델 */}
      <h2 className="text-xl font-bold mt-8 mb-3 flex items-center gap-2">
        <DollarSign size={20} className="text-indigo-600" />4. 수익 모델
      </h2>
      <div className="table-wrap">
        <table className="w-full text-sm border-collapse">
          <thead><tr className="border-b border-border bg-secondary">
            <th className="text-left px-2 py-2 font-semibold text-muted-foreground">플랜</th>
            <th className="text-left px-2 py-2 font-semibold text-muted-foreground">가격</th>
            <th className="text-left px-2 py-2 font-semibold text-muted-foreground">포함 기능</th>
          </tr></thead>
          <tbody>
            <tr className="border-b border-border hover:bg-secondary/30">
              <td className="px-2 py-2 font-semibold text-muted-foreground">Free</td>
              <td className="px-2 py-2 text-muted-foreground">$0</td>
              <td className="px-2 py-2 text-muted-foreground">하루 3건 단답 (추론 비공개)</td>
            </tr>
            <tr className="border-b border-border hover:bg-secondary/30">
              <td className="px-2 py-2 font-semibold text-indigo-600">Pro</td>
              <td className="px-2 py-2 font-semibold text-indigo-600">$4.99/월</td>
              <td className="px-2 py-2 text-muted-foreground">무제한 단답 + 추론 공개 + 프리미엄 공유 카드</td>
            </tr>
            <tr className="border-b border-border hover:bg-secondary/30">
              <td className="px-2 py-2 font-semibold text-muted-foreground">Credits (v1.1)</td>
              <td className="px-2 py-2 text-muted-foreground">10개/$1.99</td>
              <td className="px-2 py-2 text-muted-foreground">추론 1건 = 1크레딧 (종량제)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-muted-foreground text-sm mt-2 mb-2"><strong>단위 경제:</strong></p>
      <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
        <li>단답 비용 (GPT-4o, 250 토큰): $0.0008/건</li>
        <li>추론 비용 (GPT-4o, 2,500 토큰): $0.023/건</li>
        <li>유료 유저 월 비용: $2.31 (300건 단답 + 30% 펼치기)</li>
        <li>공헌이익: $2.68/유저/월 (마진 53.7%)</li>
      </ul>

      {/* 5. 시장 규모 */}
      <h2 className="text-xl font-bold mt-8 mb-3 flex items-center gap-2">
        <Globe size={20} className="text-indigo-600" />5. 시장 규모
      </h2>
      <div className="table-wrap">
        <table className="w-full text-sm border-collapse">
          <thead><tr className="border-b border-border bg-secondary">
            <th className="text-left px-2 py-2 font-semibold text-muted-foreground">지표</th>
            <th className="text-left px-2 py-2 font-semibold text-muted-foreground">규모</th>
            <th className="text-left px-2 py-2 font-semibold text-muted-foreground">산출 근거</th>
          </tr></thead>
          <tbody>
            <tr className="border-b border-border hover:bg-secondary/30">
              <td className="px-2 py-2 font-semibold text-muted-foreground">TAM</td>
              <td className="px-2 py-2 text-muted-foreground">$2B</td>
              <td className="px-2 py-2 text-muted-foreground">AI 챗봇 + 셀프헬프 + 온라인 상담 교집합</td>
            </tr>
            <tr className="border-b border-border hover:bg-secondary/30">
              <td className="px-2 py-2 font-semibold text-muted-foreground">SAM</td>
              <td className="px-2 py-2 text-muted-foreground">$200M</td>
              <td className="px-2 py-2 text-muted-foreground">TAM의 10% — 단답 AI 특화 시장</td>
            </tr>
            <tr className="border-b border-border hover:bg-secondary/30">
              <td className="px-2 py-2 font-semibold text-muted-foreground">SOM (Y1)</td>
              <td className="px-2 py-2 text-muted-foreground">$100K</td>
              <td className="px-2 py-2 text-muted-foreground">SAM의 0.05% — 현실적 시작점</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 6. 재무 전망 */}
      <h2 className="text-xl font-bold mt-8 mb-3 flex items-center gap-2">
        <BarChart3 size={20} className="text-indigo-600" />6. 재무 전망
      </h2>
      <h3 className="text-lg font-semibold mt-4 mb-2">비용 구조</h3>
      <div className="table-wrap">
        <table className="w-full text-sm border-collapse">
          <thead><tr className="border-b border-border bg-secondary">
            <th className="text-left px-2 py-2 font-semibold text-muted-foreground">항목</th>
            <th className="text-left px-2 py-2 font-semibold text-muted-foreground">월 비용</th>
          </tr></thead>
          <tbody>
            <tr className="border-b border-border hover:bg-secondary/30">
              <td className="px-2 py-2 text-muted-foreground">Vercel Pro</td>
              <td className="px-2 py-2 text-muted-foreground">$20</td>
            </tr>
            <tr className="border-b border-border hover:bg-secondary/30">
              <td className="px-2 py-2 text-muted-foreground">Supabase Free</td>
              <td className="px-2 py-2 text-muted-foreground">$0</td>
            </tr>
            <tr className="border-b border-border hover:bg-secondary/30">
              <td className="px-2 py-2 text-muted-foreground">도메인</td>
              <td className="px-2 py-2 text-muted-foreground">$1</td>
            </tr>
            <tr className="border-b border-border hover:bg-secondary/30">
              <td className="px-2 py-2 font-semibold text-muted-foreground">고정비 합계</td>
              <td className="px-2 py-2 font-semibold text-muted-foreground">$21/월</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-muted-foreground text-sm mt-2 mb-2"><strong>BEP:</strong> $21 / $2.68 = <strong>8~11명</strong> 유료 유저</p>

      <h3 className="text-lg font-semibold mt-4 mb-2">12개월 시나리오</h3>
      <div className="table-wrap">
        <table className="w-full text-sm border-collapse">
          <thead><tr className="border-b border-border bg-secondary">
            <th className="text-left px-2 py-2 font-semibold text-muted-foreground">시나리오</th>
            <th className="text-left px-2 py-2 font-semibold text-muted-foreground">M12 유료</th>
            <th className="text-left px-2 py-2 font-semibold text-muted-foreground">M12 MRR</th>
          </tr></thead>
          <tbody>
            <tr className="border-b border-border hover:bg-secondary/30">
              <td className="px-2 py-2 text-muted-foreground">비관</td>
              <td className="px-2 py-2 text-muted-foreground">80명</td>
              <td className="px-2 py-2 text-muted-foreground">$399</td>
            </tr>
            <tr className="border-b border-border hover:bg-secondary/30">
              <td className="px-2 py-2 font-semibold text-indigo-600">현실</td>
              <td className="px-2 py-2 font-semibold text-indigo-600">300명</td>
              <td className="px-2 py-2 font-semibold text-indigo-600">$1,497</td>
            </tr>
            <tr className="border-b border-border hover:bg-secondary/30">
              <td className="px-2 py-2 text-muted-foreground">낙관</td>
              <td className="px-2 py-2 text-muted-foreground">1,000명</td>
              <td className="px-2 py-2 text-muted-foreground">$4,990</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 7. LTV/CAC 분석 */}
      <h2 className="text-xl font-bold mt-8 mb-3 flex items-center gap-2">
        <TrendingUp size={20} className="text-indigo-600" />7. LTV/CAC 분석
      </h2>
      <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
        <li><strong>LTV:</strong> $4.99 x 6개월 (평균 유지) = $29.94</li>
        <li><strong>CAC (유기적):</strong> ~$0 (TikTok/릴스 바이럴)</li>
        <li><strong>CAC (유료 광고):</strong> $5~10 설치 비용 / 6% 전환 = $83~167/유료 유저 → ROI 안 나옴</li>
        <li><strong>LTV/CAC:</strong> 유기적 시 무한대, 유료 시 3~6</li>
        <li><strong>결론:</strong> 유기적 바이럴이 핵심. 공유 기능이 MVP 필수 피처</li>
      </ul>

      {/* 8. 경쟁 우위 & 해자 전략 */}
      <h2 className="text-xl font-bold mt-8 mb-3 flex items-center gap-2">
        <Shield size={20} className="text-indigo-600" />8. 경쟁 우위 &amp; 해자 전략
      </h2>

      <h3 className="text-lg font-semibold mt-6 mb-3">경쟁 우위</h3>
      <ol className="list-decimal pl-6 space-y-1 text-muted-foreground mb-4">
        <li><span className="font-bold">단답 UX</span>: ChatGPT/Claude에 없는 "단답+펼치기" 경험</li>
        <li><span className="font-bold">결정 특화</span>: 양시론 금지, 한 쪽을 콕 집어주는 AI</li>
        <li><span className="font-bold">바이럴 내장</span>: 공유 카드 기능으로 자연스러운 확산</li>
        <li><span className="font-bold">친근한 톤</span>: 상담이 아닌 "친구 조언" 포지셔닝</li>
      </ol>

      <h3 className="text-lg font-semibold mt-6 mb-3">해자 구축 로드맵</h3>
      <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
        <li><span className="font-bold">Phase 1 (M1-3)</span>: UX 해자 — 단답+펼치기 경험, 공유 카드 디자인, 바이럴 네트워크 효과</li>
        <li><span className="font-bold">Phase 2 (M3-6)</span>: 데이터 해자 — 결정 저널 데이터 축적 → 개인화 추천 → 사용자당 정확도 상승</li>
        <li><span className="font-bold">Phase 3 (M6-12)</span>: 네트워크 해자 — 커뮤니티 기능(비슷한 고민 + 결과 공유) → 네트워크 효과로 이탈 방어</li>
      </ul>
      <hr className="my-6" />

      {/* 9. GTM 전략 */}
      <h2 className="text-xl font-bold mt-8 mb-3 flex items-center gap-2">
        <Rocket size={20} className="text-indigo-600" />9. GTM 전략
      </h2>
      <p className="text-muted-foreground mb-2">타겟(20~35세 일상 고민)이 실제로 모이는 곳 기반:</p>
      <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
        <li><strong>1차 채널:</strong> TikTok / 인스타 릴스 — &quot;AI한테 인생 상담 받아봤는데...&quot; 숏폼 시리즈</li>
        <li><strong>2차 채널:</strong> 에브리타임(대학생) + 블라인드(직장인) 커뮤니티 시딩</li>
        <li><strong>바이럴 장치:</strong> 캡처용 카드 디자인 (질문 + 단답 + 로고) → 자연스러운 공유</li>
        <li><strong>FTUE:</strong> 첫 질문 비로그인 무료 → 예시 질문 3개 → 즉시 단답 경험</li>
        <li><strong>런칭 프로모션:</strong> 1주 Pro 무료 체험 → 습관 형성</li>
      </ul>
      <p className="text-muted-foreground text-sm mb-4"><strong>목표:</strong> M1 가입 1,000명 / DAU 100 / 유료 30명</p>

      {/* 10. 리스크 매트릭스 */}
      <h2 className="text-xl font-bold mt-8 mb-3 flex items-center gap-2">
        <AlertTriangle size={20} className="text-indigo-600" />10. 리스크 매트릭스
      </h2>
      <div className="table-wrap">
        <table className="w-full text-sm border-collapse">
          <thead><tr className="border-b border-border bg-secondary">
            <th className="text-left px-2 py-2 font-semibold text-muted-foreground">리스크</th>
            <th className="text-left px-2 py-2 font-semibold text-muted-foreground">확률/영향</th>
            <th className="text-left px-2 py-2 font-semibold text-muted-foreground">대책</th>
          </tr></thead>
          <tbody>
            <tr className="border-b border-border hover:bg-secondary/30">
              <td className="px-2 py-2 text-muted-foreground">AI 답변 품질 불일치</td>
              <td className="px-2 py-2 text-muted-foreground">중/고</td>
              <td className="px-2 py-2 text-muted-foreground">프롬프트 A/B 테스트 + 지속 개선</td>
            </tr>
            <tr className="border-b border-border hover:bg-secondary/30">
              <td className="px-2 py-2 text-muted-foreground">ChatGPT 단답 모드 출시</td>
              <td className="px-2 py-2 text-muted-foreground">중/고</td>
              <td className="px-2 py-2 text-muted-foreground">결정 특화 + 공유 + 저널로 차별화</td>
            </tr>
            <tr className="border-b border-border hover:bg-secondary/30">
              <td className="px-2 py-2 text-muted-foreground">법적 문제 (조언 책임)</td>
              <td className="px-2 py-2 text-muted-foreground">낮/고</td>
              <td className="px-2 py-2 text-muted-foreground">면책조항 + 친근한 톤 (진지한 조언 아님)</td>
            </tr>
            <tr className="border-b border-border hover:bg-secondary/30">
              <td className="px-2 py-2 text-muted-foreground">리텐션 하락</td>
              <td className="px-2 py-2 text-muted-foreground">중/중</td>
              <td className="px-2 py-2 text-muted-foreground">성격별 답변 스타일 + 결정 저널 + 팔로업</td>
            </tr>
            <tr className="border-b border-border hover:bg-secondary/30">
              <td className="px-2 py-2 text-muted-foreground">API 비용 급등</td>
              <td className="px-2 py-2 text-muted-foreground">낮/중</td>
              <td className="px-2 py-2 text-muted-foreground">모델 다변화 + 캐싱 + fine-tuning (장기)</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 11. 검토 후 기각된 대안 */}
      <h2 className="text-xl font-bold mt-8 mb-3 flex items-center gap-2">
        <XCircle size={20} className="text-indigo-600" />11. 검토 후 기각된 대안
      </h2>
      <div className="table-wrap">
        <table className="w-full text-sm border-collapse">
          <thead><tr className="border-b border-border bg-secondary">
            <th className="text-left px-2 py-2 font-semibold text-muted-foreground">대안</th>
            <th className="text-left px-2 py-2 font-semibold text-muted-foreground">기각 사유</th>
          </tr></thead>
          <tbody>
            <tr className="border-b border-border hover:bg-secondary/30">
              <td className="px-2 py-2 text-muted-foreground">경량 모델(GPT-4o-mini)로 단답</td>
              <td className="px-2 py-2 text-muted-foreground">품질 차이 우려. GPT-4o도 단답이면 250토큰으로 비용 미미</td>
            </tr>
            <tr className="border-b border-border hover:bg-secondary/30">
              <td className="px-2 py-2 text-muted-foreground">MVP에 크레딧+구독 둘 다</td>
              <td className="px-2 py-2 text-muted-foreground">결제 로직 복잡도 증가로 개발 기간 초과. 크레딧은 v1.1</td>
            </tr>
            <tr className="border-b border-border hover:bg-secondary/30">
              <td className="px-2 py-2 text-muted-foreground">전문 도메인(투자/건강) MVP 포함</td>
              <td className="px-2 py-2 text-muted-foreground">법적 리스크 + 정확도 문제. 일상 고민부터 시작</td>
            </tr>
            <tr className="border-b border-border hover:bg-secondary/30">
              <td className="px-2 py-2 text-muted-foreground">결정 저널/배틀 MVP 포함</td>
              <td className="px-2 py-2 text-muted-foreground">스코프 초과. 핵심 UX(단답+펼치기+공유)에 집중</td>
            </tr>
            <tr className="border-b border-border hover:bg-secondary/30">
              <td className="px-2 py-2 text-muted-foreground">구독 $9.99</td>
              <td className="px-2 py-2 text-muted-foreground">타로 앱 대비 가격 저항. $4.99가 충동 구매 가능 가격대</td>
            </tr>
            <tr className="border-b border-border hover:bg-secondary/30">
              <td className="px-2 py-2 text-muted-foreground">다국어 MVP</td>
              <td className="px-2 py-2 text-muted-foreground">한국어 먼저 검증 후 글로벌 확장</td>
            </tr>
            <tr className="border-b border-border hover:bg-secondary/30">
              <td className="px-2 py-2 text-muted-foreground">타로 디자인 차용</td>
              <td className="px-2 py-2 text-muted-foreground">&quot;미신&quot; 이미지 우려. 깔끔+지적인 느낌이 핵심</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 12. 피벗 시나리오 */}
      <h2 className="text-xl font-bold mt-8 mb-3 flex items-center gap-2">
        <ArrowRight size={20} className="text-indigo-600" />12. 피벗 시나리오
      </h2>
      <div className="space-y-3 mb-4">
        <div className="rounded-lg border p-3 bg-card">
          <p className="font-semibold text-sm mb-1">피벗 A: 결정 배틀 플랫폼</p>
          <p className="text-muted-foreground text-sm"><strong>트리거:</strong> 단답 신뢰도 낮음 / 리텐션 하락<br /><strong>방향:</strong> &quot;해&quot; vs &quot;하지 마&quot; 양쪽 추론을 다 보여주고 유저가 선택하는 토론형 플랫폼</p>
        </div>
        <div className="rounded-lg border p-3 bg-card">
          <p className="font-semibold text-sm mb-1">피벗 B: B2B 의사결정 도구</p>
          <p className="text-muted-foreground text-sm"><strong>트리거:</strong> B2C 전환율 저조 / B2B 수요 발견<br /><strong>방향:</strong> 기업 내부 의사결정 화이트라벨 ($99~499/월), Slack/Teams 연동</p>
        </div>
        <div className="rounded-lg border p-3 bg-card">
          <p className="font-semibold text-sm mb-1">피벗 C: AI 성격 캐릭터 플랫폼</p>
          <p className="text-muted-foreground text-sm"><strong>트리거:</strong> 성격별 답변 스타일이 인기 → 캐릭터 자체가 킬러<br /><strong>방향:</strong> 냉철이/따숨이/독설이 등 AI 캐릭터 기반 상담 플랫폼</p>
        </div>
      </div>

      {/* 13. Go/No-Go 최종 판정 */}
      <h2 className="text-xl font-bold mt-8 mb-3 flex items-center gap-2">
        <CheckCircle size={20} className="text-emerald-600" />13. Go/No-Go 최종 판정
      </h2>
      <div className="rounded-lg border-2 border-emerald-500 p-4 mb-4 bg-card">
        <p className="font-semibold text-lg text-emerald-600 mb-3">조건부 Go</p>
        <div className="table-wrap">
          <table className="w-full text-sm border-collapse">
            <thead><tr className="border-b border-border bg-secondary">
              <th className="text-left px-2 py-2 font-semibold text-muted-foreground">지표</th>
              <th className="text-left px-2 py-2 font-semibold text-muted-foreground">값</th>
              <th className="text-left px-2 py-2 font-semibold text-muted-foreground">판정</th>
            </tr></thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-2 py-2 text-muted-foreground">LTV/CAC</td>
                <td className="px-2 py-2 text-muted-foreground">6~무한대</td>
                <td className="px-2 py-2 text-emerald-600 font-semibold">PASS</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-2 py-2 text-muted-foreground">마진율</td>
                <td className="px-2 py-2 text-muted-foreground">46~54%</td>
                <td className="px-2 py-2 text-emerald-600 font-semibold">PASS</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-2 py-2 text-muted-foreground">TAM</td>
                <td className="px-2 py-2 text-muted-foreground">$200M</td>
                <td className="px-2 py-2 text-emerald-600 font-semibold">PASS</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-2 py-2 text-muted-foreground">MVP 개발</td>
                <td className="px-2 py-2 text-muted-foreground">5일</td>
                <td className="px-2 py-2 text-emerald-600 font-semibold">PASS</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-2 py-2 text-muted-foreground">경쟁 우위</td>
                <td className="px-2 py-2 text-muted-foreground">3개</td>
                <td className="px-2 py-2 text-emerald-600 font-semibold">PASS</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-2 py-2 text-muted-foreground">법적 리스크</td>
                <td className="px-2 py-2 text-muted-foreground">면책조항 관리</td>
                <td className="px-2 py-2 text-emerald-600 font-semibold">PASS</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground text-sm mt-3"><strong>성공 조건:</strong> (1) 프롬프트 A/B 테스트에서 답변 일관성 70%+ (2) M1 DAU 100+ (3) 유료 전환 3%+</p>
        <p className="text-muted-foreground text-sm"><strong>실패 시 출구:</strong> API 비용만이므로 손실 최소. 서비스 종료 시 데이터 삭제하면 끝.</p>
      </div>

      {/* ========== Part 2: PRD ========== */}
      <div className="flex items-center gap-2 mt-12 mb-4">
        <Code size={22} className="text-indigo-600" />
        <h2 className="text-xl font-bold text-indigo-600">Part 2: PRD (Product Requirements Document)</h2>
      </div>
      <hr className="mb-6" />

      {/* PRD 1. MVP 스코프 */}
      <h2 className="text-xl font-bold mt-8 mb-3 flex items-center gap-2">
        <Layers size={20} className="text-indigo-600" />1. MVP 스코프
      </h2>
      <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
        <li>질문 입력 → AI 단답 카드 표시 (10자 이내 + 이모지)</li>
        <li>&quot;왜?&quot; 펼치기 → 추론 과정 스트리밍 표시</li>
        <li>공유 카드 생성 (캡처/링크 공유, 워터마크)</li>
        <li>첫 질문 비로그인 무료</li>
        <li>로그인 후 하루 3건 무료 / Pro 무제한</li>
        <li>Stripe 구독 결제 ($4.99/월)</li>
        <li>FTUE: 예시 질문 3개 표시</li>
        <li>면책조항 + 안전 키워드 필터링</li>
      </ul>

      {/* PRD 2. API/인터페이스 설계 */}
      <h2 className="text-xl font-bold mt-8 mb-3 flex items-center gap-2">
        <Wrench size={20} className="text-indigo-600" />2. API/인터페이스 설계
      </h2>
      <h3 className="text-lg font-semibold mt-4 mb-2">API 엔드포인트</h3>
      <pre className="bg-secondary border rounded-md p-3 text-sm overflow-x-auto mb-4">
        <code>{`POST /api/ask
  Request:  { "question": "얘랑 사귈까?" }
  Response: { "id": "q_abc123", "answer": "사귀어 💛" }

POST /api/reason
  Request:  { "questionId": "q_abc123" }
  Response: (stream) { "reasoning": "분석 내용..." }

POST /api/share
  Request:  { "questionId": "q_abc123" }
  Response: { "imageUrl": "...", "shareUrl": "..." }`}</code>
      </pre>
      <h3 className="text-lg font-semibold mt-4 mb-2">핵심 UI 흐름</h3>
      <ol className="list-decimal pl-6 space-y-1 text-muted-foreground mb-4">
        <li>랜딩 → 예시 질문 3개 or 직접 입력</li>
        <li>질문 전송 → 로딩 (뇌 아이콘 회전, 1~2초 딜레이)</li>
        <li>단답 카드 &quot;팡!&quot; 등장 (애니메이션)</li>
        <li>[왜?] 버튼 → 추론 스트리밍 (타이핑 효과)</li>
        <li>[공유] 버튼 → 카드 이미지 생성 → SNS 공유</li>
      </ol>

      {/* PRD 3. 기술 스택 */}
      <h2 className="text-xl font-bold mt-8 mb-3 flex items-center gap-2">
        <Scale size={20} className="text-indigo-600" />3. 기술 스택
      </h2>
      <div className="table-wrap">
        <table className="w-full text-sm border-collapse">
          <thead><tr className="border-b border-border bg-secondary">
            <th className="text-left px-2 py-2 font-semibold text-muted-foreground">카테고리</th>
            <th className="text-left px-2 py-2 font-semibold text-muted-foreground">선택</th>
            <th className="text-left px-2 py-2 font-semibold text-muted-foreground">이유</th>
          </tr></thead>
          <tbody>
            <tr className="border-b border-border hover:bg-secondary/30">
              <td className="px-2 py-2 text-muted-foreground">프레임워크</td>
              <td className="px-2 py-2 text-muted-foreground">Next.js 15</td>
              <td className="px-2 py-2 text-muted-foreground">SSR + API Routes, Vercel 최적화</td>
            </tr>
            <tr className="border-b border-border hover:bg-secondary/30">
              <td className="px-2 py-2 text-muted-foreground">스타일링</td>
              <td className="px-2 py-2 text-muted-foreground">Tailwind + shadcn/ui</td>
              <td className="px-2 py-2 text-muted-foreground">빠른 개발, 커스터마이즈 용이</td>
            </tr>
            <tr className="border-b border-border hover:bg-secondary/30">
              <td className="px-2 py-2 text-muted-foreground">인증/DB</td>
              <td className="px-2 py-2 text-muted-foreground">Supabase</td>
              <td className="px-2 py-2 text-muted-foreground">Auth + PostgreSQL, 무료 티어</td>
            </tr>
            <tr className="border-b border-border hover:bg-secondary/30">
              <td className="px-2 py-2 text-muted-foreground">AI</td>
              <td className="px-2 py-2 text-muted-foreground">Vercel AI SDK + GPT-4o</td>
              <td className="px-2 py-2 text-muted-foreground">스트리밍, 프롬프트 캐싱</td>
            </tr>
            <tr className="border-b border-border hover:bg-secondary/30">
              <td className="px-2 py-2 text-muted-foreground">결제</td>
              <td className="px-2 py-2 text-muted-foreground">Stripe</td>
              <td className="px-2 py-2 text-muted-foreground">글로벌 구독 관리</td>
            </tr>
            <tr className="border-b border-border hover:bg-secondary/30">
              <td className="px-2 py-2 text-muted-foreground">배포</td>
              <td className="px-2 py-2 text-muted-foreground">Vercel</td>
              <td className="px-2 py-2 text-muted-foreground">자동 배포, Edge Functions</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* PRD 4. 개발 일정 */}
      <h2 className="text-xl font-bold mt-8 mb-3 flex items-center gap-2">
        <LineChart size={20} className="text-indigo-600" />4. 개발 일정
      </h2>
      <div className="table-wrap">
        <table className="w-full text-sm border-collapse">
          <thead><tr className="border-b border-border bg-secondary">
            <th className="text-left px-2 py-2 font-semibold text-muted-foreground">Day</th>
            <th className="text-left px-2 py-2 font-semibold text-muted-foreground">작업</th>
            <th className="text-left px-2 py-2 font-semibold text-muted-foreground">산출물</th>
          </tr></thead>
          <tbody>
            <tr className="border-b border-border hover:bg-secondary/30">
              <td className="px-2 py-2 text-muted-foreground">1</td>
              <td className="px-2 py-2 text-muted-foreground">프로젝트 셋업 + 랜딩 페이지 + Supabase Auth</td>
              <td className="px-2 py-2 text-muted-foreground">홈, 로그인</td>
            </tr>
            <tr className="border-b border-border hover:bg-secondary/30">
              <td className="px-2 py-2 text-muted-foreground">2</td>
              <td className="px-2 py-2 text-muted-foreground">채팅 UI + /api/ask + 프롬프트 테스트</td>
              <td className="px-2 py-2 text-muted-foreground">핵심 기능</td>
            </tr>
            <tr className="border-b border-border hover:bg-secondary/30">
              <td className="px-2 py-2 text-muted-foreground">3</td>
              <td className="px-2 py-2 text-muted-foreground">추론 펼치기 + /api/reason + 스트리밍</td>
              <td className="px-2 py-2 text-muted-foreground">차별화 기능</td>
            </tr>
            <tr className="border-b border-border hover:bg-secondary/30">
              <td className="px-2 py-2 text-muted-foreground">4</td>
              <td className="px-2 py-2 text-muted-foreground">공유 카드 + 무료 제한(3건/일) + FTUE</td>
              <td className="px-2 py-2 text-muted-foreground">바이럴 + 리텐션</td>
            </tr>
            <tr className="border-b border-border hover:bg-secondary/30">
              <td className="px-2 py-2 text-muted-foreground">5</td>
              <td className="px-2 py-2 text-muted-foreground">Stripe 결제 + 배포 + 테스트</td>
              <td className="px-2 py-2 text-muted-foreground">출시</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* PRD 5. Post-MVP 로드맵 */}
      <h2 className="text-xl font-bold mt-8 mb-3 flex items-center gap-2">
        <BookOpen size={20} className="text-indigo-600" />5. Post-MVP 로드맵
      </h2>
      <div className="space-y-3 mb-8">
        <div className="rounded-lg border p-3 bg-card">
          <p className="font-semibold text-sm text-indigo-600">v1.1 (Month 2)</p>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm mt-1">
            <li>크레딧 결제 시스템 (10개/$1.99)</li>
            <li>결정 저널 (결정 기록 + 팔로업)</li>
            <li>결정 배틀 (&quot;해&quot; vs &quot;하지 마&quot; 양쪽 추론)</li>
            <li>성격별 답변 스타일 (냉철이/따숨이/독설이)</li>
          </ul>
        </div>
        <div className="rounded-lg border p-3 bg-card">
          <p className="font-semibold text-sm text-indigo-600">v2.0 (Month 6)</p>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm mt-1">
            <li>자체 fine-tuned 모델 (비용 절감 + 품질 최적화)</li>
            <li>글로벌 확장 (영어, 일본어)</li>
            <li>커뮤니티 기능 (비슷한 고민 공유)</li>
            <li>TossPayments 한국 결제 연동</li>
          </ul>
        </div>
        <div className="rounded-lg border p-3 bg-card">
          <p className="font-semibold text-sm text-indigo-600">v3.0 (Year 2)</p>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm mt-1">
            <li>B2B API / 화이트라벨 ($99~499/월)</li>
            <li>Slack/Teams 연동</li>
            <li>결정 인사이트 대시보드</li>
          </ul>
        </div>
      </div>
    </PageShell>
  );
}
