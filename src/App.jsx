import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Search from "./pages/Search";
import Header from './components/Header';
import Profile from './pages/Profile';
import Navfooter from './components/Navfooter';
import Form from './components/Form';
import './App.css';

function App() {
  return (
    <div className="App">
        <Header />    
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/profil/:id" element={<Profile />}/>
          <Route path="/search" element={<Search />}/>
          <Route path="/addPost" element={<Form />}/>
        </Routes>
        <Navfooter />
    </div>
  );
}

export default App;

