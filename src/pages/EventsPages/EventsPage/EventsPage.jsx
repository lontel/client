import { useState, useEffect } from "react";
import eventService from "../../../services/event.services";
import EventList from "../../../components/Events/EventList/EventList";
import Loader from "../../../components/Loader/Loader";

const EventListPage = () => {

    const [events, setEvents] = useState([])

    useEffect(() => {

        eventService
            .getEvents()
            .then(({ data }) => setEvents(data))
            .catch(err => console.log(err))
    }, [])

    return (
        events.length
            ?
            <EventList events={events} />
            :
            < Loader />
    )
}

export default EventListPage