import axios from 'axios'

class UserService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/account`
        })
    }


    getUsers() {
        return this.api.get('/getAllAccounts')
    }

    getOneUser(account_id) {
        return this.api.get(`/getOneAccount/${account_id}`)
    }

    editUser(account_id) {
        return this.api.put(`/edit/${account_id}`)
    }  

    // deleteUser(account_id) {
    //     return this.api.delete(`/delete/${account_id}`)
    // }
}


const userService = new UserService()
export default userService