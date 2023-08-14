import styles from './Navbar.module.css';
import myImg from '../assets/dicon.png'


export function Navbar(){
    return (
    <nav>
        <div className={styles.start}>
            <img src={myImg}></img>
        </div>
        <div className={styles.end}>
            <a>Home</a>
            <a href="#about" target="_blank">About</a>
            <a href="#projects" target="_blank">Projects</a>
            <a>Resume</a>
        </div>
    </nav>
    )
}