import { useState, useEffect } from "react";
import userService from "../../services/user.services";
import UserList from "../../components/Users/UserList/UserList";
import { Spinner } from "react-bootstrap";
import Loader from "../../components/Loader/Loader";

const UserListPage = () => {

    const [users, setUsers] = useState([])
    console.log(users)
    useEffect(() => {

        userService
            .getUsers()
            .then(({ data }) => setUsers(data))
            .catch(err => console.log(err))
    }, [])

    return (
        users.length
            ?
            <UserList users={users} />
            :
            < Loader />
    )
}

export default UserListPage