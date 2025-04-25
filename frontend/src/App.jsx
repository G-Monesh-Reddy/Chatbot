import { useState } from "react";
import ChatInput from "./components/ChatInput";
import ResponseDisplay from "./components/ResponseDisplay";

function App() {
    const [response, setResponse] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    const handleTranslate = async (prompt, language) => {
        setIsLoading(true);
        try {
            const res = await fetch("http://127.0.0.1:5000/translate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ prompt, language }),
            });
            const data = await res.json();
            setResponse(data.translated_response);
            setIsLoading(false);
        } catch (error) {
            console.error("Translation failed:", error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
            <h1 className="text-3xl font-bold mb-6 text-blue-600">
                Chatbot Translator
            </h1>
            <ChatInput onTranslate={handleTranslate} />
            <ResponseDisplay response={response} isLoading={isLoading} />
        </div>
    );
}

export default App;
