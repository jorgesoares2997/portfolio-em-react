import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import './App.css';
import Linguagens from './components/Linguagens';
import Calculadora from './components/Calculadora';
import Cursos from './components/Cursos';
import DiaEHora from './components/DiaEHora';
import EMEMB from './components/EMEMB';
import Formulario from './components/Formulario';
import Home from './components/Home';
import Numeros from './components/Numeros';
import Footer from './pages/Footer';
import Navbar from './Navbar';
import Container from './Container';




function App() {
  return (
    
      <Router>
     <Navbar/>
      <Switch>
          <Container customClass='min-height'>
            <Route exact path='/'> <Home/> </Route>
            <Route  path='/components/linguagens'> <Linguagens/> </Route>
            <Route  path='/components/formulario'> <Formulario/> </Route>
            {/* <Route  path='/components/calculadora'> <Calculadora/> </Route>
            <Route  path='/components/numeros'> <Numeros/> </Route>
            <Route  path='/components/diaehora'> <DiaEHora/> </Route>
            <Route  path='/components/ememb'> <EMEMB/> </Route>
          
            <Route  path='/components/cursos'> <Cursos/> </Route> */}
          </Container>
      </Switch>
      <Footer/>
      </Router>
      
    

  );
}

export default App;
