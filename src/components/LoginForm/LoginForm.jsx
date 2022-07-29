import './LoginForm.css'
import { useContext, useState } from "react"
import { Form, Button, Container } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import authService from './../../services/auth.services'
import { MessageContext } from './../../contexts/userMessage.context'
import { AuthContext } from "../../contexts/auth.context"


const LoginForm = () => {

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const { setShowMessage } = useContext(MessageContext)
    const { storeToken, authenticateUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleInputChange = e => {
        const { value, name } = e.target
        setLoginData({ ...loginData, [name]: value })
    }


    const handleSubmit = e => {
        e.preventDefault()

        authService
            .login(loginData)
            .then(({ data }) => {
                storeToken(data.authToken)
                authenticateUser()
                setShowMessage({ show: true, title: `Welcome! ${loginData.email}`, text: 'You have succesfully login!' })
                navigate('/')
            })
            .catch(err => {
                setShowMessage({ show: true, title: `Error`, text: 'Please check your email and password and try again!' })
                console.log(err)
            })
    }


    const { password, email } = loginData

    return (
        <Container>
            <Form onSubmit={handleSubmit} id="container">
                <h2>Log In</h2>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label className='input-email-name'>Email</Form.Label>
                    <Form.Control className="input" type="email" value={email} onChange={handleInputChange} name="email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className="input" type="password" value={password} onChange={handleInputChange} name="password" />
                </Form.Group>

                <Form.Group className="d-grid">
                    <Button variant="dark" type="submit">Login</Button>
                </Form.Group>

            </Form>

        </Container>


    )
}

export default LoginForm