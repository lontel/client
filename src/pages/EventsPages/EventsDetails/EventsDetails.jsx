import './EventsDetails.css'
import eventService from "../../../services/event.services"
import { useEffect, useState } from "react"
import { Container, Row, Col, Button, Form } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import Loader from "../../../components/Loader/Loader"
import Map from "../../../components/Maps/Maps"
import Chat from '../../../components/Chat/Chat'


const EventDetails = () => {

    const [event, setEvent] = useState({})

    const { event_id } = useParams()

    useEffect(() => {

        eventService
            .getOneEvent(event_id)
            .then(({ data }) => {
                setEvent(data)
            })
            .catch(err => console.error(err))

    }, [])


    return (
<>
        <Container>
            {
                <>
                    <Map event={event} />
                    <h1>Details of  {!event.origin ? <Loader /> : event.origin.address}  to {!event.destination ? <Loader /> : event.destination.address}  </h1>
                    <hr />

                    <Row>
                        {console.log(event.origin?.address, 'yuhuuuu')}
                        <Col md={{ span: 6 }}>
                            <h3>Description of the route:</h3>
                            <p>{event.description}</p>
                            <ul>
                                <li>Date: {event.date}</li>
                                <li>Maximum of number of cyclists: {event.numberOfCyclists}</li>
                            </ul>

                            <hr />

                            <h4>Cyclists who has joined in the event!</h4>

                            <Link to="/events">
                                <Button as="div" variant="dark">Back to event list</Button>
                            </Link>
                        </Col>
                    </Row>
                </>
            }

        </Container>
        <Chat/>
        </>

    )
}

export default EventDetails