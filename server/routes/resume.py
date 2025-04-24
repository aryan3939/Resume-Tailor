from fastapi import APIRouter, UploadFile, File, Form
import tempfile
from utils.parser import extract_text
from services.llm import evaluate_resume, generate_tailored_resume

resume_router = APIRouter()

@resume_router.post("/upload")
async def upload_resume(resume: UploadFile = File(...), jd: str = Form(...)):
    # 1. Save uploaded resume temporarily
    temp_file = tempfile.NamedTemporaryFile(delete=False)
    temp_file.write(await resume.read())
    temp_file.close()

    # 2. Extract resume text
    resume_text = extract_text(temp_file.name, resume.filename)

    # 3. Evaluate resume using OpenRouter
    score, suggestions = evaluate_resume(resume_text, jd)

    return {
        "score": score,
        "suggestions": suggestions
    }

@resume_router.post("/rewrite")
async def rewrite_resume(resume: UploadFile = File(...), jd: str = Form(...)):
    # 1. Save uploaded resume temporarily
    temp_file = tempfile.NamedTemporaryFile(delete=False)
    temp_file.write(await resume.read())
    temp_file.close()

    # 2. Extract resume text
    resume_text = extract_text(temp_file.name, resume.filename)

    # 3. Generate tailored resume using OpenRouter
    tailored_resume = generate_tailored_resume(resume_text, jd)

    return {
        "tailored_resume": tailored_resume
    }
