import styles from './Card.module.css'

export function Card(props){
    return (
        <div className={styles.project}>
        <div className={styles.card}>
                <h5>{props.title}</h5>
                <p>{props.content}</p>
                
                {props.links.map(link => {
                    return (
                        <a href="">{link}</a>
                    )
                })}
        </div>
        </div>
    )
}