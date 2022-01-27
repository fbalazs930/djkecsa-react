import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";

export default function Nav(){
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () => { setClick(false) };
    return (
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
    );
}
