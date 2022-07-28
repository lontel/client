import './SignupForm.css'
import { useContext, useState } from "react"
import { Form, Button, Container, Row, Col } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import authService from './../../services/auth.services'
import uploadServices from "../../services/upload.services"
import { MessageContext } from './../../contexts/userMessage.context'


const SignupForm = () => {

    const [signupData, setSignupData] = useState({
        username: '',
        bio: '',
        profilePic: '',
        password: '',
        email: '',
        role: 'CYCLIST'

    })

    const [isLoading, setIsLoading] = useState(false)

    const { setShowMessage } = useContext(MessageContext)
    const navigate = useNavigate()

    const handleInputChange = e => {
        const { value, name } = e.target
        setSignupData({ ...signupData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()

        authService
            .signup(signupData)
            .then(({ data }) => {
                setShowMessage({
                    show: true, title: `Welcome, ${data.user.username}`, text: 'You have successfully registered'
                })
                navigate('/account/login')
            })
            .catch(err => console.log(err))
    }

    const handleFileInput = e => {

        setIsLoading(true)

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(({ data }) => {
                setIsLoading(false)
                setSignupData({ ...signupData, profilePic: data.cloudinary_url })
            })
            .catch(err => console.error(err))
    }


    const { username, bio, password, email, role } = signupData

    return (

        <Container>

            <Form onSubmit={handleSubmit} id="container-signup" className='width: 580'>
                <h2>Sign Up</h2>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label className='input-email-name'>Email</Form.Label>
                    <Form.Control className="input" type="email" value={email} onChange={handleInputChange} name="email" />
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control className="input" type="password" value={password} onChange={handleInputChange} name="password" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control className="input" type="text" value={username} onChange={handleInputChange} name="username" />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-3" controlId="bio">
                    <Form.Label>Description</Form.Label>
                    <Form.Control className="input" as="textarea" type="text" value={bio} onChange={handleInputChange} name="bio" />
                </Form.Group>

                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="imageUrl">
                            <Form.Label>Avatar</Form.Label>
                            <Form.Control className="input" type="file" onChange={handleFileInput} name="profilePic" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Select role</Form.Label>
                            <Form.Select onChange={handleInputChange} name="role">
                                <option className="input" value={'CYCLIST'}>Cyclist</option>
                                <option className="input" value={'SPONSOR'}>Sponsor</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group className="mb-3">
                    <Form.Check type="checkbox" label="Send me special offers" />
                </Form.Group>


                <Form.Group className="d-grid">
                    <Button variant="dark" type="submit">Sign Up</Button>
                </Form.Group>
            </Form>

        </Container>
    )
}

export default SignupForm
