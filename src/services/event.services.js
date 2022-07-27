import axios from 'axios'

class EventService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/event`
        })
        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }


    getEvents() {
        return this.api.get('/getAllEvents')
    }

    getOneEvent(event_id) {

        return this.api.get(`/getOneEvent/${event_id}`)
    }

    saveEvent(eventData) {
        return this.api.post('/saveEvent', eventData)
    }

    editEvent(event_id, eventData) {
        return this.api.put(`/updateEvent/${event_id}`, eventData)
    }

    deleteEvent(event_id) {
        return this.api.delete(`/deleteEvent/${event_id}`)
    }

    joinEvent(event_id) {
        return this.api.put(`/${event_id}/join`)
    }

    filterEvents(query) {
        return this.api.get(`/filterEvents?from_to=${query}`)
    }

}

const eventService = new EventService()

export default eventService