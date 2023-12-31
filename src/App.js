import './App.css'
import React from 'react';
import Navbar from './Components/Navbar.js';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Home from  './Components/pages/Home'
import SignUp from  './Components/pages/SignUp/SignUp'
import test from  './Components/pages/test'
import About from  './Components/pages/About'
import Contactus from  './Components/pages/Contactus'
import Signin from './Components/pages/Signin/Signin'
import Search from './Components/pages/Search'


function App() {
  return (
    <Router>
       
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/test' exact Component={test} />
        <Route path='/About' exact Component={About} />
        <Route path='/Contactus' exact Component={Contactus} />
        <Route path='/SignUp' exact Component={SignUp} />
        <Route path='/Signin' exact Component={Signin} />
        <Route path='/Search' exact Component={Search} />

      </Routes>

    </Router> 
     
  );
}

export default App;
