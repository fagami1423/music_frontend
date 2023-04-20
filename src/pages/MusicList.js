import { useEffect, useState } from 'react';
import api from '../Config';
import { baseUrl } from '../Config';
import '../css/MusicList.css';

import NoteImage from '../components/NoteImage';
import MusicPlayerSlider from '../components/MusicPlayerSlider';

const dummyImage = 'https://dummyimage.com/256x256/000/fff&text=Album';

const MusicList = () => {
  const [music, setMusic] = useState([]);
  const [selectSong, setSelectSong] = useState('');

  const handleSelect = (selected) => {
    console.log(selected);
    setSelectSong(selected);
  };

  useEffect(() => {
    const getDuration = (url, callback) => {
        const sound = baseUrl + url;
        const audio = new Audio(sound);
        let duration = 0;
        audio.addEventListener('loadedmetadata', function () {
          duration = audio.duration.toFixed(2);
          callback(duration);
        });
    };
      

    const fetchData = async () => {
        try {
          const response = await api.get('/get-music');
          const musiclist = [];
          for (const item of response.data.file_urls) {
            const duration = await new Promise((resolve) => {
              getDuration(item.url, (duration) => {
                resolve(duration);
              });
            });
            musiclist.push({
              url: item.url,
              filename: item.filename,
              duration,
            });
          }
          setMusic(musiclist);
          console.log(musiclist[0]);
          setSelectSong(musiclist[0]);
        } catch (error) {
          console.error(error);
        }
      };
  
    fetchData();
  }, []);

  return (
    <>
       <NoteImage />
      <div className="container">
        <div className="row">
          <div className="col-12">
            {music ? (
              <ul className="list-unstyled">
                {music.map((item, index) => (
                  <li key={item.filename} className="my-2">
                    <div
                      onClick={() => handleSelect(item)}
                      className={`transparent_card`}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="row no-gutters">
                        <div className="col-md-1 d-flex align-items-center justify-content-center">
                          <span>{index + 1}</span>
                        </div>
                        <div className="col-md-2 align-left">
                          <img alt="can't win - Chilling Sunday"
              src={process.env.PUBLIC_URL+'/sidebar1.gif'} className="card-img" height="50" width="50" />
                        </div>
                        <div className="col-md-7 d-flex">
                          <div className="card-body">
                            <h5 className="card-title mb-0">{item.filename}</h5>
                          </div>
                        </div>
                        <div className="col-md-2 d-flex align-items-center justify-content-right">
                          <span>{item.duration}</span>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <MusicPlayerSlider musicFile={selectSong} />
      </div>
    </>
  );
};

export default MusicList;
