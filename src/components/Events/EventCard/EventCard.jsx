import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import eventService from '../../../services/event.services'

import { useNavigate } from "react-router-dom"

const EventCard = ({ origin, destination, description, _id }) => {

    const navigate = useNavigate()

    const handleDelete = () => {

        eventService
            .deleteEvent(_id)
            .then(() => {
                console.log('hhhhhhhh')
                navigate('/events')
            })
            .catch(err => console.error(err))
    }


    return (
        <Card className="UserCard mb-4">

            <Card.Body>

                <p>Mi viaje es de  {origin.address} a {destination.address} </p>
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
                {/* <Link to={`/events/delete/${_id}`}> */}
                <div className="d-grid">
                    <Button onClick={handleDelete} variant="danger" size="sm" as="div">Delete</Button>
                </div>
                {/* </Link> */}

            </Card.Body>
        </Card >
    )
}

export default EventCard   