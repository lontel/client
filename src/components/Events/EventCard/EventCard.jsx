import './EventCard.css'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Map from '../../Maps/Maps'


const EventCard = ({ origin, destination, _id }) => {



    return (


        <Card className="UserCard mb-4">
            <Card.Body>


                <p>The event is from {origin.address} to {destination.address} </p>
                <Link to={`/events/details/${_id}`}>
                    {/* //aqui tenemos que poner la ruta con el zoom alejado */}
                    <Map />
                    <div className="d-grid">
                        <Button variant="dark" size="sm" as="div">Show more details</Button>
                    </div>
                </Link>


            </Card.Body>

        </Card >

    )
}

export default EventCard   