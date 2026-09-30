import "../../styles/ValidationMessage.css";

function ValidationMessage({ error }) {

    if (!error) {
        return null;
    }

    return (

        <div className="error-message">

            {error}

        </div>

    );

}

export default ValidationMessage;