function ResumeScore({ score, suggestions, onTailor }) {
  return (
    <div className="space-y-4 mt-6 p-4 border rounded-lg bg-gray-50">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Resume Evaluation</h2>
        <div className="flex items-center">
          <span className="text-sm text-gray-600 mr-2">Match Score:</span>
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-white border-2 border-blue-500">
            <span
              className={`text-sm font-bold ${
                score >= 80
                  ? "text-green-600"
                  : score >= 60
                  ? "text-yellow-600"
                  : "text-red-600"
              }`}
            >
              {score}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-md font-medium mb-2">Improvement Suggestions:</h3>
        <div className="bg-white p-3 rounded border text-sm whitespace-pre-wrap">
          {suggestions}
        </div>
      </div>

      <button
        onClick={onTailor}
        className="w-full mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 font-medium"
      >
        Tailor My Resume
      </button>
    </div>
  );
}

export default ResumeScore;
