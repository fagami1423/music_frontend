import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded';
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';

import MidiPlayer from 'midi-player-js';

import {api, baseUrl} from '../Config';

const Widget = styled('div')(({ theme }) => ({
  padding: 16,
  borderRadius: 16,
  width: '50%',
  maxWidth: '100%',
  margin: 'auto',
  position: 'relative',
  // zIndex: 1,
  backgroundColor: 'rgb(150, 150, 173)',
  backdropFilter: 'blur(40px)'
}));

const CoverImage = styled('div')({
  width: 100,
  height: 100,
  objectFit: 'cover',
  overflow: 'hidden',
  flexShrink: 0,
  borderRadius: 8,
  backgroundColor: 'rgba(0,0,0,0.08)',
  '& > img': {
    width: '100%',
  },
});

const TinyText = styled(Typography)({
  fontSize: '0.75rem',
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});

export default function MusicPlayerSlider({musicFile, isItemSelected}) {
  
  const theme = useTheme();
  const [duration,setDuration] = React.useState(200);
  const [position, setPosition] = React.useState(32);
  // const [paused, setPaused] = React.useState(true);
  const [changePlay,setChangePlay] = React.useState(true);
  const [volume, setVolume] = React.useState(30);
  const [audioCtx, setAudioCtx] = React.useState(null);
  const [gainNode, setGainNode] = React.useState(null);
  function formatDuration(value) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }
  const mainIconColor = theme.palette.mode === 'dark' ? '#fff' : '#000';
  const lightIconColor =
    theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)';

  // play music with Audio object the sound 
  const sound = baseUrl+musicFile.url;
  const [audio] = React.useState(new Audio(sound));
  
  const playerRef = React.useRef(null);

  React.useEffect(() => {
    // console.log("index",selectedIndex);
    
    if (isItemSelected === true) {
      console.log("here iam ")
      setChangePlay(true);
      // console.log(changePlay);
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
        
      }
    
      if (playerRef.current && playerRef.current.isPlaying()) {
        playerRef.current.stop();
      }
      
      playAudio();
      setChangePlay(false);

    };
    
    // if (audio && audio.src !== sound) {
    //   audio.pause();
    //   audio.src = sound;
  
    //   setPaused(true);
    // }
  
   
    playerRef.current = new MidiPlayer.Player(function (event) {
      if (event.name === "Note on" && event.velocity > 0) {
        console.log("Note on");
      } else if (event.name === "Note off" || (event.name === "Note on" && event.velocity === 0)) {
        console.log("Note off");
      }
    });

    return () => {
      if (playerRef.current) {
        playerRef.current.stop();
      }
    };
  }, [musicFile,isItemSelected]);

  const handlePlayButton = () => {
    if (changePlay === true) {
      playAudio(true);
      setChangePlay(false);
    } else {
      playAudio(false);
      setChangePlay(true);
     
    }
  }
  
  const playAudio = async (paused) => {
    // Check if the music file is a MIDI file
    if (musicFile.url.endsWith(".mid")) {
      if (!playerRef.current) {
        return;
      }
  
      if (playerRef.current.isPlaying()) {
        playerRef.current.pause();
      } else {
        const response = await fetch(sound);
        const arrayBuffer = await response.arrayBuffer();
        playerRef.current.loadData(arrayBuffer);
        playerRef.current.play();
      }
    } else {
      // Your existing code for non-MIDI files
      audio.src = sound;
      console.log(audio.src);
      audio.addEventListener("loadedmetadata", function () {
        setDuration(audio.duration);
      });
      // audio.play();

      if (paused === false) {
        audio.pause();
        // setPaused(true);
      } else {
        audio.play();
        // setPaused(false);
      }
      // setPaused(false);
    }
  };

  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue);
    if (audioCtx) {
      gainNode.gain.value = newValue / 100;
    }
  };

  React.useEffect(() => {
  
    const newAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const newGainNode = newAudioCtx.createGain();
    newGainNode.connect(newAudioCtx.destination);
  
    setAudioCtx(newAudioCtx);
    setGainNode(newGainNode);
    console.log(audioCtx,gainNode);
    return () => {
      newGainNode.disconnect();
      newAudioCtx.close();
    };
  }, []);
  return (
    <Box sx={{ width: '100%',overflow:"hidden" }}>
      <Widget>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <CoverImage>
            <img
              alt="can't win - Chilling Sunday"
              src={process.env.PUBLIC_URL+'/animate.gif'}
            />
          </CoverImage>
          <Box sx={{ ml: 1.5, minWidth: 0 }}>
            <Typography variant="caption" color="text.secondary" fontWeight={500}>
              Now Playing
            </Typography>
            <Typography noWrap>
              <b>{musicFile.filename}</b>
            </Typography>
            <Typography noWrap letterSpacing={-0.25}>
              
            </Typography>
          </Box>
        </Box>
        <Slider
          aria-label="time-indicator"
          size="small"
          value={position}
          min={0}
          step={1}
          max={duration}
          onChange={(_, value) => setPosition(value)}
          sx={{
            color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
            height: 4,
            '& .MuiSlider-thumb': {
              width: 8,
              height: 8,
              transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
              '&:before': {
                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
              },
              '&:hover, &.Mui-focusVisible': {
                boxShadow: `0px 0px 0px 8px ${
                  theme.palette.mode === 'dark'
                    ? 'rgb(255 255 255 / 16%)'
                    : 'rgb(0 0 0 / 16%)'
                }`,
              },
              '&.Mui-active': {
                width: 20,
                height: 20,
              },
            },
            '& .MuiSlider-rail': {
              opacity: 0.28,
            },
          }}
        />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mt: -2,
          }}
        >
          <TinyText>{formatDuration(position)}</TinyText>
          <TinyText>-{musicFile.duration}</TinyText>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mt: -1,
          }}
        >
          <IconButton aria-label="previous song">
            <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />
          </IconButton>
          <IconButton
            aria-label={changePlay ? 'play' : 'pause'}
            onClick={handlePlayButton}
          >
            {changePlay ? (
              <PlayArrowRounded
                sx={{ fontSize: '3rem' }}
                htmlColor={mainIconColor}
              />
            ) : (
              <PauseRounded sx={{ fontSize: '3rem' }} htmlColor={mainIconColor} />
            )}
          </IconButton>
          <IconButton aria-label="next song">
            <FastForwardRounded fontSize="large" htmlColor={mainIconColor} />
          </IconButton>
        </Box>
        <Stack spacing={2} direction="row" sx={{ mb: 1, px: 1 }} alignItems="center">
          <VolumeDownRounded htmlColor={lightIconColor} />
          <Slider
            aria-label="Volume"
            defaultValue={30}
            value={volume}
            onChange={handleVolumeChange}
            sx={{
              color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
              '& .MuiSlider-track': {
                border: 'none',
              },
              '& .MuiSlider-thumb': {
                width: 24,
                height: 24,
                backgroundColor: '#fff',
                '&:before': {
                  boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
                },
                '&:hover, &.Mui-focusVisible, &.Mui-active': {
                  boxShadow: 'none',
                },
              },
            }}
          />
          <VolumeUpRounded htmlColor={lightIconColor} />
        </Stack>
      </Widget>
      {/* <WallPaper /> */}
    </Box>
  );
}