import { useState } from "react";
import { generateShayari } from "./aiApi";

function App() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleGenerate() {
    setLoading(true);
    const res = await generateShayari("love");
    setText(res);
    setLoading(false);
  }

  return (
    <div className="p-5 text-white bg-black min-h-screen">
      <button 
        onClick={handleGenerate}
        className="bg-purple-500 px-4 py-2 rounded-lg"
      >
        Generate Shayari
      </button>

      {loading && <p>⏳ Generating...</p>}
      {text && <p className="mt-4">{text}</p>}
    </div>
  );
}

export default App;
