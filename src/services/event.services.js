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

    saveEvent(eventData) {
        return this.api.post('/saveEvent', eventData)
    }


}

const eventService = new EventService()

export default eventService