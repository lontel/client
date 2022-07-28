import './EventList.css'
import { Row, Col, Modal, Image } from 'react-bootstrap'
import EventCard from '../EventCard/EventCard'
import { useState, useEffect } from 'react'
import EventForm from '../EventForm/EventForm'
import eventService from '../../../services/event.services'
import SearchBar from '../../SearchBar/SearchBar'

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
                    <Col>
                        <h1 className='title-listEvents'>List of events</h1>

                        <button className="cssbuttons-io-button"> <span onClick={openModal} className='addPlus' >+ Add</span></button>
                    </Col>
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
                            <h1 className='event-notFound' >Ohhhh no... no event was found</h1>
                            <Image src='./../../images/search.gif' className='searchImg' />
                        </>

                    }

                    <Modal show={showModal} onHide={closeModal}>
                        <Modal.Header className='modal-global' closeButton>
                            <Modal.Title>New Event</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className='modal-body'>
                            <EventForm closeModal={closeModal} loadEvents={loadEvents} />
                        </Modal.Body>
                    </Modal>

                </Row>

            }
        </>
    )

}

export default EventList