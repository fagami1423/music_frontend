import UploadForm from '../components/UploadForm'
import NoteImage from '../components/NoteImage'

const Home=()=>{
    return (
        <>
            <NoteImage />
            <div className="row">
                <UploadForm />
            </div>
        </>
    )
};

export default Home;