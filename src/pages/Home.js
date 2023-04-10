import UploadForm from "../components/UploadForm";
import NoteImage from "../components/NoteImage";
import MSlider from "../components/MSlider";
import api from "../Config";


import { useState } from "react";
import { selectClasses } from "@mui/material";

const Home = () => {
    const [numBar, setNumBars] = useState(0);
    const [numSample, setNumSample] = useState(0);
    const [selectedInstrument, setSelectedInstrument] = useState(null);
    const [showGenerate, setShowGenerate] = useState(false);
    const [showMix, setShowMix] = useState(false);
    const [inputValue, setInputValue] = useState('');

    // parameters
    
    const handleGenerateClick = () => {
        setShowGenerate(true);
        setShowMix(false);
    };

    const handleMixClick = () => {
        setShowGenerate(false);
        setShowMix(true);
    };

    const handleSlider1Change = (sliderValue) => {
        setNumBars(sliderValue);
        // Do something with the sliderValue
    };
    const handleSlider2Change = (sliderValue) => {
        setNumSample(sliderValue);
        // Do something with the sliderValue
    };
    const handleInstrumentChange = (event) => {
        setSelectedInstrument(event.target.value);
    };
    const handleFilename = (event) => {
        setInputValue(event.target.value);
    }
    const handleGenerateButton = () => {
        if(selectedInstrument === null || numBar === 0 || numSample === 0){
            alert("Pease select the parameters before you party");
        } else {
            const oj= {
                "numbars":numBar,
                "numSample":numSample,
                "instrument":selectedInstrument,
                "filename":inputValue
            }
            let axiosConfig = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            // api.post(`/`+selectedInstrument, oj, axiosConfig);
            // window.location="/music-list";
            console.log(oj);
            console.log("Generate the music ");
        }  
    };

    return (
        <>
          <NoteImage />
          <div className="row">
            <div className="buttons">
              <div className={`col-6 generate-button ${showGenerate ? "active" : ""}`} onClick={handleGenerateClick}>
              
                <label htmlFor="generate" className="button-label">
                  <i className="fas fa-music"></i>
                  <input type="radio" id="generate" name="button" value="generate" className="button-radio" />
                  Generate
                </label>
               
              </div>
              <div className={`col-6 mix-button ${showMix ? "active" : ""}`} onClick={handleMixClick}>
                
                <label htmlFor="mix" className="button-label">
                  <i className="fas fa-headphones"></i>
                  <input type="radio" id="mix" name="button" value="mix" className="button-radio" />
                  Mix
                </label>
                
              </div>
            </div>
            <div className={`row generate-options ${showGenerate ? "show" : ""}`}>
              <h2>Select Intstrument</h2>
              <div className="options">
                <label htmlFor="drum" className="tile">
                  <input type="radio" id="drum" name="instrument" value="drum" className="radio-button"  onChange={handleInstrumentChange} />
                  Drum
                </label>
                <label htmlFor="piano" className="tile">
                  <input type="radio" id="piano" name="instrument" value="piano" className="radio-button"  onChange={handleInstrumentChange} />
                  Piano
                </label>
                <label htmlFor="groove" className="tile">
                  <input type="radio" id="groove" name="instrument" value="groove" className="radio-button"  onChange={handleInstrumentChange} />
                  Groove
                </label>
                <div className="row sliders justify-content-center">
                  <MSlider title="Number of Bars" default="60" onChange={handleSlider1Change} />
                  <MSlider title="Number of Samples" default="30" onChange={handleSlider2Change} />
                </div>
                
                <input className="bg-dark color-white" style={{'color':'white','width':"38%"}} id="filename" value={inputValue} placeholder="Enter filename" name="filename" onChange={handleFilename}></input>
                
                <button onClick={handleGenerateButton} className="btn btn-secondary">
                  Let's Party
                </button>
              </div>
            </div>
            <div className={`row justify-content-center mix-options ${showMix ? "show" : ""}`}>
              <h2>Mix Options</h2>
              <UploadForm />
            </div>
          </div>
        </>
      );
};

export default Home;