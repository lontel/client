import './UserCard.css'
import { Card, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import userService from '../../../services/user.services'

const UserCard = ({ username, role, profilePic, _id }) => {

    const navigate = useNavigate()

    const handleDelete = () => {
console.log('este es el id de que se tiene que borrar', _id)
        userService
            .deleteUser(_id)
            .then(() => navigate('/users'))
            .catch(err => console.error(err))
    }

    return (

        <Card className="UserCard mb-4">
            <Card.Img variant="top" src={profilePic} />
            <Card.Body>
                <Card.Title>{username}</Card.Title>
                <p>My role is {role} </p>
                <Link to={`/account/details/${_id}`}>
                    <div className="d-grid">
                        <Button variant="dark" size="sm" as="div">Show details</Button>
                    </div>
                    <Link to={`/account/delete/${_id}`}>
                        <div className="d-grid">
                            <Button onClick={handleDelete} variant="danger" size="sm" as="div">Delete</Button>
                        </div>
                    </Link>
                </Link>
            </Card.Body>
        </Card >

    )
}

export default UserCard