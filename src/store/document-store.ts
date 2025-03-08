import { create } from 'zustand';

interface Document {
  id: string;
  title: string;
  summary?: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

interface DocumentStore {
  documents: Document[];
  isLoading: boolean;
  error: string | null;
  fetchDocuments: () => Promise<void>;
  uploadDocument: (file: File) => Promise<void>;
}

export const useDocumentStore = create<DocumentStore>((set) => ({
  documents: [],
  isLoading: false,
  error: null,
  
  fetchDocuments: async () => {
    set({ isLoading: true, error: null });
    try {
      // 실제 API 호출 대신 임시 데이터 반환
      const mockData = [
        {
          id: '1',
          title: '샘플 문서 1',
          summary: '이것은 첫 번째 샘플 문서입니다.',
          tags: ['문서', '샘플'],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '2',
          title: '샘플 문서 2',
          summary: '이것은 두 번째 샘플 문서입니다.',
          tags: ['문서', '예시'],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];
      
      // 약간의 지연 시간 추가 (실제 API 호출처럼 보이게)
      setTimeout(() => {
        set({ documents: mockData, isLoading: false });
      }, 500);
    } catch (error) {
      set({ error: '문서를 불러오는데 실패했습니다.', isLoading: false });
    }
  },
  
  uploadDocument: async (file: File) => {
    set({ isLoading: true, error: null });
    try {
      // 파일 업로드 로직 (실제 구현 필요)
      const formData = new FormData();
      formData.append('file', file);
      
      const response = await fetch('/api/documents/upload', {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error('업로드에 실패했습니다.');
      }
      
      // 업로드 후 문서 목록 새로고침
      const fetchDocumentsAction = useDocumentStore.getState().fetchDocuments;
      await fetchDocumentsAction();
    } catch (error) {
      set({ error: '문서 업로드에 실패했습니다.', isLoading: false });
    }
  },
})); 