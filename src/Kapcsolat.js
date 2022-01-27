import React from 'react';
import { useState } from "react";

export default function Kapcsolat() {
    const [click2, setClick2] = useState(false);
    return (
        <div className="contact">
            <h1>Kecskeméti Márk</h1>
            <div className="icons">
                <a href="tel:+36305982808">
                    <div className="icon">
                        <i className="fas fa-mobile"></i>
                        <p>+36305982808</p>
                    </div>
                </a>

                <a href="mailto:djkecsa22@gmail.com">
                    <div className="icon">
                        <i className="fas fa-envelope"></i>
                        <p>djkecsa22@gmail.com</p>
                    </div>
                </a>

                <a href="https://www.facebook.com/djkecsa/" target="_blank" rel="noreferrer">
                    <div className="icon">
                        <i className="fab fa-facebook"></i>
                        <p>@djkecsa</p>
                    </div>
                </a>
            </div>
            <h3 className="bottom">Ezt a tevékenységet hivatalosan hajtom végre, <br /> ezáltal számlaképes vagyok és rendelkezem éves <span onDoubleClick={() => { setClick2(!click2) }}>MAHASZ</span> engedéllyel!</h3>
            {click2 && <a href="https://www.hitwebcounter.com" target="_blank" rel="noreferrer">
                <img src="https://www.webfreecounter.com/hit.php?id=gvpncoq&nd=5&style=1" border="0" alt="web counter" />
            </a>}
        </div>
    );
}
