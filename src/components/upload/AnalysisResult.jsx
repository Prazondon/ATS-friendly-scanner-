function AnalysisResult({ analysisResult }) {


    // If analysis has not completed,
    // show nothing
    if (!analysisResult) {
        return null;
    }


    return (

        <div className="analysis-result">

            <h2>
                Analysis Complete 🎉
            </h2>


            <div className="score-card">

                <h3>
                    Resume Score
                </h3>

                <h1>
                    {analysisResult.score}%
                </h1>

            </div>



            <div className="skills-section">

                <h3>
                    Your Strengths
                </h3>


                <ul>

                    {
                        analysisResult.strengths.map(
                            (skill, index) => (

                                <li key={index}>
                                    {skill}
                                </li>

                            )
                        )
                    }

                </ul>

            </div>




            <div className="skills-section">

                <h3>
                    Skills To Improve
                </h3>


                <ul>

                    {
                        analysisResult.missing.map(
                            (skill, index) => (

                                <li key={index}>
                                    {skill}
                                </li>

                            )
                        )
                    }

                </ul>


            </div>


        </div>

    );

}


export default AnalysisResult;