import { NextRequest, NextResponse } from "next/server";

const MISTRAL_API_KEY = process.env.MISTRAL_API_KEY; // Store API key in .env

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();

    const response = await fetch("https://api.mistral.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${MISTRAL_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "mistral-medium", // Other models: mistral-small, mistral-medium
        messages: [{ role: "user", content: prompt }],
      }),
    });

    if (!response.ok) {
      throw new Error(`Mistral API error: ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
}
