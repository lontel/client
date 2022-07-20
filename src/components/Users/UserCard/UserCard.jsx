import './UserCard.css'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const UserCard = ({ username, role, profilePic, _id }) => {

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
                            <Button variant="danger" size="sm" as="div">Delete</Button>
                        </div>
                    </Link>
                </Link>
            </Card.Body>
        </Card >
    )
}

export default UserCard