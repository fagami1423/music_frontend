const NoteImage = () => {
    return (
        <div className="row justify-content-center">
            <div className="image-container">
                <img className="music-background" src={process.env.PUBLIC_URL+'/png/strings.png'} alt="Main"></img>
            </div>
        </div>
    )
};

export default NoteImage;