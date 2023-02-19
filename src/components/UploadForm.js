import { useState } from "react";
import FileUploader from "./FileUploader";

// const formReducer = (state, event) => {
//     return {
//       ...state,
//       [event.target.name]: event.target.value
//     }
//    };
const UploadForm = ()=>{
    // const [formData, setFormData] = useReducer(formReducer, {});
    const [selectedFile, setSelectedFile] = useState(null);

    const submitForm = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        // formData.append("name","Raj");
        formData.append("file",selectedFile);
        //! post it to the axios api whenever is ready
        // axios
        // .post('url',formData)
        for(var pair of formData.entries()) {
            console.log(`${pair[0]}: ${pair[1]}`);
          }
        
        
    };
    return (
        <div className="row">
            <form onSubmit={submitForm} content-type="multipart/form-data">
                <FileUploader
                    onFileSelectSuccess={(file) => setSelectedFile(file)}
                    onFileSelectError={({ error }) => alert(error)}
                />
                <button type="submit" className="btn btn-primary bg-dark justify-content-right">Generate</button>
            </form>
        </div>
    )
};

export default UploadForm;