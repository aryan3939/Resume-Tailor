# Resume Tailor App - Backend Server

This is the backend server component of the Resume Tailor App, built with FastAPI and Python.

## 🏗️ Architecture

The server is built using:

- FastAPI for the web framework
- Uvicorn as the ASGI server
- OpenRouter API for AI-powered resume analysis
- CORS middleware for cross-origin requests

## 📁 Directory Structure

```
server/
├── main.py              # Main application entry point
├── routes/              # API route handlers
│   └── resume.py       # Resume-related endpoints
├── requirements.txt     # Python dependencies
└── README.md           # This file
```

## 🔧 Setup

1. **Create and activate virtual environment**:

   ```bash
   # Create virtual environment
   python -m venv venv

   # Activate (Windows CMD)
   venv\Scripts\activate

   # Activate (Windows PowerShell)
   .\venv\Scripts\Activate.ps1

   # Activate (Linux/Mac)
   source venv/bin/activate
   ```

2. **Install dependencies**:

   ```bash
   pip install -r requirements.txt
   ```

3. **Set up environment variables**:
   Create a `.env` file in the server directory:
   ```
   OPENROUTER_API_KEY=your_api_key_here
   ```

## 🚀 Running the Server

1. **Development mode**:

   ```bash
   python main.py
   ```

   The server will start at http://127.0.0.1:8000

2. **Production mode**:
   ```bash
   uvicorn main:app --host 0.0.0.0 --port 8000
   ```

## 📡 API Endpoints

### POST /upload

Analyzes a resume against a job description.

**Request Body**:

```json
{
  "resume": "file",
  "jd": "string"
}
```

**Response**:

```json
{
  "score": number,
  "suggestions": "string"
}
```

### POST /rewrite

Tailors a resume based on a job description.

**Request Body**:

```json
{
  "resume": "file",
  "jd": "string"
}
```

**Response**:

```json
{
  "tailored_resume": "string"
}
```

## 🔍 API Documentation

The server provides automatic API documentation:

- Swagger UI: http://127.0.0.1:8000/docs
- ReDoc: http://127.0.0.1:8000/redoc

## 🛠️ Development

### Adding New Routes

1. Create a new file in the `routes` directory
2. Define your route handlers
3. Import and include the router in `main.py`

Example:

```python
# routes/new_route.py
from fastapi import APIRouter

router = APIRouter()

@router.get("/endpoint")
async def endpoint():
    return {"message": "Hello World"}
```

### Error Handling

The server uses FastAPI's built-in error handling. Custom error handlers can be added in `main.py`.

## 🐛 Troubleshooting

### Common Issues

1. **CORS Errors**:

   - Verify CORS settings in `main.py`
   - Check if the frontend URL is allowed

2. **API Key Issues**:

   - Ensure `.env` file exists
   - Verify API key is valid

3. **File Upload Issues**:
   - Check file size limits
   - Verify file types are allowed

## 📚 Dependencies

Key dependencies and their purposes:

- `fastapi`: Web framework
- `uvicorn`: ASGI server
- `python-multipart`: File upload handling
- `python-dotenv`: Environment variable management
- `requests`: HTTP client for API calls

## 🔒 Security

- CORS is configured to allow specific origins
- File uploads are validated
- API keys are stored in environment variables
- Input validation is performed on all endpoints

## 📈 Performance

- Uses async/await for better performance
- Implements proper error handling
- Includes request validation
- Supports file streaming for large uploads
