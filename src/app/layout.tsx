import './globals.css';

export const metadata = {
  title: 'JustAnswerMe - AI 결정 도우미',
  description: '깊이 생각하고, 짧게 답한다 — AI 결정 도우미',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
