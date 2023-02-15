import UploadForm from '../components/UploadForm'

const Home=()=>{
    return (
        <>
            <div className="row justify-content-center">
                <img className="music-background" src={process.env.PUBLIC_URL+'/main.jpg'} alt="Main"></img>
            </div>
            <div className="row">
                <UploadForm />
            </div>
        </>
    )
};

export default Home;