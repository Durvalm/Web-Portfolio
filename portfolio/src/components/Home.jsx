import styles from './Home.module.css'
import myImage from '../assets/durval.jpg'

export function Home() {
    return (
        <header>
        <div className={styles.header}>
            <p>Hello, I'm</p>
            <h1>Durval Maia</h1>
            <h4>Software Engineer</h4>
            <div className={styles.icons}>
              <a href="https://github.com/durvalm" target="_blank" rel="noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/durval-maia" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
        </div>
        {/* <div className={styles.cover}>
            <img>
            </img>
        </div> */}
        </header>
    )
}

