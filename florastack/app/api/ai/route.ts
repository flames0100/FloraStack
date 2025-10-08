
import { NextResponse } from 'next/server';
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const prompt = body.prompt || 'Hello';
    const answer = `FloraAI placeholder response for prompt: "${prompt}"`;
    return NextResponse.json({ answer });
  } catch (err) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
