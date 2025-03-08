import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto flex h-16 items-center px-4">
        <Link href="/" className="text-xl font-bold">
          SearchAI
        </Link>
        <div className="ml-auto flex gap-4">
          <Link href="/dashboard" className="px-4 py-2 hover:bg-gray-100 rounded">
            대시보드
          </Link>
          <Link href="/documents" className="px-4 py-2 hover:bg-gray-100 rounded">
            문서
          </Link>
          <Link href="/search" className="px-4 py-2 hover:bg-gray-100 rounded">
            검색
          </Link>
        </div>
      </div>
    </nav>
  );
}