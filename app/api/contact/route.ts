// app/api/submit/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();

  try {
    const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwQyXpxMKxbpC9bOk0OIPPJl_UowouFYTwy_24UvwD2mmyWW8A4iG2nr6dDwI0UEsFwfQ/exec",
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    );

    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to submit data.' },
      { status: 500 }
    );
  }
}