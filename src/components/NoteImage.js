const NoteImage = () => {
    return (
        <div className="row justify-content-center">
            <img className="music-background" src={process.env.PUBLIC_URL+'/png/strings.png'} alt="Main"></img>
        </div>
    )
};

export default NoteImage;