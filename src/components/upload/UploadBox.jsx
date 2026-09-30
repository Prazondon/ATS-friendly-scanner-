import { useRef , useState} from "react";
import "../../styles/UploadBox.css";


function UploadBox({ setSelectedFile, setError }) {

    const [isDragging, setIsDragging] = useState(false);
    
    const fileInputRef = useRef(null);


    const handleFileClick = () => {

        fileInputRef.current.click();

    };


    
    

    const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
    };

    const handleDragLeave = () => {
    setIsDragging(false);
    };

    const handleDrop = (event) => {
    event.preventDefault();

    setIsDragging(false);

    validateAndSelectFile(event.dataTransfer.files[0]);
    };
    


    const validateAndSelectFile = (file) => {
    if (!file) return;

    const allowedTypes = [
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
        setError("Only PDF and DOCX files are allowed.");
        return;
    }

    if (file.size > 5 * 1024 * 1024) {
        setError("File size must be less than 5MB.");
        return;
    }

    setError("");
    setSelectedFile(file);
    };


    const handleFileChange = (event) => {
    validateAndSelectFile(event.target.files[0]);
    };

    return (

        <div
            className={`upload-box ${isDragging ? "dragging" : ""}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >


            <div className="upload-icon">
                ☁️
            </div>


            <h3>
            {isDragging
                ? "Drop your resume here!"
                : "Drag & Drop Resume Here"}
            </h3>


            


            <button onClick={handleFileClick}>
                Browse Files
            </button>


            <input

                ref={fileInputRef}

                type="file"

                accept=".pdf,.docx"

                onChange={handleFileChange}

                hidden

            />


        </div>

    );

}


export default UploadBox;