const languages = [
    "Hindi",
    "English",
    "Telugu",
    "Tamil",
    "Marathi",
    "Gujarati",
    "Kannada",
    "Malayalam",
    "Odia",
    "Bengali",
    "Assamese",
    "Punjabi",
    "Urdu",
    "Kashmiri",
    "Sindhi",
    "Sanskrit",
    "Konkani",
    "Manipuri",
    "Bodo",
    "Dogri",
    "Maithili",
    "Santali",
    "Nepali",
    "Bhojpuri",
    "Magadhi",
];

const LanguageSelector = ({ selected, onChange }) => {
    return (
        <select
            value={selected}
            onChange={(e) => onChange(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
        >
            {languages.map((lang) => (
                <option key={lang} value={lang}>
                    {lang}
                </option>
            ))}
        </select>
    );
};

export default LanguageSelector;
