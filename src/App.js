import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Nav from './Nav'
import Home from './Home'
import Bemutatkozo from './Bemutatkozo';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/bemutatkozo' element={<Bemutatkozo/>}/>
        </Routes>
      </div>
    </Router>
  );
};
