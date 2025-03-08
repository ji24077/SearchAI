import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Documents() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">문서 관리</h1>
        <Button>문서 업로드</Button>
      </div>
      <div className="border rounded-lg p-6 shadow-sm">
        <p className="text-gray-600 mb-4">아직 업로드된 문서가 없습니다.</p>
        <p className="text-gray-600">문서를 업로드하여 AI 기반 검색을 시작하세요.</p>
      </div>
    </div>
  );
}