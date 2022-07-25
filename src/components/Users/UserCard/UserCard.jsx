import './UserCard.css'
import { Card, Button } from 'react-bootstrap'
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
            <Card className="card-client mb-4">
                <Card.Img className='user-photo' variant="top" src={profilePic} />
                <Card.Body>
                    <Card.Title>{username}</Card.Title>
                    <p>My role is {role} </p>
                    <div class="social-media">
                    </div>
                    <Link to={`/account/details/${_id}`}>
                        <div className="d-grid">
                            <Button >Show details</Button>
                        </div>
                    </Link>
                    {/* <Link to={`/account/delete/${_id}`}>
                        <div className="d-grid">
                            <Button onClick={handleDelete} variant="danger" size="sm" as="div">Delete</Button>
                        </div>
                    </Link> */}


                    <Link to={`/account/delete/${_id}`}>
                        <div class='delete'>
                            <button onClick={handleDelete} class="noselect"><span class="text">Delete</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>
                        </div>
                    </Link>
                </Card.Body>
            </Card >

        </>
    )
}

export default UserCard