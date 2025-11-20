import React, { useState } from "react";
import ShayariSection from "./ShayariSection";

const App = () => {
  // Themes
  const themes = ["Heartbreak", "Love", "Sadness", "Motivation", "Friendship"];
  const [currentTheme, setCurrentTheme] = useState("Heartbreak");

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-purple-900 to-black text-white p-4">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-6 glow">
        ✨ Shayari Generator ✨
      </h1>

      {/* Theme buttons */}
      <div className="flex justify-center flex-wrap gap-4 mb-6">
        {themes.map((theme) => (
          <button
            key={theme}
            onClick={() => setCurrentTheme(theme)}
            className={`px-4 py-2 rounded-full ${
              currentTheme === theme ? "bg-purple-700" : "bg-gray-700"
            } hover:bg-purple-600 transition-all`}
          >
            {theme}
          </button>
        ))}
      </div>

      {/* Shayari Section */}
      <ShayariSection theme={currentTheme} />
    </div>
  );
};

export default App;
