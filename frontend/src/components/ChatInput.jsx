import { useState } from "react";
import LanguageSelector from "./LanguageSelector";

const ChatInput = ({ onTranslate }) => {
    const [prompt, setPrompt] = useState("");
    const [language, setLanguage] = useState("Hindi");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (prompt.trim() === "") return;
        onTranslate(prompt, language);
    };

    return (
        <div className="bg-white p-4 rounded shadow-md w-full max-w-lg">
            <input
                type="text"
                placeholder="Enter your query..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mb-2"
            />
            <LanguageSelector selected={language} onChange={setLanguage} />
            <button
                onClick={handleSubmit}
                className="w-full bg-blue-500 text-white p-2 rounded mt-2 hover:bg-blue-600"
            >
                Submit
            </button>
        </div>
    );
};

export default ChatInput;
