
import MSlider from "../components/MSlider";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Music=()=>{
    return (
        <>
            <div className="row justify-content-center">
                <img className="music-background" src={process.env.PUBLIC_URL+'/main.jpg'} alt="Main"></img>
                <p>Generate the music with AI</p>
            </div>
            <div className="row justify-content-center">

                <Box sx={{ width: 500,textAlign:'left' }}>
                    <Typography id="input-slider" gutterBottom >
                        Parameters
                    </Typography>
                </Box>
                <MSlider  title="Parameter1" default="30" />
                <MSlider  title="Parameter2" default="30"/>
                <MSlider  title="Parameter3" default="30"/>
                <MSlider  title="Parameter4" default="30"/>
                <MSlider  title="Parameter5" default="30"/>
                <form>
                <button className="btn btn-primary">Generate</button>
                </form>
            </div>
        
        </>
    )
};

export default Music;