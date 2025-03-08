import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function extractMetadata(text: string) {
  // 간단한 메타데이터 추출 로직 (실제로는 더 복잡할 수 있음)
  const metadata: Record<string, any> = {};
  
  // 날짜 추출 (YYYY-MM-DD 형식)
  const dateMatches = text.match(/\d{4}-\d{2}-\d{2}/g);
  if (dateMatches && dateMatches.length > 0) {
    metadata.dates = dateMatches;
  }
  
  // 금액 추출
  const amountMatches = text.match(/\d+,\d+원|\d+원/g);
  if (amountMatches && amountMatches.length > 0) {
    metadata.amounts = amountMatches;
  }
  
  return metadata;
}

export function generateTags(text: string, summary: string) {
  // 실제로는 AI를 사용하여 태그를 생성할 수 있음
  // 여기서는 간단한 예시로 구현
  const commonWords = ['문서', '계약', '보고서', '이메일', '메모', '회의록'];
  const tags = [];
  
  for (const word of commonWords) {
    if (text.includes(word) || summary.includes(word)) {
      tags.push(word);
    }
  }
  
  return tags;
} 