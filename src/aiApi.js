export async function generateShayari(promptText) {
  const apiKey = "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"; // ← yahan apni key dalni HAI

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apiKey,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",  // fast + cheap + best for text
      messages: [
        {
          role: "user",
          content: `Make a deep emotional John Elia style shayari (3–4 lines) with emojis. Topic: ${promptText}`
        }
      ],
      max_tokens: 150
    }),
  });

  const data = await response.json();
  return data.choices[0].message.content;
}