import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">대시보드</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">문서 관리</h2>
          <p className="text-gray-600 mb-4">문서를 업로드하고 관리합니다.</p>
          <Button asChild>
            <Link href="/documents">문서 관리</Link>
          </Button>
        </div>
        <div className="border rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">검색</h2>
          <p className="text-gray-600 mb-4">AI 기반 문서 검색을 수행합니다.</p>
          <Button asChild>
            <Link href="/search">검색</Link>
          </Button>
        </div>
        <div className="border rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">설정</h2>
          <p className="text-gray-600 mb-4">계정 및 시스템 설정을 관리합니다.</p>
          <Button asChild variant="outline">
            <Link href="/settings">설정</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}