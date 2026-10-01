
from fastapi import APIRouter, UploadFile, File, Form, HTTPException

router = APIRouter(
    prefix="/ats",
    tags=["ATS Scanner"]
)


@router.post("/scan")
async def scan_resume(
    resume: UploadFile = File(...),
    job_description: str = Form(...)
):
    # Validate the uploaded file
    allowed_types = [
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ]

    if resume.content_type not in allowed_types:
        raise HTTPException(
            status_code=400,
            detail="Only PDF and DOCX files are allowed."
        )

    # Temporary response for testing
    return {
        "message": "Resume received successfully",
        "filename": resume.filename,
        "content_type": resume.content_type,
        "job_description_length": len(job_description)
    }