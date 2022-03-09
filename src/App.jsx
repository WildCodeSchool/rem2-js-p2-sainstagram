import { Route, Routes } from 'react-router-dom';
import Form from './components/Form';
import Header from './components/Header';
import Navfooter from './components/Navfooter';
import BattleArena from './pages/BattleArena';
import Home from "./pages/Home";
import Infos from './pages/Infos';
import Profile from './pages/Profile';
import Search from "./pages/Search";
import Reels from './pages/Reels';
import './App.css';

function App() {
  return (
    <div className="App">
        <Header />    
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/addPost" element={<Form />}/>          
          <Route path="/battle/:player1/:player2" element={<BattleArena />} />
          <Route path="/infos" element={<Infos />}/>
          <Route path="/profil/:id" element={<Profile />}/>
          <Route path="/search" element={<Search />}/>
          <Route path="/reels" element={<Reels />}/>
        </Routes>
        <Navfooter />
    </div>
  );
}

export default App;