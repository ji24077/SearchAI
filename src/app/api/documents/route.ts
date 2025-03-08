import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET() {
  try {
    const documents = await prisma.document.findMany({
      select: {
        id: true,
        title: true,
        summary: true,
        tags: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    
    return NextResponse.json(documents);
  } catch (error) {
    console.error('문서 목록 조회 오류:', error);
    return NextResponse.json(
      { error: '문서 목록을 불러오는데 실패했습니다.' },
      { status: 500 }
    );
  }
} 