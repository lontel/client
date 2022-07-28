import './MyProfilePage.css'

import { useEffect } from "react"
import { useState } from "react"
import { Button, Card, Col, Row, Container } from "react-bootstrap"
import { useParams, Link } from "react-router-dom"
import userService from "../../services/user.services"

const MyProfilePage = () => {

    const { account_id } = useParams()
    const [profileData, setProfileData] = useState({
        username: '',
        bio: '',
        profilePic: '',
        email: '',
        role: ''

    })

    const { username, email, bio, role, profilePic } = profileData
    useEffect(() => {
        loadUser()
    }, [])

    const loadUser = () => {
        userService
            .getProfile(account_id)
            .then(({ data }) => setProfileData(data))
            .catch(err => console.log(err))
    }
    return (role === 'ADMIN' ?
        <>
            <Container>
                <Row>
                

                    <Col md={{  offset: 3 }}>

                        <Card className='user-card' style={{ width: '38rem' }}>
                            <Card.Body>
                                <Card.Title>Welcome to your profile, {username}</Card.Title>
                                <Card.Text>Email address: {email}</Card.Text>
                                <Card.Img className='img' src={profilePic} />
                                <Link to={`/account/edit/${account_id}`}>
                                    <Button className='button' >Edit profile</Button>
                                </Link>
                                <Link to={`/users`}>
                                    <Button className='button'>All users</Button>
                                </Link>
                                <Link to='/'>
                                    <Button className='button'>Back</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
           
        </>
        :
        <>
            <Container>
                <Row>


                    <Col md={{ offset: 3 }}>

                        <Card className='user-card' style={{ width: '38rem' }}>
                            <Card.Body>
                                <Card.Title>Welcome to your profile, {username}</Card.Title>
                                <Card.Text>Email address: {email}</Card.Text>
                            <Card.Img className='img' src={profilePic} />
                                <Link to={`/account/edit/${account_id}`}>
                                    <Button className='button' >Edit profile</Button>
                                </Link>
                                
                                <Link to='/'>
                                    <Button className='button'>Back</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
    
        </>
    )

}

export default MyProfilePage