function FilePreview({

    selectedFile,

    setSelectedFile

}){

    if(!selectedFile){

        return null;

    }

    return(

        <div className="file-preview">

            <h3>Selected File</h3>

            <p>

                📄 {selectedFile.name}

            </p>

            <p>

                Size :

                {(selectedFile.size/1024).toFixed(2)}

                KB

            </p>

            <button

                onClick={()=>setSelectedFile(null)}

            >

                Remove File

            </button>

        </div>

    );

}

export default FilePreview;