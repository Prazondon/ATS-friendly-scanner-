function ATSResult({ atsResult }) {

    if (!atsResult) {
        return null;
    }

    return (
        <div className="ats-result">

            <h2>
                ATS Scan Result
            </h2>

            <div className="score-card">

                <h3>
                    ATS Match Score
                </h3>

                <h1>
                    {atsResult.score}%
                </h1>

            </div>

            <div className="skills-section">

                <h3>
                    Matched Keywords
                </h3>

                <ul>

                    {atsResult.matchedKeywords.map(
                        (keyword) => (
                            <li key={keyword}>
                                ✓ {keyword}
                            </li>
                        )
                    )}

                </ul>

            </div>

            <div className="skills-section">

                <h3>
                    Missing Keywords
                </h3>

                <ul>

                    {atsResult.missingKeywords.map(
                        (keyword) => (
                            <li key={keyword}>
                                ✗ {keyword}
                            </li>
                        )
                    )}

                </ul>

            </div>

        </div>
    );
}

export default ATSResult;