import styles from './Card.module.css'

export function Card(props){
    return (
        <div className={styles.project}>
        <div className={styles.card}>
          <h4>{props.title}</h4>
          <p>{props.content}</p>
          <div className={styles.links} >
            {Object.entries(props.links).map(([name, link], index) => {
                return (
                  <a href={link} target="_blank" key={index} rel="noreferrer">{name}</a>                
                )
              })
            }
          </div>
        </div>
        </div>
    )
}