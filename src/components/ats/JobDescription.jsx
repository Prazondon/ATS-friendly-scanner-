function JobDescription({
    jobDescription,
    setJobDescription
}) {

    return (
        <div className="job-description">

            <h2>Job Description</h2>

            <p>
                Paste the job description you want to compare your resume against.
            </p>

            <textarea
                value={jobDescription}
                onChange={(event) =>
                    setJobDescription(event.target.value)
                }
                placeholder="Paste the job description here..."
                rows="10"
            />

        </div>
    );
}

export default JobDescription;