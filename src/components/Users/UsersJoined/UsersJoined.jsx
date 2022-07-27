import { useState, useEffect } from "react"
import { Card } from "react-bootstrap"
import userService from "../../../services/user.services"


const UsersJoined = ({ _id }) => {

    const [currentUser, setCurrentUser] = useState()

    useEffect(() => {

        userService
            .getOneUser(_id)
            .then(({ data }) => setCurrentUser(data))
            .catch(err => console.log(err))
    }, [])



    return (
        <Card className="UserCard mb-4">
            <Card.Body>
                <>
                    <img src={currentUser?.profilePic} />
                    <p>{currentUser?.username}</p>
                </>
            </Card.Body>
        </Card >
    )
}

export default UsersJoined