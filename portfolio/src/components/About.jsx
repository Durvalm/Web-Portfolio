import styles from './About.module.css'
import myImg from '../assets/durval.jpg'

export function About() {
    return (
        <section id="about">
            <h1>About Me</h1>

            <article>
            
            <div className={styles.icon}>
                <img src={myImg} ></img>
            </div>

            <div className={styles.aboutText} >
            <p>Hi, my name is Durval! I'm Brazilian, a full-stack software developer who is currently pursuing a bachelor's degree in computer science.</p>
            {/* <p>I started programming when I was 16 years old, and I fell in love with the ability of building things and with the "magic" that technology has.</p> */}
            <p>I'm well versed on both backend and frontend development, my main tools are: Python, Javascript, ReactJS, Django, Flask, FastAPI, SQL, Git, HTML, CSS, etc.</p>
            <p>I speak 5 languages: Portuguese, English, Spanish, Italian, and Russian. </p>
            <p>I have many projects that showcase my skills in building backend systems, APIs, frontend interfaces, and even more complex software such as a multi-tenant application. </p>
            </div>

            </article>
        </section>
    )
}