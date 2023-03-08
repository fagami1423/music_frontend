
import { useEffect, useLayoutEffect, useState } from 'react';
import axios from 'axios';
import baseUrl from '../Config';

import NoteImage from '../components/NoteImage'
import MusicPlayerSlider from "../components/MusicPlayerSlider";

const MusicList = () =>{
    const [music, setMusic] = useState([]);
    const [selectSong, setSelectSong] = useState("");
    const handleSelect = (selected) => {  
        setSelectSong(selected);  
    }; 

    useEffect(() => {
        axios.get(`${baseUrl}/get-music`)
            .then((response) => {
                
                setMusic(response.data.file_urls);
                setSelectSong(response.data.file_urls[0]);
            })
            .catch((error) => {
                console.log(error);
            });                       
      }, []);

    
    return (
        <>
            <NoteImage />
            <div className="row justify-content-left bg-dark">
                {music ? (
                    <ul className='list-unstyled'>
                        {music.map((item) => (
                            <li key={item.filename}>
                                <a onClick={() => handleSelect(item)} className="unstyled">{item.filename}</a>
                            </li>
                        ))}
                    </ul>
                ):(<div>loading...</div>)}
            </div>
            <div className="row justify-content-center">
                
                <MusicPlayerSlider musicFile={selectSong}  />

            </div>

        </>
    )
};

export default MusicList;