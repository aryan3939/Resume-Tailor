import os
import pdfplumber
import docx

def extract_text(file_path: str, filename: str) -> str:
    ext = os.path.splitext(filename)[1].lower()

    if ext == ".pdf":
        return extract_text_from_pdf(file_path)
    elif ext in [".docx", ".doc"]:
        return extract_text_from_docx(file_path)
    else:
        raise ValueError("Unsupported file format")

def extract_text_from_pdf(file_path: str) -> str:
    text = ""
    with pdfplumber.open(file_path) as pdf:
        for page in pdf.pages:
            text += page.extract_text() or ""
    return text.strip()

def extract_text_from_docx(file_path: str) -> str:
    doc = docx.Document(file_path)
    text = "\n".join(para.text for para in doc.paragraphs)
    return text.strip()
