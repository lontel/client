import axios from 'axios'

class UserService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/users`
        })
    }


    getCoasters() {
        return this.api.get('/getAllAccounts')
    }

}

const userService = new UserService()

export default userService