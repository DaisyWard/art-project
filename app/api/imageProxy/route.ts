// app/api/imageProxy/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get('url');
  if (!url) return NextResponse.json({ error: 'No URL provided' }, { status: 400 });

  const response = await fetch(url);
  const buffer = await response.arrayBuffer();

  return new NextResponse(Buffer.from(buffer), {
    headers: { 'Content-Type': response.headers.get('content-type') || 'image/jpeg' },
  });
}
