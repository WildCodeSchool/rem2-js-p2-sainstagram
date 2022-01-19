import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Header from './components/Header';
import NavProfile from './components/NavProfile';
import Profile from './pages/Profile';
import Navfooter from './components/Navfooter';
import './App.css';

function App() {
  return (
    <div className="App">
        <Header />    
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/profil/:id" element={<Profile />}/>
        </Routes>
        <Navfooter />
    </div>
  );
}

export default App;

