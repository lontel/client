import { useState } from "react"
import { Form, Button, Row, Col } from 'react-bootstrap'
import eventService from "../../../services/event.services"
import { useNavigate } from 'react-router-dom'
import uploadService from "../../../services/upload.services"


const EventForm = ({ closeModal, loadEvents }) => {

    const [eventData, setEventData] = useState({
        origin: '',
        destination: '',
        description: '',
        eventPic: '',
        startTime: '',
        date: ''
    })

    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const handleChange = e => {
        const { value, name } = e.target
        setEventData({ ...eventData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()

        eventService
            .saveEvent(eventData)
            .then(() => loadEvents())
            .catch(err => console.error(err))
    }

    const handleFileInput = e => {

        setIsLoading(true)

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadService
            .uploadimage(formData)
            .then(({ data }) => {
                setIsLoading(false)
                setEventData({ ...eventData, eventPic: data.cloudinary_url })
            })
            .catch(err => console.error(err))
    }

    const { origin, destination, description, startTime, date } = eventData

    return (

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
                    <Form.Group className="mb-3" controlId="startTime">
                        <Form.Label>Start Time</Form.Label>
                        <Form.Control type="text" value={startTime} onChange={handleChange} name="startTime" />
                    </Form.Group>
                </Col>
            </Row>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" type="text" value={description} onChange={handleChange} name="description" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="imageUrl">
                <Form.Label>Event Photos</Form.Label>
                <Form.Control type="file" onChange={handleFileInput} name="eventPic" />
            </Form.Group>

            <div className="d-grid">
                <Button variant="dark" onClick={closeModal} type="submit">Create new event</Button>
            </div>

        </Form>

    )
}

export default EventForm