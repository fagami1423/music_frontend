// import axios from 'axios';
import { useState } from "react";
// import { useHistory } from "react-router-dom";

import api from '../Config';
import FileUploader from "./FileUploader";
import MSlider from "./MSlider";

const UploadForm = ()=>{
    // const history = useHistory();
    const [selectedFile, setSelectedFile] = useState(null);
    const [beamSize, setBeamSize] = useState(0);
    const [temperature, setTemperature] = useState(0);
    const [branchFactor, setBranchFactor] = useState(0);
    const [notes, setNotes] = useState(0);
    const [totalSteps, setTotalSteps] = useState(0);

    const handleBeamSize = (newValue) =>{
        setBeamSize(newValue);
    };
    const handleTemperature = (newValue) =>{
        setTemperature(newValue);
    };
    const handleBranchFactor = (newValue) =>{
        setBranchFactor(newValue);
    };
    const handleNotes = (newValue) =>{
        setNotes(newValue);
    };
    const handleTotalSteps = (newValue) =>{
        setTotalSteps(newValue);
    };
    const submitForm = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file",selectedFile);
        formData.append('beamsize', beamSize);
        formData.append('temperature', temperature);
        formData.append('branchFactor', branchFactor);
        formData.append('notes', notes);
        formData.append('totalSteps', totalSteps);

        // for(var pair of formData.entries()) {
        //     console.log(`${pair[0]}: ${pair[1]}`);
        //   }
        let axiosConfig = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
          };
        console.log("Before api hit ");

        try {
            const response = await api.post(`/upload-music`, formData, axiosConfig);
            window.location="/musiclist";
            console.log(response.data);
        
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    
        
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