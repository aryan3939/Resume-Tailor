import os
import requests
from dotenv import load_dotenv

# Load the API key from .env file
load_dotenv()

OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")
OPENROUTER_API_URL = "https://openrouter.ai/api/v1/chat/completions"

HEADERS = {
    "Authorization": f"Bearer {OPENROUTER_API_KEY}",
    "Content-Type": "application/json"
}

MODEL = "mistralai/mistral-7b-instruct:free"  # Can be changed to another model if desired

def evaluate_resume(resume_text: str, job_description: str):
    prompt = f"""
You are a hiring expert. Compare the following resume with the job description.
- Score how well the resume matches the JD (0 to 100).
- List 5 improvement suggestions.

Resume:
{resume_text}

Job Description:
{job_description}
"""
    payload = {
        "model": MODEL,
        "messages": [{"role": "user", "content": prompt}]
    }

    response = requests.post(OPENROUTER_API_URL, headers=HEADERS, json=payload)
    result = response.json()

    # Extract the response content, containing score and suggestions
    content = result["choices"][0]["message"]["content"]

    # Optional: Extract score from the response
    score = extract_score_from_response(content)
    return score, content.strip()

def extract_score_from_response(content: str) -> int:
    import re
    match = re.search(r"score\s*[:\-]?\s*(\d+)", content.lower())
    if match:
        return int(match.group(1))
    return 0


def generate_tailored_resume(resume_text: str, job_description: str):
    prompt = f"""
You are a hiring expert. Given the following resume and job description:
- Revise the resume to match the job description.
- The tailored resume should focus on skills and experiences relevant to the job.

Resume:
{resume_text}

Job Description:
{job_description}
"""
    payload = {
        "model": MODEL,
        "messages": [{"role": "user", "content": prompt}]
    }

    response = requests.post(OPENROUTER_API_URL, headers=HEADERS, json=payload)
    result = response.json()

    tailored_resume = result["choices"][0]["message"]["content"]
    return tailored_resume.strip()
