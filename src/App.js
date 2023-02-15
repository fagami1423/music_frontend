// import logo from './logo.svg';
import "./App.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import MusicList from "./components/MusicList";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container-full text-center bg-dark text-light">
      <Routes>
        <Route path="/" element={<Home content="Home "/>}></Route>
        <Route path="/musiclist" element={<Home content={<MusicList />} />}></Route>
        <Route path="/contact" element={<Home content={<Contact />}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
