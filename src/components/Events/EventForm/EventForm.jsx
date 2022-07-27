import { useState } from "react"
import { Form, Button, Row, Col } from 'react-bootstrap'
import eventService from "../../../services/event.services"
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

        const formData = new FormData()

        for (let i = 0; i < e.target.files.length; i++) {
            formData.append('imagesData', e.target.files[i])
        }

        uploadService
            .uploadimages(formData)
            .then(({ data }) => {
                console.log(data)
                setEventData({ ...eventData, eventPic: data.cloudinary_urls })
            })
            .catch(err => console.log(err))

    }

    const { origin, destination, description, startTime, date } = eventData

    return (

        <Form onSubmit={handleSubmit} encType="multipart/form-data">

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
                        <Form.Control type="time" value={startTime} onChange={handleChange} name="startTime" />
                    </Form.Group>
                </Col>
            </Row>

            <Form.Group className="mb-3" controlId="imageUrl">
                <Form.Label>Event Photos</Form.Label>
                <Form.Control type="file" onChange={handleFileInput} name="eventPic" multiple />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" type="text" value={description} onChange={handleChange} name="description" />
            </Form.Group>

            <Form.Group className="d-grid">
                <Button variant="dark" onClick={closeModal} type="submit">Create new event</Button>
            </Form.Group>

        </Form>

    )
}

export default EventForm