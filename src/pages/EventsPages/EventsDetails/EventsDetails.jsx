import eventService from "../../../services/event.services"
import { useEffect, useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import Loader from "../../../components/Loader/Loader"
import mapsService from "../../../services/apiMaps.services"
import './EventsDetails.css'
import MyMapComponent from "../../../components/Maps/Maps"


const EventDetails = () => {

    const [event, setEvent] = useState({})

    const { id } = useParams()
    // console.log(id)

    useEffect(() => {

        eventService
            .getOneEvent(id)
            .then(({ data }) => {
                setEvent(data)
            })
            .catch(err => console.error(err))

    }, [])


    // useEffect(() => {

    //     mapsService
    //         .getOneMap(id)
    //         .then(({ data }) => {
    //             setEvent(data)
    //             console.log('--------------', data)
    //         })
    //         .catch(err => console.error(err))

    // }, [])

    return (

        <Container>
            {
                <>
                    <MyMapComponent idMap={id} />
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

                            <Link to="/events">
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