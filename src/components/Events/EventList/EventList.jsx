import { Row, Col, Modal } from 'react-bootstrap'
import EventCard from '../EventCard/EventCard'
import { useState, useEffect, useContext } from 'react'
import EventForm from '../EventForm/EventForm'
import eventService from '../../../services/event.services'
import SearchBar from '../../SearchBar/SearchBar'
import './EventList.css'

const EventList = () => {

    const [events, setEvents] = useState([])
    const [showModal, setShowModal] = useState(false)


    const filteredEvents = e => {

        eventService
            .filterEvents(e.target.value)
            .then(({ data }) => {
                setEvents(data)
            })
            .catch(err => console.log(err))

    }

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    useEffect(() => {
        loadEvents()
    }, [])

    const loadEvents = () => {
        eventService
            .getEvents()
            .then(({ data }) => {
                setEvents(data)
            })
            .catch(err => console.log(err))
    }

    return (

        <>
            {
                <Row>

                    <h1>List of events <span onClick={openModal} className='addPlus' >+</span></h1>
                    <hr></hr>
                    <SearchBar filterEvents={filteredEvents} />
                    {events.length ?

                        events.map(event => {
                            return (
                                <Col md={3} key={event._id}>
                                    <Col  >
                                        <EventCard {...event} />
                                    </Col>
                                </Col>
                            )

                        })

                        :
                        <>
                            <h1>Ohhhh no... no event was found</h1>
                            <img src='./../../images/search.gif' className='searchImg' />
                        </>

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

            }
        </>
    )

}

export default EventList