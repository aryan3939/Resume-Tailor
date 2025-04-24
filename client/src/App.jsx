import { useState } from "react";
import axios from "axios";

// API base URL with fallback options
const API_BASE_URL = "http://127.0.0.1:8000";

function App() {
  const [resumeFile, setResumeFile] = useState(null);
  const [jd, setJd] = useState("");
  const [score, setScore] = useState(null);
  const [suggestions, setSuggestions] = useState("");
  const [tailored, setTailored] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");
  const [error, setError] = useState("");

  const handleUpload = async () => {
    if (!resumeFile || !jd) return;

    try {
      setLoading(true);
      setLoadingMessage("Evaluating your resume...");
      setError("");

      const formData = new FormData();
      formData.append("resume", resumeFile);
      formData.append("jd", jd);

      const res = await axios.post(`${API_BASE_URL}/upload`, formData);
      setScore(res.data.score);
      setSuggestions(res.data.suggestions);
    } catch (err) {
      console.error("Error during evaluation:", err);
      setError("Failed to evaluate resume. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleTailor = async () => {
    if (!resumeFile || !jd) return;

    try {
      setLoading(true);
      setLoadingMessage("Tailoring your resume...");
      setError("");

      const formData = new FormData();
      formData.append("resume", resumeFile);
      formData.append("jd", jd);

      const res = await axios.post(`${API_BASE_URL}/rewrite`, formData);
      setTailored(res.data.tailored_resume);
    } catch (err) {
      console.error("Error during tailoring:", err);
      setError("Failed to tailor resume. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "768px", margin: "0 auto", padding: "24px" }}>
      <header style={{ marginBottom: "32px", textAlign: "center" }}>
        <h1
          style={{ fontSize: "1.875rem", fontWeight: "bold", color: "#2563eb" }}
        >
          Resume Tailor
        </h1>
        <p style={{ color: "#4b5563", marginTop: "8px" }}>
          Optimize your resume for job applications with AI
        </p>
      </header>

      {error && (
        <div
          style={{
            marginBottom: "24px",
            padding: "12px",
            backgroundColor: "#fee2e2",
            color: "#b91c1c",
            borderRadius: "8px",
          }}
        >
          {error}
        </div>
      )}

      {loading ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "32px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              border: "4px solid #e5e7eb",
              borderTopColor: "#3b82f6",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
              marginBottom: "16px",
            }}
          ></div>
          <p style={{ color: "#4b5563" }}>{loadingMessage}</p>
          <p
            style={{ fontSize: "0.75rem", color: "#6b7280", marginTop: "8px" }}
          >
            This may take a few moments
          </p>
        </div>
      ) : (
        <div style={{ marginBottom: "24px" }}>
          <div style={{ marginBottom: "24px" }}>
            <div
              style={{
                border: "2px dashed #d1d5db",
                borderRadius: "8px",
                padding: "24px",
                textAlign: "center",
                marginBottom: "16px",
              }}
            >
              <label htmlFor="resume-upload" style={{ cursor: "pointer" }}>
                <div style={{ fontSize: "0.875rem", color: "#4b5563" }}>
                  {resumeFile
                    ? `Selected: ${resumeFile.name}`
                    : "Click to upload your resume"}
                </div>
                <input
                  id="resume-upload"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setResumeFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </label>
            </div>

            <div>
              <label
                htmlFor="jd"
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  color: "#374151",
                  marginBottom: "4px",
                }}
              >
                Job Description
              </label>
              <textarea
                id="jd"
                value={jd}
                onChange={(e) => setJd(e.target.value)}
                placeholder="Paste job description here"
                style={{
                  width: "100%",
                  height: "160px",
                  border: "1px solid #d1d5db",
                  borderRadius: "4px",
                  padding: "8px",
                  fontSize: "0.875rem",
                }}
              />
            </div>

            <button
              onClick={handleUpload}
              disabled={!resumeFile || !jd}
              style={{
                width: "100%",
                padding: "8px 16px",
                borderRadius: "4px",
                color: "white",
                fontWeight: "500",
                backgroundColor: !resumeFile || !jd ? "#9ca3af" : "#2563eb",
                cursor: !resumeFile || !jd ? "not-allowed" : "pointer",
                marginTop: "16px",
              }}
            >
              Evaluate Resume
            </button>
          </div>

          {score !== null && (
            <div
              style={{
                marginTop: "24px",
                padding: "16px",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                backgroundColor: "#f9fafb",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "16px",
                }}
              >
                <h2 style={{ fontSize: "1.125rem", fontWeight: "600" }}>
                  Resume Evaluation
                </h2>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span
                    style={{
                      fontSize: "0.875rem",
                      color: "#4b5563",
                      marginRight: "8px",
                    }}
                  >
                    Match Score:
                  </span>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "40px",
                      width: "40px",
                      borderRadius: "50%",
                      backgroundColor: "white",
                      border: "2px solid #3b82f6",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.875rem",
                        fontWeight: "bold",
                        color:
                          score >= 80
                            ? "#059669"
                            : score >= 60
                            ? "#ca8a04"
                            : "#dc2626",
                      }}
                    >
                      {score}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: "500",
                    marginBottom: "8px",
                  }}
                >
                  Improvement Suggestions:
                </h3>
                <div
                  style={{
                    backgroundColor: "white",
                    padding: "12px",
                    borderRadius: "4px",
                    border: "1px solid #d1d5db",
                    fontSize: "0.875rem",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {suggestions}
                </div>
              </div>

              <button
                onClick={handleTailor}
                style={{
                  width: "100%",
                  marginTop: "16px",
                  padding: "8px 16px",
                  backgroundColor: "#16a34a",
                  color: "white",
                  borderRadius: "4px",
                  fontWeight: "500",
                  cursor: "pointer",
                }}
              >
                Tailor My Resume
              </button>
            </div>
          )}

          {tailored && (
            <div
              style={{
                marginTop: "32px",
                padding: "16px",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                backgroundColor: "#f9fafb",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "16px",
                }}
              >
                <h2 style={{ fontSize: "1.125rem", fontWeight: "600" }}>
                  Your Tailored Resume
                </h2>
                <div style={{ display: "flex", gap: "8px" }}>
                  <button
                    onClick={() => {
                      navigator.clipboard
                        .writeText(tailored)
                        .then(() => alert("Copied to clipboard!"))
                        .catch((err) =>
                          console.error("Could not copy text: ", err)
                        );
                    }}
                    style={{
                      padding: "4px 12px",
                      fontSize: "0.875rem",
                      backgroundColor: "#e5e7eb",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Copy
                  </button>
                  <button
                    onClick={() => {
                      const element = document.createElement("a");
                      const file = new Blob([tailored], { type: "text/plain" });
                      element.href = URL.createObjectURL(file);
                      element.download = "tailored-resume.txt";
                      document.body.appendChild(element);
                      element.click();
                      document.body.removeChild(element);
                    }}
                    style={{
                      padding: "4px 12px",
                      fontSize: "0.875rem",
                      backgroundColor: "#2563eb",
                      color: "white",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Download
                  </button>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "white",
                  padding: "16px",
                  borderRadius: "4px",
                  border: "1px solid #d1d5db",
                  maxHeight: "384px",
                  overflow: "auto",
                  whiteSpace: "pre-wrap",
                  fontSize: "0.875rem",
                }}
              >
                {tailored}
              </div>
            </div>
          )}
        </div>
      )}

      <footer
        style={{
          marginTop: "48px",
          textAlign: "center",
          fontSize: "0.75rem",
          color: "#6b7280",
        }}
      >
        <p>Resume Tailor App &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
