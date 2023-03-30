import React from "react"
import css from '../fotoseicones/css-3.png'
import html from '../fotoseicones/html5.png'
import js from '../fotoseicones/js.png'
import react from '../fotoseicones/React.png'
import dart from '../fotoseicones/dart.png'
import flutter from '../fotoseicones/flutter.png'
import git from '../fotoseicones/git.png'
import styles from './Linguages.module.css'
function Linguagens(){
    
    return <>
       
            
                <ul className={styles.lista}>
                    
                            <div className={styles.primeiro}>
                                <li><a href="https://github.com/jorgesoares2997/Ages_program.js"target='blank' rel="external"><img className={styles.img} src={html}/></a></li>
                            </div>
                            <div className={styles.segundo}>
                                <li><a href="https://github.com/jorgesoares2997/exercicios-em-dart"target='blank' rel="external"><img className={styles.img} src={dart}/></a></li>
                            </div>
                            <div className={styles.primeiro}>
                                <li ><a href="https://github.com/jorgesoares2997/Ages_program.js" target='blank' rel="external"><img className={styles.img} src={css} /></a></li>
                            </div>
                            
                            <div className={styles.segundo}>
                                <li><a href="https://github.com/jorgesoares2997"target='blank' rel="external"><img className={styles.img} src={git}/></a></li>
                            </div>
                           
                            <div className={styles.primeiro}>
                                <li><a href="https://github.com/jorgesoares2997/Ages_program.js"target='blank' rel="external"><img className={styles.img} src={js}/></a></li>
                            </div>
                            <div className={styles.segundo}>
                                <li><a href="https://github.com/jorgesoares2997/Exercicio-Flutter"target='blank' rel="external"><img className={styles.img} src={flutter}/></a></li>
                            </div>
                            <div className={styles.primeiro}>
                                <li><a href="https://github.com/jorgesoares2997/costs"target='blank' rel="external"><img className={styles.img} src={react}/></a></li>
                            </div>
                        
                            
                            
                            
                      
                </ul>
           
            </>
    
} export default Linguagens