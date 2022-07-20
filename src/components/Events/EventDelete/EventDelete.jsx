import eventService from "../../../services/event.services"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const EventDelete = () => {

    const { id } = useParams()

    const navigate = useNavigate()

    eventService
        .deleteEvent(id)
        .then(() => {
            navigate('/')
        })
        .catch(err => console.error(err))

}

export default EventDelete