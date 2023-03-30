import {BsMailbox} from 'react-icons/bs'
import {FaGithub, FaWhatsapp, FaLinkedinIn, FaInstagram, } from 'react-icons/fa'
import styles from './Footer.module.css'
function Footer() {
    return <>
    <div className={styles.div}>
        <ul className={styles.lista}>
            <li><a className={styles.foot} href="mailto:jorgesoares2997@gmail.com" target="_blank"> <BsMailbox/></a></li>
            <li><a className={styles.foot} href="https://wa.me/+5581987594291" target="_blank"><FaWhatsapp/></a></li>
            <li><a className={styles.foot} href="https://www.linkedin.com/in/jorge-soares-18b667204/" target="_blank"><FaLinkedinIn/></a></li>
            <li><a className={styles.foot} href="https://github.com/jorgesoares2997" target="_blank" ><FaGithub/></a></li>
            <li><a className={styles.foot} href="https://www.instagram.com/baixodejorge/" target="_blank"><FaInstagram/></a></li>
           
        </ul>
    </div>

<div className={styles.div}>&copy; 2023</div>
</>
} export default Footer