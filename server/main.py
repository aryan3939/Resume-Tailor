from fastapi import FastAPI
from routes.resume import resume_router

app = FastAPI()
app.include_router(resume_router)
