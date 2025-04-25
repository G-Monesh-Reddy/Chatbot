const formatResponse = (response) => {
    // Use a regular expression to replace text with <strong>text</strong>
    return response.replace(/\\(.?)\\*/g, "<br/><strong>$1</strong><br/>");
};

const ResponseDisplay = ({ response, isLoading }) => {
    return (
        <div className="mt-4 bg-gray-200 p-4 rounded shadow-md w-full max-w-lg">
            <h2 className="text-lg font-semibold">Translated Response:</h2>
            <div>
                {isLoading ? (
                    <p className="mt-2">Loading...</p>
                ) : (
                    <div
                        dangerouslySetInnerHTML={{
                            __html: formatResponse(response),
                        }}
                    />
                )}
                <p className="mt-2">{response || "No response yet."}</p>
            </div>
        </div>
    );
};

export default ResponseDisplay;
