import { Pinecone } from '@pinecone-database/pinecone';

let pinecone: Pinecone | null = null;

export const getPinecone = async () => {
  if (!pinecone) {
    pinecone = new Pinecone({
      apiKey: process.env.PINECONE_API_KEY!,
      environment: process.env.PINECONE_ENVIRONMENT!,
    });
  }
  return pinecone;
};

export const getIndex = async (indexName = 'searchai') => {
  const pinecone = await getPinecone();
  return pinecone.index(indexName);
}; 