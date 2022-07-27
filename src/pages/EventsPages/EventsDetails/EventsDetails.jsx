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
import moment from 'moment'

const EventDetails = ({ loadEvents }) => {

    const [event, setEvent] = useState({})
    const { user } = useContext(AuthContext)
    const { event_id } = useParams()

    useEffect(() => {

        eventService
            .getOneEvent(event_id)
            .then(({ data }) => {
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

    const newDate = moment(event.date).utc().format('MM/DD/YYYY')

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
                                <li>Date: {newDate}</li>
                                <li>Start time of the event: {event.startTime}</li>
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
                                    {user?.role === 'ADMIN' && <Button onClick={handleDelete} variant="danger" size="sm" as="div"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                    </svg> Delete</Button>}
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