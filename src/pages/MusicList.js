import MusicPlayerSlider from "../components/MusicPlayerSlider";

function MusicList(){
    return (
        <>
            <div className="row justify-content-center">
                <img className="music-background" src={process.env.PUBLIC_URL+'/main.jpg'} alt="Main"></img>
                <h2>Music Player</h2>
            </div>
            <div className="row justify-content-center">
                <MusicPlayerSlider />

            </div>

        </>
    )
};

export default MusicList;