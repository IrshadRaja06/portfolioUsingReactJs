import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Content from './Content';
import Menu from './Menu';
import Home from './Home';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div className="container-fluid text-white">
        <div className="row">
          <div className="col-md-3 d-none d-md-block">
            <Menu />  
          </div> 
          <div className="col-md-6">
            <Routes>
              <Route path="/" element={<><Home/></>} />
              <Route path="/work" element={<><Header /><Content /></>} />
              <Route path="/contact" element={<><Contact/></>} />
            </Routes>
          </div>
          <div className="col-md-3 d-none d-md-block"><Contact/></div>
        </div>
        <div className="d-block d-md-none menu-bottom fixed-bottom p-3 bg-black">
          <Menu />
        </div>
      </div>
    </Router>
  );
}

export default App;
