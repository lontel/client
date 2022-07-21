import { useState, useEffect } from "react";
import eventService from "../../../services/event.services";
import EventList from "../../../components/Events/EventList/EventList";
import Loader from "../../../components/Loader/Loader";


const EventListPage = () => {

    const [events, setEvents] = useState([])
    const [showModal, setShowModal] = useState(false)


    useEffect(() => {
        loadEvents()
    }, [])

    const loadEvents = () => {
        eventService
            .getEvents()
            .then(({ data }) => setEvents(data))
            .catch(err => console.log(err))
    }

    return (

        events.length
            ?
            <EventList events={events} refreshEvents={loadEvents} />
            :
            < Loader />
    )
}

export default EventListPage