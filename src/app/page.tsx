import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/layout/navbar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">컴포넌트 테스트</h1>
        {/* 여기에 테스트하고 싶은 컴포넌트 추가 */}
      </div>
    </main>
  );
}
