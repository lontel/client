import './EventsDetails.css'
import eventService from "../../../services/event.services"
import { useEffect, useState, useContext } from "react"
import { Container, Row, Col, Button, Form } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import Loader from "../../../components/Loader/Loader"
import Map from "../../../components/Maps/Maps"
import Chat from '../../../components/Chat/Chat'
import UsersJoined from '../../../components/Users/UsersJoined/UsersJoined'
import { AuthContext } from '../../../contexts/auth.context'


const EventDetails = ({ loadEvents }) => {

    const [event, setEvent] = useState({})
    const { user } = useContext(AuthContext)
    const { event_id } = useParams()

    useEffect(() => {

        eventService
            .getOneEvent(event_id)
            .then(({ data }) => {
                console.log(data)
                setEvent(data)
            })
            .catch(err => console.error(err))

    }, [])

    const handleDelete = () => {

        eventService
            .deleteEvent(event_id)
            .then(() => loadEvents())
            .catch(err => console.error(err))
    }

    const handleJoin = () => {

        eventService
            .joinEvent(event_id)
            .then(() => loadEvents())
            .catch(err => console.error(err))
    }

    return (
        <Container>
            {
                <>
                    <Map event={event} />
                    <h1>Details of  {!event.origin ? <Loader /> : event.origin.address}  to {!event.destination ? <Loader /> : event.destination.address}  </h1>
                    <hr />

                    <Row>
                        <Col md={{ span: 6 }}>
                            <h3>Description of the route:</h3>
                            <p>{event.description}</p>
                            <ul>
                                <li>Date: {event.date}</li>
                                <li>Maximum of number of cyclists: {event.numberOfCyclists}</li>
                            </ul>

                            <hr />

                            <h4>Cyclists who has joined in the event!</h4>
                            {
                                event.cyclists ?


                                    event.cyclists.map(e => {
                                        return (
                                            <Col md={3} >
                                                <Col  >
                                                    <UsersJoined {...e} />
                                                </Col>
                                            </Col>
                                        )

                                    })

                                    :
                                    <Loader />
                            }


                            
                            <Link to={`/events/edit/${event_id}`}>
                                <div className="d-grid">
                                    {user?.role === 'ADMIN' && <Button variant="warning" size="sm" as="div">Edit</Button>} 
                                </div>
                            </Link>
                            <Link to={`/events`}>
                                <div className="d-grid">
                                    {user?.role === 'ADMIN' &&<Button onClick={handleDelete} variant="danger" size="sm" as="div">Delete</Button>}
                                </div>
                            </Link>




                            <Link to={`/events/details/${event_id}`}>
                                <div className="d-grid">
                                    <Button onClick={handleJoin} variant="success" size="sm" as="div">Join Event</Button>
                                </div>
                            </Link>
                            <Link to="/events">
                                <Button as="div" variant="dark">Back to event list</Button>
                            </Link>



                        </Col>
                    </Row>
                    <Chat />

                </>
            }

        </Container >

    )
}

export default EventDetails