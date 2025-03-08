# SearchAI
AI-Powered Smart Search for Documents &amp; More SearchAI is an AI-driven search engine that understands natural language, intelligently retrieves documents, and provides context-aware recommendations. With cutting-edge NLP and vector search technology, SearchAI transforms the way you manage, find, and interact with your files.

flowchart TD
  %% 프론트엔드 영역
  subgraph FE [프론트엔드]
    FE1["Next.js (React): SSR, SEO 최적화"]
    FE2["Tailwind CSS: 빠른 UI 개발"]
    FE3["shadcn/ui: UI 컴포넌트 라이브러리"]
    FE4["React Query: 비동기 데이터 관리"]
    FE5["Zustand: 상태 관리"]
  end

  %% 백엔드 영역
  subgraph BE [백엔드]
    BE1["FastAPI (Python): 비동기 API 서버"]
    BE2["JWT (OAuth2): 인증 및 보안"]
  end

  %% 데이터베이스 및 파일 저장 영역
  subgraph DB [데이터베이스 & 파일 저장]
    DB1["PostgreSQL: 문서 메타데이터 저장"]
    DB2["Firebase Firestore: 실시간 동기화"]
    FS1["AWS S3: 대량 문서 저장"]
    FS2["Google Drive API: 클라우드 연동"]
  end

  %% AI / NLP 및 벡터 검색 영역
  subgraph AI [AI / NLP & 벡터 검색]
    AI1["GPT-4 (OpenAI API): 문서 요약/검색 최적화"]
    AI2["LangChain: RAG 기반 검색 최적화"]
    AI3["Hugging Face (BERT, T5)"]
    VS1["Pinecone: 서버리스 벡터 DB"]
  end

  %% OCR 영역
  subgraph OCR [OCR (이미지 & PDF)]
    OCR1["Google Vision API: 클라우드 기반 OCR"]
    OCR2["Tesseract OCR: 로컬 무료 OCR"]
  end

  %% 배포 및 인프라 영역
  subgraph DEP [배포 & 인프라]
    DEP1["Docker: 컨테이너 배포"]
    DEP2["Kubernetes: 확장 클러스터 운영"]
    DEP3["AWS Lambda: 서버리스 API 운영"]
  end

  %% 알림 시스템 영역
  subgraph NT [알림 시스템]
    NT1["Firebase Cloud Messaging: 모바일 푸시"]
    NT2["Twilio: SMS 및 이메일"]
    NT3["Slack API: 슬랙 알림 연동"]
  end

  %% 영역 간 연결 관계
  FE1 --> BE1
  FE1 --> BE2

  BE1 --> DB1
  BE1 --> DB2
  BE1 --> FS1
  BE1 --> FS2
  BE1 --> VS1
  BE1 --> AI1
  BE1 --> AI2
  BE1 --> AI3
  BE1 --> OCR1
  BE1 --> OCR2

  BE1 -- "API 호출" --> DEP1
  DEP1 --> DEP2
  DEP1 --> DEP3

  BE1 --> NT1
  BE1 --> NT2
  BE1 --> NT3

  %% 알림 결과 프론트엔드로 표시
  NT1 --- FE1
  NT2 --- FE1
  NT3 --- FE1
