import React from 'react';

export default function Bemutatkozo() {
    return (
        <div className="about">
            <h1>Üdvözöllek!</h1>
            <h2>Kecskeméti Márk vagyok, de lehet úgy ismersz hogy Kecsa.</h2>
            <div className="grid">
                <p className="p1">
                    Az én zenei szeretetem általános iskolába nyúlik vissza 6. osztályba, ahol felkértek, hogy zenéljek a felsős évfolyamnak ekkor ez egy nagy falat volt nekem, de a végén sikeresen teljesítettem. Ezentúl én voltam a zenei felelős az iskolában a studió munkálatokat is én végeztem(iskolai hangosítás, ballagások, különböző ünnepségek).
                </p>
                <div className="img img1">
                    <img alt="pult" src="https://i.postimg.cc/HLv01jfH/IMG-2694.jpg" />
                </div>
                <p className="p2">
                    Az igazi fellendülés 2016 decemberében kezdődött egy családi rendezvényen ahol Kiskőrös legprofibb DJ-je szórakoztatott minket és megkért, hogy hozzam el a saját pultomat és megengedte, hogy az éjszaka folyamán zenélhessek én is ő Németh Pál, aki a késöbbiekben a szárnya alá vett és elindultunk (ahogy Ő mondaná Pali és Padaván) közösen az éjszakába figyelmesen megtanultam, hogy mit és hogyan kell.
                </p>
                <p className="p3">
                    <br />
                    Ezután egyik barátommal (Lengyel Dominik) Kiskőrösön a Holdfényes Biliárd Clubban elkezdtünk bulikat szervezni egész jól indult ahol elértük a 250+ főt ami számunkra egy hatalmas megtisztelés volt ez kicsit több mint 2 évig működött, mindeközben jártam a környékbeli születésnapokat, kisebb nagyobb nyilvános rendezvényeket, céges évzárók, lakodalmak, ekkoriban kezdtem el az Extrém Sörözőben is elkezdeni zenélni, ami még a mai napig tart és töretlenül működik (amit köszönök minden oda járó bulizni vágyónak).
                </p>
                <div className="img img2">
                    <img alt="pult" src="https://i.postimg.cc/3N8DyhM9/IMG-3201.jpg" />
                </div>
            </div>

            <h3>
                A zenei repertoárom elég széles én úgy gondolom. Kb. 8000 zene, amikben található: Retró slágerek, Mulatós, mai fiatalságnak megfelelő stílusok tömérdektelen mennyiségben!
            </h3>

            <h2 className='h2'>Ahol eddig megfordultam:</h2>

            <div className="grid_2">
                <ul className="public">
                    <p>Nyilvános rendezvények:</p>
                    <li> ● 2017 - 2019 Holdfényes Biliárd Club / Kiskőrös</li>
                    <li> ● 2017 - napjainkig Extrém Söröző / Kiskőrös</li>
                    <li> ● 2017 - Madeira Café / Kiskőrös</li>
                    <li> ● 2018 - Textán / Tabdi</li>
                    <li> ● 2018 - napjainkig Főnix Club / Akasztó</li>
                    <li> ● 2020 nyár Oázis Sörkert / Soltvadkert Vadkerti tó</li>
                    <li> ● 2020 - napjainkig Drift Club / Kiskőrös</li>
                </ul>
                <div className="line">
                    <div></div>
                </div>
                <ul className="private">
                    <p>Zártkörű rendezvények:</p>
                    <li> ● megannyi születésnap</li>
                    <li> ● Bankettek</li>
                    <li> ● Lakodalmak</li>
                    <li> ● Leánybúcsúk</li>
                    <li> ● Családi rendezvények</li>
                    <li> ● Céges évzárók</li>
                </ul>
            </div>

            <h3 className='kepek'>Képek az instagram oldalamon megtekinthetőek:</h3>
            <a rel='noreferrer' href="https://www.instagram.com/dj_kecsa/" target="_blank">
                <i className="fab fa-instagram"></i>
            </a>
        </div>
    );
}
