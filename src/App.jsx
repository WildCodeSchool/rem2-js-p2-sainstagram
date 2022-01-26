import { Route, Routes } from 'react-router-dom';
import BattleArena from './pages/BattleArena';
import Home from "./pages/Home";
import Profile from './pages/Profile';
import Search from "./pages/Search";

import Header from './components/Header';
import Navfooter from './components/Navfooter';
import Form from './components/Form';
import './App.css';
import Video from './pages/Video';

function App() {
  return (
    <div className="App">
        <Header />    
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/addPost" element={<Form />}/>          
          <Route path="/battle/:player1/:player2" element={<BattleArena />} />
          <Route path="/profil/:id" element={<Profile />}/>
          <Route path="/search" element={<Search />}/>
          <Route path="/video" element={<Video />}/>
        </Routes>
        <Navfooter />
    </div>
  );
}

export default App;