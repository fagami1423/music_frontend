
import "./App.css";
import Main from "./pages/Main";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Music from "./pages/Music";
import MusicList from "./pages/MusicList";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container-full text-center bg-dark text-light">

      <Routes>
        <Route path="/" element={<Main content={<Home />} />}></Route>
        <Route path="/music" element={<Main content={<Music />} />}></Route>
        <Route path="/musiclist" element={<Main content={<MusicList />} />}></Route>
        <Route path="/contact" element={<Main content={<Contact />}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
