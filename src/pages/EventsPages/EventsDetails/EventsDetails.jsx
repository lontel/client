import eventService from "../../../services/event.services"
import { useEffect, useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"

const EventDetails = () => {

    const [event, setEvent] = useState({})


    const { event_id } = useParams()
    console.log(event)

    useEffect(() => {

        eventService
            .getOneEvent(event_id)
            .then(({ data }) => setEvent(data))
            .catch(err => console.error(err))
    }, [])

    return (

        <Container>
            {
                // !user                 esto será el spinner
                //     ?
                //     <Loader />
                //     :
                <>
                    <h1>Details of  {event.origin} to {event.destination}  </h1>
                    <hr />

                    <Row>

                        <Col md={{ span: 6 }}>
                            <h3>Description of the route:</h3>
                            <p>{event.description}</p>
                            <ul>
                                <li>My email: {event.email}</li>
                            </ul>
                            <hr />

                            <Link to="/">
                                <Button as="div" variant="dark">Back to event list</Button>
                            </Link>
                        </Col>



                    </Row>
                </>
            }

        </Container>

    )
}

export default EventDetails