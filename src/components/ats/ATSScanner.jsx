import { useState } from "react";

import UploadBox from "./UploadBox";
import FilePreview from "./FilePreview";
import JobDescription from "./JobDescription";
import ScanButton from "./ScanButton";
import ValidationMessage from "./ValidationMessage";
import ATSResult from "./ATSResult";

function ATSScanner() {

    const [selectedFile, setSelectedFile] = useState(null);

    const [jobDescription, setJobDescription] = useState("");

    const [isScanning, setIsScanning] = useState(false);

    const [atsResult, setAtsResult] = useState(null);

    const [error, setError] = useState("");

    const handleScan = () => {

        if (!selectedFile) {
            setError("Please upload your resume.");
            return;
        }

        if (!jobDescription.trim()) {
            setError("Please enter a job description.");
            return;
        }

        setError("");

        setAtsResult(null);

        setIsScanning(true);

        // Temporary fake ATS result
        setTimeout(() => {

            const fakeResult = {
                score: 78,

                matchedKeywords: [
                    "Python",
                    "FastAPI",
                    "PostgreSQL",
                    "Docker",
                    "Git"
                ],

                missingKeywords: [
                    "React",
                    "AWS",
                    "GitHub Actions"
                ]
            };

            setAtsResult(fakeResult);

            setIsScanning(false);

        }, 2000);
    };

    return (
        <section className="ats-scanner">

            <h1>ATS Resume Scanner</h1>

            <p>
                Check how well your resume matches a job description.
            </p>

            <UploadBox
                setSelectedFile={setSelectedFile}
                setError={setError}
            />

            <ValidationMessage
                error={error}
            />

            <FilePreview
                selectedFile={selectedFile}
                setSelectedFile={setSelectedFile}
            />

            <JobDescription
                jobDescription={jobDescription}
                setJobDescription={setJobDescription}
            />

            <ScanButton
                selectedFile={selectedFile}
                jobDescription={jobDescription}
                isScanning={isScanning}
                onScan={handleScan}
            />

            <ATSResult
                atsResult={atsResult}
            />

        </section>
    );
}

export default ATSScanner;