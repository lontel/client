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

        console.log('------------', event_id)
        return this.api.get(`/getOneEvent/${event_id}`)
    }

    saveEvent(eventData) {
        return this.api.post('/saveEvent', eventData)
    }

    editEvent(event_id) {
        return this.api.put(`/updateEvent/${event_id}`)
    }

    deleteEvent(event_id) {
        return this.api.delete(`/deleteEvent/${event_id}`)
    }


}

const eventService = new EventService()

export default eventService