import { useState } from "react";
import FileUploader from "./FileUploader";

const UploadForm = ()=>{
    const [selectedFile, setSelectedFile] = useState(null);

    const submitForm = () => {
        const formData = new FormData();
        formData.append("file",selectedFile);

        console.log(formData)
    };
    return (
        <div className="row">
            <form>
                <FileUploader
                    onFileSelectSuccess={(file) => setSelectedFile(file)}
                    onFileSelectError={({ error }) => alert(error)}
                />
                <button onClick={submitForm} className="btn btn-primary justify-content-right">Generate</button>

            </form>
        </div>
    )
};

export default UploadForm;