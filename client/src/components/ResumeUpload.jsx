import { useState } from "react";

function ResumeUpload({ onUpload, setResumeFile, setJd }) {
  const [fileName, setFileName] = useState("");
  const [jdText, setJdText] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResumeFile(file);
      setFileName(file.name);
    }
  };

  const handleJdChange = (e) => {
    setJdText(e.target.value);
    setJd(e.target.value);
  };

  return (
    <div className="space-y-4">
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
        <label htmlFor="resume-upload" className="cursor-pointer">
          <div className="text-sm text-gray-600">
            {fileName ? `Selected: ${fileName}` : "Click to upload your resume"}
          </div>
          <input
            id="resume-upload"
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
      </div>

      <div>
        <label
          htmlFor="jd"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Job Description
        </label>
        <textarea
          id="jd"
          value={jdText}
          onChange={handleJdChange}
          placeholder="Paste job description here"
          className="w-full h-40 border rounded p-2 text-sm"
        />
      </div>

      <button
        onClick={onUpload}
        disabled={!fileName || !jdText}
        className={`w-full px-4 py-2 rounded text-white font-medium 
          ${
            !fileName || !jdText
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
      >
        Evaluate Resume
      </button>
    </div>
  );
}

export default ResumeUpload;
