function TailoredResume({ tailoredContent }) {
  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([tailoredContent], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "tailored-resume.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(tailoredContent)
      .then(() => {
        alert("Copied to clipboard!");
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });
  };

  return (
    <div className="mt-8 p-4 border rounded-lg bg-gray-50">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Your Tailored Resume</h2>
        <div className="space-x-2">
          <button
            onClick={handleCopy}
            className="px-3 py-1 text-sm bg-gray-200 hover:bg-gray-300 rounded"
          >
            Copy
          </button>
          <button
            onClick={handleDownload}
            className="px-3 py-1 text-sm bg-blue-600 text-white hover:bg-blue-700 rounded"
          >
            Download
          </button>
        </div>
      </div>

      <div className="bg-white p-4 rounded border max-h-96 overflow-y-auto whitespace-pre-wrap text-sm">
        {tailoredContent}
      </div>
    </div>
  );
}

export default TailoredResume;
