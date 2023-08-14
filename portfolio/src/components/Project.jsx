import styles from './Project.module.css'
import { Card } from './Card'

const cards = [
    {
        'id': 1,
        'title': 'Multi-tenant barbershop app',
        'content': "Application built in a monolith architecture, using Python and its framework Django. It consists of a website for barbershops, where customers can schedule a visit, and pay for it. There's also a dashboard that shows analytics for barbershop owners. The app is multi-tenant, and this single piece of software can generate a website with a custom domain and layout for many different barbershops.",
        'links': {'Github': 'https://github.com/Durvalm/Appointment-Scheduler'}
    },
    {
        'id': 2,
        'title': 'Shipping label automation',
        'content': "Application built utilizing Python and Flask, it takes advantage of Shippo's API to create a dashboard to manage all shipments of a company. This project was built for a client, and it saves many hours of work per week.",
        'links': {'Documentation': 'https://medium.com/@durvz/i-created-a-shipping-automation-tool-with-shippo-200-shipping-labels-created-in-1-month-c4a6b7c1a948', 'Github': 'https://github.com/Durvalm/Shipping_Label_Automation'}
    }
]

export function Project(){
    return (
    <div className={styles.projectSection} id="projects">
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