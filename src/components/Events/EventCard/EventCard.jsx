import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import eventService from '../../../services/event.services'



const EventCard = ({ origin, destination, _id, loadEvents }) => {

    const handleDelete = () => {

        eventService
            .deleteEvent(_id)
            .then(() => loadEvents())
            .catch(err => console.error(err))
    }

    const handleJoin = () => {

        eventService
            .joinEvent(_id)
            .then(() => loadEvents())
            .catch(err => console.error(err))
    }

    return (


        <Card className="UserCard mb-4">
            <Card.Body>

                <p>The event is from {origin.address} to {destination.address} </p>
                <Link to={`/events/details/${_id}`}>
                    <div className="d-grid">
                        <Button variant="dark" size="sm" as="div">Show details</Button>
                    </div>
                </Link>
                <Link to={`/events/edit/${_id}`}>
                    <div className="d-grid">
                        <Button variant="warning" size="sm" as="div">Edit</Button>
                    </div>
                </Link>
                <Link to={`/events`}>
                    <div className="d-grid">
                        <Button onClick={handleDelete} variant="danger" size="sm" as="div">Delete</Button>
                    </div>
                </Link>
                <Link to={`/events/details/${_id}`}>
                    <div className="d-grid">
                        <Button onClick={handleJoin} variant="success" size="sm" as="div">Join Event</Button>
                    </div>
                </Link>

            </Card.Body>

        </Card >

    )
}

export default EventCard   