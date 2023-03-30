import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import './App.css';
import Linguagens from './components/Linguagens';


import Home from './components/Home.js';

import Footer from './pages/Footer';
import Navbar from './Navbar';
import Container from './Container';
import Inscrição from './components/Inscricao';




function App() {
  return (
    
      <Router>
     <Navbar/>
      <Switch>
          <Container customClass='min-height'>
            <Route exact path='/'> <Home/> </Route>
            <Route  path='/components/linguagens'> <Linguagens/> </Route>
           
            <Route  path='/components/inscrição'> <Inscrição/> </Route>
          
          </Container>
      </Switch>
      <Footer/>
      </Router>
      
    

  );
}

export default App;
