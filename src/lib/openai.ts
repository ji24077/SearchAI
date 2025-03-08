import OpenAI from 'openai';

let openai: OpenAI | null = null;

export const getOpenAI = () => {
  if (!openai) {
    openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }
  return openai;
};

export const generateEmbedding = async (text: string) => {
  const openai = getOpenAI();
  const response = await openai.embeddings.create({
    model: 'text-embedding-3-small',
    input: text,
  });
  return response.data[0].embedding;
};

export const summarizeText = async (text: string) => {
  const openai = getOpenAI();
  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      {
        role: 'system',
        content: '다음 텍스트를 간결하게 요약해주세요.',
      },
      {
        role: 'user',
        content: text,
      },
    ],
    max_tokens: 200,
  });
  return response.choices[0].message.content;
}; 