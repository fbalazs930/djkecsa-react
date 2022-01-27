import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Nav from './Nav'
import Home from './Home'
import Bemutatkozo from './Bemutatkozo';
import Felszereles from './Felszereles';
import Kapcsolat from './Kapcsolat';
import Arajanlat from './Arajanlat';
import './Styles/Main.css';
import { useState } from 'react';
import { Link } from "react-router-dom";

export default function App() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => { setClick(false) };
  return (
    <div>
      <Router>
        <nav className='nav'>
          <Link to="/" onClick={closeMenu}>
            <div className="kecsa">
              <img className='logo' alt="logo" src="https://i.postimg.cc/W3p6qCkN/logo.png" />
            </div>
          </Link>

          <div className={click ? 'links active' : 'links'}>
            <Link to="/" onClick={closeMenu}>
              Kezdőlap
            </Link>
            <Link to="/bemutatkozo" onClick={closeMenu}>
              Bemutatkozó
            </Link>
            <Link to="/felszereles" onClick={closeMenu}>
              Felszerelés
            </Link>
            <Link to="/kapcsolat" onClick={closeMenu}>
              Kapcsolat
            </Link>
          </div>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <div className="bid">
            <Link to="/arajanlat">Árajánlat kérés</Link>
          </div>
        </nav>
        
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/bemutatkozo' element={<Bemutatkozo />} />
          <Route path='/felszereles' element={<Felszereles />} />
          <Route path='/kapcsolat' element={<Kapcsolat />} />
          <Route path='/arajanlat' element={<Arajanlat />} />
        </Routes>
      </Router>
    </div>
  );
};
