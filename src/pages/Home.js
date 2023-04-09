import UploadForm from '../components/UploadForm'
import NoteImage from '../components/NoteImage'
import MSlider from "../components/MSlider";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faDrum, faKeyboard, faMusic } from "@fortawesome/free-solid-svg-icons";

import { useState } from 'react';


const Home=()=>{
    const [showGenerate, setShowGenerate] = useState(false);
    const [showMix, setShowMix] = useState(false);
    const handleGenerateClick = () => {
        setShowGenerate(true);
        setShowMix(false);
      };
    
      const handleMixClick = () => {
        setShowGenerate(false);
        setShowMix(true);
      };
    return (
        <>
            <NoteImage />
            {/* <div className="row"> */}
            <div className="row buttons">
                <div className={` col-6 generate-button ${showGenerate ? "active" : ""}`} onClick={handleGenerateClick}>
                    <label htmlFor="generate" className="button-label">
                    <i className="fas fa-music"></i>
                    Generate
                    </label>
                    <input type="radio" id="generate" name="button" value="generate" className="button-radio" />
                </div>
                <div className={`col-6 mix-button ${showMix ? "active" : ""}`} onClick={handleMixClick}>
                    <label htmlFor="mix" className="button-label">
                    <i className="fas fa-headphones"></i>
                    Mix
                    </label>
                    <input type="radio" id="mix" name="button" value="mix" className="button-radio" />
                </div>
            {/* </div> */}
                
                <div className={`generate-options ${showGenerate ? "show" : ""}`}>
                    <h2>Select the Type </h2>
                    <div className="options">
                    <label htmlFor="drum" className="tile">
                    <input type="radio" id="drum" name="instrument" value="drum" className="radio-button" />
                    Drum
                    </label>
                    <label htmlFor="piano" className="tile">
                    <input type="radio" id="piano" name="instrument" value="piano" className="radio-button" />
                    Piano
                    </label>
                    <label htmlFor="groove" className="tile">
                    <input type="radio" id="groove" name="instrument" value="groove" className="radio-button" />
                    Groove
                    </label>
                    <div className="sliders ">
                        <MSlider  title="number of batches" default="40"/>
                        <MSlider  title="number of " default="40"/>
                    </div>
                    </div>
                </div>
                <div className={`mix-options ${showMix ? "show" : ""}`}>
                    <h2>Mix Options</h2>
                    <UploadForm />
                    {/* <div className="options">
                    <label htmlFor="file">Upload File:</label>
                    <input type="file" id="file" name="file" />
                    <div className="sliders">
                        <label htmlFor="slider3">Slider 3:</label>
                        <input type="range" id="slider3" name="slider3" min="0" max="10" />
                        <label htmlFor="slider4">Slider 4:</label>
                        <input type="range" id="slider4" name="slider4" min="0" max="10" />
                    </div>
                    <select>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                    </div> */}
                </div>
                            
            </div>
        </>
    )
};

export default Home;