import React from 'react'
import styles from './Navbar.module.css'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import Container from './Container';
import logo from './fotoseicones/foto.JPG'
function Navbar (){
    return (
   <nav className={styles.Navbar}>
        <Container>
            <ul className={styles.list}>
                <li className={styles.item}>
                <Link to='/'><img className={styles.logo} src={logo} alt='Costs'/></Link>
                </li>
                <li className={styles.item}>
                    <Link to='/components/linguagens'>Linguagens e Tecnologias </Link>
                 </li>
                 <li className={styles.item}>
                    <Link to='/formulario'>Formulario</Link>
                </li>
                {/* <li className={styles.item}>
                    <Link to='/calculadora'>Calculadora</Link>
                </li>
                <li className={styles.item}>
                    <Link to='/numeros'>Numeros</Link>
                </li>
                <li className={styles.item}>
                    <Link to='/ememb'>EMEMB</Link>
                </li>
             
                <li className={styles.item}>
                    <Link to='/cursos'>Cursos</Link>
                </li>
                <li className={styles.item}>
                    <Link to='/diaehora'>DiaEHora</Link>
                </li>  */}
            </ul>
        </Container>
   </nav>
    );
} export default Navbar 