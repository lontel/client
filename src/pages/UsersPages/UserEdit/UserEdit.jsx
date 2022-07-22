import { Container, Row, Col } from 'react-bootstrap'
import UserEditForm from '../../../components/Users/UserEditForm/UserEditForm'

const UserEdit = () => {
    return (
        <Container>

            <Row>

                <Col md={{ offset: 3, span: 6 }}>

                    <h1>Edit user</h1>

                    <hr />

                    <UserEditForm />

                </Col>
            </Row>

        </Container>

    )

}

export default UserEdit