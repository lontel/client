import userService from "../../services/user.services"
import { useEffect, useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"

const UserDetails = () => {

    const [user, setUser] = useState([])

    const { account_id } = useParams()

    useEffect(() => {

        userService
            .getOneUser(account_id)
            .then(({ data }) => setUser(data))
            .catch(err => console.error(err))
    }, [])

    return (

        <Container>
            {
                // !user                 esto será el spinner
                //     ?
                //     <Loader />
                //     :
                <>
                    <h1>Details of  {user.username}</h1>
                    <hr />

                    <Row>

                        <Col md={{ span: 6 }}>
                            <h3>My description:</h3>
                            <p>{user.bio}</p>
                            <ul>
                                <li>My email: {user.email}</li>
                            </ul>
                            <hr />

                            <Link to="/">
                                <Button as="div" variant="dark">Back to user list</Button>
                            </Link>
                        </Col>

                        <Col md={{ span: 4 }}>
                            <img src={user.profilePic} style={{ width: '100%' }} />
                        </Col>

                    </Row>
                </>
            }

        </Container>

    )
}

export default UserDetails