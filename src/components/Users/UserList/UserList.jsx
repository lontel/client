import { Row, Col } from 'react-bootstrap'
import UserCard from "../UserCard/UserCard"


const UserList = ({ users }) => {

    return (
        <Row>
            {
                users.map(user => {
                    return (
                        <Col md={3} key={user._id} >
                            <UserCard {...user} />
                        </Col>
                    )

                })
            }
        </Row>
    )
}

export default UserList