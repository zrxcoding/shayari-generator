export const generateShayari = async (theme) => {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer YOUR_OPENAI_API_KEY`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "You are a poetic Shayari generator in Hindi/Urdu with emojis." },
          { role: "user", content: `Generate a short ${theme} shayari with emojis.` }
        ],
        max_tokens: 100
      })
    });

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (err) {
    console.error(err);
    return "AI generation failed 😢";
  }
};