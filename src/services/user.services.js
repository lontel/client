import axios from 'axios'

class UserService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/account`
        })
        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }


    getUsers() {
        return this.api.get('/getAllAccounts')
    }

    getOneUser(account_id) {
        return this.api.get(`/getOneAccount/${account_id}`)
    }

    editUser(account_id, accountData) {
        console.log('edit desde servicio user')
        return this.api.put(`/updateAccount/${account_id}`, accountData)
    }

    deleteUser(account_id) {
        return this.api.delete(`/deleteAccount/${account_id}`)
    }

}


const userService = new UserService()
export default userService