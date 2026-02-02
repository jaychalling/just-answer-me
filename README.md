# JustAnswerMe

깊이 생각하고, 짧게 답한다 — AI 결정 도우미

## 프로젝트 개요

이 프로젝트는 idea-hub 리포지토리에서 추출된 JustAnswerMe 기획서 및 관련 문서를 독립 실행형 Next.js 프로젝트로 구성한 것입니다.

## 포함된 페이지

- `/` - 메인 기획서 (서비스 기획서 + PRD)
- `/minutes` - 11인 전문가 브레인스토밍 회의록
- `/docs` - 기술 문서

## 기술 스택

- Next.js 16 (App Router)
- React 19
- TypeScript (strict)
- Tailwind CSS 4
- shadcn/ui (new-york style)
- Lucide React (아이콘)

## 시작하기

```bash
npm install
npm run dev
```

브라우저에서 http://localhost:3000 을 열어 확인하세요.

## 빌드

```bash
npm run build
npm start
```

## Vercel 배포

```bash
vercel --prod
```

또는 GitHub과 연결하여 자동 배포를 설정할 수 있습니다.
