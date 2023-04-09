// import axios from 'axios';
import { useState } from "react";
// import { useHistory } from "react-router-dom";

import api from '../Config';
import FileUploader from "./FileUploader";
import MSlider from "./MSlider";

const UploadForm = ()=>{
    // const history = useHistory();
    const [selectedFile, setSelectedFile] = useState(null);

    const handleBeamSize = (newValue) =>{

    };
    const handleTemperature = (newValue) =>{
        
    };
    const handleBranchFactor = (newValue) =>{
        
    };
    const handleNotes = (newValue) =>{
        
    };
    const handleTotalSteps = (newValue) =>{
        
    }
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
        // window.location="/music";
        // history.push("/music")
        
    };
    return (
        <div className="row justify-content-center">
            <form >
                <FileUploader
                    onFileSelectSuccess={(file) => setSelectedFile(file)}
                    onFileSelectError={({ error }) => alert(error)}
                />
                <MSlider title="Temperature" default="60" onChange={handleTemperature} />
                <MSlider title="Beam Size" default="30" onChange={handleBeamSize} />
                <MSlider title="Branch Factor" default="30" onChange={handleBranchFactor} />
                <MSlider title="Notes Per Sec" default="30" onChange={handleNotes} />
                <MSlider title="Total Steps" default="30" onChange={handleTotalSteps} />
                <button onClick={submitForm} className="btn btn-primary bg-dark justify-content-right">Mix</button>
            </form>
        </div>
    )
};

export default UploadForm;