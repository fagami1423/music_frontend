import React, { useEffect } from 'react';
import MidiPlayer from 'midi-player-js';

const MidiPlayerComponent = ({ midiFileUrl }) => {
  useEffect(() => {
    // Load MIDI file
    fetch(midiFileUrl)
      .then((response) => response.arrayBuffer())
      .then((midiArrayBuffer) => {
        // Initialize the MIDI player
        const player = new MidiPlayer.Player();

        // Load the MIDI data
        player.loadDataUri(`data:audio/midi;base64,${btoa(String.fromCharCode.apply(null, new Uint8Array(midiArrayBuffer)))}`);

        // Set up the audio context and output
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const output = audioContext.destination;

        // Configure the MIDI player to use the audio context
        player.setContext(audioContext);
        player.connect(output);

        // Play the MIDI file
        player.play();
      })
      .catch((error) => {
        console.error('Error loading MIDI file:', error);
      });
  }, [midiFileUrl]);

  return (
    <div>
      {/* Your component JSX */}
    </div>
  );
};

export default MidiPlayerComponent;
