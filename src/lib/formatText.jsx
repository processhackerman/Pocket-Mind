export default function formatText(text) {
    if (!text) {
        return null;
    }

    const rawSentences = text.split(/(?<=\.\s)/g);

    const cleanSentences = rawSentences
        .map((sentence) => sentence.trim())
        .filter((sentence) => sentence.length > 0);

    return (
        <>
            {cleanSentences.map((sentence, index) => (
                <div className="insight__sentence" key={index}>
                    {sentence}
                </div>
            ))}
        </>
    );
}
