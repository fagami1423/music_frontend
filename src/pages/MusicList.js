function MusicList(){
    return (
        <>
            <div className="row justify-content-center">
                <img className="music-background" src={process.env.PUBLIC_URL+'/main.jpg'} alt="Main"></img>
            </div>
        </>
    )
};

export default MusicList;