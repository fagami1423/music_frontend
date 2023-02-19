import MusicPlayerSlider from "../components/MusicPlayerSlider";
import NoteImage from '../components/NoteImage'


function MusicList(){
    return (
        <>
            <NoteImage />
            <div className="row justify-content-center">
                <MusicPlayerSlider />

            </div>

        </>
    )
};

export default MusicList;