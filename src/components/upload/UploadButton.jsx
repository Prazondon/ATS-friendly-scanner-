function UploadButton({
  selectedFile,
  isAnalyzing,
  onAnalyze,
}) {
  return (
    <div>
      <button
        type="button"
        disabled={!selectedFile || isAnalyzing}
        onClick={onAnalyze}
      >
        {selectedFile ? "Analyze Resume": "Select Resume First" }
        {isAnalyzing ? "Analyzing..." : "Analyze Resume"}
      </button>

      {analysisComplete && (
        <div>
          <h3>✅ Analysis Complete</h3>
          <p>Resume Score: 86%</p>
        </div>
      )}
    </div>
  );
}

export default UploadButton;