import { Row, Col, Modal } from 'react-bootstrap'
import EventCard from '../EventCard/EventCard'
import { useState, useEffect } from 'react'
import EventForm from '../EventForm/EventForm'
import eventService from '../../../services/event.services'
import Loader from '../../Loader/Loader'
import SearchBar from '../../SearchBar/SearchBar'


const EventList = () => {

    const [events, setEvents] = useState([])
    const [copyEvents, copySetEvents] = useState([])
    const [showModal, setShowModal] = useState(false)


    const filterEvent = letter => {

        if (letter === '') {
            setEvents(copyEvents)
        }
        else {
            const filteredEvents = copyEvents.filter(elm => elm.origin.address.startsWith(letter))
            copySetEvents(filteredEvents)

        }

    }

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)


    useEffect(() => {
        // copySetEvents()
        loadEvents()
    }, [])

    const loadEvents = () => {
        eventService
            .getEvents()
            .then(({ data }) => {
                setEvents(data)
                copySetEvents(data)
            })
            .catch(err => console.log(err))
    }


    return (

        <>
            {
                events.length ?
                    <Row>

                        <h1>List of events <span onClick={openModal}>+</span></h1>
                        <hr></hr>
                        <SearchBar filterEvent={filterEvent} />
                        {
                            events.map(event => {
                                return (
                                    <Col md={3} key={event._id}>
                                        <Col  >
                                            <EventCard {...event} filterEvent={filterEvent} loadEvents={loadEvents} events={copyEvents} />
                                        </Col>
                                    </Col>
                                )

                            })
                        }

                        <Modal show={showModal} onHide={closeModal}>
                            <Modal.Header closeButton>
                                <Modal.Title>New Event</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <EventForm closeModal={closeModal} loadEvents={loadEvents} />
                            </Modal.Body>
                        </Modal>

                    </Row>
                    :
                    < Loader />
            }
        </>
    )

}

export default EventList