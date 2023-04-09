// import axios from 'axios';
import { useState } from "react";
// import { useHistory } from "react-router-dom";

import api from '../Config';
import FileUploader from "./FileUploader";

const UploadForm = ()=>{
    // const history = useHistory();
    const [selectedFile, setSelectedFile] = useState(null);

    const submitForm = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file",selectedFile);
        for(var pair of formData.entries()) {
            console.log(`${pair[0]}: ${pair[1]}`);
          }
        let axiosConfig = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
          };
        api.post(`/upload-music`, formData, axiosConfig);
        window.location="/music";
        // history.push("/music")
        
    };
    return (
        <div className="row">
            <form >
                <FileUploader
                    onFileSelectSuccess={(file) => setSelectedFile(file)}
                    onFileSelectError={({ error }) => alert(error)}
                />
                <button onClick={submitForm} className="btn btn-primary bg-dark justify-content-right">Mix</button>
            </form>
        </div>
    )
};

export default UploadForm;