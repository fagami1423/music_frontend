# 🎵 AI Music Generation: Web Interface

The React frontend for an **AI music generation platform** that helps music producers generate, continue and play back machine-generated music. It connects to the [music_generation](https://github.com/fagami1423/music_generation) backend, where LSTM and VAE models create new melodies.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![MUI](https://img.shields.io/badge/MUI-007FFF?logo=mui&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)

![App demo](public/animate.gif)

## ✨ Features
- 🎹 **Upload a MIDI primer** and have the AI continue the music
- ▶️ **In-browser MIDI playback** with a custom player and slider (Tone.js, midi-player-js)
- 📃 **Generated playlists:** browse and play AI-generated tracks
- 💬 **Built-in chatbot assistant** to guide producers
- 🖼️ Note visualizations and an image slider
- 🐳 **Dockerized** with Docker Compose

![Sidebar](public/sidebar.gif)

## 🧠 About the models
The backend (a team capstone project) uses:
- An **LSTM** with 1,024 RNN units (Glorot-uniform initialization), with music tokens passed through a learnable 256-dimensional embedding layer
- A **variational autoencoder (VAE)** for music interpolation and variation
- **Magenta** RNN models (melody, polyphony and drums)

## 🛠️ Tech stack
React 18 · React Router · Material UI · styled-components · Axios / OpenAPI client · Tone.js MIDI · midi-player-js · WebMIDI · Docker

## 🚀 Getting started
Requires Node 14+ (see [nvm](https://github.com/nvm-sh/nvm)).
```bash
git clone https://github.com/fagami1423/music_frontend.git
cd music_frontend
npm install
npm start
```
Or use Docker:
```bash
docker compose up
```
Then open http://localhost:3000. Set the backend URL in `src/Config.js`.

## 📁 Project structure
```
src/
├── components/   # Chatbot, MIDI player, sliders, uploader, sidebar
├── pages/        # Home, Music, MusicList, Contact
├── css/          # Component styles
└── Config.js     # API base URL
```

## 👤 Author
**Raj Kumar Phagami**: [GitHub](https://github.com/fagami1423)
