import { rest } from 'msw';

export const handlers = [
  rest.get('/api/documents', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: '1',
          title: '샘플 문서 1',
          summary: '이것은 첫 번째 샘플 문서입니다.',
          tags: ['문서', '샘플'],
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          id: '2',
          title: '샘플 문서 2',
          summary: '이것은 두 번째 샘플 문서입니다.',
          tags: ['문서', '예시'],
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ])
    );
  }),
  
  rest.post('/api/documents/upload', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        documentId: '3',
      })
    );
  }),
  
  rest.get('/api/search', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: '1',
          title: '검색 결과 문서',
          summary: '검색어와 관련된 문서입니다.',
          relevance: 0.95,
          tags: ['검색', '관련'],
        },
      ])
    );
  }),
]; 