import './App.css'
import React from 'react';
import Navbar from './Components/Navbar.js';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Home from  './Components/pages/Home'
import SignUp from  './Components/pages/SignUp'
import test from  './Components/pages/test'
import About from  './Components/pages/About'
import Contactus from  './Components/pages/Contactus'


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/test' exact Component={test} />
        <Route path='/About' exact Component={About} />
        <Route path='/Contactus' exact Component={Contactus} />
        <Route path='/SignUp' exact Component={SignUp} />

      </Routes>

    </Router> 
     
  );
}

export default App;
