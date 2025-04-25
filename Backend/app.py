from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
from googletrans import Translator

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend-backend communication

# Configure Gemini API
genai.configure(api_key="AIzaSyB39ssJXBlTPxYVniAg3CyI_DxC7x0DVr4")
model = genai.GenerativeModel("gemini-1.5-flash")

# List of Indian languages
indian_languages = {
    "Hindi": "hi", "English": "en", "Telugu": "te", "Tamil": "ta", "Marathi": "mr",
    "Gujarati": "gu", "Kannada": "kn", "Malayalam": "ml", "Odia": "or", "Bengali": "bn",
    "Assamese": "as", "Punjabi": "pa", "Urdu": "ur", "Kashmiri": "ks", "Sindhi": "sd",
    "Sanskrit": "sa", "Konkani": "gom", "Manipuri": "mni", "Bodo": "brx", "Dogri": "dgr",
    "Maithili": "mai", "Santali": "sa", "Nepali": "ne", "Bhojpuri": "bho", "Magadhi": "mag",
}

translator = Translator()

@app.route('/translate', methods=['POST'])
def translate_chatbot_response():
    data = request.get_json()
    prompt = data.get("prompt")
    target_language = data.get("language")

    if not prompt or target_language not in indian_languages:
        return jsonify({"error": "Invalid input"}), 400

    # Generate chatbot response
    response = model.generate_content(prompt).text
    print(response)

    # Translate response
    translated_text = translator.translate(response, dest=indian_languages[target_language]).text
    
    return jsonify({"translated_response": translated_text})

if __name__ == '__main__':
    app.run(debug=True)
