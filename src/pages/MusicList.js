import { useEffect, useState, useRef } from 'react';
import api from '../Config';
import { baseUrl } from '../Config';
import '../css/MusicList.css';

import NoteImage from '../components/NoteImage';
import MusicPlayerSlider from '../components/MusicPlayerSlider';

const dummyImage = 'https://dummyimage.com/256x256/000/fff&text=Album';

const MusicList = () => {
  const [music, setMusic] = useState([]);
  const [selectSong, setSelectSong] = useState('');
  const [isItemSelected, setIsItemSelected] = useState(false);
  const [activeSong, setActiveSong] = useState(null);
  const [nextSongs, setNextSongs] = useState([]);
  const playingAudioRef = useRef(null);

  const handleSelect = (selected, index) => {
    console.log("selected",selected);
    setSelectSong(selected)
    setActiveSong(selected);
    setIsItemSelected(true);
    const updatedNextSongs = music.filter((song) => song !== selected);
    setNextSongs(updatedNextSongs);
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
          console.log("musiclist",musiclist[0]);
          setSelectSong(musiclist[0]);
        //   setActiveSong(musiclist[0]);
        } catch (error) {
          console.error(error);
        }
      };
  
    fetchData();
  }, []);

  return (
    <>
       {/* <NoteImage /> */}
      <div className="container ml-4">
        <div className="row">
          <div className="col-12">
            <h3> Queue</h3>
          {activeSong && (
              <div>
                
                <ul className="list-unstyled" style={{textAlign:"left"}}>
                    <h4 style={{marginLeft:"6px"}}>Now Playing:</h4>
                        
                        <li key={activeSong.filename} className="my-2">
                            <div
                            
                            className={`transparent_card`}
                            style={{ cursor: 'pointer' }}
                            >
                            <div className="row no-gutters">
                                <div className="col-md-1 d-flex align-items-left justify-content-center">
                                <span>{1}</span>
                                </div>
                                <div className="col-md-1 align-items-left">
                                <img alt="can't win - Chilling Sunday"
                                    src={process.env.PUBLIC_URL+'/animate1.gif'} className="card-img" height="50" width="50" />
                                </div>
                                <div className="col-md-7 d-flex">
                                <div className="card-body mt-3">
                                    <h5 className="card-title" style={{opacity:"1",color:"white"}}>{activeSong.filename}</h5>
                                </div>
                                </div>
                                <div className="col-md-2 d-flex align-items-center justify-content-center mt-2">
                                <span>{activeSong.duration}s</span>
                                </div>
                            </div>
                            </div>
                        </li>
                       
                    </ul>
              </div>
            )}
            {(activeSong && nextSongs.length > 0) ? ( 
                <>
                    <div className="row" style={{textAlign:"left"}}><h4 style={{marginLeft:"6px"}}>Next:</h4></div>
                    <ul className="list-unstyled" style={{textAlign:"left"}}>
                    
                        {nextSongs.map((item, index) => (
                        <li key={item.filename} className="my-2">
                            <div
                            onClick={() => handleSelect(item)}
                            className={`transparent_card`}
                            style={{ cursor: 'pointer' }}
                            >
                            <div className="row no-gutters align-items-left">
                                <div className="col-md-1 d-flex align-items-center justify-content-center">
                                <span>{index + 2}</span>
                                </div>
                                <div className="col-md-1">
                                <img alt="can't win - Chilling Sunday"
                                    src={process.env.PUBLIC_URL+'/sidebar1.gif'} className="card-img" height="50" width="50" />
                                </div>
                                <div className="col-md-7 d-flex align-items-left">
                                    <div className="card-body mt-3 align-items-left">
                                        <h5 className="card-title">{item.filename}</h5>
                                    </div>
                                </div>
                                <div className="col-md-2 d-flex align-items-center justify-content-center mt-2">
                                <span>{item.duration}s</span>
                                </div>
                            </div>
                            </div>
                        </li>
                        ))}
                    </ul>
              </>) : (
              <>
                
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
                          <div className="col-md-1 align-left">
                          <img alt="can't win - Chilling Sunday"
                              src={process.env.PUBLIC_URL+'/sidebar1.gif'} className="card-img" height="50" width="50" />
                          </div>
                          <div className="col-md-7 d-flex">
                          <div className="card-body mt-3">
                              <h5 className="card-title">{item.filename}</h5>
                          </div>
                          </div>
                          <div className="col-md-2 d-flex align-items-center justify-content-center mt-2">
                          <span>{item.duration}s</span>
                          </div>
                      </div>
                      </div>
                  </li>
                  ))}
              </ul>
        </>
            )}
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <MusicPlayerSlider musicFile={selectSong} isItemSelected={isItemSelected} />
      </div>
    </>
  );
};

export default MusicList;
