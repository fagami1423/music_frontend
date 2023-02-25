import React from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';

import {useRef,useState} from "react";

const FileUploader = ({onFileSelectSuccess,onFileSelectError}) => {
    const fileInput = useRef(null)
    const [element, setElement] = useState(<span>Upload file   </span>);

    const handleFileInput = (e) => {
        // handle validations
        
        const file = e.target.files[0];
        const cancel = document.getElementById("cancel");
        cancel.style.display = "block";
        setElement(<span>{file.name}</span>)
        onFileSelectSuccess(file)
        // if (file.size > 100000)
        //     onFileSelectError({ error: "File size cannot exceed more than 2MB" });
        // else onFileSelectSuccess(file);

    };
    const handleCancel = (e) => {
        e.preventDefault();
        const cancel = document.getElementById("cancel");
        cancel.style.display = "none";
        setElement(<span>Upload file   </span>)
        onFileSelectSuccess(null)
    }

    return(
        <div className="file-uploader"> 
            <label htmlFor="file-upload">
                {element}<img style={{"height":"40px","width":"40px","background":"transparent"}} src={process.env.PUBLIC_URL+'/png/fileupload.png'} alt="icon" />
            </label>
            <input id="file-upload" type="file" onChange={handleFileInput}/>
            <button id="cancel" onClick={handleCancel} className="btn btn-primary">x</button>
        </div>
    )
}

export default FileUploader;

