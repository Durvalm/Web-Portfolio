import styles from './Project.module.css'
import { Card } from './Card'

export function Project(){
    return (
    <div className={styles.projectSection}>
        <h1>Projects</h1>
        <Card />
        <Card />
    </div>
    )
}