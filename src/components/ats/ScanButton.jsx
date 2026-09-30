function ScanButton({
    selectedFile,
    jobDescription,
    isScanning,
    onScan
}) {

    const isDisabled =
        !selectedFile ||
        !jobDescription.trim() ||
        isScanning;

    return (
        <button
            onClick={onScan}
            disabled={isDisabled}
        >

            {
                isScanning
                    ? "Scanning Resume..."
                    : "Scan Resume"
            }

        </button>
    );
}

export default ScanButton;