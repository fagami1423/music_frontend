
import { useEffect, useState } from 'react';
// import axios from 'axios';
import api from '../Config';

import NoteImage from '../components/NoteImage'
import MusicPlayerSlider from "../components/MusicPlayerSlider";

const MusicList = () =>{
    const [music, setMusic] = useState([]);
    const [selectSong, setSelectSong] = useState("");
    const handleSelect = (selected) => {  
        setSelectSong(selected);  
    }; 

    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await api.get(`/get-music`);
              setMusic(response.data.file_urls);
              setSelectSong(response.data.file_urls[0]);
              console.log(response.data);
            } catch (error) {
              console.log(error);
            }
          };
          const intervalId = setInterval(() => {
            fetchData();
          }, 2000);
          return () => clearInterval(intervalId);
    }, []);
        
    

    
    return (
        <>
            <NoteImage />
            <div className="row justify-content-left bg-dark">
                {music ? (
                    <ul className='list-unstyled'>
                        {music.map((item) => (
                            <li key={item.filename}>
                                <span onClick={() => handleSelect(item)} className="unstyled">{item.filename}</span>
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