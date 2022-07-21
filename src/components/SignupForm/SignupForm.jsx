import { useContext, useState } from "react"
import { Form, Button } from "react-bootstrap"
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


    const { username, bio, profilePic, password, email, role } = signupData

    return (


        // encType = { "multipart/form-data"}
        <Form onSubmit={handleSubmit} >

            <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" value={username} onChange={handleInputChange} name="username" />
            </Form.Group>


            <Form.Group className="mb-3" controlId="bio">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" type="text" value={bio} onChange={handleInputChange} name="bio" />
            </Form.Group>


            {/* <Form.Group className="mb-3" controlId="profilePic">
                <Form.Label>Avatar</Form.Label>
                <Form.Control type="file" value={profilePic} onChange={handleInputChange} name="profilePic" />
            </Form.Group> */}

            <Form.Group className="mb-3" controlId="imageUrl">
                <Form.Label>Avatar</Form.Label>
                <Form.Control type="file" onChange={handleFileInput} name="profilePic" />
            </Form.Group>


            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={password} onChange={handleInputChange} name="password" />
            </Form.Group>


            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={email} onChange={handleInputChange} name="email" />
            </Form.Group>


            <Form.Group className="mb-3">
                <Form.Label>Select role</Form.Label>
                <Form.Select >
                    <option value={'CYCLIST'} name='role'>Cyclist</option>
                    <option value={'SPONSOR'} name='role'>Sponsor</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="Send me special offers" />
            </Form.Group>


            <div className="d-grid">
                <Button variant="dark" type="submit">Sign Up</Button>
            </div>

        </Form>
    )
}

export default SignupForm
