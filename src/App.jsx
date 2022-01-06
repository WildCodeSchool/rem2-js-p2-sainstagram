import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <Routes>
        /* Voir si besoin d'un exact path */
        <Route path="/" element={<Home />}/>
        <Route path="/profil/:id" element={<Profile />}/>

      </Routes>
    </div>
  );
}

export default App;

