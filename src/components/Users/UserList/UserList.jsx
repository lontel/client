import { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import userService from '../../../services/user.services'
import Loader from '../../Loader/Loader'
import UserCard from "../UserCard/UserCard"


const UserList = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        userService
            .getUsers()
            .then(({ data }) => setUsers(data))
            .catch(err => console.log(err))
    }, [])


    return (

        <>

            {
                users.length ?
                    < Row >
                        {
                            users.map(user => {
                                return (
                                    <Col md={3} key={user._id} >
                                        <UserCard {...user} />
                                    </Col>
                                )

                            })
                        }
                    </Row >
                    :
                    <Loader />
            }

        </>

    )
}

export default UserList