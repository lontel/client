import axios from 'axios'

class MapsService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/auth`
        })
    }

    getOneMap(event_id) {
        return this.api.get(`/map/${event_id}`, event_id)
    }

}

const mapsService = new MapsService()

export default mapsService