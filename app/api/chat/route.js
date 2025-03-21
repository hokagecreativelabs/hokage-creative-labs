import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { message } = await req.json();
    console.log("🔹 Received Message:", message);

    if (!message) {
      console.error("❌ No message provided");
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const apiKey = "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";
    console.log("🔹 OpenAI API Key:", apiKey ? "Loaded ✅" : "MISSING ❌");

    if (!apiKey) {
      return NextResponse.json({ error: "API Key is missing" }, { status: 500 });
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
      }),
    });

    const data = await response.json();
    console.log("🔹 OpenAI Response:", data);

    if (!response.ok) {
      console.error("❌ OpenAI API Error:", data);
      return NextResponse.json({ error: data.error?.message || "OpenAI Error" }, { status: 500 });
    }

    return NextResponse.json({ reply: data.choices[0].message.content }, { status: 200 });
  } catch (error) {
    console.error("🔥 Server Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
