import styles from './Project.module.css'
import { Card } from './Card'

const cards = [
    {
        'id': 1,
        'title': 'Super Barbershop',
        'content': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        'links': ['case study', 'live link', 'github']
    },
    {
        'id': 2,
        'title': 'Shippo',
        'content': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        'links': ['case study', 'github']
    }
]

export function Project(){
    return (
    <div className={styles.projectSection}>
        <h1>Projects</h1>
        {cards.map(card => {
            return (
                <Card 
                    key={card.id}
                    title={card.title}
                    content={card.content}
                    links={card.links}
                />
            )
        })}
    </div>
    )
}