import { useState } from 'react';
import axios from 'axios';

function App() {
  const [resumeFile, setResumeFile] = useState(null);
  const [jd, setJd] = useState('');
  const [score, setScore] = useState(null);
  const [suggestions, setSuggestions] = useState('');
  const [tailored, setTailored] = useState('');

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('resume', resumeFile);
    formData.append('jd', jd);

    const res = await axios.post('http://localhost:8000/upload', formData);
    setScore(res.data.score);
    setSuggestions(res.data.suggestions);
  };

  const handleTailor = async () => {
    const formData = new FormData();
    formData.append('resume', resumeFile);
    formData.append('jd', jd);

    const res = await axios.post('http://localhost:8000/rewrite', formData);
    setTailored(res.data.tailored_resume);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Resume Tailor</h1>

      <input
        type="file"
        onChange={(e) => setResumeFile(e.target.files[0])}
        className="block"
      />
      <textarea
        value={jd}
        onChange={(e) => setJd(e.target.value)}
        placeholder="Paste job description here"
        className="w-full h-40 border rounded p-2"
      />

      <button
        onClick={handleUpload}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Evaluate Resume
      </button>

      {score !== null && (
        <div>
          <h2 className="font-semibold">Match Score: {score}/100</h2>
          <pre className="whitespace-pre-wrap mt-2 text-gray-700">{suggestions}</pre>
        </div>
      )}

      {score !== null && (
        <button
          onClick={handleTailor}
          className="px-4 py-2 mt-4 bg-green-600 text-white rounded"
        >
          Tailor Resume
        </button>
      )}

      {tailored && (
        <div className="mt-6">
          <h2 className="font-semibold">Tailored Resume</h2>
          <pre className="whitespace-pre-wrap mt-2 text-gray-700">{tailored}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
