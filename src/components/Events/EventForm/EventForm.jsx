import { useState } from "react"
import { Form, Button, Row, Col } from 'react-bootstrap'


const EventForm = () => {

    const [eventData, setEventData] = useState({
        origin: '',
        destination: '',
        description: '',
        numberOfCyclists: '',
        date: ''


    })



    const { origin, destination, description, numberOfCyclists, date } = eventData

    return (
        <Form >
            <Form.Group className="mb-3" controlId="origin">
                <Form.Label>Origin</Form.Label>
                <Form.Control type="text" value={origin} name="origin" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="destination">
                <Form.Label>Destination</Form.Label>
                <Form.Control type="text" value={destination} name="destination" />
            </Form.Group>

            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="date">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date" value={date} name="date" />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group className="mb-3" controlId="numberOfCyclists">
                        <Form.Label>NumberOfCyclists</Form.Label>
                        <Form.Control type="number" value={numberOfCyclists} name="numberOfCyclists" />
                    </Form.Group>
                </Col>
            </Row>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" value={description} name="description" />
            </Form.Group>

            <div className="d-grid">
                <Button variant="dark" type="submit">Create new event</Button>
            </div>

        </Form>
    )
}

export default EventForm