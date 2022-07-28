import './UsersJoined.css'
import { useState, useEffect } from "react"
import { Card, Col, Row, Container } from "react-bootstrap"
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

        // <Card id='users-card'>
        //     <Card.Body>
        //         <>
        //             <img src={currentUser?.profilePic} />
        //             <p>{currentUser?.username}</p>
        //         </>
        //     </Card.Body>
        // </Card >


        <Card className="card-client mb-4" id='users-card'>
            <Card.Img src={currentUser?.profilePic} />
            <Card.Body>
                <Card.Title>{currentUser?.username}</Card.Title>
                <p>{currentUser?.bio} </p>
            </Card.Body>
        </Card >


    )
}

export default UsersJoined