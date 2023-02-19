import React, {useState} from 'react';

import {useRef} from "react";

const FileUploader = ({onFileSelectSuccess,onFileSelectError}) => {
    const fileInput = useRef(null)

    const handleFileInput = (e) => {
        // handle validations
        const file = e.target.files[0];

        if (file.size > 10000)
            onFileSelectError({ error: "File size cannot exceed more than 2MB" });
        else onFileSelectSuccess(file);
    };

    return(
        <div className="file-uploader"> 
            <input type="file" onChange={handleFileInput}></input>
            <button onClick={e => fileInput.current && fileInput.current.click()} className="btn bg-dark btn-primary">x</button>
        </div>
    )
}

export default FileUploader;

