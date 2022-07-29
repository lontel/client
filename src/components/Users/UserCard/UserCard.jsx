import './UserCard.css'
import { Card, Button, Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import userService from '../../../services/user.services'


const UserCard = ({ username, role, profilePic, _id }) => {

    const navigate = useNavigate()

    const handleDelete = () => {

        userService
            .deleteUser(_id)
            .then(() => navigate('/users'))
            .catch(err => console.error(err))
    }

    return (
        <>
            <Container>

                <Card className="card-client mb-4" id='users-card'>
                    <Card.Img className='user-photo' variant="top" src={profilePic} />
                    <Card.Body>
                        <Card.Title>{username}</Card.Title>
                        <p>My role is {role} </p>
                        <div className="social-media">
                        </div>
                        <Link to={`/account/details/${_id}`}>
                            <div className="d-grid">
                                <Button >Show details</Button>
                            </div>
                        </Link>
                        <Link to={`/account/delete/${_id}`}>
                            <div className='delete'>
                                <button onClick={handleDelete} className="user-card-delete"><span ><img className='trash' src='./../../images/trash.jpeg'></img> Delete</span><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"></svg></span></button>
                            </div>
                        </Link>
                    </Card.Body>
                </Card >

            </Container>

        </>
    )
}

export default UserCard