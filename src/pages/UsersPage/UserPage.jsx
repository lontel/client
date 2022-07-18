import { useState } from "react";
import { useEffect } from "react";
import userService from "../../services/user.services";

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


        users.map(({ username, role }) => <p> Este es : {username} con role {role}</p>)


    )
}

export default UserListPage