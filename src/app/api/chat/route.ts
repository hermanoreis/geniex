import { createOpenRouter } from '@openrouter/ai-sdk-provider';
import { streamText, convertToModelMessages, UIMessage } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

// Initialize OpenRouter with API key from environment
const openrouter = createOpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
  // Optional: Add your app details for usage tracking
  headers: {
    'HTTP-Referer': process.env.OPENROUTER_APP_URL || (process.env.NODE_ENV === 'production' ? 'https://your-domain.com' : 'http://localhost:3000'),
    'X-Title': process.env.OPENROUTER_APP_NAME || 'GenieX',
  },
});

export async function POST(req: Request) {
  try {
    const { messages }: { messages: UIMessage[] } = await req.json();

    // Validate that we have messages
    if (!messages || !Array.isArray(messages)) {
      return new Response('Messages are required', { status: 400 });
    }

    // Validate API key
    if (!process.env.OPENROUTER_API_KEY) {
      console.error('OPENROUTER_API_KEY is not set');
      return new Response('API configuration error', { status: 500 });
    }

    const result = streamText({
      model: openrouter(
        process.env.OPENROUTER_DEFAULT_MODEL || 'openai/gpt-4o-mini'
      ),
      system: 'Você é o GenieX, um assistente de IA educacional especializado em ajudar estudantes. Seja útil, educativo e responda em português brasileiro.',
      messages: convertToModelMessages(messages),
      maxTokens: 2000,
      temperature: 0.7,
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error('Chat API Error:', error);
    return new Response('Internal server error', { status: 500 });
  }
}
