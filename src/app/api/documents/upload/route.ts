import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { getIndex } from '@/lib/pinecone';
import { generateEmbedding, summarizeText } from '@/lib/openai';
import { extractMetadata, generateTags } from '@/lib/utils';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json(
        { error: '파일이 제공되지 않았습니다.' },
        { status: 400 }
      );
    }
    
    // 파일 내용 읽기 (텍스트 파일 가정)
    const content = await file.text();
    
    // 문서 요약 생성
    const summary = await summarizeText(content);
    
    // 메타데이터 추출
    const metadata = extractMetadata(content);
    
    // 태그 생성
    const tags = generateTags(content, summary);
    
    // 벡터 임베딩 생성
    const embedding = await generateEmbedding(content);
    
    // Pinecone에 벡터 저장
    const index = await getIndex();
    const vectorId = `doc_${Date.now()}`;
    await index.upsert([
      {
        id: vectorId,
        values: embedding,
        metadata: {
          title: file.name,
          summary,
          tags,
        },
      },
    ]);
    
    // 데이터베이스에 문서 정보 저장
    const document = await prisma.document.create({
      data: {
        title: file.name,
        content,
        summary,
        tags,
        vectorId,
        metadata,
        userId: 'temp-user-id', // 실제 인증 시스템 구현 시 변경 필요
      },
    });
    
    return NextResponse.json({
      success: true,
      documentId: document.id,
    });
  } catch (error) {
    console.error('문서 업로드 오류:', error);
    return NextResponse.json(
      { error: '문서 업로드에 실패했습니다.' },
      { status: 500 }
    );
  }
} 