import { useState } from "react";

import UploadBox from "./UploadBox";
import FilePreview from "./FilePreview";
import UploadButton from "./UploadButton";
import ValidationMessage from "./ValidationMessage";
import AnalysisResult from "./AnalysisResult";

function UploadSection() {

    // Stores the uploaded file
    const [selectedFile, setSelectedFile] = useState(null);

    // Controls loading state
    const [isAnalyzing, setIsAnalyzing] = useState(false);

    // Stores the analysis returned by the backend
    const [analysisResult, setAnalysisResult] = useState(null);

    // Stores validation errors
    const [error, setError] = useState("");

    const handleAnalyze = async () => {

    if (!selectedFile) return;

    setAnalysisResult(null);
    setIsAnalyzing(true);
    setError("");

    const formData = new FormData();

    formData.append("file", selectedFile);

    try {

        const response = await fetch(
            "http://localhost:8000/analyze",
            {
                method: "POST",
                body: formData
            }
        );

        if (!response.ok) {
            throw new Error("Analysis failed");
        }

        const data = await response.json();

        setAnalysisResult(data);

    } catch (error) {

        setError(error.message);

    } finally {

        setIsAnalyzing(false);

    }
};

    return (

        <section className="upload-section">

            <h2>Upload Resume</h2>

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

            <UploadButton
                selectedFile={selectedFile}
                isAnalyzing={isAnalyzing}
                onAnalyze={handleAnalyze}
            />

            <AnalysisResult
                analysisResult={analysisResult}
            />

        </section>

    );

}

export default UploadSection;