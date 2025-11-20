export async function generateShayari(promptText) {
  const response = await fetch("/.netlify/functions/ai", {
    method: "POST",
    body: JSON.stringify({
      prompt: promptText
    })
  });

  const data = await response.json();
  return data.text;
}
