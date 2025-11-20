import React, { useState } from "react";
import { generateShayari } from "./aiApi"; // AI API optional

// Preloaded shayaris per theme (aap 100+ add kar sakte ho)
const preloadedShayaris = {
  Heartbreak: [
    "Dil ke tukde ho gaye 💔",
    "Tere bina jeena mushkil hai 😢",
    "Yaad teri aati hai raat bhar 🥀",
    "Kya hua jo tu chala gaya...",
    "Tanha rehna bhi ek kala hai..."
    // Add more shayaris here
  ],
  Love: [
    "Tera pyaar mere liye sab kuch hai ❤️",
    "Har pal teri yaadon mein jeeta hoon ✨",
    "Dil ke armaan tere naam kar doon...",
    "Tere bina adhoora hoon main...",
    "Meri duniya tu hi toh hai..."
  ],
  Sadness: [],
  Motivation: [],
  Friendship: []
};

const ShayariSection = ({ theme }) => {
  const [index, setIndex] = useState(0);
  const [aiShayari, setAiShayari] = useState("");
  const shayaris = preloadedShayaris[theme] || [];

  // Next shayari button
  const nextShayari = () => {
    setIndex((prev) => (prev + 1) % shayaris.length);
  };

  // AI generate button
  const handleGenerateAI = async () => {
    const result = await generateShayari(theme);
    setAiShayari(result);
  };

  return (
    <div className="max-w-3xl mx-auto text-center">
      {/* Shayari display */}
      <div className="bg-gray-800 rounded-xl p-6 mb-4 shadow-lg glow">
        <p className="text-xl mb-2">{shayaris[index]}</p>
        <p className="text-lg mt-2 text-purple-300">{aiShayari}</p>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-4">
        <button
          onClick={nextShayari}
          className="px-4 py-2 bg-purple-700 rounded-full hover:bg-purple-600 transition-all"
        >
          Next 100 🔄
        </button>
        <button
          onClick={handleGenerateAI}
          className="px-4 py-2 bg-green-700 rounded-full hover:bg-green-600 transition-all"
        >
          Generate My Shayari ✨
        </button>
      </div>
    </div>
  );
};

export default ShayariSection;
