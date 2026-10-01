
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes.ats import router as ats_router

app = FastAPI(
    title="ATS Resume Scanner API",
    description="Backend API for an ATS Resume Scanner",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {
        "message": "ATS Resume Scanner API is running"
    }


app.include_router(ats_router)