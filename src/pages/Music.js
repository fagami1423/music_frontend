
import MSlider from "../components/MSlider";
import NoteImage from '../components/NoteImage'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Music=()=>{
    const [temperature, setTemperature] = React.useState(30);
    const [humidity, setHumidity] = React.useState(40);
    const [pressure, setPressure] = React.useState(30);
    const [wind, setWind] = React.useState(60);

    const handleTemperature = (event, newValue) => {
        setTemperature(newValue);
    };
    const handleHumidity = (event, newValue) => {
        setHumidity(newValue);
    };
    const handlePressure = (event, newValue) => {
        setPressure(newValue);
    };
    const handleWind = (event, newValue) => {
        setWind(newValue);
    };
    const handlSubmit = (event) => {
        event.preventDefault();
        console.log(temperature);
        console.log(humidity);
        console.log(pressure);
        console.log(wind);
    };
    return (
        <>
            <NoteImage />
            <div className="row justify-content-center">

                <Box sx={{ width: 500,textAlign:'left' }}>
                    <Typography id="input-slider" gutterBottom >
                        Parameters
                    </Typography>
                </Box>
                <MSlider onChange={handleTemperature} title="Parameter1" default="30" />
                <MSlider  title="Parameter2" default="40"/>
                <MSlider  title="Parameter3" default="30"/>
                <MSlider  title="Parameter4" default="60"/>
                <MSlider  title="Parameter5" default="30"/>
                <form>
                <button onClick={handlSubmit} className="btn btn-primary">Generate</button>
                </form>
            </div>
        
        </>
    )
};

export default Music;