import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const EventCard = ({ origin, destination, description, _id }) => {

    return (
        <Card className="UserCard mb-4">

            <Card.Body>

                <p>Mi viaje es de  {origin} a {destination} </p>

            </Card.Body>
        </Card >
    )
}

export default EventCard