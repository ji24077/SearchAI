import { create } from 'zustand';

interface SearchResult {
  id: string;
  title: string;
  summary: string;
  relevance: number;
  tags: string[];
}

interface SearchStore {
  query: string;
  results: SearchResult[];
  isSearching: boolean;
  error: string | null;
  setQuery: (query: string) => void;
  search: () => Promise<void>;
}

export const useSearchStore = create<SearchStore>((set, get) => ({
  query: '',
  results: [],
  isSearching: false,
  error: null,
  
  setQuery: (query: string) => set({ query }),
  
  search: async () => {
    const { query } = get();
    if (!query.trim()) return;
    
    set({ isSearching: true, error: null });
    try {
      // API 호출 로직 (실제 구현 필요)
      const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
      const data = await response.json();
      set({ results: data, isSearching: false });
    } catch (error) {
      set({ error: '검색에 실패했습니다.', isSearching: false });
    }
  },
})); 