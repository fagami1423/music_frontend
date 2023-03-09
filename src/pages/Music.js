
import MSlider from "../components/MSlider";
import NoteImage from '../components/NoteImage'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Music=()=>{
    return (
        <>
            <NoteImage />
            <div className="row justify-content-center">

                <Box sx={{ width: 500,textAlign:'left' }}>
                    <Typography id="input-slider" gutterBottom >
                        Parameters
                    </Typography>
                </Box>
                <MSlider  title="Parameter1" default="30" />
                <MSlider  title="Parameter2" default="40"/>
                <MSlider  title="Parameter3" default="30"/>
                <MSlider  title="Parameter4" default="60"/>
                <MSlider  title="Parameter5" default="30"/>
                <form>
                <button className="btn btn-primary">Generate</button>
                </form>
            </div>
        
        </>
    )
};

export default Music;