
import "./App.css";
// import ImageSlider.css from css folder
import "./css/ImageSlider.css";
import "./css/Home.css";
import Main from "./pages/Main";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Music from "./pages/Music";
import MusicList from "./pages/MusicList";
import NotFound from "./components/NotFound";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container-full text-center text-light">

      <Routes>
        <Route exact path="/" element={<Main content={<Home />} />}></Route>
        <Route path="/music" element={<Main content={<Music />} />}></Route>
        <Route path="/musiclist" element={<Main content={<MusicList />} />}></Route>
        <Route path="/contact" element={<Main content={<Contact />}/>}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
