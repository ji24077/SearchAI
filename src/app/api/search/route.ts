import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { getIndex } from '@/lib/pinecone';
import { generateEmbedding } from '@/lib/openai';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('q');
    
    if (!query) {
      return NextResponse.json(
        { error: '검색어가 제공되지 않았습니다.' },
        { status: 400 }
      );
    }
    
    // 쿼리 임베딩 생성
    const queryEmbedding = await generateEmbedding(query);
    
    // Pinecone에서 유사한 벡터 검색
    const index = await getIndex();
    const results = await index.query({
      vector: queryEmbedding,
      topK: 5,
      includeMetadata: true,
    });
    
    // 검색 결과에서 문서 ID 추출
    const vectorIds = results.matches.map((match) => match.id);
    
    // 데이터베이스에서 문서 정보 조회
    const documents = await prisma.document.findMany({
      where: {
        vectorId: {
          in: vectorIds,
        },
      },
      select: {
        id: true,
        title: true,
        summary: true,
        tags: true,
      },
    });
    
    // 검색 결과 포맷팅
    const formattedResults = results.matches.map((match) => {
      const document = documents.find((doc) => doc.vectorId === match.id);
      return {
        id: document?.id,
        title: document?.title || match.metadata?.title,
        summary: document?.summary || match.metadata?.summary,
        relevance: match.score,
        tags: document?.tags || match.metadata?.tags,
      };
    });
    
    return NextResponse.json(formattedResults);
  } catch (error) {
    console.error('검색 오류:', error);
    return NextResponse.json(
      { error: '검색에 실패했습니다.' },
      { status: 500 }
    );
  }
} 