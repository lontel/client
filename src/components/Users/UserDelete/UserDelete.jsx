import userService from "../../../services/user.services"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const UserDelete = () => {

    const { _id } = useParams()

    const navigate = useNavigate()

    userService
        .deleteUser(_id)
        .then(() => {
            navigate('/users')
        })
        .catch(err => console.error(err))

}

export default UserDelete