import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Search() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">문서 검색</h1>
      <div className="flex gap-2 mb-8">
        <Input placeholder="자연어로 검색어를 입력하세요..." className="flex-1" />
        <Button>검색</Button>
      </div>
      <div className="border rounded-lg p-6 shadow-sm">
        <p className="text-gray-600">검색 결과가 여기에 표시됩니다.</p>
      </div>
    </div>
  );
}