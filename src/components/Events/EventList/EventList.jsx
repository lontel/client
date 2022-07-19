import { Row, Col } from 'react-bootstrap'
import EventCard from '../EventCard/EventCard'
import { Container, Modal } from 'react-bootstrap'
import { useState } from 'react'
import EventForm from '../EventForm/EventForm'


const EventList = ({ events }) => {

    const [showModal, setShowModal] = useState(false)

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    return (
        <Row>
            <h1>List of events <span onClick={openModal}>+</span> </h1>
            <hr></hr>
            {
                events.map(event => {
                    return (
                        <>
                            <Col md={3} key={event._id} >
                                <EventCard {...event} />
                            </Col>

                            <Modal show={showModal} onHide={closeModal}>
                                <Modal.Header closeButton>
                                    <Modal.Title>New Event</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <EventForm closeModal={closeModal} /* Ojo! refreshCoasters={loadCoasters} */ />
                                </Modal.Body>
                            </Modal>
                        </>
                    )

                })
            }
        </Row>
    )
}

export default EventList