import React from 'react';
import emailjs from 'emailjs-com';
import { useState } from 'react';


export default function Arajanlat() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [type, setType] = useState('');
    const [place, setPlace] = useState('');
    const [hc, setHc] = useState('');

    function sendEmail(e) {
        e.preventDefault();
        if (name == '' || email == '' || tel == '' || type == '' || place == '' || hc == '') {
            alert("Írjon be minden adatot!");
        }
        else {
            emailjs.sendForm('service_33gx7rg', 'kecsaForm', e.target, 'user_J1ob3Ryk5QebuFnmmgVdQ')
                .then((result) => {
                    alert("Elküldve!");
                }, (error) => {
                    alert("Sikertelen!");
                });
        }
        e.target.reset()
    }
    return (
        <div className="bidding">
            <h1>Kérj árajánlatot</h1>
            <form onSubmit={sendEmail}>
                <input className='name' type="text" placeholder="Név" name="name" value={name} onChange={e => setName(e.target.value)} />
                <input className='email' type="email" placeholder="E-mail cím" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                <input className='tel' type="tel" placeholder="Telefonszám" name="tel" value={tel} onChange={e => setTel(e.target.value)} />
                <input type="text" placeholder="Rendezvény típusa" name="type" value={type} onChange={e => setType(e.target.value)} />
                <input type="text" placeholder="Rendezvény helyszíne" name="place" value={place} onChange={e => setPlace(e.target.value)} />
                <input className='date' type="date" placeholder="Rendezvény dátuma" name="date" />
                <input type="number" placeholder="Létszám (kb)" name="headcount" value={hc} onChange={e => setHc(e.target.value)} />
                <textarea className='message' placeholder="Különböző igények(kezdés,befejezése,különböző igények)" name="text"></textarea>
                <button className='send' type="submit">Küldés</button>
            </form>
        </div>
    );
}
