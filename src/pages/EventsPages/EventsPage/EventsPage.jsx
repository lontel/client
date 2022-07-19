import { useState, useEffect } from "react";
import eventService from "../../../services/event.services";
import EventList from "../../../components/Events/EventList/EventList";
import Loader from "../../../components/Loader/Loader";
import { Container, Modal } from 'react-bootstrap'

const EventListPage = () => {

    const [events, setEvents] = useState([])
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {

        eventService
            .getEvents()
            .then(({ data }) => setEvents(data))
            .catch(err => console.log(err))
    }, [])

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    return (

        events.length
            ?
            <EventList events={events} />
            :
            < Loader />
    )
}

export default EventListPage