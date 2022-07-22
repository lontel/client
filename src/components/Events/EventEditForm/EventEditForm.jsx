import { useState, useEffect } from "react"
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import eventService from "../../../services/event.services"
import { useNavigate } from 'react-router-dom'
import { useParams } from "react-router-dom"

const EventEditForm = () => {

    const { id } = useParams()

    const [eventData, setEventData] = useState({
        origin: '',
        destination: '',
        description: '',
        numberOfCyclists: '',
        date: ''
    })

    useEffect(() => {
        eventService
            .getOneEvent(id)
            .then(({ data }) => {
                setEventData({
                    origin: data.origin.address,
                    destination: data.destination.address,
                    description: data.description,
                    numberOfCyclists: data.numberOfCyclists,
                    date: data.date
                })
            })
            .catch(err => console.log(err))
    }, [])


    const navigate = useNavigate()

    const handleChange = e => {

        const { value, name } = e.target
        setEventData({ ...eventData, [name]: value })

    }

    const handleSubmit = e => {
        e.preventDefault()

        eventService
            .editEvent(id, eventData)
            .then(() => navigate('/events'))
            .catch(err => console.error(err))

    }


    const { origin, destination, description, numberOfCyclists, date } = eventData


    return (

        <Container>

            <Row>

                <Col md={{ offset: 3, span: 6 }}>

                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="origin">
                            <Form.Label>Origin</Form.Label>
                            <Form.Control type="text" value={origin} onChange={handleChange} name="origin" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="destination">
                            <Form.Label>Destination</Form.Label>
                            <Form.Control type="text" value={destination} onChange={handleChange} name="destination" />
                        </Form.Group>

                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="date">
                                    <Form.Label>Date</Form.Label>
                                    <Form.Control type="date" value={date} onChange={handleChange} name="date" />
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group className="mb-3" controlId="numberOfCyclists">
                                    <Form.Label>NumberOfCyclists</Form.Label>
                                    <Form.Control type="number" value={numberOfCyclists} onChange={handleChange} name="numberOfCyclists" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" type="text" value={description} onChange={handleChange} name="description" />
                        </Form.Group>

                        <div className="d-grid">
                            <Button variant="dark" type="submit">Edit event</Button>
                        </div>

                    </Form>

                </Col>
            </Row>

        </Container>

    )
}

export default EventEditForm